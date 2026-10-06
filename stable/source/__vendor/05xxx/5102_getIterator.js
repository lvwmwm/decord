// Module ID: 5102
// Function ID: 5103
// Name: getIterator
// Dependencies: []

// Module 5102 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
