// Module ID: 6909
// Function ID: 6910
// Name: HotspotStore
// Dependencies: [6910, 2, 6912, 6913]

// Module 6909 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 6913 */;
import HotspotStore from "hotspot/HotspotStore" /* 6910 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 6912 */;

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
