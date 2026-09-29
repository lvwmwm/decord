// Module ID: 13587
// Function ID: 13588
// Name: VibegrationsAppChannelsStore
// Dependencies: [504, 573, 2]

// Module 13587 (VibegrationsAppChannelsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

const set = new Set();
const Store = initializeDefault.Store;
class VibegrationsAppChannelsStore extends Store {
}
VibegrationsAppChannelsStore.prototype["isChatOpen"] = function isChatOpen(current) {
  return set.has(current);
};
const vibegrationsAppChannelsStore = new VibegrationsAppChannelsStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (0 === set.size) {
      return false;
    } else {
      obj.clear();
    }
    obj = set;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    let tmp = null;
    if (null != channelId) {
      tmp = null;
      if (set.has(channelId)) {
        tmp = channelId;
      }
    }
    let num = 0;
    if (null != tmp) {
      num = 1;
    }
    if (set.size === num) {
      return false;
    } else {
      obj.clear();
      if (null != tmp) {
        obj.add(tmp);
      }
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    const id = channel.channel.id;
    if (set.has(id)) {
      obj.delete(id);
    } else {
      return false;
    }
    obj = set;
  },
  VIBEGRATIONS_APP_CHANNEL_CHAT_SET: function handleChatSet(arg0) {
    ({ channelId, open } = arg0);
    if (set.has(channelId) === open) {
      return false;
    } else if (open) {
      obj.add(channelId);
    } else {
      obj.delete(channelId);
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsAppChannelsStore.tsx");

export default vibegrationsAppChannelsStore;
