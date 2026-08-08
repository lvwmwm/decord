// Module ID: 13184
// Function ID: 13185
// Name: IS_OVERLAY_DEV_ENV
// Dependencies: [500, 2]

// Module 13184 (IS_OVERLAY_DEV_ENV)
import { isPlatformEmbedded as flag } from "set";

if (flag) {
  const _module = require("set");
  flag = _module.isWindows() || false;
  const tmp2 = _module.isWindows() || false;
}
if (flag) {
  flag = false;
}
const result = require("set").fileFinishedImporting("modules/overlay/OverlaySupported.tsx");

export const IS_OVERLAY_DEV_ENV = false;
export const OVERLAY_SUPPORTED = flag;
