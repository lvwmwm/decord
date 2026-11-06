// Module ID: 7464
// Function ID: 7465
// Name: HotspotStore
// Dependencies: [7465, 2, 7467, 7468]

// Module 7464 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7468 */;
import HotspotStore from "hotspot/HotspotStore" /* 7465 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7467 */;

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
