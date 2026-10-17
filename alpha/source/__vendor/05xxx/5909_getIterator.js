// Module ID: 5909
// Function ID: 5910
// Name: getIterator
// Dependencies: []

// Module 5909 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
