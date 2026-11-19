// Module ID: 8529
// Function ID: 8530
// Name: useSelectedConversation
// Dependencies: [8513, 504, 2]
// Exports: default

// Module 8529 (useSelectedConversation)
import SelectedConversationStore from "SelectedConversationStore" /* 8513 */;
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
