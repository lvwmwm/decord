// Module ID: 15813
// Function ID: 15814
// Name: supportsWindowsLoopbackCapture
// Dependencies: [1381, 15814, 4819, 2]
// Exports: default

// Module 15813 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import DiscordNativeDefault from "DiscordNative" /* 4819 */;
import _modDef15814 from "module_15814" /* 15814 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_engine/supportsWindowsLoopbackCapture.tsx");

export default function supportsWindowsLoopbackCapture() {
  const obj = PlatformUtils;
  let isWindowsResult = obj.isWindows();
  if (isWindowsResult) {
    const satisfies = _modDef15814.satisfies;
    _modDef15814;
    const tmp5 = DiscordNativeDefault;
    let release;
    if (tmp5 != null) {
      release = tmp5.os.release;
    }
    isWindowsResult = satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};
