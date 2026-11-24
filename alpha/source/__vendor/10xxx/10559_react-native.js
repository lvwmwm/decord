// Module ID: 10559
// Function ID: 10560
// Name: react-native
// Dependencies: [10560]
// Exports: isKnownType

// Module 10559 (react-native)
import react_native from "react-native" /* 10560 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
