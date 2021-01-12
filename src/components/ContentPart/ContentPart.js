import React from "react";
import { PageHeader, Tag, Button, Modal } from "antd";
import Message from "../Message/Message";
import "./ContentPartDefault.css";
const ContentPart = (props) => {
  const [isShowSave, setIsShowSave] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const changeShowSave = (msg) => {
    setIsShowSave(msg);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <div>
        <PageHeader
          title="Title"
          className="site-page-header"
          subTitle="This is a subtitle"
          tags={<Tag color="blue">tag</Tag>}
          extra={[
            isShowSave ? (
              <Button key="edit" type="primary">
                save
              </Button>
            ) : null,
            <Button key="delete" onClick={showModal}>
              delete
            </Button>,
          ]}
        >
          <Message showSave={changeShowSave.bind(this)} />
        </PageHeader>
      </div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};
export default ContentPart;
