import React, {useEffect} from "react";
import {
Grid,
Paper,
Box
} from '@mui/material';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { ManageSearch } from '@mui/icons-material';

const Dashboard = () => {
    return (
        <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
         <Paper sx={{p: 2}}>
           <Box>
             <Button component={Link} to="/todo">
             <ManageSearch/>
                Todo
              </Button>
            </Box>
         </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
         <Paper sx={{p: 2}}>
           <Box>
            <Button component={Link} to="/fetch-list">
              <ManageSearch/>
              FetchList
            </Button>
           </Box>
         </Paper>
        </Grid>
       </Grid>
    );
};
export default Dashboard;