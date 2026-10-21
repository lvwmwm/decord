// Module ID: 14077
// Function ID: 14078
// Name: openGuildTagCreateFlow
// Dependencies: [13288, 5167, 5192, 14078, 2002, 2]
// Exports: default

// Module 14077 (openGuildTagCreateFlow)
import asyncRequire from "asyncRequire" /* 2002 */;
import Powerups from "Powerups" /* 5167 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 13288 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(14078, dependencyMap.paths), "GuildTagCreateGuildListBottomSheet", obj3);
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    const tmp3 = openGuildPowerupsModalDefault;
    tmp3(obj);
  }
};
