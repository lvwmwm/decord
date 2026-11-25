// Module ID: 10858
// Function ID: 10859
// Name: useVoiceStateForRemoteSession
// Dependencies: [502, 5561, 5655, 504, 2]
// Exports: default

// Module 10858 (useVoiceStateForRemoteSession)
import get_initialized from "get initialized" /* 504 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 5561 */;
import GameConsoleStore from "GameConsoleStore" /* 5655 */;
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
