// Module ID: 9939
// Function ID: 9940
// Name: isVideoBackgroundSupported
// Dependencies: [1996, 4815, 1368, 9940, 2]
// Exports: default

// Module 9939 (isVideoBackgroundSupported)
import VirtualBackgroundsIosExperimentDefault from "VirtualBackgroundsIosExperiment" /* 9940 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;

const require = fn;
const Features = fn(4815).Features;
const size = fn(2);
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
  if (obj2.isIOS()) {
    tmp4 = VirtualBackgroundsIosExperimentDefault.getConfig({ location: "isVideoBackgroundSupported" }).enabled && supportsResult;
    const tmp6 = VirtualBackgroundsIosExperimentDefault.getConfig({ location: "isVideoBackgroundSupported" }).enabled && supportsResult;
  }
  return tmp4;
};
