// Module ID: 1518
// Function ID: 1519
// Name: fromEntries
// Dependencies: []

// Module 1518 (fromEntries)
arg5.default = function fromEntries(entries) {
  return entries.reduce((arg0, arg1) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg1;
    if (arg0.hasOwnProperty(tmp)) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("A value for key '" + tmp + "' already exists in the object.");
      throw error;
    } else {
      arg0[tmp] = tmp2;
      return arg0;
    }
  }, {});
};
