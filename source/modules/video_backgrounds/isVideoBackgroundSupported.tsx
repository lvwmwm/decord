// Module ID: 8846
// Function ID: 8847
// Name: isVideoBackgroundSupported
// Dependencies: [4236, 4250, 2]
// Exports: default

// Module 8846 (isVideoBackgroundSupported)
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { Features } from "DesktopSources";

const result = require("set").fileFinishedImporting("modules/video_backgrounds/isVideoBackgroundSupported.tsx");

export default function isVideoBackgroundSupported() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = _detectH265HardwareDecode;
  }
  let supportsResult = obj.supports(Features.MEDIAPIPE);
  if (supportsResult) {
    const _Object = Object;
    supportsResult = Object.values(obj.getVideoDevices()).length > 0;
  }
  return supportsResult;
};
