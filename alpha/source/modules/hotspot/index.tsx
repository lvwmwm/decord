// Module ID: 7306
// Function ID: 7307
// Name: HotspotStore
// Dependencies: [7307, 2, 7309, 7310]

// Module 7306 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7310 */;
import HotspotStore from "hotspot/HotspotStore" /* 7307 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7309 */;

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
