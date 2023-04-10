import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._instances += 1;
  }

  public get maxLifePoints() {
    return this._maxLifePoints;
  } 

  public static createdRacesInstances() {
    return Orc._instances;
  }
}
export default Orc;