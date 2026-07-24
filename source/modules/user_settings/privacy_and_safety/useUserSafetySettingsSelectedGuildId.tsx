// Module ID: 14582
// Function ID: 111234
// Name: useUserSafetySettingsSelectedGuildId
// Dependencies: [1838, 14580, 653, 566, 2]
// Exports: useAllServersOptionSelected, useIsSelectedGuildAHub

// Module 14582 (useUserSafetySettingsSelectedGuildId)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { GuildFeatures } from "ME";

let closure_3;
let closure_4;
const require = arg1;
function useUserSafetySettingsSelectedGuildId() {
  return callback().selectedGuildId;
}
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_3, useUserSafetySettingsSelectedGuildStore: closure_4 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
const result = require("ME").fileFinishedImporting("modules/user_settings/privacy_and_safety/useUserSafetySettingsSelectedGuildId.tsx");

export { useUserSafetySettingsSelectedGuildId };
export const useAllServersOptionSelected = function useAllServersOptionSelected() {
  return callback().selectedGuildId === closure_3;
};
export const useIsSelectedGuildAHub = function useIsSelectedGuildAHub() {
  let hasItem;
  const _require = useUserSafetySettingsSelectedGuildId();
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_2.getGuild(closure_0));
  if (null != stateFromStores) {
    const features = stateFromStores.features;
    hasItem = features.has(GuildFeatures.HUB);
  }
  return null != hasItem && hasItem;
};
