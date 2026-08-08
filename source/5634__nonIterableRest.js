// Module ID: 5634
// Function ID: 5635
// Name: _nonIterableRest
// Dependencies: []

// Module 5634 (_nonIterableRest)

export default function _nonIterableRest() {
  const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  throw typeError;
};
