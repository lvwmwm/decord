// Module ID: 7549
// Function ID: 7550
// Name: useIsRemote
// Dependencies: [5926, 504, 2]
// Exports: default

// Module 7549 (useIsRemote)
import get_initialized from "get initialized" /* 504 */;
import GameConsoleStore from "GameConsoleStore" /* 5926 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  let remoteSessionId;
  const items = [GameConsoleStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    const tmp = null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo();
    return tmp;
  });
};
