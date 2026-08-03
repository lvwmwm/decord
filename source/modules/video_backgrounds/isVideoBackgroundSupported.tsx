// Module ID: 9036
// Function ID: 9037
// Name: isVideoBackgroundSupported
// Dependencies: [4302, 4316, 2]
// Exports: default

// Module 9036 (isVideoBackgroundSupported)
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
