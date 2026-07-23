// Module ID: 494
// Function ID: 6424
// Name: unsafeStringify
// Dependencies: [495]

// Module 494 (unsafeStringify)
const module = arg2;
const dependencyMap = arg6;
function unsafeStringify(array) {
  let num = 0;
  if (arguments.length > 1) {
    num = 0;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  return items[array[num]] + items[array[num + 1]] + items[array[num + 2]] + items[array[num + 3]] + "-" + items[array[num + 4]] + items[array[num + 5]] + "-" + items[array[num + 6]] + items[array[num + 7]] + "-" + items[array[num + 8]] + items[array[num + 9]] + "-" + items[array[num + 10]] + items[array[num + 11]] + items[array[num + 12]] + items[array[num + 13]] + items[array[num + 14]] + items[array[num + 15]];
}
const items = [];
let num = 0;
do {
  let str = num + 256;
  str = require("module_16");
  let arr = items.push(require("module_1"));
  num = num + 1;
} while (num < 256);
arg5.default = function stringify(arg0) {
  let num = 0;
  if (arguments.length > 1) {
    num = 0;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  const tmpResult = unsafeStringify(arg0, num);
  if (module(495)(tmpResult)) {
    return tmpResult;
  } else {
    const _TypeError = TypeError;
    throw TypeError("Stringified UUID is invalid");
  }
  const tmp = unsafeStringify;
};
arg5.unsafeStringify = unsafeStringify;
