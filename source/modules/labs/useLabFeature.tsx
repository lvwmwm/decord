// Module ID: 8285
// Function ID: 8286
// Name: useLabFeature
// Dependencies: [8283, 586, 2]
// Exports: default

// Module 8285 (useLabFeature)
import closure_2 from "getUserAgnosticState" /* 8283 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/labs/useLabFeature.tsx");

export default function useLabFeature(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return _require(586).useStateFromStores(items, () => closure_1_2.get(closure_0), items1);
};
