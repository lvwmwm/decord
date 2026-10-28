// Module ID: 6427
// Function ID: 6428
// Name: getIterator
// Dependencies: []

// Module 6427 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
