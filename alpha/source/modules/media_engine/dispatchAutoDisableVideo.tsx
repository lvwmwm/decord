// Module ID: 5293
// Function ID: 5294
// Name: dispatchAutoDisableVideo
// Dependencies: [5115, 584, 2]
// Exports: default

// Module 5293 (dispatchAutoDisableVideo)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 5115 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("modules/media_engine/dispatchAutoDisableVideo.tsx");

export default function dispatchAutoDisableVideo(userId, videoToggleState) {
  importDefault = userId;
  dependencyMap = videoToggleState;
  let obj = DispatcherDefault;
  obj.wait(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "AUDIO_SET_LOCAL_VIDEO_DISABLED", context: MediaEngineContextTypes.DEFAULT, userId, videoToggleState, persist: false, isAutomatic: true };
    obj.dispatch(obj2);
  });
};
