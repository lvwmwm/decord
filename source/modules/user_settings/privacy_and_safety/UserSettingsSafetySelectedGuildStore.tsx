// Module ID: 14416
// Function ID: 108735
// Name: GUILD_SELECT_ALL_SERVERS_OPTION_ID
// Dependencies: []
// Exports: getSelectedGuildId, setSelectedGuildId

// Module 14416 (GUILD_SELECT_ALL_SERVERS_OPTION_ID)
let closure_0 = { selectedGuildId: "0" };
const _module = require(dependencyMap[0]);
const obj = _module.create((arg0) => {
  let closure_0 = arg0;
  const obj = {};
  const merged = Object.assign(closure_0);
  obj["setSelectedGuildId"] = function setSelectedGuildId(selectedGuildId) {
    selectedGuildId({ selectedGuildId });
  };
  obj["reset"] = function reset() {
    arg0(arg0);
  };
  return obj;
});
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/user_settings/privacy_and_safety/UserSettingsSafetySelectedGuildStore.tsx");

export const GUILD_SELECT_ALL_SERVERS_OPTION_ID = "0";
export const useUserSafetySettingsSelectedGuildStore = obj;
export const setSelectedGuildId = function setSelectedGuildId(selectedGuildId) {
  const obj = { selectedGuildId };
  return obj.setState(obj);
};
export const getSelectedGuildId = function getSelectedGuildId() {
  return obj.getState().selectedGuildId;
};
