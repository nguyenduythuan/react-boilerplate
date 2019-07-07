import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';

export default styled(TableCell)`
    &.MuiTableCell-head {
        background-color: black;
        color: white;
    }
    &.MuiTableCell-head:first-child {
        border-top-left-radius: 5px;
    }
    &.MuiTableCell-head:last-child {
        border-top-right-radius: 5px;
    }
`;