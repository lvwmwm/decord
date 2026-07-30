// Module ID: 9829
// Function ID: 9830
// Name: isKnownType
// Dependencies: [9830]

// Module 9829 (isKnownType)
const require = arg1;
const dependencyMap = arg6;
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = require(9830) /* NativeDocumentPicker */.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
