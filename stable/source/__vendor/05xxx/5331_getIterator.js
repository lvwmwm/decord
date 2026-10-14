// Module ID: 5331
// Function ID: 5332
// Name: getIterator
// Dependencies: []

// Module 5331 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
