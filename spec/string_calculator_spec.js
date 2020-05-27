const add = require("../src/string_calculator.js");
describe("string calculator", function () {
  it("should return 0", function () {
    expect(add("")).toEqual(0);
  });
  it("should return single integer passed in as string", function () {
    expect(add("1")).toEqual(1);
  });
  it("should return sum of multiple integers passed in as string", function () {
    expect(add("1,1")).toEqual(2);
  });
  it("should return sum of multiple integers passed in as string", function () {
    expect(add("1,2,3,4")).toEqual(10);
  });
  it("should return sum of new lines between integers", function () {
    expect(add("1\n2,3")).toEqual(6);
  });
  it("should handle different delimiters", function () {
    expect(add("//;\n1;2")).toEqual(3);
  });
  it("should handle different delimiters", function () {
    expect(add("//4\n142")).toEqual(3);
  });
  it("should throw an error if input is a negative number", function () {
    expect(function () {
      add("-1,-2,3,4");
    }).toThrow(new Error(`negativeValues not allowed -1,-2.`));
  });
  it("should ignore integers greater or equal to 1000", function () {
    expect(add("//;\n1000;1;2")).toEqual(3);
  });
  it("should return sum of integers with delimiter of any length", function () {
    expect(add("//***\n1***2***3")).toEqual(6);
  });
  it("should return sum of integers with delimiters [:D][%]", function () {
    expect(add("//[:D][%]\n1:D2%3")).toEqual(6);
  });
  it("should return sum of integers with delimiters [***][%%%]", function () {
    expect(add("//[***][%%%]\n1***2%%%3")).toEqual(6);
  });
  it("should return sum of integers with delimiters [(-_-')][%]", function () {
    expect(add("//[(-_-')][%]\n1(-_-')2%3")).toEqual(6);
  });
  it("should return sum of integers with delimiters [abc][777]", function () {
    expect(add("//[abc][777]\n1abc27773")).toEqual(6);
  });
});