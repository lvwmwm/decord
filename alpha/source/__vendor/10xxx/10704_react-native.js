// Module ID: 10704
// Function ID: 10705
// Name: react-native
// Dependencies: [10705]
// Exports: isKnownType

// Module 10704 (react-native)
import react_native from "react-native" /* 10705 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
