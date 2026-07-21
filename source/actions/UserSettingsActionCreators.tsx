// Module ID: 7949
// Function ID: 63397
// Name: convertThemeToProto
// Dependencies: []
// Exports: saveClientTheme, saveGuildFolders

// Module 7949 (convertThemeToProto)
let SystemTheme;
function convertThemeToProto(arg0) {
  if (ThemeTypes.DARK === arg0) {
    return arg1(dependencyMap[7]).Theme.DARK;
  } else if (ThemeTypes.LIGHT === arg0) {
    return arg1(dependencyMap[7]).Theme.LIGHT;
  } else if (ThemeTypes.DARKER === arg0) {
    return arg1(dependencyMap[7]).Theme.DARKER;
  } else if (ThemeTypes.MIDNIGHT === arg0) {
    return arg1(dependencyMap[7]).Theme.MIDNIGHT;
  } else {
    return arg1(dependencyMap[7]).Theme.DARK;
  }
}
function convertClientThemeSettingsToProto(backgroundGradientPresetId) {
  let obj = {};
  obj = undefined;
  if (null != backgroundGradientPresetId.backgroundGradientPresetId) {
    const UInt32Value = arg1(dependencyMap[8]).UInt32Value;
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const ThemeTypes = arg1(dependencyMap[4]).ThemeTypes;
({ SystemTheme, SystemThemeState: closure_8 } = arg1(dependencyMap[5]));
const obj = {
  overrideLocale(locale) {
    let obj = importDefault(dependencyMap[9]);
    obj = { type: "USER_SETTINGS_LOCALE_OVERRIDE", locale };
    obj.dispatch(obj);
  },
  updatedUnsyncedSettings(settings) {
    let obj = importDefault(dependencyMap[9]);
    obj = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings };
    obj.dispatch(obj);
  },
  setShouldSyncTextSettings(shouldSync) {
    let obj = importDefault(dependencyMap[9]);
    obj = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE" };
    obj = {};
    const obj1 = { shouldSync };
    if (shouldSync) {
      let obj2 = {};
    } else {
      obj2 = {};
      const InlineAttachmentMedia = arg1(dependencyMap[10]).InlineAttachmentMedia;
      obj2.inlineAttachmentMedia = InlineAttachmentMedia.getSetting();
      const InlineEmbedMedia = arg1(dependencyMap[10]).InlineEmbedMedia;
      obj2.inlineEmbedMedia = InlineEmbedMedia.getSetting();
      const RenderEmbeds = arg1(dependencyMap[10]).RenderEmbeds;
      obj2.renderEmbeds = RenderEmbeds.getSetting();
      const RenderReactions = arg1(dependencyMap[10]).RenderReactions;
      obj2.renderReactions = RenderReactions.getSetting();
      const AnimateEmoji = arg1(dependencyMap[10]).AnimateEmoji;
      obj2.animateEmoji = AnimateEmoji.getSetting();
      const AnimateStickers = arg1(dependencyMap[10]).AnimateStickers;
      obj2.animateStickers = AnimateStickers.getSetting();
      const GifAutoPlay = arg1(dependencyMap[10]).GifAutoPlay;
      obj2.gifAutoPlay = GifAutoPlay.getSetting();
    }
    obj1.settings = obj2;
    obj.text = obj1;
    obj.changes = obj;
    obj.dispatch(obj);
  },
  setShouldSyncAppearanceSettings(is_sync_enabled) {
    const arg1 = is_sync_enabled;
    return callback(async () => {
      if (callback) {
        const PreloadedUserSettingsActionCreators = callback(closure_2[6]).PreloadedUserSettingsActionCreators;
        yield PreloadedUserSettingsActionCreators.updateAsync("appearance", (arg0) => {
          arg0.theme = callback2(theme.theme);
          const obj = {};
          const gradientPreset = gradientPreset.gradientPreset;
          let id;
          if (null != gradientPreset) {
            id = gradientPreset.id;
          }
          obj.backgroundGradientPresetId = id;
          const ClientThemeSettings = callback(closure_2[10]).ClientThemeSettings;
          const setting = ClientThemeSettings.getSetting();
          let prop;
          if (null != setting) {
            prop = setting.customUserThemeSettings;
          }
          obj.customUserThemeSettings = prop;
          arg0.clientThemeSettings = closure_10(obj);
        }, closure_0(closure_2[6]).UserSettingsDelay.INFREQUENT_USER_ACTION);
      }
      let obj = callback2(closure_2[9]);
      obj = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE" };
      obj = {};
      const obj1 = { shouldSync: callback };
      if (callback) {
        let obj2 = {};
      } else {
        obj2 = { theme: theme.theme };
        const obj3 = {};
        const gradientPreset = gradientPreset.gradientPreset;
        let id;
        if (null != gradientPreset) {
          id = gradientPreset.id;
        }
        obj3.backgroundGradientPresetId = id;
        obj2.clientThemeSettings = obj3;
        const DeveloperMode = callback(closure_2[10]).DeveloperMode;
        obj2.developerMode = DeveloperMode.getSetting();
      }
      obj1.settings = obj2;
      obj.appearance = obj1;
      obj.changes = obj;
      obj.dispatch(obj);
    })();
  },
  applySettingsOverride(settings) {
    let obj = importDefault(dependencyMap[9]);
    obj = { type: "USER_SETTINGS_OVERRIDE_APPLY", settings };
    obj.dispatch(obj);
  },
  clearSettingsOverride(gifAutoPlay, animateEmoji, animateStickers) {
    const items = [...arguments];
    importDefault(dependencyMap[9]).dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: items });
  },
  updateLocale(arg0) {
    const arg1 = arg0;
    const PreloadedUserSettingsActionCreators = arg1(dependencyMap[6]).PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync("localization", (arg0) => {
      const StringValue = arg0(closure_2[8]).StringValue;
      arg0.locale = StringValue.create({ value: arg0 });
    }, arg1(dependencyMap[6]).UserSettingsDelay.INFREQUENT_USER_ACTION);
  },
  updateTheme(theme) {
    const arg1 = theme;
    let obj = importDefault(dependencyMap[9]);
    obj = { theme };
    obj.dispatch({ type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: { appearance: { settings: obj } } });
    if (closure_5.shouldSync("appearance")) {
      const PreloadedUserSettingsActionCreators = arg1(dependencyMap[6]).PreloadedUserSettingsActionCreators;
      PreloadedUserSettingsActionCreators.updateAsync("appearance", (arg0) => {
        arg0.theme = callback(arg0);
      }, arg1(dependencyMap[6]).UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
  }
};
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("actions/UserSettingsActionCreators.tsx");

export default obj;
export const saveGuildFolders = function saveGuildFolders(compatibleGuildFolders) {
  const arg1 = compatibleGuildFolders;
  const PreloadedUserSettingsActionCreators = arg1(dependencyMap[6]).PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("guildFolders", (arg0) => {
    arg0.folders = arg0.map((guildIds) => {
      const GuildFolder = callback(closure_2[7]).GuildFolder;
      let obj = { guildIds: guildIds.guildIds };
      obj = GuildFolder.create(obj);
      if (null != guildIds.folderId) {
        const Int64Value = callback(closure_2[8]).Int64Value;
        obj = {};
        const _String = String;
        obj.value = String(guildIds.folderId);
        obj.id = Int64Value.create(obj);
      }
      if (null != guildIds.folderColor) {
        const UInt64Value = callback(closure_2[8]).UInt64Value;
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
        const StringValue = callback(closure_2[8]).StringValue;
        const obj2 = {};
        const _String3 = String;
        obj2.value = String(guildIds.folderName);
        obj.name = StringValue.create(obj2);
      }
      return obj;
    });
  }, arg1(dependencyMap[6]).UserSettingsDelay.FREQUENT_USER_ACTION);
};
export const saveClientTheme = function saveClientTheme(backgroundGradientPresetId, INFREQUENT_USER_ACTION) {
  backgroundGradientPresetId = backgroundGradientPresetId.backgroundGradientPresetId;
  INFREQUENT_USER_ACTION = backgroundGradientPresetId;
  const customUserThemeSettings = backgroundGradientPresetId.customUserThemeSettings;
  const importDefault = customUserThemeSettings;
  const theme = backgroundGradientPresetId.theme;
  const dependencyMap = theme;
  const useSystemTheme = backgroundGradientPresetId.useSystemTheme;
  if (INFREQUENT_USER_ACTION === undefined) {
    INFREQUENT_USER_ACTION = INFREQUENT_USER_ACTION(dependencyMap[6]).UserSettingsDelay.INFREQUENT_USER_ACTION;
  }
  let tmp5 = tmp3 ? tmp4.ON : tmp4.OFF;
  if (null != useSystemTheme) {
    tmp5 = useSystemTheme;
  }
  let obj = importDefault(dependencyMap[9]);
  obj = { useSystemTheme: tmp5 };
  obj.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: obj });
  let obj2 = importDefault(dependencyMap[9]);
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
    const PreloadedUserSettingsActionCreators = INFREQUENT_USER_ACTION(dependencyMap[6]).PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync("appearance", (arg0) => {
      arg0.theme = callback(theme);
      arg0.clientThemeSettings = callback2({ backgroundGradientPresetId, customUserThemeSettings });
    }, INFREQUENT_USER_ACTION);
  }
};
