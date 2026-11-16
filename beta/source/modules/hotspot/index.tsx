// Module ID: 8447
// Function ID: 8448
// Name: HotspotStore
// Dependencies: [8448, 2, 8449, 8450]

// Module 8447 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 8450 */;
import HotspotStore from "hotspot/HotspotStore" /* 8448 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 8449 */;

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
