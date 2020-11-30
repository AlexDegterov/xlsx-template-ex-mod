import { Cell, Workbook, Worksheet } from "exceljs";
import { CellRange } from "./cell-range";
/**
 * Callback for iterate cells
 * @return false - whether to break iteration
 */
export declare type iterateCells = (cell: Cell) => void | false;
export declare class WorkSheetHelper {
    private worksheet;
    constructor(worksheet: Worksheet);
    get workbook(): Workbook;
    get sheetName(): string;
    addImage(fileName: string, cell: Cell): void;
    cloneRows(srcRowStart: number, srcRowEnd: number, countClones?: number): void;
    copyCellRange(rangeSrc: CellRange, rangeDest: CellRange): void;
    getSheetDimension(): CellRange;
    /** Iterate cells from the left of the top to the right of the bottom */
    eachCell(cellRange: CellRange, callBack: iterateCells): void;
    /** Iterate cells from the right of the bottom to the top of the left */
    eachCellReverse(cellRange: CellRange, callBack: iterateCells): void;
    private getMergeRange;
    private moveRow;
    private copyRow;
    private copyCell;
    private clearRow;
}
