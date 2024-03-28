import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function UserPage() {
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(selectedButton === buttonName ? null : buttonName);
    setIsButtonsVisible(!isButtonsVisible); 
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">จัดตารางเวร</Typography>
      </Stack>
      <Container sx={{ width: '100%', backgroundColor: '#ffffff', padding: '20px', borderRadius: '20px',boxShadow: '0px 4px 10px rgba(0, 0, 10, 0.15)' }}>
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
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tr>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '120px' }}>ชื่อ-สกุล</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>1</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>2</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>3</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>4</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>5</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>6</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>7</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>8</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>9</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>11</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>12</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>13</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>14</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>15</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>16</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>17</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>18</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>19</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>20</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>21</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>22</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>23</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>24</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>25</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>26</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>27</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>28</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>29</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>30</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>31</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ด</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>Off</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>OT</th>
          </tr>

          <tr>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>นลัทพร สุทธิ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          </tr>

          <tr>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>นลัทพร สุทธิ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          </tr>
          
          <tr>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>นลัทพร สุทธิ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          </tr>

          <tr>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>นลัทพร สุทธิ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>          
          </tr>

          <tr>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>นลัทพร สุทธิ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          </tr>

          <tr>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>นลัทพร สุทธิ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          </tr>

          <tr>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>นลัทพร สุทธิ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          </tr>

          <tr>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>นลัทพร สุทธิ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          </tr>

          <tr>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>นลัทพร สุทธิ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          </tr>

          <tr>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>นลัทพร สุทธิ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          </tr>

          <tr>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>นลัทพร สุทธิ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          </tr>

          <tr>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>นลัทพร สุทธิ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          </tr>

          <tr>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>นลัทพร สุทธิ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>ช/บ</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          <th style={{ border: '1px solid #dddddd', padding: '2px', textAlign: 'center', whiteSpace: 'nowrap', fontWeight: 'normal',fontSize: '13px', width: '30px', height: '40px' }}>10</th>
          </tr>

        </table>
        </Container>

    </Container>
    
  );
}
