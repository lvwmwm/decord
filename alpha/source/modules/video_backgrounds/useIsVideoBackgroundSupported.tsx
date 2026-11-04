// Module ID: 12142
// Function ID: 12143
// Name: useIsVideoBackgroundSupported
// Dependencies: [2135, 504, 6075, 2]
// Exports: default

// Module 12142 (useIsVideoBackgroundSupported)
import get_initialized from "get initialized" /* 504 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 6075 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundSupported.tsx");

export default function useIsVideoBackgroundSupported() {
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => isVideoBackgroundSupportedDefault(MediaEngineStore));
};
