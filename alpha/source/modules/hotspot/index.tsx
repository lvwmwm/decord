// Module ID: 7344
// Function ID: 7345
// Name: HotspotStore
// Dependencies: [7345, 2, 7347, 7348]

// Module 7344 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7348 */;
import HotspotStore from "hotspot/HotspotStore" /* 7345 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7347 */;

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
