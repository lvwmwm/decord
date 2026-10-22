// Module ID: 7293
// Function ID: 7294
// Name: HotspotStore
// Dependencies: [7294, 2, 7296, 7297]

// Module 7293 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7297 */;
import HotspotStore from "hotspot/HotspotStore" /* 7294 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7296 */;

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
