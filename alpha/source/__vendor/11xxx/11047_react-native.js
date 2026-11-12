// Module ID: 11047
// Function ID: 11048
// Name: react-native
// Dependencies: [11048]
// Exports: isKnownType

// Module 11047 (react-native)
import react_native from "react-native" /* 11048 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
