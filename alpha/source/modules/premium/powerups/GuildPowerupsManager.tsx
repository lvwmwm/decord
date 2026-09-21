// Module ID: 17778
// Function ID: 17779
// Name: GuildPowerupsManager
// Dependencies: [2063, 4395, 4577, 4644, 7363, 2066, 4668, 4682, 4684, 4685, 12763, 12767, 16506, 4996, 4683, 12742, 4653, 2]

// Module 17778 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 2066 */;
import GuildStore from "GuildStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4577 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4644 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7363 */;

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
        const GameServerExperiment = tmp9(4668).GameServerExperiment;
        const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
        GameServerExperiment.trackExposure(obj2);
        const FileUpload250MbPowerupExperiment = tmp9(4682).FileUpload250MbPowerupExperiment;
        const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
        FileUpload250MbPowerupExperiment.trackExposure(obj3);
        const ServerThemeExperiment = tmp9(4684).ServerThemeExperiment;
        const obj4 = { guildId: guild.id, location: "GuildPowerupsManager" };
        ServerThemeExperiment.trackExposure(obj4);
        const ServerThemeApexShadowExperiment = tmp9(4685).ServerThemeApexShadowExperiment;
        const obj5 = { guildId: guild.id, location: "GuildPowerupsManager" };
        const config = ServerThemeApexShadowExperiment.getConfig(obj5);
        if (tmp9Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp9(12763).GameServerPricingExperiment;
          const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp9Result = tmp9(4668);
        if (!tmp9Result10.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp9(16506).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp9(4996).isMobile;
          if (isMobile) {
            isMobile = tmp9(4684).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp9Result12 = tmp9(4684);
          }
          if (isMobile) {
            isMobile = !tmp9(4684).getServerThemeRollbackEnabled(guildId, "GuildPowerupsManager");
            const tmp9Result13 = tmp9(4684);
          }
          if (isMobile) {
            isMobile = tmp9(16506).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp9Result14 = tmp9(16506);
          }
          if (isMobile) {
            isMobile = tmp9(4683).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp9Result15 = tmp9(4683);
          }
          let isMobile2 = tmp9(4996).isMobile;
          if (isMobile2) {
            isMobile2 = tmp9(16506).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp9Result16 = tmp9(16506);
          }
          if (tmp9(4996).isMobile) {
            if (!isMobile) {
              isMobile = isMobile2;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp9Result11 = tmp9(16506);
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp9(12742).fetchPowerupCatalogForGuild(guildId);
          const tmp9Result17 = tmp9(12742);
        }
        if (obj9.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp9(12742).fetchGuildBoostEntitlements(guildId);
          const tmp9Result18 = tmp9(12742);
        }
        obj9 = GuildPowerupsStore;
        tmp9Result10 = tmp9(12767);
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
    const guildBoostEntitlements = tmp(12742).fetchGuildBoostEntitlements(guildId);
    const tmpResult = tmp(12742);
    const appliedGuildBoostsForGuild = tmp(4653).fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
    const tmpResult2 = tmp(4653);
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
