import React from 'react';
import {Grid, Toolbar, Typography } from '@material-ui/core';

// import logo from '../../assets/logo-paquetecommerce.jpg';
import useStyles from './styles';



  const Footer = () =>  {
      const classes = useStyles();
      
    return (
      <div position="static" className={classes.root} color="primary" >
         <Grid className={classes.subFooter} container spacing={24}>
          <Toolbar> 
            <Typography variant="h6" className={classes.title} color="inherit">
            {/* <img src={logo} alt="PaqueteCommerce" height="25px" className={classes.image} /> */}
            &reg;{new Date().getFullYear()} PaqueteCommerce-Delivery, feito por Tecmagest. 
          </Typography> 
        </Toolbar>           
        </Grid>
    </div>
  );
  };
  
 export default Footer;

// import React from 'react';
// import {Container, Grid, Box, Link } from '@material-ui/core';
//  import useStyles from './styles';

// const Footer = () =>  {
//     const styles = useStyles();
  
//   return ( 
//   <footer>
//       <Box className={classes.boxRodape} >
//           <Container maxWidth="lg" > 
//             <Grid container spacing={5}> 
//                 {/* <Grid item xs={12} sm={4}>
//                     <Box borderBottom={1}>Ajuda</Box>
//                     <Box>
//                         <Link href={'/'} color="inherit">
//                          Contacto</Link>
//                     </Box>
//                     <Box>
//                         <Link href={'/'} color="inherit">
//                         Privacidade</Link>
//                     </Box>
//                 </Grid>       */}
//             </Grid>
//             <Box textAlign="center" pt={{xs: 5, sm: 10 }} pb={{xs: 5, sm: 0}}>
//             PaqueteCommerce|Desenvolvido, by Tecmagest &reg; {new Date().getFullYear()}
//             </Box>
//           </Container>
//       </Box>
//      </footer>  
//   );
// }

// export default Footer;
