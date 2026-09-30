// Module ID: 17364
// Function ID: 17365
// Name: GuildPowerupsManager
// Dependencies: [2067, 4499, 4685, 4753, 6735, 2070, 4777, 4791, 4792, 12212, 15998, 5287, 4790, 12189, 4762, 2]

// Module 17364 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4499 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4685 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4753 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6735 */;

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
    if (!obj10.isFavoritesGuildId(guildId)) {
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        const GameServerExperiment = tmp7(4777).GameServerExperiment;
        const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
        GameServerExperiment.trackExposure(obj);
        const ServerThemeExperiment = tmp7(4791).ServerThemeExperiment;
        const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
        ServerThemeExperiment.trackExposure(obj2);
        const ServerThemeApexShadowExperiment = tmp7(4792).ServerThemeApexShadowExperiment;
        const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
        const config = ServerThemeApexShadowExperiment.getConfig(obj3);
        if (!tmp7Result.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp7(15998).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp7(5287).isMobile;
          if (isMobile) {
            isMobile = tmp7(4791).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp7Result10 = tmp7(4791);
          }
          if (isMobile) {
            isMobile = !tmp7(4791).getServerThemeRollbackEnabled(guildId, "GuildPowerupsManager");
            const tmp7Result11 = tmp7(4791);
          }
          if (isMobile) {
            isMobile = tmp7(15998).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp7Result12 = tmp7(15998);
          }
          if (isMobile) {
            isMobile = tmp7(4790).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp7Result13 = tmp7(4790);
          }
          let isMobile2 = tmp7(5287).isMobile;
          if (isMobile2) {
            isMobile2 = tmp7(15998).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp7Result14 = tmp7(15998);
          }
          if (tmp7(5287).isMobile) {
            if (!isMobile) {
              isMobile = isMobile2;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp7Result9 = tmp7(15998);
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp7(12189).fetchPowerupCatalogForGuild(guildId);
          const tmp7Result15 = tmp7(12189);
        }
        if (obj7.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp7(12189).fetchGuildBoostEntitlements(guildId);
          const tmp7Result16 = tmp7(12189);
        }
        obj7 = GuildPowerupsStore;
        tmp7Result = tmp7(12212);
      }
    }
    obj10 = FavoritesUtils;
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
    const guildBoostEntitlements = tmp(12189).fetchGuildBoostEntitlements(guildId);
    const tmpResult = tmp(12189);
    const appliedGuildBoostsForGuild = tmp(4762).fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
    const tmpResult2 = tmp(4762);
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
