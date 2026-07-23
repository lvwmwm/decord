// Module ID: 318
// Function ID: 4859
// Name: areInputsEqual
// Dependencies: []

// Module 318 (areInputsEqual)
function areInputsEqual(arg0, arg1) {
  if (arg0.length !== arg1.length) {
    return false;
  } else {
    let num = 0;
    if (0 < arg0.length) {
      while (true) {
        let tmp = arg0[num];
        let tmp2 = arg1[num];
        if (tmp !== tmp2) {
          let tmp3 = callback;
          if (!callback(tmp)) {
            break;
          } else {
            let tmp4 = callback;
            if (!callback(tmp2)) {
              break;
            }
          }
        }
        num = num + 1;
      }
      return false;
    }
    return true;
  }
}
let closure_0 = Number.isNaN || (function ponyfill(arg0) {
  return "number" === typeof arg0 && arg0 != arg0;
});

export default function memoizeOne(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_4 = [];
  let c5 = false;
  return function memoized() {
    let length;
    const self = this;
    const items = [];
    let num = 0;
    if (0 < arguments.length) {
      do {
        items[num] = arguments[num];
        num = num + 1;
        length = arguments.length;
      } while (num < length);
    }
    let tmp = c5;
    if (c5) {
      tmp = self === self;
    }
    if (tmp) {
      tmp = callback2(items, items);
    }
    if (!tmp) {
      let closure_3 = callback.apply(self, items);
      c5 = true;
    }
    return closure_3;
  };
};
