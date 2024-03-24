import { Guid } from "guid-ts";

export interface Move {
  id: Guid;
  damage: number;
  accuracy: number;
  turnsToWait: number;
}
