// Module ID: 14149
// Function ID: 14150
// Name: openGuildTagCreateFlow
// Dependencies: [13361, 5183, 5208, 14150, 2002, 2]
// Exports: default

// Module 14149 (openGuildTagCreateFlow)
import asyncRequire from "asyncRequire" /* 2002 */;
import Powerups from "Powerups" /* 5183 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 13361 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(14150, dependencyMap.paths), "GuildTagCreateGuildListBottomSheet", obj3);
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    const tmp3 = openGuildPowerupsModalDefault;
    tmp3(obj);
  }
};
