

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

describe("isEven", function (){
    it("should be defined as a function", function(){
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean value no matter the input', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it("should return true when executed with  2", function(){
        expect( isEven(2)).toBe(true)
    });

    it ("should return true when executed with -4", function(){
        expect( isEven(-4)).toBe(true);
    });
    it("should return false when executed with 3", function (){
        expect( isEven(3)).toBe(false);
    });
    it("should returns false when called with banana", function() {
        expect(isEven("banana")).toBe(false);
    });
    it("should return true when called with 8", function () {
        expect(isEven("8")).toBe(true);
    });
    it("should returns false when called with Infinity", function(){
        expect(isEven("Infinity")).toBe(false);
    });
    it("should return false when called with a boolean input  ", function(){
        expect(isEven("boolean")).toBe(false);
    });
    it("should returns false when called without an argument like isEven()", function() {
        expect(isEven()).toBe(false);
    });
});


describe('isVowel', function () {
    it('should be defined as a function.', function () {
        expect(typeof isVowel).toBe("function")
    });
    it('should never return undefined when called.', function () {
        expect(isVowel()).not.toBe(undefined)
    });
    it('should always return a boolean value', function () {
        expect(typeof isVowel()).toBe("boolean")
    });
    it('should return true when passed "a".', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('should return true when passed "A".', function () {
        expect(isVowel("A")).toBe(true)
    });
    it('should return false when passed "Y".', function () {
        expect(isVowel("Y")).toBe(false)
    });
    it('should return false when passed 4.', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should return false when passed the boolean true.', function () {
        expect(isVowel(true)).toBe(false)
    });
    it('should return false when passed the boolean false.', function () {
        expect(isVowel(false)).toBe(false)
    });
    it('should return false when passed the string "banana".', function () {
        expect(isVowel("banana")).toBe(false)
    });
    it('should return false when not passing an argument.', function () {
        expect(isVowel()).toBe(false)
    });
});

