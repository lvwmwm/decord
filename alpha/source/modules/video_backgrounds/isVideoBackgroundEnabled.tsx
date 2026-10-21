// Module ID: 5855
// Function ID: 5856
// Name: isVideoBackgroundEnabled
// Dependencies: [5856, 1384, 5857, 2]
// Exports: default

// Module 5855 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5856 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(5857);
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
