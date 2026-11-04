// Module ID: 6074
// Function ID: 6075
// Name: isVideoBackgroundEnabled
// Dependencies: [6075, 1377, 6076, 2]
// Exports: default

// Module 6074 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 6075 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(6076);
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
