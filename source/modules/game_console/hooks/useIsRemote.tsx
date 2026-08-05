// Module ID: 5785
// Function ID: 5786
// Name: useIsRemote
// Dependencies: [4269, 589, 2]
// Exports: default

// Module 5785 (useIsRemote)
import set from "set";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  const items = [set];
  return require(589) /* initialize */.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo());
};
