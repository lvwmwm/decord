// Module ID: 10233
// Function ID: 10234
// Name: MediaEngineActionCreators
// Dependencies: [1996, 4815, 577, 2]
// Exports: setPushToTalkState

// Module 10233 (MediaEngineActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;

const MediaEngineContextTypes = fn(4815).MediaEngineContextTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_engine/MediaEngineActionCreators.tsx");

export const setPushToTalkState = function setPushToTalkState(first1, arg1) {
  closure_0 = first1;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  DispatcherDefault.dispatch({ type: "PUSH_TO_TALK_STATE_CHANGE", isActive: first1, isPriority: flag });
  const mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.eachConnection((setForceAudioInput) => setForceAudioInput.setForceAudioInput(closure_0, flag, false), MediaEngineContextTypes.DEFAULT);
};
