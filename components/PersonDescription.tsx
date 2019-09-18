import React from "react";
import { Typography, Card, List } from "antd";
const { Paragraph, Text, Title } = Typography;
import css from "styled-jsx/css";

const { className, styles } = css.resolve`
    * :global(div.ant-typography),
    * :global(span.ant-typography) {
        font-size: 1.2em;
    }
    * :global(h1.ant-typography) {
        text-align: center;
    }
`;

export default () => (
    <Card className={className} bordered={false}>
        <style jsx>{`
            dl {
                display: grid;
                grid-template-columns: 30% 70%;
            }

            @media screen and (max-width: 470px) {
                dl {
                    grid-template-columns: 100%;
                }
            }
        `}</style>
        {styles}
        <Title>About me</Title>
        <Paragraph>
            A highly self-motivated Web Developer with over 10 years of
            experience and academic background. Main languages are
            Javascript/Typescript and PHP. Possesses theoretical and practical
            knowledge of programming, patterns, algorithms and data structures,
            adheres to the best industry practices. Fluent in Russian and
            English , can speak beginner French and German.
        </Paragraph>
        <Paragraph>
            <Title level={4}>Core competencies include:</Title>
            <dl>
                <dt>Languages</dt>
                <dd>
                    JavaScript(ES6+), TypeScript, PHP, SQL, HTML, CSS, GraphQL
                </dd>
                <dt>Libraries and frameworks</dt>
                <dd>
                    Next.js, React, Laravel/Lumen, VueJS, jQuery, Twitter
                    Bootstrap, Ant Design, XState, websocket.io, Prisma
                </dd>
                <dt>Technologies</dt>
                <dd>
                    Algorithms and data structures, Test-driven development,
                    Client-server architecture, Relational databases, MVC
                    patterns, RESTful APIs, Parallelism in execution
                </dd>
                <dt>Tooling</dt>
                <dd>
                    git, Node.js, npm, yarn, Docker, Composer, webpack, Babel 7,
                    VS Code
                </dd>
            </dl>
        </Paragraph>
    </Card>
);
