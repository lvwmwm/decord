// Module ID: 15918
// Function ID: 122018
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15918 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let tmp2 = (arg0) => {
  class GuildPowerupsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, GuildPowerupsManager);
      items1 = [...items];
      obj = closure_6(GuildPowerupsManager);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      map = new Map();
      tmp2Result.stores = map.set(closure_10, tmp2Result.handleSelectedGuildChange);
      obj = { GUILD_POWERUP_ENTITLEMENTS_CREATE: handleEntitlementUpdate.bind(tmp2Result), GUILD_POWERUP_ENTITLEMENTS_DELETE: handleEntitlementUpdate2.bind(tmp2Result), GUILD_APPLIED_BOOSTS_UPDATE: handleAppliedBoostUpdate.bind(tmp2Result) };
      ({ handleEntitlementUpdate, handleEntitlementUpdate: handleEntitlementUpdate2, handleAppliedBoostUpdate } = tmp2Result);
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = GuildPowerupsManager;
  callback2(GuildPowerupsManager, arg0);
  let obj = {
    key: "handleSelectedGuildChange",
    value() {
      const guildId = guildId.getGuildId();
      if (null != guildId) {
        if (!obj12.isFavoritesGuildId(guildId)) {
          const guild = store.getGuild(guildId);
          if (null != guild) {
            const GameServerExperiment = GuildPowerupsManager(closure_2[10]).GameServerExperiment;
            let obj = { guildId: guild.id, location: "GuildPowerupsManager" };
            GameServerExperiment.trackExposure(obj);
            const FileUpload250MbPowerupExperiment = GuildPowerupsManager(closure_2[11]).FileUpload250MbPowerupExperiment;
            obj = { guildId: guild.id, location: "GuildPowerupsManager" };
            FileUpload250MbPowerupExperiment.trackExposure(obj);
            const ServerThemeExperiment = GuildPowerupsManager(closure_2[12]).ServerThemeExperiment;
            let obj1 = { guildId: guild.id, location: "GuildPowerupsManager" };
            ServerThemeExperiment.trackExposure(obj1);
            const ServerThemeApexShadowExperiment = GuildPowerupsManager(closure_2[13]).ServerThemeApexShadowExperiment;
            let obj2 = { guildId: guild.id, location: "GuildPowerupsManager" };
            const config = ServerThemeApexShadowExperiment.getConfig(obj2);
            if (obj17.getGameServerEnabled(guild.id, "GuildPowerupsManager")) {
              const GameServerPricingExperiment = GuildPowerupsManager(closure_2[14]).GameServerPricingExperiment;
              obj = { guildId: guild.id, location: "GuildPowerupsManager" };
              GameServerPricingExperiment.trackExposure(obj);
            }
            obj1 = GuildPowerupsManager(closure_2[15]);
            if (!obj1.getHasAllocateBoostPermission(closure_9, guild)) {
              obj2 = GuildPowerupsManager(closure_2[16]);
              let isCurrentUserEligibleForPowerupUpsells = obj2.getIsCurrentUserEligibleForPowerupUpsells();
              let isMobile = GuildPowerupsManager(closure_2[17]).isMobile;
              if (isMobile) {
                let obj3 = GuildPowerupsManager(closure_2[12]);
                isMobile = obj3.getServerThemeEnabled(guildId, "GuildPowerupsManager");
              }
              if (isMobile) {
                isMobile = GuildPowerupsManager(closure_2[16]).getIsCurrentUserEligibleForPowerupUpsells();
                const obj5 = GuildPowerupsManager(closure_2[16]);
              }
              if (isMobile) {
                isMobile = GuildPowerupsManager(closure_2[18]).getServerThemeUserEnabled("GuildPowerupsManager");
                const obj6 = GuildPowerupsManager(closure_2[18]);
              }
              let showCoachmark = GuildPowerupsManager(closure_2[17]).isMobile;
              if (showCoachmark) {
                showCoachmark = GuildPowerupsManager(closure_2[16]).getIsCurrentUserEligibleForPowerupUpsells();
                const obj7 = GuildPowerupsManager(closure_2[16]);
              }
              if (showCoachmark) {
                obj3 = { location: "GuildPowerupsManager" };
                showCoachmark = callback(closure_2[19]).getConfig(obj3).showCoachmark;
                const obj8 = callback(closure_2[19]);
              }
              if (GuildPowerupsManager(closure_2[17]).isMobile) {
                if (!isMobile) {
                  isMobile = showCoachmark;
                }
                isCurrentUserEligibleForPowerupUpsells = isMobile;
              }
            }
            if (closure_11.shouldFetchCatalogForGuild(guildId)) {
              const powerupCatalogForGuild = GuildPowerupsManager(closure_2[20]).fetchPowerupCatalogForGuild(guildId);
              const obj10 = GuildPowerupsManager(closure_2[20]);
            }
            if (closure_11.shouldFetchPowerupsForGuild(guildId)) {
              const guildBoostEntitlements = GuildPowerupsManager(closure_2[20]).fetchGuildBoostEntitlements(guildId);
              const obj11 = GuildPowerupsManager(closure_2[20]);
            }
            const obj17 = GuildPowerupsManager(closure_2[10]);
          }
        }
        const obj12 = GuildPowerupsManager(closure_2[9]);
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "handleEntitlementUpdate",
    value(guildId) {
      this.refreshGuildPowerups(guildId.guildId);
    }
  };
  items[1] = obj;
  obj = {
    key: "handleAppliedBoostUpdate",
    value(guildId) {
      this.refreshGuildPowerups(guildId.guildId);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "refreshGuildPowerups",
    value(guildId) {
      let obj = GuildPowerupsManager(closure_2[15]);
      if (true === obj.getHasAllocateBoostPermission(closure_9, store.getGuild(guildId))) {
        const guildBoostEntitlements = GuildPowerupsManager(closure_2[20]).fetchGuildBoostEntitlements(guildId);
        const obj2 = GuildPowerupsManager(closure_2[20]);
        obj = { location: "GuildPowerupsManager" };
        const obj3 = callback(closure_2[21]);
        obj = {};
        obj.includeEnded = obj3.getConfig(obj).enabled;
        const appliedGuildBoostsForGuild = GuildPowerupsManager(closure_2[22]).fetchAppliedGuildBoostsForGuild(guildId, obj);
        const obj5 = GuildPowerupsManager(closure_2[22]);
      }
    }
  };
  return callback(GuildPowerupsManager, items);
}(importDefault(dependencyMap[23]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/premium/powerups/GuildPowerupsManager.tsx");

export default tmp2;
