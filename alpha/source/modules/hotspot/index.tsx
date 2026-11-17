// Module ID: 8458
// Function ID: 8459
// Name: HotspotStore
// Dependencies: [8459, 2, 8460, 8461]

// Module 8458 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 8461 */;
import HotspotStore from "hotspot/HotspotStore" /* 8459 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 8460 */;

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
