// Module ID: 9777
// Function ID: 75997
// Name: _saveGuildIdentityChanges
// Dependencies: []
// Exports: clearErrors, initGuildIdentitySettings, resetAllPending, resetPendingMemberChanges, resetPendingProfileChanges, saveGuildIdentityChanges, setCurrentGuild

// Module 9777 (_saveGuildIdentityChanges)
function _saveGuildIdentityChanges() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _saveGuildIdentityChanges = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_identity/GuildIdentityActionCreators.tsx");

export const saveGuildIdentityChanges = function saveGuildIdentityChanges(id, guildMemberChangesForUpdateRequest) {
  return _saveGuildIdentityChanges(...arguments);
};
export const setCurrentGuild = function setCurrentGuild(id) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: id };
  obj.dispatch(obj);
};
export const initGuildIdentitySettings = function initGuildIdentitySettings(id) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "USER_PROFILE_SETTINGS_INIT", guildId: id };
  obj.dispatch(obj);
};
export const resetPendingMemberChanges = function resetPendingMemberChanges() {
  importDefault(dependencyMap[2]).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
};
export const resetPendingProfileChanges = function resetPendingProfileChanges() {
  importDefault(dependencyMap[2]).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
};
export const resetAllPending = function resetAllPending() {
  importDefault(dependencyMap[2]).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
};
export const clearErrors = function clearErrors() {
  importDefault(dependencyMap[2]).dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
};
