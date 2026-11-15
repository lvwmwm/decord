// Module ID: 16239
// Function ID: 16240
// Name: supportsWindowsLoopbackCapture
// Dependencies: [1377, 16240, 4981, 2]
// Exports: default

// Module 16239 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import DiscordNativeDefault from "DiscordNative" /* 4981 */;
import _modDef16240 from "module_16240" /* 16240 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_engine/supportsWindowsLoopbackCapture.tsx");

export default function supportsWindowsLoopbackCapture() {
  const obj = PlatformUtils;
  let isWindowsResult = obj.isWindows();
  if (isWindowsResult) {
    const satisfies = _modDef16240.satisfies;
    _modDef16240;
    const tmp5 = DiscordNativeDefault;
    let release;
    if (tmp5 != null) {
      release = tmp5.os.release;
    }
    isWindowsResult = satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};
