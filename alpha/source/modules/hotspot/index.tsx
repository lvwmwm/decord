// Module ID: 7381
// Function ID: 7382
// Name: HotspotStore
// Dependencies: [7382, 2, 7384, 7385]

// Module 7381 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7385 */;
import HotspotStore from "hotspot/HotspotStore" /* 7382 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7384 */;

const result = size.fileFinishedImporting("modules/hotspot/index.tsx");
for (const key10022 in Constants) {
  exports[key10022] = Constants[key10022];
  continue;
}
for (const key10026 in HotspotActionCreators) {
  exports[key10026] = HotspotActionCreators[key10026];
  continue;
}

export { HotspotStore };
