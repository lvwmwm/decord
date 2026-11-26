// Module ID: 10703
// Function ID: 10704
// Name: react-native
// Dependencies: [10704]
// Exports: isKnownType

// Module 10703 (react-native)
import react_native from "react-native" /* 10704 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
