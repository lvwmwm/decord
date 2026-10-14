// Module ID: 1627
// Function ID: 1628
// Name: react-native
// Dependencies: [1628]

// Module 1627 (react-native)
import react_native from "react-native" /* 1628 */;

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
