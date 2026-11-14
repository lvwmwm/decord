// Module ID: 18565
// Function ID: 18566
// Name: useDMPermissionsOverrideCount
// Dependencies: [5177, 5131, 18566, 504, 2]
// Exports: useDMPermissionsOverrideCount

// Module 18565 (useDMPermissionsOverrideCount)
import GuildStore from "GuildStore" /* 5177 */;
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
