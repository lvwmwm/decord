// Module ID: 5420
// Function ID: 46273
// Name: _nonIterableSpread
// Dependencies: []

// Module 5420 (_nonIterableSpread)

export default function _nonIterableSpread() {
  const typeError = new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  throw typeError;
};
