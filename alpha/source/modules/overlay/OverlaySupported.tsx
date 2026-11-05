// Module ID: 7008
// Function ID: 7009
// Name: OverlaySupported
// Dependencies: [1377, 2]

// Module 7008 (OverlaySupported)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let flag = PlatformUtils.isPlatformEmbedded;
if (flag) {
  const _module = PlatformUtils;
  flag = _module.isWindows() || false;
  _module.isWindows() || false;
}
if (flag) {
  flag = false;
}
const result = size.fileFinishedImporting("modules/overlay/OverlaySupported.tsx");

export const IS_OVERLAY_DEV_ENV = false;
export const OVERLAY_SUPPORTED = flag;
