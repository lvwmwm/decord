// Module ID: 11233
// Function ID: 11234
// Name: react-native
// Dependencies: [11234]
// Exports: isKnownType

// Module 11233 (react-native)
import react_native from "react-native" /* 11234 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
