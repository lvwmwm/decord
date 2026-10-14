// Module ID: 18155
// Function ID: 18156
// Name: GuildPowerupsManager
// Dependencies: [2087, 4752, 4941, 5009, 6812, 2090, 5028, 5015, 5027, 12798, 16944, 5299, 5014, 12775, 8034, 2]

// Module 18155 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 2090 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 5014 */;
import ServerThemeExperiment2 from "ServerThemeExperiment" /* 5015 */;
import shared_PlatformUtils from "shared/PlatformUtils" /* 5299 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 8034 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 12775 */;
import useHasAllocateBoostPermission from "useHasAllocateBoostPermission" /* 12798 */;
import useIsCurrentUserEligibleForPowerupUpsells from "useIsCurrentUserEligibleForPowerupUpsells" /* 16944 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4752 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4941 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 5009 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6812 */;
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
          const GameServerExperiment = tmp7(5028).GameServerExperiment;
          const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerExperiment.trackExposure(obj);
          const ServerThemeExperiment = tmp7(5015).ServerThemeExperiment;
          const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
          ServerThemeExperiment.trackExposure(obj2);
          const ServerThemeApexShadowExperiment = tmp7(5027).ServerThemeApexShadowExperiment;
          const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
          const config = ServerThemeApexShadowExperiment.getConfig(obj3);
          const tmp7Result = useHasAllocateBoostPermission;
          if (!tmp7Result.getHasAllocateBoostPermission(PermissionStore, guild)) {
            const tmp7Result9 = useIsCurrentUserEligibleForPowerupUpsells;
            let isCurrentUserEligibleForPowerupUpsells = tmp7Result9.getIsCurrentUserEligibleForPowerupUpsells();
            let isMobile = tmp7(5299).isMobile;
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
            let isMobile2 = tmp7(5299).isMobile;
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
