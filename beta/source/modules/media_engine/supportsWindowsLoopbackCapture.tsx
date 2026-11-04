// Module ID: 15897
// Function ID: 15898
// Name: supportsWindowsLoopbackCapture
// Dependencies: [1375, 15898, 4825, 2]
// Exports: default

// Module 15897 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import DiscordNativeDefault from "DiscordNative" /* 4825 */;
import _modDef15898 from "module_15898" /* 15898 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_engine/supportsWindowsLoopbackCapture.tsx");

export default function supportsWindowsLoopbackCapture() {
  const obj = PlatformUtils;
  let isWindowsResult = obj.isWindows();
  if (isWindowsResult) {
    const satisfies = _modDef15898.satisfies;
    _modDef15898;
    const tmp5 = DiscordNativeDefault;
    let release;
    if (tmp5 != null) {
      release = tmp5.os.release;
    }
    isWindowsResult = satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};
