// Module ID: 3942
// Function ID: 32488
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1279, 1278, 1280, 1316, 1352, 1348, 1849, 3943, 1281, 1324, 3946, 1334, 3969, 3776, 3803, 1323, 3972, 3973, 566, 686, 2]

// Module 3942 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed";
import conceal from "conceal";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { isGuildTextChannelType } from "_callSuper";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import { BACKGROUND_GRADIENT_PRESETS_MAP as closure_15 } from "items1";
import { SystemThemeState } from "SystemThemeState";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isSyncedModeThemesEnabled() {
  return require(1324) /* useIsMobileVisualRefreshExperimentEnabled */.isMobileVisualRefreshEnabled("ClientThemesBackgroundStore");
}
function reset() {
  if (c19) {
    let c17;
  }
  let c20 = false;
}
function handleUserStoreChange() {
  const tmp = !importDefault(3776).canUseClientThemes(currentUser.getCurrentUser());
  if (tmp === c19) {
    return false;
  } else {
    c19 = tmp;
  }
  const obj = importDefault(3776);
}
function handleSelectivelySyncedStoreChange() {
  if (closure_8.shouldSync("appearance")) {
    const ClientThemeSettings = require(3803) /* explicitContentFromProto */.ClientThemeSettings;
    const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
    if (null == backgroundGradientPresetId) {
      if (null == c17) {
        return false;
      } else {
        c17 = undefined;
      }
    } else if (dependencyMap[backgroundGradientPresetId] === c17) {
      return false;
    } else {
      c17 = tmp5;
    }
  } else {
    return false;
  }
}
function handleSyncedModeChange() {
  return require(1323) /* isPerModeThemingActive */.isPerModeThemingActive(isSyncedModeThemesEnabled);
}
function handleSameAsDeviceThemeToggle() {
  return isSyncedModeThemesEnabled();
}
function handleUserSettingsProtoStoreUpdate() {
  if (closure_8.shouldSync("appearance")) {
    const ClientThemeSettings = require(3803) /* explicitContentFromProto */.ClientThemeSettings;
    const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
    let result = useSystemTheme.useSystemTheme !== SystemThemeState.ON;
    if (!result) {
      result = null == backgroundGradientPresetId;
    }
    if (!result) {
      result = sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled();
    }
    if (!result) {
      require(3972) /* setSystemTheme */.setUseSystemTheme(SystemThemeState.OFF);
      const obj = require(3972) /* setSystemTheme */;
    }
    if (null != backgroundGradientPresetId) {
      let id;
      if (null != id) {
        id = id.id;
      }
      let id1;
      if (null != dependencyMap[backgroundGradientPresetId]) {
        id1 = tmp15.id;
      }
      if (!tmp18) {
        id = tmp15;
      }
      tmp18 = null == dependencyMap[backgroundGradientPresetId] || id === id1;
    } else if (null != id) {
      id = undefined;
    }
  } else {
    return false;
  }
}
let c19 = true;
let c20 = false;
let tmp2 = ((PersistedStore) => {
  class ClientThemesBackgroundStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, ClientThemesBackgroundStore);
      items1 = [...items];
      obj = outer1_6(ClientThemesBackgroundStore);
      tmp2 = outer1_5;
      if (outer1_21()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      items2 = [];
      items2[0] = (gradientPreset) => {
        const obj = {};
        let id;
        if (null != gradientPreset) {
          gradientPreset = gradientPreset.gradientPreset;
          if (null != gradientPreset) {
            id = gradientPreset.id;
          }
        }
        obj.gradientPresetId = id;
        return obj;
      };
      tmp2Result.migrations = items2;
      return tmp2Result;
    }
  }
  callback2(ClientThemesBackgroundStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(gradientPresetId) {
      const self = this;
      if (null != gradientPresetId) {
        gradientPresetId = undefined;
        if (null != gradientPresetId) {
          gradientPresetId = gradientPresetId.gradientPresetId;
        }
        let tmp2;
        if (null != gradientPresetId) {
          tmp2 = outer1_15[gradientPresetId.gradientPresetId];
        }
        const outer1_17 = tmp2;
      }
      self.waitFor(outer1_13, outer1_8, outer1_9, outer1_10, outer1_11, outer1_14);
      const items = [outer1_14];
      self.syncWith(items, outer1_23);
      const items1 = [outer1_8];
      self.syncWith(items1, outer1_24);
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "getState",
    value() {
      if (outer1_19) {
        let obj = {};
      } else {
        obj = {};
        let id;
        if (null != outer1_17) {
          id = outer1_17.id;
        }
        obj.gradientPresetId = id;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "gradientPreset",
    get() {
      if (obj.isPerModeThemingActive(outer1_22)) {
        const syncedClientTheme = outer1_9.getSyncedClientTheme(outer1_9.systemTheme);
        let prop;
        if (null != syncedClientTheme) {
          prop = syncedClientTheme.backgroundGradientPresetId;
        }
        let tmp7;
        if (null != prop) {
          tmp7 = outer1_15[prop];
        }
        return tmp7;
      } else {
        return outer1_17;
      }
      obj = ClientThemesBackgroundStore(outer1_2[20]);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLinearGradient",
    value() {
      let linearGradientForBackgroundGradient = null;
      if (null != this.gradientPreset) {
        linearGradientForBackgroundGradient = ClientThemesBackgroundStore(outer1_2[22]).getLinearGradientForBackgroundGradient(tmp.gradientPreset);
        const obj = ClientThemesBackgroundStore(outer1_2[22]);
      }
      return linearGradientForBackgroundGradient;
    }
  };
  items[4] = {
    key: "isPreview",
    get() {
      return outer1_19;
    }
  };
  items[5] = {
    key: "isCoachmark",
    get() {
      return outer1_20;
    }
  };
  items[6] = {
    key: "mobilePendingThemeIndex",
    get() {
      return outer1_18;
    }
  };
  return callback(ClientThemesBackgroundStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "ClientThemesBackgroundStore";
tmp2.persistKey = "ClientThemesBackgroundStore";
tmp2 = new tmp2(require("dispatcher"), {
  UPDATE_BACKGROUND_GRADIENT_PRESET: function handleUpdateBackgroundGradientPreset(presetId) {
    presetId = presetId.presetId;
    let tmp;
    if (null != presetId) {
      tmp = dependencyMap[presetId];
    }
    let closure_17 = tmp;
  },
  UPDATE_MOBILE_PENDING_THEME_INDEX: function handleUpdateMobilePendingThemeIndex(mobileThemesIndex) {
    mobileThemesIndex = mobileThemesIndex.mobileThemesIndex;
    let tmp;
    if (null != mobileThemesIndex) {
      tmp = mobileThemesIndex;
    }
    let closure_18 = tmp;
  },
  RESET_PREVIEW_CLIENT_THEME: function handleResetPreviewClientTheme() {
    let c17;
  },
  CLIENT_THEMES_EDITOR_CLOSE: reset,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != channelId.guildId) {
        if (!obj2.UNSAFE_isDismissibleContentDismissed(require(1334) /* DismissibleContent */.DismissibleContent.CLIENT_THEMES_COACHMARK)) {
          if (obj.ageEligibleForPremiumUpsell(tmp)) {
            channel = channel.getChannel(channelId);
            let tmp6 = null != channel;
            if (tmp6) {
              tmp6 = isGuildTextChannelType(channel.type);
            }
            if (tmp6) {
              let c20 = true;
            }
          }
          obj = require(3969) /* conceal */;
        }
        obj2 = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
      }
    }
  },
  LOGOUT: reset,
  CACHE_LOADED: handleUserSettingsProtoStoreUpdate,
  CONNECTION_OPEN: handleUserSettingsProtoStoreUpdate,
  OVERLAY_INITIALIZE: handleUserSettingsProtoStoreUpdate,
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: handleUserSettingsProtoStoreUpdate,
  UNSYNCED_USER_SETTINGS_UPDATE: handleUserSettingsProtoStoreUpdate,
  USER_SETTINGS_PROTO_UPDATE: handleUserSettingsProtoStoreUpdate,
  SYSTEM_THEME_CHANGE: handleSyncedModeChange,
  UPDATE_SYNCED_CLIENT_THEME: handleSyncedModeChange,
  SET_SAME_AS_DEVICE_THEME_ENABLED: handleSameAsDeviceThemeToggle,
  CLEAR_SYNCED_CLIENT_THEMES: handleSameAsDeviceThemeToggle
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/client_themes/ClientThemesBackgroundStore.tsx");

export default tmp2;
