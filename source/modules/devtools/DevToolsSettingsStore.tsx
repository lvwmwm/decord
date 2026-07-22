// Module ID: 6955
// Function ID: 55579
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6955 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = { devWidgetPosition: { 0: "%FunctionPrototype%", 0: "paddingStart" }, sortedScreenKeys: [] };
let tmp2 = (DeviceSettingsStore) => {
  class DevToolsSettingsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, DevToolsSettingsStore);
      obj = closure_5(DevToolsSettingsStore);
      tmp2 = closure_4;
      if (closure_9()) {
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
  const importDefault = DevToolsSettingsStore;
  callback2(DevToolsSettingsStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        tmp = obj;
      }
      let obj = tmp;
      let sortedScreenKeys = tmp.sortedScreenKeys;
      if (null == sortedScreenKeys) {
        sortedScreenKeys = [];
      }
      obj = {};
      const merged = Object.assign(obj);
      obj["sortedScreenKeys"] = sortedScreenKeys;
      DevToolsSettingsStore(closure_1[6]).actionLogger.persist = closure_7.isDeveloper;
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getUserAgnosticState",
    value() {
      return closure_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "sidebarWidth",
    get() {
      let num = 0;
      if (this.displayTools) {
        num = closure_8.sidebarWidth;
      }
      return num;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "lastOpenTabId",
    get() {
      const lastOpenTabId = closure_8.lastOpenTabId;
      let tmp = null;
      if (null != lastOpenTabId) {
        tmp = lastOpenTabId;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "lastOpenSubTabId",
    get() {
      const lastOpenSubTabId = closure_8.lastOpenSubTabId;
      let tmp = null;
      if (null != lastOpenSubTabId) {
        tmp = lastOpenSubTabId;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "displayTools",
    get() {
      let displayTools = closure_7.isDeveloper;
      if (displayTools) {
        displayTools = closure_8.displayTools;
      }
      return displayTools;
    }
  };
  items[6] = {
    key: "showDevWidget",
    get() {
      let showDevWidget = closure_7.isDeveloper;
      if (showDevWidget) {
        showDevWidget = closure_8.showDevWidget;
      }
      return showDevWidget;
    }
  };
  items[7] = {
    key: "devWidgetPosition",
    get() {
      return closure_8.devWidgetPosition;
    }
  };
  items[8] = {
    key: "sortedScreenKeys",
    get() {
      return closure_8.sortedScreenKeys;
    }
  };
  return callback(DevToolsSettingsStore, items);
}(importDefault(dependencyMap[7]).DeviceSettingsStore);
tmp2.displayName = "DevToolsSettingsStore";
tmp2.persistKey = "DevToolsSettingsStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  DEV_TOOLS_SETTINGS_UPDATE: function handleDevToolsSettingsUpdate(settings) {
    if (isDeveloper.isDeveloper) {
      const obj = {};
      const merged = Object.assign(closure_8);
      const merged1 = Object.assign(settings.settings);
      closure_8 = obj;
    }
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/devtools/DevToolsSettingsStore.tsx");

export default tmp2;
export const DEVTOOLS_SIDEBAR_MIN_WIDTH = 460;
