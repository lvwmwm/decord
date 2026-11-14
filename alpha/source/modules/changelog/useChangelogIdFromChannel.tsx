// Module ID: 14869
// Function ID: 14870
// Name: useChangelogIdFromChannel
// Dependencies: [6372, 504, 2]
// Exports: default

// Module 14869 (useChangelogIdFromChannel)
import MessageStore from "MessageStore" /* 6372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/changelog/useChangelogIdFromChannel.tsx");

export default function useChangelogIdFromChannel(arg0) {
  let closure_0;
  _require = arg0;
  const items = [MessageStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => MessageStore.getLastMessage(closure_0));
  let changelogId;
  if (stateFromStores != null) {
    changelogId = stateFromStores.changelogId;
  }
  return changelogId;
};
