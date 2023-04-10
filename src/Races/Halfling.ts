import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instances += 1;
  }

  public get maxLifePoints() {
    return this._maxLifePoints;
  } 

  public static createdRacesInstances() {
    return Halfling._instances;
  }
}
export default Halfling;