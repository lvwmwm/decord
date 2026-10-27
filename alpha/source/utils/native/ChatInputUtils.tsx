// Module ID: 5160
// Function ID: 5161
// Name: ChatInputUtils
// Dependencies: [5161, 1893, 5162, 1628, 1500, 5163, 2]
// Exports: createInputRefTracker, dismissKeyboard, getBestActiveInput, getBestActiveInputForChannelId, getChatInputRef, getHighestActiveScreenIndex

// Module 5160 (ChatInputUtils)
import KeyboardUIStore from "KeyboardUIStore" /* 1500 */;
import KeyboardTypes from "KeyboardTypes" /* 1628 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1893 */;
import ScreenIndexFrozen from "ScreenIndexFrozen" /* 5161 */;
import useKeyboardType from "useKeyboardType" /* 5162 */;
import PortalKeyboardUIStore from "PortalKeyboardUIStore" /* 5163 */;
import size from "module_2" /* 2 */;

const f94500 = (item) => {
  let tmp = typeof item === "number";
  if (typeof item === "number") {
    const obj = ScreenIndexFrozen;
    tmp = !obj.isScreenIndexFrozen(item);
  }
  return tmp;
};
function getHighestIndexForScreenIndexMap(map1) {
  let obj = map1;
  if (map1 === undefined) {
    obj = map1;
  }
  let str;
  if (0 !== obj.size) {
    str = "voice-panel";
    if (!obj.has("voice-panel")) {
      str = "message-request";
      if (!obj.has("message-request")) {
        str = "new-message";
        if (!obj.has("new-message")) {
          str = "channel-secondary-view-chat";
          if (!obj.has("channel-secondary-view-chat")) {
            str = "conjure-preview";
            if (!obj.has("conjure-preview")) {
              const _Array = Array;
              const arr = Array.from(obj.keys());
              const found = arr.filter(f94500);
              if (0 !== found.length) {
                const _Math = Math;
                const items = [];
                HermesBuiltin.arraySpread(items, found, 0);
                const _Math2 = Math;
                str = HermesBuiltin.apply(max, items, Math);
              }
            }
          }
        }
      }
    }
  }
  if (null != str) {
    return map1.get(str);
  }
}
const map = new Map();
const map1 = new Map();
let result = size.fileFinishedImporting("utils/native/ChatInputUtils.tsx");

export function createInputRefTracker(id, screenIndex) {
  let closure_0 = screenIndex;
  let obj = { current: id };
  let obj2 = {
    handleRef(current, id) {
      obj.current = id;
      if (null == current) {
        if (null != obj) {
          const value = map.get(id);
          if (null != value) {
            value.delete(screenIndex);
            if (0 === value.size) {
              map.delete(id);
            }
            map1.delete(screenIndex);
          }
          obj = null;
        }
      } else if (null == obj) {
        obj = { current };
        let value2 = map.get(id);
        if (value2 == null) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          value2 = new Map();
        }
        const result = value2.set(tmp2, obj);
        const result1 = map.set(id, value2);
        const result2 = map1.set(tmp2, obj);
        const _process = process;
        if ("development" === process.env.DEVELOPMENT) {
          const hasItem = map1.has(tmp2);
        }
      } else {
        obj.current = current;
      }
    },
    register() {
      if (null != obj) {
        const current2 = obj.current;
        const value = map.get(current2);
        const tmp12 = obj;
        if (null != value) {
          value.delete(screenIndex);
          if (0 === value.size) {
            map.delete(current2);
          }
          map1.delete(screenIndex);
        }
        const current = tmp12.current;
        let value2 = obj3.get(current);
        if (value2 == null) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          value2 = new Map();
        }
        const result = value2.set(tmp13, tmp5);
        const result1 = obj3.set(current, value2);
        const result2 = map1.set(tmp13, tmp5);
        const _process = process;
        const obj2 = map1;
        if ("development" === process.env.DEVELOPMENT) {
          const hasItem = obj2.has(tmp13);
        }
      }
    },
    unregister() {
      if (null != obj) {
        const current = obj.current;
        const value = map.get(current);
        if (null != value) {
          value.delete(screenIndex);
          if (0 === value.size) {
            map.delete(current);
          }
          map1.delete(screenIndex);
        }
      }
    }
  };
  return obj2;
}
export const getHighestActiveScreenIndex = function getHighestActiveScreenIndex() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = map1;
  }
  if (0 !== obj.size) {
    if (obj.has("voice-panel")) {
      return "voice-panel";
    } else if (obj.has("message-request")) {
      return "message-request";
    } else if (obj.has("new-message")) {
      return "new-message";
    } else if (obj.has("channel-secondary-view-chat")) {
      return "channel-secondary-view-chat";
    } else if (obj.has("conjure-preview")) {
      return "conjure-preview";
    } else {
      const _Array = Array;
      const arr = Array.from(obj.keys());
      const found = arr.filter(f94500);
      if (0 !== found.length) {
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(items, found, 0);
        const _Math2 = Math;
        return HermesBuiltin.apply(max, items, Math);
      }
    }
  }
};
export const getChatInputRef = function getChatInputRef(id, screenIndex) {
  if (null != id) {
    const value = map.get(id);
    let current;
    if (value != null) {
      const value2 = value.get(screenIndex);
      if (value2 != null) {
        current = value2.current;
      }
    }
    return current;
  }
};
export const getBestActiveInputForChannelId = function getBestActiveInputForChannelId(id) {
  if (null != id) {
    const value = map.get(id);
    if (null != value) {
      const tmp4 = getHighestIndexForScreenIndexMap(value);
      let current;
      if (tmp4 != null) {
        current = tmp4.current;
      }
      return current;
    }
  }
};
export const getBestActiveInput = function getBestActiveInput() {
  const tmp = getHighestIndexForScreenIndexMap(map1);
  let current;
  if (tmp != null) {
    current = tmp.current;
  }
  return current;
};
export const dismissKeyboard = function dismissKeyboard() {
  const obj = KeyboardManagerUtils;
  const result = obj.dismissGlobalKeyboard();
  const tmp4 = getHighestIndexForScreenIndexMap(map1);
  let current;
  if (tmp4 != null) {
    current = tmp4.current;
  }
  if (null != current) {
    current.closeCustomKeyboard();
  }
  const tmpResult = useKeyboardType;
  const keyboardType = tmpResult.getKeyboardType();
  if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    const obj2 = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
    const setKeyboardType = KeyboardUIStore.setKeyboardType;
    KeyboardUIStore;
    setKeyboardType(obj2);
  }
  const tmpResult4 = PortalKeyboardUIStore;
  const result1 = tmpResult4.closePortalKeyboardRequest();
};
