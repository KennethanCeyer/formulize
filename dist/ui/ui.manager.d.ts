import { UiAnalyzer } from './ui.analyzer';
import { Position } from './ui.interface';
import { Tree } from 'metric-parser/dist/types/tree/simple.tree/type';
export declare abstract class UIManager extends UiAnalyzer {
    protected prevCursorIndex: number;
    protected _position: Position;
    protected dragged: boolean;
    protected moved: boolean;
    pick(position?: Position): void;
    setData(data: Tree): void;
    getData(extractor?: (data: Tree) => void): Tree;
    protected triggerUpdate(): void;
    private getExpression();
    protected startDrag(position: Position): void;
    protected endDrag(position: Position): void;
    protected moveDrag(position: Position): void;
    private findClosestUnit(position);
    protected setCursorValue(elem: HTMLElement, value: string): void;
    protected selectRange(start: number, end: number): void;
    protected removeBefore(): void;
    protected removeAfter(): void;
    private moveCursorBefore(elem);
    private moveCursorAfter(elem);
    protected moveLeftCursor(dragMode?: boolean): void;
    protected moveUpCursor(): void;
    protected moveRightCursor(dragMode?: boolean): void;
    protected moveDownCursor(): void;
    protected moveFirstCursor(dragMode?: boolean): void;
    protected moveLastCursor(dragMode?: boolean): void;
    clear(): void;
    blur(): void;
    removeDrag(): void;
    selectAll(): void;
    insert(obj: string | number | HTMLElement, position?: Position): void;
    insertKey(key: string): void;
    insertData(data: string | string[] | any[]): void;
    validate(extractor?: (valid: boolean) => void): void;
    protected isValidKey(key: string): boolean;
}
