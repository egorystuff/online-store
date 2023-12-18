import React, { useContext } from "react";
import { Context } from "../index";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { NavLink, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <NavLink style={{ color: "white", textDecoration: "none", textTransform: "uppercase" }} to={SHOP_ROUTE}>
            Online Store
          </NavLink>
          {user.isAuth ? (
            <Nav>
              <Button variant='outline-light' onClick={() => navigate(ADMIN_ROUTE)}>
                Админ панель
              </Button>
              <Button variant='outline-light' onClick={() => navigate(LOGIN_ROUTE)} style={{ marginLeft: "10px" }}>
                Выйти
              </Button>
            </Nav>
          ) : (
            <Nav>
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
