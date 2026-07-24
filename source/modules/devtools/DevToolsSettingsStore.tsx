// Module ID: 6959
// Function ID: 55622
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 6960, 686, 566, 2]

// Module 6959 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { sidebarWidth: 460, lastOpenTabId: null, lastOpenSubTabId: null, displayTools: false, showDevWidget: false, devWidgetPosition: { x: 0, y: 0 }, sortedScreenKeys: [] };
let tmp2 = ((DeviceSettingsStore) => {
  class DevToolsSettingsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, DevToolsSettingsStore);
      obj = outer1_5(DevToolsSettingsStore);
      tmp2 = outer1_4;
      if (outer1_9()) {
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
  callback2(DevToolsSettingsStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        tmp = outer1_8;
      }
      outer1_8 = tmp;
      let sortedScreenKeys = tmp.sortedScreenKeys;
      if (null == sortedScreenKeys) {
        sortedScreenKeys = [];
      }
      const obj = {};
      const merged = Object.assign(outer1_8);
      obj["sortedScreenKeys"] = sortedScreenKeys;
      outer1_8 = obj;
      DevToolsSettingsStore(outer1_1[6]).actionLogger.persist = outer1_7.isDeveloper;
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getUserAgnosticState",
    value() {
      return outer1_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "sidebarWidth",
    get() {
      let num = 0;
      if (this.displayTools) {
        num = outer1_8.sidebarWidth;
      }
      return num;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "lastOpenTabId",
    get() {
      const lastOpenTabId = outer1_8.lastOpenTabId;
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
      const lastOpenSubTabId = outer1_8.lastOpenSubTabId;
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
      let displayTools = outer1_7.isDeveloper;
      if (displayTools) {
        displayTools = outer1_8.displayTools;
      }
      return displayTools;
    }
  };
  items[6] = {
    key: "showDevWidget",
    get() {
      let showDevWidget = outer1_7.isDeveloper;
      if (showDevWidget) {
        showDevWidget = outer1_8.showDevWidget;
      }
      return showDevWidget;
    }
  };
  items[7] = {
    key: "devWidgetPosition",
    get() {
      return outer1_8.devWidgetPosition;
    }
  };
  items[8] = {
    key: "sortedScreenKeys",
    get() {
      return outer1_8.sortedScreenKeys;
    }
  };
  return callback(DevToolsSettingsStore, items);
})(require("initialize").DeviceSettingsStore);
tmp2.displayName = "DevToolsSettingsStore";
tmp2.persistKey = "DevToolsSettingsStore";
obj = {
  DEV_TOOLS_SETTINGS_UPDATE: function handleDevToolsSettingsUpdate(settings) {
    if (isDeveloper.isDeveloper) {
      const obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(settings.settings);
    }
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/devtools/DevToolsSettingsStore.tsx");

export default tmp2;
export const DEVTOOLS_SIDEBAR_MIN_WIDTH = 460;
