// Module ID: 9216
// Function ID: 9217
// Name: useLocalSelfMuteDeaf
// Dependencies: [502, 2007, 504, 2]
// Exports: useLocalSelfMuteDeaf, withLocalSelfMuteDeaf

// Module 9216 (useLocalSelfMuteDeaf)
import get_initialized from "get initialized" /* 504 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import size from "module_2" /* 2 */;

function getLocalSelfMuteDeaf() {
  const obj = { sessionId: AuthenticationStore.getSessionId(), selfMute: MediaEngineStore.isSelfMute() || MediaEngineStore.isSelfMutedTemporarily(), selfDeaf: MediaEngineStore.isSelfDeaf() };
  MediaEngineStore.isSelfMute() || MediaEngineStore.isSelfMutedTemporarily();
  return obj;
}
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
export function useLocalSelfMuteDeaf() {
  const items = [AuthenticationStore, MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStoresObject(items, getLocalSelfMuteDeaf);
}
