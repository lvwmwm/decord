// Module ID: 1566
// Function ID: 17629
// Name: initialWindowMetrics
// Dependencies: []

// Module 1566 (initialWindowMetrics)
let initialWindowMetrics;
if (null != importDefault(dependencyMap[0])) {
  if (null != importDefault(dependencyMap[0]).getConstants) {
    const constants = importDefault(dependencyMap[0]).getConstants();
    if (null != constants) {
      initialWindowMetrics = constants.initialWindowMetrics;
    }
    const importDefaultResult = importDefault(dependencyMap[0]);
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
