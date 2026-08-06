// Module ID: 10086
// Function ID: 10087
// Name: keepLocalCopy
// Dependencies: [10085]

// Module 10086 (keepLocalCopy)
const require = arg1;
const dependencyMap = arg6;
arg5.keepLocalCopy = function keepLocalCopy(arg0) {
  const NativeDocumentPicker = require(10085) /* NativeDocumentPicker */.NativeDocumentPicker;
  return NativeDocumentPicker.keepLocalCopy(arg0);
};
