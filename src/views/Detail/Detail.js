import React from "react";
import { Layout, Modal } from "antd";
import ProList from "@ant-design/pro-list";
import "@ant-design/pro-list/dist/list.css";
import { RightOutlined, PlusCircleOutlined } from "@ant-design/icons";
import "./DetailDefault.css";
import Message from "../../components/Message/Message";
import ContentPart from "../../components/ContentPart/ContentPart";
const { Header, Content, Footer, Sider } = Layout;
const dataSource = [
  {
    name: "语雀的天空",
    desc: "我是一条测试的描述",
  },
  {
    name: "Ant Design",
    desc: "我是一条测试的描述",
  },
  {
    name: "蚂蚁金服体验科技",
    desc: "我是一条测试的描述",
  },
  {
    name: "TechUI",
    desc: "我是一条测试的描述",
  },
];
for (let i in dataSource) {
  dataSource[i].image = dataSource[i].name[0];
}
const Detail = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <div>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={800}
      >
        <Message />
      </Modal>
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0" width="300" theme="light">
          <div className="logo" />
          <ProList
            toolBarRender={() => {
              return [
                <div>
                  <PlusCircleOutlined
                    onClick={() => {
                      setVisible(true);
                    }}
                    style={{
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  />
                </div>,
              ];
            }}
            rowKey="name"
            headerTitle="All Items"
            dataSource={dataSource}
            showActions="hover"
            metas={{
              title: {
                dataIndex: "name",
              },
              avatar: {
                dataIndex: "image",
                valueType: "text",
              },
              description: {
                dataIndex: "desc",
              },
              actions: {
                render: (text, row) => [
                  <div>
                    <RightOutlined />
                  </div>,
                ],
              },
            }}
          />
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 560 }}
            >
              <ContentPart />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Secrets-React Design ©2021 Created by yuria
          </Footer>
        </Layout>
      </Layout>
      ,
    </div>
  );
};
export default Detail;
