// Module ID: 1192
// Function ID: 1193
// Name: ThemeStore
// Dependencies: [1193, 1194, 1231, 1195, 1082, 1072, 582, 1230, 1237, 16587, 504, 5136, 572, 2]

// Module 1192 (ThemeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import mapValuesDefault from "mapValues" /* 582 */;
import Constants from "Constants" /* 1072 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import getSystemThemeDefault from "getSystemTheme" /* 1230 */;
import resolveThemeDefault from "resolveTheme" /* 1237 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 5136 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1193 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ThemeConstants from "ThemeConstants" /* 1195 */;
import size from "module_2" /* 2 */;

let syncedClientThemes, syncedThemesEnabled;

let THEME_PREFERENCES_MOBILE;
let THEME_PREFERENCES_WEB_REFRESH;
let metroRequire;
let tmp;
const updateBackgroundColorDefault = tmp(16587);
function handleThemeChange() {
  const tmp3 = resolveThemeDefault(systemTheme, obj2, c17);
  DARK = ThemeTypes.DARK;
  let hasItem = typeof tmp3 === "string";
  if (typeof tmp3 === "string") {
    hasItem = set.has(tmp3);
  }
  if (hasItem) {
    DARK = tmp3;
  }
  let flag = DARK !== DARK;
  if (flag) {
    updateBackgroundColorDefault(DARK);
    flag = true;
  }
  return flag;
}
({ SystemTheme: metroRequire, THEME_PREFERENCES_MOBILE, THEME_PREFERENCES_WEB_REFRESH } = ThemeConstants);
const UserSettingsDelay = UserSettingsConstants.UserSettingsDelay;
const ThemeTypes = Constants.ThemeTypes;
let obj = { UNSET: 0, [0]: "UNSET", SET: 1, [1]: "SET" };
const UNSET = obj.UNSET;
const set = new Set(Object.values(ThemeTypes));
let obj2 = {};
let merged = Object.assign(THEME_PREFERENCES_MOBILE);
let tmp5 = getSystemThemeDefault();
let systemTheme = tmp5;
let DARK = obj2[tmp5];
const authStore3 = {};
let c17 = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class ThemeStore extends PersistedStore {
  initialize(theme) {
    let theme1;
    if (theme != null) {
      theme1 = theme.theme;
    }
    if (null != theme1) {
      let closure_13;
      const SET = obj.SET;
      if (null != theme.preferences) {
        const preferences = theme.preferences;
        closure_13 = mapValuesDefault(THEME_PREFERENCES_MOBILE, (arg0, arg1) => {
          let hasItem = typeof tmp === "string";
          if (typeof preferences2[arg1] === "string") {
            hasItem = set.has(tmp);
          }
          let tmp3 = arg0;
          if (hasItem) {
            tmp3 = tmp;
          }
          return tmp3;
        });
      }
      theme = theme.theme;
      DARK = closure_13[constants.DARK];
      if (DARK === undefined) {
        DARK = ThemeTypes.DARK;
      }
      let hasItem = typeof theme === "string";
      if (typeof theme === "string") {
        hasItem = set.has(theme);
      }
      if (hasItem) {
        DARK = theme;
      }
      updateBackgroundColorDefault(DARK);
      if (null != theme.syncedClientThemes) {
        syncedClientThemes = theme.syncedClientThemes;
      }
      if (null != theme.syncedThemesEnabled) {
        syncedThemesEnabled = theme.syncedThemesEnabled;
      }
    }
    this.waitFor(UnsyncedUserSettingsStore, SelectivelySyncedUserSettingsStore, UserSettingsProtoStore);
  }
  getState() {
    return { theme: this.theme, preferences: obj2, syncedClientThemes, syncedThemesEnabled, status: UNSET };
  }
  themePreferenceForSystemTheme(item10084) {
    return obj2[item10084];
  }
  getSyncedClientTheme(systemTheme) {
    return syncedClientThemes[systemTheme];
  }
  isSameAsDeviceThemeEnabled() {
    return c17;
  }
}
const prototype = ThemeStore.prototype;
Object.defineProperty(prototype, "theme", {
  get: function theme() {
    return DARK;
  },
  set: undefined
});
Object.defineProperty(prototype, "systemTheme", {
  get: function systemTheme() {
    return systemTheme;
  },
  set: undefined
});
ThemeStore.displayName = "ThemeStore";
ThemeStore.persistKey = "ThemeStore";
const items = [
  (theme) => {
    if ("amoled" === theme.theme) {
      theme = ThemeTypes.ONYX;
    } else {
      theme = theme.theme;
    }
    obj = { theme };
    const merged = Object.assign(theme);
    return obj;
  },
  (preferences) => {
    let tmp = preferences;
    if (null != preferences.preferences) {
      tmp = preferences;
      if (preferences.preferences[metroRequire.DARK] === ThemeTypes.ASH) {
        obj = { preferences: obj2 };
        const merged = Object.assign(preferences);
        obj2 = {};
        const merged1 = Object.assign(preferences.preferences);
        obj2[tmp2.DARK] = tmp3.DARK;
        tmp = obj;
      }
    }
    return tmp;
  },
  (preferences) => {
    let theme1;
    if (null == preferences.preferences) {
      preferences = preferences.preferences;
    } else {
      const preferences2 = preferences.preferences;
      const tmp = importDefault;
      let tmp3 = THEME_PREFERENCES_MOBILE;
      preferences = mapValuesDefault(THEME_PREFERENCES_MOBILE, (arg0, arg1) => {
        let hasItem = typeof tmp === "string";
        if (typeof preferences2[arg1] === "string") {
          hasItem = set.has(tmp);
        }
        let tmp3 = arg0;
        if (hasItem) {
          tmp3 = tmp;
        }
        return tmp3;
      });
    }
    if (null == preferences.theme) {
      theme1 = preferences.theme;
    } else {
      const theme = preferences.theme;
      theme1 = undefined;
      if (preferences != null) {
        theme1 = preferences[constants.DARK];
      }
      if (theme1 === undefined) {
        theme1 = ThemeTypes.DARK;
      }
      let hasItem = typeof theme === "string";
      if (typeof theme === "string") {
        hasItem = set.has(theme);
      }
      if (hasItem) {
        theme1 = theme;
      }
    }
    obj = { theme: theme1, preferences };
    const merged = Object.assign(preferences);
    return obj;
  }
];
ThemeStore.migrations = items;
const obj3 = {
  CACHE_LOADED: handleThemeChange,
  CONNECTION_OPEN: function handleConnectionOpen() {
    if (UnsyncedUserSettingsStore.darkSidebar) {
      const appearance = UserSettingsProtoStore.settings.appearance;
      let darkSidebar;
      if (appearance != null) {
        darkSidebar = appearance.darkSidebar;
      }
      if (!darkSidebar) {
        const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
        PreloadedUserSettingsActionCreators.updateAsync("appearance", async (arg0) => {
          arg0.darkSidebar = true;
        }, UserSettingsDelay.INFREQUENT_USER_ACTION);
      }
      obj2 = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { darkSidebar: false } };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
    const tmp13 = resolveThemeDefault(systemTheme, obj2, c17);
    DARK = ThemeTypes.DARK;
    let hasItem = typeof tmp13 === "string";
    if (typeof tmp13 === "string") {
      hasItem = set.has(tmp13);
    }
    if (hasItem) {
      DARK = tmp13;
    }
    let flag = DARK !== DARK;
    if (flag) {
      updateBackgroundColorDefault(DARK);
      flag = true;
    }
    return flag;
  },
  LOGOUT: function handleLogOut(isSwitchingAccount) {
    let closure_16 = {};
    let c17 = false;
    let tmp = !isSwitchingAccount.isSwitchingAccount;
    if (tmp) {
      const tmp7 = resolveThemeDefault(systemTheme, obj2, c17);
      DARK = ThemeTypes.DARK;
      let hasItem = typeof tmp7 === "string";
      const tmp2 = importDefault;
      if (typeof tmp7 === "string") {
        hasItem = set.has(tmp7);
      }
      if (hasItem) {
        DARK = tmp7;
      }
      let flag = DARK !== DARK;
      if (flag) {
        tmp2(16587)(DARK);
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  },
  OVERLAY_INITIALIZE: handleThemeChange,
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function handleSelectivelySyncedUserSettingsUpdate() {
    const tmp3 = resolveThemeDefault(systemTheme, obj2, c17);
    DARK = ThemeTypes.DARK;
    let hasItem = typeof tmp3 === "string";
    if (typeof tmp3 === "string") {
      hasItem = set.has(tmp3);
    }
    if (hasItem) {
      DARK = tmp3;
    }
    let flag = DARK !== DARK;
    if (flag) {
      updateBackgroundColorDefault(DARK);
      flag = true;
    }
    return flag;
  },
  UNSYNCED_USER_SETTINGS_UPDATE: handleThemeChange,
  USER_SETTINGS_PROTO_UPDATE: handleThemeChange,
  RESET_PREVIEW_CLIENT_THEME: handleThemeChange,
  SYSTEM_THEME_CHANGE: function handleSystemThemeChange(systemTheme) {
    systemTheme = systemTheme.systemTheme;
    const tmp3 = resolveThemeDefault(systemTheme, obj2, c17);
    DARK = ThemeTypes.DARK;
    let hasItem = typeof tmp3 === "string";
    if (typeof tmp3 === "string") {
      hasItem = set.has(tmp3);
    }
    if (hasItem) {
      DARK = tmp3;
    }
    let flag = DARK !== DARK;
    if (flag) {
      updateBackgroundColorDefault(DARK);
      flag = true;
    }
    return flag;
  },
  UPDATE_THEME_PREFERENCES: function handleUpdateThemePreferences(preferences) {
    const merged = Object.assign(closure_13);
    const merged1 = Object.assign(preferences.preferences);
    closure_13 = mapValuesDefault(THEME_PREFERENCES_MOBILE, (arg0, arg1) => {
      let hasItem = typeof tmp === "string";
      if (typeof preferences2[arg1] === "string") {
        hasItem = set.has(tmp);
      }
      let tmp3 = arg0;
      if (hasItem) {
        tmp3 = tmp;
      }
      return tmp3;
    });
    const tmp5 = resolveThemeDefault(systemTheme, closure_13, c17);
    DARK = ThemeTypes.DARK;
    let hasItem = typeof tmp5 === "string";
    if (typeof tmp5 === "string") {
      hasItem = set.has(tmp5);
    }
    if (hasItem) {
      DARK = tmp5;
    }
    let flag = DARK !== DARK;
    if (flag) {
      updateBackgroundColorDefault(DARK);
      flag = true;
    }
    return flag;
  },
  UPDATE_SYNCED_CLIENT_THEME: function handleUpdateSyncedClientTheme(systemTheme) {
    obj = {};
    const merged = Object.assign(closure_16);
    obj[systemTheme.systemTheme] = systemTheme.clientTheme;
    closure_16 = obj;
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
    const tmp = c17 || null != syncedClientThemes[metroRequire.LIGHT] || null != syncedClientThemes[metroRequire.DARK];
    syncedClientThemes = {};
    c17 = false;
    return tmp;
  },
  SET_THEME_OVERRIDE: function handleSetThemeOverride(arg0) {
    const tmp3 = resolveThemeDefault(systemTheme, obj2, c17);
    DARK = ThemeTypes.DARK;
    let hasItem = typeof tmp3 === "string";
    if (typeof tmp3 === "string") {
      hasItem = set.has(tmp3);
    }
    if (hasItem) {
      DARK = tmp3;
    }
    let flag = DARK !== DARK;
    if (flag) {
      updateBackgroundColorDefault(DARK);
      flag = true;
    }
    return flag;
  },
  CLEAR_THEME_OVERRIDE: function handleClearThemeOverride() {
    const tmp3 = resolveThemeDefault(systemTheme, obj2, c17);
    DARK = ThemeTypes.DARK;
    let hasItem = typeof tmp3 === "string";
    if (typeof tmp3 === "string") {
      hasItem = set.has(tmp3);
    }
    if (hasItem) {
      DARK = tmp3;
    }
    let flag = DARK !== DARK;
    if (flag) {
      updateBackgroundColorDefault(DARK);
      flag = true;
    }
    return flag;
  },
  REFRESH_THEME: function handleRefresh() {
    const tmp3 = resolveThemeDefault(systemTheme, obj2, c17);
    DARK = ThemeTypes.DARK;
    let hasItem = typeof tmp3 === "string";
    if (typeof tmp3 === "string") {
      hasItem = set.has(tmp3);
    }
    if (hasItem) {
      DARK = tmp3;
    }
    let flag = DARK !== DARK;
    if (flag) {
      updateBackgroundColorDefault(DARK);
      flag = true;
    }
    return flag;
  }
};
const themeStore = new ThemeStore(DispatcherDefault, obj3);
const result = size.fileFinishedImporting("modules/user_settings/ThemeStore.tsx");

export default themeStore;
