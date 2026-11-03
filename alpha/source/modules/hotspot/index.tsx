// Module ID: 7501
// Function ID: 7502
// Name: HotspotStore
// Dependencies: [7502, 2, 7504, 7505]

// Module 7501 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 7505 */;
import HotspotStore from "hotspot/HotspotStore" /* 7502 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 7504 */;

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
