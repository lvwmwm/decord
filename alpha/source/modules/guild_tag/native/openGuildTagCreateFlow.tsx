// Module ID: 14658
// Function ID: 14659
// Name: openGuildTagCreateFlow
// Dependencies: [13871, 5222, 5247, 14659, 2000, 2]
// Exports: default

// Module 14658 (openGuildTagCreateFlow)
import asyncRequire from "asyncRequire" /* 2000 */;
import Powerups from "Powerups" /* 5222 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 13871 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(14659, dependencyMap.paths), "GuildTagCreateGuildListBottomSheet", obj3);
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    const tmp3 = openGuildPowerupsModalDefault;
    tmp3(obj);
  }
};
