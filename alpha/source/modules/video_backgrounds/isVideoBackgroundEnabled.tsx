// Module ID: 6077
// Function ID: 6078
// Name: isVideoBackgroundEnabled
// Dependencies: [6078, 1377, 6079, 2]
// Exports: default

// Module 6077 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 6078 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(6079);
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
