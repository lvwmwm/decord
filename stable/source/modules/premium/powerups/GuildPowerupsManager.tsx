// Module ID: 17488
// Function ID: 17489
// Name: GuildPowerupsManager
// Dependencies: [1979, 4275, 4458, 4525, 7221, 1982, 4549, 4563, 4565, 4566, 12642, 12646, 16264, 4877, 4564, 12621, 4534, 2]

// Module 17488 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4275 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4458 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4525 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7221 */;

require = fn;
class GuildPowerupsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_4, applyArgumentsResult.handleSelectedGuildChange);
    obj1 = { GUILD_POWERUP_ENTITLEMENTS_CREATE: null, GUILD_POWERUP_ENTITLEMENTS_DELETE: null, GUILD_APPLIED_BOOSTS_UPDATE: null };
    handleEntitlementUpdate = applyArgumentsResult.handleEntitlementUpdate;
    obj1.GUILD_POWERUP_ENTITLEMENTS_CREATE = handleEntitlementUpdate.bind(applyArgumentsResult);
    handleEntitlementUpdate2 = applyArgumentsResult.handleEntitlementUpdate;
    obj1.GUILD_POWERUP_ENTITLEMENTS_DELETE = handleEntitlementUpdate2.bind(applyArgumentsResult);
    handleAppliedBoostUpdate = applyArgumentsResult.handleAppliedBoostUpdate;
    obj1.GUILD_APPLIED_BOOSTS_UPDATE = handleAppliedBoostUpdate.bind(applyArgumentsResult);
    applyArgumentsResult.actions = obj1;
    return applyArgumentsResult;
  }
}
const prototype = GuildPowerupsManager.prototype;
prototype["handleSelectedGuildChange"] = function handleSelectedGuildChange() {
  const guildId = SelectedGuildStore.getGuildId();
  if (null != guildId) {
    if (!obj11.isFavoritesGuildId(guildId)) {
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        const GameServerExperiment = tmp9(4549).GameServerExperiment;
        const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
        GameServerExperiment.trackExposure(obj2);
        const FileUpload250MbPowerupExperiment = tmp9(4563).FileUpload250MbPowerupExperiment;
        const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
        FileUpload250MbPowerupExperiment.trackExposure(obj3);
        const ServerThemeExperiment = tmp9(4565).ServerThemeExperiment;
        const obj4 = { guildId: guild.id, location: "GuildPowerupsManager" };
        ServerThemeExperiment.trackExposure(obj4);
        const ServerThemeApexShadowExperiment = tmp9(4566).ServerThemeApexShadowExperiment;
        const obj5 = { guildId: guild.id, location: "GuildPowerupsManager" };
        const config = ServerThemeApexShadowExperiment.getConfig(obj5);
        if (tmp9Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp9(12642).GameServerPricingExperiment;
          const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp9Result = tmp9(4549);
        if (!tmp9Result9.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp9(16264).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp9(4877).isMobile;
          if (isMobile) {
            isMobile = tmp9(4565).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp9Result11 = tmp9(4565);
          }
          if (isMobile) {
            isMobile = tmp9(16264).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp9Result12 = tmp9(16264);
          }
          if (isMobile) {
            isMobile = tmp9(4564).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp9Result13 = tmp9(4564);
          }
          let isMobile2 = tmp9(4877).isMobile;
          if (isMobile2) {
            isMobile2 = tmp9(16264).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp9Result14 = tmp9(16264);
          }
          if (tmp9(4877).isMobile) {
            if (!isMobile) {
              isMobile = isMobile2;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp9Result10 = tmp9(16264);
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp9(12621).fetchPowerupCatalogForGuild(guildId);
          const tmp9Result15 = tmp9(12621);
        }
        if (obj8.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp9(12621).fetchGuildBoostEntitlements(guildId);
          const tmp9Result16 = tmp9(12621);
        }
        obj8 = GuildPowerupsStore;
        tmp9Result9 = tmp9(12646);
      }
    }
    obj11 = FavoritesUtils;
  }
};
prototype["handleEntitlementUpdate"] = function handleEntitlementUpdate(guildId) {
  this.refreshGuildPowerups(guildId.guildId);
};
prototype["handleAppliedBoostUpdate"] = function handleAppliedBoostUpdate(guildId) {
  this.refreshGuildPowerups(guildId.guildId);
};
prototype["refreshGuildPowerups"] = function refreshGuildPowerups(guildId) {
  if (true === obj.getHasAllocateBoostPermission(PermissionStore, GuildStore.getGuild(guildId))) {
    const guildBoostEntitlements = tmp(12621).fetchGuildBoostEntitlements(guildId);
    const tmpResult = tmp(12621);
    const appliedGuildBoostsForGuild = tmp(4534).fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
    const tmpResult2 = tmp(4534);
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
