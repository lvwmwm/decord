// Module ID: 3987
// Function ID: 33084
// Name: getHighestActiveScreenIndex
// Dependencies: []
// Exports: createInputRefTracker, dismissKeyboard, getBestActiveInputForChannelId, getChatInputRef

// Module 3987 (getHighestActiveScreenIndex)
function getHighestActiveScreenIndex(map1) {
  let obj = map1;
  if (map1 === undefined) {
    obj = map1;
  }
  if (0 !== obj.size) {
    if (obj.has("voice-panel")) {
      return "voice-panel";
    } else if (obj.has("message-request")) {
      return "message-request";
    } else if (obj.has("new-message")) {
      return "new-message";
    } else {
      const _Array = Array;
      const found = Array.from(obj.keys()).filter((arg0) => {
        let tmp = "number" === typeof arg0;
        if (tmp) {
          tmp = !callback(closure_1[0]).isScreenIndexFrozen(arg0);
          const obj = callback(closure_1[0]);
        }
        return tmp;
      });
      if (0 !== found.length) {
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(found, 0);
        const _Math2 = Math;
        return HermesBuiltin.apply(items, Math);
      }
      const arr = Array.from(obj.keys());
    }
  }
}
function getHighestIndexForScreenIndexMap(map1) {
  const tmp = getHighestActiveScreenIndex(map1);
  if (null != tmp) {
    return map1.get(tmp);
  }
}
function getBestActiveInput() {
  const tmp = getHighestIndexForScreenIndexMap(map1);
  let current;
  if (null != tmp) {
    current = tmp.current;
  }
  let tmp3;
  if (null != current) {
    tmp3 = current;
  }
  return tmp3;
}
const map = new Map();
const map1 = new Map();
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("utils/native/ChatInputUtils.tsx");

export const createInputRefTracker = function createInputRefTracker(id, screenIndex) {
  const require = screenIndex;
  function addRef(closure_1, current, arg2) {
    let map = obj.get(current);
    if (null == map) {
      const _Map = Map;
      map = new Map();
    }
    const result = map.set(arg2, closure_1);
    const result1 = obj.set(current, map);
    const result2 = addRef.set(arg2, closure_1);
    if ("development" === process.env.DEVELOPMENT) {
      const hasItem = addRef.has(arg2);
    }
  }
  function removeRef(arg0, current, arg2) {
    const value = obj.get(current);
    if (null != value) {
      value.delete(arg2);
      if (0 === value.size) {
        obj.delete(current);
      }
      addRef.delete(arg2);
    }
  }
  let closure_1 = null;
  let obj = { current: id };
  obj = {
    handleRef(current, current2) {
      obj.current = current2;
      if (null == current) {
        if (null != closure_1) {
          removeRef(undefined, current2, current2);
          closure_1 = null;
        }
      } else if (null == closure_1) {
        const obj = { current };
        closure_1 = obj;
        addRef(obj, current2, current2);
      } else {
        closure_1.current = current;
      }
    },
    register() {
      if (null != closure_1) {
        removeRef(undefined, obj.current, arg1);
        addRef(closure_1, obj.current, arg1);
      }
    },
    unregister() {
      if (null != closure_1) {
        removeRef(undefined, obj.current, arg1);
      }
    }
  };
  return obj;
};
export { getHighestActiveScreenIndex };
export const getChatInputRef = function getChatInputRef(id, screenIndex) {
  if (null != id) {
    let value = map.get(id);
    let current;
    if (null != value) {
      value = value.get(screenIndex);
      if (null != value) {
        current = value.current;
      }
    }
    let tmp5;
    if (null != current) {
      tmp5 = current;
    }
    return tmp5;
  }
};
export const getBestActiveInputForChannelId = function getBestActiveInputForChannelId(channelId) {
  if (null != channelId) {
    const value = map.get(channelId);
    if (null != value) {
      const tmp4 = getHighestIndexForScreenIndexMap(value);
      let current;
      if (null != tmp4) {
        current = tmp4.current;
      }
      let tmp6;
      if (null != current) {
        tmp6 = current;
      }
      return tmp6;
    }
  }
};
export { getBestActiveInput };
export const dismissKeyboard = function dismissKeyboard() {
  let obj = require(dependencyMap[1]);
  const result = obj.dismissGlobalKeyboard();
  const obj2 = getBestActiveInput();
  if (null != obj2) {
    obj2.closeCustomKeyboard();
  }
  const keyboardType = require(dependencyMap[2]).getKeyboardType();
  if (keyboardType !== require(dependencyMap[3]).KeyboardTypes.SYSTEM) {
    obj = { type: require(dependencyMap[3]).KeyboardTypes.SYSTEM };
    require(dependencyMap[4]).setKeyboardType(obj);
    const obj4 = require(dependencyMap[4]);
  }
  const obj3 = require(dependencyMap[2]);
  const result1 = require(dependencyMap[5]).closePortalKeyboardRequest();
};
