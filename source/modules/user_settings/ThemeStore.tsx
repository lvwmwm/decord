// Module ID: 1278
// Function ID: 14408
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1279, 1280, 1316, 1281, 662, 653, 1315, 1321, 1330, 566, 1331, 686, 2]

// Module 1278 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import SystemThemeState from "SystemThemeState";
import { UserSettingsDelay } from "MAX_FAVORITES";
import { ThemeTypes } from "ME";

let THEME_PREFERENCES_MOBILE;
let THEME_PREFERENCES_WEB_REFRESH;
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
function handleThemeChange() {
  const tmp = importDefault(1321)(closure_17, THEME_PREFERENCES_MOBILE);
  let flag = tmp !== closure_18;
  if (flag) {
    closure_18 = tmp;
    importDefault(1330)(closure_18);
    flag = true;
  }
  return flag;
}
({ SystemTheme: closure_11, THEME_PREFERENCES_MOBILE, THEME_PREFERENCES_WEB_REFRESH } = SystemThemeState);
let obj = { UNSET: 0, [0]: "UNSET", SET: 1, [1]: "SET" };
const UNSET = obj.UNSET;
const tmp3 = require("getSystemTheme")();
let closure_17 = tmp3;
let closure_18 = THEME_PREFERENCES_MOBILE[tmp3];
let closure_19 = {};
let c20 = false;
let tmp4 = ((PersistedStore) => {
  class ThemeStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ThemeStore);
      obj = outer1_6(ThemeStore);
      tmp2 = outer1_5;
      if (outer1_21()) {
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
  callback2(ThemeStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(theme) {
      const self = this;
      theme = undefined;
      if (null != theme) {
        theme = theme.theme;
      }
      if (null != theme) {
        const outer1_15 = outer1_14.SET;
        const outer1_18 = theme.theme;
        outer1_1(outer1_2[13])(outer1_18);
        if (null != theme.preferences) {
          const outer1_16 = theme.preferences;
        }
        if (null != theme.syncedClientThemes) {
          const outer1_19 = theme.syncedClientThemes;
        }
        if (null != theme.syncedThemesEnabled) {
          const outer1_20 = theme.syncedThemesEnabled;
        }
      }
      self.waitFor(outer1_9, outer1_8, outer1_10);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getState",
    value() {
      return { theme: this.theme, preferences: outer1_16, syncedClientThemes: outer1_19, syncedThemesEnabled: outer1_20, status: outer1_15 };
    }
  };
  items[1] = obj;
  obj = {
    key: "theme",
    get() {
      return outer1_18;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "systemTheme",
    get() {
      return outer1_17;
    }
  };
  items[4] = {
    key: "themePreferenceForSystemTheme",
    value(arg0) {
      return outer1_16[arg0];
    }
  };
  items[5] = {
    key: "getSyncedClientTheme",
    value(arg0) {
      return outer1_19[arg0];
    }
  };
  items[6] = {
    key: "isSameAsDeviceThemeEnabled",
    value() {
      return outer1_20;
    }
  };
  return callback(ThemeStore, items);
})(require("initialize").PersistedStore);
tmp4.displayName = "ThemeStore";
tmp4.persistKey = "ThemeStore";
let items = [
  (theme) => {
    let str = theme.theme;
    if ("amoled" === str) {
      str = "midnight";
    }
    const obj = {};
    const merged = Object.assign(theme);
    obj["theme"] = str;
    return obj;
  },
  (preferences) => {
    let tmp = preferences;
    if (null != preferences.preferences) {
      tmp = preferences;
      if (preferences.preferences[constants.DARK] === ThemeTypes.DARK) {
        let obj = {};
        const merged = Object.assign(preferences);
        obj = {};
        const merged1 = Object.assign(preferences.preferences);
        obj[constants.DARK] = ThemeTypes.DARKER;
        obj["preferences"] = obj;
        tmp = obj;
      }
    }
    return tmp;
  }
];
tmp4.migrations = items;
obj = {
  CACHE_LOADED: handleThemeChange,
  CONNECTION_OPEN: function handleConnectionOpen() {
    (function migrateDarkSidebarToProto() {
      if (outer1_9.darkSidebar) {
        const appearance = outer1_10.settings.appearance;
        let darkSidebar;
        if (null != appearance) {
          darkSidebar = appearance.darkSidebar;
        }
        if (!darkSidebar) {
          const PreloadedUserSettingsActionCreators = outer1_0(outer1_2[15]).PreloadedUserSettingsActionCreators;
          PreloadedUserSettingsActionCreators.updateAsync("appearance", (arg0) => {
            arg0.darkSidebar = true;
          }, outer1_12.INFREQUENT_USER_ACTION);
        }
        outer1_1(outer1_2[16]).wait(() => {
          outer2_1(outer2_2[16]).dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { darkSidebar: false } });
        });
        const obj = outer1_1(outer1_2[16]);
      }
    })();
    return handleThemeChange();
  },
  LOGOUT: function handleLogOut(isSwitchingAccount) {
    let closure_19 = {};
    let c20 = false;
    let tmp = !isSwitchingAccount.isSwitchingAccount;
    if (tmp) {
      tmp = handleThemeChange();
    }
    return tmp;
  },
  OVERLAY_INITIALIZE: handleThemeChange,
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function handleSelectivelySyncedUserSettingsUpdate() {
    return handleThemeChange();
  },
  UNSYNCED_USER_SETTINGS_UPDATE: handleThemeChange,
  USER_SETTINGS_PROTO_UPDATE: handleThemeChange,
  RESET_PREVIEW_CLIENT_THEME: handleThemeChange,
  SYSTEM_THEME_CHANGE: function handleSystemThemeChange(systemTheme) {
    systemTheme = systemTheme.systemTheme;
    return handleThemeChange();
  },
  UPDATE_THEME_PREFERENCES: function handleUpdateThemePreferences(preferences) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(preferences.preferences);
    return handleThemeChange();
  },
  UPDATE_SYNCED_CLIENT_THEME: function handleUpdateSyncedClientTheme(systemTheme) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[systemTheme.systemTheme] = systemTheme.clientTheme;
    return true;
  },
  SET_SAME_AS_DEVICE_THEME_ENABLED: function handleSetSameAsDeviceThemeEnabled(enabled) {
    let flag = enabled !== enabled.enabled;
    if (flag) {
      enabled = enabled.enabled;
      flag = true;
    }
    return flag;
  },
  CLEAR_SYNCED_CLIENT_THEMES: function handleClearSyncedClientThemes() {
    let tmp = c20;
    if (!c20) {
      tmp = null != dependencyMap[constants.LIGHT];
    }
    if (!tmp) {
      tmp = null != dependencyMap[constants.DARK];
    }
    dependencyMap = {};
    c20 = false;
    return tmp;
  },
  SET_THEME_OVERRIDE: function handleSetThemeOverride(arg0) {
    return handleThemeChange();
  },
  CLEAR_THEME_OVERRIDE: function handleClearThemeOverride() {
    return handleThemeChange();
  },
  REFRESH_THEME: function handleRefresh() {
    return handleThemeChange();
  }
};
tmp4 = new tmp4(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_settings/ThemeStore.tsx");

export default tmp4;
