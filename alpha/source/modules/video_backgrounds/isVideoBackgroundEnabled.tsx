// Module ID: 5899
// Function ID: 5900
// Name: isVideoBackgroundEnabled
// Dependencies: [5900, 1378, 5901, 2]
// Exports: default

// Module 5899 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5900 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(5901);
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
