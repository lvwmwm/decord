// Module ID: 3989
// Function ID: 33096
// Name: getHighestActiveScreenIndex
// Dependencies: [3990, 1820, 3996, 1555, 1454, 3997, 2]
// Exports: createInputRefTracker, dismissKeyboard, getBestActiveInputForChannelId, getChatInputRef

// Module 3989 (getHighestActiveScreenIndex)
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
          tmp = !outer1_0(outer1_1[0]).isScreenIndexFrozen(arg0);
          const obj = outer1_0(outer1_1[0]);
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
let map = new Map();
const map1 = new Map();
let result = require("getKeyboardContextForType").fileFinishedImporting("utils/native/ChatInputUtils.tsx");

export const createInputRefTracker = function createInputRefTracker(id, screenIndex) {
  let closure_0 = screenIndex;
  function addRef(c1, current, closure_0) {
    let map = obj.get(current);
    if (null == map) {
      const _Map = Map;
      map = new Map();
    }
    const result = map.set(closure_0, c1);
    const result1 = obj.set(current, map);
    const result2 = addRef.set(closure_0, c1);
    if ("development" === process.env.DEVELOPMENT) {
      const hasItem = addRef.has(closure_0);
    }
  }
  function removeRef(arg0, current, closure_0) {
    const value = obj.get(current);
    if (null != value) {
      value.delete(closure_0);
      if (0 === value.size) {
        obj.delete(current);
      }
      addRef.delete(closure_0);
    }
  }
  let c1 = null;
  let obj = { current: id };
  obj = {
    handleRef(current, current2) {
      obj.current = current2;
      if (null == current) {
        if (null != obj) {
          removeRef(undefined, current2, closure_0);
          obj = null;
        }
      } else if (null == obj) {
        obj = { current };
        addRef(obj, current2, closure_0);
      } else {
        obj.current = current;
      }
    },
    register() {
      if (null != c1) {
        removeRef(undefined, obj.current, closure_0);
        addRef(c1, obj.current, closure_0);
      }
    },
    unregister() {
      if (null != c1) {
        removeRef(undefined, obj.current, closure_0);
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
  let obj = require(1820) /* dismissGlobalKeyboard */;
  const result = obj.dismissGlobalKeyboard();
  const obj2 = getBestActiveInput();
  if (null != obj2) {
    obj2.closeCustomKeyboard();
  }
  const keyboardType = require(3996) /* getKeyboardContextForType */.getKeyboardType();
  if (keyboardType !== require(1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM) {
    obj = { type: require(1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM };
    require(1454) /* _createForOfIteratorHelperLoose */.setKeyboardType(obj);
    const obj4 = require(1454) /* _createForOfIteratorHelperLoose */;
  }
  const obj3 = require(3996) /* getKeyboardContextForType */;
  const result1 = require(3997) /* closePortalKeyboard */.closePortalKeyboardRequest();
};
