// Module ID: 7130
// Function ID: 7131
// Name: HotspotStore
// Dependencies: [7131, 2, 7133, 7134]

// Module 7130 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7134 */;
import HotspotStore from "hotspot/HotspotStore" /* 7131 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7133 */;

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
