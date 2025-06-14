import { players } from "../data/players";
import { PlayerModel } from "../models/player_model";
import { PlayerStatisticsModel } from "../models/player_statistics";


export const getAllPlayers = async (): Promise<PlayerModel[]> => {
    return players;
}

export const getPlayerById = async (playerId: number): Promise<PlayerModel | undefined> => {
    const player = players.find(player => player.id == playerId);
    return player;
}

export const postPlayer = async (player: PlayerModel) => {
    players.push(player);
}

export const deletePlayer = async (id: number) => {
    const index = players.findIndex((player) => player.id == id);
    if (index != -1) {
        players.splice(index, 1);
        return true;
    }
    return false;
}
export const updatePlayer = async (id: number, statistics: PlayerStatisticsModel) => {
    const index = players.findIndex((player) => player.id == id);
    if (index != -1) {
        players[index].statistics = statistics;
        return players[index];
    }
    return;
}

