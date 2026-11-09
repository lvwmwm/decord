// Module ID: 7441
// Function ID: 7442
// Name: HotspotStore
// Dependencies: [7442, 2, 7444, 7445]

// Module 7441 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7445 */;
import HotspotStore from "hotspot/HotspotStore" /* 7442 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7444 */;

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
