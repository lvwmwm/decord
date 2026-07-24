// Module ID: 9817
// Function ID: 76256
// Name: _saveGuildIdentityChanges
// Dependencies: [5, 653, 686, 507, 7941, 7938, 2]
// Exports: clearErrors, initGuildIdentitySettings, resetAllPending, resetPendingMemberChanges, resetPendingProfileChanges, saveGuildIdentityChanges, setCurrentGuild

// Module 9817 (_saveGuildIdentityChanges)
import SafetyScannedUploadSurface from "SafetyScannedUploadSurface";
import { Endpoints } from "ME";

const require = arg1;
function _saveGuildIdentityChanges() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("dispatcher").fileFinishedImporting("modules/guild_identity/GuildIdentityActionCreators.tsx");

export const saveGuildIdentityChanges = function saveGuildIdentityChanges(id, guildMemberChangesForUpdateRequest) {
  return _saveGuildIdentityChanges(...arguments);
};
export const setCurrentGuild = function setCurrentGuild(id) {
  let obj = importDefault(686);
  obj = { type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: id };
  obj.dispatch(obj);
};
export const initGuildIdentitySettings = function initGuildIdentitySettings(id) {
  let obj = importDefault(686);
  obj = { type: "USER_PROFILE_SETTINGS_INIT", guildId: id };
  obj.dispatch(obj);
};
export const resetPendingMemberChanges = function resetPendingMemberChanges() {
  importDefault(686).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
};
export const resetPendingProfileChanges = function resetPendingProfileChanges() {
  importDefault(686).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
};
export const resetAllPending = function resetAllPending() {
  importDefault(686).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
};
export const clearErrors = function clearErrors() {
  importDefault(686).dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
};
