export type TeamStatType = {
  id: string;
  teamName: string;
  matchPlayed: number;
  points: number;
};

export type TeamStatGoalsType = {
  id: string;
  teamName: string;
  goals: number;
};

export type PlayerStatType = {
  id: string;
  playerName: string;
  teamName: string;
  goals: number;
};
