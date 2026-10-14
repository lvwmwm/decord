// Module ID: 6914
// Function ID: 6915
// Name: HotspotStore
// Dependencies: [6915, 2, 6917, 6918]

// Module 6914 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 6918 */;
import HotspotStore from "hotspot/HotspotStore" /* 6915 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 6917 */;

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
