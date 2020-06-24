import { Component, ReactNode, createElement } from "react";
import { hot } from "react-hot-loader/root";
import { QRCodeGeneratorContainerProps } from "../typings/QRCodeGeneratorProps";
import QRCode from 'react-qr-code';

class QRCodeGenerator extends Component<QRCodeGeneratorContainerProps> {
    render(): ReactNode {
        console.log(this.props);
        return <QRCode 
            value={this.props.link.displayValue} 
            size={this.props.size}
            bgColor={this.props.bgColor}
            fgColor={this.props.fgColor}
            level={this.props.level}
        />;
    }
}

export default hot(QRCodeGenerator);
