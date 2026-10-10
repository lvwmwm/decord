// Module ID: 9338
// Function ID: 9339
// Name: SelectedConversationStore
// Dependencies: [7313, 7318, 504, 584, 2]

// Module 9338 (SelectedConversationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7313 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7318 */;
import size from "module_2" /* 2 */;

let _null;

const React2 = null;
const Store = get_initializedDefault.Store;
class SelectedConversationStore extends Store {
  initialize() {
    const items = [ChannelConversationsStore, ConversationPreviewStore];
    this.syncWith(items, () => null != _null);
  }
  getSelectedConversationId(c0) {
    let channelId;
    if (_null != null) {
      channelId = _null.channelId;
    }
    let conversationId = null;
    if (channelId === c0) {
      conversationId = _null.conversationId;
    }
    return conversationId;
  }
  getSelectedConversation(channelId) {
    const selectedConversationId = this.getSelectedConversationId(channelId);
    let tmp2 = null;
    if (null != selectedConversationId) {
      const conversationMetadata = ChannelConversationsStore.getConversationMetadata(channelId, selectedConversationId);
      let conversation;
      if (conversationMetadata != null) {
        conversation = conversationMetadata.conversation;
      }
      if (conversation == null) {
        conversation = ConversationPreviewStore.getConversation(selectedConversationId);
      }
      tmp2 = conversation;
    }
    return tmp2;
  }
}
const prototype = SelectedConversationStore.prototype;
SelectedConversationStore.displayName = "SelectedConversationStore";
const obj = {
  SET_SELECTED_CONVERSATION: function handleSetSelectedConversation(channelId) {
    let c2 = { channelId: channelId.channelId, conversationId: channelId.conversationId };
  },
  CLEAR_CONVERSATION_SELECTION: function handleClearConversationSelection(conversationId) {
    conversationId = conversationId.conversationId;
    let channelId1;
    const channelId = conversationId.channelId;
    if (_null != null) {
      channelId1 = _null.channelId;
    }
    let tmp2 = channelId1 === channelId;
    if (tmp2) {
      if (null == conversationId || _null.conversationId === conversationId) {
        _null = null;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    if (null != _null) {
      if (_null.channelId !== tmp) {
        _null = null;
      }
    }
    return false;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    let channelId;
    channel = channel.channel;
    if (_null != null) {
      channelId = _null.channelId;
    }
    if (channelId !== channel.id) {
      return false;
    } else {
      _null = null;
    }
  },
  LOGOUT: function handleLogout() {
    let c2 = null;
  }
};
const selectedConversationStore = new SelectedConversationStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/conversations/SelectedConversationStore.tsx");

export default selectedConversationStore;
