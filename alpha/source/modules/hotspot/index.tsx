// Module ID: 7375
// Function ID: 7376
// Name: HotspotStore
// Dependencies: [7376, 2, 7378, 7379]

// Module 7375 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7379 */;
import HotspotStore from "hotspot/HotspotStore" /* 7376 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7378 */;

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
