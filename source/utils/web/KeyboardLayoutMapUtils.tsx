// Module ID: 12706
// Function ID: 97496
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: __DEV_overrideLayoutMapKey, getKeyboardEventShapeFromAny, getKeyboardEventShapeFromKey, getKeyboardEventShapeFromKeycode, getLayoutMap, resetKeyboardMapper

// Module 12706 (_isNativeReflectConstruct)
let LinuxKeyToCode;
let MacosKeyToCode;
let WindowsKeyToCode;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function normalizeKey(key) {
  let toLocaleLowerCaseResult = key;
  if (null != key) {
    toLocaleLowerCaseResult = key.toLocaleLowerCase();
  }
  return toLocaleLowerCaseResult;
}
function syncKeyboardLayoutMap() {
  return _syncKeyboardLayoutMap(...arguments);
}
function _syncKeyboardLayoutMap() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _syncKeyboardLayoutMap = obj;
  return obj(...arguments);
}
function getKeyboardLayoutMap() {
  return tmp7;
}
function normalizeKeyMap(arg0) {
  const set = new Set();
  const obj = {};
  const entries = Object.entries(arg0);
  let num = 0;
  if (0 < entries.length) {
    while (true) {
      let tmp = callback2;
      let tmp2 = callback2(entries[num], 2);
      let tmp3 = tmp2[1];
      let tmp4 = normalizeKey;
      let tmp5 = normalizeKey(tmp2[0]);
      if (set.has(tmp5)) {
        if (null != obj[tmp5]) {
          if (obj[tmp5] !== tmp3) {
            let tmp7 = importDefaultResult;
            let _HermesInternal = HermesInternal;
            let errorResult = importDefaultResult.error("Seperate keyCode mappings found for: " + tmp5);
            num = num + 1;
            if (num >= entries.length) {
              break;
            }
          }
        }
      }
      let addResult = set.add(tmp5);
      obj[tmp5] = tmp3;
    }
  }
  return obj;
}
function getNormalizedEvent(keyCode) {
  const obj = { keyCode: keyCode.keyCode };
  let tmp;
  if (null != keyCode.key) {
    tmp = normalizeKey(keyCode.key);
  }
  obj.key = tmp;
  obj.code = keyCode.code;
  return obj;
}
function initializeKeyboardMapper() {
  if (null == closure_18) {
    const promise = new Promise(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function() {
        return callback(...arguments);
      };
    }());
    closure_18 = promise;
  }
  return closure_18;
}
function getKeyboardMapper() {
  if (null == closure_17) {
    initializeKeyboardMapper();
    let tmp = null;
  } else {
    tmp = closure_17;
  }
  return tmp;
}
function _resetKeyboardMapper() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _resetKeyboardMapper = obj;
  return obj(...arguments);
}
function reverseLookupCodeFromKey(key) {
  let tmp;
  if (null != key) {
    tmp = normalizeKey(key);
  }
  if (null != tmp) {
    const obj = getKeyboardMapper();
    let result;
    if (null != obj) {
      result = obj.findCodeFromKeyboardLayoutMap(tmp);
    }
    let tmp5;
    if (null != result) {
      tmp5 = result;
    }
    return tmp5;
  }
}
function getExactKeyboardEventMatchFromAny(keyCode) {
  const tmp = getNormalizedEvent(keyCode);
  let tmp2 = null;
  if (null != tmp.key) {
    const obj = getKeyboardMapper();
    let result;
    if (null != obj) {
      result = obj.findExactKeyboardEventMatch(tmp.key, tmp.code, tmp.keyCode);
    }
    tmp2 = null;
    if (null != result) {
      tmp2 = result;
    }
  }
  return tmp2;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
({ LinuxKeyToCode, MacosKeyToCode, WindowsKeyToCode } = arg1(dependencyMap[8]));
let importDefaultResult = importDefault(dependencyMap[9]);
importDefaultResult = new importDefaultResult("KeyboardLayoutMapUtils");
const tmp2 = arg1(dependencyMap[8]);
if (!obj.isLinux()) {
  if (!obj2.isMac()) {
    if (!obj3.isWindows()) {
      WindowsKeyToCode = importDefault(dependencyMap[11]).codes;
    }
    MacosKeyToCode = WindowsKeyToCode;
    const obj3 = arg1(dependencyMap[10]);
  }
  LinuxKeyToCode = MacosKeyToCode;
  const obj2 = arg1(dependencyMap[10]);
}
const obj = arg1(dependencyMap[10]);
const frozen = Object.freeze({ MIN_SWIPE_VELOCITY: null, switch: "928ec3b0cfa6ddcb7b852c71960488c7", UMWBZr: "Share", elevation: "png", friendIcon: 12, _monthsRegex: 16, marginLeft: 8, ExclusiveGesture: true, EMPTY_SOUND_LIST: "/assets/modules/contact_sync/native/images", display: 40, CONNECTIONS_CALLBACK_ERROR: 40, FM: null, EMOJI_REACTIONS_ON_MESSAGES: "1d68443a64aaff8d1d20c2355b47322a", paddingVertical: "cta", GiftCodeModalStates: "png", crystal_ball: 24, native_build_number: 128, shouldInitialScroll: 96, stageInfoTopic: null, fontSize: "center", getIsActivitiesEnabledForCurrentPlatform: 1, EMOJI_REACTIONS_ON_MESSAGES: "space-between", paddingBottom: null, nodeName: "stretch", GuildEventDescription: 80, IMPERSONATE_UPDATE: 80, afterMs: "center", Č: null, accessibilityDismiss: "row", channelInfo: "space-between", unstable_shouldYield: 8, GemLeftUpwards3dIllustration: 16, GiftingTier5SmallBadge: "underline", ElYQFS: null, smiling_imp: 1, _cachedKeyLayoutMapEntries: "native_modal", channelInfo: "one_time_login_native_modal", inspectedExpressionPosition: "native_app", hasInteracted: "native_modal", activeCategoryIndex: "missing_token", searchPlaceholder: "No token provided", bottomPosition: "native_modal", analyticsId: "one_time_login", completeRoot: "native_modal", fetching: "api_error", GameControllerIcon: true, NEW_USER_INTENT_START: "/assets/images/native", fontWeight: 120 });
let tmp7 = () => {
  class DiscordKeyboardLayoutMap {
    constructor() {
      tmp = arg0;
      self = this;
      if (arg0 === undefined) {
        tmp = closure_12;
      }
      tmp2 = closure_7(self, DiscordKeyboardLayoutMap);
      entries = Object.entries(tmp);
      map = new Map(entries.map((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp, callback(tmp2)];
        return items;
      }));
      self.map = map;
      return;
    }
  }
  const arg1 = DiscordKeyboardLayoutMap;
  let obj = {
    key: "get",
    value(arg0) {
      return this.map.get(arg0);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "has",
    value(arg0) {
      return this.map.has(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "keys",
    value() {
      return this.map.keys();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "values",
    value() {
      return this.map.values();
    }
  };
  items[4] = {
    key: "entries",
    value() {
      return this.map.entries();
    }
  };
  items[5] = {
    key: "forEach",
    value(arg0, arg1) {
      return this.map.forEach(arg0, arg1);
    }
  };
  items[6] = {
    key: "size",
    get() {
      return this.map.size;
    }
  };
  items[7] = {
    key: "_set",
    value(arg0, arg1) {
      const result = this.map.set(arg0, arg1);
    }
  };
  return callback4(DiscordKeyboardLayoutMap, items);
}();
tmp7 = new tmp7();
let closure_15 = "keyboard-layout-map";
let closure_16 = (arg0) => {
  class KeyboardMapper {
    constructor() {
      self = this;
      tmp = closure_7(this, KeyboardMapper);
      obj = closure_3(KeyboardMapper);
      tmp2 = closure_2;
      if (closure_19()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = KeyboardMapper;
  callback(KeyboardMapper, arg0);
  let obj = {
    key: "getKeyString",
    value(arg0, arg1) {
      const KeyboardMapper = this;
      let keyCodeMapItem = this.getKeyCodeMapItem(arg0);
      if (0 === keyCodeMapItem.length) {
        const cachedKeyMapEntries = this.cachedKeyMapEntries;
        const found = cachedKeyMapEntries.filter((arg0) => {
          let tmp;
          [, tmp] = arg0;
          return tmp == tmp;
        });
        keyCodeMapItem = found.map((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          const obj = { key: tmp, keyCode: tmp2 };
          if (null != arg1) {
            let result = arg1;
          } else {
            result = self.findCodeFromKeyboardLayoutMap(tmp);
          }
          obj.code = result;
          return obj;
        });
      }
      const found1 = keyCodeMapItem.find((keyCode) => {
        let tmp2 = tmp;
        if (null != arg1) {
          let tmp3 = tmp;
          if (tmp) {
            tmp3 = keyCode.code === arg1;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      });
      let key;
      if (null != found1) {
        key = found1.key;
      }
      return key;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "findExactKeyboardEventMatch",
    value(arg0, arg1, arg2) {
      let tmp = arg1;
      const self = this;
      let KeyboardMapper = arg1;
      const tmp2 = callback5(arg0);
      if (null == arg1) {
        const result = self.findCodeFromKeyboardLayoutMap(tmp2);
        KeyboardMapper = result;
        tmp = result;
      }
      if (null != arg2) {
        if (null != self.keyCodeMap[arg2]) {
          const found = arr.find((key) => {
            let tmp = callback(key.key) === tmp2;
            if (tmp) {
              tmp = key.code === result;
              const tmp2 = result;
            }
            return tmp;
          });
          if (null != found) {
            return found;
          }
        }
      }
      if (null != arg2) {
        if (null != tmp) {
          const cachedAllEvents = self.cachedAllEvents;
          return cachedAllEvents.find((keyCode) => {
            let tmp = keyCode.keyCode === arg2;
            if (tmp) {
              tmp = callback(keyCode.key) === tmp2;
            }
            if (tmp) {
              tmp = tmp2;
            }
            return tmp;
          });
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getWeightedPossibleKeyStringMatches",
    value(arg0, arg1, arg2) {
      const KeyboardMapper = arg0;
      const cachedAllEvents = this.cachedAllEvents;
      const found = cachedAllEvents.filter((key) => {
        let tmp3 = null == arg2;
        const tmp = callback(key.key);
        if (!tmp3) {
          tmp3 = key.keyCode === arg2;
        }
        let tmp5 = null == arg1;
        if (!tmp5) {
          tmp5 = key.code === arg1;
        }
        if (tmp3) {
          tmp3 = tmp2;
        }
        if (tmp3) {
          tmp3 = tmp5;
        }
        return tmp3;
      });
      return found.sort((key, key) => {
        function calculateScore(key) {
          let num = 0;
          if (tmp === callback(closure_0)) {
            num = 0.5;
          }
          let tmp2 = null != closure_1;
          if (tmp2) {
            tmp2 = key.code === closure_1;
          }
          let sum = num;
          if (tmp2) {
            sum = num + 0.3;
          }
          let tmp5 = null != closure_2;
          if (tmp5) {
            tmp5 = key.keyCode === closure_2;
          }
          let sum1 = sum;
          if (tmp5) {
            sum1 = sum + 0.2;
          }
          return sum1;
        }
        return calculateScore(key) - calculateScore(key);
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "findKeyboardEventByKey",
    value(arg0, arg1, arg2) {
      let tmp = arg1;
      const self = this;
      let KeyboardMapper = arg1;
      const tmp2 = callback5(arg0);
      if (null == arg1) {
        const result = self.findCodeFromKeyboardLayoutMap(tmp2);
        KeyboardMapper = result;
        tmp = result;
      }
      if (null != arg2) {
        if (null != self.keyCodeMap[arg2]) {
          const found = arr.find((key) => {
            let tmp = callback(key.key) === tmp2;
            if (tmp) {
              tmp = key.code === result;
              const tmp2 = result;
            }
            return tmp;
          });
          if (null != found) {
            return found;
          }
        }
      }
      return callback2(self.getWeightedPossibleKeyStringMatches(arg0, tmp, arg2), 1)[0];
    }
  };
  items[4] = {
    key: "findKeyboardEventByKeyCode",
    value(arg0, arg1) {
      const self = this;
      const KeyboardMapper = arg0;
      let keyString = this.getKeyString(arg0, arg1);
      if (tmp2) {
        const layoutMap = self.getLayoutMap();
        keyString = layoutMap.get(arg1);
      }
      if (null == keyString) {
        const keyCodeMapItem = self.getKeyCodeMapItem(arg0);
        const found = keyCodeMapItem.find((keyCode) => {
          let tmp2 = tmp;
          if (null != arg1) {
            let tmp3 = tmp;
            if (tmp) {
              tmp3 = keyCode.code === arg1;
            }
            tmp2 = tmp3;
          }
          return tmp2;
        });
        let key;
        if (null != found) {
          key = found.key;
        }
        keyString = key;
      }
      if (null == keyString) {
        let defaultKeyboardEventShape = self.getDefaultKeyboardEventShape(undefined, arg0, arg1);
      } else {
        defaultKeyboardEventShape = self.findKeyboardEventByKey(keyString, arg1, arg0);
      }
      return defaultKeyboardEventShape;
    }
  };
  items[5] = {
    key: "getDefaultKeyboardEventShape",
    value(arg0, keyCode) {
      let result = arg2;
      const self = this;
      const KeyboardMapper = keyCode;
      let tmp2;
      if (null != arg0) {
        tmp2 = callback5(arg0);
      }
      if (null != tmp2) {
        if (null != self.keyMap[tmp2]) {
          let obj = { keyCode: tmp8, key: tmp2 };
          if (null == result) {
            result = self.findCodeFromKeyboardLayoutMap(tmp2);
          }
          obj.code = result;
          return closure_25(obj);
        }
      } else if (null != keyCode) {
        const cachedKeyMapEntries = self.cachedKeyMapEntries;
        const found = cachedKeyMapEntries.find((arg0) => {
          let tmp;
          [, tmp] = arg0;
          return tmp === arg1;
        });
        let first;
        if (null != found) {
          first = found[0];
        }
        if (null != first) {
          obj = { keyCode, key: first };
          let result1 = result;
          if (null == result) {
            result1 = self.findCodeFromKeyboardLayoutMap(first);
          }
          obj.code = result1;
          return closure_25(obj);
        }
      }
    }
  };
  return callback4(KeyboardMapper, items);
}(() => {
  class BaseKeyboardMapper {
    constructor() {
      obj = arg0;
      self = this;
      if (arg0 === undefined) {
        obj = {};
      }
      tmp = closure_7(self, BaseKeyboardMapper);
      self._internalKeyLayoutMap = null;
      self._cachedKeyCodeMapEntries = [];
      self._cachedKeyMapEntries = [];
      self._cachedKeyLayoutMapEntries = [];
      self._cachedAllEvents = [];
      self._defaultKeyMap = obj;
      Storage = BaseKeyboardMapper(closure_1[12]).Storage;
      value = Storage.get(closure_15);
      tmp3 = null;
      if (null != value) {
        tmp3 = value;
      }
      if (null == tmp3) {
        tmp4 = closure_24;
        obj = {};
        tmp5 = obj;
        tmp6 = obj;
        merged = Object.assign(obj);
        tmp3 = closure_24(obj);
      }
      self.keyMap = tmp3;
      result = self._initializeInternalLayoutMap();
      self.keyCodeMap = self._buildKeyCodeMapFromKeyMap();
      updateCachesResult = self.updateCaches();
      saveResult = self.save();
      return;
    }
  }
  const arg1 = BaseKeyboardMapper;
  let obj = {
    key: "_setCachedKeyCodeMapEntries",
    value() {
      const entries = Object.entries(this.keyCodeMap);
      this._cachedKeyCodeMapEntries = entries.map((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [Number(tmp), tmp2];
        return items;
      });
      const _cachedKeyCodeMapEntries = this._cachedKeyCodeMapEntries;
      this._cachedAllEvents = _cachedKeyCodeMapEntries.flatMap((arg0) => {
        let tmp;
        [, tmp] = arg0;
        return tmp;
      });
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "_setCachedKeyMapEntries",
    value() {
      this._cachedKeyMapEntries = Object.entries(this.keyMap);
    }
  };
  items[1] = obj;
  obj = {
    key: "_setCachedKeyLayoutMapEntries",
    value() {
      const layoutMap = this.getLayoutMap();
      this._cachedKeyLayoutMapEntries = Array.from(layoutMap.entries());
    }
  };
  items[2] = obj;
  items[3] = {
    key: "cachedKeyCodeMapEntries",
    get() {
      const self = this;
      if (0 === this._cachedKeyCodeMapEntries.length) {
        const result = self._setCachedKeyCodeMapEntries();
      }
      return self._cachedKeyCodeMapEntries;
    }
  };
  items[4] = {
    key: "cachedKeyMapEntries",
    get() {
      const self = this;
      if (0 === this._cachedKeyMapEntries.length) {
        const result = self._setCachedKeyMapEntries();
      }
      return self._cachedKeyMapEntries;
    }
  };
  items[5] = {
    key: "cachedKeyLayoutMapEntries",
    get() {
      const self = this;
      if (0 === this._cachedKeyLayoutMapEntries.length) {
        const result = self._setCachedKeyLayoutMapEntries();
      }
      return self._cachedKeyLayoutMapEntries;
    }
  };
  items[6] = {
    key: "cachedAllEvents",
    get() {
      const self = this;
      if (0 === this._cachedAllEvents.length) {
        const result = self._setCachedKeyCodeMapEntries();
      }
      return self._cachedAllEvents;
    }
  };
  items[7] = {
    key: "getKeyCodeMapItem",
    value(arg0) {
      const self = this;
      if (null == this.keyCodeMap[arg0]) {
        self.keyCodeMap[arg0] = [];
      }
      return self.keyCodeMap[arg0];
    }
  };
  items[8] = {
    key: "_buildKeyCodeMapFromKeyMap",
    value() {
      let tmp3;
      let tmp4;
      const self = this;
      let obj = {};
      const entries = Object.entries(this.keyMap);
      for (let num = 0; num < entries.length; num = num + 1) {
        let tmp = callback;
        let tmp2 = callback(entries[num], 2);
        [tmp3, tmp4] = tmp2;
        let items = obj[tmp4];
        if (null == items) {
          items = [];
        }
        obj[tmp4] = items;
        let arr3 = obj[tmp4];
        obj = { keyCode: tmp4, key: tmp3, code: self.findCodeFromKeyboardLayoutMap(tmp3, true) };
        let arr = arr3.push(obj);
      }
      return obj;
    }
  };
  items[9] = {
    key: "_initializeInternalLayoutMap",
    value() {
      const obj = callback4();
      this._internalKeyLayoutMap = new Map(Array.from(callback4().entries()));
      const result = this._setCachedKeyLayoutMapEntries();
    }
  };
  items[10] = {
    key: "_hasExactMatch",
    value(keyCode) {
      const BaseKeyboardMapper = keyCode;
      if (null == keyCode.keyCode) {
        return false;
      } else {
        const self = this;
        const obj = this.keyCodeMap[keyCode.keyCode];
        return null != obj && obj.some((key) => {
          let tmp = key.key === key.key;
          if (tmp) {
            tmp = key.code === key.code;
          }
          if (tmp) {
            tmp = key.keyCode === key.keyCode;
          }
          return tmp;
        });
      }
    }
  };
  items[11] = {
    key: "addEvent",
    value(arg0) {
      const self = this;
      const tmp = callback6(arg0);
      if (null == this._internalKeyLayoutMap) {
        const result = self._initializeInternalLayoutMap();
      }
      if (!self._hasExactMatch(tmp)) {
        let tmp3 = null != tmp.key;
        if (tmp3) {
          tmp3 = "dead" !== tmp.key;
        }
        if (tmp3) {
          if (null == self.keyMap[tmp.key]) {
            self.keyMap[tmp.key] = tmp.keyCode;
          } else {
            let logKeyboardMismatches = self.keyMap[tmp.key] !== tmp.keyCode;
            if (logKeyboardMismatches) {
              logKeyboardMismatches = obj.logKeyboardMismatches;
            }
            if (logKeyboardMismatches) {
              const _HermesInternal = HermesInternal;
              closure_10.error("KeyboardMapper - Key code mismatch for key " + tmp.key + ": " + self.keyMap[tmp.key] + " !== " + tmp.keyCode);
            }
          }
          let items = self.keyCodeMap[tmp.keyCode];
          if (null == items) {
            items = [];
          }
          self.keyCodeMap[tmp.keyCode] = items;
          self.keyCodeMap[tmp.keyCode].push(tmp);
          const _internalKeyLayoutMap = self._internalKeyLayoutMap;
          if (null != _internalKeyLayoutMap) {
            const result1 = _internalKeyLayoutMap.set(tmp.code, tmp.key);
          }
          self.updateCaches();
          const arr2 = self.keyCodeMap[tmp.keyCode];
        }
      }
    }
  };
  items[12] = {
    key: "updateCaches",
    value() {
      const result = this._setCachedKeyCodeMapEntries();
      const result1 = this._setCachedKeyMapEntries();
      const result2 = this._setCachedKeyLayoutMapEntries();
    }
  };
  items[13] = {
    key: "reset",
    value() {
      this._internalKeyLayoutMap = null;
      const merged = Object.assign(this._defaultKeyMap);
      this.keyMap = callback5({});
      const result = this._initializeInternalLayoutMap();
      this.keyCodeMap = this._buildKeyCodeMapFromKeyMap();
      this.updateCaches();
      this.save();
    }
  };
  items[14] = {
    key: "save",
    value() {
      const Storage = BaseKeyboardMapper(closure_1[12]).Storage;
      const result = Storage.set(closure_15, this.keyMap);
    }
  };
  items[15] = {
    key: "getLayoutMap",
    value() {
      if (null == this._internalKeyLayoutMap) {
        let _internalKeyLayoutMap = callback4();
      } else {
        _internalKeyLayoutMap = tmp._internalKeyLayoutMap;
      }
      return _internalKeyLayoutMap;
    }
  };
  items[16] = {
    key: "getKeyCode",
    value(arg0) {
      return this.keyMap[arg0];
    }
  };
  items[17] = {
    key: "findCodeFromKeyboardLayoutMap",
    value(arg0) {
      let tmp = arg0;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      let closure_0;
      let prop = this.cachedKeyLayoutMapEntries;
      if (flag) {
        const _Array = Array;
        prop = Array.from(callback4().entries());
        const obj = callback4();
      }
      closure_0 = callback3(tmp);
      const found = prop.find((arg0) => {
        let tmp;
        [, tmp] = arg0;
        return tmp === closure_0;
      });
      let first;
      if (null != found) {
        first = found[0];
      }
      if (null != first) {
        tmp = first;
      }
      return tmp;
    }
  };
  return callback4(BaseKeyboardMapper, items);
}());
let closure_17 = null;
let closure_18 = null;
const set = new Set([]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("utils/web/KeyboardLayoutMapUtils.tsx");

export const BACKTICK_CODES = set;
export const DefaultKeyboardLayout = frozen;
export { normalizeKeyMap };
export { initializeKeyboardMapper };
export const __DEV_overrideLayoutMapKey = function __DEV_overrideLayoutMapKey(arg0, arg1) {
  tmp7._set(arg0, arg1);
  if (null != closure_17) {
    const result = closure_17._initializeInternalLayoutMap();
  }
  if (null != closure_17) {
    closure_17.updateCaches();
  }
};
export { getKeyboardMapper };
export const resetKeyboardMapper = function resetKeyboardMapper() {
  return _resetKeyboardMapper(...arguments);
};
export const getLayoutMap = function getLayoutMap() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (flag) {
    let layoutMap = getKeyboardLayoutMap();
  } else {
    const obj = getKeyboardMapper();
    layoutMap = undefined;
    if (null != obj) {
      layoutMap = obj.getLayoutMap();
    }
    if (null == layoutMap) {
      layoutMap = getKeyboardLayoutMap();
    }
  }
  return layoutMap;
};
export { reverseLookupCodeFromKey };
export { getExactKeyboardEventMatchFromAny };
export const getKeyboardEventShapeFromAny = function getKeyboardEventShapeFromAny(keyCode) {
  const tmp = getExactKeyboardEventMatchFromAny(keyCode);
  if (null != tmp) {
    return tmp;
  } else {
    const obj = getKeyboardMapper();
    if (null == obj) {
      return null;
    } else {
      const tmp4 = getNormalizedEvent(keyCode);
      if (null != tmp4.key) {
        const result = obj.findKeyboardEventByKey(tmp4.key, tmp4.code, tmp4.keyCode);
        if (null != result) {
          return result;
        }
      }
      if (null != tmp4.keyCode) {
        const result1 = obj.findKeyboardEventByKeyCode(tmp4.keyCode, tmp4.code);
        if (null != result1) {
          return result1;
        }
      }
      return null;
    }
  }
};
export const getKeyboardEventShapeFromKey = function getKeyboardEventShapeFromKey(key) {
  let tmp;
  if (null != key) {
    tmp = normalizeKey(key);
  }
  if (null == tmp) {
    return null;
  } else {
    const tmp22 = reverseLookupCodeFromKey(tmp3);
    const obj2 = getKeyboardMapper();
    let result;
    if (null != obj2) {
      result = obj2.findKeyboardEventByKey(tmp3, tmp22);
    }
    let tmp7 = null;
    if (null != result) {
      tmp7 = result;
    }
    if (null != tmp7) {
      return tmp7;
    } else {
      const tmp25 = getKeyboardMapper();
      let defaultKeyboardEventShape;
      if (null != tmp25) {
        defaultKeyboardEventShape = obj3.getDefaultKeyboardEventShape(tmp, undefined, tmp22);
      }
      let tmp11 = null;
      if (null != defaultKeyboardEventShape) {
        tmp11 = defaultKeyboardEventShape;
      }
      if (null == tmp11) {
        return null;
      } else {
        const prototype = globalThis.KeyboardEvent.prototype;
        const keyboardEvent = new globalThis.KeyboardEvent("keydown", tmp12);
        const obj = {};
        ({ keyCode: obj.keyCode, key: obj.key, code: obj.code } = keyboardEvent);
        return getNormalizedEvent(obj);
      }
      const obj3 = tmp25;
    }
  }
};
export const getKeyboardEventShapeFromKeycode = function getKeyboardEventShapeFromKeycode(arg0) {
  let obj = getKeyboardMapper();
  let result;
  if (null != obj) {
    result = obj.findKeyboardEventByKeyCode(arg0);
  }
  let tmp3 = null;
  if (null != result) {
    tmp3 = result;
  }
  if (null != tmp3) {
    return tmp3;
  } else {
    const tmp17 = getKeyboardMapper();
    let defaultKeyboardEventShape;
    if (null != tmp17) {
      defaultKeyboardEventShape = obj3.getDefaultKeyboardEventShape(undefined, arg0);
    }
    let tmp7 = null;
    if (null != defaultKeyboardEventShape) {
      tmp7 = defaultKeyboardEventShape;
    }
    if (null == tmp7) {
      return null;
    } else {
      const prototype = globalThis.KeyboardEvent.prototype;
      const keyboardEvent = new globalThis.KeyboardEvent("keydown", tmp8);
      obj = {};
      ({ keyCode: obj2.keyCode, key: obj2.key, code: obj2.code } = keyboardEvent);
      return getNormalizedEvent(obj);
    }
    const obj3 = tmp17;
  }
};
