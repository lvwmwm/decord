// Module ID: 12720
// Function ID: 97601
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12720 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getWindowIdState(windowId) {
  let value = map.get(windowId);
  if (null == value) {
    const hasItem = set.has(windowId);
    const obj = { opacity: "o", d: "ao", id: "lj", cx: "prototype", windowSize: { bhk: -536870861, bic: -299892737 } };
    value = obj;
  }
  return value;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = null;
const map = new Map();
const set = new Set();
let tmp4 = (Store) => {
  class WindowStore {
    constructor() {
      self = this;
      tmp = closure_3(this, WindowStore);
      obj = closure_6(WindowStore);
      tmp2 = closure_5;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = WindowStore;
  callback2(WindowStore, Store);
  let obj = {
    key: "isFocused",
    value() {
      let mainWindowId = arg0;
      if (arg0 === undefined) {
        mainWindowId = WindowStore(closure_2[6]).getMainWindowId();
        const obj = WindowStore(closure_2[6]);
      }
      return callback4(mainWindowId).focused;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "isAppFocused",
    value() {
      return null != this.getFocusedWindowId();
    }
  };
  items[1] = obj;
  obj = {
    key: "isVisible",
    value() {
      let mainWindowId = arg0;
      if (arg0 === undefined) {
        mainWindowId = WindowStore(closure_2[6]).getMainWindowId();
        const obj = WindowStore(closure_2[6]);
      }
      return callback4(mainWindowId).visible;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getFocusedWindowId",
    value() {
      let closure_0 = null;
      const item = closure_9.forEach((focused) => {
        if (focused.focused) {
          let closure_0 = arg1;
        }
      });
      return closure_0;
    }
  };
  items[4] = {
    key: "getLastFocusedWindowId",
    value() {
      return closure_8;
    }
  };
  items[5] = {
    key: "isElementFullScreen",
    value() {
      let mainWindowId = arg0;
      if (arg0 === undefined) {
        mainWindowId = WindowStore(closure_2[6]).getMainWindowId();
        const obj = WindowStore(closure_2[6]);
      }
      return callback4(mainWindowId).isElementFullscreen;
    }
  };
  items[6] = {
    key: "windowSize",
    value() {
      let mainWindowId = arg0;
      if (arg0 === undefined) {
        mainWindowId = WindowStore(closure_2[6]).getMainWindowId();
        const obj = WindowStore(closure_2[6]);
      }
      return callback4(mainWindowId).windowSize;
    }
  };
  return callback(WindowStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp4.displayName = "WindowStore";
tmp4 = new tmp4(importDefault(dependencyMap[8]), {
  WINDOW_INIT: function handleWindowInit(isElementFullscreen) {
    importDefault(dependencyMap[5])(!map.has(isElementFullscreen.windowId), "Window initialized multiple times");
    const focused = isElementFullscreen.focused;
    let obj = { windowSize: obj, isElementFullscreen: isElementFullscreen.isElementFullscreen, focused, visible: isElementFullscreen.visible };
    obj = { width: isElementFullscreen.width, height: isElementFullscreen.height };
    const result = map.set(isElementFullscreen.windowId, obj);
    if (focused) {
      const windowId = isElementFullscreen.windowId;
    }
    return true;
  },
  WINDOW_FULLSCREEN_CHANGE: function handleWindowFullscreenChange(windowId) {
    const tmp = getWindowIdState(windowId.windowId);
    let flag = tmp.isElementFullscreen !== windowId.isElementFullscreen;
    if (flag) {
      const obj = {};
      const merged = Object.assign(tmp);
      obj["isElementFullscreen"] = windowId.isElementFullscreen;
      const result = map.set(windowId.windowId, obj);
      flag = true;
    }
    return flag;
  },
  WINDOW_FOCUS: function handleWindowFocus(windowId) {
    const tmp = getWindowIdState(windowId.windowId);
    let flag = tmp.focused !== windowId.focused;
    if (flag) {
      if (windowId.focused) {
        windowId = windowId.windowId;
      }
      const obj = {};
      const merged = Object.assign(tmp);
      obj["focused"] = windowId.focused;
      const result = map.set(windowId.windowId, obj);
      flag = true;
    }
    return flag;
  },
  WINDOW_RESIZED: function handleWindowResize(windowId) {
    const tmp = getWindowIdState(windowId.windowId);
    let flag = tmp.windowSize.width !== windowId.width || tmp.windowSize.height !== windowId.height;
    if (flag) {
      let obj = {};
      const merged = Object.assign(tmp);
      obj = {};
      ({ width: obj2.width, height: obj2.height } = windowId);
      obj["windowSize"] = obj;
      const result = map.set(windowId.windowId, obj);
      flag = true;
    }
    return flag;
  },
  WINDOW_UNLOAD: function handleWindowUnload(windowId) {
    set.add(windowId.windowId);
    map.delete(windowId.windowId);
    if (closure_8 === windowId.windowId) {
      closure_8 = null;
    }
    return true;
  },
  WINDOW_VISIBILITY_CHANGE: function handleWindowVisibilityChange(windowId) {
    const tmp = getWindowIdState(windowId.windowId);
    let flag = tmp.visible !== windowId.visible;
    if (flag) {
      const obj = {};
      const merged = Object.assign(tmp);
      obj["visible"] = windowId.visible;
      const result = map.set(windowId.windowId, obj);
      flag = true;
    }
    return flag;
  }
});
arg1(dependencyMap[10])(dependencyMap[9], dependencyMap.paths).then((addExtraAnalyticsDecorator) => {
  const result = addExtraAnalyticsDecorator.addExtraAnalyticsDecorator(() => {

  });
});
const obj = {
  WINDOW_INIT: function handleWindowInit(isElementFullscreen) {
    importDefault(dependencyMap[5])(!map.has(isElementFullscreen.windowId), "Window initialized multiple times");
    const focused = isElementFullscreen.focused;
    let obj = { windowSize: obj, isElementFullscreen: isElementFullscreen.isElementFullscreen, focused, visible: isElementFullscreen.visible };
    obj = { width: isElementFullscreen.width, height: isElementFullscreen.height };
    const result = map.set(isElementFullscreen.windowId, obj);
    if (focused) {
      const windowId = isElementFullscreen.windowId;
    }
    return true;
  },
  WINDOW_FULLSCREEN_CHANGE: function handleWindowFullscreenChange(windowId) {
    const tmp = getWindowIdState(windowId.windowId);
    let flag = tmp.isElementFullscreen !== windowId.isElementFullscreen;
    if (flag) {
      const obj = {};
      const merged = Object.assign(tmp);
      obj["isElementFullscreen"] = windowId.isElementFullscreen;
      const result = map.set(windowId.windowId, obj);
      flag = true;
    }
    return flag;
  },
  WINDOW_FOCUS: function handleWindowFocus(windowId) {
    const tmp = getWindowIdState(windowId.windowId);
    let flag = tmp.focused !== windowId.focused;
    if (flag) {
      if (windowId.focused) {
        windowId = windowId.windowId;
      }
      const obj = {};
      const merged = Object.assign(tmp);
      obj["focused"] = windowId.focused;
      const result = map.set(windowId.windowId, obj);
      flag = true;
    }
    return flag;
  },
  WINDOW_RESIZED: function handleWindowResize(windowId) {
    const tmp = getWindowIdState(windowId.windowId);
    let flag = tmp.windowSize.width !== windowId.width || tmp.windowSize.height !== windowId.height;
    if (flag) {
      let obj = {};
      const merged = Object.assign(tmp);
      obj = {};
      ({ width: obj2.width, height: obj2.height } = windowId);
      obj["windowSize"] = obj;
      const result = map.set(windowId.windowId, obj);
      flag = true;
    }
    return flag;
  },
  WINDOW_UNLOAD: function handleWindowUnload(windowId) {
    set.add(windowId.windowId);
    map.delete(windowId.windowId);
    if (closure_8 === windowId.windowId) {
      closure_8 = null;
    }
    return true;
  },
  WINDOW_VISIBILITY_CHANGE: function handleWindowVisibilityChange(windowId) {
    const tmp = getWindowIdState(windowId.windowId);
    let flag = tmp.visible !== windowId.visible;
    if (flag) {
      const obj = {};
      const merged = Object.assign(tmp);
      obj["visible"] = windowId.visible;
      const result = map.set(windowId.windowId, obj);
      flag = true;
    }
    return flag;
  }
};
const promise = arg1(dependencyMap[10])(dependencyMap[9], dependencyMap.paths);
const result = arg1(dependencyMap[11]).fileFinishedImporting("stores/web/WindowStore.tsx");

export default tmp4;
