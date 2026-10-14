// Module ID: 6546
// Function ID: 6547
// Name: _nonIterableRest
// Dependencies: []

// Module 6546 (_nonIterableRest)

export default function _nonIterableRest() {
  const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  throw typeError;
};
