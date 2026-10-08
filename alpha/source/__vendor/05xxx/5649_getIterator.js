// Module ID: 5649
// Function ID: 5650
// Name: getIterator
// Dependencies: []

// Module 5649 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
