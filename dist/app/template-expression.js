"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateExpression = void 0;
class TemplateExpression {
    constructor(rawExpression, expression) {
        this.rawExpression = rawExpression;
        this.pipes = [];
        // this.rawExpression = rawExpression;
        const expressionParts = expression.split("|").map(e => e.trim());
        this.valueName = expressionParts[0];
        const pipes = expressionParts.slice(1);
        pipes.forEach((pipe) => {
            const pipeParts = pipe.split(":").map(p => p.trim());
            this.pipes.push({ pipeName: pipeParts[0], pipeParameters: pipeParts.slice(1) });
        });
    }
}
exports.TemplateExpression = TemplateExpression;
