import { IUniqueObject } from '../IUniqueObject';
import { IHash } from '../IHash';
import { IVector2 } from '../IVector2';

export enum CardType {
  Unknown = 'Unknown',
  Primitive = 'Primitive',
  Structure = 'Structure',
  Function = 'Function',
}

export enum FunctionType {
  Unknown = 'Unknown',
  System = 'System',
  Graph = 'Graph',
}

export interface ICard extends IUniqueObject {
  namespace: string;
  fullId: string;
  cardType: CardType;

  typeId?: string;
  valueId?: string;
}

export interface IPrimitive extends ICard {
  primitiveType: string;
  value?: any;
}
export interface IStructure extends ICard {
  subitemsIdList: IHash<string>; //name: id
}
export interface IFunction extends IStructure {
  functionType: FunctionType;
  paramsId: string; //name: id
  resultId?: string; //result object id
  systemFunctionId?: string;
}
