// Module ID: 5911
// Function ID: 5912
// Name: isVideoBackgroundEnabled
// Dependencies: [5912, 1381, 5913, 2]
// Exports: default

// Module 5911 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5912 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(5913);
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
