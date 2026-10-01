// Module ID: 17140
// Function ID: 17141
// Name: GuildPowerupsManager
// Dependencies: [2067, 4469, 4655, 4723, 6539, 2070, 4747, 4761, 4762, 12005, 12009, 15799, 5091, 4760, 11984, 4732, 2]

// Module 17140 (GuildPowerupsManager)
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import BoostingActionCreators from "BoostingActionCreators" /* 4732 */;
import GameServerExperiment2 from "GameServerExperiment" /* 4747 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 4760 */;
import ServerThemeExperiment2 from "ServerThemeExperiment" /* 4761 */;
import shared_PlatformUtils from "shared/PlatformUtils" /* 5091 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 11984 */;
import useHasAllocateBoostPermission from "useHasAllocateBoostPermission" /* 12009 */;
import useIsCurrentUserEligibleForPowerupUpsells from "useIsCurrentUserEligibleForPowerupUpsells" /* 15799 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4723 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6539 */;
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
      const obj12 = FavoritesUtils;
      if (!obj12.isFavoritesGuildId(guildId)) {
        const guild = GuildStore.getGuild(guildId);
        if (null != guild) {
          const GameServerExperiment = tmp9(4747).GameServerExperiment;
          const obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
          GameServerExperiment.trackExposure(obj2);
          const ServerThemeExperiment = tmp9(4761).ServerThemeExperiment;
          const obj3 = { guildId: guild.id, location: "GuildPowerupsManager" };
          ServerThemeExperiment.trackExposure(obj3);
          const ServerThemeApexShadowExperiment = tmp9(4762).ServerThemeApexShadowExperiment;
          const obj4 = { guildId: guild.id, location: "GuildPowerupsManager" };
          const config = ServerThemeApexShadowExperiment.getConfig(obj4);
          const tmp9Result = GameServerExperiment2;
          if (tmp9Result.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
            const GameServerPricingExperiment = tmp9(12005).GameServerPricingExperiment;
            const obj = { guildId: guild.id, location: "GuildPowerupsManager" };
            GameServerPricingExperiment.trackExposure(obj);
          }
          const tmp9Result10 = useHasAllocateBoostPermission;
          if (!tmp9Result10.getHasAllocateBoostPermission(PermissionStore, guild)) {
            const tmp9Result11 = useIsCurrentUserEligibleForPowerupUpsells;
            let isCurrentUserEligibleForPowerupUpsells = tmp9Result11.getIsCurrentUserEligibleForPowerupUpsells();
            let isMobile = tmp9(5091).isMobile;
            if (isMobile) {
              const tmp9Result12 = ServerThemeExperiment2;
              isMobile = tmp9Result12.getServerThemeEnabled(guildId, "GuildPowerupsManager");
            }
            if (isMobile) {
              const tmp9Result13 = ServerThemeExperiment2;
              isMobile = !tmp9Result13.getServerThemeRollbackEnabled(guildId, "GuildPowerupsManager");
            }
            if (isMobile) {
              const tmp9Result14 = useIsCurrentUserEligibleForPowerupUpsells;
              isMobile = tmp9Result14.getIsCurrentUserEligibleForPowerupUpsells();
            }
            if (isMobile) {
              const tmp9Result15 = ServerThemeUserExperiment;
              isMobile = tmp9Result15.getServerThemeUserEnabled("GuildPowerupsManager");
            }
            let isMobile2 = tmp9(5091).isMobile;
            if (isMobile2) {
              const tmp9Result16 = useIsCurrentUserEligibleForPowerupUpsells;
              isMobile2 = tmp9Result16.getIsCurrentUserEligibleForPowerupUpsells();
            }
            if (shared_PlatformUtils.isMobile) {
              if (!isMobile) {
                isMobile = isMobile2;
              }
              isCurrentUserEligibleForPowerupUpsells = isMobile;
            }
          }
          const obj9 = GuildPowerupsStore;
          if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
            const tmp9Result17 = GuildPowerupsActionCreators;
            const powerupCatalogForGuild = tmp9Result17.fetchPowerupCatalogForGuild(guildId);
          }
          if (obj9.shouldFetchPowerupsForGuild(guildId)) {
            const tmp9Result18 = GuildPowerupsActionCreators;
            const guildBoostEntitlements = tmp9Result18.fetchGuildBoostEntitlements(guildId);
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
      const tmpResult2 = BoostingActionCreators;
      const appliedGuildBoostsForGuild = tmpResult2.fetchAppliedGuildBoostsForGuild(guildId, { includeEnded: true });
    }
  }
}
const prototype = GuildPowerupsManager.prototype;
const guildPowerupsManager = new GuildPowerupsManager();
const result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default guildPowerupsManager;
