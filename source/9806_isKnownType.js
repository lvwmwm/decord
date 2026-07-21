// Module ID: 9806
// Function ID: 76114
// Name: isKnownType
// Dependencies: [643891200]

// Module 9806 (isKnownType)
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = value(arg6[0]).NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
