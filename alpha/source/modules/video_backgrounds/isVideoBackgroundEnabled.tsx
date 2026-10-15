// Module ID: 5327
// Function ID: 5328
// Name: isVideoBackgroundEnabled
// Dependencies: [5328, 1382, 5329, 2]
// Exports: default

// Module 5327 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5328 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(5329);
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
