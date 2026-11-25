// Module ID: 17516
// Function ID: 17517
// Name: useDMPermissionsOverrideCount
// Dependencies: [4883, 4837, 17517, 504, 2]
// Exports: useDMPermissionsOverrideCount

// Module 17516 (useDMPermissionsOverrideCount)
import GuildStore from "GuildStore" /* 4883 */;
import size from "module_2" /* 2 */;

let guildIds, set;

const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/useDMPermissionsOverrideCount.tsx");

export function useDMPermissionsOverrideCount() {
  let defaultGuildsRestricted;
  let setting;
  const RestrictedGuildIds = setting(defaultGuildsRestricted[1]).RestrictedGuildIds;
  setting = RestrictedGuildIds.useSetting();
  const obj = setting(defaultGuildsRestricted[2]);
  defaultGuildsRestricted = obj.useDefaultGuildsRestricted();
  const items = [GuildStore];
  const items1 = [setting, defaultGuildsRestricted];
  const obj2 = setting(defaultGuildsRestricted[3]);
  return obj2.useStateFromStores(items, () => {
    set = new Set(set);
    guildIds = guildIds.getGuildIds();
    return guildIds.filter((item) => set.has(item) !== defaultGuildsRestricted).length;
  }, items1);
}
