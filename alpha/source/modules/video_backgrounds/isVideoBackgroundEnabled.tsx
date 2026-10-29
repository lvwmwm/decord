// Module ID: 5913
// Function ID: 5914
// Name: isVideoBackgroundEnabled
// Dependencies: [5914, 1381, 5915, 2]
// Exports: default

// Module 5913 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5914 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(5915);
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
