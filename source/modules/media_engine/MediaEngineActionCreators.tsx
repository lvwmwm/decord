// Module ID: 10414
// Function ID: 80265
// Name: setPushToTalkState
// Dependencies: [4177, 4191, 686, 2]
// Exports: setPushToTalkState

// Module 10414 (setPushToTalkState)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MediaEngineContextTypes } from "DesktopSources";

const result = require("dispatcher").fileFinishedImporting("modules/media_engine/MediaEngineActionCreators.tsx");

export const setPushToTalkState = function setPushToTalkState(isActive, arg1) {
  let flag = arg1;
  const importDefault = isActive;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(flag[2]);
  obj = { type: "PUSH_TO_TALK_STATE_CHANGE", isActive, isPriority: flag };
  obj.dispatch(obj);
  mediaEngine = mediaEngine.getMediaEngine();
  mediaEngine.eachConnection((setForceAudioInput) => setForceAudioInput.setForceAudioInput(closure_0, flag, false), MediaEngineContextTypes.DEFAULT);
};
