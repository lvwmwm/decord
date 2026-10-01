// Module ID: 9438
// Function ID: 9439
// Name: useIsVideoBackgroundSupported
// Dependencies: [1993, 504, 9122, 2]
// Exports: default

// Module 9438 (useIsVideoBackgroundSupported)
import get_initialized from "get initialized" /* 504 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 9122 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundSupported.tsx");

export default function useIsVideoBackgroundSupported() {
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => isVideoBackgroundSupportedDefault(MediaEngineStore));
};
