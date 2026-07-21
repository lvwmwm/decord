// Module ID: 12721
// Function ID: 97624
// Name: IS_OVERLAY_DEV_ENV
// Dependencies: []

// Module 12721 (IS_OVERLAY_DEV_ENV)
let flag = require(dependencyMap[0]).isPlatformEmbedded;
if (flag) {
  const _module = require(dependencyMap[0]);
  flag = _module.isWindows() || false;
  const tmp2 = _module.isWindows() || false;
}
if (flag) {
  flag = false;
}
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/overlay/OverlaySupported.tsx");

export const IS_OVERLAY_DEV_ENV = false;
export const OVERLAY_SUPPORTED = flag;
