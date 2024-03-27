import React, { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination'; // Moved to after Button

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


  const [orderBy, setOrderBy] = useState('id');


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

  const [isButtonsVisible, setIsButtonsVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(selectedButton === buttonName ? null : buttonName);
    setIsButtonsVisible(!isButtonsVisible); // Toggle the visibility
  };

  const dataFiltered = applyFilter({
    inputData: users,
    comparator: getComparator(order, orderBy),
  });


  return (
  <Container sx={{ width: '150%' }}>

      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">จัดตารางเวร</Typography>
      </Stack>

      <div>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={4} mb={1}>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color={selectedButton === 'ตารางเวร' ? 'success' : 'primary'}
              sx={{ borderRadius: '50px', fontSize: '12px', width: '80px', height: '35px' }}
              onClick={() => handleButtonClick('ตารางเวร')}
            >
              ตารางเวร
            </Button>
            <Button
              variant="contained"
              color={selectedButton === 'OT' ? 'success' : 'primary'}
              sx={{ borderRadius: '50px', fontSize: '12px', width: '0px', height: '35px' }}
              onClick={() => handleButtonClick('OT')}
            >
              OT
            </Button>
            <Button
              variant="contained"
              color={selectedButton === 'ตารางแสตนบาย' ? 'success' : 'primary'}
              sx={{ borderRadius: '50px', fontSize: '12px', width: '115px', height: '35px' }}
              onClick={() => handleButtonClick('ตารางแสตนบาย')}
            >
              ตารางแสตนบาย
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary" sx={{ fontSize: '12px', width: '50px', height: '40px' }}>
              บันทึก
            </Button>
          </Stack>
        </Stack>

        {isButtonsVisible && (
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} mb={2}>
            <Stack direction="row" spacing={1}>
              {(selectedButton === 'ตารางเวร' || selectedButton === 'ตารางแสตนบาย') && (
                <>
                  <Button variant="contained" color="primary" sx={{ borderRadius: '50px', fontSize: '12px', width: '0px', height: '35px' }}>
                    ดึก
                  </Button>
                  <Button variant="contained" color="primary" sx={{ borderRadius: '50px', fontSize: '12px', width: '0px', height: '35px' }}>
                    เช้า
                  </Button>
                  <Button variant="contained" color="primary" sx={{ borderRadius: '50px', fontSize: '12px', width: '0px', height: '35px' }}>
                    บ่าย
                  </Button>
                  <Button variant="contained" color="primary" sx={{ borderRadius: '50px', fontSize: '12px', width: '0px', height: '35px' }}>
                    Off
                  </Button>
                  <Button variant="contained" color="primary" sx={{ borderRadius: '50px', fontSize: '12px', width: '0px', height: '35px' }}>
                    ลา
                  </Button>
                  <Button variant="contained" color="primary" sx={{ borderRadius: '50px', fontSize: '12px', width: '0px', height: '35px' }}>
                    V
                  </Button>
                  <Button variant="contained" color="primary" sx={{ borderRadius: '50px', fontSize: '12px', width: '0px', height: '35px' }}>
                    T
                  </Button>
                </>
              )}

              {selectedButton === 'OT' && (
                <>
                <Button variant="contained" color="primary" sx={{ borderRadius: '50px', fontSize: '12px', width: '0px', height: '35px' }}>
                    ดึก
                  </Button>
                  <Button variant="contained" color="primary" sx={{ borderRadius: '50px', fontSize: '12px', width: '0px', height: '35px' }}>
                    เช้า
                  </Button>
                  <Button variant="contained" color="primary" sx={{ borderRadius: '50px', fontSize: '12px', width: '0px', height: '35px' }}>
                    บ่าย
                  </Button>
                </>
              )}

            </Stack>
          </Stack>
        )}
      </div>

      <Card>
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={users.length}
                onRequestSort={handleSort}
                headLabel={[
                  { id: 'id', label: 'ที่' },
                  { id: 'name', label: 'ชื่อ-สกุล' },
                  { id: 'day1', label: '1', align: 'center' },
                  { id: 'day2', label: '2', align: 'center' },
                  { id: 'day3', label: '3', align: 'center' },
                  { id: 'day4', label: '4', align: 'center' },
                  { id: 'day5', label: '5', align: 'center' },
                  { id: 'day6', label: '6', align: 'center' },
                  { id: 'day7', label: '7', align: 'center' },
                  { id: 'day8', label: '8', align: 'center' },
                  { id: 'day9', label: '9', align: 'center' },
                  { id: 'day10', label: '10', align: 'center' },
                  { id: 'day11', label: '11', align: 'center' },
                  { id: 'day12', label: '12', align: 'center' },
                  { id: 'day13', label: '13', align: 'center' },
                  { id: 'day14', label: '14', align: 'center' },
                  { id: 'day15', label: '15', align: 'center' },
                  { id: 'day16', label: '16', align: 'center' },
                  { id: 'day17', label: '17', align: 'center' },
                  { id: 'day18', label: '18', align: 'center' },
                  { id: 'day19', label: '19', align: 'center' },
                  { id: 'day20', label: '20', align: 'center' },
                  { id: 'day21', label: '21', align: 'center' },
                  { id: 'day22', label: '22', align: 'center' },
                  { id: 'day23', label: '23', align: 'center' },
                  { id: 'day24', label: '24', align: 'center' },
                  { id: 'day25', label: '25', align: 'center' },
                  { id: 'day26', label: '26', align: 'center' },
                  { id: 'day27', label: '27', align: 'center' },
                  { id: 'day28', label: '28', align: 'center' },
                  { id: 'day29', label: '29', align: 'center' },
                  { id: 'day30', label: '30', align: 'center' },
                  { id: 'day31', label: '31', align: 'center' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      id={row.id}
                      name={row.name}
                      day1={row.day1}
                      day2={row.day2}
                      day3={row.day3}
                      day4={row.day4}
                      day5={row.day5}
                      day6={row.day6}
                      day7={row.day7}
                      day8={row.day8}
                      day9={row.day9}
                      day10={row.day10}
                      day11={row.day11}
                      day12={row.day12}
                      day13={row.day13}
                      day14={row.day14}
                      day15={row.day15}
                      day16={row.day16}
                      day17={row.day17}
                      day18={row.day18}
                      day19={row.day19}
                      day20={row.day20}
                      day21={row.day21}
                      day22={row.day22}
                      day23={row.day23}
                      day24={row.day24}
                      day25={row.day25}
                      day26={row.day26}
                      day27={row.day27}
                      day28={row.day28}
                      day29={row.day29}
                      day30={row.day30}
                      day31={row.day31}
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
