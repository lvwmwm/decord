// Module ID: 13816
// Function ID: 13817
// Name: openGuildTagCreateFlow
// Dependencies: [13371, 8001, 5127, 13817, 2119, 2]
// Exports: default

// Module 13816 (openGuildTagCreateFlow)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import Powerups from "Powerups" /* 8001 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 13371 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(13817, dependencyMap.paths), "GuildTagCreateGuildListBottomSheet", obj3);
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    const tmp3 = openGuildPowerupsModalDefault;
    tmp3(obj);
  }
};
