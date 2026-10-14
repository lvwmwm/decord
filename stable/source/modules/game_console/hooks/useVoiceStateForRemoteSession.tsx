// Module ID: 9445
// Function ID: 9446
// Name: useVoiceStateForRemoteSession
// Dependencies: [502, 4909, 4907, 558, 576, 504, 2]

// Module 9445 (useVoiceStateForRemoteSession)
import react from "react" /* 576 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import GameConsoleStore from "GameConsoleStore" /* 4907 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let id, voiceStateForSession;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
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
