// Module ID: 4730
// Function ID: 4731
// Name: getIterator
// Dependencies: []

// Module 4730 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
