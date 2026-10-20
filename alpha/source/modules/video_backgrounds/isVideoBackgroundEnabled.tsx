// Module ID: 5833
// Function ID: 5834
// Name: isVideoBackgroundEnabled
// Dependencies: [5834, 1384, 5835, 2]
// Exports: default

// Module 5833 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5834 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(5835);
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
