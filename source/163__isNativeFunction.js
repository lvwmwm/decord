// Module ID: 163
// Function ID: 2474
// Name: _isNativeFunction
// Dependencies: []

// Module 163 (_isNativeFunction)

export default function _isNativeFunction(arg0) {
  return -1 !== toString.call(arg0).indexOf("[native code]");
};
