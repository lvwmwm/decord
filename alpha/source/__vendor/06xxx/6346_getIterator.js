// Module ID: 6346
// Function ID: 6347
// Name: getIterator
// Dependencies: []

// Module 6346 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
