import { NextFunction, Request, RequestHandler, Response } from 'express';
import * as Game from '../models/game';
import { formatSortString } from '../helpers/functions';

const getAllGames = (async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sortBy: string = req.query.sort as string;
    const games = await Game.getAllGames(formatSortString(sortBy));

    res.setHeader(
      'Content-Range',
      `products : 0-${games.length}/${games.length + 1}`
    );
    return res.status(200).json(games);
  } catch (err) {
    next(err);
  }
}) as RequestHandler; // Used to avoid eslint error

const getOneGame = (async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { idGame } = req.params;
    const game = await Game.getGameById(Number(idGame));
    game ? res.status(200).json(game) : res.sendStatus(404);
  } catch (err) {
    next(err);
  }
}) as RequestHandler;

export default { getAllGames, getOneGame };
