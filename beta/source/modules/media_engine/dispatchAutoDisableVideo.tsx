// Module ID: 14094
// Function ID: 14095
// Name: dispatchAutoDisableVideo
// Dependencies: [4783, 577, 2]
// Exports: default

// Module 14094 (dispatchAutoDisableVideo)
import DispatcherDefault from "Dispatcher" /* 577 */;
import Constants from "Constants" /* 4783 */;
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
