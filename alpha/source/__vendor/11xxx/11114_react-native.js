// Module ID: 11114
// Function ID: 11115
// Name: react-native
// Dependencies: [11115]
// Exports: isKnownType

// Module 11114 (react-native)
import react_native from "react-native" /* 11115 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
