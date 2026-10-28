// Module ID: 7340
// Function ID: 7341
// Name: HotspotStore
// Dependencies: [7341, 2, 7343, 7344]

// Module 7340 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7344 */;
import HotspotStore from "hotspot/HotspotStore" /* 7341 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7343 */;

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
