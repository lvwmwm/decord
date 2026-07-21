// Module ID: 5648
// Function ID: 48303
// Name: useIsRemote
// Dependencies: []
// Exports: default

// Module 5648 (useIsRemote)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => {
    let tmp = null != store.getRemoteSessionId();
    if (!tmp) {
      tmp = null != store.getAwaitingRemoteSessionInfo();
    }
    return tmp;
  });
};
