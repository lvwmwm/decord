// Module ID: 18571
// Function ID: 18572
// Name: useUserSafetySettingsSelectedGuildId
// Dependencies: [5177, 18567, 1072, 504, 2]
// Exports: useAllServersOptionSelected, useIsSelectedGuildAHub, useUserSafetySettingsSelectedGuildId

// Module 18571 (useUserSafetySettingsSelectedGuildId)
import Constants from "Constants" /* 1072 */;
import GuildStore from "GuildStore" /* 5177 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 18567 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: c3, useUserSafetySettingsSelectedGuildStore: closure_4 } = UserSettingsSafetySelectedGuildStore);
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/useUserSafetySettingsSelectedGuildId.tsx");

export function useUserSafetySettingsSelectedGuildId() {
  return React3().selectedGuildId;
}
export function useAllServersOptionSelected() {
  return React3().selectedGuildId === _false;
}
export function useIsSelectedGuildAHub() {
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
}
