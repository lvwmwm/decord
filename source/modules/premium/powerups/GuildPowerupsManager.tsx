// Module ID: 16191
// Function ID: 16192
// Name: handleSelectedGuildChange
// Dependencies: [1862, 3817, 4006, 4076, 5134, 1865, 4100, 4117, 4119, 4120, 11601, 11605, 15140, 4426, 4118, 11594, 11580, 11672, 4085, 2]

// Module 16191 (handleSelectedGuildChange)
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
        const GameServerExperiment = tmp10(4100).GameServerExperiment;
        let obj = { guildId: null, location: "GuildPowerupsManager" };
        obj[0] = guild.id;
        GameServerExperiment.trackExposure(obj);
        const FileUpload250MbPowerupExperiment = tmp10(4117).FileUpload250MbPowerupExperiment;
        obj = { guildId: null, location: "GuildPowerupsManager" };
        obj[0] = guild.id;
        FileUpload250MbPowerupExperiment.trackExposure(obj);
        const ServerThemeExperiment = tmp10(4119).ServerThemeExperiment;
        const obj1 = { guildId: null, location: "GuildPowerupsManager" };
        obj1[0] = guild.id;
        ServerThemeExperiment.trackExposure(obj1);
        const ServerThemeApexShadowExperiment = tmp10(4120).ServerThemeApexShadowExperiment;
        const obj2 = { guildId: null, location: "GuildPowerupsManager" };
        obj2[0] = guild.id;
        const config = ServerThemeApexShadowExperiment.getConfig(obj2);
        let tmp10Result = tmp10(4100);
        if (tmp10Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp10(11601).GameServerPricingExperiment;
          obj = { guildId: null, location: "GuildPowerupsManager" };
          obj[0] = guild.id;
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp10Result = tmp10(11605);
        if (!tmp10Result.getHasAllocateBoostPermission(getUncachedChannelPermissions, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp10(15140).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp10(4426).isMobile;
          if (isMobile) {
            isMobile = tmp10(4119).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp10Result2 = tmp10(4119);
          }
          if (isMobile) {
            isMobile = tmp10(15140).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result3 = tmp10(15140);
          }
          if (isMobile) {
            isMobile = tmp10(4118).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp10Result4 = tmp10(4118);
          }
          let showCoachmark = tmp10(4426).isMobile;
          if (showCoachmark) {
            showCoachmark = tmp10(15140).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp10Result5 = tmp10(15140);
          }
          if (showCoachmark) {
            showCoachmark = importDefault(11594).getConfig({ location: "GuildPowerupsManager" }).showCoachmark;
            const obj8 = importDefault(11594);
          }
          if (tmp10(4426).isMobile) {
            if (!isMobile) {
              isMobile = showCoachmark;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp10Result1 = tmp10(15140);
        }
        if (calculateAppliedBoosts.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp10(11580).fetchPowerupCatalogForGuild(guildId);
          const tmp10Result6 = tmp10(11580);
        }
        if (obj9.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp10(11580).fetchGuildBoostEntitlements(guildId);
          const tmp10Result7 = tmp10(11580);
        }
        obj9 = calculateAppliedBoosts;
      }
    }
    obj12 = require(1865) /* getFavoritesAwareGuildName */;
  }
};
prototype["handleEntitlementUpdate"] = function handleEntitlementUpdate(guildId) {
  this.refreshGuildPowerups(guildId.guildId);
};
prototype["handleAppliedBoostUpdate"] = function handleAppliedBoostUpdate(guildId) {
  this.refreshGuildPowerups(guildId.guildId);
};
prototype["refreshGuildPowerups"] = function refreshGuildPowerups(guildId) {
  let obj = require(11605) /* useHasAllocateBoostPermission */;
  if (true === obj.getHasAllocateBoostPermission(getUncachedChannelPermissions, store.getGuild(guildId))) {
    let tmpResult = tmp(11580);
    const guildBoostEntitlements = tmpResult.fetchGuildBoostEntitlements(guildId);
    tmpResult = tmp(4085);
    obj = { includeEnded: null };
    obj[0] = importDefault(11672).getConfig({ location: "GuildPowerupsManager" }).enabled;
    const appliedGuildBoostsForGuild = tmpResult.fetchAppliedGuildBoostsForGuild(guildId, obj);
    const obj3 = importDefault(11672);
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const result = require("handleConnectionOpen").fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
