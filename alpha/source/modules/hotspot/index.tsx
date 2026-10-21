// Module ID: 7285
// Function ID: 7286
// Name: HotspotStore
// Dependencies: [7286, 2, 7288, 7289]

// Module 7285 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7289 */;
import HotspotStore from "hotspot/HotspotStore" /* 7286 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7288 */;

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
