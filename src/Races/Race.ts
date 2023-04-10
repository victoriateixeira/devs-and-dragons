export default class Race {
  private _name: string;
  private _dexterity: number;
  private static _instances: number;
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    Race._instances += 1;
    return Race._instances;
  }
}