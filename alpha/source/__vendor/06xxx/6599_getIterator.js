// Module ID: 6599
// Function ID: 6600
// Name: getIterator
// Dependencies: []

// Module 6599 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
