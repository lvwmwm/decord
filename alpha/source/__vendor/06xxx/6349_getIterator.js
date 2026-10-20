// Module ID: 6349
// Function ID: 6350
// Name: getIterator
// Dependencies: []

// Module 6349 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
