// Module ID: 5941
// Function ID: 5942
// Name: dispatchAutoDisableVideo
// Dependencies: [5756, 584, 2]
// Exports: default

// Module 5941 (dispatchAutoDisableVideo)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 5756 */;
import size from "module_2" /* 2 */;

const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("modules/media_engine/dispatchAutoDisableVideo.tsx");

export default function dispatchAutoDisableVideo(userId, videoToggleState) {
  const obj = DispatcherDefault;
  const obj2 = { type: "AUDIO_SET_LOCAL_VIDEO_DISABLED", context: MediaEngineContextTypes.DEFAULT, userId, videoToggleState, persist: false, isAutomatic: true };
  obj.dispatch(obj2);
};
