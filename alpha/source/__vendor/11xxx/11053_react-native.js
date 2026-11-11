// Module ID: 11053
// Function ID: 11054
// Name: react-native
// Dependencies: [11054]
// Exports: isKnownType

// Module 11053 (react-native)
import react_native from "react-native" /* 11054 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
