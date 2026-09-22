// Module ID: 9775
// Function ID: 9776
// Name: useVoiceStateForRemoteSession
// Dependencies: [502, 4776, 4774, 504, 2]
// Exports: default

// Module 9775 (useVoiceStateForRemoteSession)
import initialize from "initialize" /* 504 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 4776 */;
import GameConsoleStore from "GameConsoleStore" /* 4774 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default function useVoiceStateForRemoteSession() {
  const items = [AuthenticationStore, VoiceStateStore, GameConsoleStore];
  return initialize.useStateFromStores(items, () => {
    id = id.getId();
    voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
    return voiceStateForSession;
  }, []);
};
