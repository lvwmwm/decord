// Module ID: 1566
// Function ID: 17630
// Name: initialWindowMetrics
// Dependencies: [1567]

// Module 1566 (initialWindowMetrics)
let initialWindowMetrics;
if (null != require("RNCSafeAreaContext")) {
  if (null != require("RNCSafeAreaContext").getConstants) {
    const constants = require("RNCSafeAreaContext").getConstants();
    if (null != constants) {
      initialWindowMetrics = constants.initialWindowMetrics;
    }
    const importDefaultResult = require("RNCSafeAreaContext");
  }
}
let tmp4 = null;
if (null != initialWindowMetrics) {
  tmp4 = initialWindowMetrics;
}
let insets;
if (null != tmp4) {
  insets = tmp4.insets;
}

export const initialWindowMetrics = tmp4;
export const initialWindowSafeAreaInsets = insets;
