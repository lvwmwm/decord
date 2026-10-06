// Module ID: 13889
// Function ID: 13890
// Name: ShareStore
// Dependencies: [502, 2051, 2073, 2102, 4657, 1378, 1086, 1376, 7814, 1261, 1253, 504, 585, 2]

// Module 13889 (ShareStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1261 */;
import GlobalUtils from "GlobalUtils" /* 1376 */;
import react_nativeDefault from "react-native" /* 7814 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2073 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2102 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4657 */;
import UserStore from "UserStore" /* 1378 */;
import size from "module_2" /* 2 */;

let c3, c4, c5;

function handleTokenUpdated(token) {
  token = token.token;
  return false;
}
const AppStates = Constants.AppStates;
const Store = get_initializedDefault.Store;
class ShareStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, ChannelStore, GuildStore, SelectedChannelStore, SelectedGuildStore, UserStore);
  }
}
const prototype = ShareStore.prototype;
ShareStore.displayName = "ShareStore";
let obj = {
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    ({ guildId: c3, channelId: c4 } = arg0);
    return false;
  },
  LOGOUT: function handleLogout() {
    const obj = react_nativeDefault;
    obj.setSelectedChannel(null, null);
    const setAuthenticationToken = react_nativeDefault.setAuthenticationToken;
    react_nativeDefault;
    const obj2 = AnalyticsUtilsDefault;
    const result = setAuthenticationToken(null, obj2.getSuperPropertiesBase64());
    c5 = null;
    return false;
  },
  REGISTER_SUCCESS: handleTokenUpdated,
  LOGIN_SUCCESS: handleTokenUpdated,
  UPDATE_TOKEN: handleTokenUpdated,
  START_SESSION: function handleStartSession() {
    const token = AuthenticationStore.getToken();
    return false;
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    let mapped;
    state = state.state;
    const tmp = AppStates;
    if (state === AppStates.INACTIVE) {
      if (null != c4) {
        const guild = GuildStore.getGuild(c3);
        let json = null;
        if (null != guild) {
          const _JSON = JSON;
          json = JSON.stringify(guild);
        }
        const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
        let json1 = null;
        if (null != channel) {
          const _JSON2 = JSON;
          const obj = { recipients: mapped.filter(GlobalUtils.isNotNullish) };
          const merged = Object.assign(channel.toJS());
          let recipients = channel.recipients;
          if (recipients == null) {
            recipients = [];
          }
          mapped = recipients.map(UserStore.getUser);
          json1 = stringify(obj);
        }
        const obj3 = react_nativeDefault;
        obj3.setSelectedChannel(json1, json);
        c3 = null;
        c4 = null;
      }
    }
    if (null != c5) {
      const obj2 = { client_app_state: state };
      const obj4 = discord_common_AnalyticsUtils;
      const result = obj4.extendSuperProperties(obj2);
      const setAuthenticationToken = react_nativeDefault.setAuthenticationToken;
      react_nativeDefault;
      const obj6 = AnalyticsUtilsDefault;
      const result1 = setAuthenticationToken(c5, obj6.getSuperPropertiesBase64());
      if (state === tmp.INACTIVE) {
        c5 = null;
      }
    }
    return false;
  }
};
const shareStore = new ShareStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/native/ShareStore.tsx");

export default shareStore;
