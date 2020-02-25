let assert = require("assert");
let arrLib = require("../arr-lib");

describe("arr-lib", function () {
    describe("function max()", function () {
        it("should return 5 when value is [1, 3, 2, 5, 3]", function () {
            assert.equal(arrLib.max([1, 3, 2, 5, 3]), 5);
        });
        it("should return 3 when value is [1, 3, 2]", function () {
            assert.equal(arrLib.max([1, 3, 2]), 3);
        });
    });
    describe("function min()", function () {
        it("should return 1 when value is [1, 3, 2, 5, 3]", function () {
            assert.equal(arrLib.min([1, 3, 2, 5, 3]), 1);
        });
        it("should return 3 when value is [3, 1, 2]", function () {
            assert.equal(arrLib.min([3, 1, 2]), 1);
        });
    });
    describe("function mean()", function () {
        it("should return 1 when value is [1, 3, 2, 5, 3]", function () {
            assert.equal(arrLib.mean([1, 3, 2, 5, 3]), 2.8);
        });
    });
    describe("function sort()", function () {
        it("should return [1, 2, 3, 3, 5] when value is [1, 3, 2, 5, 3] and 'bubble'", function () {
            assert.deepEqual(arrLib.sort([1, 3, 2, 5, 3], "bubble"), [1, 2, 3, 3, 5]);
        });
        it("should return [] when value is [] and 'bubble'", function () {
            assert.deepEqual(arrLib.sort([], "bubble"), []);
        });
        it("should return [1, 2, 3, 3, 5] when value is [1, 3, 2, 5, 3] and 'selection'", function () {
            assert.deepEqual(arrLib.sort([1, 3, 2, 5, 3], "selection"), [1, 2, 3, 3, 5]);
        });
        it("should return Error(\"Unsupported algorithm\") when value is [1, 3, 2, 5, 3] and 'shell'", function () {
            assert.deepEqual(arrLib.sort([1, 3, 2, 5, 3], "shell"), Error("Unsupported algorithm"));
        });
    });
    describe("function getMaxSubSum()", function () {
        it("should return 14 when value is [1, 3, 2, 5, 3]", function () {
            assert.equal(arrLib.getMaxSubSum([1, 3, 2, 5, 3]), 14);
        });
        it("should return 5 when value is [-1, 2, 3, -9]", function () {
            assert.equal(arrLib.getMaxSubSum([-1, 2, 3, -9]), 5);
        });
        it("should return 6 when value is [2, -1, 2, 3, -9]", function () {
            assert.equal(arrLib.getMaxSubSum([2, -1, 2, 3, -9]), 6);
        });
        it("should return 11 when value is [-1, 2, 3, -9, 11]", function () {
            assert.equal(arrLib.getMaxSubSum([-1, 2, 3, -9, 11]), 11);
        });
        it("should return 3 when value is [-2, -1, 1, 2]", function () {
            assert.equal(arrLib.getMaxSubSum([-2, -1, 1, 2]), 3);
        });
        it("should return 100 when value is [100, -9, 2, -3, 5]", function () {
            assert.equal(arrLib.getMaxSubSum([100, -9, 2, -3, 5]), 100);
        });
        it("should return 6 when value is [1, 2, 3]", function () {
            assert.equal(arrLib.getMaxSubSum([1, 2, 3]), 6);
        });
        it("should return 0 when value is [-1, -2, -3]", function () {
            assert.equal(arrLib.getMaxSubSum([-1, -2, -3]), -1);
        });
        it("should return null when value is []", function () {
            assert.equal(arrLib.getMaxSubSum([]), null);
        });
        it("should return -1 when value is [-1]", function () {
            assert.equal(arrLib.getMaxSubSum([-1]), -1);
        });
        it("should return 2 when value is [2,-1]", function () {
            assert.equal(arrLib.getMaxSubSum([2, -1]), 2);
        });
        it("should return 6 when value is [-2, 1, -3, 4, -1, 2, 1, -5, 4]", function () {
            assert.equal(arrLib.getMaxSubSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
        });
        it("should return 12 when value is [8, -7, -3, 5, 6, -2, 3, -4, 2]", function () {
            assert.equal(arrLib.getMaxSubSum([8, -7, -3, 5, 6, -2, 3, -4, 2]), 12);
        });
    });
});
