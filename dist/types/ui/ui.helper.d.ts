import { Position } from './ui.interface';
export declare class UIHelper {
    static getDataValue(elem: HTMLElement): string;
    static isOverDistance(position: Position, targetPosition: Position, distance: number): boolean;
    static getDragElement(id: string): HTMLElement;
    static getCursorElement(id: string): HTMLElement;
}
