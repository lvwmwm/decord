// Module ID: 50
// Function ID: 1360
// Name: defineLazyObjectProperty
// Dependencies: []

// Module 50 (defineLazyObjectProperty)
arg5.default = function defineLazyObjectProperty(arg0, arg1, get) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  function setValue(value) {
    let closure_2 = value;
    let c6 = true;
    Object.defineProperty(closure_0, closure_1, { value, configurable: true, enumerable: closure_4, writable: closure_5 });
  }
  get = get.get;
  let closure_4 = tmp;
  let closure_5 = false !== get.writable;
  let c6 = false;
  Object.defineProperty(arg0, arg1, {
    get: function getValue() {
      if (!c6) {
        c6 = true;
        setValue(get());
      }
      return closure_2;
    },
    set: setValue,
    configurable: true,
    enumerable: false !== get.enumerable
  });
};
