// Module ID: 8038
// Function ID: 8039
// Name: HotspotStore
// Dependencies: [8039, 2, 8040, 8041]

// Module 8038 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 8041 */;
import HotspotStore from "hotspot/HotspotStore" /* 8039 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 8040 */;

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
