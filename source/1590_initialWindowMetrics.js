// Module ID: 1590
// Function ID: 1591
// Name: initialWindowMetrics
// Dependencies: [1591]

// Module 1590 (initialWindowMetrics)
import importDefaultResult from "RNCSafeAreaContext";

let initialWindowMetrics;
if (importDefaultResult != null) {
  const getConstants = importDefaultResult.getConstants;
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
