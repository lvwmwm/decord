// Module ID: 7562
// Function ID: 7563
// Name: HotspotStore
// Dependencies: [7563, 2, 7565, 7566]

// Module 7562 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7566 */;
import HotspotStore from "hotspot/HotspotStore" /* 7563 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7565 */;

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
