// Module ID: 5764
// Function ID: 5765
// Name: _assertThisInitialized
// Dependencies: []

// Module 5764 (_assertThisInitialized)

export default function _assertThisInitialized(arg0) {
  if (undefined === arg0) {
    const _ReferenceError = ReferenceError;
    const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
    throw referenceError;
  } else {
    return arg0;
  }
};
