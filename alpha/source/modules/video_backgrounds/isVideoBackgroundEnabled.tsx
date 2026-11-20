// Module ID: 5714
// Function ID: 5715
// Name: isVideoBackgroundEnabled
// Dependencies: [5715, 1378, 5716, 2]
// Exports: default

// Module 5714 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5715 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(5716);
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
