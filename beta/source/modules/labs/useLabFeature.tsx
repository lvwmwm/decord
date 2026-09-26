// Module ID: 8658
// Function ID: 8659
// Name: useLabFeature
// Dependencies: [8656, 504, 2]
// Exports: default

// Module 8658 (useLabFeature)
import LabFeatureStore from "LabFeatureStore" /* 8656 */;

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
