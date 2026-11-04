// Module ID: 7517
// Function ID: 7518
// Name: HotspotStore
// Dependencies: [7518, 2, 7520, 7521]

// Module 7517 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7521 */;
import HotspotStore from "hotspot/HotspotStore" /* 7518 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7520 */;

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
