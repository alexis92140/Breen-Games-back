import connection from '../db-config';
import IGame from '../interfaces/IGame';
// import { ResultSetHeader } from 'mysql2';
// import { NextFunction, Request, Response } from 'express';
// import { ErrorHandler } from '../helpers/errors';

const getAllGames = async (sortBy = ''): Promise<IGame[]> => {
  let sql = `SELECT * FROM legendgames`;
  if (sortBy) {
    sql += ` ORDER BY ${sortBy}`;
  }
  const results = await connection.promise().query<IGame[]>(sql);

  return results[0];
};

const getGameById = async (idGame: number): Promise<IGame> => {
  const [results] = await connection
    .promise()
    .query<IGame[]>('SELECT * FROM legendgames WHERE id = ?', [idGame]);
  return results[0];
};

export { getAllGames, getGameById };
