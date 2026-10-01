// Module ID: 16239
// Function ID: 16240
// Name: VibegrationsBuilderRouteStore
// Dependencies: [2052, 504, 573, 2]

// Module 16239 (VibegrationsBuilderRouteStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import size from "module_2" /* 2 */;

let _null, c1;

const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const Store = get_initializedDefault.Store;
class VibegrationsBuilderRouteStore extends Store {
  getRoutedProjectId(guildId) {
    guildId = undefined;
    if (_null != null) {
      guildId = _null.guildId;
    }
    let projectId = null;
    if (guildId === guildId) {
      projectId = _null.projectId;
    }
    return projectId;
  }
}
const prototype = VibegrationsBuilderRouteStore.prototype;
let obj = {
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    let guildId;
    let messageId;
    ({ guildId, messageId } = channelId);
    let tmp = null;
    if (channelId.channelId === StaticChannelRoute.VIBEGRATIONS) {
      tmp = null;
      if (null != guildId) {
        tmp = null;
        if (null != messageId) {
          tmp = { guildId, projectId: messageId };
          const obj = { guildId, projectId: messageId };
        }
      }
    }
    let guildId1;
    if (tmp != null) {
      guildId1 = tmp.guildId;
    }
    let guildId2;
    if (_null != null) {
      guildId2 = _null.guildId;
    }
    if (guildId1 === guildId2) {
      let projectId;
      if (tmp != null) {
        projectId = tmp.projectId;
      }
      let projectId1;
      if (_null != null) {
        projectId1 = _null.projectId;
      }
      if (projectId === projectId1) {
        return false;
      }
    }
    _null = tmp;
  },
  LOGOUT: function handleLogout() {
    if (null == c1) {
      return false;
    } else {
      c1 = null;
    }
  }
};
const vibegrationsBuilderRouteStore = new VibegrationsBuilderRouteStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsBuilderRouteStore.tsx");

export default vibegrationsBuilderRouteStore;
