// Module ID: 5395
// Function ID: 5396
// Name: _nonIterableRest
// Dependencies: []

// Module 5395 (_nonIterableRest)

export default function _nonIterableRest() {
  const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  throw typeError;
};
