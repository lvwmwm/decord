// Module ID: 7514
// Function ID: 7515
// Name: useSelectedConversation
// Dependencies: [7179, 7184, 504, 7515, 2]
// Exports: default

// Module 7514 (useSelectedConversation)
import resolveSelectedConversationDefault from "resolveSelectedConversation" /* 7515 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7179 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7184 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/useSelectedConversation.tsx");

export default function useSelectedConversation(arg0) {
  _require = arg0;
  const items = [ChannelConversationsStore, ConversationPreviewStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const selectedConversationId = ChannelConversationsStore.getSelectedConversationId(closure_0);
    let tmp4;
    if (null != selectedConversationId) {
      tmp4 = resolveSelectedConversationDefault(tmp, ConversationPreviewStore, tmp2, selectedConversationId);
    }
    return tmp4;
  }, items1);
};
