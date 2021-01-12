import { Form, Input } from "antd";
import Password from "../Password/Password";
import "./MessageDefault.css";
const Message = (props) => {
  const onFinish = (values) => {
    console.log(values);
  };
  const layout = {
    labelCol: { span: 3 },
    // wrapperCol: { span: 16 },
  };
  const handleChange = () => {
    props.showSave(true);
    // console.log("aaa");
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      onChange={handleChange.bind(this)}
    >
      <Form.Item name={"username"} label="username">
        <Input />
      </Form.Item>
      <Form.Item
        name={"password"}
        label="password"
        rules={[{ type: "password" }]}
      >
        <Password />
      </Form.Item>
      <Form.Item name={"note"} label="note">
        <Input />
      </Form.Item>
      <Form.Item name={"tag"} label="tag">
        <Input />
      </Form.Item>
    </Form>
  );
};
export default Message;
