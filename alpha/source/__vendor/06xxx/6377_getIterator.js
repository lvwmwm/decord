// Module ID: 6377
// Function ID: 6378
// Name: getIterator
// Dependencies: []

// Module 6377 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
