// Module ID: 17580
// Function ID: 17581
// Name: useDMPermissionsOverrideCount
// Dependencies: [4914, 4868, 17581, 504, 2]
// Exports: useDMPermissionsOverrideCount

// Module 17580 (useDMPermissionsOverrideCount)
import GuildStore from "GuildStore" /* 4914 */;
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
