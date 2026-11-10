// Module ID: 16236
// Function ID: 16237
// Name: supportsWindowsLoopbackCapture
// Dependencies: [1377, 16237, 4953, 2]
// Exports: default

// Module 16236 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import DiscordNativeDefault from "DiscordNative" /* 4953 */;
import _modDef16237 from "module_16237" /* 16237 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_engine/supportsWindowsLoopbackCapture.tsx");

export default function supportsWindowsLoopbackCapture() {
  const obj = PlatformUtils;
  let isWindowsResult = obj.isWindows();
  if (isWindowsResult) {
    const satisfies = _modDef16237.satisfies;
    _modDef16237;
    const tmp5 = DiscordNativeDefault;
    let release;
    if (tmp5 != null) {
      release = tmp5.os.release;
    }
    isWindowsResult = satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};
