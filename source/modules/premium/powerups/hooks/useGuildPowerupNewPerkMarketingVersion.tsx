// Module ID: 11524
// Function ID: 89773
// Name: useGuildPowerupNewPerkMarketingVersion
// Dependencies: [755040256, 87425024, 79429632, 146145280, 131072, 779419648, 2885681159, 3791650830, 905969665, 33554434, 1946157056, 4096]
// Exports: default

// Module 11524 (useGuildPowerupNewPerkMarketingVersion)
import showActionSheet from "showActionSheet";

let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ GuildPowerupNewPerkMarketingVersion: closure_5, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: closure_6 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ GuildFeatures: closure_7, Permissions: closure_8 } = arg1(dependencyMap[4]));
const result = showActionSheet.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupNewPerkMarketingVersion.tsx");

export default function useGuildPowerupNewPerkMarketingVersion(guildId) {
  const arg1 = guildId;
  const dependencyMap = arg1;
  const gameServerEnabled = arg1(dependencyMap[5]).useGameServerEnabled(guildId, "useGuildPowerupNewPerkMarketingVersion");
  const React = gameServerEnabled;
  const obj = arg1(dependencyMap[5]);
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => {
    const guild = stateFromStores.getGuild(arg0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(constants.GAME_SERVERS);
    }
    return hasItem;
  });
  closure_3 = stateFromStores;
  const obj2 = arg1(dependencyMap[6]);
  const serverThemeEnabled = arg1(dependencyMap[7]).useServerThemeEnabled(guildId, "useGuildPowerupNewPerkMarketingVersion");
  const obj3 = arg1(dependencyMap[7]);
  let serverThemeUserEnabled = serverThemeEnabled;
  if (serverThemeEnabled) {
    serverThemeUserEnabled = obj4.useServerThemeUserEnabled("useGuildPowerupNewPerkMarketingVersion");
  }
  let closure_4 = serverThemeUserEnabled;
  const obj4 = arg1(dependencyMap[8]);
  const items1 = [closure_4, closure_3];
  const stateFromStores1 = arg1(dependencyMap[6]).useStateFromStores(items1, () => serverThemeUserEnabled.can(constants2.MANAGE_GUILD, stateFromStores.getGuild(arg0)));
  const items2 = [arg1, gameServerEnabled, stateFromStores, serverThemeUserEnabled, guildId, stateFromStores1];
  return React.useMemo((arg0, self) => {
    let tmp;
    if (null != self) {
      const allPowerups = self.allPowerups;
      if (null != allPowerups) {
        tmp = allPowerups[closure_0(undefined, closure_1[9]).GUILD_POWERUP_TAG_SKU_ID];
      }
    }
    if (null != self) {
      const unlockedPowerups = self.unlockedPowerups;
      if (null != unlockedPowerups) {
        const tmp6 = unlockedPowerups[closure_0(undefined, closure_1[9]).GUILD_POWERUP_TAG_SKU_ID];
      }
    }
    if (tmp5) {
      if (null == tmp6) {
        if (stateFromStores1) {
          if (obj.canUseMobileServerTagSettings(arg0)) {
            return stateFromStores1.GUILD_TAG;
          }
          const obj = arg0(self[10]);
        }
      }
    }
    let tmp15;
    if (null != self) {
      const allPowerups2 = self.allPowerups;
      if (null != allPowerups2) {
        tmp15 = allPowerups2[closure_0(undefined, closure_1[9]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
      }
    }
    if (null != self) {
      const unlockedPowerups2 = self.unlockedPowerups;
      if (null != unlockedPowerups2) {
        const tmp20 = unlockedPowerups2[closure_0(undefined, closure_1[9]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
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
    if (null != self) {
      const allPowerups3 = self.allPowerups;
      if (null != allPowerups3) {
        tmp25 = allPowerups3[closure_0(undefined, closure_1[9]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
      }
    }
    if (null != self) {
      const unlockedPowerups3 = self.unlockedPowerups;
      if (null != unlockedPowerups3) {
        const tmp30 = unlockedPowerups3[closure_0(undefined, closure_1[9]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
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
      if (null != closure_1) {
        const unlockedPowerups = closure_1.unlockedPowerups;
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
    const arr = Array.from(closure_6[closure_5.GUILD_TAG_BADGE_PACKS_WAVE_TWO]);
    const tmp19 = null != tmp15;
    const tmp29 = null != tmp25;
    const tmp5 = null != tmp;
    someResult = _Array.from(closure_6[closure_5.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((arg0) => {
      let tmp;
      if (null != closure_1) {
        const unlockedPowerups = closure_1.unlockedPowerups;
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
