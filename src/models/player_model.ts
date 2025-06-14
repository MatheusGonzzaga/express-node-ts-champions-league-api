import { PlayerStatisticsModel } from "./player_statistics";

export interface PlayerModel {
    id: number;
    name: string;
    club: string;
    nationality: string;
    position: string;
    statistics: PlayerStatisticsModel;
}