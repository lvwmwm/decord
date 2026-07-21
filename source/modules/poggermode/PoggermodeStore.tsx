// Module ID: 7068
// Function ID: 56484
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7068 (_isNativeReflectConstruct)
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
  let arg1;
  const iter = secondaryIndexMap.get(getComboId(value));
  const obj = {};
  const merged = Object.assign(iter);
  const merged1 = Object.assign(value);
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
    const Interval = arg1(dependencyMap[11]).Interval;
    const prototype = Interval.prototype;
    decayInterval = new Interval();
  }
  obj["decayInterval"] = decayInterval;
  arg1 = obj;
  const result = secondaryIndexMap.set(getComboId(value), obj);
  if (flag) {
    decayInterval = obj.decayInterval;
    if (null != decayInterval) {
      decayInterval.start(1000, () => {
        const iter = closure_14.get(callback(obj));
        if (null != iter) {
          let tmp2 = obj.multiplier !== iter.multiplier;
          if (tmp2) {
            tmp2 = obj.value !== iter.value;
          }
          if (iter.value > 0) {
            if (!tmp2) {
              let obj = {};
              const merged = Object.assign(iter);
              obj["value"] = iter.value - 1;
              callback2(obj);
              closure_16.emitChange();
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
            callback2(obj);
            closure_16.emitChange();
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
({ ShakeLevel: closure_10, ShakeLocation: closure_11 } = arg1(dependencyMap[8]));
const ComponentActions = arg1(dependencyMap[9]).ComponentActions;
const set = new Set();
const secondaryIndexMap = new arg1(dependencyMap[10]).SecondaryIndexMap((arg0) => {
  const items = [, ];
  ({ userId: arr[0], channelId: arr[1] } = arg0);
  return items;
}, (channelId) => "" + channelId.channelId + "-" + channelId.userId);
const secondaryIndexMap1 = new arg1(dependencyMap[10]).SecondaryIndexMap((combo) => {
  const items = [, , ];
  ({ messageId: arr[0], channelId: arr[1] } = combo);
  items[2] = combo.combo.userId;
  return items;
}, (channelId) => "" + channelId.channelId + "-" + channelId.combo.userId + "-" + channelId.messageId);
let tmp6 = (Store) => {
  class PoggermodeStore {
    constructor() {
      self = this;
      tmp = closure_2(this, PoggermodeStore);
      obj = closure_5(PoggermodeStore);
      tmp2 = closure_4;
      if (closure_17()) {
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
  const arg1 = PoggermodeStore;
  callback2(PoggermodeStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7, closure_9, closure_8);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getComboScore",
    value(userId, channelId) {
      const value = store.get(callback5({ userId, channelId }));
      let num = 0;
      if (null != value) {
        num = PoggermodeStore(closure_1[12]).getComboScore(value);
        const obj2 = PoggermodeStore(closure_1[12]);
      }
      return num;
    }
  };
  items[1] = obj;
  obj = {
    key: "getUserCombo",
    value(userId, channelId) {
      return store.get(callback5({ userId, channelId }));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isComboing",
    value(arg0, arg1) {
      const iter = this.getUserCombo(arg0, arg1);
      let tmp = null != iter;
      if (tmp) {
        tmp = iter.value >= combosRequiredCount.combosRequiredCount;
      }
      if (tmp) {
        tmp = callback4(iter);
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getMessageCombo",
    value(arg0) {
      const value = closure_15.get(arg0);
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
      const values = closure_15.values(arg0);
      return values[values.length - 1];
    }
  };
  items[6] = {
    key: "getUserComboShakeIntensity",
    value(arg0, arg1, arg2, LEVEL_4) {
      const userCombo = this.getUserCombo(arg0, arg1);
      let num = 0;
      if (null != userCombo) {
        num = PoggermodeStore(closure_1[12]).getComboShakeIntensity(userCombo, LEVEL_4) * arg2;
        const obj = PoggermodeStore(closure_1[12]);
      }
      return num;
    }
  };
  return callback(PoggermodeStore, items);
}(importDefault(dependencyMap[14]).Store);
tmp6.displayName = "PoggermodeStore";
tmp6 = new tmp6(importDefault(dependencyMap[15]), {
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
    let arg1;
    if (closure_9.isEnabled()) {
      const id = id.getId();
      arg1 = id;
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
          if (closure_9.screenshakeEnabledLocations[closure_11.MENTION]) {
            if (null != mentions) {
              if (null != mentions.find((id) => id.id === id)) {
                if (null != value) {
                  const comboShakeIntensity = arg1(dependencyMap[12]).getComboShakeIntensity(value, LEVEL_4.LEVEL_4);
                  let num3 = 0.001;
                  if (null != comboShakeIntensity) {
                    num3 = comboShakeIntensity;
                  }
                  let result = num3;
                  const obj2 = arg1(dependencyMap[12]);
                } else {
                  const _Math = Math;
                  result = 4 * Math.random();
                }
                const ComponentDispatch = arg1(dependencyMap[13]).ComponentDispatch;
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
      const tmp3 = shouldTrackMessage;
    } else {
      return false;
    }
  }
});
const obj = {
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
    let arg1;
    if (closure_9.isEnabled()) {
      const id = id.getId();
      arg1 = id;
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
          if (closure_9.screenshakeEnabledLocations[closure_11.MENTION]) {
            if (null != mentions) {
              if (null != mentions.find((id) => id.id === id)) {
                if (null != value) {
                  const comboShakeIntensity = arg1(dependencyMap[12]).getComboShakeIntensity(value, LEVEL_4.LEVEL_4);
                  let num3 = 0.001;
                  if (null != comboShakeIntensity) {
                    num3 = comboShakeIntensity;
                  }
                  let result = num3;
                  const obj2 = arg1(dependencyMap[12]);
                } else {
                  const _Math = Math;
                  result = 4 * Math.random();
                }
                const ComponentDispatch = arg1(dependencyMap[13]).ComponentDispatch;
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
      const tmp3 = shouldTrackMessage;
    } else {
      return false;
    }
  }
};
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/poggermode/PoggermodeStore.tsx");

export default tmp6;
export const isComboing = _isComboing;
export { getComboId };
export { shouldTrackMessage };
