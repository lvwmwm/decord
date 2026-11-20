// Module ID: 4997
// Function ID: 4998
// Name: GuildThemeResolver
// Dependencies: [4998, 4967, 504, 2]
// Exports: getActiveGuildTheme, isRenderableGuildThemeSettings, resolveRenderableGuildThemeSettings, useActiveGuildTheme, useActiveGuildThemeForGuildId, useEnabledGuildThemeForGuildId, useIsGuildThemePreviewActive

// Module 4997 (GuildThemeResolver)
import get_initialized from "get initialized" /* 504 */;
import GuildThemePresets from "GuildThemePresets" /* 4967 */;
import GuildThemePreviewStore from "GuildThemePreviewStore" /* 4998 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_themes/GuildThemeResolver.tsx");

export function resolveRenderableGuildThemeSettings(customUserThemeSettings) {
  if (null == customUserThemeSettings) {
    return null;
  } else {
    customUserThemeSettings = customUserThemeSettings.customUserThemeSettings;
    let colors;
    if (customUserThemeSettings != null) {
      colors = customUserThemeSettings.colors;
    }
    let tmp2 = null;
    if (null != colors) {
      tmp2 = null;
      if (1 === customUserThemeSettings.colors.length) {
        if (null == customUserThemeSettings.gradientColorStops) {
          tmp2 = { type: "custom", customUserThemeSettings };
          const obj = { type: "custom", customUserThemeSettings };
        } else {
          tmp2 = null;
        }
      }
    }
    if (null != tmp2) {
      return tmp2;
    } else {
      const obj2 = GuildThemePresets;
      const guildThemePreset = obj2.getGuildThemePreset(customUserThemeSettings.presetId);
      let tmp6 = null;
      if (null != guildThemePreset) {
        tmp6 = { type: "preset", preset: guildThemePreset };
        const obj3 = { type: "preset", preset: guildThemePreset };
      }
      return tmp6;
    }
  }
}
export function isRenderableGuildThemeSettings(customUserThemeSettings) {
  let tmp = null;
  if (null != customUserThemeSettings) {
    customUserThemeSettings = customUserThemeSettings.customUserThemeSettings;
    let colors;
    if (customUserThemeSettings != null) {
      colors = customUserThemeSettings.colors;
    }
    let tmp3 = null;
    if (null != colors) {
      tmp3 = null;
      if (1 === customUserThemeSettings.colors.length) {
        if (null == customUserThemeSettings.gradientColorStops) {
          tmp3 = { type: "custom", customUserThemeSettings };
          const obj = { type: "custom", customUserThemeSettings };
        } else {
          tmp3 = null;
        }
      }
    }
    tmp = tmp3;
    if (null == tmp3) {
      const obj2 = GuildThemePresets;
      const guildThemePreset = obj2.getGuildThemePreset(customUserThemeSettings.presetId);
      let tmp7 = null;
      if (null != guildThemePreset) {
        tmp7 = { type: "preset", preset: guildThemePreset };
        const obj3 = { type: "preset", preset: guildThemePreset };
      }
      tmp = tmp7;
    }
  }
  return null != tmp;
}
export function useEnabledGuildThemeForGuildId() {
  return null;
}
export function getActiveGuildTheme() {
  return null;
}
export function useActiveGuildThemeForGuildId() {
  return null;
}
export function useActiveGuildTheme() {
  return null;
}
export function useIsGuildThemePreviewActive() {
  const items = [GuildThemePreviewStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => false);
}
