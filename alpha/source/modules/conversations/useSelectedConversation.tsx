// Module ID: 9992
// Function ID: 9993
// Name: useSelectedConversation
// Dependencies: [9976, 504, 2]
// Exports: default

// Module 9992 (useSelectedConversation)
import SelectedConversationStore from "SelectedConversationStore" /* 9976 */;
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
