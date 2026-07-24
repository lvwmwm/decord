// Module ID: 8042
// Function ID: 63756
// Name: convertThemeToProto
// Dependencies: [5, 3942, 1279, 1278, 653, 1281, 1331, 1282, 1313, 686, 3803, 2]
// Exports: saveClientTheme, saveGuildFolders

// Module 8042 (convertThemeToProto)
import closure_3 from "SystemThemeState";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { ThemeTypes } from "ME";
import SystemThemeState from "SystemThemeState";

let SystemTheme;
let closure_8;
const require = arg1;
function convertThemeToProto(arg0) {
  if (ThemeTypes.DARK === arg0) {
    return require(1282) /* _callSuper */.Theme.DARK;
  } else if (ThemeTypes.LIGHT === arg0) {
    return require(1282) /* _callSuper */.Theme.LIGHT;
  } else if (ThemeTypes.DARKER === arg0) {
    return require(1282) /* _callSuper */.Theme.DARKER;
  } else if (ThemeTypes.MIDNIGHT === arg0) {
    return require(1282) /* _callSuper */.Theme.MIDNIGHT;
  } else {
    return require(1282) /* _callSuper */.Theme.DARK;
  }
}
function convertClientThemeSettingsToProto(backgroundGradientPresetId) {
  let obj = {};
  obj = undefined;
  if (null != backgroundGradientPresetId.backgroundGradientPresetId) {
    const UInt32Value = require(1313) /* _callSuper */.UInt32Value;
    obj = { value: backgroundGradientPresetId.backgroundGradientPresetId };
    obj = UInt32Value.create(obj);
  }
  obj.backgroundGradientPresetId = obj;
  let tmp4;
  if (null != backgroundGradientPresetId.customUserThemeSettings) {
    const obj1 = { colors: backgroundGradientPresetId.customUserThemeSettings.colors, gradientColorStops: backgroundGradientPresetId.customUserThemeSettings.gradientColorStops, gradientAngle: backgroundGradientPresetId.customUserThemeSettings.gradientAngle, baseMix: backgroundGradientPresetId.customUserThemeSettings.baseMix };
    tmp4 = obj1;
  }
  obj.customUserThemeSettings = tmp4;
  return obj;
}
({ SystemTheme, SystemThemeState: closure_8 } = SystemThemeState);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/UserSettingsActionCreators.tsx");

