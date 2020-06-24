import { Component, ReactNode, createElement } from "react";
import QRCode from 'react-qr-code';
import { QRCodeGeneratorPreviewProps } from "../typings/QRCodeGeneratorProps";

declare function require(name: string): string;

export class preview extends Component<QRCodeGeneratorPreviewProps> {
    render(): ReactNode {
        return <QRCode value='https://www.mendix.com/' />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/QRCodeGenerator.css");
}
