// Module ID: 4732
// Function ID: 4733
// Name: getIterator
// Dependencies: []

// Module 4732 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
