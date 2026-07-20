// Module ID: 5171
// Function ID: 43797
// Name: _inherits
// Dependencies: []

// Module 5171 (_inherits)

export default function _inherits(value) {
  if ("function" !== typeof arg1) {
    if (null !== arg1) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Super expression must either be null or a function");
      throw typeError;
    }
  }
  let prototype = arg1;
  if (arg1) {
    prototype = arg1.prototype;
  }
  const obj = { EntryPointCommandButtonActions: null, NATIVE_SECTION: null, 1476351743: null, value };
  value.prototype = Object.create(prototype, { constructor: obj });
  Object.defineProperty(value, "prototype", { writable: false });
  if (arg1) {
    require(dependencyMap[0])(value, arg1);
  }
};
