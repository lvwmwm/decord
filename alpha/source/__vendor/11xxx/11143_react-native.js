// Module ID: 11143
// Function ID: 11144
// Name: react-native
// Dependencies: [11144]
// Exports: isKnownType

// Module 11143 (react-native)
import react_native from "react-native" /* 11144 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
