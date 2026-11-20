// Module ID: 11063
// Function ID: 11064
// Name: react-native
// Dependencies: [11064]
// Exports: isKnownType

// Module 11063 (react-native)
import react_native from "react-native" /* 11064 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
