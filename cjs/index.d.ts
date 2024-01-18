declare namespace Line {
    interface Point {
        readonly x: number;
        readonly y: number;
    }
}
declare class Line {
    readonly a: Line.Point;
    readonly b: Line.Point;
    constructor(a: Line.Point, b: Line.Point);
    slope(): number;
    intercept(): number;
    evaluate(x: number): number;
}
export = Line;
