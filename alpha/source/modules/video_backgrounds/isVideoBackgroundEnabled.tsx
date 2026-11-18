// Module ID: 5743
// Function ID: 5744
// Name: isVideoBackgroundEnabled
// Dependencies: [5744, 1380, 5745, 2]
// Exports: default

// Module 5743 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5744 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(5745);
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
