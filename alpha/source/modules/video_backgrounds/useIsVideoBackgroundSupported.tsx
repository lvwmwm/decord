// Module ID: 10967
// Function ID: 10968
// Name: useIsVideoBackgroundSupported
// Dependencies: [2131, 504, 5834, 2]
// Exports: default

// Module 10967 (useIsVideoBackgroundSupported)
import get_initialized from "get initialized" /* 504 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5834 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundSupported.tsx");

export default function useIsVideoBackgroundSupported() {
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => isVideoBackgroundSupportedDefault(MediaEngineStore));
};
