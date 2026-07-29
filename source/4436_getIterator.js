// Module ID: 4436
// Function ID: 4437
// Name: getIterator
// Dependencies: []

// Module 4436 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
