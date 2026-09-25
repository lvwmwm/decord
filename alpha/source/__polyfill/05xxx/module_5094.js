// Module ID: 5094
// Function ID: 5095
// Dependencies: []

// Module 5094

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
