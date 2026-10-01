// Module ID: 8974
// Function ID: 8975
// Name: MediaEngineActionCreators
// Dependencies: [1993, 4861, 573, 2]
// Exports: setPushToTalkState

// Module 8974 (MediaEngineActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 4861 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import size from "module_2" /* 2 */;

const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("modules/media_engine/MediaEngineActionCreators.tsx");

export const setPushToTalkState = function setPushToTalkState(isActive, arg1) {
  let closure_0 = isActive;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = DispatcherDefault;
  const obj2 = { type: "PUSH_TO_TALK_STATE_CHANGE", isActive, isPriority: flag };
  obj.dispatch(obj2);
  const mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.eachConnection((setForceAudioInput) => setForceAudioInput.setForceAudioInput(closure_0, flag, false), MediaEngineContextTypes.DEFAULT);
};
