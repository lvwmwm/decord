// Module ID: 5652
// Function ID: 48338
// Name: useIsRemote
// Dependencies: [4144, 566, 2]
// Exports: default

// Module 5652 (useIsRemote)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    let tmp = null != outer1_2.getRemoteSessionId();
    if (!tmp) {
      tmp = null != outer1_2.getAwaitingRemoteSessionInfo();
    }
    return tmp;
  });
};
