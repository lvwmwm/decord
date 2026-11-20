// Module ID: 10733
// Function ID: 10734
// Name: useVoiceStateForRemoteSession
// Dependencies: [502, 5442, 5536, 504, 2]
// Exports: default

// Module 10733 (useVoiceStateForRemoteSession)
import get_initialized from "get initialized" /* 504 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 5442 */;
import GameConsoleStore from "GameConsoleStore" /* 5536 */;
import size from "module_2" /* 2 */;

let id, voiceStateForSession;

const result = size.fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default function useVoiceStateForRemoteSession() {
  let remoteSessionId;
  const items = [AuthenticationStore, VoiceStateStore, GameConsoleStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    id = id.getId();
    voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
    return voiceStateForSession;
  }, []);
};
