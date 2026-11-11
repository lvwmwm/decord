// Module ID: 17076
// Function ID: 17077
// Name: GuildIdentitySettingsUtils
// Dependencies: [2]
// Exports: canResetThemeColors

// Module 17076 (GuildIdentitySettingsUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_identity/GuildIdentitySettingsUtils.tsx");

export function canResetThemeColors(pendingThemeColors, themeColors) {
  let tmp3;
  if (undefined === pendingThemeColors) {
    tmp3 = null != themeColors;
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
}
