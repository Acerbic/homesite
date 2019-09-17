import React from "react";
import { Button, List, Divider } from "antd";
import NavLink, { NavLinkProps } from "./NavLink";
const links: NavLinkProps[] = [
    {
        imageURL: "/static/GitHub-Mark-64px.png",
        text: "GitHub",
        href: "http://github.com/Acerbic",
    },
    {
        imageURL: "/static/LI-In-Bug.png",
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/gleb-varenov-a690b2a6/",
    },
    {
        text: "Projects",
        href: "#projects",
    },
];

export default () => (
    <div>
        <style jsx>{`
            div {
                padding-right: 1em;
                border-right: dashed 2px #bcb;
            }
            div :global(.ant-list-item) {
                padding-left: 1em;
            }
        `}</style>
        <List bordered={false}>
            {links.map((link, ind) => (
                <List.Item key={ind}>
                    <NavLink {...link} />
                </List.Item>
            ))}
        </List>
    </div>
);
