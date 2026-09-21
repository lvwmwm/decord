// Module ID: 12692
// Function ID: 12693
// Name: useChangelogIdFromChannel
// Dependencies: [4976, 504, 2]
// Exports: default

// Module 12692 (useChangelogIdFromChannel)
import MessageStore from "MessageStore" /* 4976 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/changelog/useChangelogIdFromChannel.tsx");

export default function useChangelogIdFromChannel(arg0) {
  _require = arg0;
  const items = [MessageStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => MessageStore.getLastMessage(closure_0));
  let changelogId;
  if (stateFromStores != null) {
    changelogId = stateFromStores.changelogId;
  }
  return changelogId;
};
