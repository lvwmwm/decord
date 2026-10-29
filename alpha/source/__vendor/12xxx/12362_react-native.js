// Module ID: 12362
// Function ID: 12363
// Name: react-native
// Dependencies: [12363]
// Exports: isKnownType

// Module 12362 (react-native)
import react_native from "react-native" /* 12363 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
