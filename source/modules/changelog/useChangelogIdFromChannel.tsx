// Module ID: 12370
// Function ID: 12371
// Name: useChangelogIdFromChannel
// Dependencies: [4743, 586, 2]
// Exports: default

// Module 12370 (useChangelogIdFromChannel)
import closure_2 from "reinjectEphemerals" /* 4743 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/changelog/useChangelogIdFromChannel.tsx");

export default function useChangelogIdFromChannel(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = _require(586).useStateFromStores(items, () => closure_1_2.getLastMessage(closure_0));
  let changelogId;
  if (stateFromStores != null) {
    changelogId = stateFromStores.changelogId;
  }
  return changelogId;
};
