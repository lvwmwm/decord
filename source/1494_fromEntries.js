// Module ID: 1494
// Function ID: 17225
// Name: fromEntries
// Dependencies: []
// Exports: default

// Module 1494 (fromEntries)
let closure_0 = importDefault(dependencyMap[0]);

export default function fromEntries(arr) {
  return arr.reduce((arg0, arg1) => {
    const tmp = callback(arg1, 2);
    const first = tmp[0];
    if (arg0.hasOwnProperty(first)) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("A value for key '" + first + "' already exists in the object.");
      throw error;
    } else {
      arg0[first] = tmp[1];
      return arg0;
    }
  }, {});
};
