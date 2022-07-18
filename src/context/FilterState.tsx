import { FilterContext } from "./FilterContext";
import React, { useReducer } from "react";
import { FilterReducer } from "./FilterReducer";
import { FilterActionTypes, IFilter } from "../types/Filter";
import { ITable } from "../types/Table";

type Props = {
  children?: React.ReactNode;
};

const initialState: IFilter = {
  column: "0",
  param: "0",
  inputText: "",
  filteredArr: [],
  filterStatus: false,
};

const FilterState: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, initialState);

  const setColumn = (col: string) => {
    dispatch({ type: FilterActionTypes.SET_COLUMN, payload: col });
  };

  const setParam = (param: string) => {
    dispatch({ type: FilterActionTypes.SET_PARAM, payload: param });
  };

  const setData = (data: ITable[]) => {
    dispatch({ type: FilterActionTypes.SET_DATA });
  };

  const setFilter = (data: Array<ITable>, params: IFilter, text: string) => {
    switch (params.column + "" + params.param) {
      case "00":
        dispatch({
          type: FilterActionTypes.SET_DEFAULT_FILTER,
          payload: {
            filteredArr: data,
            filterStatus: false,
          },
        });
        return console.log("Ничего не выбрано");
      case "11":
        dispatch({
          type: FilterActionTypes.SET_FILTER,
          payload: {
            filteredArr: data.filter((obj: ITable) =>
              obj.name!.toLowerCase().includes(text.toLowerCase())
            ),
            text: text,
          },
        });
        return console.log("Был применен фильтр по наименованию");
      case "14":
        dispatch({
          type: FilterActionTypes.SET_FILTER,
          payload: {
            filteredArr: data.filter(
              (obj: ITable) => obj.name!.toLowerCase() === text.toLowerCase()
            ),
            text: text,
          },
        });
        return console.log("Был применен фильтр по наименованию");
      case "21":
        dispatch({
          type: FilterActionTypes.SET_FILTER,
          payload: {
            filteredArr: data.filter((obj: ITable) =>
              obj.amount!.toLowerCase().includes(text.toLowerCase())
            ),
            text: text,
          },
        });
        return console.log("Был применен фильтр по количеству");
      case "22":
        dispatch({
          type: FilterActionTypes.SET_FILTER,
          payload: {
            filteredArr: data.filter(
              (obj: ITable) => Number(obj.amount) > Number(text)
            ),
            text: text,
          },
        });
        return console.log("Был применен фильтр по количеству");
      case "23":
        dispatch({
          type: FilterActionTypes.SET_FILTER,
          payload: {
            filteredArr: data.filter(
              (obj: ITable) => Number(obj.amount) < Number(text)
            ),
            text: text,
          },
        });
        return console.log("Был применен фильтр по количеству");
      case "24":
        dispatch({
          type: FilterActionTypes.SET_FILTER,
          payload: {
            filteredArr: data.filter(
              (obj: ITable) => Number(obj.amount) === Number(text)
            ),
            text: text,
          },
        });
        return console.log("Был применен фильтр по количеству");
      case "31":
        dispatch({
          type: FilterActionTypes.SET_FILTER,
          payload: {
            filteredArr: data.filter((obj: ITable) =>
              obj.distance!.toLowerCase().includes(text.toLowerCase())
            ),
            text: text,
          },
        });
        return console.log("Был применен фильтр по расстоянию");
      case "32":
        dispatch({
          type: FilterActionTypes.SET_FILTER,
          payload: {
            filteredArr: data.filter(
              (obj: ITable) => Number(obj.distance) > Number(text)
            ),
            text: text,
          },
        });
        return console.log("Был применен фильтр по расстоянию");
      case "33":
        dispatch({
          type: FilterActionTypes.SET_FILTER,
          payload: {
            filteredArr: data.filter(
              (obj: ITable) => Number(obj.distance) < Number(text)
            ),
            text: text,
          },
        });
        return console.log("Был применен фильтр по расстоянию");
      case "34":
        dispatch({
          type: FilterActionTypes.SET_FILTER,
          payload: {
            filteredArr: data.filter(
              (obj: ITable) => Number(obj.distance) === Number(text)
            ),
            text: text,
          },
        });
        return console.log("Был применен фильтр по расстоянию");
      default:
        console.log(params.inputText === "");
        return "Введите значение для фильтрации";
    }
  };

  return (
    <FilterContext.Provider
      value={{ state: state, setColumn, setParam, setFilter, setData }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterState;
