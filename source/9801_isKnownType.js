// Module ID: 9801
// Function ID: 76098
// Name: isKnownType
// Dependencies: [643563520]

// Module 9801 (isKnownType)
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = value(arg6[0]).NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
