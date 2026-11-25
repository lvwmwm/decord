// Module ID: 5994
// Function ID: 5995
// Name: isVideoBackgroundEnabled
// Dependencies: [5995, 1378, 5996, 2]
// Exports: default

// Module 5994 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5995 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(5996);
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
