// Module ID: 9705
// Function ID: 9706
// Name: isVideoBackgroundSupported
// Dependencies: [4501, 4534, 2]
// Exports: default

// Module 9705 (isVideoBackgroundSupported)
import closure_0 from "_detectH265HardwareDecode" /* 4501 */;
import { Features } from "DesktopSources" /* 4534 */;

const result = require("set").fileFinishedImporting("modules/video_backgrounds/isVideoBackgroundSupported.tsx");

export default function isVideoBackgroundSupported() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = closure_0;
  }
  let supportsResult = obj.supports(Features.MEDIAPIPE);
  if (supportsResult) {
    const _Object = Object;
    supportsResult = Object.values(obj.getVideoDevices()).length > 0;
  }
  return supportsResult;
};
