// Module ID: 6390
// Function ID: 6391
// Name: getIterator
// Dependencies: []

// Module 6390 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
