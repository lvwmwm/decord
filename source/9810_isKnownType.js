// Module ID: 9810
// Function ID: 76098
// Name: isKnownType
// Dependencies: [9811]

// Module 9810 (isKnownType)
const require = arg1;
const dependencyMap = arg6;
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = require(9811) /* NativeDocumentPicker */.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
