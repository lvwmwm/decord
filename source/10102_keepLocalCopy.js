// Module ID: 10102
// Function ID: 10103
// Name: keepLocalCopy
// Dependencies: [10101]

// Module 10102 (keepLocalCopy)
const require = arg1;
const dependencyMap = arg6;
arg5.keepLocalCopy = function keepLocalCopy(arg0) {
  const NativeDocumentPicker = require(10101) /* NativeDocumentPicker */.NativeDocumentPicker;
  return NativeDocumentPicker.keepLocalCopy(arg0);
};
