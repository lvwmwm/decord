// Module ID: 13381
// Function ID: 102616
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 1348, 1838, 1906, 3947, 1849, 653, 1327, 8377, 480, 675, 566, 686, 2]

// Module 13381 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import expandLocation from "expandLocation";
import dispatcher from "dispatcher";
import set from "set";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_createForOfIteratorHelperLoose";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import { AppStates } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleTokenUpdated(token) {
  token = token.token;
  return false;
}
let tmp2 = ((Store) => {
  class ShareStore {
    constructor() {
      self = this;
      tmp = outer1_6(this, ShareStore);
      obj = outer1_9(ShareStore);
      tmp2 = outer1_8;
      if (outer1_18()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_9;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_9(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ShareStore, Store);
  const items = [
    {
      key: "initialize",
      value() {
        this.waitFor(outer1_11, outer1_12, outer1_13, outer1_14, outer1_15, outer1_16);
      }
    }
  ];
  return callback(ShareStore, items);
})(require("initialize").Store);
tmp2.displayName = "ShareStore";
tmp2 = new tmp2(require("dispatcher"), {
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let closure_3;
    let closure_4;
    ({ guildId: closure_3, channelId: closure_4 } = arg0);
    return false;
  },
  LOGOUT: function handleLogout() {
    importDefault(8377).setSelectedChannel(null, null);
    const obj = importDefault(8377);
    const obj2 = importDefault(8377);
    const result = obj2.setAuthenticationToken(null, importDefault(675).getSuperPropertiesBase64());
    let c5 = null;
    return false;
  },
  REGISTER_SUCCESS: handleTokenUpdated,
  LOGIN_SUCCESS: handleTokenUpdated,
  UPDATE_TOKEN: handleTokenUpdated,
  START_SESSION: function handleStartSession() {
    const token2 = token.getToken();
    return false;
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    state = state.state;
    if (state === AppStates.INACTIVE) {
      if (null != c4) {
        guild = guild.getGuild(c3);
        let json = null;
        if (null != guild) {
          const _JSON = JSON;
          json = JSON.stringify(guild);
        }
        channel = channel.getChannel(channelId.getChannelId());
        let json1 = null;
        if (null != channel) {
          let obj = {};
          const merged = Object.assign(channel.toJS());
          let recipients = channel.recipients;
          if (null == recipients) {
            recipients = [];
          }
          const mapped = recipients.map(getUser.getUser);
          obj["recipients"] = mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
          json1 = JSON.stringify(obj);
        }
        importDefault(8377).setSelectedChannel(json1, json);
        c3 = null;
        c4 = null;
        const obj3 = importDefault(8377);
      }
    }
    if (null != c5) {
      obj = { client_app_state: state };
      const result = require(480) /* isThrottled */.extendSuperProperties(obj);
      const obj4 = require(480) /* isThrottled */;
      const obj6 = importDefault(8377);
      const result1 = obj6.setAuthenticationToken(c5, importDefault(675).getSuperPropertiesBase64());
      if (state === AppStates.INACTIVE) {
        c5 = null;
      }
      const obj7 = importDefault(675);
    }
    return false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/native/ShareStore.tsx");

export default tmp2;
