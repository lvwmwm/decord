// Module ID: 19392
// Function ID: 19393
// Name: GuildPowerupsManager
// Dependencies: [4665, 4726, 4827, 8211, 7364, 4668, 6771, 13266, 13267, 13282, 17557, 5729, 13257, 8626, 2]

// Module 19392 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 4668 */;
import shared_PlatformUtils from "shared/PlatformUtils" /* 5729 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 8626 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 13257 */;
import useHasAllocateBoostPermission from "useHasAllocateBoostPermission" /* 13282 */;
import useIsCurrentUserEligibleForPowerupUpsells from "useIsCurrentUserEligibleForPowerupUpsells" /* 17557 */;
import GuildStore from "GuildStore" /* 4665 */;
import PermissionStore from "PermissionStore" /* 4726 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4827 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 8211 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7364 */;
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
          const GameServerExperiment = tmp7(6771).GameServerExperiment;
          const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerExperiment.trackExposure(obj);
          const ServerThemeExperiment = tmp7(13266).ServerThemeExperiment;
          const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
          ServerThemeExperiment.trackExposure(obj2);
          const ServerThemeApexShadowExperiment = tmp7(13267).ServerThemeApexShadowExperiment;
          const obj4 = { guildId: guild.id, location: "GuildPowerupsManager" };
          const config = ServerThemeApexShadowExperiment.getConfig(obj4);
          const tmp7Result = useHasAllocateBoostPermission;
          if (!tmp7Result.getHasAllocateBoostPermission(PermissionStore, guild)) {
            const tmp7Result5 = useIsCurrentUserEligibleForPowerupUpsells;
            let isCurrentUserEligibleForPowerupUpsells = tmp7Result5.getIsCurrentUserEligibleForPowerupUpsells();
            let isMobile = tmp7(5729).isMobile;
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
