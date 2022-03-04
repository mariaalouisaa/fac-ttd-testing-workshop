function map(arr, func) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
}

const filter = (arr, func) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) result.push(arr[i]);
  }
  return result;
};

const every = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) !== true) return false;
  }
  return true;
};

const some = (arr, func) => {
  if (arr.length < 1) return false;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) return true;
  }
  return false;
};

const find = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) return arr[i];
  }
  return undefined;
};

const reduce = (arr, sign, init) => {
  let current;
  let start;
  if (!arr || (arr.length < 0 && !init)) return TypeError;
  if (init >= 0) {
    current = init;
    start = 0;
  } else {
    current = arr[0];
    start = 1;
  }
  for (let i = start; i < arr.length; i++) {
    sign === "+"
      ? (current = current + arr[i])
      : sign === "-"
      ? (current = current - arr[i])
      : sign === "*"
      ? (current = current * arr[i])
      : sign === "/"
      ? (current = current / arr[i])
      : null;
  }
  return current;
};

const flat = (arr, depth) => {
  return [];
};