export default {
  overrideLocale(locale) {
    let obj = importDefault(686);
    obj = { type: "USER_SETTINGS_LOCALE_OVERRIDE", locale };
    obj.dispatch(obj);
  },
  updatedUnsyncedSettings(settings) {
    let obj = importDefault(686);
    obj = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings };
    obj.dispatch(obj);
  },
  setShouldSyncTextSettings(shouldSync) {
    let obj = importDefault(686);
    obj = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE" };
    obj = {};
    const obj1 = { shouldSync };
    if (shouldSync) {
      let obj2 = {};
    } else {
      obj2 = {};
      const InlineAttachmentMedia = require(3803) /* explicitContentFromProto */.InlineAttachmentMedia;
      obj2.inlineAttachmentMedia = InlineAttachmentMedia.getSetting();
      const InlineEmbedMedia = require(3803) /* explicitContentFromProto */.InlineEmbedMedia;
      obj2.inlineEmbedMedia = InlineEmbedMedia.getSetting();
      const RenderEmbeds = require(3803) /* explicitContentFromProto */.RenderEmbeds;
      obj2.renderEmbeds = RenderEmbeds.getSetting();
      const RenderReactions = require(3803) /* explicitContentFromProto */.RenderReactions;
      obj2.renderReactions = RenderReactions.getSetting();
      const AnimateEmoji = require(3803) /* explicitContentFromProto */.AnimateEmoji;
      obj2.animateEmoji = AnimateEmoji.getSetting();
      const AnimateStickers = require(3803) /* explicitContentFromProto */.AnimateStickers;
      obj2.animateStickers = AnimateStickers.getSetting();
      const GifAutoPlay = require(3803) /* explicitContentFromProto */.GifAutoPlay;
      obj2.gifAutoPlay = GifAutoPlay.getSetting();
    }
    obj1.settings = obj2;
    obj.text = obj1;
    obj.changes = obj;
    obj.dispatch(obj);
  },
  setShouldSyncAppearanceSettings(is_sync_enabled) {
    let closure_0 = is_sync_enabled;
    return callback(async () => {
      if (outer1_0) {
        const PreloadedUserSettingsActionCreators = callback(outer2_2[6]).PreloadedUserSettingsActionCreators;
        yield PreloadedUserSettingsActionCreators.updateAsync("appearance", (arg0) => {
          arg0.theme = outer3_9(outer3_6.theme);
          const obj = {};
          const gradientPreset = outer3_4.gradientPreset;
          let id;
          if (null != gradientPreset) {
            id = gradientPreset.id;
          }
          obj.backgroundGradientPresetId = id;
          const ClientThemeSettings = callback(outer3_2[10]).ClientThemeSettings;
          const setting = ClientThemeSettings.getSetting();
          let prop;
          if (null != setting) {
            prop = setting.customUserThemeSettings;
          }
          obj.customUserThemeSettings = prop;
          arg0.clientThemeSettings = outer3_10(obj);
        }, closure_0(outer2_2[6]).UserSettingsDelay.INFREQUENT_USER_ACTION);
      }
      let obj = outer2_1(outer2_2[9]);
      obj = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE" };
      obj = {};
      const obj1 = { shouldSync: outer1_0 };
      if (outer1_0) {
        let obj2 = {};
      } else {
        obj2 = { theme: outer2_6.theme };
        const obj3 = {};
        let gradientPreset = outer2_4.gradientPreset;
        let id;
        if (null != gradientPreset) {
          id = gradientPreset.id;
        }
        obj3.backgroundGradientPresetId = id;
        obj2.clientThemeSettings = obj3;
        const DeveloperMode = callback(outer2_2[10]).DeveloperMode;
        obj2.developerMode = DeveloperMode.getSetting();
      }
      obj1.settings = obj2;
      obj.appearance = obj1;
      obj.changes = obj;
      obj.dispatch(obj);
    })();
  },
  applySettingsOverride(settings) {
    let obj = importDefault(686);
    obj = { type: "USER_SETTINGS_OVERRIDE_APPLY", settings };
    obj.dispatch(obj);
  },
  clearSettingsOverride(gifAutoPlay, animateEmoji, animateStickers) {
    const items = [...arguments];
    importDefault(686).dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: items });
  },
  updateLocale(arg0) {
    const _require = arg0;
    const PreloadedUserSettingsActionCreators = _require(1331).PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync("localization", (arg0) => {
      const StringValue = callback(outer1_2[8]).StringValue;
      arg0.locale = StringValue.create({ value: callback });
    }, _require(1331).UserSettingsDelay.INFREQUENT_USER_ACTION);
  },
  updateTheme(theme) {
    const _require = theme;
    let obj = importDefault(686);
    obj = { theme };
    obj.dispatch({ type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: { appearance: { settings: obj } } });
    if (closure_5.shouldSync("appearance")) {
      const PreloadedUserSettingsActionCreators = _require(1331).PreloadedUserSettingsActionCreators;
      PreloadedUserSettingsActionCreators.updateAsync("appearance", (arg0) => {
        arg0.theme = outer1_9(closure_0);
      }, _require(1331).UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
  }
};
export const saveGuildFolders = function saveGuildFolders(compatibleGuildFolders) {
  const _require = compatibleGuildFolders;
  const PreloadedUserSettingsActionCreators = _require(1331).PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("guildFolders", (arg0) => {
    arg0.folders = compatibleGuildFolders.map((guildIds) => {
      const GuildFolder = callback(outer2_2[7]).GuildFolder;
      let obj = { guildIds: guildIds.guildIds };
      obj = GuildFolder.create(obj);
      if (null != guildIds.folderId) {
        const Int64Value = callback(outer2_2[8]).Int64Value;
        obj = {};
        const _String = String;
        obj.value = String(guildIds.folderId);
        obj.id = Int64Value.create(obj);
      }
      if (null != guildIds.folderColor) {
        const UInt64Value = callback(outer2_2[8]).UInt64Value;
        const obj1 = {};
        const _String2 = String;
        obj1.value = String(guildIds.folderColor);
        obj.color = UInt64Value.create(obj1);
      }
      let tmp8 = null != guildIds.folderName;
      if (tmp8) {
        tmp8 = "" !== guildIds.folderName;
      }
      if (tmp8) {
        const StringValue = callback(outer2_2[8]).StringValue;
        const obj2 = {};
        const _String3 = String;
        obj2.value = String(guildIds.folderName);
        obj.name = StringValue.create(obj2);
      }
      return obj;
    });
  }, _require(1331).UserSettingsDelay.FREQUENT_USER_ACTION);
};
export const saveClientTheme = function saveClientTheme(backgroundGradientPresetId, INFREQUENT_USER_ACTION) {
  backgroundGradientPresetId = backgroundGradientPresetId.backgroundGradientPresetId;
  const customUserThemeSettings = backgroundGradientPresetId.customUserThemeSettings;
  const theme = backgroundGradientPresetId.theme;
  const useSystemTheme = backgroundGradientPresetId.useSystemTheme;
  if (INFREQUENT_USER_ACTION === undefined) {
    INFREQUENT_USER_ACTION = backgroundGradientPresetId(theme[6]).UserSettingsDelay.INFREQUENT_USER_ACTION;
  }
  let tmp5 = tmp3 ? tmp4.ON : tmp4.OFF;
  if (null != useSystemTheme) {
    tmp5 = useSystemTheme;
  }
  let obj = customUserThemeSettings(theme[9]);
  obj = { useSystemTheme: tmp5 };
  obj.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: obj });
  let obj2 = customUserThemeSettings(theme[9]);
  obj = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE" };
  const obj1 = {};
  obj2 = {};
  const obj3 = { clientThemeSettings: { backgroundGradientPresetId, customUserThemeSettings } };
  let tmp7;
  if ("system" !== theme) {
    tmp7 = theme;
  }
  obj3.theme = tmp7;
  obj2.settings = obj3;
  obj1.appearance = obj2;
  obj.changes = obj1;
  obj2.dispatch(obj);
  if (closure_5.shouldSync("appearance")) {
    const PreloadedUserSettingsActionCreators = backgroundGradientPresetId(theme[6]).PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync("appearance", (arg0) => {
      arg0.theme = outer1_9(theme);
      arg0.clientThemeSettings = outer1_10({ backgroundGradientPresetId, customUserThemeSettings });
    }, INFREQUENT_USER_ACTION);
  }
};
