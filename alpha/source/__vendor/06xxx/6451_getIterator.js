// Module ID: 6451
// Function ID: 6452
// Name: getIterator
// Dependencies: []

// Module 6451 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
