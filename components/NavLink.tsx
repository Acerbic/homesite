import React from "react";

export interface NavLinkProps {
    imageURL?: string;
    text: string;
    href: string;
    isSecondary?: boolean;
}

const NavLink = (props: NavLinkProps) => (
    <a href={props.href}>
        <style jsx>{`
            img {
                margin-right: 1em;
            }
            div.img-boundary {
                height: 64px;
                width: 100px;
                overflow: hidden;
                display: inline-block;
                vertical-align: middle;
            }
            span {
                font-size: 2em;
                vertical-align: middle;
            }
        `}</style>
        {props.imageURL && (
            <div className="img-boundary">
                <img src={props.imageURL} height={64}></img>
            </div>
        )}
        <span>{props.text}</span>
    </a>
);

export default NavLink;
