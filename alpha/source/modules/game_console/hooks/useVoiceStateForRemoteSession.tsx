// Module ID: 12022
// Function ID: 12023
// Name: useVoiceStateForRemoteSession
// Dependencies: [502, 5803, 5894, 504, 2]
// Exports: default

// Module 12022 (useVoiceStateForRemoteSession)
import get_initialized from "get initialized" /* 504 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 5803 */;
import GameConsoleStore from "GameConsoleStore" /* 5894 */;
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
