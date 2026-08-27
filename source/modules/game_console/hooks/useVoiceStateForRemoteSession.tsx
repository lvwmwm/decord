// Module ID: 9571
// Function ID: 9572
// Name: useVoiceStateForRemoteSession
// Dependencies: [1218, 4464, 4462, 589, 2]
// Exports: default

// Module 9571 (useVoiceStateForRemoteSession)
import initialize from "initialize" /* 589 */;
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "updateVoiceState" /* 4464 */;
import closure_4 from "set" /* 4462 */;

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
