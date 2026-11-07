// Module ID: 14970
// Function ID: 14971
// Name: openGuildTagCreateFlow
// Dependencies: [14293, 5349, 5374, 14971, 2118, 2]
// Exports: default

// Module 14970 (openGuildTagCreateFlow)
import asyncRequire from "asyncRequire" /* 2118 */;
import Powerups from "Powerups" /* 5349 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 14293 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(14971, dependencyMap.paths), "GuildTagCreateGuildListBottomSheet", obj3);
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    const tmp3 = openGuildPowerupsModalDefault;
    tmp3(obj);
  }
};
