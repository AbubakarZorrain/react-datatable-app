
// src/components/basic.table.js
import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import 'bootstrap/dist/css/bootstrap.min.css';
import movies from "./movies";


function BasicTableComponent() {

    const columns = [
        {
          id: 1,
          name: "Title",
          selector: (row) => row.title,
          sortable: true,
          reorder: true
        },
        {
          id: 2,
          name: "Director",
          selector: (row) => row.director,
          sortable: true,
          reorder: true
        },
        {
          id: 3,
          name: "Runtime (m)",
          selector: (row) => row.runtime,
          sortable: true,
          right: true,
          reorder: true
        }
      ];
      return (
        <div className="App">
          <Card>
            <DataTable
              title="Movies"
              columns={columns}
              data={movies}
              defaultSortFieldId={1}
              sortIcon={<SortIcon />}
              pagination
              selectableRows
            />
          </Card>
        </div>
      );
    
}

export default BasicTableComponent;