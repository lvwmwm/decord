// Module ID: 14734
// Function ID: 14735
// Name: openGuildTagCreateFlow
// Dependencies: [14055, 5233, 5258, 14735, 1994, 2]
// Exports: default

// Module 14734 (openGuildTagCreateFlow)
import asyncRequire from "asyncRequire" /* 1994 */;
import Powerups from "Powerups" /* 5233 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 14055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(14735, dependencyMap.paths), "GuildTagCreateGuildListBottomSheet", obj3);
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    const tmp3 = openGuildPowerupsModalDefault;
    tmp3(obj);
  }
};
