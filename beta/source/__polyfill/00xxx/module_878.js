// Module ID: 878
// Function ID: 879
// Dependencies: []
// Exports: isHardCrash

// Module 878

export const isHardCrash = function isHardCrash(str) {
  if (typeof str !== "string") {
    if ("exception" in str) {
      const exception = str.exception;
      let values;
      if (null !== exception) {
        if (undefined !== exception) {
          values = exception.values;
        }
      }
      values2[Symbol.iterator]();
      str = "onerror";
    }
    values2 = str.exception.values;
  }
  values2 = [];
};
