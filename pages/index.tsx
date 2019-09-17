import React from "react";
import { Row, Col } from "antd";

import Nav from "../components/Nav";
import PersonCard from "../components/PersonCard";
import PersonDescription from "../components/PersonDescription";
import Projects from "../components/Projects";

export default () => {
    return (
        // overflowX - prevents horizontal scrollbars from gutter prop
        <Row style={{ overflowX: "hidden" }}>
            <Col>
                <Row gutter={32} type="flex" align="middle">
                    <Col span={8}>
                        <Nav />
                    </Col>
                    <Col span={16}>
                        <PersonCard />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <PersonDescription />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Projects />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
