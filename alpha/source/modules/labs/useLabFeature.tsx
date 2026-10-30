// Module ID: 8556
// Function ID: 8557
// Name: useLabFeature
// Dependencies: [8554, 504, 2]
// Exports: default

// Module 8556 (useLabFeature)
import LabFeatureStore from "LabFeatureStore" /* 8554 */;
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
