// Module ID: 11238
// Function ID: 11239
// Name: react-native
// Dependencies: [11239]
// Exports: isKnownType

// Module 11238 (react-native)
import react_native from "react-native" /* 11239 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
