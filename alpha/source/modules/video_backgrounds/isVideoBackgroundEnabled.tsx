// Module ID: 5939
// Function ID: 5940
// Name: isVideoBackgroundEnabled
// Dependencies: [5940, 1375, 5941, 2]
// Exports: default

// Module 5939 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5940 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(5941);
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
