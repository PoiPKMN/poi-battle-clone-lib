import { Pokemon } from "../../pokemon/pokemon";

export class GameManager {
  whichPokemonCanGo: Pokemon;

  protected calcDamage(attacker: Pokemon, defenders: Pokemon[]): number {
    let effectiveness = null; //TODO
    let burn = null; //TODO
    let screen = null; //TODO
    let targets = null; //TODO
    let weather = null; //TODO
    let flashFire = null; //TODO
    let critical = null; //TODO
    let item = null; //TODO
    let first = null; //TODO
    let stab = null; //TODO
    let type1 = null; //TODO
    let type2 = null; //TODO
    let solidRockOrFilter = null //TODO
    let expertBelt = null; //TODO
    let tintedLens = null; //TODO
    let berry = null; //TODO

    let mainPortion/* = ((((2 * level) / 5) + 2) * effectiveness * (att / def)) / 50*/;
    const initialModifiers =
      mainPortion *
      burn *
      screen *
      targets *
      weather *
      flashFire + 2;
    const secondaryModifiers =
      initialModifiers *
      critical *
      item *
      first *
      Math.random() *
      stab *
      type1 *
      type2 *
      solidRockOrFilter *
      expertBelt *
      tintedLens *
      berry;

    return secondaryModifiers
  }
}
