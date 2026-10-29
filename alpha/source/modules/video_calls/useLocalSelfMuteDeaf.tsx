// Module ID: 9203
// Function ID: 9204
// Name: useLocalSelfMuteDeaf
// Dependencies: [502, 2012, 558, 576, 504, 2]
// Exports: withLocalSelfMuteDeaf

// Module 9203 (useLocalSelfMuteDeaf)
import react from "react" /* 576 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
function getLocalSelfMuteDeaf() {
  const obj = { sessionId: AuthenticationStore.getSessionId(), selfMute: MediaEngineStore.isSelfMute() || MediaEngineStore.isSelfMutedTemporarily(), selfDeaf: MediaEngineStore.isSelfDeaf() };
  MediaEngineStore.isSelfMute() || MediaEngineStore.isSelfMutedTemporarily();
  return obj;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useLocalSelfMuteDeaf() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore, MediaEngineStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStoresObject(first, getLocalSelfMuteDeaf);
}) : (function useLocalSelfMuteDeaf() {
  const items = [AuthenticationStore, MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStoresObject(items, getLocalSelfMuteDeaf);
});
const result = size.fileFinishedImporting("modules/video_calls/useLocalSelfMuteDeaf.tsx");

export { getLocalSelfMuteDeaf };
export function withLocalSelfMuteDeaf(voiceState, localSelfMuteDeaf) {
  const sessionId = localSelfMuteDeaf.sessionId;
  let mergeResult = voiceState;
  if (null != voiceState) {
    mergeResult = voiceState;
    if (null != sessionId) {
      mergeResult = voiceState;
      if (voiceState.sessionId === sessionId) {
        const obj = { selfMute: tmp, selfDeaf: tmp2 };
        mergeResult = voiceState.merge(obj);
      }
    }
  }
  return mergeResult;
}
export const useLocalSelfMuteDeaf = tmp2;
