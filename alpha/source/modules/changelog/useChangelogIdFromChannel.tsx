// Module ID: 13246
// Function ID: 13247
// Name: useChangelogIdFromChannel
// Dependencies: [6265, 504, 2]
// Exports: default

// Module 13246 (useChangelogIdFromChannel)
import MessageStore from "MessageStore" /* 6265 */;
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
