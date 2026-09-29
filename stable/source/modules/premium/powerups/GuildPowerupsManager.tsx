// Module ID: 17783
// Function ID: 17784
// Name: GuildPowerupsManager
// Dependencies: [2063, 4427, 4609, 4676, 7395, 2066, 4700, 4714, 4716, 4717, 12792, 12796, 16509, 5028, 4715, 12771, 4685, 2]

// Module 17783 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 2066 */;
import GuildStore from "GuildStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4427 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4609 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4676 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7395 */;

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
        const GameServerExperiment = tmp9(4700).GameServerExperiment;
        const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
        GameServerExperiment.trackExposure(obj2);
        const FileUpload250MbPowerupExperiment = tmp9(4714).FileUpload250MbPowerupExperiment;
        const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
        FileUpload250MbPowerupExperiment.trackExposure(obj3);
        const ServerThemeExperiment = tmp9(4716).ServerThemeExperiment;
        const obj4 = { guildId: guild.id, location: "GuildPowerupsManager" };
        ServerThemeExperiment.trackExposure(obj4);
        const ServerThemeApexShadowExperiment = tmp9(4717).ServerThemeApexShadowExperiment;
        const obj5 = { guildId: guild.id, location: "GuildPowerupsManager" };
        const config = ServerThemeApexShadowExperiment.getConfig(obj5);
        if (tmp9Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
          const GameServerPricingExperiment = tmp9(12792).GameServerPricingExperiment;
          const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerPricingExperiment.trackExposure(obj);
        }
        tmp9Result = tmp9(4700);
        if (!tmp9Result10.getHasAllocateBoostPermission(PermissionStore, guild)) {
          let isCurrentUserEligibleForPowerupUpsells = tmp9(16509).getIsCurrentUserEligibleForPowerupUpsells();
          let isMobile = tmp9(5028).isMobile;
          if (isMobile) {
            isMobile = tmp9(4716).getServerThemeEnabled(guildId, "GuildPowerupsManager");
            const tmp9Result12 = tmp9(4716);
          }
          if (isMobile) {
            isMobile = !tmp9(4716).getServerThemeRollbackEnabled(guildId, "GuildPowerupsManager");
            const tmp9Result13 = tmp9(4716);
          }
          if (isMobile) {
            isMobile = tmp9(16509).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp9Result14 = tmp9(16509);
          }
          if (isMobile) {
            isMobile = tmp9(4715).getServerThemeUserEnabled("GuildPowerupsManager");
            const tmp9Result15 = tmp9(4715);
          }
          let isMobile2 = tmp9(5028).isMobile;
          if (isMobile2) {
            isMobile2 = tmp9(16509).getIsCurrentUserEligibleForPowerupUpsells();
            const tmp9Result16 = tmp9(16509);
          }
          if (tmp9(5028).isMobile) {
            if (!isMobile) {
              isMobile = isMobile2;
            }
            isCurrentUserEligibleForPowerupUpsells = isMobile;
          }
          const tmp9Result11 = tmp9(16509);
        }
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const powerupCatalogForGuild = tmp9(12771).fetchPowerupCatalogForGuild(guildId);
          const tmp9Result17 = tmp9(12771);
        }
        if (obj9.shouldFetchPowerupsForGuild(guildId)) {
          const guildBoostEntitlements = tmp9(12771).fetchGuildBoostEntitlements(guildId);
          const tmp9Result18 = tmp9(12771);
        }
        obj9 = GuildPowerupsStore;
        tmp9Result10 = tmp9(12796);
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
    const guildBoostEntitlements = tmp(12771).fetchGuildBoostEntitlements(guildId);
    const tmpResult = tmp(12771);
    const appliedGuildBoostsForGuild = tmp(4685).fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
    const tmpResult2 = tmp(4685);
  }
};
const guildPowerupsManager = new GuildPowerupsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
