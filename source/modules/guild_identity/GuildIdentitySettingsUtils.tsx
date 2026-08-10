// Module ID: 13963
// Function ID: 13964
// Name: canResetThemeColors
// Dependencies: [2]
// Exports: canResetThemeColors

// Module 13963 (canResetThemeColors)
const result = require("set").fileFinishedImporting("modules/guild_identity/GuildIdentitySettingsUtils.tsx");

export const canResetThemeColors = function canResetThemeColors(pendingThemeColors, themeColors) {
  if (undefined === pendingThemeColors) {
    let tmp3 = null != themeColors;
  } else {
    let first;
    if (pendingThemeColors != null) {
      first = pendingThemeColors[0];
    }
    tmp3 = null != first;
    if (tmp3) {
      let tmp4;
      if (pendingThemeColors != null) {
        tmp4 = pendingThemeColors[1];
      }
      tmp3 = null != tmp4;
    }
  }
  return tmp3;
};
