// Module ID: 4765
// Function ID: 4766
// Name: getIterator
// Dependencies: []

// Module 4765 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
