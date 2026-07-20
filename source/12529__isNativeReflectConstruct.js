// Module ID: 12529
// Function ID: 96293
// Name: _isNativeReflectConstruct
// Dependencies: [42795008, 33226752, 131072, 4034461696, 4076863513, 4127195184, 2617245744, 2, 4177526800, 2382364720, 3758096391]

// Module 12529 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function init() {
  let closure_9 = {};
  let closure_10 = {};
}
function handleRelationshipChange(relationship) {
  relationship = relationship.relationship;
  const voiceStateForUser = authStore.getVoiceStateForUser(relationship.id);
  let tmp2 = null != voiceStateForUser && null != voiceStateForUser.channelId;
  if (tmp2) {
    tmp2 = processUserInChannel(voiceStateForUser.channelId, relationship.id);
  }
  return tmp2;
}
function processUserInChannel(channelId, id) {
  const set = new Set(closure_9[channelId]);
  const isBlockedResult = closure_7.isBlocked(id);
  if (isBlockedResult) {
    if (!set.has(id)) {
      set.add(id);
      let flag = true;
      let flag2 = true;
    }
    if (0 === set.size) {
      if (flag) {
        delete r2[r4];
      }
      const _Set = Set;
      const set1 = new Set(closure_10[channelId]);
      const isIgnoredResult = closure_7.isIgnored(id);
      if (isIgnoredResult) {
        if (!set1.has(id)) {
          set1.add(id);
          let flag3 = true;
          let flag4 = true;
        }
        if (0 === set1.size) {
          if (flag3) {
            delete r5[r4];
          }
          if (flag4) {
            const result = importDefault(dependencyMap[7]).handleBlockedOrIgnoredUserVoiceChannelJoin(channelId, id);
            const obj3 = importDefault(dependencyMap[7]);
          }
          return flag3;
        }
        if (flag3) {
          closure_10[channelId] = set1;
        }
      }
      flag3 = flag;
      flag4 = flag2;
      if (!isIgnoredResult) {
        flag3 = set1.delete(id);
        flag4 = flag2;
      }
    }
    if (flag) {
      closure_9[channelId] = set;
    }
  }
  flag = false;
  flag2 = false;
  if (!isBlockedResult) {
    flag = set.delete(id);
    flag2 = false;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = {};
let closure_10 = {};
const set = new Set();
let tmp3 = (Store) => {
  class VoiceChannelBlockedUserStore {
    constructor() {
      self = this;
      tmp = closure_2(this, VoiceChannelBlockedUserStore);
      obj = closure_5(VoiceChannelBlockedUserStore);
      tmp2 = closure_4;
      if (closure_12()) {
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
  const importDefault = VoiceChannelBlockedUserStore;
  callback2(VoiceChannelBlockedUserStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7, closure_8);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getBlockedUsersForVoiceChannel",
    value(arg0) {
      let tmp = closure_9[arg0];
      if (null == tmp) {
        tmp = closure_11;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getIgnoredUsersForVoiceChannel",
    value(arg0) {
      let tmp = closure_10[arg0];
      if (null == tmp) {
        tmp = closure_11;
      }
      return tmp;
    }
  };
  items[2] = obj;
  return callback(VoiceChannelBlockedUserStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp3 = new tmp3(importDefault(dependencyMap[9]), {
  CONNECTION_OPEN: init,
  LOGOUT: init,
  OVERLAY_INITIALIZE: function handleOverlayInitialize() {
    init();
    let values = Object.values(authStore.getAllVoiceStates());
    let flag = false;
    let num = 0;
    let flag2 = false;
    if (0 < values.length) {
      do {
        let _Object = Object;
        values = Object.values(values[num]);
        let tmp2 = flag;
        let num2 = 0;
        let tmp3 = flag;
        if (0 < values.length) {
          do {
            let tmp4 = values[num2];
            let tmp5 = tmp2;
            if (null != tmp4.channelId) {
              let tmp6 = closure_14;
              let tmp7 = closure_14(tmp4.channelId, tmp4.userId) || tmp2;
              tmp5 = tmp7;
            }
            num2 = num2 + 1;
            tmp2 = tmp5;
            tmp3 = tmp5;
            let tmp8 = tmp4;
          } while (num2 < values.length);
        }
        num = num + 1;
        flag = tmp3;
        flag2 = tmp3;
      } while (num < values.length);
    }
    return flag2;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    let closure_0 = false;
    const item = voiceStates.forEach((oldChannelId) => {
      if (null != oldChannelId.oldChannelId) {
        if (null != closure_9[oldChannelId.oldChannelId]) {
          if (null != closure_9[oldChannelId.oldChannelId]) {
            obj.delete(oldChannelId.userId);
          }
          let closure_0 = true;
        }
        if (null != closure_10[oldChannelId.oldChannelId]) {
          if (null != closure_10[oldChannelId.oldChannelId]) {
            obj2.delete(oldChannelId.userId);
          }
          closure_0 = true;
        }
      }
      if (null != oldChannelId.channelId) {
        closure_0 = callback(oldChannelId.channelId, oldChannelId.userId) || closure_0;
        const tmp7 = callback(oldChannelId.channelId, oldChannelId.userId) || closure_0;
      }
    });
    return closure_0;
  },
  RELATIONSHIP_ADD: handleRelationshipChange,
  RELATIONSHIP_REMOVE: handleRelationshipChange,
  RELATIONSHIP_UPDATE: handleRelationshipChange
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx");

export default tmp3;
