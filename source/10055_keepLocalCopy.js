// Module ID: 10055
// Function ID: 10056
// Name: keepLocalCopy
// Dependencies: [10054]

// Module 10055 (keepLocalCopy)
const require = arg1;
const dependencyMap = arg6;
arg5.keepLocalCopy = function keepLocalCopy(arg0) {
  const NativeDocumentPicker = require(10054) /* NativeDocumentPicker */.NativeDocumentPicker;
  return NativeDocumentPicker.keepLocalCopy(arg0);
};
