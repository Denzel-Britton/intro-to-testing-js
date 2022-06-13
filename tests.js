

describe('foo', function () {

    it('should  return true if 2 === 2', function () {
        let expectedResult = 2;
        let actualResult = 2;
        expect(actualResult).toBe(expectedResult)
    });
})



describe('sayHello', function () {
    it("should be a defined function", function () {
        expect(typeof sayHello).toBe("function");
    })
    it("should return a string when called", function () {
        expect(typeof sayHello()).toBe("string");
    })
    it("should return the string 'Hello, Jane!' when executed", function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    })
    it("should return the string 'Hello, Alex!'", function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    })
    it("should return the string 'Hello, Pat!' ", function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
    it("should return the string 'Hello, World!' ", function () {
        expect(sayHello()).toBe("Hello, World!");
    })
    it("should return 'Hello, World!' if true", function () {
        expect(sayHello(true)).toBe("Hello, World!");
    })
    it("should return 'Hello, World!' if false ", function () {
        expect(sayHello(false)).toBe("Hello, World!");
    })
})

describe("isFive", function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return a number', function () {
        expect(typeof isFive()).toBe("number");
    })
    it('should return the number 5', function () {
        expect(isFive(5)).toBe(5);
    })
    it('should return true for "5"', function () {
        expect(isFive(true)).toBe('5');
    })
})




