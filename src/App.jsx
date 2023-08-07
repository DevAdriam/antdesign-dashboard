import React, { useState } from "react";
import { Layout, theme, Menu, Button } from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import { Outlet, useNavigate } from "react-router-dom";
import { Content, Header } from "antd/es/layout/layout";
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <Layout style={{ width: "100%", height: "100%" }}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-log-vertical">
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={["general"]}
                            items={[
                                {
                                    key: "general",
                                    label: "General",
                                    icon: <MenuFoldOutlined />,
                                    onClick: () => navigate("/"),
                                },
                                {
                                    key: "userlist",
                                    label: "UserList",
                                    icon: <MenuUnfoldOutlined />,
                                    onClick: () => navigate("/userlist"),
                                },
                                {
                                    key: "usertable",
                                    label: "User Table",
                                    icon: <UserOutlined />,
                                    onClick: () => navigate("/usertable"),
                                },
                            ]}
                        />
                    </div>
                </Sider>
                <Layout>
                    <Header
                        style={{ padding: 0, background: colorBgContainer }}
                    >
                        <Button
                            type="text"
                            icon={
                                collapsed ? (
                                    <MenuUnfoldOutlined />
                                ) : (
                                    <MenuFoldOutlined />
                                )
                            }
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: "16px",
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default App;
