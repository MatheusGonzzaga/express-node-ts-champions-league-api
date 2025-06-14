import { Request, Response } from 'express';
import * as clubsService from '../services/clubs_service';

export const getClubs = async (req: Request, res: Response) => {
    const response = await clubsService.getClubs();
    res.status(response.statusCode).json(response.body);
}