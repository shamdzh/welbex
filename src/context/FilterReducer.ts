import { FilterActionTypes, IFilter } from "./../types/Filter";
import { FilterActions } from "../types/Filter";



export const FilterReducer = (state: IFilter, action: FilterActions): IFilter => {
  switch (action.type) {
    case FilterActionTypes.SET_DATA:
      return { ...state, filterStatus: false, inputText: '' };
    case FilterActionTypes.SET_COLUMN:
      return { ...state, filterStatus: false, inputText: '', column: action.payload };
    case FilterActionTypes.SET_PARAM:
      return { ...state, filterStatus: false, inputText: '', param: action.payload };
    case FilterActionTypes.SET_FILTER:
      return { ...state, inputText: action.payload.text, filteredArr: action.payload.filteredArr, filterStatus: true };
    case FilterActionTypes.SET_DEFAULT_FILTER:
      return { ...state, filteredArr: action.payload.filteredArr, filterStatus: action.payload.filterStatus };
    default:
      return state;
  }
};
