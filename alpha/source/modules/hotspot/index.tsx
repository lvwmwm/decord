// Module ID: 7132
// Function ID: 7133
// Name: HotspotStore
// Dependencies: [7133, 2, 7135, 7136]

// Module 7132 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7136 */;
import HotspotStore from "hotspot/HotspotStore" /* 7133 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7135 */;

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
