import { RowDataPacket } from 'mysql2';

export default interface ICompagny extends RowDataPacket {
  id: number;
  compagnyName: string;
}
