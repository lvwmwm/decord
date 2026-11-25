// Module ID: 10658
// Function ID: 10659
// Name: react-native
// Dependencies: [10659]
// Exports: isKnownType

// Module 10658 (react-native)
import react_native from "react-native" /* 10659 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
