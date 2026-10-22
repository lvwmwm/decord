// Module ID: 9714
// Function ID: 9715
// Name: SelectedConversationStore
// Dependencies: [7682, 7686, 504, 584, 2]

// Module 9714 (SelectedConversationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7682 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7686 */;
import size from "module_2" /* 2 */;

let _null;

const React2 = null;
let closure_3 = 0;
let closure_4 = 0;
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
  getConversation(channelId) {
    let cacheType;
    let conversationId;
    channelId = undefined;
    if (_null != null) {
      channelId = _null.channelId;
    }
    if (channelId !== channelId) {
      return null;
    } else {
      ({ cacheType, conversationId } = _null);
      if ("channel" === cacheType) {
        const conversationMetadata = ChannelConversationsStore.getConversationMetadata(channelId, conversationId);
        let conversation;
        if (conversationMetadata != null) {
          conversation = conversationMetadata.conversation;
        }
        if (conversation == null) {
          conversation = null;
        }
        return conversation;
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
  consumeFocusRequest() {
    let flag = closure_3 !== closure_4;
    if (flag) {
      closure_4 = closure_3;
      flag = true;
    }
    return flag;
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
  CONVERSATION_FOCUS_REQUEST: function handleConversationFocusRequest() {
    closure_3 = closure_3 + 1;
  },
  LOGOUT: function handleLogout() {
    let c2 = null;
  }
};
const selectedConversationStore = new SelectedConversationStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/conversations/SelectedConversationStore.tsx");

export default selectedConversationStore;
