// Module ID: 7803
// Function ID: 7804
// Name: useLabFeature
// Dependencies: [7801, 504, 2]
// Exports: default

// Module 7803 (useLabFeature)
import LabFeatureStore from "LabFeatureStore" /* 7801 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/labs/useLabFeature.tsx");

export default function useLabFeature(arg0) {
  let closure_0;
  _require = arg0;
  const items = [LabFeatureStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => LabFeatureStore.get(closure_0), items1);
};
