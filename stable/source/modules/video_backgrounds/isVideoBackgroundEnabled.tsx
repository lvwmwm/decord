// Module ID: 6239
// Function ID: 6240
// Name: isVideoBackgroundEnabled
// Dependencies: [6240, 1380, 6241, 2]
// Exports: default

// Module 6239 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 6240 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(6241);
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
