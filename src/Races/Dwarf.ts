import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instances: number;
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instances += 1;
  }

  public get maxLifePoints() {
    return this._maxLifePoints;
  } 

  public static createdRacesInstances() {
    return Dwarf._instances;
  }
}