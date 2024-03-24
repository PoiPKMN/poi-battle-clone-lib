import { assign } from "lodash";
import { Party } from "./party";

export class Team {
  party: Party;

  constructor(props: Partial<Team>) {
    assign(this, props);
  }
}
