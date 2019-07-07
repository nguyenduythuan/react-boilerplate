import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import StyledTableCell from '../Table/StyleTableCell';
//import StyledTableRow from '../Table/StyledTableRow';

export default class Tables extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dataUser } = this.props;
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">ID</StyledTableCell>
              <StyledTableCell align="left">FULL NAME</StyledTableCell>
              <StyledTableCell align="left">EMAIL</StyledTableCell>
              <StyledTableCell align="left">GENDER</StyledTableCell>
              <StyledTableCell align="left">IP_ADDRESS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              dataUser.map((user) => (
                <TableRow key={user.id}>
                  <StyledTableCell align="left">{user.id}</StyledTableCell>
                  <StyledTableCell align="left">{user.first_name + " " + user.last_name}</StyledTableCell>
                  <StyledTableCell align="left">{user.email}</StyledTableCell>
                  <StyledTableCell align="left">{user.gender}</StyledTableCell>
                  <StyledTableCell align="left">{user.ip_address}</StyledTableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}