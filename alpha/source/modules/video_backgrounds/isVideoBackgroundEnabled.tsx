// Module ID: 5862
// Function ID: 5863
// Name: isVideoBackgroundEnabled
// Dependencies: [5863, 1384, 5864, 2]
// Exports: default

// Module 5862 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5863 */;
import size from "module_2" /* 2 */;

let tmp;
const VirtualBackgroundsIosExperimentDefault = tmp(5864);
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
