import assertTypeOf = require('@santi100a/assertion-lib/cjs/type-of');
import Point = require('./point');
import assertOneOfTypes = require('@santi100a/assertion-lib/cjs/one-of-types');
import assertDefined = require('@santi100a/assertion-lib/cjs/defined');

class Line {
    readonly slope: number;
    readonly intercept: number;

    constructor(point1: Point, point2: Point);
    constructor(point: Point, slope: number);
    constructor(slope: number, intercept: number);
    
    constructor(param1: Point | number, param2: Point | number) {
        assertOneOfTypes(param1, ['number', 'object'], 'param1');

        // Simplest case: slope and intercept, y = mx + b 
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            this.slope = param1;
            this.intercept = param2;
            return;
        }
        if (typeof param1 === 'object' && typeof param2 === 'number') {
            this.slope = param2;
            // Solve for b, the parameter we are missing
            // y = mx + b
            // y - mx = b
            // We already know the values of x, y and m.

            this.intercept = param1.y - this.slope * param1.x;
            return; 
        }
        assertTypeOf(param1, 'object', 'point1');
        assertTypeOf(param2, 'object', 'point2');
        assertDefined(param1, 'point1');
        assertDefined(param2, 'point2');

        if ((param1 as Point).x == (param2 as Point).x)
            throw new RangeError('Vertical line');
        
        this.slope = (param1 as Point).y - (param2 as Point).y /
                     (param1 as Point).x - (param2 as Point).x;
        this.intercept = (param1 as Point).y - this.slope * (param1 as Point).x;
    }
    evaluate(x: number) {
        return this.slope * x + this.intercept;
    }
}
export = Line;