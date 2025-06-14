import { PlayerModel } from "../models/player_model";
import { PlayerStatisticsModel } from "../models/player_statistics";
import * as playerRepository from "../respositories/players_repository";
import * as httpHelper from "../utils/http_helper";

export const getPlayers = async () => {
  const players = await playerRepository.getAllPlayers();
  if (players) return await httpHelper.ok(players);
  return await httpHelper.noContent();
};

export const getPlayerById = async (id: number) => {
  const player = await playerRepository.getPlayerById(id);
  if (player) return await httpHelper.ok(player);
  return await httpHelper.notFound();
};

export const postPlayer = async (player: PlayerModel) => {
  if (player) {
    await playerRepository.postPlayer(player);
    return await httpHelper.created();
  }
  return await httpHelper.badRequest();
}
export const deletePlayer = async (id: number) => {
  const deleted = await playerRepository.deletePlayer(id);
  if (deleted) {
    return await httpHelper.ok({ message: "Deleted" });
  }
  return await httpHelper.notFound();
}

export const updatePlayer = async (id: number, statistics: PlayerStatisticsModel) => {
  const player = await playerRepository.updatePlayer(id, statistics);
  if (player != null) {
    return await httpHelper.ok(player);
  }
  return await httpHelper.notFound()

}

