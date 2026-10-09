// Module ID: 5650
// Function ID: 5651
// Name: getIterator
// Dependencies: []

// Module 5650 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
