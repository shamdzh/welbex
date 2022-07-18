import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../context/FilterContext";

const Filter:React.FC<any> = ({data}) => {
  const { state, setColumn, setParam, setFilter, setData } = useContext(FilterContext);
  const [text, setText] = useState('');


  useEffect(() => {
    if(text === '') setData!(data)
  }, [text])

  return (
    <div className="filter">
      <div className="filter__container">
        <select
          className="form-select"
          value={state!.column}
          onChange={(e) => {
            setColumn!(e.target.value);
          }}
        >
          <option selected value="0">Выбор колонки</option>
          <option value="1">Наименование</option>
          <option value="2">Количество</option>
          <option value="3">Рассстояние</option>
        </select>
        <select
          className="form-select"
          value={state!.param}
          onChange={(e) => {
            setParam!(e.target.value);
          }}
        >
          <option selected value="0">Условие фильтрации</option>
          <option value="1">Содержит</option>
          <option value="2">Больше</option>
          <option value="3">Меньше</option>
          <option value="4">Равно</option>
        </select>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Введите значение фильтрации"
          onChange={(e) => {
            setText(e.target.value)
            setFilter!(data, state!, e.target.value)
          }}
          value={text}
        />
      </div>
    </div>
  );
};

export default Filter;
