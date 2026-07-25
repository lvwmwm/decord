// Module ID: 13681
// Function ID: 105082
// Name: canResetThemeColors
// Dependencies: [2]
// Exports: canResetThemeColors

// Module 13681 (canResetThemeColors)
const result = require("set").fileFinishedImporting("modules/guild_identity/GuildIdentitySettingsUtils.tsx");

export const canResetThemeColors = function canResetThemeColors(pendingThemeColors, themeColors) {
  if (undefined === pendingThemeColors) {
    let tmp3 = null != themeColors;
  } else {
    let first;
    if (null != pendingThemeColors) {
      first = pendingThemeColors[0];
    }
    tmp3 = null != first;
    if (tmp3) {
      let tmp4;
      if (null != pendingThemeColors) {
        tmp4 = pendingThemeColors[1];
      }
      tmp3 = null != tmp4;
    }
  }
  return tmp3;
};
