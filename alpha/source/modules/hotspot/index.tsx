// Module ID: 6895
// Function ID: 6896
// Name: HotspotStore
// Dependencies: [6896, 2, 6898, 6899]

// Module 6895 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 6899 */;
import HotspotStore from "hotspot/HotspotStore" /* 6896 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 6898 */;

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
