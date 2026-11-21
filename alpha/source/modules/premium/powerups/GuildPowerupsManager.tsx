// Module ID: 19519
// Function ID: 19520
// Name: GuildPowerupsManager
// Dependencies: [4784, 4845, 4946, 8331, 7484, 4787, 6890, 13388, 13389, 13404, 17681, 5848, 13379, 8746, 2]

// Module 19519 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 4787 */;
import shared_PlatformUtils from "shared/PlatformUtils" /* 5848 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 8746 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 13379 */;
import useHasAllocateBoostPermission from "useHasAllocateBoostPermission" /* 13404 */;
import useIsCurrentUserEligibleForPowerupUpsells from "useIsCurrentUserEligibleForPowerupUpsells" /* 17681 */;
import GuildStore from "GuildStore" /* 4784 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4946 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 8331 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7484 */;
import size from "module_2" /* 2 */;

let map;

class GuildPowerupsManager extends AutomaticLifecycleManager {
  constructor() {
    let handleAppliedBoostUpdate;
    let handleEntitlementUpdate;
    let handleEntitlementUpdate2;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(SelectedGuildStore, applyArgumentsResult.handleSelectedGuildChange);
    const obj = { GUILD_POWERUP_ENTITLEMENTS_CREATE: handleEntitlementUpdate.bind(applyArgumentsResult), GUILD_POWERUP_ENTITLEMENTS_DELETE: handleEntitlementUpdate2.bind(applyArgumentsResult), GUILD_APPLIED_BOOSTS_UPDATE: handleAppliedBoostUpdate.bind(applyArgumentsResult) };
    handleEntitlementUpdate = applyArgumentsResult.handleEntitlementUpdate;
    handleEntitlementUpdate2 = applyArgumentsResult.handleEntitlementUpdate;
    handleAppliedBoostUpdate = applyArgumentsResult.handleAppliedBoostUpdate;
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
  handleSelectedGuildChange() {
    const guildId = SelectedGuildStore.getGuildId();
    if (null != guildId) {
      const obj6 = FavoritesUtils;
      if (!obj6.isFavoritesGuildId(guildId)) {
        const guild = GuildStore.getGuild(guildId);
        if (null != guild) {
          const GameServerExperiment = tmp7(6890).GameServerExperiment;
          const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerExperiment.trackExposure(obj);
          const ServerThemeExperiment = tmp7(13388).ServerThemeExperiment;
          const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
          ServerThemeExperiment.trackExposure(obj2);
          const ServerThemeApexShadowExperiment = tmp7(13389).ServerThemeApexShadowExperiment;
          const obj4 = { guildId: guild.id, location: "GuildPowerupsManager" };
          const config = ServerThemeApexShadowExperiment.getConfig(obj4);
          const tmp7Result = useHasAllocateBoostPermission;
          if (!tmp7Result.getHasAllocateBoostPermission(PermissionStore, guild)) {
            const tmp7Result5 = useIsCurrentUserEligibleForPowerupUpsells;
            let isCurrentUserEligibleForPowerupUpsells = tmp7Result5.getIsCurrentUserEligibleForPowerupUpsells();
            let isMobile = tmp7(5848).isMobile;
            if (isMobile) {
              const tmp7Result6 = useIsCurrentUserEligibleForPowerupUpsells;
              isMobile = tmp7Result6.getIsCurrentUserEligibleForPowerupUpsells();
            }
            if (shared_PlatformUtils.isMobile) {
              isCurrentUserEligibleForPowerupUpsells = isMobile;
            }
          }
          const obj3 = GuildPowerupsStore;
          if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
            const tmp7Result7 = GuildPowerupsActionCreators;
            const powerupCatalogForGuild = tmp7Result7.fetchPowerupCatalogForGuild(guildId);
          }
          if (obj3.shouldFetchPowerupsForGuild(guildId)) {
            const tmp7Result8 = GuildPowerupsActionCreators;
            const guildBoostEntitlements = tmp7Result8.fetchGuildBoostEntitlements(guildId);
          }
        }
      }
    }
  }
  handleEntitlementUpdate(guildId) {
    this.refreshGuildPowerups(guildId.guildId);
  }
  handleAppliedBoostUpdate(guildId) {
    this.refreshGuildPowerups(guildId.guildId);
  }
  refreshGuildPowerups(guildId) {
    const obj = useHasAllocateBoostPermission;
    if (true === obj.getHasAllocateBoostPermission(PermissionStore, GuildStore.getGuild(guildId))) {
      const tmpResult = GuildPowerupsActionCreators;
      const guildBoostEntitlements = tmpResult.fetchGuildBoostEntitlements(guildId);
      const tmpResult2 = actions_BoostingActionCreators;
      const appliedGuildBoostsForGuild = tmpResult2.fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
    }
  }
}
const prototype = GuildPowerupsManager.prototype;
const guildPowerupsManager = new GuildPowerupsManager();
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
