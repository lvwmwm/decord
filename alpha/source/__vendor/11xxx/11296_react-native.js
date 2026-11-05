// Module ID: 11296
// Function ID: 11297
// Name: react-native
// Dependencies: [11297]
// Exports: isKnownType

// Module 11296 (react-native)
import react_native from "react-native" /* 11297 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
