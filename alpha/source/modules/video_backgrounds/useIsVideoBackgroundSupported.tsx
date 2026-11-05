// Module ID: 12151
// Function ID: 12152
// Name: useIsVideoBackgroundSupported
// Dependencies: [2135, 504, 6078, 2]
// Exports: default

// Module 12151 (useIsVideoBackgroundSupported)
import get_initialized from "get initialized" /* 504 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 6078 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundSupported.tsx");

export default function useIsVideoBackgroundSupported() {
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => isVideoBackgroundSupportedDefault(MediaEngineStore));
};
