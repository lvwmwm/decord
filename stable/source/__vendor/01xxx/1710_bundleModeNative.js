// Module ID: 1710
// Function ID: 1711
// Name: bundleModeNative
// Dependencies: []
// Exports: isBundleModeEnabled

// Module 1710 (bundleModeNative)
globalThis._WORKLETS_BUNDLE_MODE_ENABLED = false;
let closure_0 = { code: "(function pnpm_bundleModeNativeTs1(){})" };

export function isBundleModeEnabled() {
  let tmp4;
  let tmp = true === globalThis._WORKLETS_BUNDLE_MODE_ENABLED;
  if (tmp) {
    const items = [closure_0];
    [tmp4] = items;
    function pnpm_bundleModeNativeTs1() {

    }
    pnpm_bundleModeNativeTs1.__workletHash = 13952247308415;
    pnpm_bundleModeNativeTs1.__initData = tmp4;
    tmp = undefined === pnpm_bundleModeNativeTs1.__initData;
  }
  return tmp;
}
