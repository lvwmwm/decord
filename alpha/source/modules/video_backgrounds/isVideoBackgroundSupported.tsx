// Module ID: 5912
// Function ID: 5913
// Name: isVideoBackgroundSupported
// Dependencies: [2011, 5754, 2]
// Exports: default

// Module 5912 (isVideoBackgroundSupported)
import Constants from "Constants" /* 5754 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
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
