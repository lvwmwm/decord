// Module ID: 6458
// Function ID: 6459
// Name: getIterator
// Dependencies: []

// Module 6458 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
