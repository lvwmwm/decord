// Module ID: 9438
// Function ID: 9439
// Name: useIsVideoBackgroundSupported
// Dependencies: [1993, 504, 9122, 2]
// Exports: default

// Module 9438 (useIsVideoBackgroundSupported)
import initialize from "initialize" /* 504 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 9122 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundSupported.tsx");

export default function useIsVideoBackgroundSupported() {
  const items = [MediaEngineStore];
  return initialize.useStateFromStores(items, () => isVideoBackgroundSupportedDefault(MediaEngineStore));
};
