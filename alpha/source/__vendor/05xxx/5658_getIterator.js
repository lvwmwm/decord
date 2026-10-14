// Module ID: 5658
// Function ID: 5659
// Name: getIterator
// Dependencies: []

// Module 5658 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
