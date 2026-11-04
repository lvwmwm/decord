// Module ID: 5646
// Function ID: 5647
// Name: _nonIterableRest
// Dependencies: []

// Module 5646 (_nonIterableRest)

export default function _nonIterableRest() {
  const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  throw typeError;
};
