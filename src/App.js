import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    return (
        <>
            <div>
                <CssBaseline />
                <Header />
                <Grid container spacing={3} style={{ width: '100%' }}>
                    <Grid item xc={12} md={4}>
                        {/* Contains list components on left side */}
                        <List />
                    </Grid>

                    <Grid item xc={12} md={8}>
                        {/* Contains map */}
                        <Map />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default App;