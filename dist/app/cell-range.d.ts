import { Cell } from "exceljs";
export declare class CellRange {
    top: number;
    left: number;
    bottom: number;
    right: number;
    constructor(top: number, left: number, bottom: number, right: number);
    static createFromCells(cellTL: Cell, cellBR: Cell): CellRange;
    /** Just for clone */
    static createFromRange(range: CellRange): CellRange;
    get valid(): boolean;
    get countRows(): number;
    get countColumns(): number;
    move(dRow: number, dCol: number): void;
}
