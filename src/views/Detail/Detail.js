import React from "react";
import { Layout } from "antd";
import ProList from "@ant-design/pro-list";
import "@ant-design/pro-list/dist/list.css";
import { RightOutlined } from "@ant-design/icons";
import "./DetailDefault.css";
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
  const getDetail = (text, row) => {
    console.log(text, row);
  };
  return (
    <div>
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0" width="300" theme="light">
          <div className="logo" />
          <ProList
            toolBarRender={() => {
              return [<div>111</div>];
            }}
            rowKey="name"
            headerTitle="基础列表"
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
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
      ,
    </div>
  );
};
export default Detail;
