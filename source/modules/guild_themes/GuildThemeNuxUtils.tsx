// Module ID: 15040
// Function ID: 114548
// Name: _saveGuildThemeNuxPreference
// Dependencies: [5, 1316, 4062, 1331, 2]
// Exports: getInitialGuildThemeNuxSelection, saveGuildThemeNuxPreference

// Module 15040 (_saveGuildThemeNuxPreference)
import asyncGeneratorStep from "asyncGeneratorStep";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function _saveGuildThemeNuxPreference() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("GuildThemeSourcePreference").fileFinishedImporting("modules/guild_themes/GuildThemeNuxUtils.tsx");

export const getInitialGuildThemeNuxSelection = function getInitialGuildThemeNuxSelection() {
  defaultGuildThemePreference = defaultGuildThemePreference.getDefaultGuildThemePreference();
  if (defaultGuildThemePreference === require(4062) /* GuildThemeSourcePreference */.GuildThemeSourcePreference.PERSONAL) {
    let GUILD = require(4062) /* GuildThemeSourcePreference */.GuildThemeSourcePreference.PERSONAL;
  } else {
    GUILD = require(4062) /* GuildThemeSourcePreference */.GuildThemeSourcePreference.GUILD;
  }
  return GUILD;
};
export const saveGuildThemeNuxPreference = function saveGuildThemeNuxPreference(arg0, arg1) {
  return _saveGuildThemeNuxPreference(...arguments);
};
