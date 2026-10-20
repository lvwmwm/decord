// Module ID: 7257
// Function ID: 7258
// Name: HotspotStore
// Dependencies: [7258, 2, 7260, 7261]

// Module 7257 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7261 */;
import HotspotStore from "hotspot/HotspotStore" /* 7258 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7260 */;

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
