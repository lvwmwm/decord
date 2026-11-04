// Module ID: 1634
// Function ID: 1635
// Name: react-native
// Dependencies: [1635]

// Module 1634 (react-native)
import react_native from "react-native" /* 1635 */;

let initialWindowMetrics;
if (react_native != null) {
  const getConstants = react_native.getConstants;
  if (getConstants != null) {
    const constants = getConstants();
    if (constants != null) {
      initialWindowMetrics = constants.initialWindowMetrics;
    }
  }
}
if (initialWindowMetrics == null) {
  initialWindowMetrics = null;
}
let insets;
if (initialWindowMetrics != null) {
  insets = initialWindowMetrics.insets;
}

export { initialWindowMetrics };
export const initialWindowSafeAreaInsets = insets;
