// Module ID: 1322
// Function ID: 15510
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1322 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function reset() {
  let closure_2;
  let closure_3;
  let closure_4;
}
function handleSyncedModeChange() {
  return arg1(dependencyMap[11]).isPerModeThemingActive(isSyncedModeThemesEnabled);
}
function handleSameAsDeviceThemeToggle() {
  return isSyncedModeThemesEnabled();
}
function loadFromProtoSettings() {
  if (syncThemesEnabled()) {
    const appearance = closure_13.settings.appearance;
    if (null != appearance) {
      updateThemeSettings(appearance);
    }
  }
}
function handleSelectivelySyncedUserSettingsUpdate() {
  if (syncThemesEnabled()) {
    const appearance = closure_13.settings.appearance;
    if (null != appearance) {
      updateThemeSettings(appearance);
    }
  }
}
function syncThemesEnabled() {
  return closure_10.shouldSync("appearance");
}
function updateThemeSettings(appearance) {
  let UNSET = appearance.theme;
  if (null == UNSET) {
    UNSET = arg1(dependencyMap[12]).Theme.UNSET;
  }
  let closure_2 = PROTO_THEME_MAP_MOBILE[UNSET];
  const clientThemeSettings = appearance.clientThemeSettings;
  let prop;
  if (null != clientThemeSettings) {
    prop = clientThemeSettings.customUserThemeSettings;
  }
}
function isValidCustom(arg0, colors) {
  let tmp = null != arg0 && null != colors;
  if (tmp) {
    tmp = colors.colors.length > 0;
  }
  return tmp;
}
function isSyncedModeThemesEnabled() {
  return arg1(dependencyMap[13]).isMobileVisualRefreshEnabled("CustomThemeMobileStore");
}
function getEffective() {
  let obj = arg1(dependencyMap[11]);
  obj = {};
  if (obj.isPerModeThemingActive(isSyncedModeThemesEnabled)) {
    obj.baseTheme = syncedClientTheme.theme;
    const syncedClientTheme = syncedClientTheme.getSyncedClientTheme(syncedClientTheme.systemTheme);
    let prop;
    if (null != syncedClientTheme) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    obj.customTheme = prop;
    let tmp3 = obj;
  } else {
    obj.baseTheme = closure_2;
    obj.customTheme = closure_3;
    tmp3 = obj;
  }
  return tmp3;
}
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
const PROTO_THEME_MAP_MOBILE = arg1(dependencyMap[9]).PROTO_THEME_MAP_MOBILE;
const UserSettingsTypes = arg1(dependencyMap[10]).UserSettingsTypes;
let tmp2 = (PersistedStore) => {
  class CustomThemeMobileStore {
    constructor() {
      self = this;
      tmp = closure_5(this, CustomThemeMobileStore);
      obj = closure_8(CustomThemeMobileStore);
      tmp2 = closure_7;
      if (closure_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_8;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_8(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = CustomThemeMobileStore;
  callback2(CustomThemeMobileStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      if (null != arg0) {
        ({ theme: closure_2, customTheme: closure_3 } = arg0);
      }
      self.waitFor(closure_10, closure_11, closure_12, closure_13);
      const items = [closure_10];
      self.syncWith(items, closure_17);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getState",
    value() {
      const obj = {};
      if (callback4(closure_2, closure_3)) {
        obj.theme = closure_2;
        obj.customTheme = closure_3;
        let tmp = obj;
      } else {
        obj.theme = undefined;
        obj.customTheme = undefined;
        tmp = obj;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCustomTheme",
    value() {
      let customTheme;
      const tmp2 = callback5();
      if (callback4(tmp2.baseTheme, tmp2.customTheme)) {
        customTheme = tmp2.customTheme;
      }
      return customTheme;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getBaseTheme",
    value() {
      let baseTheme;
      const tmp2 = callback5();
      if (callback4(tmp2.baseTheme, tmp2.customTheme)) {
        baseTheme = tmp2.baseTheme;
      }
      return baseTheme;
    }
  };
  items[4] = {
    key: "getPreviewTheme",
    value() {
      return closure_4;
    }
  };
  items[5] = {
    key: "getCustomThemeDisplaySettings",
    value() {
      if (undefined !== closure_4) {
        return closure_4;
      } else {
        const tmp2 = callback5();
        let tmp4;
        if (callback4(tmp2.baseTheme, tmp2.customTheme)) {
          const obj = {};
          ({ baseTheme: obj.baseTheme, customTheme: obj.customTheme } = tmp2);
          tmp4 = obj;
        }
        return tmp4;
      }
    }
  };
  items[6] = {
    key: "hasCustomTheme",
    value() {
      const tmp = callback5();
      return callback4(tmp.baseTheme, tmp.customTheme);
    }
  };
  return callback(CustomThemeMobileStore, items);
}(importDefault(dependencyMap[14]).PersistedStore);
tmp2.displayName = "CustomThemeMobileStore";
tmp2.persistKey = "CustomThemeMobileStore";
tmp2 = new tmp2(importDefault(dependencyMap[15]), {
  UPDATE_CUSTOM_THEME: function handleUpdateCustomTheme(arg0) {
    ({ customTheme: closure_3, theme: closure_2 } = arg0);
  },
  SYSTEM_THEME_CHANGE: handleSyncedModeChange,
  UPDATE_SYNCED_CLIENT_THEME: handleSyncedModeChange,
  UPDATE_THEME_PREFERENCES: handleSyncedModeChange,
  SET_SAME_AS_DEVICE_THEME_ENABLED: handleSameAsDeviceThemeToggle,
  CLEAR_SYNCED_CLIENT_THEMES: handleSameAsDeviceThemeToggle,
  PREVIEW_CUSTOM_THEME: function previewCustomTheme(previewCustomTheme) {
    previewCustomTheme = previewCustomTheme.previewCustomTheme;
  },
  CLEAR_PREVIEW_CUSTOM_THEME: function clearPreviewTheme() {
    let closure_4;
  },
  RESET_CUSTOM_THEME: reset,
  CACHE_LOADED: loadFromProtoSettings,
  POST_CONNECTION_OPEN: loadFromProtoSettings,
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    settings = settings.settings;
    if (syncThemesEnabled()) {
      let tmp3 = null;
      if (settings.type === UserSettingsTypes.PRELOADED_USER_SETTINGS) {
        const proto = settings.proto;
        let appearance;
        if (null != proto) {
          appearance = proto.appearance;
        }
        tmp3 = appearance;
      }
      if (null != tmp3) {
        updateThemeSettings(tmp3);
      }
    }
  },
  LOGOUT: reset
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/client_themes/native/CustomThemeMobileStore.tsx");

export default tmp2;
