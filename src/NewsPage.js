import React, { useState, useEffect } from "react";
import Axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import NewsCard from "./NewsCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function NewsPage() {
  const [newsSource, setNewsSource] = useState([]);
  const [dailyRead, setDailyRead] = useState([]);
  const [hackerNews, setHackerNews] = useState([]);
  const [huxiu, setHuxiu] = useState([]);
  const [kr, set36kr] = useState([]);
  const [mit, setMIT] = useState([]);
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
    const get_list = ['hacker_news','huxiu','36kr','MIT'].map((item) => {
        return Axios.get(
          `http://${dest_url}/rss?name=${item}`
        );
      });
      Promise.all(get_list)
      .then((values) => {
      setHackerNews(
        values[0].data.data.map((item, index) => {
          return {name:item.name,url:item.url};
        })
      );
      setHuxiu(
        values[1].data.data.map((item, index) => {
          return {name:item.name,url:item.url};
        })
      );
      set36kr(
        values[2].data.data.map((item, index) => {
          return {name:item.name,url:item.url};
        })
      );
      setMIT(
        values[3].data.data.map((item, index) => {
          return {name:item.name,url:item.url};
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
  return <>
  <Container>
  <Row>
    <Col><NewsCard data={hackerNews} name="hacker news"/>
  </Col>
    <Col><NewsCard data={huxiu} name="虎嗅"/></Col>
    <Col><NewsCard data={kr} name="36kr"/>
  </Col>
  <Col><NewsCard data={mit} name="MIT"/>
  </Col>
  </Row>
  <Row>
    <Col><BootstrapTable keyField="id" data={dailyRead.sort((a,b)=>{return b.date.localeCompare(a.date)})} columns={columns} /></Col>
    
  </Row>
</Container>
  
  </>;
}
