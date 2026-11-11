// Module ID: 10611
// Function ID: 10612
// Name: openGuildTagCreateFlow
// Dependencies: [10612, 5464, 5489, 10738, 2118, 2]
// Exports: default

// Module 10611 (openGuildTagCreateFlow)
import asyncRequire from "asyncRequire" /* 2118 */;
import Powerups from "Powerups" /* 5464 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 10612 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(10738, dependencyMap.paths), "GuildTagCreateGuildListBottomSheet", obj3);
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    const tmp3 = openGuildPowerupsModalDefault;
    tmp3(obj);
  }
};
