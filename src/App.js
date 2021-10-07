import React, { Component } from "react";
import { Table } from "antd";

// const { Column } = Table;

const columns = [
  {
    title: 'Country',
    dataIndex: 'Country',
    sorter: (a, b) => a.Country.length - b.Country.length,
    sortDirections: ['descend', 'ascend', 'descend'],
  },
  {
    title: 'CountryCode',
    dataIndex: 'CountryCode',
    sorter: (a, b) => a.CountryCode.length - b.CountryCode.length,
    sortDirections: ['descend', 'ascend', 'descend'],
  },
  {
    title: 'Date',
    dataIndex: 'Date',
    sorter: (a, b) => a.Date - b.Date,
    sortDirections: ['descend', 'ascend', 'descend'],
  },
  {
    title: 'Id',
    dataIndex: 'Id',
    sorter: (a, b) => a.Id - b.Id,
    // sorter: (a, b) => a.Id.localeCompare - b.Id.localeCompare,
    sortDirections: ['descend', 'ascend', 'descend'],
  },
  {
    title: 'NewConfirmed',
    dataIndex: 'NewConfirmed',
    sorter: (a, b) => a.NewConfirmed.length - b.NewConfirmed.length,
    sortDirections: ['descend', 'ascend', 'descend'],
  },
  {
    title: 'Slug',
    dataIndex: 'Slug',
    sorter: (a, b) => a.Slug.length - b.Slug.length,
    sortDirections: ['descend', 'ascend', 'descend'],
  },
  {
    title: 'TotalConfirmed',
    dataIndex: 'TotalConfirmed',
    sorter: (a, b) => a.TotalConfirmed.length - b.TotalConfirmed.length,
    sortDirections: ['descend', 'ascend', 'descend'],
  },
  {
    title: 'TotalDeaths',
    dataIndex: 'TotalDeaths',
    sorter: (a, b) => a.TotalDeaths.length - b.TotalDeaths.length,
    sortDirections: ['descend', 'ascend', 'descend'],
  },
  {
    title: 'TotalRecovered',
    dataIndex: 'TotalRecovered',
    sorter: (a, b) => a.TotalRecovered.length - b.TotalRecovered.length,
    sortDirections: ['descend', 'ascend', 'descend'],
  },
];
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      covidList: [],
    };
  }

  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then(
        (response) => {
          this.setState({
            covidList: response.Countries,
          });
          // console.log(response.Countries)
        }
        // console.log(response.Countries)
      );
  }
  render() {
    // console.log("hello", this.state.covidList)
    return (
      <div>
          
        <Table border="1" dataSource={this.state.covidList} columns={columns} />
         
      </div>
    );
  }
}

export default App;
