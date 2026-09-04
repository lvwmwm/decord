// Module ID: 7211
// Function ID: 7212
// Name: useIsRemote
// Dependencies: [4498, 586, 2]
// Exports: default

// Module 7211 (useIsRemote)
import initialize from "initialize" /* 586 */;
import closure_2 from "set" /* 4498 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo());
};
