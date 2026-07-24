// Module ID: 11499
// Function ID: 89584
// Name: useChangelogIdFromChannel
// Dependencies: [4349, 566, 2]
// Exports: default

// Module 11499 (useChangelogIdFromChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/changelog/useChangelogIdFromChannel.tsx");

export default function useChangelogIdFromChannel(arg0) {
  const _require = arg0;
  let changelogId;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_2.getLastMessage(closure_0));
  if (null != stateFromStores) {
    changelogId = stateFromStores.changelogId;
  }
  return changelogId;
};
