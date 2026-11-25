// Module ID: 15450
// Function ID: 15451
// Name: supportsWindowsLoopbackCapture
// Dependencies: [1378, 15451, 4823, 2]
// Exports: default

// Module 15450 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import DiscordNativeDefault from "DiscordNative" /* 4823 */;
import _modDef15451 from "module_15451" /* 15451 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_engine/supportsWindowsLoopbackCapture.tsx");

export default function supportsWindowsLoopbackCapture() {
  const obj = PlatformUtils;
  let isWindowsResult = obj.isWindows();
  if (isWindowsResult) {
    const satisfies = _modDef15451.satisfies;
    _modDef15451;
    const tmp5 = DiscordNativeDefault;
    let release;
    if (tmp5 != null) {
      release = tmp5.os.release;
    }
    isWindowsResult = satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};
