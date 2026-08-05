// Module ID: 10634
// Function ID: 10635
// Name: useVoiceStateForRemoteSession
// Dependencies: [1218, 4271, 4269, 589, 2]
// Exports: default

// Module 10634 (useVoiceStateForRemoteSession)
import fetchFingerprint from "fetchFingerprint";
import updateVoiceState from "updateVoiceState";
import set from "set";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default function useVoiceStateForRemoteSession() {
  const items = [fetchFingerprint, updateVoiceState, set];
  return require(589) /* initialize */.useStateFromStores(items, () => {
    id = id.getId();
    voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
    return voiceStateForSession;
  }, []);
};
