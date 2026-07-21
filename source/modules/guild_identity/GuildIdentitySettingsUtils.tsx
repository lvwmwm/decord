// Module ID: 13498
// Function ID: 102442
// Name: canResetThemeColors
// Dependencies: []
// Exports: canResetThemeColors

// Module 13498 (canResetThemeColors)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_identity/GuildIdentitySettingsUtils.tsx");

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
