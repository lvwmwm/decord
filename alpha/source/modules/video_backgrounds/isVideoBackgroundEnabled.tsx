// Module ID: 8098
// Function ID: 8099
// Name: isVideoBackgroundEnabled
// Dependencies: [8099, 1369, 8100, 2]
// Exports: default

// Module 8098 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 8099 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(8100);
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
