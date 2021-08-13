import React, { useState} from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from "react-router-dom";

import logo from '../../assets/logo-paquetecommerce.jpg';
import useStyles from './styles';

const NavBar = ({ totalItems }) => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const classes = useStyles();
    const location = useLocation();

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Mostrar Itens no Carrinho" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Carrinho</p>
      </MenuItem>
    </Menu>
  );


    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="primary"> 
                <Toolbar>
                  <Typography component={Link} to="/"  variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="PaqueteCommerce" height="25px" className={classes.image} />
                    PaqueteCommerce-Delivery.
                  </Typography> 
                   <div className={classes.grow} />
                    {location.pathname ==='/' && ( 
                       <div className={classes.button}>
                       <div className={classes.irCarrinho}>Carrinho</div>
                    <IconButton component={Link} to="/cart" aria-label="Mostrar Itens no Carrinho" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                   </div>
                 )}
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </>
    );
};

export default NavBar;
