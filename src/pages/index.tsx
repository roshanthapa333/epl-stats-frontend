import { PlayerStatType, TeamStatGoalsType, TeamStatType } from "@/types";
import StatsComponent, { TeamsStatsProps } from "@/components/Stats";

async function getTeamStats() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/team-stats`, {
      cache: "no-cache",
    });
    const teamStatsData = await res.json();
    const res2 = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/player-stats`,
      {
        cache: "no-cache",
      }
    );
    return {
      teamsStats: (teamStatsData?.teamStats ?? []) as Promise<TeamStatType[]>,
      teamStatsGoals: (teamStatsData?.teamStatsGoals ?? []) as Promise<
        TeamStatGoalsType[]
      >,
      playerStats: (await res2.json()) as Promise<PlayerStatType[]>,
    };
  } catch (error) {
    return {
      teamStatsGoals: [],
      teamsStats: [],
      playerStats: [],
    };
  }
}

export default function Home({
  teamStats,
  playerStats,
  teamStatsGoals,
}: TeamsStatsProps) {
  return (
    <StatsComponent
      teamStats={teamStats}
      playerStats={playerStats}
      teamStatsGoals={teamStatsGoals}
    />
  );
}

export async function getServerSideProps() {
  const data = await getTeamStats();

  return {
    props: {
      teamStatsGoals: data.teamStatsGoals,
      teamStats: data.teamsStats,
      playerStats: data.playerStats,
    },
  };
}
