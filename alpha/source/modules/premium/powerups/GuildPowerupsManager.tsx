// Module ID: 17882
// Function ID: 17883
// Name: GuildPowerupsManager
// Dependencies: [2066, 4464, 4650, 4717, 7451, 2069, 4741, 4755, 4757, 4758, 12858, 12862, 16593, 5083, 4756, 12837, 4726, 2]

// Module 17882 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 2069 */;
import GuildStore from "GuildStore" /* 2066 */;
import PermissionStore from "PermissionStore" /* 4464 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4650 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4717 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7451 */;

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
    if (!obj12.isFavoritesGuildId(guildId)) {
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        const GameServerExperiment = tmp9(4741).GameServerExperiment;
        const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
        GameServerExperiment.trackExposure(obj2);
        const FileUpload250MbPowerupExperiment = tmp9(4755).FileUpload250MbPowerupExperiment;
        const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
        FileUpload250MbPowerupExperiment.trackExposure(obj3);
        const ServerThemeExperiment = tmp9(4757).ServerThemeExperiment;
        const obj4 = { guildId: guild.id, location: "GuildPowerupsManager" };
        ServerThemeExperiment.trackExposure(obj4);
        const ServerThemeApexShadowExperiment = tmp9(4758).ServerThemeApexShadowExperiment;
        const obj5 = { guildId: guild.id, location: "GuildPowerupsManager" };
        const config = ServerThemeApexShadowExperiment.getConfig(obj5);
        if (tmp9Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp9(12858).GameServerPricingExperiment;
          const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp9Result = tmp9(4741);
        if (!tmp9Result10.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp9(16593).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp9(5083).isMobile;
          if (isMobile) {
            isMobile = tmp9(4757).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp9Result12 = tmp9(4757);
          }
          if (isMobile) {
            isMobile = !tmp9(4757).getServerThemeRollbackEnabled(guildId, "GuildPowerupsManager");
            const tmp9Result13 = tmp9(4757);
          }
          if (isMobile) {
            isMobile = tmp9(16593).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp9Result14 = tmp9(16593);
          }
          if (isMobile) {
            isMobile = tmp9(4756).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp9Result15 = tmp9(4756);
          }
          let isMobile2 = tmp9(5083).isMobile;
          if (isMobile2) {
            isMobile2 = tmp9(16593).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp9Result16 = tmp9(16593);
          }
          if (tmp9(5083).isMobile) {
            if (!isMobile) {
              isMobile = isMobile2;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp9Result11 = tmp9(16593);
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp9(12837).fetchPowerupCatalogForGuild(guildId);
          const tmp9Result17 = tmp9(12837);
        }
        if (obj9.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp9(12837).fetchGuildBoostEntitlements(guildId);
          const tmp9Result18 = tmp9(12837);
        }
        obj9 = GuildPowerupsStore;
        tmp9Result10 = tmp9(12862);
      }
    }
    obj12 = FavoritesUtils;
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
    const guildBoostEntitlements = tmp(12837).fetchGuildBoostEntitlements(guildId);
    const tmpResult = tmp(12837);
    const appliedGuildBoostsForGuild = tmp(4726).fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
    const tmpResult2 = tmp(4726);
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
