// Module ID: 6049
// Function ID: 6050
// Name: useIsRemote
// Dependencies: [4203, 589, 2]
// Exports: default

// Module 6049 (useIsRemote)
import set from "set";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  const items = [set];
  return require(589) /* initialize */.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo());
};
