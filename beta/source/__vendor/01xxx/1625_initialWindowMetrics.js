// Module ID: 1625
// Function ID: 1626
// Name: initialWindowMetrics
// Dependencies: [1626]

// Module 1625 (initialWindowMetrics)
import RNCSafeAreaContext from "RNCSafeAreaContext" /* 1626 */;

let initialWindowMetrics;
if (RNCSafeAreaContext != null) {
  const getConstants = RNCSafeAreaContext.getConstants;
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
