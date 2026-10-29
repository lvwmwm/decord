// Module ID: 5541
// Function ID: 5542
// Name: _nonIterableRest
// Dependencies: []

// Module 5541 (_nonIterableRest)

export default function _nonIterableRest() {
  const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  throw typeError;
};
