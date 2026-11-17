// Module ID: 11861
// Function ID: 11862
// Name: react-native
// Dependencies: [11862]
// Exports: isKnownType

// Module 11861 (react-native)
import react_native from "react-native" /* 11862 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
