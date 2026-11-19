// Module ID: 11121
// Function ID: 11122
// Name: react-native
// Dependencies: [11122]
// Exports: isKnownType

// Module 11121 (react-native)
import react_native from "react-native" /* 11122 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
