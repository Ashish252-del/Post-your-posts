import * as React from 'react';
import News from '../Components/news';
import Social from '../Components/socialmedia'
import Contact from '../Components/contact';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Joke from './joke';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'pink' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Latest-News" {...a11yProps(0)} />
          <Tab label="Social-Media-Trending" {...a11yProps(1)} />
          <Tab label="Jokes" {...a11yProps(2)} />
          <Tab label="Contact-US" {...a11yProps(3)} />
         
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <News/>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Social/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Joke/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Contact/>
      </TabPanel>
     
    </Box>
  );
}
