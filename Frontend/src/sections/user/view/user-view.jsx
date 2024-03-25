import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { users } from 'src/_mock/user';

import Scrollbar from 'src/components/scrollbar';

import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import { emptyRows, applyFilter, getComparator } from '../utils';

// ----------------------------------------------------------------------

export default function UserPage() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');


  const [orderBy, setOrderBy] = useState('name');


  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };




  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };


  const dataFiltered = applyFilter({
    inputData: users,
    comparator: getComparator(order, orderBy),
  });


  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">จัดตารางเวร</Typography>

      </Stack>

      <Card>
        

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={users.length}
                onRequestSort={handleSort}
                headLabel={[
                  { id: 'name', label: 'Name' },
                  { id: 'day1', label: '1', align: 'center'},
                  { id: 'day2', label: '2', align: 'center'},
                  { id: 'day3', label: '3', align: 'center'},
                  { id: 'day4', label: '4', align: 'center'},
                  { id: 'day5', label: '5', align: 'center'},
                  { id: 'day6', label: '6', align: 'center'},
                  { id: 'day7', label: '7', align: 'center'},
                  { id: 'day8', label: '8', align: 'center'},
                  { id: 'day9', label: '9', align: 'center'},
                  { id: 'day10', label: '10', align: 'center'},
                  { id: 'day11', label: '11', align: 'center'},
                  { id: 'day12', label: '12', align: 'center'},
                  { id: 'day13', label: '13', align: 'center'},
                  { id: 'day14', label: '14', align: 'center'},
                  { id: 'day15', label: '15', align: 'center'},
                  { id: 'day16', label: '16', align: 'center'},
                  { id: 'day17', label: '17', align: 'center'},
                  { id: 'day18', label: '18', align: 'center'},
                  { id: 'day19', label: '19', align: 'center'},
                  { id: 'day20', label: '20', align: 'center'},
                  { id: 'day21', label: '21', align: 'center'},
                  { id: 'day22', label: '22', align: 'center'},
                  { id: 'day23', label: '23', align: 'center'},
                  { id: 'day24', label: '24', align: 'center'},
                  { id: 'day25', label: '25', align: 'center'},
                  { id: 'day26', label: '26', align: 'center'},
                  { id: 'day27', label: '27', align: 'center'},
                  { id: 'day28', label: '28', align: 'center'},
                  { id: 'day29', label: '29', align: 'center'},
                  { id: 'day30', label: '30', align: 'center'},
                  { id: 'day31', label: '31', align: 'center'},


                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      key={row.id}
                      name={row.name}
                      role={row.role}
                      status={row.status}
                      company={row.company}
                      avatarUrl={row.avatarUrl}
                      isVerified={row.isVerified}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, users.length)}
                />

              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
