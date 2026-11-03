// Module ID: 14865
// Function ID: 14866
// Name: openGuildTagCreateFlow
// Dependencies: [14186, 5356, 5381, 14866, 2123, 2]
// Exports: default

// Module 14865 (openGuildTagCreateFlow)
import asyncRequire from "asyncRequire" /* 2123 */;
import Powerups from "Powerups" /* 5356 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 14186 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(14866, dependencyMap.paths), "GuildTagCreateGuildListBottomSheet", obj3);
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    const tmp3 = openGuildPowerupsModalDefault;
    tmp3(obj);
  }
};
