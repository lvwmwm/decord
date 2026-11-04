// Module ID: 11101
// Function ID: 11102
// Name: react-native
// Dependencies: [11102]
// Exports: isKnownType

// Module 11101 (react-native)
import react_native from "react-native" /* 11102 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
