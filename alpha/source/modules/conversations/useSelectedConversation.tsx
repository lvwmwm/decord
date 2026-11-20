// Module ID: 8528
// Function ID: 8529
// Name: useSelectedConversation
// Dependencies: [8512, 504, 2]
// Exports: default

// Module 8528 (useSelectedConversation)
import SelectedConversationStore from "SelectedConversationStore" /* 8512 */;
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
