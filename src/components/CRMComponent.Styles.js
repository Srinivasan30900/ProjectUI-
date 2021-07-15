import {default as styled} from "react-emotion";
import { Select, MenuItem} from "@material-ui/core";
import {Button, getBackgroundWithHoverCSS} from "@twilio/flex-ui";

export const Container = styled("div")`
    display: flex;
    padding: 32px;
    flex-direction: column;
`;

export const TabContainer = styled("div")`
    margin-top: 20px;

`;


export const TextField = styled("div")`
    color: rgb(34, 34, 34);
    text-transform: normal;
    margin: 0px 12px 4px 12px;
    color: rgb(34, 34, 34);
    letter-spacing: 2px;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const StyledLabel = styled("label")`
    
    min-height: 100%;
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-shrink: 1;
    align-items: center;
    justify-content: center;
    color: rgb(96, 100, 113);
    font-stretch: 100%;
    font-style: normal;
    font-size :18px;
    font-family: Arial, Helvetica, sans-serif;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-weight: 400;
    height: auto;
    letter-spacing: normal;
    -webkit-font-smoothing: antialiased;
`;