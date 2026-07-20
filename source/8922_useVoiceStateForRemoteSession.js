// Module ID: 8922
// Function ID: 70373
// Name: useVoiceStateForRemoteSession
// Dependencies: []
// Exports: default

// Module 8922 (useVoiceStateForRemoteSession)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default function useVoiceStateForRemoteSession() {
  const items = [closure_2, closure_3, closure_4];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const id = id.getId();
    const voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
    let tmp3;
    if (null != voiceStateForSession) {
      tmp3 = voiceStateForSession;
    }
    return tmp3;
  }, []);
};
