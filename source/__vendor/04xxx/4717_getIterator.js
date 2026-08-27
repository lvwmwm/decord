// Module ID: 4717
// Function ID: 4718
// Name: getIterator
// Dependencies: []

// Module 4717 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
