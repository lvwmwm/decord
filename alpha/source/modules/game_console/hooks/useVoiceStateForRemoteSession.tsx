// Module ID: 9109
// Function ID: 9110
// Name: useVoiceStateForRemoteSession
// Dependencies: [502, 5111, 5109, 558, 576, 504, 2]

// Module 9109 (useVoiceStateForRemoteSession)
import react from "react" /* 576 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 5111 */;
import GameConsoleStore from "GameConsoleStore" /* 5109 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let id, voiceStateForSession;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVoiceStateForRemoteSession() {
  let remoteSessionId;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore, VoiceStateStore, GameConsoleStore];
    const fn = function u() {
      id = id.getId();
      voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
      return voiceStateForSession;
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5, tmp6);
}) : (function useVoiceStateForRemoteSession() {
  let remoteSessionId;
  const items = [AuthenticationStore, VoiceStateStore, GameConsoleStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    id = id.getId();
    voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
    return voiceStateForSession;
  }, []);
});
const result = size.fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default tmp2;
