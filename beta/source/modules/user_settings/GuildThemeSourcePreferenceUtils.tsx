// Module ID: 1229
// Function ID: 1230
// Name: GuildThemeSourcePreferenceUtils
// Dependencies: [1190, 2]
// Exports: resolveDefaultGuildThemePreference, resolveGuildThemeSourcePreference

// Module 1229 (GuildThemeSourcePreferenceUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1190 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/GuildThemeSourcePreferenceUtils.tsx");

export const resolveDefaultGuildThemePreference = function resolveDefaultGuildThemePreference(arg0) {
  if (arg0 === preloaded_user_settings.GuildThemeSourcePreference.PERSONAL) {
    let GUILD = tmp(1190).GuildThemeSourcePreference.PERSONAL;
  } else {
    GUILD = tmp(1190).GuildThemeSourcePreference.GUILD;
  }
  return GUILD;
};
export const resolveGuildThemeSourcePreference = function resolveGuildThemeSourcePreference(arg0, arg1) {
  let GuildThemeSourcePreference = dependencyMap;
  let tmp2 = arg0;
  if (arg0 !== preloaded_user_settings.GuildThemeSourcePreference.GUILD) {
    tmp2 = arg0;
    if (arg0 !== tmp(1190).GuildThemeSourcePreference.PERSONAL) {
      if (arg1 === tmp(1190).GuildThemeSourcePreference.PERSONAL) {
        GuildThemeSourcePreference = tmp(1190).GuildThemeSourcePreference;
        let GUILD = GuildThemeSourcePreference.PERSONAL;
      } else {
        GUILD = tmp(1190).GuildThemeSourcePreference.GUILD;
      }
    }
  }
  return tmp2;
};
