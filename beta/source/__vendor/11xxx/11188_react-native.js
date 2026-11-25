// Module ID: 11188
// Function ID: 11189
// Name: react-native
// Dependencies: [11189]
// Exports: isKnownType

// Module 11188 (react-native)
import react_native from "react-native" /* 11189 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
