// Module ID: 1621
// Function ID: 1622
// Name: initialWindowMetrics
// Dependencies: [1622]

// Module 1621 (initialWindowMetrics)
import RNCSafeAreaContext from "RNCSafeAreaContext" /* 1622 */;

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
