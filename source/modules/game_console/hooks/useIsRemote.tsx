// Module ID: 6086
// Function ID: 6087
// Name: useIsRemote
// Dependencies: [4465, 589, 2]
// Exports: default

// Module 6086 (useIsRemote)
import initialize from "initialize" /* 589 */;
import closure_2 from "set" /* 4465 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo());
};
