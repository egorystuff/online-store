import React, { useContext, useState, useEffect } from "react";
import { Col, Dropdown, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Context } from "../..";
import { createDevice, fetchBrands, fetchDevices, fetchTypes } from "../../http/deviceApi";
import { observer } from "mobx-react-lite";

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addDevice = () => {
    console.log(info);
  };

  return (
    <Modal show={show} onHide={onHide} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Новое устройство</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Dropdown className='mt-2'>
            <Dropdown.Toggle>{device.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className='mt-2'>
            <Dropdown.Toggle>{device.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Введите название устройства'
            className='mt-2'></Form.Control>

          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder='Введите стоимость устройства'
            className='mt-2'
            type='number'></Form.Control>

          <Form.Control className='mt-2' type='file' onChange={selectFile}></Form.Control>

          <hr />

          <Button variant='outline-dark' onClick={addInfo}>
            Добавить новое свойство
          </Button>

          {info.map((i) => (
            <Row className='mt-3' key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) => changeInfo("title", e.target.value, i.number)}
                  placeholder='Введите название характеристики'
                />
              </Col>

              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) => changeInfo("description", e.target.value, i.number)}
                  placeholder='Введите описание характеристики'
                />
              </Col>

              <Col md={4}>
                <Button variant='outline-danger' onClick={() => removeInfo(i.number)}>
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' className='m-4' onClick={onHide}>
          Закрыть
        </Button>
        <Button variant='outline-success' className='m-4' onClick={addDevice}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
