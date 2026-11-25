// Module ID: 8999
// Function ID: 9000
// Name: SelectedConversationStore
// Dependencies: [8260, 8263, 504, 572, 2]

// Module 8999 (SelectedConversationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 8260 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 8263 */;
import size from "module_2" /* 2 */;

let _null;

const React2 = null;
let closure_3 = 0;
let closure_4 = 0;
let closure_5 = null;
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
  getConversation(arg0) {
    let cacheType;
    let conversationId;
    let channelId;
    if (_null != null) {
      channelId = _null.channelId;
    }
    if (channelId !== arg0) {
      return null;
    } else {
      ({ cacheType, conversationId } = _null);
      if ("channel" === cacheType) {
        return ChannelConversationsStore.getConversation(arg0, conversationId);
      } else if ("preview" === cacheType) {
        return ConversationPreviewStore.getConversation(conversationId);
      } else {
        return null;
      }
    }
  }
  getHydratedMessages(arg0) {
    let cacheType;
    let conversationId;
    let channelId;
    if (_null != null) {
      channelId = _null.channelId;
    }
    if (channelId !== arg0) {
      return null;
    } else {
      ({ cacheType, conversationId } = _null);
      if ("channel" === cacheType) {
        return ChannelConversationsStore.getHydratedMessages(arg0, conversationId);
      } else if ("preview" === cacheType) {
        return ConversationPreviewStore.getHydratedMessages(conversationId);
      } else {
        return null;
      }
    }
  }
  isFullyHydrated(arg0) {
    let cacheType;
    let conversationId;
    let channelId;
    if (_null != null) {
      channelId = _null.channelId;
    }
    if (channelId !== arg0) {
      return false;
    } else {
      ({ cacheType, conversationId } = _null);
      if ("channel" === cacheType) {
        return ChannelConversationsStore.isFullyHydrated(arg0, conversationId);
      } else if ("preview" === cacheType) {
        return ConversationPreviewStore.isFullyHydrated(conversationId);
      } else {
        return false;
      }
    }
  }
  isConversationFetchPending(arg0, arg1) {
    let cacheType;
    let conversationId;
    let channelId;
    if (_null != null) {
      channelId = _null.channelId;
    }
    if (channelId !== arg0) {
      return false;
    } else {
      ({ cacheType, conversationId } = _null);
      if ("channel" === cacheType) {
        return ChannelConversationsStore.isConversationFetchPending(conversationId, arg1);
      } else if ("preview" === cacheType) {
        return ConversationPreviewStore.isConversationFetchPending(conversationId, arg1);
      } else {
        return false;
      }
    }
  }
  getFocusRequest() {
    let tmp = null;
    if (closure_3 !== closure_4) {
      tmp = closure_5;
    }
    return tmp;
  }
  consumeFocusRequest() {
    closure_4 = closure_3;
    return this.getFocusRequest();
  }
}
const prototype = SelectedConversationStore.prototype;
SelectedConversationStore.displayName = "SelectedConversationStore";
const obj = {
  SET_SELECTED_CONVERSATION: function handleSetSelectedConversation(channelId) {
    let c2 = { channelId: channelId.channelId, conversationId: channelId.conversationId, cacheType: channelId.cacheType };
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
        closure_4 = closure_3;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    if (null != _null) {
      if (_null.channelId !== tmp) {
        _null = null;
        closure_4 = closure_3;
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
      closure_4 = closure_3;
    }
  },
  CONVERSATION_FOCUS_REQUEST: function handleConversationFocusRequest(messageId) {
    messageId = messageId.messageId;
    closure_3 = closure_3 + 1;
    if (messageId == null) {
      messageId = null;
    }
    closure_5 = { messageId };
  },
  LOGOUT: function handleLogout() {
    let c2 = null;
    closure_4 = closure_3;
  }
};
const selectedConversationStore = new SelectedConversationStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/conversations/SelectedConversationStore.tsx");

export default selectedConversationStore;
