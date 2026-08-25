// Module ID: 4652
// Function ID: 4653
// Name: getIterator
// Dependencies: []

// Module 4652 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
