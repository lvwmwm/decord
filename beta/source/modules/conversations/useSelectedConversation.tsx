// Module ID: 7349
// Function ID: 7350
// Name: useSelectedConversation
// Dependencies: [7014, 7018, 504, 7350, 2]
// Exports: default

// Module 7349 (useSelectedConversation)
import resolveSelectedConversationDefault from "resolveSelectedConversation" /* 7350 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7014 */;
import ConversationsStore from "ConversationsStore" /* 7018 */;

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
