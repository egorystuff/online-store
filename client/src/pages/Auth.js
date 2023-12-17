import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  console.log(isLogin);

  return (
    <Container className='d-flex justify-content-center align-items-center' style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 600 }} className='p-3'>
        <h2 className='m-auto'> {isLogin ? "Авторизация" : "Регистрация"} </h2>
        <Form className='d-flex flex-column'>
          <Form.Control className='mt-3' placeholder='Введите ваш email...'></Form.Control>
          <Form.Control className='mt-3' placeholder='Введите ваш пароль...'></Form.Control>
          <div className='d-flex justify-content-between mt-3 pr-3 pl-3'>
            {isLogin ? (
              <div>
                Нет аккаунта?&nbsp;
                <NavLink to={REGISTRATION_ROUTE} style={{ color: "blue" }}>
                  Зарегистрируйтесь!
                </NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт?&nbsp;
                <NavLink to={LOGIN_ROUTE} style={{ color: "blue" }}>
                  Войдите!
                </NavLink>
              </div>
            )}
            <Button variant='outline-success'> {isLogin ? "Войти" : "Регистрация"} </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
