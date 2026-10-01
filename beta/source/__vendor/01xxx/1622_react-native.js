// Module ID: 1622
// Function ID: 1623
// Name: react-native
// Dependencies: [1623]

// Module 1622 (react-native)
import react_native from "react-native" /* 1623 */;

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
