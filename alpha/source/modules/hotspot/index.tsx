// Module ID: 7254
// Function ID: 7255
// Name: HotspotStore
// Dependencies: [7255, 2, 7257, 7258]

// Module 7254 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7258 */;
import HotspotStore from "hotspot/HotspotStore" /* 7255 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7257 */;

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
