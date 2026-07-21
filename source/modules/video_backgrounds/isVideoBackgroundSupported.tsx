// Module ID: 8847
// Function ID: 69822
// Name: isVideoBackgroundSupported
// Dependencies: []
// Exports: default

// Module 8847 (isVideoBackgroundSupported)
let closure_0 = importDefault(dependencyMap[0]);
const Features = arg1(dependencyMap[1]).Features;
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/video_backgrounds/isVideoBackgroundSupported.tsx");

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
