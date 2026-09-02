// Module ID: 1636
// Function ID: 1637
// Name: initialWindowMetrics
// Dependencies: [1637]

// Module 1636 (initialWindowMetrics)
import importDefaultResult from "RNCSafeAreaContext" /* 1637 */;

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
