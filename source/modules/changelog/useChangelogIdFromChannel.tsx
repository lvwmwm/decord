// Module ID: 11878
// Function ID: 11879
// Name: useChangelogIdFromChannel
// Dependencies: [4584, 589, 2]
// Exports: default

// Module 11878 (useChangelogIdFromChannel)
import reinjectEphemerals from "reinjectEphemerals";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/changelog/useChangelogIdFromChannel.tsx");

export default function useChangelogIdFromChannel(arg0) {
  const _require = arg0;
  const items = [reinjectEphemerals];
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_2.getLastMessage(closure_0));
  let changelogId;
  if (stateFromStores != null) {
    changelogId = stateFromStores.changelogId;
  }
  return changelogId;
};
