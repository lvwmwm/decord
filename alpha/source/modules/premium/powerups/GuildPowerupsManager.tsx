// Module ID: 18057
// Function ID: 18058
// Name: GuildPowerupsManager
// Dependencies: [2087, 4750, 4939, 5007, 6807, 2090, 5026, 5013, 5025, 12247, 16579, 5294, 5012, 12224, 8026, 2]

// Module 18057 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 2090 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 5012 */;
import ServerThemeExperiment2 from "ServerThemeExperiment" /* 5013 */;
import shared_PlatformUtils from "shared/PlatformUtils" /* 5294 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 8026 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 12224 */;
import useHasAllocateBoostPermission from "useHasAllocateBoostPermission" /* 12247 */;
import useIsCurrentUserEligibleForPowerupUpsells from "useIsCurrentUserEligibleForPowerupUpsells" /* 16579 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 5007 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;
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
      const obj10 = FavoritesUtils;
      if (!obj10.isFavoritesGuildId(guildId)) {
        const guild = GuildStore.getGuild(guildId);
        if (null != guild) {
          const GameServerExperiment = tmp7(5026).GameServerExperiment;
          const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerExperiment.trackExposure(obj);
          const ServerThemeExperiment = tmp7(5013).ServerThemeExperiment;
          const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
          ServerThemeExperiment.trackExposure(obj2);
          const ServerThemeApexShadowExperiment = tmp7(5025).ServerThemeApexShadowExperiment;
          const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
          const config = ServerThemeApexShadowExperiment.getConfig(obj3);
          const tmp7Result = useHasAllocateBoostPermission;
          if (!tmp7Result.getHasAllocateBoostPermission(PermissionStore, guild)) {
            const tmp7Result9 = useIsCurrentUserEligibleForPowerupUpsells;
            let isCurrentUserEligibleForPowerupUpsells = tmp7Result9.getIsCurrentUserEligibleForPowerupUpsells();
            let isMobile = tmp7(5294).isMobile;
            if (isMobile) {
              const tmp7Result10 = ServerThemeExperiment2;
              isMobile = tmp7Result10.getServerThemeEnabled(guildId, "GuildPowerupsManager");
            }
            if (isMobile) {
              const tmp7Result11 = ServerThemeExperiment2;
              isMobile = !tmp7Result11.getServerThemeRollbackEnabled(guildId, "GuildPowerupsManager");
            }
            if (isMobile) {
              const tmp7Result12 = useIsCurrentUserEligibleForPowerupUpsells;
              isMobile = tmp7Result12.getIsCurrentUserEligibleForPowerupUpsells();
            }
            if (isMobile) {
              const tmp7Result13 = ServerThemeUserExperiment;
              isMobile = tmp7Result13.getServerThemeUserEnabled("GuildPowerupsManager");
            }
            let isMobile2 = tmp7(5294).isMobile;
            if (isMobile2) {
              const tmp7Result14 = useIsCurrentUserEligibleForPowerupUpsells;
              isMobile2 = tmp7Result14.getIsCurrentUserEligibleForPowerupUpsells();
            }
            if (shared_PlatformUtils.isMobile) {
              if (!isMobile) {
                isMobile = isMobile2;
              }
              isCurrentUserEligibleForPowerupUpsells = isMobile;
            }
          }
          const obj7 = GuildPowerupsStore;
          if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
            const tmp7Result15 = GuildPowerupsActionCreators;
            const powerupCatalogForGuild = tmp7Result15.fetchPowerupCatalogForGuild(guildId);
          }
          if (obj7.shouldFetchPowerupsForGuild(guildId)) {
            const tmp7Result16 = GuildPowerupsActionCreators;
            const guildBoostEntitlements = tmp7Result16.fetchGuildBoostEntitlements(guildId);
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
