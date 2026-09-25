// Module ID: 7344
// Function ID: 7345
// Name: useSelectedConversation
// Dependencies: [7009, 7013, 504, 7345, 2]
// Exports: default

// Module 7344 (useSelectedConversation)
import resolveSelectedConversationDefault from "resolveSelectedConversation" /* 7345 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7009 */;
import ConversationsStore from "ConversationsStore" /* 7013 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/useSelectedConversation.tsx");

export default function useSelectedConversation(arg0) {
  _require = arg0;
  const items = [ConversationsStore, ConversationPreviewStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const selectedConversationId = ConversationsStore.getSelectedConversationId(closure_0);
    let tmp4;
    if (null != selectedConversationId) {
      tmp4 = resolveSelectedConversationDefault(tmp, ConversationPreviewStore, tmp2, selectedConversationId);
    }
    return tmp4;
  }, items1);
};
