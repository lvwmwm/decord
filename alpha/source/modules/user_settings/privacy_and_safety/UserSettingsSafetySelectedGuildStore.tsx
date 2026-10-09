// Module ID: 16190
// Function ID: 16191
// Name: UserSettingsSafetySelectedGuildStore
// Dependencies: [570, 2]
// Exports: getSelectedGuildId, setSelectedGuildId

// Module 16190 (UserSettingsSafetySelectedGuildStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

let closure_0 = { selectedGuildId: "0" };
const useUserSafetySettingsSelectedGuildStore = module_570.create((arg0) => {
  closure_0 = arg0;
  let obj = {
    setSelectedGuildId(selectedGuildId) {
      const obj = { selectedGuildId };
      closure_0(obj);
    },
    reset() {
      closure_0(closure_0);
    }
  };
  const merged = Object.assign(closure_0);
  return obj;
});
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/UserSettingsSafetySelectedGuildStore.tsx");

export const GUILD_SELECT_ALL_SERVERS_OPTION_ID = "0";
export { useUserSafetySettingsSelectedGuildStore };
export const setSelectedGuildId = function setSelectedGuildId(selectedGuildId) {
  const obj = { selectedGuildId };
  return obj.setState(obj);
};
export const getSelectedGuildId = function getSelectedGuildId() {
  return obj.getState().selectedGuildId;
};
