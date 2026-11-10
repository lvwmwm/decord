// Module ID: 5664
// Function ID: 5665
// Name: _assertThisInitialized
// Dependencies: []

// Module 5664 (_assertThisInitialized)

export default function _assertThisInitialized(arg0) {
  if (undefined === arg0) {
    const _ReferenceError = ReferenceError;
    const self = this;
    const self2 = this;
    const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
    throw referenceError;
  } else {
    return arg0;
  }
};
