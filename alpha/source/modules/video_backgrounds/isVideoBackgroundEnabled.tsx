// Module ID: 5267
// Function ID: 5268
// Name: isVideoBackgroundEnabled
// Dependencies: [5268, 1382, 5269, 2]
// Exports: default

// Module 5267 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5268 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(5269);
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
