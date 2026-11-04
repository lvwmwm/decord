// Module ID: 11288
// Function ID: 11289
// Name: react-native
// Dependencies: [11289]
// Exports: isKnownType

// Module 11288 (react-native)
import react_native from "react-native" /* 11289 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
