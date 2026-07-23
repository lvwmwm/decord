// Module ID: 4378
// Function ID: 38805
// Name: getIterator
// Dependencies: []

// Module 4378 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
