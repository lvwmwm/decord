// Module ID: 5141
// Function ID: 43611
// Name: _nonIterableRest
// Dependencies: []

// Module 5141 (_nonIterableRest)

export default function _nonIterableRest() {
  const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  throw typeError;
};
