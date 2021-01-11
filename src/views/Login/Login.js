import React, { useRef, useState } from "react";
import "./LoginDefault.css";
import { Input, Button, Form, message } from "antd";
import { withRouter } from "react-router";

const Login = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const usernameRef = useRef();
  const handleRegister = () => {
    message.success("regist success");
    console.log("register", username);
  };
  const handleLogin = () => {
    message.success("login success");
    console.log("login", password);
    let loginSuccess = true;
    if (loginSuccess) {
      props.history.push("./detail");
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login_container">
      <div className="login_box">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              type="text"
              placeholder="username"
              onChange={(e) => setUserName(e.target.value)}
              ref={usernameRef}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button onClick={handleRegister} htmlType="submit">
              regist
            </Button>
            <Button onClick={handleLogin} htmlType="submit">
              login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default withRouter(Login);
