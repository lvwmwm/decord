// Module ID: 12657
// Function ID: 98522
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3767, 4146, 12658, 566, 686, 2]

// Module 12657 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

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
  const set = new Set(table[channelId]);
  const isBlockedResult = closure_7.isBlocked(id);
  if (isBlockedResult) {
    if (!set.has(id)) {
      set.add(id);
      let flag = true;
      let flag2 = true;
    }
    if (0 === set.size) {
      if (flag) {
        delete tmp[tmp2];
      }
      const _Set = Set;
      const set1 = new Set(table2[channelId]);
      const isIgnoredResult = closure_7.isIgnored(id);
      if (isIgnoredResult) {
        if (!set1.has(id)) {
          set1.add(id);
          let flag3 = true;
          let flag4 = true;
        }
        if (0 === set1.size) {
          if (flag3) {
            delete tmp3[tmp2];
          }
          if (flag4) {
            const result = importDefault(12658).handleBlockedOrIgnoredUserVoiceChannelJoin(channelId, id);
            const obj3 = importDefault(12658);
          }
          return flag3;
        }
        if (flag3) {
          table2[channelId] = set1;
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
      table[channelId] = set;
    }
  }
  flag = false;
  flag2 = false;
  if (!isBlockedResult) {
    flag = set.delete(id);
    flag2 = false;
  }
}
let closure_9 = {};
let closure_10 = {};
let set = new Set();
let tmp3 = ((Store) => {
  class VoiceChannelBlockedUserStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, VoiceChannelBlockedUserStore);
      obj = outer1_5(VoiceChannelBlockedUserStore);
      tmp2 = outer1_4;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(VoiceChannelBlockedUserStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_8);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getBlockedUsersForVoiceChannel",
    value(arg0) {
      let tmp = outer1_9[arg0];
      if (null == tmp) {
        tmp = outer1_11;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getIgnoredUsersForVoiceChannel",
    value(arg0) {
      let tmp = outer1_10[arg0];
      if (null == tmp) {
        tmp = outer1_11;
      }
      return tmp;
    }
  };
  items[2] = obj;
  return callback(VoiceChannelBlockedUserStore, items);
})(require("initialize").Store);
tmp3 = new tmp3(require("dispatcher"), {
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
              let tmp6 = processUserInChannel;
              let tmp7 = processUserInChannel(tmp4.channelId, tmp4.userId) || tmp2;
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
    let c0 = false;
    const item = voiceStates.forEach((oldChannelId) => {
      if (null != oldChannelId.oldChannelId) {
        if (null != outer1_9[oldChannelId.oldChannelId]) {
          if (null != outer1_9[oldChannelId.oldChannelId]) {
            obj.delete(oldChannelId.userId);
          }
          let c0 = true;
        }
        if (null != outer1_10[oldChannelId.oldChannelId]) {
          if (null != outer1_10[oldChannelId.oldChannelId]) {
            obj2.delete(oldChannelId.userId);
          }
          c0 = true;
        }
      }
      if (null != oldChannelId.channelId) {
        c0 = outer1_14(oldChannelId.channelId, oldChannelId.userId) || c0;
        const tmp7 = outer1_14(oldChannelId.channelId, oldChannelId.userId) || c0;
      }
    });
    return c0;
  },
  RELATIONSHIP_ADD: handleRelationshipChange,
  RELATIONSHIP_REMOVE: handleRelationshipChange,
  RELATIONSHIP_UPDATE: handleRelationshipChange
});
let result = set.fileFinishedImporting("modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx");

export default tmp3;
