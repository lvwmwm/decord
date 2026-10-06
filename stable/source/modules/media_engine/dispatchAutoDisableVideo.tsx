// Module ID: 13369
// Function ID: 13370
// Name: dispatchAutoDisableVideo
// Dependencies: [4862, 585, 2]
// Exports: default

// Module 13369 (dispatchAutoDisableVideo)
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 4862 */;
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
