// Module ID: 6127
// Function ID: 6128
// Name: useIsRemote
// Dependencies: [4495, 586, 2]
// Exports: default

// Module 6127 (useIsRemote)
import initialize from "initialize" /* 586 */;
import closure_2 from "set" /* 4495 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo());
};
