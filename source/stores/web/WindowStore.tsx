// Module ID: 12843
// Function ID: 99812
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 44, 5135, 566, 686, 675, 1934, 2]

// Module 12843 (_isNativeReflectConstruct)
import getWindowId from "getWindowId";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import set from "_possibleConstructorReturn";

const require = arg1;
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
    const obj = { isElementFullscreen: false, focused: false, windowSize: { width: 0, height: 0 }, visible: false };
    value = obj;
  }
  return value;
}
let c8 = null;
const map = new Map();
let set = new Set();
let tmp4 = ((Store) => {
  class WindowStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, WindowStore);
      obj = outer1_6(WindowStore);
      tmp2 = outer1_5;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(WindowStore, Store);
  let obj = {
    key: "isFocused",
    value() {
      let mainWindowId = arg0;
      if (arg0 === undefined) {
        mainWindowId = WindowStore(outer1_2[6]).getMainWindowId();
        const obj = WindowStore(outer1_2[6]);
      }
      return outer1_12(mainWindowId).focused;
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
        mainWindowId = WindowStore(outer1_2[6]).getMainWindowId();
        const obj = WindowStore(outer1_2[6]);
      }
      return outer1_12(mainWindowId).visible;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getFocusedWindowId",
    value() {
      let c0 = null;
      const item = outer1_9.forEach((focused) => {
        if (focused.focused) {
          let closure_0 = arg1;
        }
      });
      return c0;
    }
  };
  items[4] = {
    key: "getLastFocusedWindowId",
    value() {
      return outer1_8;
    }
  };
  items[5] = {
    key: "isElementFullScreen",
    value() {
      let mainWindowId = arg0;
      if (arg0 === undefined) {
        mainWindowId = WindowStore(outer1_2[6]).getMainWindowId();
        const obj = WindowStore(outer1_2[6]);
      }
      return outer1_12(mainWindowId).isElementFullscreen;
    }
  };
  items[6] = {
    key: "windowSize",
    value() {
      let mainWindowId = arg0;
      if (arg0 === undefined) {
        mainWindowId = WindowStore(outer1_2[6]).getMainWindowId();
        const obj = WindowStore(outer1_2[6]);
      }
      return outer1_12(mainWindowId).windowSize;
    }
  };
  return callback(WindowStore, items);
})(require("initialize").Store);
tmp4.displayName = "WindowStore";
tmp4 = new tmp4(require("dispatcher"), {
  WINDOW_INIT: function handleWindowInit(isElementFullscreen) {
    importDefault(44)(!map.has(isElementFullscreen.windowId), "Window initialized multiple times");
    const focused = isElementFullscreen.focused;
    obj = { windowSize: obj, isElementFullscreen: isElementFullscreen.isElementFullscreen, focused, visible: isElementFullscreen.visible };
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
    if (c8 === windowId.windowId) {
      c8 = null;
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
require("expandLocation").then((addExtraAnalyticsDecorator) => {
  const result = addExtraAnalyticsDecorator.addExtraAnalyticsDecorator(() => {

  });
});
let result = set.fileFinishedImporting("stores/web/WindowStore.tsx");

export default tmp4;
