// Module ID: 5998
// Function ID: 5999
// Name: useIsRemote
// Dependencies: [4397, 589, 2]
// Exports: default

// Module 5998 (useIsRemote)
import initialize from "initialize" /* 589 */;
import closure_2 from "set" /* 4397 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo());
};
