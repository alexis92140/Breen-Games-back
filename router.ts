import gamesController from './controllers/games';
import compagnysController from './controllers/compagnys';

import { Express } from 'express';

const setupRoutes = (server: Express) => {
  //// GAMES
  /// get all games
  server.get('/coucou', (req, res) => {
    res.send('hibou');
  });
  server.get('/api/legendgames', gamesController.getAllGames);

  /// get by id

  server.get('/api/legendgames/:idGame', gamesController.getOneGame);

  /// COMPAGNYS
  // server.get('/api/compagny', compagnysController.getAllCompagnys);
};

export default setupRoutes;
