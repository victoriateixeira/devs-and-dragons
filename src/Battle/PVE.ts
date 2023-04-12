import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _environment: SimpleFighter[];

  constructor(player: Fighter, environment: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._environment = environment;
  }

  fight(): number {
    while (this.player.lifePoints > -1
  || this._environment.some((oponent) => oponent.lifePoints > -1)) {
      this._player.attack(
        this._environment[getRandomInt(1, (this._environment.length - 1))],
      );
      this._environment[getRandomInt(1, (this._environment.length - 1))]
        .attack(this._player);
      if (this.player.lifePoints === -1
         || this._environment.every((oponent) => oponent.lifePoints === -1)) {
        break;
      }
    }
    return super.fight();
  }
}