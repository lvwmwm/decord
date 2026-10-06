// Module ID: 6354
// Function ID: 6355
// Name: _nonIterableRest
// Dependencies: []

// Module 6354 (_nonIterableRest)

export default function _nonIterableRest() {
  const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  throw typeError;
};
