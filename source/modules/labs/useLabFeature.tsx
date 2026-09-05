// Module ID: 8355
// Function ID: 8356
// Name: useLabFeature
// Dependencies: [8353, 504, 2]
// Exports: default

// Module 8355 (useLabFeature)
import closure_2 from "getUserAgnosticState" /* 8353 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/labs/useLabFeature.tsx");

export default function useLabFeature(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return _require(504).useStateFromStores(items, () => closure_1_2.get(closure_0), items1);
};
