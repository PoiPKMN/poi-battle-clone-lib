import { Guid } from "guid-ts";
import { Move } from "./move";
import { Stats } from "./stats";

export class Pokemon {
  id: Guid;
  level: number;
  moves: [Move, Move, Move, Move];
  stats: Stats;
  isShiny: boolean;

  constructor() {
    //TODO
  }
}
