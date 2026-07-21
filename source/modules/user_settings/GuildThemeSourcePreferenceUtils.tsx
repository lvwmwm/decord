// Module ID: 1320
// Function ID: 15510
// Name: resolveDefaultGuildThemePreference
// Dependencies: []
// Exports: resolveGuildThemeSourcePreference

// Module 1320 (resolveDefaultGuildThemePreference)
function resolveDefaultGuildThemePreference(defaultGuildThemePreference) {
  if (defaultGuildThemePreference === require(dependencyMap[0]).GuildThemeSourcePreference.PERSONAL) {
    let GUILD = require(dependencyMap[0]).GuildThemeSourcePreference.PERSONAL;
  } else {
    GUILD = require(dependencyMap[0]).GuildThemeSourcePreference.GUILD;
  }
  return GUILD;
}
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/user_settings/GuildThemeSourcePreferenceUtils.tsx");

export { resolveDefaultGuildThemePreference };
export const resolveGuildThemeSourcePreference = function resolveGuildThemeSourcePreference(guildThemeSourcePreferenceOverride, defaultGuildThemePreference) {
  let tmp = guildThemeSourcePreferenceOverride;
  if (guildThemeSourcePreferenceOverride !== require(dependencyMap[0]).GuildThemeSourcePreference.GUILD) {
    tmp = guildThemeSourcePreferenceOverride;
    if (guildThemeSourcePreferenceOverride !== require(dependencyMap[0]).GuildThemeSourcePreference.PERSONAL) {
      tmp = resolveDefaultGuildThemePreference(defaultGuildThemePreference);
    }
  }
  return tmp;
};
