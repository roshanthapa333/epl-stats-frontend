"use client";
import { PlayerStatType, TeamStatGoalsType, TeamStatType } from "@/types";
import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ScriptableContext,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  getBarCharOptions,
  horizontalBarCharOptions,
} from "@/config/chartConfigs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export type TeamsStatsProps = {
  teamStats: TeamStatType[];
  playerStats: PlayerStatType[];
  teamStatsGoals: TeamStatGoalsType[];
};

const StatsComponent = ({
  teamStats,
  playerStats,
  teamStatsGoals,
}: TeamsStatsProps) => {
  const teamStatsData = {
    labels: teamStats.map(({ teamName }) => teamName),
    datasets: [
      {
        label: "Points",
        data: teamStats.map(({ points }) => points),
        backgroundColor: "rgba(53, 162, 235, 1)",
      },
      {
        label: "Match played",
        data: teamStats.map(({ matchPlayed }) => matchPlayed),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  const teamStatsGoalsData = {
    labels: teamStatsGoals.map(({ teamName }) => teamName),
    datasets: [
      {
        label: "Goals scored",
        data: teamStatsGoals.map(({ goals }) => goals),
        backgroundColor: (context: ScriptableContext<"bar">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "#00cc00");
          gradient.addColorStop(1, "#ff6600");
          return gradient;
        },
      },
    ],
  };

  const playerStatsData = {
    labels: playerStats.map(({ playerName }) => playerName),
    datasets: [
      {
        label: "Goals scored",
        data: playerStats.map(({ goals }) => goals),
        backgroundColor: "rgb(21 178 21)",
      },
    ],
  };

  const teamStatsChartOptions = useMemo(
    () =>
      getBarCharOptions({
        title: "Top 10 Teams",
        xAxisTitle: "Team names",
        yAxisTitle: "Points | Match Played",
      }),
    []
  );
  const playerStatsChartOptions = useMemo(
    () =>
      getBarCharOptions({
        title: "Top 10 Players",
        xAxisTitle: "Player names",
        yAxisTitle: "Goals",
      }),
    []
  );
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex flex-col items-center gap-10 w-full lg:w-4/5 2xl:max-w-6xl">
        <Bar options={teamStatsChartOptions} data={teamStatsData} />
      </div>
      <div className="flex flex-col items-center gap-10 w-full lg:w-4/5 2xl:max-w-6xl">
        <Bar options={horizontalBarCharOptions} data={teamStatsGoalsData} />
      </div>
      <div className="flex flex-col items-center gap-10 w-full lg:w-4/5 2xl:max-w-6xl">
        <Bar options={playerStatsChartOptions} data={playerStatsData} />
      </div>
    </div>
  );
};

export default StatsComponent;
