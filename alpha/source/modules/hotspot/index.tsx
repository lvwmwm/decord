// Module ID: 6902
// Function ID: 6903
// Name: HotspotStore
// Dependencies: [6903, 2, 6905, 6906]

// Module 6902 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 6906 */;
import HotspotStore from "hotspot/HotspotStore" /* 6903 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 6905 */;

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
