// Module ID: 6635
// Function ID: 6636
// Name: HotspotStore
// Dependencies: [6636, 2, 6637, 6638]

// Module 6635 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 6638 */;
import HotspotStore from "hotspot/HotspotStore" /* 6636 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 6637 */;

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
