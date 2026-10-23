// Module ID: 5502
// Function ID: 5503
// Name: _nonIterableRest
// Dependencies: []

// Module 5502 (_nonIterableRest)

export default function _nonIterableRest() {
  const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  throw typeError;
};
