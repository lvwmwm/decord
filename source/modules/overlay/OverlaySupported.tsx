// Module ID: 13116
// Function ID: 13117
// Name: IS_OVERLAY_DEV_ENV
// Dependencies: [500, 2]

// Module 13116 (IS_OVERLAY_DEV_ENV)
import set from "set" /* 2 */;
import set2 from "set" /* 500 */;

let flag = set2.isPlatformEmbedded;
if (flag) {
  const _module = set2;
  flag = _module.isWindows() || false;
  const tmp2 = _module.isWindows() || false;
}
if (flag) {
  flag = false;
}
const result = set.fileFinishedImporting("modules/overlay/OverlaySupported.tsx");

export const IS_OVERLAY_DEV_ENV = false;
export const OVERLAY_SUPPORTED = flag;
