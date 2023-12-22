import React, { useContext } from "react";
import { Context } from "../index";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { NavLink, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <NavLink style={{ color: "white", textDecoration: "none", textTransform: "uppercase" }} to={SHOP_ROUTE}>
            Online Store
          </NavLink>
          {user.isAuth ? (
            <Nav>
              <Button variant='outline-light' onClick={() => navigate(BASKET_ROUTE)}>
                Корзина
              </Button>
              <Button variant='outline-light' onClick={() => navigate(ADMIN_ROUTE)} style={{ marginLeft: "10px" }}>
                Админ панель
              </Button>
              <Button variant='outline-light' onClick={() => logOut()} style={{ marginLeft: "10px" }}>
                Выйти
              </Button>
            </Nav>
          ) : (
            <Nav>
              <Button variant='outline-light' type='submit' onClick={() => navigate(LOGIN_ROUTE)}>
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
