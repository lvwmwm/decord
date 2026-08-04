// Module ID: 10082
// Function ID: 10083
// Name: isKnownType
// Dependencies: [10083]

// Module 10082 (isKnownType)
const require = arg1;
const dependencyMap = arg6;
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = require(10083) /* NativeDocumentPicker */.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
