// Module ID: 1638
// Function ID: 1639
// Name: initialWindowMetrics
// Dependencies: [1639]

// Module 1638 (initialWindowMetrics)
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
