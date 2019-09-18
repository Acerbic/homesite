import React from "react";
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
    /*    {
        text: "Projects",
        href: "#projects",
    },
*/
];

export default () => (
    <div>
        <style jsx>{`
            ul {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                list-style: none;
                padding: 0;
            }
            li {
                padding-top: 16px;
                padding-bottom: 16px;
                text-align: center;
            }

            /* ant design "lg" breakpoint */
            @media print, screen and (min-width: 992px) {
                ul {
                    display: block;
                    padding-left: 2em;
                }
                li {
                    border-bottom: 1px solid #bbb;
                    margin-right: 0;
                    text-align: left;
                }

                li:last-child {
                    border-bottom: none;
                }
            }
        `}</style>
        <ul>
            {links.map((link, ind) => (
                <li key={ind}>
                    <NavLink {...link} />
                </li>
            ))}
        </ul>
    </div>
);
