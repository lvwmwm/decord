// Module ID: 6083
// Function ID: 6084
// Name: useIsRemote
// Dependencies: [4463, 589, 2]
// Exports: default

// Module 6083 (useIsRemote)
import initialize from "initialize" /* 589 */;
import closure_2 from "set" /* 4463 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo());
};
