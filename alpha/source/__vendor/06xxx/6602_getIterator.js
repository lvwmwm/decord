// Module ID: 6602
// Function ID: 6603
// Name: getIterator
// Dependencies: []

// Module 6602 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
