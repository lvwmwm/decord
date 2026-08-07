// Module ID: 4548
// Function ID: 4549
// Name: getIterator
// Dependencies: []

// Module 4548 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
