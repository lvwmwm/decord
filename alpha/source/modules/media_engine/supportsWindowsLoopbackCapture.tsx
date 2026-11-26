// Module ID: 15501
// Function ID: 15502
// Name: supportsWindowsLoopbackCapture
// Dependencies: [1379, 15502, 4854, 2]
// Exports: default

// Module 15501 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import DiscordNativeDefault from "DiscordNative" /* 4854 */;
import _modDef15502 from "module_15502" /* 15502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_engine/supportsWindowsLoopbackCapture.tsx");

export default function supportsWindowsLoopbackCapture() {
  const obj = PlatformUtils;
  let isWindowsResult = obj.isWindows();
  if (isWindowsResult) {
    const satisfies = _modDef15502.satisfies;
    _modDef15502;
    const tmp5 = DiscordNativeDefault;
    let release;
    if (tmp5 != null) {
      release = tmp5.os.release;
    }
    isWindowsResult = satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};
