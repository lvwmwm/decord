// Module ID: 10742
// Function ID: 10743
// Name: useVoiceStateForRemoteSession
// Dependencies: [1218, 4361, 4359, 589, 2]
// Exports: default

// Module 10742 (useVoiceStateForRemoteSession)
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
