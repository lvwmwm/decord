// Module ID: 6908
// Function ID: 6909
// Name: HotspotStore
// Dependencies: [6909, 2, 6911, 6912]

// Module 6908 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 6912 */;
import HotspotStore from "hotspot/HotspotStore" /* 6909 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 6911 */;

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
