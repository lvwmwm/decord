// Module ID: 6059
// Function ID: 6060
// Name: isVideoBackgroundEnabled
// Dependencies: [6060, 1377, 6061, 2]
// Exports: default

// Module 6059 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 6060 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(6061);
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
