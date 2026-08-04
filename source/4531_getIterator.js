// Module ID: 4531
// Function ID: 4532
// Name: getIterator
// Dependencies: []

// Module 4531 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
