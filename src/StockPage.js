import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import Spinner from "react-bootstrap/Spinner";
import BootstrapTable from "react-bootstrap-table-next";
export default function StockPage() {
  const [allStock, setAllStock] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [pending, setPending] = useState(true);
  const [c] = useState(0);
  const dest_url =
    (process.env.REACT_APP_IP ?? "127.0.0.1") +
    ":" +
    (process.env.REACT_APP_PORT ?? "538");

  useEffect(() => {
    Axios.get(`http://${dest_url}/stock?stock_type=all`).then((data) => {
      setAllStock(
        data.data.data.map((item, _) => {
          return {
            name: item.name,
            buy: item.buy,
            stock_type: item.stock_type,
          };
        })
      );
    });
  }, [c]);
  useEffect(() => {
    const get_list = allStock.map((item) => {
      return Axios.get(
        `http://${dest_url}/stock_data?name=${item.name}&stock_date=30`
      );
    });

    // load data
    Promise.all(get_list).then((values) => {
      var result = [];
      values.map((rs) => {
        const stock_data = rs.data.data;
        var tmp_result = [];
        stock_data.map((item) => {
            tmp_result.push({
            close_price: item.close_price,
            date: item.date,
            ma20: item.ma20,
            ma5: item.ma5,
            name: item.name,
            //buy: allStock[index].buy,
            //stock_type: allStock[index].stock_type,
            max_price : Math.max(item.close_price)+10,
            min_price : Math.min(item.close_price)-10
          });
         
        });
        result.push(tmp_result.sort((a,b)=>{return a.date.localeCompare(b.date);}));
      });
      setPending(false);
      setStockData(result);
      console.log(result);
    });
  }, [allStock]);
  const columns = [
    {
      dataField: "name",
      text: "Name",
      formatter: (cell, row) => {return row[0].name;}
    },
    {
      dataField: "close_price",
      text: "Picture",
      formatter: (cell, row) => {
        return (
            <LineChart width={500} height={100} data={row}>
            <Line type="monotone" dataKey="ma5" stroke="#de1d10" />
            <Line type="monotone" dataKey="ma20" stroke="#0b91de" />
            <Line type="monotone" dataKey="close_price" stroke="#232224" />
            <XAxis dataKey="date" />
            <YAxis domain={[row.min_price, row.max_price]} />
          </LineChart>
        );
      },
    },
    {
        dataField: "ma5",
        text: "MA5",
        formatter: (cell, row) => {return row[row.length-1].ma5.toFixed(2);;}
      },
      {
        dataField: "ma20",
        text: "MA20",
        formatter: (cell, row) => {return row[row.length-1].ma20.toFixed(2);;}
      },
      {
        dataField: "close price",
        text: "Close price",
        formatter: (cell, row) => {return row[row.length-1].close_price;}
      },
      {
        dataField: "suggestion",
        text: "建议",
        formatter: (cell, row) => {return row[row.length-1].ma5>row[row.length-1].ma20?"买":"卖";}
      },
  ];
  return pending === true ? (
    <Spinner animation="border" />
  ) : (
    <BootstrapTable keyField="id" data={stockData} columns={columns} />
  );
}
