// Module ID: 5040
// Function ID: 5041
// Dependencies: []

// Module 5040

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
