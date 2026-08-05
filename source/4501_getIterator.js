// Module ID: 4501
// Function ID: 4502
// Name: getIterator
// Dependencies: []

// Module 4501 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
