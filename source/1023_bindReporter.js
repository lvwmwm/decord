// Module ID: 1023
// Function ID: 11073
// Name: bindReporter
// Dependencies: []

// Module 1023 (bindReporter)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.bindReporter = function bindReporter(closure_0, metric, closure_2, reportAllChanges) {
  return (arg0) => {
    let tmp = arg0;
    let tmp2 = arg1.value >= 0;
    if (tmp2) {
      if (!tmp) {
        tmp = arg3;
      }
      tmp2 = tmp;
    }
    if (tmp2) {
      let num = 0;
      if (null != value) {
        num = value;
      }
      let diff = arg1.value - num;
      if (!diff) {
        diff = undefined === value;
      }
      tmp2 = diff;
    }
    if (tmp2) {
      let value = arg1.value;
      arg1.delta = diff;
      value = arg1.value;
      let str = "poor";
      if (value <= arg2[1]) {
        let str2 = "good";
        if (value > arg2[0]) {
          str2 = "needs-improvement";
        }
        str = str2;
      }
      arg1.rating = str;
      arg0(arg1);
    }
  };
};
