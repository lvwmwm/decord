// Module ID: 13400
// Function ID: 13401
// Name: useGuildPowerupNewPerkMarketingVersion
// Dependencies: [19, 4784, 4845, 8332, 1071, 6890, 504, 8001, 7998, 2]
// Exports: default

// Module 13400 (useGuildPowerupNewPerkMarketingVersion)
import GuildSettingsServerTagUtils from "GuildSettingsServerTagUtils" /* 7998 */;
import Powerups from "Powerups" /* 8001 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4784 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 8332 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ GuildPowerupNewPerkMarketingVersion: hasOwnProperty, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: metroRequire } = GuildPowerupsConstants);
({ GuildFeatures: metroImportDefault, Permissions: metroImportAll } = Constants);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupNewPerkMarketingVersion.tsx");

export default function useGuildPowerupNewPerkMarketingVersion(guildId, arg1) {
  let closure_1;
  let stateFromStores;
  let stateFromStores1;
  _require = guildId;
  dependencyMap = arg1;
  let obj = require("GameServerExperiment");
  const gameServerEnabled = obj.useGameServerEnabled(guildId, "useGuildPowerupNewPerkMarketingVersion");
  const items = [stateFromStores];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(guildId);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(metroImportDefault.GAME_SERVERS);
    }
    return hasItem;
  });
  const items1 = [stateFromStores1, stateFromStores];
  const obj3 = require("get initialized");
  stateFromStores1 = obj3.useStateFromStores(items1, () => PermissionStore.can(metroImportAll.MANAGE_GUILD, GuildStore.getGuild(guildId)));
  const items2 = [arg1, gameServerEnabled, stateFromStores, guildId, stateFromStores1];
  return gameServerEnabled.useMemo(() => {
    let GUILD_TAG_BADGE_PACKS_WAVE_TWO;
    let tmp18;
    let tmp6;
    let tmp = closure_1;
    let tmp2;
    if (closure_1 != null) {
      const allPowerups = tmp.allPowerups;
      if (allPowerups != null) {
        tmp2 = allPowerups[Powerups.GUILD_POWERUP_TAG_SKU_ID];
      }
    }
    const tmp5 = null != tmp2;
    if (tmp != null) {
      let unlockedPowerups = tmp.unlockedPowerups;
      if (unlockedPowerups != null) {
        tmp6 = unlockedPowerups[Powerups.GUILD_POWERUP_TAG_SKU_ID];
      }
    }
    if (tmp5) {
      if (null == tmp6) {
        const tmp9 = stateFromStores1;
        if (tmp9) {
          const obj = GuildSettingsServerTagUtils;
          if (obj.canUseMobileServerTagSettings(guildId)) {
            return hasOwnProperty.GUILD_TAG;
          }
        }
      }
    }
    let tmp14;
    if (tmp != null) {
      const allPowerups2 = tmp.allPowerups;
      if (allPowerups2 != null) {
        tmp14 = allPowerups2[Powerups.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
      }
    }
    const tmp17 = null != tmp14;
    if (tmp != null) {
      const unlockedPowerups2 = tmp.unlockedPowerups;
      if (unlockedPowerups2 != null) {
        tmp18 = unlockedPowerups2[Powerups.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
      }
    }
    if (tmp17) {
      let FILE_UPLOAD_250_MB;
      if (null == tmp18) {
        FILE_UPLOAD_250_MB = hasOwnProperty.FILE_UPLOAD_250_MB;
      }
      return FILE_UPLOAD_250_MB;
    }
    const arr = Array.from(metroRequire[hasOwnProperty.GUILD_TAG_BADGE_PACKS_WAVE_TWO]);
    const tmp22 = metroRequire;
    if (arr.some((item) => {
      let tmp;
      if (closure_1_1 != null) {
        const unlockedPowerups = closure_1_1.unlockedPowerups;
        if (unlockedPowerups != null) {
          tmp = unlockedPowerups[item];
        }
      }
      return null != tmp;
    })) {
      const tmp24 = gameServerEnabled;
      if (tmp24) {
        let GAME_SERVER_HOSTING;
        const tmp25 = stateFromStores;
        if (!tmp25) {
          GAME_SERVER_HOSTING = hasOwnProperty.GAME_SERVER_HOSTING;
        }
        GUILD_TAG_BADGE_PACKS_WAVE_TWO = GAME_SERVER_HOSTING;
      }
      const _Array = Array;
      let num = 0;
      const arr2 = Array.from(tmp22[hasOwnProperty.GUILD_TAG_BADGE_PACKS_WAVE_ONE]);
      if (!arr2.some((item) => {
        let tmp;
        if (closure_1_1 != null) {
          const unlockedPowerups = closure_1_1.unlockedPowerups;
          if (unlockedPowerups != null) {
            tmp = unlockedPowerups[item];
          }
        }
        return null != tmp;
      })) {
        num = hasOwnProperty.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
      }
      GAME_SERVER_HOSTING = num;
    } else {
      GUILD_TAG_BADGE_PACKS_WAVE_TWO = hasOwnProperty.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
    }
    FILE_UPLOAD_250_MB = GUILD_TAG_BADGE_PACKS_WAVE_TWO;
  }, items2);
};
