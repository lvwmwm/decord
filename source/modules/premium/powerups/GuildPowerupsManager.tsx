// Module ID: 16515
// Function ID: 16516
// Name: handleSelectedGuildChange
// Dependencies: [1910, 3989, 4167, 4231, 5300, 1913, 4255, 4272, 4274, 4275, 11930, 11934, 15364, 4580, 4273, 11923, 11909, 4240, 2]

// Module 16515 (handleSelectedGuildChange)
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import calculateAppliedBoosts from "calculateAppliedBoosts";
import "initialize";

const require = arg1;
class GuildPowerupsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(handleConnectionOpen, applyArgumentsResult.handleSelectedGuildChange);
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
        const GameServerExperiment = tmp10(4255).GameServerExperiment;
        let obj = { guildId: null, location: "GuildPowerupsManager" };
        obj[0] = guild.id;
        GameServerExperiment.trackExposure(obj);
        const FileUpload250MbPowerupExperiment = tmp10(4272).FileUpload250MbPowerupExperiment;
        obj = { guildId: null, location: "GuildPowerupsManager" };
        obj[0] = guild.id;
        FileUpload250MbPowerupExperiment.trackExposure(obj);
        const ServerThemeExperiment = tmp10(4274).ServerThemeExperiment;
        const obj1 = { guildId: null, location: "GuildPowerupsManager" };
        obj1[0] = guild.id;
        ServerThemeExperiment.trackExposure(obj1);
        const ServerThemeApexShadowExperiment = tmp10(4275).ServerThemeApexShadowExperiment;
        const obj2 = { guildId: null, location: "GuildPowerupsManager" };
        obj2[0] = guild.id;
        const config = ServerThemeApexShadowExperiment.getConfig(obj2);
        let tmp10Result = tmp10(4255);
        if (tmp10Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp10(11930).GameServerPricingExperiment;
          obj = { guildId: null, location: "GuildPowerupsManager" };
          obj[0] = guild.id;
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp10Result = tmp10(11934);
        if (!tmp10Result.getHasAllocateBoostPermission(getUncachedChannelPermissions, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp10(15364).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp10(4580).isMobile;
          if (isMobile) {
            isMobile = tmp10(4274).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp10Result2 = tmp10(4274);
          }
          if (isMobile) {
            isMobile = tmp10(15364).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result3 = tmp10(15364);
          }
          if (isMobile) {
            isMobile = tmp10(4273).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp10Result4 = tmp10(4273);
          }
          let showCoachmark = tmp10(4580).isMobile;
          if (showCoachmark) {
            showCoachmark = tmp10(15364).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result5 = tmp10(15364);
          }
          if (showCoachmark) {
            showCoachmark = importDefault(11923).getConfig({ location: "GuildPowerupsManager" }).showCoachmark;
            const obj8 = importDefault(11923);
          }
          if (tmp10(4580).isMobile) {
            if (!isMobile) {
              isMobile = showCoachmark;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp10Result1 = tmp10(15364);
        }
        if (calculateAppliedBoosts.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp10(11909).fetchPowerupCatalogForGuild(guildId);
          const tmp10Result6 = tmp10(11909);
        }
        if (obj9.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp10(11909).fetchGuildBoostEntitlements(guildId);
          const tmp10Result7 = tmp10(11909);
        }
        obj9 = calculateAppliedBoosts;
      }
    }
    obj12 = require(1913) /* getFavoritesAwareGuildName */;
  }
};
prototype["handleEntitlementUpdate"] = function handleEntitlementUpdate(guildId) {
  this.refreshGuildPowerups(guildId.guildId);
};
prototype["handleAppliedBoostUpdate"] = function handleAppliedBoostUpdate(guildId) {
  this.refreshGuildPowerups(guildId.guildId);
};
prototype["refreshGuildPowerups"] = function refreshGuildPowerups(guildId) {
  if (true === obj.getHasAllocateBoostPermission(getUncachedChannelPermissions, store.getGuild(guildId))) {
    let tmpResult = tmp(11909);
    const guildBoostEntitlements = tmpResult.fetchGuildBoostEntitlements(guildId);
    tmpResult = tmp(4240);
    const appliedGuildBoostsForGuild = tmpResult.fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const result = require("handleConnectionOpen").fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
