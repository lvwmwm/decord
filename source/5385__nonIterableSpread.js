// Module ID: 5385
// Function ID: 46135
// Name: _nonIterableSpread
// Dependencies: []

// Module 5385 (_nonIterableSpread)

export default function _nonIterableSpread() {
  const typeError = new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  throw typeError;
};
