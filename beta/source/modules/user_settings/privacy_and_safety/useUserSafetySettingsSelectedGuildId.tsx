// Module ID: 15490
// Function ID: 15491
// Name: useUserSafetySettingsSelectedGuildId
// Dependencies: [2067, 15486, 1074, 504, 2]
// Exports: useAllServersOptionSelected, useIsSelectedGuildAHub, useUserSafetySettingsSelectedGuildId

// Module 15490 (useUserSafetySettingsSelectedGuildId)
import Constants from "Constants" /* 1074 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 15486 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: c3, useUserSafetySettingsSelectedGuildStore: closure_4 } = UserSettingsSafetySelectedGuildStore);
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/useUserSafetySettingsSelectedGuildId.tsx");

export const useUserSafetySettingsSelectedGuildId = function useUserSafetySettingsSelectedGuildId() {
  return React3().selectedGuildId;
};
export const useAllServersOptionSelected = function useAllServersOptionSelected() {
  return React3().selectedGuildId === _false;
};
export const useIsSelectedGuildAHub = function useIsSelectedGuildAHub() {
  const selectedGuildId = closure_4().selectedGuildId;
  const items = [GuildStore];
  const obj = selectedGuildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
  let flag;
  if (stateFromStores != null) {
    const features = stateFromStores.features;
    flag = features.has(GuildFeatures.HUB);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
