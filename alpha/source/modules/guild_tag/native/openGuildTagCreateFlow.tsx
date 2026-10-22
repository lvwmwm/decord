// Module ID: 14125
// Function ID: 14126
// Name: openGuildTagCreateFlow
// Dependencies: [13338, 5171, 5196, 14126, 2002, 2]
// Exports: default

// Module 14125 (openGuildTagCreateFlow)
import asyncRequire from "asyncRequire" /* 2002 */;
import Powerups from "Powerups" /* 5171 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 13338 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(14126, dependencyMap.paths), "GuildTagCreateGuildListBottomSheet", obj3);
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    const tmp3 = openGuildPowerupsModalDefault;
    tmp3(obj);
  }
};
