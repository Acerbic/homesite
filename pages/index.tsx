import React from "react";
import { Row, Col } from "antd";

import Nav from "../components/Nav";
import PersonCard from "../components/PersonCard";
import PersonDescription from "../components/PersonDescription";
import Projects from "../components/Projects";

export default () => {
    const separatorColStyle: React.CSSProperties = {
        alignSelf: "stretch",
        borderRight: "dashed 2px #bcb",
    };

    return (
        <Row type="flex" justify="center">
            <style jsx global>{`
                body {
                    background: url("/static/full-bloom.png") repeat;
                }
            `}</style>
            <Col
                style={{
                    padding: "2em 16px",
                    maxWidth: "1199px",
                    background: "white",
                    minHeight: "100vh",
                }}
            >
                <Row gutter={32} type="flex" align="middle" justify="center">
                    <Col span={24} lg={{ span: 8 }}>
                        <Nav />
                    </Col>
                    <Col span={0} lg={{ span: 1 }} style={separatorColStyle}>
                        <div className="divider"></div>
                    </Col>
                    <Col
                        span={24}
                        lg={{ span: 15 }}
                        style={{ padding: "0 1em" }}
                    >
                        <PersonCard />
                    </Col>
                </Row>
                <Row style={{ marginTop: "3em" }}>
                    <Col>
                        <PersonDescription />
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                        <Projects />
                    </Col>
                </Row> */}
            </Col>
        </Row>
    );
};
