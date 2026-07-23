// Module ID: 1023
// Function ID: 11074
// Name: bindReporter
// Dependencies: []

// Module 1023 (bindReporter)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.bindReporter = function bindReporter(closure_0, metric, outer1_2, reportAllChanges) {
  let closure_1 = metric;
  let closure_2 = outer1_2;
  let closure_3 = reportAllChanges;
  return (arg0) => {
    let tmp = arg0;
    let tmp2 = metric.value >= 0;
    if (tmp2) {
      if (!tmp) {
        tmp = closure_3;
      }
      tmp2 = tmp;
    }
    if (tmp2) {
      let num = 0;
      if (null != value) {
        num = value;
      }
      let diff = metric.value - num;
      if (!diff) {
        diff = undefined === value;
      }
      tmp2 = diff;
    }
    if (tmp2) {
      value = metric.value;
      metric.delta = diff;
      value = metric.value;
      let str = "poor";
      if (value <= outer1_2[1]) {
        let str2 = "good";
        if (value > outer1_2[0]) {
          str2 = "needs-improvement";
        }
        str = str2;
      }
      metric.rating = str;
      callback(metric);
    }
  };
};
