import Character from '../Character';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Character;
  private _player2: Character;
  constructor(player1: Character, player2: Character) {
    super(player1);
    super.fight();
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
      if (this._player1.lifePoints === -1 || this._player2.lifePoints === -1) {
        break;
      }
    }
    return super.fight();
  }
}