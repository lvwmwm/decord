// Module ID: 1320
// Function ID: 15512
// Name: resolveDefaultGuildThemePreference
// Dependencies: [1282, 2]
// Exports: resolveGuildThemeSourcePreference

// Module 1320 (resolveDefaultGuildThemePreference)
function resolveDefaultGuildThemePreference(defaultGuildThemePreference) {
  if (defaultGuildThemePreference === require(1282) /* _callSuper */.GuildThemeSourcePreference.PERSONAL) {
    let GUILD = require(1282) /* _callSuper */.GuildThemeSourcePreference.PERSONAL;
  } else {
    GUILD = require(1282) /* _callSuper */.GuildThemeSourcePreference.GUILD;
  }
  return GUILD;
}
const result = require("set").fileFinishedImporting("modules/user_settings/GuildThemeSourcePreferenceUtils.tsx");

export { resolveDefaultGuildThemePreference };
export const resolveGuildThemeSourcePreference = function resolveGuildThemeSourcePreference(closure_0, defaultGuildThemePreference) {
  let tmp = closure_0;
  if (closure_0 !== require(1282) /* _callSuper */.GuildThemeSourcePreference.GUILD) {
    tmp = closure_0;
    if (closure_0 !== require(1282) /* _callSuper */.GuildThemeSourcePreference.PERSONAL) {
      tmp = resolveDefaultGuildThemePreference(defaultGuildThemePreference);
    }
  }
  return tmp;
};
