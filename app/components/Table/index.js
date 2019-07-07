import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import StyledTableCell from '../Table/StyleTableCell';
//import StyledTableRow from '../Table/StyledTableRow';

export default function Tables() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <StyledTableCell >Dessert (100g serving)</StyledTableCell>
          <StyledTableCell align="right">Calories</StyledTableCell>
          <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
          <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
          <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <StyledTableCell component="th" scope="row"></StyledTableCell>
          <StyledTableCell align="right"></StyledTableCell>
          <StyledTableCell align="right"></StyledTableCell>
          <StyledTableCell align="right"></StyledTableCell>
          <StyledTableCell align="right"></StyledTableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}