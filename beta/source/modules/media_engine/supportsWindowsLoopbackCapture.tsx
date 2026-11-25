// Module ID: 15315
// Function ID: 15316
// Name: supportsWindowsLoopbackCapture
// Dependencies: [1378, 15316, 4724, 2]
// Exports: default

// Module 15315 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import DiscordNativeDefault from "DiscordNative" /* 4724 */;
import _modDef15316 from "module_15316" /* 15316 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_engine/supportsWindowsLoopbackCapture.tsx");

export default function supportsWindowsLoopbackCapture() {
  const obj = PlatformUtils;
  let isWindowsResult = obj.isWindows();
  if (isWindowsResult) {
    const satisfies = _modDef15316.satisfies;
    _modDef15316;
    const tmp5 = DiscordNativeDefault;
    let release;
    if (tmp5 != null) {
      release = tmp5.os.release;
    }
    isWindowsResult = satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};
