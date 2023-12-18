import React from "react";
import { Card, Col } from "react-bootstrap";

const DeviceItem = ({ device }) => {
  return (
    <Col md={3}>
      <Card style={{ width: "150", cursor: "pointer" }} border='light'>
        item
      </Card>
    </Col>
  );
};

export default DeviceItem;
