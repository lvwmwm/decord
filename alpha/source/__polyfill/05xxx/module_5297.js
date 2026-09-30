// Module ID: 5297
// Function ID: 5298
// Dependencies: []

// Module 5297

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
