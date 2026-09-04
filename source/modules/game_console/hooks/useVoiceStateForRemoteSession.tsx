// Module ID: 9144
// Function ID: 9145
// Name: useVoiceStateForRemoteSession
// Dependencies: [1215, 4500, 4498, 586, 2]
// Exports: default

// Module 9144 (useVoiceStateForRemoteSession)
import initialize from "initialize" /* 586 */;
import closure_2 from "fetchFingerprint" /* 1215 */;
import closure_3 from "updateVoiceState" /* 4500 */;
import closure_4 from "set" /* 4498 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default function useVoiceStateForRemoteSession() {
  const items = [closure_2, closure_3, closure_4];
  return initialize.useStateFromStores(items, () => {
    id = id.getId();
    voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
    return voiceStateForSession;
  }, []);
};
