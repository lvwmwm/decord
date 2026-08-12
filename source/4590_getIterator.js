// Module ID: 4590
// Function ID: 4591
// Name: getIterator
// Dependencies: []

// Module 4590 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
