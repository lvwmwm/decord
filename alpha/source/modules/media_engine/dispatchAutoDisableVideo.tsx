// Module ID: 6200
// Function ID: 6201
// Name: dispatchAutoDisableVideo
// Dependencies: [6012, 572, 2]
// Exports: default

// Module 6200 (dispatchAutoDisableVideo)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 6012 */;
import size from "module_2" /* 2 */;

const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("modules/media_engine/dispatchAutoDisableVideo.tsx");

export default function dispatchAutoDisableVideo(userId, videoToggleState) {
  const obj = DispatcherDefault;
  const obj2 = { type: "AUDIO_SET_LOCAL_VIDEO_DISABLED", context: MediaEngineContextTypes.DEFAULT, userId, videoToggleState, persist: false, isAutomatic: true };
  obj.dispatch(obj2);
};
