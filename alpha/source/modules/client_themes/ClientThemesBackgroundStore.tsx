// Module ID: 4995
// Function ID: 4996
// Name: ClientThemesBackgroundStore
// Dependencies: [1208, 1207, 1209, 1246, 4827, 4823, 1392, 1255, 4996, 1210, 4998, 4999, 4799, 5001, 4807, 5025, 5028, 2053, 5035, 5036, 504, 1254, 584, 2]

// Module 4995 (ClientThemesBackgroundStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ThemeConstants from "ThemeConstants" /* 1210 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1254 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1255 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2053 */;
import dismissible_content from "dismissible_content" /* 4807 */;
import ChannelRecord from "ChannelRecord" /* 4827 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4996 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5001 */;
import ThemeActionCreators from "ThemeActionCreators" /* 5036 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1208 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1209 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let user;

function getAppliedHexagonCampaignPreset() {
  const ClientThemeSettings = require("UserSettings").ClientThemeSettings;
  const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
  let tmp3;
  const obj = require("HexagonCampaignUtils");
  if (obj.isHexagonCampaignClientThemePreset(backgroundGradientPresetId)) {
    let tmp5;
    if (null != backgroundGradientPresetId) {
      let tmp8;
      if (null != closure_12[backgroundGradientPresetId]) {
        const tmpResult = require("HexagonCampaignUtils");
        const result = tmpResult.isHexagonCampaignClientThemePreset(tmp7.id);
        let tmp10 = !result;
        if (result) {
          tmp10 = null == UserStore.getCurrentUser();
        }
        if (!tmp10) {
          const tmpResult2 = require("HexagonCampaignPerkAvailability");
          tmp10 = !tmpResult2.isHexagonCampaignPerkExpiredForCurrentUser(HexagonCampaignPerk.CLIENT_THEME);
        }
        if (tmp10) {
          tmp8 = tmp7;
        }
      }
      tmp5 = tmp8;
    }
    tmp3 = tmp5;
  }
  return tmp3;
}
function reset() {
  const tmp = closure_15;
  if (tmp) {
    let closure_3 = getAppliedHexagonCampaignPreset();
  }
  c17 = false;
  c16 = false;
}
function handleUserStoreChange() {
  let flag;
  if (null != user) {
    let featureValue;
    const obj = require("HexagonCampaignUtils");
    const result = obj.isHexagonCampaignClientThemePreset(user.id);
    let tmp5 = !result;
    const tmp2 = require;
    if (result) {
      tmp5 = null == UserStore.getCurrentUser();
    }
    if (!tmp5) {
      const tmp2Result = tmp2(4999);
      tmp5 = !tmp2Result.isHexagonCampaignPerkExpiredForCurrentUser(HexagonCampaignPerk.CLIENT_THEME);
    }
    if (!tmp5) {
      user = undefined;
      flag = true;
    }
    const currentUser = UserStore.getCurrentUser();
    const obj3 = require("HexagonCampaignUtils");
    const tmp12 = require;
    if (obj3.hasPerkOnlyFromHexagonCampaign(currentUser, HexagonCampaignPerk.CLIENT_THEME)) {
      const CLIENT_THEMES = tmp12(5028).CLIENT_THEMES;
      featureValue = CLIENT_THEMES.getFeatureValue(currentUser);
    } else {
      const obj4 = PremiumUtilsDefault;
      featureValue = obj4.canUseClientThemes(currentUser);
    }
    if (!featureValue === closure_15) {
      return flag;
    } else {
      closure_15 = tmp17;
      c17 = false;
    }
  }
  flag = false;
  if (null == user) {
    const tmp9 = getAppliedHexagonCampaignPreset();
    flag = false;
    if (null != tmp9) {
      user = tmp9;
      flag = true;
    }
  }
}
function handleSelectivelySyncedStoreChange() {
  const ClientThemeSettings = require("UserSettings").ClientThemeSettings;
  const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
  if (null == backgroundGradientPresetId) {
    if (null == closure_3) {
      return false;
    } else {
      closure_3 = undefined;
    }
  } else {
    let tmp10;
    if (null != backgroundGradientPresetId) {
      let tmp5;
      if (null != closure_12[backgroundGradientPresetId]) {
        const tmpResult = require("HexagonCampaignUtils");
        const result = tmpResult.isHexagonCampaignClientThemePreset(tmp4.id);
        let tmp7 = !result;
        if (result) {
          tmp7 = null == UserStore.getCurrentUser();
        }
        if (!tmp7) {
          const tmpResult2 = require("HexagonCampaignPerkAvailability");
          tmp7 = !tmpResult2.isHexagonCampaignPerkExpiredForCurrentUser(HexagonCampaignPerk.CLIENT_THEME);
        }
        if (tmp7) {
          tmp5 = tmp4;
        }
      }
      tmp10 = tmp5;
    }
    if (tmp10 === closure_3) {
      return false;
    } else {
      closure_3 = tmp10;
    }
  }
}
function handleSyncedModeChange() {
  const obj = require("isPerModeThemingActive");
  return obj.isPerModeThemingActive();
}
function handleSameAsDeviceThemeToggle() {
  return true;
}
function handleUserSettingsProtoStoreUpdate() {
  const ClientThemeSettings = require("UserSettings").ClientThemeSettings;
  const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
  let result = UnsyncedUserSettingsStore.useSystemTheme !== SystemThemeState.ON;
  const tmp3 = SystemThemeState;
  if (!result) {
    result = null == backgroundGradientPresetId;
  }
  if (!result) {
    const tmpResult = require("isPerModeThemingActive");
    result = tmpResult.isPerModeThemingActive();
  }
  if (!result) {
    const tmpResult4 = ThemeActionCreators;
    tmpResult4.setUseSystemTheme(tmp3.OFF);
  }
  if (null != backgroundGradientPresetId) {
    if (null != closure_12[backgroundGradientPresetId]) {
      const tmpResult5 = require("HexagonCampaignUtils");
      const result1 = tmpResult5.isHexagonCampaignClientThemePreset(tmp9.id);
      let tmp11 = !result1;
      if (result1) {
        tmp11 = null == UserStore.getCurrentUser();
      }
      if (!tmp11) {
        const tmpResult6 = require("HexagonCampaignPerkAvailability");
        tmp11 = !tmpResult6.isHexagonCampaignPerkExpiredForCurrentUser(HexagonCampaignPerk.CLIENT_THEME);
      }
      if (tmp11) {
        let id;
        if (user != null) {
          id = user.id;
        }
        if (id !== closure_12[backgroundGradientPresetId].id) {
          user = tmp9;
        }
      } else {
        user = undefined;
      }
    }
  } else if (null != user) {
    user = undefined;
  }
}
const isGuildTextChannelType = ChannelRecord.isGuildTextChannelType;
const authStore2 = ClientThemesConstants.BACKGROUND_GRADIENT_PRESETS_MAP;
const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
const SystemThemeState = ThemeConstants.SystemThemeState;
let closure_15 = true;
let c16 = false;
let c17 = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class ClientThemesBackgroundStore extends PersistedStore {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const items = [
      (gradientPreset) => {
        let gradientPresetId;
        if (gradientPreset != null) {
          gradientPreset = gradientPreset.gradientPreset;
          if (gradientPreset != null) {
            gradientPresetId = gradientPreset.id;
          }
        }
        return { gradientPresetId };
      }
    ];
    applyArgumentsResult.migrations = items;
    return applyArgumentsResult;
  }
  initialize(gradientPresetId) {
    c17 = false;
    if (null != gradientPresetId) {
      gradientPresetId = gradientPresetId.gradientPresetId;
      let tmp10;
      if (null != gradientPresetId) {
        let tmp3;
        if (null != closure_12[gradientPresetId]) {
          const obj = require("HexagonCampaignUtils");
          const result = obj.isHexagonCampaignClientThemePreset(tmp2.id);
          let tmp7 = !result;
          const tmp4 = require;
          if (result) {
            tmp7 = null == UserStore.getCurrentUser();
          }
          if (!tmp7) {
            const tmp4Result = tmp4(4999);
            tmp7 = !tmp4Result.isHexagonCampaignPerkExpiredForCurrentUser(HexagonCampaignPerk.CLIENT_THEME);
          }
          if (tmp7) {
            tmp3 = tmp2;
          }
        }
        tmp10 = tmp3;
      }
      let closure_3 = tmp10;
      closure_15 = true !== gradientPresetId.canUseClientThemes;
    }
    this.waitFor(ChannelStore, SelectivelySyncedUserSettingsStore, ThemeStore, UnsyncedUserSettingsStore, UserSettingsProtoStore, UserStore);
    const items = [UserStore];
    this.syncWith(items, handleUserStoreChange);
    const items1 = [SelectivelySyncedUserSettingsStore];
    this.syncWith(items1, handleSelectivelySyncedStoreChange);
  }
  getState() {
    let obj;
    const tmp = closure_15;
    if (tmp) {
      const tmp4 = c17;
      if (!tmp4) {
        if (null != user) {
          let obj3;
          const obj2 = require("HexagonCampaignUtils");
          if (obj2.isHexagonCampaignClientThemePreset(user.id)) {
            obj3 = { gradientPresetId: user.id };
          }
          obj = obj3;
        }
      }
      obj3 = {};
    } else {
      let id;
      if (user != null) {
        id = user.id;
      }
      obj = { gradientPresetId: id, canUseClientThemes: true };
    }
    return obj;
  }
  getLinearGradient() {
    let linearGradientForBackgroundGradient = null;
    if (null != this.gradientPreset) {
      const obj = ClientThemesUtils;
      linearGradientForBackgroundGradient = obj.getLinearGradientForBackgroundGradient(tmp.gradientPreset);
    }
    return linearGradientForBackgroundGradient;
  }
}
const prototype = ClientThemesBackgroundStore.prototype;
Object.defineProperty(prototype, "gradientPreset", {
  get: function gradientPreset() {
    const obj = require("isPerModeThemingActive");
    if (obj.isPerModeThemingActive()) {
      const syncedClientTheme = ThemeStore.getSyncedClientTheme(ThemeStore.systemTheme);
      let prop;
      if (syncedClientTheme != null) {
        prop = syncedClientTheme.backgroundGradientPresetId;
      }
      let tmp15;
      if (null != prop) {
        let tmp18;
        if (null != closure_12[prop]) {
          const tmpResult = require("HexagonCampaignUtils");
          const result = tmpResult.isHexagonCampaignClientThemePreset(tmp17.id);
          let tmp20 = !result;
          if (result) {
            tmp20 = null == UserStore.getCurrentUser();
          }
          if (!tmp20) {
            const tmpResult5 = require("HexagonCampaignPerkAvailability");
            tmp20 = !tmpResult5.isHexagonCampaignPerkExpiredForCurrentUser(HexagonCampaignPerk.CLIENT_THEME);
          }
          if (tmp20) {
            tmp18 = tmp17;
          }
        }
        tmp15 = tmp18;
      }
      let tmp24 = tmp15;
      if (closure_15) {
        let tmp26;
        const tmp25 = c17;
        if (tmp25) {
          tmp26 = user;
        } else if (null != tmp15) {
          const tmpResult6 = require("HexagonCampaignUtils");
          if (tmpResult6.isHexagonCampaignClientThemePreset(tmp15.id)) {
            tmp26 = tmp15;
          }
        }
        tmp24 = tmp26;
      }
      return tmp24;
    } else {
      let tmp5;
      if (null != user) {
        const tmpResult7 = require("HexagonCampaignUtils");
        const result1 = tmpResult7.isHexagonCampaignClientThemePreset(user.id);
        let tmp8 = !result1;
        if (result1) {
          tmp8 = null == UserStore.getCurrentUser();
        }
        if (!tmp8) {
          const tmpResult8 = require("HexagonCampaignPerkAvailability");
          tmp8 = !tmpResult8.isHexagonCampaignPerkExpiredForCurrentUser(HexagonCampaignPerk.CLIENT_THEME);
        }
        if (tmp8) {
          tmp5 = user;
        }
      }
      return tmp5;
    }
  },
  set: undefined
});
Object.defineProperty(prototype, "hasHiddenHexagonCampaignPreset", {
  get: function hasHiddenHexagonCampaignPreset() {
    const ClientThemeSettings = require("UserSettings").ClientThemeSettings;
    const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
    const obj = require("HexagonCampaignUtils");
    let result = obj.isHexagonCampaignClientThemePreset(backgroundGradientPresetId);
    if (result) {
      const self = this;
      result = null == this.gradientPreset;
    }
    return result;
  },
  set: undefined
});
Object.defineProperty(prototype, "isPreview", {
  get: function isPreview() {
    return closure_15;
  },
  set: undefined
});
Object.defineProperty(prototype, "isCoachmark", {
  get: function isCoachmark() {
    return c16;
  },
  set: undefined
});
Object.defineProperty(prototype, "mobilePendingThemeIndex", {
  get: function mobilePendingThemeIndex() {
    return mobileThemesIndex;
  },
  set: undefined
});
ClientThemesBackgroundStore.displayName = "ClientThemesBackgroundStore";
ClientThemesBackgroundStore.persistKey = "ClientThemesBackgroundStore";
let obj = {
  UPDATE_BACKGROUND_GRADIENT_PRESET: function handleUpdateBackgroundGradientPreset(presetId) {
    presetId = presetId.presetId;
    let tmp = closure_15 && null != presetId;
    if (tmp) {
      const obj = require("HexagonCampaignUtils");
      tmp = !obj.isHexagonCampaignClientThemePreset(presetId);
    }
    c17 = tmp;
    let tmp5;
    if (null != presetId) {
      tmp5 = closure_12[presetId];
    }
    let closure_3 = tmp5;
  },
  UPDATE_MOBILE_PENDING_THEME_INDEX: function handleUpdateMobilePendingThemeIndex(mobileThemesIndex) {
    mobileThemesIndex = mobileThemesIndex.mobileThemesIndex;
    let tmp;
    if (null != mobileThemesIndex) {
      tmp = mobileThemesIndex;
    }
    mobileThemesIndex = tmp;
  },
  RESET_PREVIEW_CLIENT_THEME: function handleResetPreviewClientTheme() {
    let tmp;
    if (closure_15) {
      tmp = getAppliedHexagonCampaignPreset();
    }
    let closure_3 = tmp;
    c17 = false;
  },
  CLIENT_THEMES_EDITOR_CLOSE: reset,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    const guildId = channelId.guildId;
    if (null != channelId) {
      if (null != guildId) {
        const obj2 = DismissibleContentUnsafeUtils;
        const tmp6 = require;
        if (!obj2.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.CLIENT_THEMES_COACHMARK)) {
          const tmp6Result = tmp6(5025);
          if (tmp6Result.ageEligibleForPremiumUpsell(tmp)) {
            const channel = ChannelStore.getChannel(channelId);
            const tmp4 = null != channel && isGuildTextChannelType(channel.type);
            if (tmp4) {
              c16 = true;
            }
          }
        }
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
};
const clientThemesBackgroundStore = new ClientThemesBackgroundStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/client_themes/ClientThemesBackgroundStore.tsx");

export default clientThemesBackgroundStore;
