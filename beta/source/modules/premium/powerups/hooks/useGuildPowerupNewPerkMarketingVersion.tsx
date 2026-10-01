// Module ID: 11999
// Function ID: 12000
// Name: useGuildPowerupNewPerkMarketingVersion
// Dependencies: [19, 2067, 4469, 4724, 1074, 4747, 504, 4761, 4760, 4727, 9051, 2]
// Exports: default

// Module 11999 (useGuildPowerupNewPerkMarketingVersion)
import Powerups from "Powerups" /* 4727 */;
import GuildSettingsServerTagUtils from "GuildSettingsServerTagUtils" /* 9051 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import Constants from "Constants" /* 1074 */;
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
  _require = guildId;
  dependencyMap = arg1;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("GameServerExperiment");
  const gameServerEnabled = obj.useGameServerEnabled(guildId, "useGuildPowerupNewPerkMarketingVersion");
  const items = [stateFromStores];
  const obj2 = require("get initialized");
  const tmp4 = stateFromStores;
  stateFromStores = obj2.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(guildId);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(metroImportDefault.GAME_SERVERS);
    }
    return hasItem;
  });
  const obj3 = require("ServerThemeExperiment");
  let serverThemeEnabled = obj3.useServerThemeEnabled(guildId, "useGuildPowerupNewPerkMarketingVersion");
  const obj4 = require("ServerThemeUserExperiment");
  const serverThemeUserEnabled = obj4.useServerThemeUserEnabled("useGuildPowerupNewPerkMarketingVersion");
  const obj5 = require("ServerThemeExperiment");
  const serverThemeRollbackEnabled = obj5.useServerThemeRollbackEnabled(guildId, "useGuildPowerupNewPerkMarketingVersion");
  if (serverThemeEnabled) {
    serverThemeEnabled = serverThemeUserEnabled;
  }
  if (serverThemeEnabled) {
    serverThemeEnabled = !serverThemeRollbackEnabled;
  }
  const items1 = [serverThemeEnabled, tmp4];
  const tmpResult = tmp(504);
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => PermissionStore.can(metroImportAll.MANAGE_GUILD, GuildStore.getGuild(guildId)));
  const items2 = [arg1, gameServerEnabled, stateFromStores, serverThemeEnabled, guildId, stateFromStores1];
  return gameServerEnabled.useMemo(() => {
    let GUILD_TAG_BADGE_PACKS_WAVE_TWO;
    let tmp18;
    let tmp27;
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
        tmp14 = allPowerups2[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
      }
    }
    const tmp17 = null != tmp14;
    if (tmp != null) {
      const unlockedPowerups2 = tmp.unlockedPowerups;
      if (unlockedPowerups2 != null) {
        tmp18 = unlockedPowerups2[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
      }
    }
    const tmp21 = serverThemeEnabled;
    if (tmp21) {
      if (tmp17) {
        if (null == tmp18) {
          return hasOwnProperty.GUILD_THEME;
        }
      }
    }
    let tmp23;
    if (tmp != null) {
      const allPowerups3 = tmp.allPowerups;
      if (allPowerups3 != null) {
        tmp23 = allPowerups3[Powerups.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
      }
    }
    const tmp26 = null != tmp23;
    if (tmp != null) {
      const unlockedPowerups3 = tmp.unlockedPowerups;
      if (unlockedPowerups3 != null) {
        tmp27 = unlockedPowerups3[Powerups.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
      }
    }
    if (tmp26) {
      let FILE_UPLOAD_250_MB;
      if (null == tmp27) {
        FILE_UPLOAD_250_MB = hasOwnProperty.FILE_UPLOAD_250_MB;
      }
      return FILE_UPLOAD_250_MB;
    }
    const arr = Array.from(metroRequire[hasOwnProperty.GUILD_TAG_BADGE_PACKS_WAVE_TWO]);
    const tmp31 = metroRequire;
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
      const tmp33 = gameServerEnabled;
      if (tmp33) {
        let GAME_SERVER_HOSTING;
        const tmp34 = stateFromStores;
        if (!tmp34) {
          GAME_SERVER_HOSTING = hasOwnProperty.GAME_SERVER_HOSTING;
        }
        GUILD_TAG_BADGE_PACKS_WAVE_TWO = GAME_SERVER_HOSTING;
      }
      const _Array = Array;
      let num = 0;
      const arr2 = Array.from(tmp31[hasOwnProperty.GUILD_TAG_BADGE_PACKS_WAVE_ONE]);
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
