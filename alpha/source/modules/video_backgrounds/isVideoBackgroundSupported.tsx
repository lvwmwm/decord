// Module ID: 9325
// Function ID: 9326
// Name: isVideoBackgroundSupported
// Dependencies: [1999, 4915, 2]
// Exports: default

// Module 9325 (isVideoBackgroundSupported)
import Constants from "Constants" /* 4915 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
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
