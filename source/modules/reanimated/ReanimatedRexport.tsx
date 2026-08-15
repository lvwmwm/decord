// Module ID: 4115
// Function ID: 4116
// Dependencies: [501, 1654, 4116, 2]

// Module 4115
import PlatformTypes from "PlatformTypes";

if (PlatformTypes.isAndroid()) {
  const _Object = Object;
  const obj = { View: null };
  obj[0] = require("REAWorkaroundView");
  const merged = Object.assign(require("cancelAnimation"), obj);
  const importDefaultResult = require("cancelAnimation");
}
const result = require("REAWorkaroundView").fileFinishedImporting("modules/reanimated/ReanimatedRexport.tsx");
for (const key10033 in require("cancelAnimation")) {
  let tmp5 = key10033;
  arg5[key10033] = require("cancelAnimation")[key10033];
  continue;
}

export { default } from "cancelAnimation";
