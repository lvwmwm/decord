// Module ID: 14200
// Function ID: 14201
// Name: openGuildTagCreateFlow
// Dependencies: [13419, 5186, 5211, 14201, 1999, 2]
// Exports: default

// Module 14200 (openGuildTagCreateFlow)
import asyncRequire from "asyncRequire" /* 1999 */;
import Powerups from "Powerups" /* 5186 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 13419 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(14201, dependencyMap.paths), "GuildTagCreateGuildListBottomSheet", obj3);
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    const tmp3 = openGuildPowerupsModalDefault;
    tmp3(obj);
  }
};
