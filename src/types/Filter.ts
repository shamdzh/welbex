import { ITable } from "./Table"

export interface IFilter {
  column: string,
  param: string,
  inputText: string,
  filteredArr?: ITable[],
  filterStatus: boolean
}

export interface IFilterContext {
  state?: IFilter 
  setColumn?: (col:string) => void,
  setParam?: (param:string) => void
  setFilter?: (data: Array<ITable>, params: IFilter, text: string) => Array<ITable> | String | void;
  setData?:(data: Array<ITable>) => Array<ITable> | void;
}

export enum FilterActionTypes {
  SET_DATA = "SET_DATA",
  SET_COLUMN = "SET_COLUMN",
  SET_PARAM = "SET_PARAM",
  SET_FILTER = "SET_FILTER",
  SET_DEFAULT_FILTER = "SET__DEFAULT_FILTER"
}


interface SetDataAction {
  type: FilterActionTypes.SET_DATA,
}

interface SetColumnAction {
  type: FilterActionTypes.SET_COLUMN,
  payload: string
}

interface SetParamAction {
  type: FilterActionTypes.SET_PARAM,
  payload: string
}

interface SetFilterAction {
  type: FilterActionTypes.SET_FILTER,
  payload: {
    filteredArr: ITable[],
    text: string
  }
}

interface SetDefaultFilterAction {
  type: FilterActionTypes.SET_DEFAULT_FILTER,
  payload: {
    filteredArr: ITable[],
    filterStatus: boolean
  }
}

export type FilterActions = SetDataAction | SetColumnAction | SetParamAction | SetFilterAction | SetDefaultFilterAction;
