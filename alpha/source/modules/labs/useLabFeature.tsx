// Module ID: 7795
// Function ID: 7796
// Name: useLabFeature
// Dependencies: [7793, 504, 2]
// Exports: default

// Module 7795 (useLabFeature)
import LabFeatureStore from "LabFeatureStore" /* 7793 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/labs/useLabFeature.tsx");

export default function useLabFeature(arg0) {
  _require = arg0;
  const items = [LabFeatureStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => LabFeatureStore.get(closure_0), items1);
};
