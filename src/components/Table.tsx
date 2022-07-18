import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { ITable } from "../types/Table";

const Table: React.FC<any> = ({ data }) => {

  const { state } = useContext(FilterContext);

  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Дата</th>
            <th scope="col">Наименование</th>
            <th scope="col">Количество</th>
            <th scope="col">Рассстояние</th>
          </tr>
        </thead>
        <tbody>
          {state!.filterStatus
            ? state!.filteredArr!.map((obj: ITable) => (
                <tr key={obj.id}>
                  <td>{obj.date}</td>
                  <td>{obj.name}</td>
                  <td>{obj.amount}</td>
                  <td>{obj.distance} km</td>
                </tr>
              ))
            : data.map((obj: ITable) => (
                <tr key={obj.id}>
                  <td>{obj.date}</td>
                  <td>{obj.name}</td>
                  <td>{obj.amount}</td>
                  <td>{obj.distance} km</td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
