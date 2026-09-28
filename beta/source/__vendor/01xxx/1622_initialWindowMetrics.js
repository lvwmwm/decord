// Module ID: 1622
// Function ID: 1623
// Name: initialWindowMetrics
// Dependencies: [1623]

// Module 1622 (initialWindowMetrics)
import RNCSafeAreaContext from "RNCSafeAreaContext" /* 1623 */;

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
