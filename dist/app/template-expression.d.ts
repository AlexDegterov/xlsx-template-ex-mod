export interface TemplatePipe {
    pipeName: string;
    pipeParameters: string[];
}
export declare class TemplateExpression {
    rawExpression: string;
    valueName: string;
    pipes: TemplatePipe[];
    constructor(rawExpression: string, expression: string);
}
