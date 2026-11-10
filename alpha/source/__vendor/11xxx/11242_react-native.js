// Module ID: 11242
// Function ID: 11243
// Name: react-native
// Dependencies: [11243]
// Exports: isKnownType

// Module 11242 (react-native)
import react_native from "react-native" /* 11243 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
