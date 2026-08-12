// Module ID: 10213
// Function ID: 10214
// Name: isKnownType
// Dependencies: [10214]

// Module 10213 (isKnownType)
const require = arg1;
const dependencyMap = arg6;
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = require(10214) /* NativeDocumentPicker */.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
