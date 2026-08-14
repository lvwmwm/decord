// Module ID: 4613
// Function ID: 4614
// Name: getIterator
// Dependencies: []

// Module 4613 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
