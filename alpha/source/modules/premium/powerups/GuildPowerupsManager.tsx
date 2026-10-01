// Module ID: 17388
// Function ID: 17389
// Name: GuildPowerupsManager
// Dependencies: [2066, 4498, 4684, 4752, 6725, 2069, 4771, 4758, 4770, 12220, 16013, 5275, 4757, 12197, 7624, 2]

// Module 17388 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 2069 */;
import GuildStore from "GuildStore" /* 2066 */;
import PermissionStore from "PermissionStore" /* 4498 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4684 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4752 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6725 */;

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
        const GameServerExperiment = tmp7(4771).GameServerExperiment;
        const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
        GameServerExperiment.trackExposure(obj);
        const ServerThemeExperiment = tmp7(4758).ServerThemeExperiment;
        const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
        ServerThemeExperiment.trackExposure(obj2);
        const ServerThemeApexShadowExperiment = tmp7(4770).ServerThemeApexShadowExperiment;
        const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
        const config = ServerThemeApexShadowExperiment.getConfig(obj3);
        if (!tmp7Result.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp7(16013).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp7(5275).isMobile;
          if (isMobile) {
            isMobile = tmp7(4758).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp7Result10 = tmp7(4758);
          }
          if (isMobile) {
            isMobile = !tmp7(4758).getServerThemeRollbackEnabled(guildId, "GuildPowerupsManager");
            const tmp7Result11 = tmp7(4758);
          }
          if (isMobile) {
            isMobile = tmp7(16013).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp7Result12 = tmp7(16013);
          }
          if (isMobile) {
            isMobile = tmp7(4757).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp7Result13 = tmp7(4757);
          }
          let isMobile2 = tmp7(5275).isMobile;
          if (isMobile2) {
            isMobile2 = tmp7(16013).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp7Result14 = tmp7(16013);
          }
          if (tmp7(5275).isMobile) {
            if (!isMobile) {
              isMobile = isMobile2;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp7Result9 = tmp7(16013);
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp7(12197).fetchPowerupCatalogForGuild(guildId);
          const tmp7Result15 = tmp7(12197);
        }
        if (obj7.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp7(12197).fetchGuildBoostEntitlements(guildId);
          const tmp7Result16 = tmp7(12197);
        }
        obj7 = GuildPowerupsStore;
        tmp7Result = tmp7(12220);
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
    const guildBoostEntitlements = tmp(12197).fetchGuildBoostEntitlements(guildId);
    const tmpResult = tmp(12197);
    const appliedGuildBoostsForGuild = tmp(7624).fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
    const tmpResult2 = tmp(7624);
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
