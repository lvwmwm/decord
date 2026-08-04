// Module ID: 9089
// Function ID: 9090
// Name: isVideoBackgroundSupported
// Dependencies: [4332, 4345, 2]
// Exports: default

// Module 9089 (isVideoBackgroundSupported)
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
