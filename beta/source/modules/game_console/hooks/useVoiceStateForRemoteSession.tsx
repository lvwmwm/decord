// Module ID: 8962
// Function ID: 8963
// Name: useVoiceStateForRemoteSession
// Dependencies: [502, 4855, 4853, 504, 2]
// Exports: default

// Module 8962 (useVoiceStateForRemoteSession)
import get_initialized from "get initialized" /* 504 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import GameConsoleStore from "GameConsoleStore" /* 4853 */;
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
