// Module ID: 15893
// Function ID: 15894
// Name: supportsWindowsLoopbackCapture
// Dependencies: [1375, 15894, 4825, 2]
// Exports: default

// Module 15893 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import DiscordNativeDefault from "DiscordNative" /* 4825 */;
import _modDef15894 from "module_15894" /* 15894 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_engine/supportsWindowsLoopbackCapture.tsx");

export default function supportsWindowsLoopbackCapture() {
  const obj = PlatformUtils;
  let isWindowsResult = obj.isWindows();
  if (isWindowsResult) {
    const satisfies = _modDef15894.satisfies;
    _modDef15894;
    const tmp5 = DiscordNativeDefault;
    let release;
    if (tmp5 != null) {
      release = tmp5.os.release;
    }
    isWindowsResult = satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};
