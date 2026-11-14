// Module ID: 6249
// Function ID: 6250
// Name: isVideoBackgroundEnabled
// Dependencies: [6250, 1380, 6251, 2]
// Exports: default

// Module 6249 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 6250 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(6251);
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
