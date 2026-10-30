// Module ID: 11082
// Function ID: 11083
// Name: react-native
// Dependencies: [11083]
// Exports: isKnownType

// Module 11082 (react-native)
import react_native from "react-native" /* 11083 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
