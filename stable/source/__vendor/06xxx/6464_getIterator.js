// Module ID: 6464
// Function ID: 6465
// Name: getIterator
// Dependencies: []

// Module 6464 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
