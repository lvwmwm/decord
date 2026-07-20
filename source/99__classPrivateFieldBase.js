// Module ID: 99
// Function ID: 1573
// Name: _classPrivateFieldBase
// Dependencies: []

// Module 99 (_classPrivateFieldBase)

export default function _classPrivateFieldBase(arg0, arg1) {
  const hasOwnProperty = {}.hasOwnProperty;
  if (hasOwnProperty.call(arg0, arg1)) {
    return arg0;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("attempted to use private field on non-instance");
    throw typeError;
  }
};
