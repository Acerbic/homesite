import React from "react";
import { Button, List, Divider } from "antd";

export default () => (
    <div>
        <style jsx>{`
            div {
                padding-right: 1em;
                border-right: dashed 2px #bcb;
            }
        `}</style>
        <List bordered={false}>
            <List.Item>
                <Button type="link" href="http://github.com/Acerbic">
                    Github
                </Button>
            </List.Item>
            <List.Item>
                <Button
                    type="link"
                    href="https://www.linkedin.com/in/gleb-varenov-a690b2a6/"
                >
                    LinkedIn
                </Button>
            </List.Item>
            <List.Item>
                <Button type="link" href="#project1">
                    -- Project 1
                </Button>
            </List.Item>
            <List.Item>
                <Button type="link" href="#project2">
                    -- Project 2
                </Button>
            </List.Item>
            <List.Item>
                <Button type="link" href="#project3">
                    -- Project 3
                </Button>
            </List.Item>
        </List>
    </div>
);
