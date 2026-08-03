// Module ID: 9991
// Function ID: 9992
// Name: isKnownType
// Dependencies: [9992]

// Module 9991 (isKnownType)
const require = arg1;
const dependencyMap = arg6;
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = require(9992) /* NativeDocumentPicker */.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
