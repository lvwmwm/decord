// Module ID: 11265
// Function ID: 11266
// Name: react-native
// Dependencies: [11266]
// Exports: isKnownType

// Module 11265 (react-native)
import react_native from "react-native" /* 11266 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
