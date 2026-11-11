// Module ID: 12647
// Function ID: 12648
// Name: useIsRemote
// Dependencies: [6009, 504, 2]
// Exports: default

// Module 12647 (useIsRemote)
import get_initialized from "get initialized" /* 504 */;
import GameConsoleStore from "GameConsoleStore" /* 6009 */;
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
