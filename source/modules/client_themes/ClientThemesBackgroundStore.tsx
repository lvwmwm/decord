// Module ID: 3940
// Function ID: 32480
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 3940 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isSyncedModeThemesEnabled() {
  return arg1(dependencyMap[14]).isMobileVisualRefreshEnabled("ClientThemesBackgroundStore");
}
function reset() {
  if (closure_19) {
    let closure_17;
  }
  let closure_20 = false;
}
function handleUserStoreChange() {
  const tmp = !importDefault(dependencyMap[18]).canUseClientThemes(currentUser.getCurrentUser());
  if (tmp === closure_19) {
    return false;
  } else {
    closure_19 = tmp;
  }
  const obj = importDefault(dependencyMap[18]);
}
function handleSelectivelySyncedStoreChange() {
  if (closure_8.shouldSync("appearance")) {
    const ClientThemeSettings = arg1(dependencyMap[19]).ClientThemeSettings;
    const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
    if (null == backgroundGradientPresetId) {
      if (null == tmp5) {
        return false;
      } else {
        let tmp5;
      }
    } else {
      tmp5 = closure_15[backgroundGradientPresetId];
      if (tmp5 === tmp5) {
        return false;
      }
    }
  } else {
    return false;
  }
}
function handleSyncedModeChange() {
  return arg1(dependencyMap[20]).isPerModeThemingActive(isSyncedModeThemesEnabled);
}
function handleSameAsDeviceThemeToggle() {
  return isSyncedModeThemesEnabled();
}
function handleUserSettingsProtoStoreUpdate() {
  if (closure_8.shouldSync("appearance")) {
    const ClientThemeSettings = arg1(dependencyMap[19]).ClientThemeSettings;
    const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
    let result = useSystemTheme.useSystemTheme !== SystemThemeState.ON;
    if (!result) {
      result = null == backgroundGradientPresetId;
    }
    if (!result) {
      result = sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled();
    }
    if (!result) {
      arg1(dependencyMap[21]).setUseSystemTheme(SystemThemeState.OFF);
      const obj = arg1(dependencyMap[21]);
    }
    if (null != backgroundGradientPresetId) {
      let id;
      if (null != id) {
        id = id.id;
      }
      let id1;
      if (null != closure_15[backgroundGradientPresetId]) {
        id1 = tmp15.id;
      }
      if (!tmp18) {
        id = tmp15;
      }
      const tmp18 = null == closure_15[backgroundGradientPresetId] || id === id1;
    } else if (null != id) {
      id = undefined;
    }
  } else {
    return false;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const isGuildTextChannelType = arg1(dependencyMap[9]).isGuildTextChannelType;
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = arg1(dependencyMap[12]).BACKGROUND_GRADIENT_PRESETS_MAP;
const SystemThemeState = arg1(dependencyMap[13]).SystemThemeState;
let closure_19 = true;
let closure_20 = false;
let tmp2 = (PersistedStore) => {
  class ClientThemesBackgroundStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, ClientThemesBackgroundStore);
      items1 = [...items];
      obj = closure_6(ClientThemesBackgroundStore);
      tmp2 = closure_5;
      if (closure_21()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
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
  const arg1 = ClientThemesBackgroundStore;
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
          tmp2 = closure_15[gradientPresetId.gradientPresetId];
        }
      }
      self.waitFor(closure_13, closure_8, closure_9, closure_10, closure_11, closure_14);
      const items = [closure_14];
      self.syncWith(items, closure_23);
      const items1 = [closure_8];
      self.syncWith(items1, closure_24);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getState",
    value() {
      if (closure_19) {
        let obj = {};
      } else {
        obj = {};
        let id;
        if (null != id) {
          id = id.id;
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
      if (obj.isPerModeThemingActive(closure_22)) {
        const syncedClientTheme = syncedClientTheme.getSyncedClientTheme(syncedClientTheme.systemTheme);
        let prop;
        if (null != syncedClientTheme) {
          prop = syncedClientTheme.backgroundGradientPresetId;
        }
        let tmp7;
        if (null != prop) {
          tmp7 = closure_15[prop];
        }
        return tmp7;
      } else {
        return closure_17;
      }
      const obj = ClientThemesBackgroundStore(closure_2[20]);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLinearGradient",
    value() {
      let linearGradientForBackgroundGradient = null;
      if (null != this.gradientPreset) {
        linearGradientForBackgroundGradient = ClientThemesBackgroundStore(closure_2[22]).getLinearGradientForBackgroundGradient(tmp.gradientPreset);
        const obj = ClientThemesBackgroundStore(closure_2[22]);
      }
      return linearGradientForBackgroundGradient;
    }
  };
  items[4] = {
    key: "isPreview",
    get() {
      return closure_19;
    }
  };
  items[5] = {
    key: "isCoachmark",
    get() {
      return closure_20;
    }
  };
  items[6] = {
    key: "mobilePendingThemeIndex",
    get() {
      return closure_18;
    }
  };
  return callback(ClientThemesBackgroundStore, items);
}(importDefault(dependencyMap[23]).PersistedStore);
tmp2.displayName = "ClientThemesBackgroundStore";
tmp2.persistKey = "ClientThemesBackgroundStore";
tmp2 = new tmp2(importDefault(dependencyMap[24]), {
  UPDATE_BACKGROUND_GRADIENT_PRESET: function handleUpdateBackgroundGradientPreset(presetId) {
    presetId = presetId.presetId;
    let tmp;
    if (null != presetId) {
      tmp = closure_15[presetId];
    }
  },
  UPDATE_MOBILE_PENDING_THEME_INDEX: function handleUpdateMobilePendingThemeIndex(mobileThemesIndex) {
    mobileThemesIndex = mobileThemesIndex.mobileThemesIndex;
    let tmp;
    if (null != mobileThemesIndex) {
      tmp = mobileThemesIndex;
    }
  },
  RESET_PREVIEW_CLIENT_THEME: function handleResetPreviewClientTheme() {
    let closure_17;
  },
  CLIENT_THEMES_EDITOR_CLOSE: reset,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != channelId.guildId) {
        if (!obj2.UNSAFE_isDismissibleContentDismissed(arg1(dependencyMap[16]).DismissibleContent.CLIENT_THEMES_COACHMARK)) {
          if (obj.ageEligibleForPremiumUpsell(tmp)) {
            const channel = channel.getChannel(channelId);
            let tmp6 = null != channel;
            if (tmp6) {
              tmp6 = isGuildTextChannelType(channel.type);
            }
            if (tmp6) {
              let closure_20 = true;
            }
          }
          const obj = arg1(dependencyMap[17]);
        }
        const obj2 = arg1(dependencyMap[15]);
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
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/client_themes/ClientThemesBackgroundStore.tsx");

export default tmp2;
