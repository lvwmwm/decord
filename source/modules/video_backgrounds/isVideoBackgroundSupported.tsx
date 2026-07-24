// Module ID: 8894
// Function ID: 70102
// Name: isVideoBackgroundSupported
// Dependencies: [4177, 4191, 2]
// Exports: default

// Module 8894 (isVideoBackgroundSupported)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Features } from "DesktopSources";

const result = require("set").fileFinishedImporting("modules/video_backgrounds/isVideoBackgroundSupported.tsx");

export default function isVideoBackgroundSupported() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = _isNativeReflectConstruct;
  }
  let supportsResult = obj.supports(Features.MEDIAPIPE);
  if (supportsResult) {
    const _Object = Object;
    supportsResult = Object.values(obj.getVideoDevices()).length > 0;
  }
  return supportsResult;
};
