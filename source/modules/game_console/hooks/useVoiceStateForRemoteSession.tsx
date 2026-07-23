// Module ID: 8934
// Function ID: 70450
// Name: useVoiceStateForRemoteSession
// Dependencies: [1194, 4146, 4144, 566, 2]
// Exports: default

// Module 8934 (useVoiceStateForRemoteSession)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default function useVoiceStateForRemoteSession() {
  const items = [_isNativeReflectConstruct, closure_3, closure_4];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    const id = outer1_2.getId();
    const voiceStateForSession = outer1_3.getVoiceStateForSession(id, outer1_4.getRemoteSessionId());
    let tmp3;
    if (null != voiceStateForSession) {
      tmp3 = voiceStateForSession;
    }
    return tmp3;
  }, []);
};
