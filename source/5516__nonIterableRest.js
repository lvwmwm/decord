// Module ID: 5516
// Function ID: 5517
// Name: _nonIterableRest
// Dependencies: []

// Module 5516 (_nonIterableRest)

export default function _nonIterableRest() {
  const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  throw typeError;
};
