import connection from '../db-config';
import ICompagny from '../interfaces/ICompagny';
// import { ResultSetHeader } from 'mysql2';
// import { NextFunction, Request, Response } from 'express';
// import { ErrorHandler } from '../helpers/errors';

const getAllCompagnys = async (sortBy = ''): Promise<ICompagny[]> => {
  let sql = `SELECT * FROM compagnyName`;
  if (sortBy) {
    sql += ` ORDER BY ${sortBy}`;
  }
  const results = await connection.promise().query<ICompagny[]>(sql);

  return results[0];
};

export { getAllCompagnys };
