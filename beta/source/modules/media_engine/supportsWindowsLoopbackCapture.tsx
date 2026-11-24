// Module ID: 15305
// Function ID: 15306
// Name: supportsWindowsLoopbackCapture
// Dependencies: [1378, 15306, 4724, 2]
// Exports: default

// Module 15305 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import DiscordNativeDefault from "DiscordNative" /* 4724 */;
import _modDef15306 from "module_15306" /* 15306 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_engine/supportsWindowsLoopbackCapture.tsx");

export default function supportsWindowsLoopbackCapture() {
  const obj = PlatformUtils;
  let isWindowsResult = obj.isWindows();
  if (isWindowsResult) {
    const satisfies = _modDef15306.satisfies;
    _modDef15306;
    const tmp5 = DiscordNativeDefault;
    let release;
    if (tmp5 != null) {
      release = tmp5.os.release;
    }
    isWindowsResult = satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};
