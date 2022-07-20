import { NextFunction, Request, RequestHandler, Response } from 'express';
import * as Compagny from '../models/compagny';
import { formatSortString } from '../helpers/functions';

const getAllCompagnys = (async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sortBy: string = req.query.sort as string;
    const compagnys = await Compagny.getAllCompagnys(formatSortString(sortBy));

    res.setHeader(
      'Content-Range',
      `products : 0-${compagnys.length}/${compagnys.length + 1}`
    );
    return res.status(200).json(compagnys);
  } catch (err) {
    next(err);
  }
}) as RequestHandler; // Used to avoid eslint error

export default getAllCompagnys;
