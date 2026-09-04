// Module ID: 17293
// Function ID: 17294
// Name: handleSelectedGuildChange
// Dependencies: [1908, 4120, 4302, 4367, 7058, 1911, 4391, 4408, 4410, 4411, 12441, 12445, 16089, 4762, 4409, 12434, 12420, 4376, 2]

// Module 17293 (handleSelectedGuildChange)
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1911 */;
import initializeDefault from "initialize" /* 7058 */;
import getUnitIdDefault from "getUnitId" /* 12434 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;
import closure_4 from "getUncachedChannelPermissions" /* 4120 */;
import closure_5 from "handleConnectionOpen" /* 4302 */;
import closure_6 from "calculateAppliedBoosts" /* 4367 */;

require = arg1;
initializeDefault;
class GuildPowerupsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_5, applyArgumentsResult.handleSelectedGuildChange);
    obj = { GUILD_POWERUP_ENTITLEMENTS_CREATE: handleEntitlementUpdate.bind(applyArgumentsResult), GUILD_POWERUP_ENTITLEMENTS_DELETE: handleEntitlementUpdate2.bind(applyArgumentsResult), GUILD_APPLIED_BOOSTS_UPDATE: handleAppliedBoostUpdate.bind(applyArgumentsResult) };
    ({ handleEntitlementUpdate, handleEntitlementUpdate: handleEntitlementUpdate2, handleAppliedBoostUpdate } = applyArgumentsResult);
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const prototype = GuildPowerupsManager.prototype;
prototype["handleSelectedGuildChange"] = function handleSelectedGuildChange() {
  guildId = guildId.getGuildId();
  if (null != guildId) {
    if (!obj12.isFavoritesGuildId(guildId)) {
      const guild = store.getGuild(guildId);
      if (null != guild) {
        const GameServerExperiment = tmp10(4391).GameServerExperiment;
        let obj = { guildId: null, location: "GuildPowerupsManager" };
        obj[0] = guild.id;
        GameServerExperiment.trackExposure(obj);
        const FileUpload250MbPowerupExperiment = tmp10(4408).FileUpload250MbPowerupExperiment;
        obj = { guildId: null, location: "GuildPowerupsManager" };
        obj[0] = guild.id;
        FileUpload250MbPowerupExperiment.trackExposure(obj);
        const ServerThemeExperiment = tmp10(4410).ServerThemeExperiment;
        obj1 = { guildId: null, location: "GuildPowerupsManager" };
        obj1[0] = guild.id;
        ServerThemeExperiment.trackExposure(obj1);
        const ServerThemeApexShadowExperiment = tmp10(4411).ServerThemeApexShadowExperiment;
        const obj2 = { guildId: null, location: "GuildPowerupsManager" };
        obj2[0] = guild.id;
        const config = ServerThemeApexShadowExperiment.getConfig(obj2);
        let tmp10Result = tmp10(4391);
        if (tmp10Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp10(12441).GameServerPricingExperiment;
          obj = { guildId: null, location: "GuildPowerupsManager" };
          obj[0] = guild.id;
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp10Result = tmp10(12445);
        if (!tmp10Result.getHasAllocateBoostPermission(closure_4, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp10(16089).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp10(4762).isMobile;
          if (isMobile) {
            isMobile = tmp10(4410).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp10Result2 = tmp10(4410);
          }
          if (isMobile) {
            isMobile = tmp10(16089).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result3 = tmp10(16089);
          }
          if (isMobile) {
            isMobile = tmp10(4409).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp10Result4 = tmp10(4409);
          }
          let showCoachmark = tmp10(4762).isMobile;
          if (showCoachmark) {
            showCoachmark = tmp10(16089).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result5 = tmp10(16089);
          }
          if (showCoachmark) {
            showCoachmark = getUnitIdDefault.getConfig({ location: "GuildPowerupsManager" }).showCoachmark;
            const obj8 = getUnitIdDefault;
          }
          if (tmp10(4762).isMobile) {
            if (!isMobile) {
              isMobile = showCoachmark;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp10Result1 = tmp10(16089);
        }
        if (closure_6.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp10(12420).fetchPowerupCatalogForGuild(guildId);
          const tmp10Result6 = tmp10(12420);
        }
        if (obj9.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp10(12420).fetchGuildBoostEntitlements(guildId);
          const tmp10Result7 = tmp10(12420);
        }
        obj9 = closure_6;
      }
    }
    obj12 = getFavoritesAwareGuildName;
  }
};
prototype["handleEntitlementUpdate"] = function handleEntitlementUpdate(guildId) {
  this.refreshGuildPowerups(guildId.guildId);
};
prototype["handleAppliedBoostUpdate"] = function handleAppliedBoostUpdate(guildId) {
  this.refreshGuildPowerups(guildId.guildId);
};
prototype["refreshGuildPowerups"] = function refreshGuildPowerups(guildId) {
  if (true === obj.getHasAllocateBoostPermission(closure_4, store.getGuild(guildId))) {
    let tmpResult = tmp(12420);
    const guildBoostEntitlements = tmpResult.fetchGuildBoostEntitlements(guildId);
    tmpResult = tmp(4376);
    const appliedGuildBoostsForGuild = tmpResult.fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const result = require("set").fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
