// Module ID: 5167
// Function ID: 43787
// Name: _assertThisInitialized
// Dependencies: []

// Module 5167 (_assertThisInitialized)

export default function _assertThisInitialized(arg0) {
  if (undefined === arg0) {
    const _ReferenceError = ReferenceError;
    const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
    throw referenceError;
  } else {
    return arg0;
  }
};
