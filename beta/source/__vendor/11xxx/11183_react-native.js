// Module ID: 11183
// Function ID: 11184
// Name: react-native
// Dependencies: [11184]
// Exports: isKnownType

// Module 11183 (react-native)
import react_native from "react-native" /* 11184 */;


export function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
