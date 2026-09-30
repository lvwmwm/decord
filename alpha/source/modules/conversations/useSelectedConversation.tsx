// Module ID: 7544
// Function ID: 7545
// Name: useSelectedConversation
// Dependencies: [7209, 7214, 504, 7545, 2]
// Exports: default

// Module 7544 (useSelectedConversation)
import resolveSelectedConversationDefault from "resolveSelectedConversation" /* 7545 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7209 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7214 */;

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
