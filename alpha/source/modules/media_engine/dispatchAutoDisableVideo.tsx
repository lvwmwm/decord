// Module ID: 14091
// Function ID: 14092
// Name: dispatchAutoDisableVideo
// Dependencies: [4781, 573, 2]
// Exports: default

// Module 14091 (dispatchAutoDisableVideo)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 4781 */;
import size from "module_2" /* 2 */;

const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("modules/media_engine/dispatchAutoDisableVideo.tsx");

export default function dispatchAutoDisableVideo(userId, videoToggleState) {
  importDefault = userId;
  dependencyMap = videoToggleState;
  DispatcherDefault.wait(() => {
    DispatcherDefault.dispatch({ type: "AUDIO_SET_LOCAL_VIDEO_DISABLED", context: MediaEngineContextTypes.DEFAULT, userId, videoToggleState, persist: false, isAutomatic: true });
  });
};
