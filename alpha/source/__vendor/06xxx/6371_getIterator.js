// Module ID: 6371
// Function ID: 6372
// Name: getIterator
// Dependencies: []

// Module 6371 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
