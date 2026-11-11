// Module ID: 8381
// Function ID: 8382
// Name: HotspotStore
// Dependencies: [8382, 2, 8383, 8384]

// Module 8381 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 8384 */;
import HotspotStore from "hotspot/HotspotStore" /* 8382 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 8383 */;

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
