// Module ID: 6966
// Function ID: 6967
// Name: useIsRemote
// Dependencies: [5110, 558, 576, 504, 2]

// Module 6966 (useIsRemote)
import react from "react" /* 576 */;
import GameConsoleStore from "GameConsoleStore" /* 5110 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsRemote() {
  let remoteSessionId;
  let tmp4;
  let tmp5;
  let tmp = require;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameConsoleStore];
    const fn = function s() {
      const tmp = null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo();
      return tmp;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useIsRemote() {
  let remoteSessionId;
  const items = [GameConsoleStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    const tmp = null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo();
    return tmp;
  });
});
const result = size.fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default tmp2;
