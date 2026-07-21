// Module ID: 989
// Function ID: 10639
// Name: isHardCrash
// Dependencies: []

// Module 989 (isHardCrash)
arg5.isHardCrash = function isHardCrash(arg0) {
  let str = arg0;
  if ("string" !== typeof arg0) {
    if ("exception" in str) {
      const exception = str.exception;
      let values;
      if (null !== exception) {
        if (undefined !== exception) {
          values = exception.values;
        }
      }
      values[Symbol.iterator]();
      str = "onerror";
    }
    values = str.exception.values;
  }
  values = [];
};
