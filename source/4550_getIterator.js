// Module ID: 4550
// Function ID: 4551
// Name: getIterator
// Dependencies: []

// Module 4550 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
