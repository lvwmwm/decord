// Module ID: 15508
// Function ID: 15509
// Name: supportsWindowsLoopbackCapture
// Dependencies: [1379, 15509, 4854, 2]
// Exports: default

// Module 15508 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import DiscordNativeDefault from "DiscordNative" /* 4854 */;
import _modDef15509 from "module_15509" /* 15509 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_engine/supportsWindowsLoopbackCapture.tsx");

export default function supportsWindowsLoopbackCapture() {
  const obj = PlatformUtils;
  let isWindowsResult = obj.isWindows();
  if (isWindowsResult) {
    const satisfies = _modDef15509.satisfies;
    _modDef15509;
    const tmp5 = DiscordNativeDefault;
    let release;
    if (tmp5 != null) {
      release = tmp5.os.release;
    }
    isWindowsResult = satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};
