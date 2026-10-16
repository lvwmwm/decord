// Module ID: 5872
// Function ID: 5873
// Name: getIterator
// Dependencies: []

// Module 5872 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
