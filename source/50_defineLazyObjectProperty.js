// Module ID: 50
// Function ID: 1360
// Name: defineLazyObjectProperty
// Dependencies: []

// Module 50 (defineLazyObjectProperty)
arg5.default = function defineLazyObjectProperty(arg0, arg1, get) {
  function setValue(value) {
    let closure_6 = true;
    Object.defineProperty(value, arg1, { value, configurable: true, enumerable: tmp, writable: closure_5 });
  }
  get = get.get;
  const tmp = false !== get.enumerable;
  let closure_5 = false !== get.writable;
  let closure_6 = false;
  Object.defineProperty(arg0, arg1, {
    get: function getValue() {
      if (!closure_6) {
        closure_6 = true;
        setValue(get());
      }
      return closure_2;
    },
    set: setValue,
    configurable: true,
    enumerable: tmp
  });
};
