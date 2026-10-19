// Module ID: 11601
// Function ID: 11602
// Name: react-native
// Dependencies: [11602]
// Exports: isKnownType

// Module 11601 (react-native)
import react_native from "react-native" /* 11602 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
