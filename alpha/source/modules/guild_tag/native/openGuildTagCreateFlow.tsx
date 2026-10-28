// Module ID: 14424
// Function ID: 14425
// Name: openGuildTagCreateFlow
// Dependencies: [13638, 5221, 5246, 14425, 1999, 2]
// Exports: default

// Module 14424 (openGuildTagCreateFlow)
import asyncRequire from "asyncRequire" /* 1999 */;
import Powerups from "Powerups" /* 5221 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 13638 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(14425, dependencyMap.paths), "GuildTagCreateGuildListBottomSheet", obj3);
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    const tmp3 = openGuildPowerupsModalDefault;
    tmp3(obj);
  }
};
