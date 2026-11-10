// Module ID: 7444
// Function ID: 7445
// Name: HotspotStore
// Dependencies: [7445, 2, 7447, 7448]

// Module 7444 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7448 */;
import HotspotStore from "hotspot/HotspotStore" /* 7445 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7447 */;

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
