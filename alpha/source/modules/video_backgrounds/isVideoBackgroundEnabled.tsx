// Module ID: 6025
// Function ID: 6026
// Name: isVideoBackgroundEnabled
// Dependencies: [6026, 1379, 6027, 2]
// Exports: default

// Module 6025 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 6026 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(6027);
const result = size.fileFinishedImporting("modules/video_backgrounds/isVideoBackgroundEnabled.tsx");

export default function isVideoBackgroundEnabled(location) {
  let tmp3 = isVideoBackgroundSupportedDefault();
  if (tmp3) {
    const obj = PlatformUtils;
    const isIOSResult = obj.isIOS();
    let enabled = !isIOSResult;
    if (isIOSResult) {
      const obj2 = { location };
      const tmpResult = VirtualBackgroundsIosExperimentDefault;
      enabled = tmpResult.getConfig(obj2).enabled;
    }
    tmp3 = enabled;
  }
  return tmp3;
};
