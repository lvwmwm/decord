// Module ID: 1249
// Function ID: 1250
// Name: GuildThemeSourcePreferenceUtils
// Dependencies: [1209, 2]
// Exports: resolveDefaultGuildThemePreference, resolveGuildThemeSourcePreference

// Module 1249 (GuildThemeSourcePreferenceUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1209 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/GuildThemeSourcePreferenceUtils.tsx");

export const resolveDefaultGuildThemePreference = function resolveDefaultGuildThemePreference(arg0) {
  let GUILD;
  if (arg0 === preloaded_user_settings.GuildThemeSourcePreference.PERSONAL) {
    GUILD = tmp(1209).GuildThemeSourcePreference.PERSONAL;
  } else {
    GUILD = tmp(1209).GuildThemeSourcePreference.GUILD;
  }
  return GUILD;
};
export const resolveGuildThemeSourcePreference = function resolveGuildThemeSourcePreference(arg0, arg1) {
  let tmp3 = arg0;
  if (arg0 !== preloaded_user_settings.GuildThemeSourcePreference.GUILD) {
    tmp3 = arg0;
    if (arg0 !== preloaded_user_settings.GuildThemeSourcePreference.PERSONAL) {
      let GUILD;
      if (arg1 === preloaded_user_settings.GuildThemeSourcePreference.PERSONAL) {
        GUILD = tmp(1209).GuildThemeSourcePreference.PERSONAL;
      } else {
        GUILD = tmp(1209).GuildThemeSourcePreference.GUILD;
      }
      tmp3 = GUILD;
    }
  }
  return tmp3;
};
