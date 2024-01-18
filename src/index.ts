import assertDefined = require('@santi100a/assertion-lib/cjs/defined');
import assertTypeOf = require('@santi100a/assertion-lib/cjs/type-of');

namespace Line {
	export interface Point {
		readonly x: number;
		readonly y: number;
	}
}

class Line {
	readonly a: Line.Point;
	readonly b: Line.Point;

	constructor(a: Line.Point, b: Line.Point) {
		assertDefined(a, 'a');
		assertDefined(b, 'b');
		assertTypeOf(a.x, 'number', 'a.x');
		assertTypeOf(a.y, 'number', 'a.y');
		assertTypeOf(b.x, 'number', 'b.x');
		assertTypeOf(b.y, 'number', 'b.y');

		this.a = a;
		this.b = b;
	}
	slope() {
		if (this.a.x == this.b.x)
			throw new RangeError('Vertical line: undefined slope');

		return (this.a.y - this.b.y) / (this.a.x - this.b.x);
	}
	intercept() {
		if (this.a.x == this.b.x) return this.a.x;
		return this.a.y - this.slope() * this.a.x;
	}
	evaluate(x: number) {
		assertTypeOf(x, 'number', 'x');
		return this.slope() * x + this.intercept();
	}
}

export = Line;
