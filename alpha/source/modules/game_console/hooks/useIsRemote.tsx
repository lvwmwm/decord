// Module ID: 7513
// Function ID: 7514
// Name: useIsRemote
// Dependencies: [4773, 504, 2]
// Exports: default

// Module 7513 (useIsRemote)
import initialize from "initialize" /* 504 */;
import GameConsoleStore from "GameConsoleStore" /* 4773 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  const items = [GameConsoleStore];
  return initialize.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo());
};
