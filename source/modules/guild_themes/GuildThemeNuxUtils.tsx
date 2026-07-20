// Module ID: 14859
// Function ID: 111958
// Name: _saveGuildThemeNuxPreference
// Dependencies: []
// Exports: getInitialGuildThemeNuxSelection, saveGuildThemeNuxPreference

// Module 14859 (_saveGuildThemeNuxPreference)
function _saveGuildThemeNuxPreference() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _saveGuildThemeNuxPreference = obj;
  return obj(...arguments);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_themes/GuildThemeNuxUtils.tsx");

export const getInitialGuildThemeNuxSelection = function getInitialGuildThemeNuxSelection() {
  const defaultGuildThemePreference = defaultGuildThemePreference.getDefaultGuildThemePreference();
  if (defaultGuildThemePreference === arg1(dependencyMap[2]).GuildThemeSourcePreference.PERSONAL) {
    let GUILD = arg1(dependencyMap[2]).GuildThemeSourcePreference.PERSONAL;
  } else {
    GUILD = arg1(dependencyMap[2]).GuildThemeSourcePreference.GUILD;
  }
  return GUILD;
};
export const saveGuildThemeNuxPreference = function saveGuildThemeNuxPreference(arg0, arg1) {
  return _saveGuildThemeNuxPreference(...arguments);
};
