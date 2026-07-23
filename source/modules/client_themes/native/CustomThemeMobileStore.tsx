// Module ID: 1322
// Function ID: 15516
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1279, 1278, 1280, 1316, 1281, 662, 1323, 1282, 1324, 566, 686, 2]

// Module 1322 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import dispatcher from "dispatcher";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { PROTO_THEME_MAP_MOBILE } from "SystemThemeState";
import { UserSettingsTypes } from "MAX_FAVORITES";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function reset() {
  let c2;
  let c3;
  let c4;
}
function handleSyncedModeChange() {
  return require(1323) /* isPerModeThemingActive */.isPerModeThemingActive(isSyncedModeThemesEnabled);
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
    UNSET = require(1282) /* _callSuper */.Theme.UNSET;
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
  return require(1324) /* useIsMobileVisualRefreshExperimentEnabled */.isMobileVisualRefreshEnabled("CustomThemeMobileStore");
}
function getEffective() {
  let obj = require(1323) /* isPerModeThemingActive */;
  obj = {};
  if (obj.isPerModeThemingActive(isSyncedModeThemesEnabled)) {
    obj.baseTheme = syncedClientTheme.theme;
    syncedClientTheme = syncedClientTheme.getSyncedClientTheme(syncedClientTheme.systemTheme);
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
let tmp2 = ((PersistedStore) => {
  class CustomThemeMobileStore {
    constructor() {
      self = this;
      tmp = outer1_5(this, CustomThemeMobileStore);
      obj = outer1_8(CustomThemeMobileStore);
      tmp2 = outer1_7;
      if (outer1_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_8;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_8(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(CustomThemeMobileStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let outer1_2;
      let outer1_3;
      const self = this;
      if (null != arg0) {
        ({ theme: outer1_2, customTheme: outer1_3 } = arg0);
      }
      self.waitFor(outer1_10, outer1_11, outer1_12, outer1_13);
      const items = [outer1_10];
      self.syncWith(items, outer1_17);
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "getState",
    value() {
      const obj = {};
      if (outer1_20(outer1_2, outer1_3)) {
        obj.theme = outer1_2;
        obj.customTheme = outer1_3;
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
      const tmp2 = outer1_22();
      if (outer1_20(tmp2.baseTheme, tmp2.customTheme)) {
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
      const tmp2 = outer1_22();
      if (outer1_20(tmp2.baseTheme, tmp2.customTheme)) {
        baseTheme = tmp2.baseTheme;
      }
      return baseTheme;
    }
  };
  items[4] = {
    key: "getPreviewTheme",
    value() {
      return outer1_4;
    }
  };
  items[5] = {
    key: "getCustomThemeDisplaySettings",
    value() {
      if (undefined !== outer1_4) {
        return outer1_4;
      } else {
        const tmp2 = outer1_22();
        let tmp4;
        if (outer1_20(tmp2.baseTheme, tmp2.customTheme)) {
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
      const tmp = outer1_22();
      return outer1_20(tmp.baseTheme, tmp.customTheme);
    }
  };
  return callback(CustomThemeMobileStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "CustomThemeMobileStore";
tmp2.persistKey = "CustomThemeMobileStore";
tmp2 = new tmp2(require("dispatcher"), {
  UPDATE_CUSTOM_THEME: function handleUpdateCustomTheme(arg0) {
    let closure_2;
    let closure_3;
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
    let c4;
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
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/client_themes/native/CustomThemeMobileStore.tsx");

export default tmp2;
