import React, { useContext } from "react";
import { Context } from "../index";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import { SHOP_ROUTE } from "../utils/consts";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
            Online Store
          </NavLink>
          {user.isAuth ? (
            <Nav className='ml-auto'>
              <Button variant='outline-light' type='submit'>
                Админ панель
              </Button>
              <Button variant='outline-light' type='submit' className='ml-2'>
                Войти
              </Button>
            </Nav>
          ) : (
            <Nav className='ml-auto'>
              <Button variant='outline-light' type='submit' onClick={() => user.setIsAuth(true)}>
                Авторизация
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
});

export default NavBar;
