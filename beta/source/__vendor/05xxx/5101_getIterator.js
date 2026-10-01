// Module ID: 5101
// Function ID: 5102
// Name: getIterator
// Dependencies: []

// Module 5101 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
