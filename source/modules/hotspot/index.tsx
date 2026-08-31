// Module ID: 6028
// Function ID: 6029
// Name: HotspotStore
// Dependencies: [6029, 2, 6030, 6031]

// Module 6028 (HotspotStore)
import importDefaultResult from "set" /* 6029 */;
import HotspotLocations from "HotspotLocations" /* 6030 */;

const result = require("set").fileFinishedImporting("modules/hotspot/index.tsx");
for (const key10022 in tmp4) {
  let tmp5 = key10022;
  arg5[key10022] = HotspotLocations[key10022];
  continue;
}
for (const key10026 in require("hideHotspot")) {
  let tmp6 = key10026;
  arg5[key10026] = require("hideHotspot")[key10026];
  continue;
}

export const HotspotStore = importDefaultResult;
