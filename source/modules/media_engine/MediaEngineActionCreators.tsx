// Module ID: 10374
// Function ID: 80010
// Name: setPushToTalkState
// Dependencies: []
// Exports: setPushToTalkState

// Module 10374 (setPushToTalkState)
let closure_2 = importDefault(dependencyMap[0]);
const MediaEngineContextTypes = arg1(dependencyMap[1]).MediaEngineContextTypes;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/media_engine/MediaEngineActionCreators.tsx");

export const setPushToTalkState = function setPushToTalkState(isActive, arg1) {
  let flag = arg1;
  const importDefault = isActive;
  if (arg1 === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "PUSH_TO_TALK_STATE_CHANGE", isActive, isPriority: flag };
  obj.dispatch(obj);
  const mediaEngine = mediaEngine.getMediaEngine();
  mediaEngine.eachConnection((setForceAudioInput) => setForceAudioInput.setForceAudioInput(setForceAudioInput, flag, false), MediaEngineContextTypes.DEFAULT);
};
