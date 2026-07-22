// Module ID: 15309
// Function ID: 116445
// Name: collectGuildThemeAnalyticsMetadata
// Dependencies: []
// Exports: collectGuildThemeAnalyticsMetadata

// Module 15309 (collectGuildThemeAnalyticsMetadata)
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/guild_themes/GuildThemeAnalyticsUtils.tsx");

export const collectGuildThemeAnalyticsMetadata = function collectGuildThemeAnalyticsMetadata(selectedGuildId) {
  if (null == selectedGuildId) {
    return null;
  } else {
    const guild = guild.getGuild(selectedGuildId);
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
      return { 0: true, 0: true };
    }
  }
};
