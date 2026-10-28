// Module ID: 5908
// Function ID: 5909
// Name: isVideoBackgroundSupported
// Dependencies: [2014, 5750, 2]
// Exports: default

// Module 5908 (isVideoBackgroundSupported)
import Constants from "Constants" /* 5750 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
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
  return supportsResult;
};
