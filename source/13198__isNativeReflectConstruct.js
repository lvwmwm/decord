// Module ID: 13198
// Function ID: 100055
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13198 (_isNativeReflectConstruct)
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
let closure_6 = importDefault(dependencyMap[0]);
let closure_7 = importDefault(dependencyMap[1]);
let closure_8 = importDefault(dependencyMap[2]);
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]);
let closure_12 = importDefault(dependencyMap[6]);
let closure_13 = importDefault(dependencyMap[7]);
let closure_14 = importDefault(dependencyMap[8]);
let closure_15 = importDefault(dependencyMap[9]);
let closure_16 = importDefault(dependencyMap[10]);
const AppStates = arg1(dependencyMap[11]).AppStates;
let tmp2 = (Store) => {
  class ShareStore {
    constructor() {
      self = this;
      tmp = closure_6(this, ShareStore);
      obj = closure_9(ShareStore);
      tmp2 = closure_8;
      if (closure_18()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_9;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_9(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ShareStore;
  callback2(ShareStore, Store);
  const items = [
    {
      key: "initialize",
      value() {
        this.waitFor(closure_11, closure_12, closure_13, closure_14, closure_15, closure_16);
      }
    }
  ];
  return callback(ShareStore, items);
}(importDefault(dependencyMap[16]).Store);
tmp2.displayName = "ShareStore";
tmp2 = new tmp2(importDefault(dependencyMap[17]), {
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    ({ guildId: closure_3, channelId: closure_4 } = arg0);
    return false;
  },
  LOGOUT: function handleLogout() {
    importDefault(dependencyMap[13]).setSelectedChannel(null, null);
    const obj = importDefault(dependencyMap[13]);
    const obj2 = importDefault(dependencyMap[13]);
    const result = obj2.setAuthenticationToken(null, importDefault(dependencyMap[15]).getSuperPropertiesBase64());
    let closure_5 = null;
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
      if (null != closure_4) {
        const guild = guild.getGuild(closure_3);
        let json = null;
        if (null != guild) {
          const _JSON = JSON;
          json = JSON.stringify(guild);
        }
        const channel = channel.getChannel(channelId.getChannelId());
        let json1 = null;
        if (null != channel) {
          let obj = {};
          const merged = Object.assign(channel.toJS());
          let recipients = channel.recipients;
          if (null == recipients) {
            recipients = [];
          }
          const mapped = recipients.map(getUser.getUser);
          obj["recipients"] = mapped.filter(arg1(dependencyMap[12]).isNotNullish);
          json1 = JSON.stringify(obj);
        }
        importDefault(dependencyMap[13]).setSelectedChannel(json1, json);
        closure_3 = null;
        closure_4 = null;
        const obj3 = importDefault(dependencyMap[13]);
      }
    }
    if (null != closure_5) {
      obj = { client_app_state: state };
      const result = arg1(dependencyMap[14]).extendSuperProperties(obj);
      const obj4 = arg1(dependencyMap[14]);
      const obj6 = importDefault(dependencyMap[13]);
      const result1 = obj6.setAuthenticationToken(closure_5, importDefault(dependencyMap[15]).getSuperPropertiesBase64());
      if (state === AppStates.INACTIVE) {
        closure_5 = null;
      }
      const obj7 = importDefault(dependencyMap[15]);
    }
    return false;
  }
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("stores/native/ShareStore.tsx");

export default tmp2;
