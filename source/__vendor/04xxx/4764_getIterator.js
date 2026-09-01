// Module ID: 4764
// Function ID: 4765
// Name: getIterator
// Dependencies: []

// Module 4764 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
