// Module ID: 153
// Function ID: 2398
// Name: _readOnlyError
// Dependencies: []

// Module 153 (_readOnlyError)

export default function _readOnlyError(arg0) {
  const typeError = new TypeError("\"" + arg0 + "\" is read-only");
  throw typeError;
};
