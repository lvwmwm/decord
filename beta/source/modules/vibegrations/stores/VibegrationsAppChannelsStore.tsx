// Module ID: 12827
// Function ID: 12828
// Name: VibegrationsAppChannelsStore
// Dependencies: [504, 573, 2]

// Module 12827 (VibegrationsAppChannelsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import size_mod from "module_2" /* 2 */;

const set = new Set();
const Store = get_initializedDefault.Store;
class VibegrationsAppChannelsStore extends Store {
  isChatOpen(current) {
    return set.has(current);
  }
}
const prototype = VibegrationsAppChannelsStore.prototype;
let obj = {
  LOGOUT: function handleLogout() {
    const obj = set;
    if (0 === set.size) {
      return false;
    } else {
      obj.clear();
    }
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
    size = set.size;
    if (null != tmp) {
      num = 1;
    }
    if (size === num) {
      return false;
    } else {
      set.clear();
      if (null != tmp) {
        set.add(tmp);
      }
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    const id = channel.channel.id;
    const obj = set;
    if (set.has(id)) {
      obj.delete(id);
    } else {
      return false;
    }
  },
  VIBEGRATIONS_APP_CHANNEL_CHAT_SET: function handleChatSet(arg0) {
    let channelId;
    let open;
    ({ channelId, open } = arg0);
    if (set.has(channelId) === open) {
      return false;
    } else if (open) {
      set.add(channelId);
    } else {
      set.delete(channelId);
    }
  }
};
const vibegrationsAppChannelsStore = new VibegrationsAppChannelsStore(DispatcherDefault, obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsAppChannelsStore.tsx");

export default vibegrationsAppChannelsStore;
