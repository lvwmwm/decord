// Module ID: 5367
// Function ID: 5368
// Name: isVideoBackgroundEnabled
// Dependencies: [5368, 1384, 5369, 2]
// Exports: default

// Module 5367 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5368 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(5369);
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
