// Module ID: 10347
// Function ID: 79918
// Name: setPushToTalkState
// Dependencies: [4178, 4192, 686, 2]
// Exports: setPushToTalkState

// Module 10347 (setPushToTalkState)
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
