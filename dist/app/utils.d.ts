import { Pipes } from "./template-engine";
import { Buffer } from "exceljs";
export declare function xlsxBuildByTemplate(data: any, templateFileName: string, pipes?: Pipes): Promise<Buffer>;
