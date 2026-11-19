// Module ID: 5728
// Function ID: 5729
// Name: dispatchAutoDisableVideo
// Dependencies: [5537, 572, 2]
// Exports: default

// Module 5728 (dispatchAutoDisableVideo)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 5537 */;
import size from "module_2" /* 2 */;

const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("modules/media_engine/dispatchAutoDisableVideo.tsx");

export default function dispatchAutoDisableVideo(userId, videoToggleState) {
  const obj = DispatcherDefault;
  const obj2 = { type: "AUDIO_SET_LOCAL_VIDEO_DISABLED", context: MediaEngineContextTypes.DEFAULT, userId, videoToggleState, persist: false, isAutomatic: true };
  obj.dispatch(obj2);
};
