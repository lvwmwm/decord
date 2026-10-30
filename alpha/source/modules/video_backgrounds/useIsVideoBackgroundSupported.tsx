// Module ID: 11906
// Function ID: 11907
// Name: useIsVideoBackgroundSupported
// Dependencies: [2007, 504, 5921, 2]
// Exports: default

// Module 11906 (useIsVideoBackgroundSupported)
import get_initialized from "get initialized" /* 504 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5921 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundSupported.tsx");

export default function useIsVideoBackgroundSupported() {
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => isVideoBackgroundSupportedDefault(MediaEngineStore));
};
