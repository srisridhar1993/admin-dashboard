import React from "react";
import { Component } from "react";
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default class GridData extends Component {
    state = {
        columnDefs: [
            { headerName: "Name", field: "name" },
            { headerName: "Email", field: "email" },
            { headerName: "Phone", field: "phone" },
            { headerName: "Address", field: "address.street" },
            { headerName: "City", field: "address.city"},
        ],
        rowData: []
    }

    async componentDidMount() {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
          const json = await response.json();
          this.setState({ rowData: json });
        } catch (error) {
          console.log(error);
        }
    }

    render() {
        return (
            <div id="myGrid" className="ag-theme-alpine" style={{ height: '500px', width: '100%' }}>
                <h2>User Management</h2>
                <AgGridReact
                    enableSorting={true}
                    pagination={true}
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}>
                </AgGridReact>
            </div>
        );
    }
}