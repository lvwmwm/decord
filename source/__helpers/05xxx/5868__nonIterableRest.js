// Module ID: 5868
// Function ID: 5869
// Name: _nonIterableRest
// Dependencies: []

// Module 5868 (_nonIterableRest)

export default function _nonIterableRest() {
  const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  throw typeError;
};
