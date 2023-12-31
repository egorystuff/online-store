import React, { useContext } from "react";
import { Context } from "..";

import { observer } from "mobx-react-lite";
import DeviceItem from "./DeviceItem";
import { Row } from "react-bootstrap";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row>
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
});

export default DeviceList;
