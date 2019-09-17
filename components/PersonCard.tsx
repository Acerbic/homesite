import React from "react";
import { Card, Divider } from "antd";

export default () => (
    <div>
        <style jsx>{`
            div {
                text-align: center;
                margin: 3em 0;
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
                grid-gap: 2em;
                padding: 0;
                font-size: 1.5em;
            }

            span.divider {
                color: #ddd;
                display: inline-block;
                padding: 0 1em;
            }
        `}</style>
        <h1>GLEB VARENOV</h1>
        <h3>Senior Software Engineer</h3>
        <ul>
            <li>
                <strong>Javascript/Typescript</strong>
            </li>
            <li>
                <strong>React</strong>
            </li>
            <li>
                <strong>NextJS</strong>
            </li>
        </ul>
        <p>
            Email:&nbsp;
            <a href="mailto:gleb_varenov@mail.ru">gleb_varenov@mail.ru</a>
            <span className="divider">|</span>
            Mob.:&nbsp;<a href="tel:+7(908) 305-02-34">+7(908) 305-02-34</a>
            <span className="divider">|</span>
            Telegram:&nbsp;<a href="https://t.me/TrulyAcerbic">@TrulyAcerbic</a>
        </p>
        <p>Cheboksary, Russian Federation</p>
    </div>
);
