// Module ID: 5920
// Function ID: 5921
// Name: isVideoBackgroundEnabled
// Dependencies: [5921, 1376, 5922, 2]
// Exports: default

// Module 5920 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5921 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(5922);
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
