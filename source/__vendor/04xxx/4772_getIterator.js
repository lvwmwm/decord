// Module ID: 4772
// Function ID: 4773
// Name: getIterator
// Dependencies: []

// Module 4772 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
