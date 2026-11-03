// Module ID: 7576
// Function ID: 7577
// Name: useIsRemote
// Dependencies: [5885, 504, 2]
// Exports: default

// Module 7576 (useIsRemote)
import get_initialized from "get initialized" /* 504 */;
import GameConsoleStore from "GameConsoleStore" /* 5885 */;
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
