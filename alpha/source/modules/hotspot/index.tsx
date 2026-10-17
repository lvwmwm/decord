// Module ID: 7185
// Function ID: 7186
// Name: HotspotStore
// Dependencies: [7186, 2, 7188, 7189]

// Module 7185 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7189 */;
import HotspotStore from "hotspot/HotspotStore" /* 7186 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7188 */;

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
