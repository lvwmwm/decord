// Module ID: 12143
// Function ID: 12144
// Name: useIsVideoBackgroundSupported
// Dependencies: [2130, 504, 6104, 2]
// Exports: default

// Module 12143 (useIsVideoBackgroundSupported)
import get_initialized from "get initialized" /* 504 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 6104 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundSupported.tsx");

export default function useIsVideoBackgroundSupported() {
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => isVideoBackgroundSupportedDefault(MediaEngineStore));
};
