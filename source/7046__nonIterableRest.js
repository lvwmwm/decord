// Module ID: 7046
// Function ID: 7047
// Name: _nonIterableRest
// Dependencies: []

// Module 7046 (_nonIterableRest)

export default function _nonIterableRest() {
  const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  throw typeError;
};
