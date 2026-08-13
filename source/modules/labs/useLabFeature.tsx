// Module ID: 8966
// Function ID: 8967
// Name: useLabFeature
// Dependencies: [8964, 589, 2]
// Exports: default

// Module 8966 (useLabFeature)
import getUserAgnosticState from "getUserAgnosticState";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/labs/useLabFeature.tsx");

export default function useLabFeature(arg0) {
  const _require = arg0;
  const items = [getUserAgnosticState];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => outer1_2.get(closure_0), items1);
};
