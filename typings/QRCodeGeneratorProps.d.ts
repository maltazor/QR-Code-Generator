/**
 * This file was generated from QRCodeGenerator.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export type LevelEnum = "L" | "M" | "Q" | "H";

export interface QRCodeGeneratorContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    link: EditableValue<string>;
    size: string;
    bgColor: string;
    fgColor: string;
    level: LevelEnum;
}

export interface QRCodeGeneratorPreviewProps {
    class: string;
    style: string;
    link: string;
    size: string;
    bgColor: string;
    fgColor: string;
    level: LevelEnum;
}
