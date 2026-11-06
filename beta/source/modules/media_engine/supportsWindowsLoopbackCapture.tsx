// Module ID: 15892
// Function ID: 15893
// Name: supportsWindowsLoopbackCapture
// Dependencies: [1375, 15893, 4825, 2]
// Exports: default

// Module 15892 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import DiscordNativeDefault from "DiscordNative" /* 4825 */;
import _modDef15893 from "module_15893" /* 15893 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_engine/supportsWindowsLoopbackCapture.tsx");

export default function supportsWindowsLoopbackCapture() {
  const obj = PlatformUtils;
  let isWindowsResult = obj.isWindows();
  if (isWindowsResult) {
    const satisfies = _modDef15893.satisfies;
    _modDef15893;
    const tmp5 = DiscordNativeDefault;
    let release;
    if (tmp5 != null) {
      release = tmp5.os.release;
    }
    isWindowsResult = satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};
