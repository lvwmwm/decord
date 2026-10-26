// Module ID: 6392
// Function ID: 6393
// Name: getIterator
// Dependencies: []

// Module 6392 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
