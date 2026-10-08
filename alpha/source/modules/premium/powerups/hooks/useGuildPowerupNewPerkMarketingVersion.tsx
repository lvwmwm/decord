// Module ID: 12256
// Function ID: 12257
// Name: useGuildPowerupNewPerkMarketingVersion
// Dependencies: [19, 2086, 4707, 4968, 1085, 558, 576, 4986, 504, 4973, 4972, 4971, 8616, 2]

// Module 12256 (useGuildPowerupNewPerkMarketingVersion)
import Powerups from "Powerups" /* 4971 */;
import GuildSettingsServerTagUtils from "GuildSettingsServerTagUtils" /* 8616 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4968 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ GuildPowerupNewPerkMarketingVersion: hasOwnProperty, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: metroRequire } = GuildPowerupsConstants);
({ GuildFeatures: metroImportDefault, Permissions: metroImportAll } = Constants);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildPowerupNewPerkMarketingVersion(arg0, arg1) {
  let closure_0;
  let closure_1;
  let first;
  let tmp12;
  let tmp14;
  let tmp7;
  _require = arg0;
  dependencyMap = arg1;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(6);
  const obj2 = require("GameServerExperiment");
  const gameServerEnabled = obj2.useGameServerEnabled(arg0, "useGuildPowerupNewPerkMarketingVersion");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    cResult[1] = arg0;
    cResult[2] = U;
    tmp7 = U;
  } else {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const tmpResult5 = tmp(4973);
  const serverThemeEnabled = tmpResult5.useServerThemeEnabled(arg0, "useGuildPowerupNewPerkMarketingVersion");
  const tmpResult6 = tmp(4972);
  const serverThemeUserEnabled = tmpResult6.useServerThemeUserEnabled("useGuildPowerupNewPerkMarketingVersion");
  const tmpResult7 = tmp(4973);
  const serverThemeRollbackEnabled = tmpResult7.useServerThemeRollbackEnabled(arg0, "useGuildPowerupNewPerkMarketingVersion");
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    const items1 = [PermissionStore, GuildStore];
    cResult[3] = items1;
    tmp12 = items1;
  } else {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
  }
  if (cResult[4] !== arg0) {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    cResult[4] = arg0;
    cResult[5] = tmp15;
    tmp14 = tmp15;
  } else {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
  }
  const tmpResult8 = tmp(504);
  const stateFromStores1 = tmpResult8.useStateFromStores(tmp12, tmp14);
  if (arg1 != null) {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    if (tmp18 != null) {
      class U {
        constructor() {
          const guild = GuildStore.getGuild(closure_0);
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(metroImportDefault.GAME_SERVERS);
          }
          return hasItem;
        }
      }
    }
  }
  const tmp19 = null != undefined;
  if (arg1 != null) {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    if (tmp20 != null) {
      class U {
        constructor() {
          const guild = GuildStore.getGuild(closure_0);
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(metroImportDefault.GAME_SERVERS);
          }
          return hasItem;
        }
      }
    }
  }
  if (tmp19) {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
  }
  if (arg1 != null) {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    if (tmp22 != null) {
      class U {
        constructor() {
          const guild = GuildStore.getGuild(closure_0);
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(metroImportDefault.GAME_SERVERS);
          }
          return hasItem;
        }
      }
    }
  }
  if (arg1 != null) {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    if (tmp23 != null) {
      class U {
        constructor() {
          const guild = GuildStore.getGuild(closure_0);
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(metroImportDefault.GAME_SERVERS);
          }
          return hasItem;
        }
      }
    }
  }
  if (serverThemeEnabled) {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
  }
  if (arg1 != null) {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    if (tmp25 != null) {
      class U {
        constructor() {
          const guild = GuildStore.getGuild(closure_0);
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(metroImportDefault.GAME_SERVERS);
          }
          return hasItem;
        }
      }
    }
  }
  const tmp26 = null != undefined;
  if (arg1 != null) {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    if (tmp27 != null) {
      class U {
        constructor() {
          const guild = GuildStore.getGuild(closure_0);
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(metroImportDefault.GAME_SERVERS);
          }
          return hasItem;
        }
      }
    }
  }
  if (tmp26) {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
  }
  const arr = Array.from(closure_6[constants.GUILD_TAG_BADGE_PACKS_WAVE_TWO]);
  const tmp28 = closure_6;
  const tmp29 = constants;
  if (arr.some((item) => {
    let tmp;
    if (closure_1 != null) {
      const unlockedPowerups = closure_1.unlockedPowerups;
      if (unlockedPowerups != null) {
        tmp = unlockedPowerups[item];
      }
    }
    return null != tmp;
  })) {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    const _Array = Array;
    const arr2 = Array.from(tmp28[tmp29.GUILD_TAG_BADGE_PACKS_WAVE_ONE]);
    if (!arr2.some((item) => {
      let tmp;
      if (closure_1 != null) {
        const unlockedPowerups = closure_1.unlockedPowerups;
        if (unlockedPowerups != null) {
          tmp = unlockedPowerups[item];
        }
      }
      return null != tmp;
    })) {
      class U {
        constructor() {
          const guild = GuildStore.getGuild(closure_0);
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(metroImportDefault.GAME_SERVERS);
          }
          return hasItem;
        }
      }
    }
  } else {
    class U {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.GAME_SERVERS);
        }
        return hasItem;
      }
    }
  }
}) : (function useGuildPowerupNewPerkMarketingVersion(arg0, arg1) {
  let closure_0;
  let closure_1;
  let stateFromStores;
  _require = arg0;
  dependencyMap = arg1;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("GameServerExperiment");
  const gameServerEnabled = obj.useGameServerEnabled(arg0, "useGuildPowerupNewPerkMarketingVersion");
  const items = [stateFromStores];
  const obj2 = require("get initialized");
  const tmp4 = stateFromStores;
  stateFromStores = obj2.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(metroImportDefault.GAME_SERVERS);
    }
    return hasItem;
  });
  const obj3 = require("ServerThemeExperiment");
  let serverThemeEnabled = obj3.useServerThemeEnabled(arg0, "useGuildPowerupNewPerkMarketingVersion");
  const obj4 = require("ServerThemeUserExperiment");
  const serverThemeUserEnabled = obj4.useServerThemeUserEnabled("useGuildPowerupNewPerkMarketingVersion");
  const obj5 = require("ServerThemeExperiment");
  const serverThemeRollbackEnabled = obj5.useServerThemeRollbackEnabled(arg0, "useGuildPowerupNewPerkMarketingVersion");
  if (serverThemeEnabled) {
    serverThemeEnabled = serverThemeUserEnabled;
  }
  if (serverThemeEnabled) {
    serverThemeEnabled = !serverThemeRollbackEnabled;
  }
  const items1 = [serverThemeEnabled, tmp4];
  const tmpResult = tmp(504);
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => PermissionStore.can(metroImportAll.MANAGE_GUILD, GuildStore.getGuild(closure_0)));
  const items2 = [arg1, gameServerEnabled, stateFromStores, serverThemeEnabled, arg0, stateFromStores1];
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
          if (obj.canUseMobileServerTagSettings(closure_0)) {
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
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupNewPerkMarketingVersion.tsx");

export default tmp4;
