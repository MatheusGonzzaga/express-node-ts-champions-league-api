import { Request, Response } from 'express';
import * as playersService from '../services/players_service';
import { PlayerStatisticsModel } from '../models/player_statistics';

export const getPlayers = async (req: Request, res: Response) => {
    const response = await playersService.getPlayers();
    res.status(response.statusCode).json(response.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const response = await playersService.getPlayerById(id);
    res.status(response.statusCode).json(response.body);
};

export const postPlayer = async (req: Request, res: Response) => {
    const newPlayer = req.body;
    const response = await playersService.postPlayer(newPlayer);
    res.status(response.statusCode).json(response.body);
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const response = await playersService.deletePlayer(id);
    res.status(response.statusCode).json(response.body);
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const statistics: PlayerStatisticsModel = req.body;
    const response = await playersService.updatePlayer(id, statistics);
    res.status(response.statusCode).json(response.body);
}

