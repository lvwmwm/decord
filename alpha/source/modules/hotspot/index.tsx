// Module ID: 6712
// Function ID: 6713
// Name: HotspotStore
// Dependencies: [6713, 2, 6715, 6716]

// Module 6712 (HotspotStore)
import HotspotActionCreators from "HotspotActionCreators" /* 6716 */;
import HotspotStore from "hotspot/HotspotStore" /* 6713 */;
import size from "module_2" /* 2 */;
import Constants from "Constants" /* 6715 */;

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
