// Module ID: 4887
// Function ID: 4888
// Dependencies: []

// Module 4887

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
