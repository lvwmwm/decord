// Module ID: 15003
// Function ID: 15004
// Name: openGuildTagCreateFlow
// Dependencies: [14326, 5381, 5406, 15004, 2118, 2]
// Exports: default

// Module 15003 (openGuildTagCreateFlow)
import asyncRequire from "asyncRequire" /* 2118 */;
import Powerups from "Powerups" /* 5381 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 14326 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(15004, dependencyMap.paths), "GuildTagCreateGuildListBottomSheet", obj3);
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    const tmp3 = openGuildPowerupsModalDefault;
    tmp3(obj);
  }
};
