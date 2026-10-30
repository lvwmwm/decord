// Module ID: 14692
// Function ID: 14693
// Name: openGuildTagCreateFlow
// Dependencies: [14005, 5228, 5253, 14693, 1995, 2]
// Exports: default

// Module 14692 (openGuildTagCreateFlow)
import asyncRequire from "asyncRequire" /* 1995 */;
import Powerups from "Powerups" /* 5228 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 14005 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(14693, dependencyMap.paths), "GuildTagCreateGuildListBottomSheet", obj3);
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    const tmp3 = openGuildPowerupsModalDefault;
    tmp3(obj);
  }
};
