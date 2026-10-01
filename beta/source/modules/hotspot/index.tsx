// Module ID: 6634
// Function ID: 6635
// Name: HotspotStore
// Dependencies: [6635, 2, 6636, 6637]

// Module 6634 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 6637 */;
import HotspotStore from "hotspot/HotspotStore" /* 6635 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 6636 */;

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
