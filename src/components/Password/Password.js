import React from "react";
import { Slider, Switch, Input, Col, Row, Space } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import "./PasswordDefault.css";
const Password = (props) => {
  return (
    <div>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Input />
        <Row>
          <Col span={4}>
            <span>length</span>
          </Col>
          <Col span={20}>
            <Slider defaultValue={1} max="20" />
          </Col>
        </Row>
        <Row>
          <Col span={6}>uppercase</Col>
          <Col span={6}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </Col>
          <Col span={6}>lowercase</Col>
          <Col span={6}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </Col>
        </Row>
        <Row>
          <Col span={6}>digits</Col>
          <Col span={6}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </Col>
          <Col span={6}>symbol</Col>
          <Col span={6}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </Col>
        </Row>
      </Space>
    </div>
  );
};
export default Password;
