const rewire = require("rewire");

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'));

describe("1. Two numbers in range", () => {
    test("`true` is printed if either number is in range or `false` is printed if none of the numbers are in range", () => {
        const solution = rewire("../solution.js");
        const solutionFile = require("../solution.js");
        const int1 = solution.__get__("int1");
        const int2 = solution.__get__("int2");
        expect(consoleSpy).toHaveBeenCalledWith(
            int1 >= 50 && int1 <= 99 || int2 >= 50 && int2 <= 99
                ? true
                : false
        );
    });
})

describe("2. Three numbers in range", () => {
    test("`true` is printed if either number is in range or `false` is printed if none of the numbers are in range", () => {
        const solution = rewire("../solution.js");
        const solutionFile = require("../solution.js");
        const int1 = solution.__get__("int1");
        const int2 = solution.__get__("int2");
        const int3 = solution.__get__("int3");
        expect(consoleSpy).toHaveBeenCalledWith(
            int1 >= 50 && int1 <= 99 || int2 >= 50 && int2 <= 99 || int3 >= 50 && int3 <= 99
                ? true
                : false
        );
    });
})

describe("3. Largest value", () => {
    test("Largest value of `a`, `b` and `c` is printed", () => {
        const solution = rewire("../solution.js");
        const solutionFile = require("../solution.js");
        const a = solution.__get__("a");
        const b = solution.__get__("b");
        const c = solution.__get__("c");
        expect(consoleSpy).toHaveBeenCalledWith(Math.max(a, b, c));
    });
    test("Largest value of `int1`, `int2` and `int3` is printed", () => {
        const solution = rewire("../solution.js");
        const solutionFile = require("../solution.js");
        const int1 = solution.__get__("int1");
        const int2 = solution.__get__("int2");
        const int3 = solution.__get__("int3");
        expect(consoleSpy).toHaveBeenCalledWith(Math.max(int1, int2, int3));
    });
})

describe("4. Conditional String", () => {
    test("'Py' is added to the output only when not at beginning of original string", () => {
        const solution = rewire("../solution.js");
        const solutionFile = require("../solution.js");
        const prefix = "Py"
        const str = solution.__get__("str");
        expect(consoleSpy).toHaveBeenCalledWith(
            str.substring(0, 2) === prefix ? str : `${prefix}${str}`
        );
    })
})

describe("5. Sum in range", () => {
    test("`65` is printed if sum of both varables is in range, otherwise `80` is printed", () => {
        const solution = rewire("../solution.js");
        const solutionFile = require("../solution.js");
        const int1 = solution.__get__("int1");
        const int2 = solution.__get__("int2");
        expect(consoleSpy).toHaveBeenCalledWith(
            int1 + int2 >= 50 && int1 + int2 <= 80
                ? 65
                : 80
        );
    })
    
})

describe("6. Sum or difference", () => {
    test("If sum or difference of variables is 8, true is printed, otherwise false", () => {
        const solution = rewire("../solution.js");
        const solutionFile = require("../solution.js");
        const int4 = solution.__get__("int4");
        const int5 = solution.__get__("int5");
        (int4 + int5 === 8 || int4 - int5 === 8) ? expect(consoleSpy).toHaveBeenCalledWith(true) : expect(consoleSpy).toHaveBeenCalledWith(false);
    })
})

describe("7. Value or sum", () => {
    test("If value of the two variables or their sum is 15, true is printed, otherwise false", () => {
        const solution = rewire("../solution.js");
        const solutionFile = require("../solution.js");
        const int4 = solution.__get__("int4");
        const int5 = solution.__get__("int5");
        (int4 === 15 || int5 === 15 || int4 + int5 === 15) ? expect(consoleSpy).toHaveBeenCalledWith(true) : expect(consoleSpy).toHaveBeenCalledWith(false);

    })
})

describe("8. Multiple", () => {
    test("If value of either variable is multiple of 7 or 11, true is printed, otherwise false", () => {
        const solution = rewire("../solution.js");
        const solutionFile = require("../solution.js");
        const int4 = solution.__get__("int4");
        const int5 = solution.__get__("int5");
        (int4 % 7 === 0 || int5 % 7 === 0 || int4 % 11 === 0 || int5 % 11 === 0) ? expect(consoleSpy).toHaveBeenCalledWith(true) : expect(consoleSpy).toHaveBeenCalledWith(false);
    })
    
})

describe("9. Tripple or sum", () => {
    test("If values of both variables are equal, triple of their sum is printed, otherwise their sum is printed", () => {
        const solution = rewire("../solution.js");
        const solutionFile = require("../solution.js");
        const int4 = solution.__get__("int4");
        const int5 = solution.__get__("int5");
        expect(consoleSpy).toHaveBeenCalledWith(
            int4 === int5
                ? int4 + int5 * 3
                : int4 + int5
        );
    })
    
})

describe("10. Double or difference", () => {
    test("If the value of `int5` is greater than 19, double of the difference to 19 should be printed, otherwise the difference should be printed", () => {
        const solution = rewire("../solution.js");
        const solutionFile = require("../solution.js");
        const int5 = solution.__get__("int5");
        expect(consoleSpy).toHaveBeenCalledWith(
            int5 > 19
                ? 2 * (int5 - 19)
                : int5 - 19
        );
    })
    
})