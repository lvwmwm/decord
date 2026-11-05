// Module ID: 10051
// Function ID: 10052
// Name: useSelectedConversation
// Dependencies: [10035, 504, 2]
// Exports: default

// Module 10051 (useSelectedConversation)
import SelectedConversationStore from "SelectedConversationStore" /* 10035 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conversations/useSelectedConversation.tsx");

export default function useSelectedConversation(arg0) {
  let closure_0;
  _require = arg0;
  const items = [SelectedConversationStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const conversation = SelectedConversationStore.getConversation(closure_0);
    return conversation;
  }, items1);
};
