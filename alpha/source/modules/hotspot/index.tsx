// Module ID: 7310
// Function ID: 7311
// Name: HotspotStore
// Dependencies: [7311, 2, 7313, 7314]

// Module 7310 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7314 */;
import HotspotStore from "hotspot/HotspotStore" /* 7311 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7313 */;

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
