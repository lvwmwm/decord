// Module ID: 15426
// Function ID: 118619
// Name: collectGuildThemeAnalyticsMetadata
// Dependencies: [1838, 2]
// Exports: collectGuildThemeAnalyticsMetadata

// Module 15426 (collectGuildThemeAnalyticsMetadata)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const result = require("set").fileFinishedImporting("modules/guild_themes/GuildThemeAnalyticsUtils.tsx");

export const collectGuildThemeAnalyticsMetadata = function collectGuildThemeAnalyticsMetadata(selectedGuildId) {
  if (null == selectedGuildId) {
    return null;
  } else {
    guild = guild.getGuild(selectedGuildId);
    if (null == guild) {
      return null;
    } else {
      const guildTheme = guild.guildTheme;
      if (null != guildTheme) {
        if (guildTheme.enabled) {
          const obj = { guild_theme_enabled: true };
          const themeSettings = guildTheme.themeSettings;
          let prop;
          if (null != themeSettings) {
            prop = themeSettings.customUserThemeSettings;
          }
          obj.guild_theme_is_custom = null != prop;
          const themeSettings2 = guildTheme.themeSettings;
          let presetId;
          if (null != themeSettings2) {
            presetId = themeSettings2.presetId;
          }
          if (null != presetId) {
            obj.guild_theme_preset_id = presetId;
          }
          return obj;
        }
      }
      return { guild_theme_enabled: false, guild_theme_is_custom: false };
    }
  }
};
