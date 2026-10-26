// Module ID: 7308
// Function ID: 7309
// Name: HotspotStore
// Dependencies: [7309, 2, 7311, 7312]

// Module 7308 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7312 */;
import HotspotStore from "hotspot/HotspotStore" /* 7309 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7311 */;

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
