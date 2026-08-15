// Module ID: 4393
// Function ID: 4394
// Name: getIterator
// Dependencies: []

// Module 4393 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
