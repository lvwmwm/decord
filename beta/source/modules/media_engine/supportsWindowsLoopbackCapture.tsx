// Module ID: 16515
// Function ID: 16516
// Name: supportsWindowsLoopbackCapture
// Dependencies: [1380, 16516, 5116, 2]
// Exports: default

// Module 16515 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import DiscordNativeDefault from "DiscordNative" /* 5116 */;
import _modDef16516 from "module_16516" /* 16516 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_engine/supportsWindowsLoopbackCapture.tsx");

export default function supportsWindowsLoopbackCapture() {
  const obj = PlatformUtils;
  let isWindowsResult = obj.isWindows();
  if (isWindowsResult) {
    const satisfies = _modDef16516.satisfies;
    _modDef16516;
    const tmp5 = DiscordNativeDefault;
    let release;
    if (tmp5 != null) {
      release = tmp5.os.release;
    }
    isWindowsResult = satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};
