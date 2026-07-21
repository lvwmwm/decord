// Module ID: 1278
// Function ID: 14406
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1278 (_isNativeReflectConstruct)
let THEME_PREFERENCES_MOBILE;
let THEME_PREFERENCES_WEB_REFRESH;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleThemeChange() {
  const tmp = importDefault(dependencyMap[12])(tmp3, THEME_PREFERENCES_MOBILE);
  let flag = tmp !== closure_18;
  if (flag) {
    closure_18 = tmp;
    importDefault(dependencyMap[13])(closure_18);
    flag = true;
    const tmp3 = dependencyMap;
  }
  return flag;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ SystemTheme: closure_11, THEME_PREFERENCES_MOBILE, THEME_PREFERENCES_WEB_REFRESH } = arg1(dependencyMap[8]));
const UserSettingsDelay = arg1(dependencyMap[9]).UserSettingsDelay;
const ThemeTypes = arg1(dependencyMap[10]).ThemeTypes;
let obj = { UNSET: 0, [0]: "UNSET", SET: 1, [1]: "SET" };
const UNSET = obj.UNSET;
const tmp3 = importDefault(dependencyMap[11])();
let closure_18 = THEME_PREFERENCES_MOBILE[tmp3];
let closure_19 = {};
let closure_20 = false;
let tmp4 = (PersistedStore) => {
  class ThemeStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ThemeStore);
      obj = closure_6(ThemeStore);
      tmp2 = closure_5;
      if (closure_21()) {
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
  const arg1 = ThemeStore;
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
        const SET = constants.SET;
        theme = theme.theme;
        callback(closure_2[13])(theme);
        if (null != theme.preferences) {
          const preferences = theme.preferences;
        }
        if (null != theme.syncedClientThemes) {
          const syncedClientThemes = theme.syncedClientThemes;
        }
        if (null != theme.syncedThemesEnabled) {
          const syncedThemesEnabled = theme.syncedThemesEnabled;
        }
      }
      self.waitFor(closure_9, closure_8, closure_10);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getState",
    value() {
      return { theme: this.theme, preferences: closure_16, syncedClientThemes: closure_19, syncedThemesEnabled: closure_20, status: closure_15 };
    }
  };
  items[1] = obj;
  obj = {
    key: "theme",
    get() {
      return closure_18;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "systemTheme",
    get() {
      return closure_17;
    }
  };
  items[4] = {
    key: "themePreferenceForSystemTheme",
    value(arg0) {
      return closure_16[arg0];
    }
  };
  items[5] = {
    key: "getSyncedClientTheme",
    value(arg0) {
      return closure_19[arg0];
    }
  };
  items[6] = {
    key: "isSameAsDeviceThemeEnabled",
    value() {
      return closure_20;
    }
  };
  return callback(ThemeStore, items);
}(importDefault(dependencyMap[14]).PersistedStore);
tmp4.displayName = "ThemeStore";
tmp4.persistKey = "ThemeStore";
const items = [
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
      if (preferences.preferences[closure_11.DARK] === ThemeTypes.DARK) {
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
    function migrateDarkSidebarToProto() {
      if (darkSidebar.darkSidebar) {
        const appearance = settings.settings.appearance;
        let darkSidebar;
        if (null != appearance) {
          darkSidebar = appearance.darkSidebar;
        }
        if (!darkSidebar) {
          const PreloadedUserSettingsActionCreators = callback(closure_2[15]).PreloadedUserSettingsActionCreators;
          PreloadedUserSettingsActionCreators.updateAsync("appearance", (arg0) => {
            arg0.darkSidebar = true;
          }, constants.INFREQUENT_USER_ACTION);
        }
        callback2(closure_2[16]).wait(() => {
          callback(closure_2[16]).dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { darkSidebar: false } });
        });
        const obj = callback2(closure_2[16]);
      }
    }();
    return handleThemeChange();
  },
  LOGOUT: function handleLogOut(isSwitchingAccount) {
    let closure_19 = {};
    let closure_20 = false;
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
    return handleThemeChange();
  },
  UPDATE_THEME_PREFERENCES: function handleUpdateThemePreferences(preferences) {
    const merged = Object.assign(THEME_PREFERENCES_MOBILE);
    const merged1 = Object.assign(preferences.preferences);
    const THEME_PREFERENCES_MOBILE = {};
    return handleThemeChange();
  },
  UPDATE_SYNCED_CLIENT_THEME: function handleUpdateSyncedClientTheme(systemTheme) {
    const obj = {};
    const merged = Object.assign(closure_19);
    obj[systemTheme.systemTheme] = systemTheme.clientTheme;
    closure_19 = obj;
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
    let tmp = closure_20;
    if (!closure_20) {
      tmp = null != closure_19[closure_11.LIGHT];
    }
    if (!tmp) {
      tmp = null != closure_19[closure_11.DARK];
    }
    closure_19 = {};
    closure_20 = false;
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
tmp4 = new tmp4(importDefault(dependencyMap[16]), obj);
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_settings/ThemeStore.tsx");

export default tmp4;
