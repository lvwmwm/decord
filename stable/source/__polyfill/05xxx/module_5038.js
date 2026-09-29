// Module ID: 5038
// Function ID: 5039
// Dependencies: []

// Module 5038

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
