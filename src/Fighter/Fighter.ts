import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  attack(): void;
  special?(): void;
  levelUp(): void;
  receiveDemage(): number;
}