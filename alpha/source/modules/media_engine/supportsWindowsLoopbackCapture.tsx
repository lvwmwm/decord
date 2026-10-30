// Module ID: 15852
// Function ID: 15853
// Name: supportsWindowsLoopbackCapture
// Dependencies: [1376, 15853, 4820, 2]
// Exports: default

// Module 15852 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import DiscordNativeDefault from "DiscordNative" /* 4820 */;
import _modDef15853 from "module_15853" /* 15853 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_engine/supportsWindowsLoopbackCapture.tsx");

export default function supportsWindowsLoopbackCapture() {
  const obj = PlatformUtils;
  let isWindowsResult = obj.isWindows();
  if (isWindowsResult) {
    const satisfies = _modDef15853.satisfies;
    _modDef15853;
    const tmp5 = DiscordNativeDefault;
    let release;
    if (tmp5 != null) {
      release = tmp5.os.release;
    }
    isWindowsResult = satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};
