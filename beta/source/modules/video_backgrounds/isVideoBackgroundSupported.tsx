// Module ID: 9122
// Function ID: 9123
// Name: isVideoBackgroundSupported
// Dependencies: [1993, 4861, 1364, 9123, 2]
// Exports: default

// Module 9122 (isVideoBackgroundSupported)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import Constants from "Constants" /* 4861 */;
import VirtualBackgroundsIosExperimentDefault from "VirtualBackgroundsIosExperiment" /* 9123 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import size from "module_2" /* 2 */;

const Features = Constants.Features;
const result = size.fileFinishedImporting("modules/video_backgrounds/isVideoBackgroundSupported.tsx");

export default function isVideoBackgroundSupported() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = MediaEngineStore;
  }
  let supportsResult = obj.supports(Features.VIDEO_BACKGROUND_FILTER);
  if (supportsResult) {
    const _Object = Object;
    supportsResult = Object.values(obj.getVideoDevices()).length > 0;
  }
  let tmp4 = supportsResult;
  const obj2 = PlatformUtils;
  if (obj2.isIOS()) {
    const obj3 = VirtualBackgroundsIosExperimentDefault;
    tmp4 = obj3.getConfig({ location: "isVideoBackgroundSupported" }).enabled && supportsResult;
    obj3.getConfig({ location: "isVideoBackgroundSupported" }).enabled && supportsResult;
  }
  return tmp4;
};
