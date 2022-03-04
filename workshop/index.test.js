// Tests for map()
test("map() should return a array", () => {
  const actual = map([], () => {});
  equal(Array.isArray(actual), true);
});

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});

//Tests for filter()

test("filter() should return a array", () => {
  const actual = filter([], () => {});
  equal(Array.isArray(actual), true);
});

test("first element of filter() should return as expected", () => {
  const actual = filter([1, 2], (x) => x > 1);
  const expected = [2];
  equal(actual[0], expected[0]);
});

test("second element of filter() should return as expected", () => {
  const actual = filter([1, 2, 3], (x) => x > 1);
  const expected = [2, 3];
  equal(actual[1], expected[1]);
});

test("filter() with no passing elements should return an empty array", () => {
  const actual = filter([1, 1, 1], (x) => x > 1);
  const expected = [];
  equal(actual[0], expected[0]);
});

test("filter() returns expected result with different function", () => {
  const actual = filter([1, 2, 3, 4], (x) => x % 2 === 0);
  const expected = [2, 4];
  equal(actual[1], expected[1]);
});

test("filter() returns expected result with different function", () => {
  const actual = filter(
    ["cat", "dog", "rabbit", "mouse"],
    (x) => x === "cat" || x === "rabbit"
  );
  const expected = ["cat", "rabbit"];
  equal(actual[0], expected[0]);
  equal(actual[1], expected[1]);
});

// Tests for every()

test("every() should return a boolean", () => {
  const actual = every([], () => {});
  const expected = "boolean";
  equal(typeof actual, expected);
});

test("if all array items are true every() returns true", () => {
  const actual = every([1, 1, 1], (x) => x > 0);
  const expected = true;
  equal(actual, expected);
});

test("if not every array items are true every() returns false", () => {
  const actual = every([1, 2, 3], (x) => x > 1);
  const expected = false;
  equal(actual, expected);
});

test("testing every() with array of strings function", () => {
  const actual = every(["cat", "cat", "dog"], (x) => x === "cat");
  const expected = false;
  equal(actual, expected);
});

test("testing every() with empty array", () => {
  const actual = every([], (x) => x > "cat");
  const expected = true; // .every() returns true on empty array
  equal(actual, expected);
});

// Tests for some()

test("some() should return a boolean", () => {
  const actual = some([], () => {});
  const expected = "boolean";
  equal(typeof actual, expected);
});

test("if first array item is true some() returns true", () => {
  const actual = some([1, 1, 1], (x) => x > 0);
  const expected = true;
  equal(actual, expected);
});

test("if no items are true some() returns false", () => {
  const actual = some([0, -2, -3], (x) => x > 1);
  const expected = false;
  equal(actual, expected);
});

test("testing some() with array of strings function", () => {
  const actual = some(["cat", "cat", "dog"], (x) => x === "cat");
  const expected = true;
  equal(actual, expected);
});

test("testing some() with empty array", () => {
  const actual = some([], (x) => x === "cat");
  const expected = false; // .some() returns false on empty array
  equal(actual, expected);
});

// Tests for find()

test("find() should return undefined if no elements pass true", () => {
  const actual = find([1, 2, 3, 4], (x) => x > 5);
  const expected = undefined;
  equal(actual, expected);
});

test("find() should return the first element if it is true", () => {
  const actual = find([1, 2, 3, 4], (x) => x > 0);
  const expected = 1;
  equal(actual, expected);
});

test("find() should return the third element if it is true", () => {
  const actual = find([1, 2, 3, 4, 5], (x) => x > 2);
  const expected = 3;
  equal(actual, expected);
});

test("find() should return the sixth element if it is true", () => {
  const actual = find([1, 2, 3, 4, 5, 6], (x) => x > 5);
  const expected = 6;
  equal(actual, expected);
});

test("find() should return undefined if empty array is passed", () => {
  const actual = find([1, 2, 3, 4], (x) => x > 5);
  const expected = undefined;
  equal(actual, expected);
});

test("testing find() with array of strings", () => {
  const actual = some(["cat", "cat", "dog"], (x) => x === "cat");
  const expected = true;
  equal(actual, expected);
});

// Tests for reduce()

test("reduce() should return a number if array of numbers is passed on", () => {
  const actual = reduce([1, 2, 3], "+", 0);
  const expected = true;
  equal(typeof actual === "number", expected);
});

test("reduce() should return the correct sum of if + is passed, with init", () => {
  const actual = reduce([10, 5, 2], "+", 0);
  const expected = 17;
  equal(actual, expected);
});

test("reduce() should return the correct sum of if + is passed, without init", () => {
  const actual = reduce([10, 5, 5], "+");
  const expected = 20;
  equal(actual, expected);
});

test("reduce() should return the correct result if - is passed with init", () => {
  const actual = reduce([10, 1, 1], "-", 0);
  const expected = -12;
  equal(actual, expected);
});

test("reduce() should return the correct result if - is passed without init", () => {
  const actual = reduce([10, 1, 1], "-");
  const expected = 8;
  equal(actual, expected);
});

test("reduce() should return the correct result if - is passed without init", () => {
  const actual = reduce([10, 2, 1], "/");
  const expected = 5;
  equal(actual, expected);
});

test("reduce() with strings", () => {
  const actual = reduce(["c", "a", "t"], "+");
  const expected = "cat";
  equal(actual, expected);
});

test("reduce() with strings not with concat operator", () => {
  const actual = reduce(["c", "a", "t"], "-");
  const expected = true;
  equal(Number.isNaN(actual) === true, expected);
});

test("reduce() resturns TypeError if no elements and initialValue is not provided.", () => {
  const actual = reduce();
  const expected = TypeError;
  equal(actual, expected);
});

// Tests for flat()

test("flat() should return a array", () => {
  const actual = flat([], 1);
  equal(Array.isArray(actual), true);
});
