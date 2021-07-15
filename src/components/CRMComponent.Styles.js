import {default as styled} from "react-emotion";
import { Select, MenuItem} from "@material-ui/core";
import {Button, getBackgroundWithHoverCSS} from "@twilio/flex-ui";

export const Container = styled("div")`
    display: flex;
    padding: 32px;
    flex-direction: column;
      color: rgb(96, 100, 113);
       justify-content: center;
`;

export const TabContainer = styled("div")`
    margin-top: 20px;
     justify-content: center;
`;


export const TextField = styled("div")`
    color: rgb(34, 34, 34);
    text-transform: normal;
    margin: 0px 12px 4px 12px;
    color: rgb(34, 34, 34);
    letter-spacing: 2px;
    font-size: 25px;
    justify-content: center;
     
    
    
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
    font-size: ${(props) => props.size};
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

export const StyledSelect = styled(Select)`
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    .Twilio-Dropdown {
        height: 100%;
    }
    [class*="MuiSelect-selectMenu"] {
        padding-top: 7px;
        padding-bottom: 7px;
        border-right-width: 0px;
        &:focus {
            border-right-width: 1px;
        }
    }
    background-color: ${props => props.theme.colors.base1};
    color: ${props =>
        props.theme.calculated.lightTheme ? props.theme.colors.darkTextColor : props.theme.colors.lightTextColor};
`;

export const StyledMenuItem = styled(MenuItem)`
    box-sizing: border-box;
    height: 32px;
    display: flex;
    margin: 0;
    padding: 0 12px;
    min-width: 0;
`;

export const StyledButton = styled(Button)`
    color: white;
    text-transform: uppercase;
    margin-right: 5px;
    width: 320px;
    background-color: ${props => (props.disabled ? props.theme.colors.base5 : props.theme.colors.defaultButtonColor)};
    ${p =>
        getBackgroundWithHoverCSS(
            p.disabled ? p.theme.colors.base5 : p.theme.colors.defaultButtonColor,
            true,
            false,
            p.disabled,
        )};
`;

    
