// Module ID: 18185
// Function ID: 18186
// Name: useDMPermissionsOverrideCount
// Dependencies: [5041, 4995, 18186, 504, 2]
// Exports: useDMPermissionsOverrideCount

// Module 18185 (useDMPermissionsOverrideCount)
import GuildStore from "GuildStore" /* 5041 */;
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
