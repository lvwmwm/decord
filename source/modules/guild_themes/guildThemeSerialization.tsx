// Module ID: 1837
// Function ID: 20059
// Name: cloneCustomUserThemeSettings
// Dependencies: [2]
// Exports: cloneGuildTheme, fromServerGuildTheme, toServerGuildThemeSettings

// Module 1837 (cloneCustomUserThemeSettings)
function cloneCustomUserThemeSettings(customUserThemeSettings) {
  if (null != customUserThemeSettings) {
    const obj = {};
    const items = [];
    HermesBuiltin.arraySpread(customUserThemeSettings.colors, 0);
    obj.colors = items;
    let gradientColorStops = customUserThemeSettings.gradientColorStops;
    if (null == gradientColorStops) {
      gradientColorStops = [];
    }
    const items1 = [];
    HermesBuiltin.arraySpread(gradientColorStops, 0);
    obj.gradientColorStops = items1;
    ({ gradientAngle: obj.gradientAngle, baseMix: obj.baseMix } = customUserThemeSettings);
    return obj;
  }
}
function cloneGuildThemeSettings(draft) {
  let tmp = null;
  if (null != draft) {
    const obj = { presetId: draft.presetId, customUserThemeSettings: cloneCustomUserThemeSettings(draft.customUserThemeSettings) };
    tmp = obj;
  }
  return tmp;
}
function fromServerCustomUserThemeSettings(custom_user_theme_settings) {
  let gradient_color_stops;
  if (null != custom_user_theme_settings) {
    const obj = {};
    ({ colors: obj.colors, gradient_color_stops } = custom_user_theme_settings);
    if (null == gradient_color_stops) {
      gradient_color_stops = [];
    }
    obj.gradientColorStops = gradient_color_stops;
    const gradient_angle = custom_user_theme_settings.gradient_angle;
    let num = 0;
    if (null != gradient_angle) {
      num = gradient_angle;
    }
    obj.gradientAngle = num;
    const base_mix = custom_user_theme_settings.base_mix;
    let num2 = 0;
    if (null != base_mix) {
      num2 = base_mix;
    }
    obj.baseMix = num2;
    return obj;
  }
}
function fromServerGuildThemeSettings(preset_id) {
  let tmp = null;
  if (null != preset_id) {
    if (null != preset_id.preset_id) {
      const obj = {};
      preset_id = undefined;
      if (null != preset_id.preset_id) {
        preset_id = preset_id.preset_id;
      }
      obj.presetId = preset_id;
      obj.customUserThemeSettings = fromServerCustomUserThemeSettings(preset_id.custom_user_theme_settings);
      tmp = obj;
    } else {
      tmp = null;
    }
  }
  return tmp;
}
const result = require("set").fileFinishedImporting("modules/guild_themes/guildThemeSerialization.tsx");

export { cloneGuildThemeSettings };
export const cloneGuildTheme = function cloneGuildTheme(guildTheme) {
  let tmp = null;
  if (null != guildTheme) {
    const obj = { enabled: guildTheme.enabled, themeSettings: cloneGuildThemeSettings(guildTheme.themeSettings) };
    tmp = obj;
  }
  return tmp;
};
export const toServerGuildThemeSettings = function toServerGuildThemeSettings(themeSettings) {
  if (null == themeSettings) {
    let obj = { preset_id: null, custom_user_theme_settings: null };
  } else {
    obj = {};
    const presetId = themeSettings.presetId;
    let tmp = null;
    if (null != presetId) {
      tmp = presetId;
    }
    obj.preset_id = tmp;
    const customUserThemeSettings = themeSettings.customUserThemeSettings;
    let tmp2 = null;
    if (null != customUserThemeSettings) {
      obj = {};
      const items = [];
      HermesBuiltin.arraySpread(customUserThemeSettings.colors, 0);
      obj.colors = items;
      if (null != customUserThemeSettings.gradientColorStops) {
        const items1 = [];
        HermesBuiltin.arraySpread(customUserThemeSettings.gradientColorStops, 0);
        let items2 = items1;
      } else {
        items2 = [];
      }
      obj.gradient_color_stops = items2;
      const gradientAngle = customUserThemeSettings.gradientAngle;
      let num3 = 0;
      if (null != gradientAngle) {
        num3 = gradientAngle;
      }
      obj.gradient_angle = num3;
      const baseMix = customUserThemeSettings.baseMix;
      let num4 = 0;
      if (null != baseMix) {
        num4 = baseMix;
      }
      obj.base_mix = num4;
      tmp2 = obj;
    }
    obj.custom_user_theme_settings = tmp2;
  }
  return obj;
};
export { fromServerGuildThemeSettings };
export const fromServerGuildTheme = function fromServerGuildTheme(theme) {
  let tmp = null;
  if (null != theme) {
    const obj = { enabled: theme.enabled, themeSettings: fromServerGuildThemeSettings(theme) };
    tmp = obj;
  }
  return tmp;
};
