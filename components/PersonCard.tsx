import React from "react";
import { Card, Divider } from "antd";

export default () => (
    <div>
        <style jsx>{`
            div {
                text-align: center;
                margin: 1em 0;
            }
            h1 {
                font-size: 2em;
            }

            ul {
                margin-top: 2em;
                list-style: none;
                display: flex;
                flex-direction: row;
                justify-content: center;
                padding: 0;
                font-size: 1.5em;
            }

            li {
                margin-right: 2em;
            }
            li:last-child {
                margin-right: 0;
            }
            span.divider {
                color: #ddd;
                display: inline-block;
                padding: 0 1em;
            }
            span.no-wrap {
                white-space: nowrap;
            }
            @media screen and (max-width: 570px) {
                li {
                    width: 100%;
                    margin: 0;
                }
                ul {
                    flex-wrap: wrap;
                }
                span.no-wrap {
                    text-align: center;
                    display: inline-block;
                    width: 100%;
                }
                span.divider {
                    display: none;
                }
            }
        `}</style>
        <h1>GLEB VARENOV</h1>
        <h3>Senior Software Engineer</h3>
        <ul>
            <li>
                <strong>React</strong>
            </li>
            <li>
                <strong>JavaScript/TypeScript</strong>
            </li>
            <li>
                <strong>Next.js</strong>
            </li>
        </ul>
        <p>
            <span className="no-wrap">
                Email:&nbsp;
                <a href="mailto:gleb_varenov@mail.ru">gleb_varenov@mail.ru</a>
            </span>
            <span className="divider">|</span>
            <span className="no-wrap">
                Mob.:&nbsp;<a href="tel:+7(908) 305-02-34">+7(908) 305-02-34</a>
            </span>
            <span className="divider">|</span>
            <span className="no-wrap">
                Telegram:&nbsp;
                <a href="https://t.me/TrulyAcerbic">@TrulyAcerbic</a>
            </span>
        </p>
        <p>Cheboksary, Russian Federation</p>
    </div>
);
