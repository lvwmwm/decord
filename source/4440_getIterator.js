// Module ID: 4440
// Function ID: 4441
// Name: getIterator
// Dependencies: []

// Module 4440 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
