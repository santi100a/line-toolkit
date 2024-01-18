describe('Line tests', () => {
    const Line = require('..');
    it('can build a line from a pair of points', () => {
        const line = new Line({ x: 5, y: 3 }, { x: 2, y: 7 });
        expect(line.slope())
            .toBeCloseTo(-4/3);
        expect(line.intercept())
            .toBeCloseTo(3 + 4/3 * 5);
        expect(line.evaluate(7))
            .toBeCloseTo(-4/3 * 7 + (3 + 4/3 * 5));
    });
});