import { RowDataPacket } from 'mysql2';

export default interface IGame extends RowDataPacket {
  id: number;
  gameName: string;
  gameYear: Date;
  gameDesc: string;
  gameSales: number;
  gameImage: string;
  gameCompagny: number;
}
