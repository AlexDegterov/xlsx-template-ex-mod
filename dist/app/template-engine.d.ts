import { WorkSheetHelper } from "./worksheet-helper";
import { Cell } from "exceljs";
export declare type Pipes = Record<string, Function> | {};
export declare class TemplateEngine {
    private wsh;
    private data;
    private customPipes;
    private readonly regExpBlocks;
    private readonly regExpValues;
    private readonly regExpStringPipeParameter;
    constructor(wsh: WorkSheetHelper, data: any, customPipes: Pipes);
    execute(): void;
    private processBlocks;
    private processValues;
    private processTplValues;
    private processTplPipes;
    private accountForZero;
    private processValuePipes;
    private processBlockPipes;
    private valuePipeNumber;
    private valuePipeDate;
    private valuePipeTime;
    private valuePipeDateTime;
    private valuePipeImage;
    /** Find object in array by value of a property */
    private valuePipeFind;
    private valuePipeGet;
    private blockPipeFilter;
    /** @return {number} count of inserted rows */
    blockPipeRepeatRows(cell: Cell, dataArray: any[], countRows?: number | string): number;
    /** @return {number} count of inserted rows */
    private blockPipeTile;
}
