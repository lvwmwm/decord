// Module ID: 7531
// Function ID: 7532
// Name: HotspotStore
// Dependencies: [7532, 2, 7534, 7535]

// Module 7531 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7535 */;
import HotspotStore from "hotspot/HotspotStore" /* 7532 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7534 */;

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
