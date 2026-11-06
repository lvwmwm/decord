// Module ID: 11251
// Function ID: 11252
// Name: react-native
// Dependencies: [11252]
// Exports: isKnownType

// Module 11251 (react-native)
import react_native from "react-native" /* 11252 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
