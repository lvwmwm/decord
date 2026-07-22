// Module ID: 9807
// Function ID: 76138
// Name: isKnownType
// Dependencies: [643956736]

// Module 9807 (isKnownType)
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = value(arg6[0]).NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
