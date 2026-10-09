// Module ID: 5266
// Function ID: 5267
// Name: isVideoBackgroundEnabled
// Dependencies: [5267, 1382, 5268, 2]
// Exports: default

// Module 5266 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5267 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(5268);
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
