"use strict";
var assertDefined = require("@santi100a/assertion-lib/cjs/defined");
var assertTypeOf = require("@santi100a/assertion-lib/cjs/type-of");
var Line = /** @class */ (function () {
    function Line(a, b) {
        assertDefined(a, 'a');
        assertDefined(b, 'b');
        assertTypeOf(a.x, 'number', 'a.x');
        assertTypeOf(a.y, 'number', 'a.y');
        assertTypeOf(b.x, 'number', 'b.x');
        assertTypeOf(b.y, 'number', 'b.y');
        this.a = a;
        this.b = b;
    }
    Line.prototype.slope = function () {
        if (this.a.x == this.b.x)
            throw new RangeError('Vertical line: undefined slope');
        return (this.a.y - this.b.y) / (this.a.x - this.b.x);
    };
    Line.prototype.intercept = function () {
        if (this.a.x == this.b.x)
            return this.a.x;
        return this.a.y - this.slope() * this.a.x;
    };
    Line.prototype.evaluate = function (x) {
        assertTypeOf(x, 'number', 'x');
        return this.slope() * x + this.intercept();
    };
    return Line;
}());
module.exports = Line;
