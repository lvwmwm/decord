// Module ID: 6424
// Function ID: 6425
// Name: getIterator
// Dependencies: []

// Module 6424 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
