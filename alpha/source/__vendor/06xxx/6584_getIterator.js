// Module ID: 6584
// Function ID: 6585
// Name: getIterator
// Dependencies: []

// Module 6584 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
