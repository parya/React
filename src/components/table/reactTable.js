import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import httpService from "../../services/httpService"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 650
  }
}));

const row = (value, index, header) => (
  <TableRow key={`tr-${index}`}>
    {header.map((v, i) => (
      <TableCell key={`tbc-${i}`}>{value[v.prop]}</TableCell>
    ))}
  </TableRow>
);

const ReactTable = ({ header, data }) => {

   httpService.get('constants/constant.json').then(function (response) {
     console.log('response' + JSON.stringify(response.data[0]));
     this.setState({header:response.data[0], data:response.data[1]})
  })
  .catch(function (error) {
    console.warn(error);
  });


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              {this.state.header.map((value, index) => (
                <TableCell key={`tbcell-${index}`}>{value.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((value, index) => row(value, index, header))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default ReactTable;
