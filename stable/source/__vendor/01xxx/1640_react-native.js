// Module ID: 1640
// Function ID: 1641
// Name: react-native
// Dependencies: [1641]

// Module 1640 (react-native)
import react_native from "react-native" /* 1641 */;

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
