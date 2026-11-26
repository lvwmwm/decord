// Module ID: 16517
// Function ID: 16518
// Name: supportsWindowsLoopbackCapture
// Dependencies: [1380, 16518, 5116, 2]
// Exports: default

// Module 16517 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import DiscordNativeDefault from "DiscordNative" /* 5116 */;
import _modDef16518 from "module_16518" /* 16518 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_engine/supportsWindowsLoopbackCapture.tsx");

export default function supportsWindowsLoopbackCapture() {
  const obj = PlatformUtils;
  let isWindowsResult = obj.isWindows();
  if (isWindowsResult) {
    const satisfies = _modDef16518.satisfies;
    _modDef16518;
    const tmp5 = DiscordNativeDefault;
    let release;
    if (tmp5 != null) {
      release = tmp5.os.release;
    }
    isWindowsResult = satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};
