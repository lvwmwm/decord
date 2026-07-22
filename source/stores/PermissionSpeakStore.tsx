// Module ID: 12562
// Function ID: 96572
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12562 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_11 = false;
let closure_12 = true;
let closure_13 = false;
let tmp2 = (Store) => {
  class PermissionSpeakStore {
    constructor() {
      self = this;
      tmp = closure_2(this, PermissionSpeakStore);
      obj = closure_5(PermissionSpeakStore);
      tmp2 = closure_4;
      if (closure_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = PermissionSpeakStore;
  callback2(PermissionSpeakStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7, closure_8);
      const Storage = PermissionSpeakStore(closure_1[7]).Storage;
      const tmp2 = Storage.get("hideSuppressWarning") || tmp2;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "isAFKChannel",
    value() {
      const channel = store.getChannel(closure_10);
      if (null == channel) {
        return false;
      } else {
        const guild = guild.getGuild(channel.getGuildId());
        return null != guild && channel.id === guild.afkChannelId;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "shouldShowWarning",
    value() {
      const channel = store.getChannel(closure_10);
      return !(null != channel && channel.isGuildStageVoice() || closure_12);
    }
  };
  items[2] = obj;
  return callback(PermissionSpeakStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp2.displayName = "PermissionSpeakStore";
tmp2 = new tmp2(importDefault(dependencyMap[9]), {
  CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    let closure_11 = false;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let closure_9 = null;
    let closure_10 = null;
    let closure_12 = true;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, sessionId) => {
      let flag = arg0;
      if (closure_9 === sessionId.sessionId) {
        if (suppress !== sessionId.suppress) {
          const suppress = sessionId.suppress;
          let closure_12 = !suppress;
        }
        if (channelId !== sessionId.channelId) {
          const channelId = sessionId.channelId;
          closure_12 = !suppress;
        }
        let tmp4 = closure_13;
        if (!closure_13) {
          tmp4 = null == sessionId.channelId;
        }
        flag = true;
        if (tmp4) {
          closure_12 = true;
          flag = true;
        }
      }
      return flag;
    }, false);
  },
  PERMISSION_CLEAR_SUPPRESS_WARNING: function handleClearWarning(forever) {
    let closure_12 = true;
    if (forever.forever) {
      let closure_13 = true;
      const Storage = arg1(dependencyMap[7]).Storage;
      const result = Storage.set("hideSuppressWarning", closure_13);
    }
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("stores/PermissionSpeakStore.tsx");

export default tmp2;
