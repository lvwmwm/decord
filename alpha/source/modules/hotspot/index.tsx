// Module ID: 7128
// Function ID: 7129
// Name: HotspotStore
// Dependencies: [7129, 2, 7131, 7132]

// Module 7128 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7132 */;
import HotspotStore from "hotspot/HotspotStore" /* 7129 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7131 */;

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
