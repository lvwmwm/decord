// Module ID: 11535
// Function ID: 89848
// Name: useGuildPowerupNewPerkMarketingVersion
// Dependencies: [31, 1838, 3758, 4018, 653, 4041, 566, 4060, 4059, 4021, 8441, 2]
// Exports: default

// Module 11535 (useGuildPowerupNewPerkMarketingVersion)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import BoostedGuildTiers from "BoostedGuildTiers";
import ME from "ME";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ GuildPowerupNewPerkMarketingVersion: closure_5, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: closure_6 } = BoostedGuildTiers);
({ GuildFeatures: closure_7, Permissions: closure_8 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupNewPerkMarketingVersion.tsx");

export default function useGuildPowerupNewPerkMarketingVersion(guildId) {
  const _require = guildId;
  const dependencyMap = arg1;
  const gameServerEnabled = _require(4041).useGameServerEnabled(guildId, "useGuildPowerupNewPerkMarketingVersion");
  let obj = _require(4041);
  const items = [stateFromStores];
  stateFromStores = _require(566).useStateFromStores(items, () => {
    const guild = stateFromStores.getGuild(closure_0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(outer1_7.GAME_SERVERS);
    }
    return hasItem;
  });
  const obj2 = _require(566);
  const serverThemeEnabled = _require(4060).useServerThemeEnabled(guildId, "useGuildPowerupNewPerkMarketingVersion");
  const obj3 = _require(4060);
  let serverThemeUserEnabled = serverThemeEnabled;
  if (serverThemeEnabled) {
    serverThemeUserEnabled = obj4.useServerThemeUserEnabled("useGuildPowerupNewPerkMarketingVersion");
  }
  obj4 = _require(4059);
  const items1 = [serverThemeUserEnabled, stateFromStores];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => serverThemeUserEnabled.can(outer1_8.MANAGE_GUILD, stateFromStores.getGuild(closure_0)));
  const items2 = [arg1, gameServerEnabled, stateFromStores, serverThemeUserEnabled, guildId, stateFromStores1];
  return gameServerEnabled.useMemo(() => {
    let tmp;
    if (null != closure_1) {
      const allPowerups = closure_1.allPowerups;
      if (null != allPowerups) {
        tmp = allPowerups[guildId(undefined, closure_1[9]).GUILD_POWERUP_TAG_SKU_ID];
      }
    }
    if (null != closure_1) {
      let unlockedPowerups = closure_1.unlockedPowerups;
      if (null != unlockedPowerups) {
        const tmp6 = unlockedPowerups[guildId(undefined, closure_1[9]).GUILD_POWERUP_TAG_SKU_ID];
      }
    }
    if (tmp5) {
      if (null == tmp6) {
        if (stateFromStores1) {
          if (obj.canUseMobileServerTagSettings(guildId)) {
            return stateFromStores1.GUILD_TAG;
          }
          obj = guildId(closure_1[10]);
        }
      }
    }
    let tmp15;
    if (null != closure_1) {
      const allPowerups2 = closure_1.allPowerups;
      if (null != allPowerups2) {
        tmp15 = allPowerups2[guildId(undefined, closure_1[9]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
      }
    }
    if (null != closure_1) {
      const unlockedPowerups2 = closure_1.unlockedPowerups;
      if (null != unlockedPowerups2) {
        const tmp20 = unlockedPowerups2[guildId(undefined, closure_1[9]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
      }
    }
    if (serverThemeUserEnabled) {
      if (tmp19) {
        if (null == tmp20) {
          return stateFromStores1.GUILD_THEME;
        }
      }
    }
    let tmp25;
    if (null != closure_1) {
      const allPowerups3 = closure_1.allPowerups;
      if (null != allPowerups3) {
        tmp25 = allPowerups3[guildId(undefined, closure_1[9]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
      }
    }
    if (null != closure_1) {
      const unlockedPowerups3 = closure_1.unlockedPowerups;
      if (null != unlockedPowerups3) {
        const tmp30 = unlockedPowerups3[guildId(undefined, closure_1[9]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
      }
    }
    if (tmp29) {
      if (null == tmp30) {
        return stateFromStores1.FILE_UPLOAD_250_MB;
      }
    }
    let someResult = globalThis;
    if (!arr.some((arg0) => {
      let tmp;
      if (null != outer1_1) {
        const unlockedPowerups = outer1_1.unlockedPowerups;
        if (null != unlockedPowerups) {
          tmp = unlockedPowerups[arg0];
        }
      }
      return null != tmp;
    })) {
      const GUILD_TAG_BADGE_PACKS_WAVE_TWO = stateFromStores1.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
    }
    if (gameServerEnabled) {
      if (!stateFromStores) {
        let GAME_SERVER_HOSTING = stateFromStores1.GAME_SERVER_HOSTING;
      }
    }
    const _Array = someResult.Array;
    arr = Array.from(outer1_6[stateFromStores1.GUILD_TAG_BADGE_PACKS_WAVE_TWO]);
    tmp19 = null != tmp15;
    tmp29 = null != tmp25;
    tmp5 = null != tmp;
    someResult = _Array.from(outer1_6[stateFromStores1.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((arg0) => {
      let tmp;
      if (null != outer1_1) {
        const unlockedPowerups = outer1_1.unlockedPowerups;
        if (null != unlockedPowerups) {
          tmp = unlockedPowerups[arg0];
        }
      }
      return null != tmp;
    });
    let num8 = 0;
    if (!someResult) {
      num8 = stateFromStores1.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
    }
    GAME_SERVER_HOSTING = num8;
  }, items2);
};
