import React, { useState, useEffect } from "react";
import Axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";

export default function NewsPage() {
  const [newsSource, setNewsSource] = useState([]);
  const [dailyRead, setDailyRead] = useState([]);
  const [c] = useState(0);
  const dest_url = (process.env.REACT_APP_IP??"127.0.0.1")+":"+(process.env.REACT_APP_PORT??"538");

  useEffect(() => {
    Axios.get(
      `http://${dest_url}/source?file=news`
    ).then((data) => {
      setNewsSource(
        data.data.data.map((item, index) => {
          return item.name;
        })
      );
    });
  }, [c]);
  useEffect(() => {
    const get_list = newsSource.map((item) => {
      return Axios.get(
        `http://${dest_url}/daily_read?entity=${item}&daily_read_date=3`
      );
    });
    var index = 0;
    // load data
    Promise.all(get_list)
      .then((values) => {
        var result = [];
        values.map((rs) => {
          const read_item = rs.data.data;
          console.log(read_item);
          read_item.map((item) => {
            result.push({
              id: index,
              name: item.entity,
              date: item.date,
              url: item.url,
              name: item.name,
            });
            index += 1;
          });
        });

        setDailyRead(result);
      })
      .then(console.log(dailyRead));
  }, [newsSource]);
  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "name",
      text: "Name",
    formatter:(cell,row)=>{return <a href={row.url} target="_blank" rel="noopener noreferrer">{row.name}</a>}
    },
    {
      dataField: "date",
      text: "DATE",
    }
  ];
  return <BootstrapTable keyField="id" data={dailyRead.sort((a,b)=>{return b.date.localeCompare(a.date)})} columns={columns} />;
}
