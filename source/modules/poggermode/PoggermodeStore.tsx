// Module ID: 7072
// Function ID: 56538
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 1906, 6919, 6920, 653, 3754, 4015, 7073, 1207, 566, 686, 2]

// Module 7072 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import dispatcher from "dispatcher";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ConfettiLocation from "ConfettiLocation";
import { ComponentActions } from "ME";
import set from "_possibleConstructorReturn";

let closure_10;
let closure_11;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _isComboing(value) {
  let tmp = null != value;
  if (tmp) {
    let tmp2 = value.value > 0;
    if (!tmp2) {
      let multiplier;
      if (null != value) {
        multiplier = value.multiplier;
      }
      tmp2 = multiplier > 1;
    }
    tmp = tmp2;
  }
  return tmp;
}
function getComboId(userId) {
  return "" + userId.userId + "-" + userId.channelId;
}
function updateCombo(value) {
  let flag;
  flag = true;
  let obj;
  let iter = secondaryIndexMap.get(getComboId(value));
  obj = {};
  let merged = Object.assign(iter);
  let merged1 = Object.assign(value);
  value = value.value;
  if (null == value) {
    value = undefined;
    if (null != iter) {
      value = iter.value;
    }
  }
  let num = 0;
  if (null != value) {
    num = value;
  }
  obj["value"] = num;
  let multiplier = value.multiplier;
  if (null == multiplier) {
    multiplier = undefined;
    if (null != iter) {
      multiplier = iter.multiplier;
    }
  }
  let num2 = 1;
  if (null != multiplier) {
    num2 = multiplier;
  }
  obj["multiplier"] = Math.min(num2, 7);
  let decayInterval;
  if (null != iter) {
    decayInterval = iter.decayInterval;
  }
  if (null == decayInterval) {
    const Interval = obj(4015).Interval;
    const prototype = Interval.prototype;
    decayInterval = new Interval();
  }
  obj["decayInterval"] = decayInterval;
  const result = secondaryIndexMap.set(getComboId(value), obj);
  if (flag) {
    decayInterval = obj.decayInterval;
    if (null != decayInterval) {
      decayInterval.start(1000, () => {
        const iter = outer1_14.get(outer1_19(obj));
        if (null != iter) {
          let tmp2 = obj.multiplier !== iter.multiplier;
          if (tmp2) {
            tmp2 = obj.value !== iter.value;
          }
          if (iter.value > 0) {
            if (!tmp2) {
              obj = {};
              const merged = Object.assign(iter);
              obj["value"] = iter.value - 1;
              outer1_20(obj);
              outer1_16.emitChange();
            }
          }
          const decayInterval = iter.decayInterval;
          if (null != decayInterval) {
            decayInterval.stop();
          }
          if (iter.value <= 0) {
            obj = {};
            const merged1 = Object.assign(iter);
            obj["value"] = 0;
            obj["multiplier"] = 1;
            outer1_20(obj);
            outer1_16.emitChange();
          }
        }
      });
    }
  }
}
function shouldTrackMessage(arg0, arg1, arg2, has) {
  let tmp = arg0 === arg1;
  if (tmp) {
    let flag = null != arg2 && !has.has(arg2);
    if (flag) {
      has.add(arg2);
      flag = true;
    }
    tmp = flag;
  }
  return tmp;
}
({ ShakeLevel: closure_10, ShakeLocation: closure_11 } = ConfettiLocation);
let set = new Set();
const secondaryIndexMap = new require("sortedInsert").SecondaryIndexMap((arg0) => {
  const items = [, ];
  ({ userId: arr[0], channelId: arr[1] } = arg0);
  return items;
}, (channelId) => "" + channelId.channelId + "-" + channelId.userId);
const secondaryIndexMap1 = new require("sortedInsert").SecondaryIndexMap((combo) => {
  const items = [, , ];
  ({ messageId: arr[0], channelId: arr[1] } = combo);
  items[2] = combo.combo.userId;
  return items;
}, (channelId) => "" + channelId.channelId + "-" + channelId.combo.userId + "-" + channelId.messageId);
let tmp6 = ((Store) => {
  class PoggermodeStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, PoggermodeStore);
      obj = outer1_5(PoggermodeStore);
      tmp2 = outer1_4;
      if (outer1_17()) {
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
  callback2(PoggermodeStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_9, outer1_8);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getComboScore",
    value(userId, channelId) {
      const value = outer1_14.get(outer1_19({ userId, channelId }));
      let num = 0;
      if (null != value) {
        num = PoggermodeStore(outer1_1[12]).getComboScore(value);
        const obj2 = PoggermodeStore(outer1_1[12]);
      }
      return num;
    }
  };
  items[1] = obj;
  obj = {
    key: "getUserCombo",
    value(userId, channelId) {
      return outer1_14.get(outer1_19({ userId, channelId }));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isComboing",
    value(arg0, arg1) {
      const iter = this.getUserCombo(arg0, arg1);
      let tmp = null != iter;
      if (tmp) {
        tmp = iter.value >= outer1_9.combosRequiredCount;
      }
      if (tmp) {
        tmp = outer1_18(iter);
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getMessageCombo",
    value(arg0) {
      const value = outer1_15.get(arg0);
      let combo;
      if (null != value) {
        combo = value.combo;
      }
      let tmp3;
      if (null != combo) {
        tmp3 = combo;
      }
      return tmp3;
    }
  };
  items[5] = {
    key: "getMostRecentMessageCombo",
    value(arg0) {
      const values = outer1_15.values(arg0);
      return values[values.length - 1];
    }
  };
  items[6] = {
    key: "getUserComboShakeIntensity",
    value(arg0, arg1, arg2, LEVEL_4) {
      const userCombo = this.getUserCombo(arg0, arg1);
      let num = 0;
      if (null != userCombo) {
        num = PoggermodeStore(outer1_1[12]).getComboShakeIntensity(userCombo, LEVEL_4) * arg2;
        const obj = PoggermodeStore(outer1_1[12]);
      }
      return num;
    }
  };
  return callback(PoggermodeStore, items);
})(require("initialize").Store);
tmp6.displayName = "PoggermodeStore";
tmp6 = new tmp6(require("dispatcher"), {
  POGGERMODE_UPDATE_COMBO: function handleComboing(arg0) {
    const obj = Object.create(null);
    obj.type = 0;
    const merged = Object.assign(arg0, obj);
    if (closure_9.isEnabled()) {
      updateCombo(merged);
    } else {
      return false;
    }
  },
  POGGERMODE_UPDATE_MESSAGE_COMBO: function handleUpdateMessageCombo(comboMessage) {
    comboMessage = comboMessage.comboMessage;
    if (closure_9.isEnabled()) {
      const result = secondaryIndexMap1.set(comboMessage.messageId, comboMessage);
    } else {
      return false;
    }
  },
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    let author;
    let mentions;
    let nonce;
    ({ mentions, author, nonce } = message.message);
    let id;
    if (closure_9.isEnabled()) {
      id = id.getId();
      let id1;
      if (null != author) {
        id1 = author.id;
      }
      if (tmp3(id1, id, nonce, set)) {
        let obj = {};
        let id2;
        if (null != author) {
          id2 = author.id;
        }
        let str = "???";
        if (null != id2) {
          str = id2;
        }
        obj.userId = str;
        obj.channelId = message.channelId;
        const value = secondaryIndexMap.get(getComboId(obj));
        if (closure_9.screenshakeEnabled) {
          if (closure_9.screenshakeEnabledLocations[constants.MENTION]) {
            if (null != mentions) {
              if (null != mentions.find((id) => id.id === id)) {
                if (null != value) {
                  const comboShakeIntensity = id(7073).getComboShakeIntensity(value, LEVEL_4.LEVEL_4);
                  let num3 = 0.001;
                  if (null != comboShakeIntensity) {
                    num3 = comboShakeIntensity;
                  }
                  let result = num3;
                  const obj2 = id(7073);
                } else {
                  const _Math = Math;
                  result = 4 * Math.random();
                }
                const ComponentDispatch = id(1207).ComponentDispatch;
                obj = { duration: 1000, intensity: result };
                ComponentDispatch.dispatch(ComponentActions.SHAKE_APP, obj);
                return true;
              }
            }
          }
        }
        return false;
      } else {
        return false;
      }
      tmp3 = shouldTrackMessage;
    } else {
      return false;
    }
  }
});
let closure_16 = tmp6;
let result = set.fileFinishedImporting("modules/poggermode/PoggermodeStore.tsx");

export default tmp6;
export const isComboing = _isComboing;
export { getComboId };
export { shouldTrackMessage };
