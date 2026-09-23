// Module ID: 17859
// Function ID: 17860
// Name: GuildPowerupsManager
// Dependencies: [2064, 4462, 4648, 4715, 7449, 2067, 4739, 4753, 4755, 4756, 12849, 12853, 16569, 5081, 4754, 12828, 4724, 2]

// Module 17859 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 2067 */;
import GuildStore from "GuildStore" /* 2064 */;
import PermissionStore from "PermissionStore" /* 4462 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4648 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4715 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7449 */;

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
        const GameServerExperiment = tmp9(4739).GameServerExperiment;
        const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
        GameServerExperiment.trackExposure(obj2);
        const FileUpload250MbPowerupExperiment = tmp9(4753).FileUpload250MbPowerupExperiment;
        const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
        FileUpload250MbPowerupExperiment.trackExposure(obj3);
        const ServerThemeExperiment = tmp9(4755).ServerThemeExperiment;
        const obj4 = { guildId: guild.id, location: "GuildPowerupsManager" };
        ServerThemeExperiment.trackExposure(obj4);
        const ServerThemeApexShadowExperiment = tmp9(4756).ServerThemeApexShadowExperiment;
        const obj5 = { guildId: guild.id, location: "GuildPowerupsManager" };
        const config = ServerThemeApexShadowExperiment.getConfig(obj5);
        if (tmp9Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp9(12849).GameServerPricingExperiment;
          const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp9Result = tmp9(4739);
        if (!tmp9Result10.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp9(16569).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp9(5081).isMobile;
          if (isMobile) {
            isMobile = tmp9(4755).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp9Result12 = tmp9(4755);
          }
          if (isMobile) {
            isMobile = !tmp9(4755).getServerThemeRollbackEnabled(guildId, "GuildPowerupsManager");
            const tmp9Result13 = tmp9(4755);
          }
          if (isMobile) {
            isMobile = tmp9(16569).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp9Result14 = tmp9(16569);
          }
          if (isMobile) {
            isMobile = tmp9(4754).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp9Result15 = tmp9(4754);
          }
          let isMobile2 = tmp9(5081).isMobile;
          if (isMobile2) {
            isMobile2 = tmp9(16569).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp9Result16 = tmp9(16569);
          }
          if (tmp9(5081).isMobile) {
            if (!isMobile) {
              isMobile = isMobile2;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp9Result11 = tmp9(16569);
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp9(12828).fetchPowerupCatalogForGuild(guildId);
          const tmp9Result17 = tmp9(12828);
        }
        if (obj9.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp9(12828).fetchGuildBoostEntitlements(guildId);
          const tmp9Result18 = tmp9(12828);
        }
        obj9 = GuildPowerupsStore;
        tmp9Result10 = tmp9(12853);
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
    const guildBoostEntitlements = tmp(12828).fetchGuildBoostEntitlements(guildId);
    const tmpResult = tmp(12828);
    const appliedGuildBoostsForGuild = tmp(4724).fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
    const tmpResult2 = tmp(4724);
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
