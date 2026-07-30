// Module ID: 6047
// Function ID: 6048
// Name: useIsRemote
// Dependencies: [4203, 589, 2]
// Exports: default

// Module 6047 (useIsRemote)
import set from "set";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  const items = [set];
  return require(589) /* initialize */.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo());
};
