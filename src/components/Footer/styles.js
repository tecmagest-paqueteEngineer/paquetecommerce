import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  root: {
      position: 'fixed',
      // bottom: '0',
      width: '100%',
      height: '2.0rem',
      flexGrow: '1',
      // marginTop: '30',
      boxShadow: 'none',
      borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    subFooter: {
      backgroundColor: '#3f51b5',
      marginTop: '-7px',
    },
    title: {
      flexGrow: 1,
      color: '#f4f4f4',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    // image: {
    //   marginRight: '10px',
    // },
}));