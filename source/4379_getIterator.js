// Module ID: 4379
// Function ID: 38817
// Name: getIterator
// Dependencies: []

// Module 4379 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
