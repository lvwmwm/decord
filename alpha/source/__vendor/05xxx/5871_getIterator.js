// Module ID: 5871
// Function ID: 5872
// Name: getIterator
// Dependencies: []

// Module 5871 (getIterator)

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
