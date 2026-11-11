// Module ID: 6186
// Function ID: 6187
// Name: isVideoBackgroundEnabled
// Dependencies: [6187, 1377, 6188, 2]
// Exports: default

// Module 6186 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 6187 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(6188);
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
