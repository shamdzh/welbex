import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Table from "../components/Table";
import { ITable } from "../types/Table";

const Main: React.FC = () => {
  const [data, setData] = useState<Array<ITable>>([]);
  const [page, setPage] = useState({
    pages: 0,
    currentPage: 1,
    limit: 8,
  });

  const pages: number[] = [];

  for (let i = 0; i < page.pages; i++) {
    pages.push(i + 1);
  }

  useEffect(() => {
    fetch(`http://localhost:3004/data?_page=${page.currentPage}&_limit=${page.limit}`)
      .then((response) => {
        setPage({
          ...page,
          pages: Math.ceil(
            Number(response.headers.get("x-total-count")) / page.limit
          ),
        });
        return response.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3004/data?_page=${page.currentPage}&_limit=${page.limit}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setData(res);
      });
  }, [page]);


  return (
    <>
      <Filter data={data} />
      <Table data={data} />
      <div className="pages">
        {pages.map((pageNumber) => (
          <span
            key={pageNumber}
            className={pageNumber === page.currentPage ? "selected" : ""}
            onClick={() => {
              setPage({
                ...page,
                currentPage: pageNumber,
              });
            }}
          >
            {pageNumber}
          </span>
        ))}
      </div>
    </>
  );
};

export default Main;
