// Module ID: 10999
// Function ID: 11000
// Name: MediaEngineActionCreators
// Dependencies: [5116, 584, 2]
// Exports: setPushToTalkState

// Module 10999 (MediaEngineActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 5116 */;
import size from "module_2" /* 2 */;

const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("modules/media_engine/MediaEngineActionCreators.tsx");

export const setPushToTalkState = function setPushToTalkState(mediaEngine, isActive, arg2) {
  let closure_0 = isActive;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const obj = DispatcherDefault;
  const obj2 = { type: "PUSH_TO_TALK_STATE_CHANGE", isActive, isPriority: flag };
  obj.dispatch(obj2);
  mediaEngine.eachConnection((setForceAudioInput) => setForceAudioInput.setForceAudioInput(closure_0, flag, false), MediaEngineContextTypes.DEFAULT);
};
