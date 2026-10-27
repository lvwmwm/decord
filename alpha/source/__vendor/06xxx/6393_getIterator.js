// Module ID: 6393
// Function ID: 6394
// Name: getIterator
// Dependencies: []

// Module 6393 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
