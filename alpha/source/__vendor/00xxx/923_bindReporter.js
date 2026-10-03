// Module ID: 923
// Function ID: 924
// Name: bindReporter
// Dependencies: []
// Exports: bindReporter

// Module 923 (bindReporter)
let diff, value2;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const bindReporter = (arg0, arg1, arg2, arg3) => {
  let closure_0 = arg0;
  let value = arg1;
  let closure_2 = arg2;
  let closure_3 = arg3;
  return (arg0) => {
    let tmp = value.value >= 0;
    if (tmp) {
      tmp = arg0 || closure_3;
    }
    if (tmp) {
      let num = value2;
      value = iter.value;
      if (value2 == null) {
        num = 0;
      }
      diff = value - num || undefined === value2;
      tmp = diff;
    }
    if (tmp) {
      value.delta = diff;
      value2 = iter.value;
      let str = "poor";
      if (value2 <= closure_2[1]) {
        let str2 = "good";
        if (value2 > closure_2[0]) {
          str2 = "needs-improvement";
        }
        str = str2;
      }
      value.rating = str;
      closure_0(value);
    }
  };
};
