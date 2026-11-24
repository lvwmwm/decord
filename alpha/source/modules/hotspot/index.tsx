// Module ID: 7436
// Function ID: 7437
// Name: HotspotStore
// Dependencies: [7437, 2, 7439, 7440]

// Module 7436 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7440 */;
import HotspotStore from "hotspot/HotspotStore" /* 7437 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7439 */;

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
