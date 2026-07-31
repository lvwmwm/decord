// Module ID: 5425
// Function ID: 5426
// Name: _nonIterableRest
// Dependencies: []

// Module 5425 (_nonIterableRest)

export default function _nonIterableRest() {
  const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  throw typeError;
};
