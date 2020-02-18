let assert = require("assert");
let arrLib = require("../arr-lib");

describe("arr-lib", function () {
    describe("function max()", function () {
        it("should return 5 when value is [1, 3, 2, 5, 3]", function () {
            assert.strictEqual(arrLib.max([1, 3, 2, 5, 3]), 5);
        });
    });
    describe("function min()", function () {
        it("should return 1 when value is [1, 3, 2, 5, 3]", function () {
            assert.strictEqual(arrLib.min([1, 3, 2, 5, 3]), 1);
        });
    });
    describe("function mean()", function () {
        it("should return 1 when value is [1, 3, 2, 5, 3]", function () {
            assert.strictEqual(arrLib.mean([1, 3, 2, 5, 3]), 2.8);
        });
    });
    describe("function sort()", function () {
        it("should return [1, 2, 3, 3, 5] when value is [1, 3, 2, 5, 3] and 'bubble'", function () {
            assert.deepStrictEqual(arrLib.sort([1, 3, 2, 5, 3],"bubble"), [1, 2, 3, 3, 5]);
        });
        it("should return [] when value is [] and 'bubble'", function () {
            assert.deepStrictEqual(arrLib.sort([],"bubble"), []);
        });
        it("should return [1, 2, 3, 3, 5] when value is [1, 3, 2, 5, 3] and 'selection'", function () {
            assert.deepStrictEqual(arrLib.sort([1, 3, 2, 5, 3],"selection"), [1, 2, 3, 3, 5]);
        });
    });
    describe("function getMaxSubSum()", function () {
        it("should return 14 when value is [1, 3, 2, 5, 3]", function () {
            assert.deepStrictEqual(arrLib.getMaxSubSum([1, 3, 2, 5, 3]), 14);
        });
        it("should return 5 when value is [-1, 2, 3, -9]", function () {
            assert.deepStrictEqual(arrLib.getMaxSubSum([-1, 2, 3, -9]), 5);
        });
        it("should return 6 when value is [2, -1, 2, 3, -9]", function () {
            assert.deepStrictEqual(arrLib.getMaxSubSum([2, -1, 2, 3, -9]), 6);
        });
        it("should return 11 when value is [-1, 2, 3, -9, 11]", function () {
            assert.deepStrictEqual(arrLib.getMaxSubSum([-1, 2, 3, -9, 11]), 11);
        });
        it("should return 3 when value is [-2, -1, 1, 2]", function () {
            assert.deepStrictEqual(arrLib.getMaxSubSum([-2, -1, 1, 2]), 3);
        });
        it("should return 100 when value is [100, -9, 2, -3, 5]", function () {
            assert.deepStrictEqual(arrLib.getMaxSubSum([100, -9, 2, -3, 5]), 100);
        });
        it("should return 6 when value is [1, 2, 3]", function () {
            assert.deepStrictEqual(arrLib.getMaxSubSum([1, 2, 3]), 6);
        });
        it("should return 0 when value is [-1, -2, -3]", function () {
            assert.deepStrictEqual(arrLib.getMaxSubSum([-1, -2, -3]), 0);
        });
        it("should return 0 when value is []", function () {
            assert.deepStrictEqual(arrLib.getMaxSubSum([]), 0);
        });
    });
});
