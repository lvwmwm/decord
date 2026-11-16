// Module ID: 7474
// Function ID: 7475
// Name: HotspotStore
// Dependencies: [7475, 2, 7477, 7478]

// Module 7474 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7478 */;
import HotspotStore from "hotspot/HotspotStore" /* 7475 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7477 */;

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
