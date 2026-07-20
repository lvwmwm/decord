// Module ID: 11502
// Function ID: 89641
// Name: guildPowerupsAckNotification
// Dependencies: []
// Exports: disablePowerupForGuild, enablePowerupForGuild, fetchGuildBoostEntitlements, fetchPowerupCatalogForGuild, guildPowerupsAckNotification, guildPowerupsResetNotifications

// Module 11502 (guildPowerupsAckNotification)
const _module = require(dependencyMap[0]);
({ GUILD_POWERUP_APPLICATION_ID: closure_3, GuildPowerupType: closure_4 } = _module);
const Endpoints = require(dependencyMap[1]).Endpoints;
const _module1 = require(dependencyMap[8]);
const result = _module1.fileFinishedImporting("modules/premium/powerups/GuildPowerupsActionCreators.tsx");

export const guildPowerupsAckNotification = function guildPowerupsAckNotification(guildId) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_POWERUPS_ACK_NOTIFICATION", guildId };
  obj.dispatch(obj);
};
export const guildPowerupsResetNotifications = function guildPowerupsResetNotifications() {
  importDefault(dependencyMap[2]).dispatch({ type: "GUILD_POWERUPS_RESET_NOTIFICATIONS" });
};
export const fetchPowerupCatalogForGuild = function fetchPowerupCatalogForGuild(guildId) {
  const require = guildId;
  if (true === arg1) {
    const MOCK_LEVELS = require(dependencyMap[3]).MOCK_LEVELS;
    const combined = MOCK_LEVELS.concat(require(dependencyMap[3]).MOCK_PERKS);
    let obj = {};
    obj[constants.LEVEL] = require(dependencyMap[3]).MOCK_LEVELS;
    obj[constants.PERK] = require(dependencyMap[3]).MOCK_PERKS;
    let obj2 = importDefault(dependencyMap[2]);
    obj = { type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS", guildId };
    const sorted = combined.sort((skuId, skuId2) => {
      let num = -1;
      if (skuId.skuId >= skuId2.skuId) {
        num = 1;
      }
      return num;
    });
    obj.allPowerups = sorted.reduce((arg0, skuId) => {
      arg0[skuId.skuId] = skuId;
      return arg0;
    }, {});
    obj.powerupCatalog = obj;
    obj2.dispatch(obj);
  } else {
    const obj1 = { url: Endpoints.STORE_PUBLISHED_LISTINGS_SKUS };
    obj2 = { application_id: closure_3, guild_id: guildId };
    obj1.query = obj2;
    obj1.oldFormErrors = true;
    const obj5 = require(dependencyMap[4]);
    obj1.rejectWithError = require(dependencyMap[5]).rejectWithMigratedError();
    const result = obj5.httpGetWithCountryCodeQuery(obj1);
    return result.then((body) => {
      let allPowerups;
      let powerupCatalog;
      body = body.body;
      const mapped = body.map((arg0) => callback(closure_2[6])(arg0.body, arg0));
      const found = mapped.filter(body(closure_2[7]).isNotNullish);
      const sorted = found.sort((skuId, skuId2) => {
        let num = -1;
        if (skuId.skuId >= skuId2.skuId) {
          num = 1;
        }
        return num;
      });
      const reduced = sorted.reduce((powerupCatalog, skuId) => {
        powerupCatalog = powerupCatalog.powerupCatalog;
        powerupCatalog.allPowerups[skuId.skuId] = skuId;
        if (null == powerupCatalog[skuId.type]) {
          powerupCatalog[skuId.type] = [];
        }
        let arr = powerupCatalog[skuId.type];
        if (!tmp) {
          arr = arr.push(skuId);
        }
        return powerupCatalog;
      }, { allPowerups: {}, powerupCatalog: {} });
      ({ allPowerups, powerupCatalog } = reduced);
      callback(closure_2[2]).dispatch({ type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS", guildId: body, allPowerups, powerupCatalog });
      return body.body;
    });
  }
};
export const fetchGuildBoostEntitlements = function fetchGuildBoostEntitlements(guildId, arg1) {
  let flag = arg1;
  const require = guildId;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = require(dependencyMap[4]);
  obj = { url: Endpoints.GUILD_POWERUPS(guildId), query: obj, oldFormErrors: true };
  obj = { include_ends_at: flag, rejectWithError: require(dependencyMap[5]).rejectWithMigratedError() };
  const result = obj.httpGetWithCountryCodeQuery(obj);
  return result.then((body) => {
    let obj = {};
    body = obj;
    obj = {};
    body = body.body;
    const item = body.forEach((sku) => {
      sku = sku.sku;
      let powerup;
      if (null != sku) {
        const tenant_metadata = sku.tenant_metadata;
        if (null != tenant_metadata) {
          const guild_monetization = tenant_metadata.guild_monetization;
          if (null != guild_monetization) {
            powerup = guild_monetization.powerup;
          }
        }
      }
      if (null == powerup) {
        let powerup_metadata;
        if (null != sku) {
          const sku2 = sku.sku;
          if (null != sku2) {
            powerup_metadata = sku2.powerup_metadata;
          }
        }
        if (null == powerup_metadata) {
          const sku3 = sku.sku;
          let game_server;
          if (null != sku3) {
            const tenant_metadata2 = sku3.tenant_metadata;
            if (null != tenant_metadata2) {
              const guild_monetization2 = tenant_metadata2.guild_monetization;
              if (null != guild_monetization2) {
                game_server = guild_monetization2.game_server;
              }
            }
          }
          if (null != game_server) {
            obj[sku.id] = sku;
          }
        }
      }
      obj[sku.sku_id] = sku;
    });
    obj = { type: "GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS", guildId: body, unlockedPowerups: obj, unlockedGameServers: obj };
    obj(closure_2[2]).dispatch(obj);
  });
};
export const enablePowerupForGuild = function enablePowerupForGuild(arg0, arg1) {
  const HTTP = require(dependencyMap[5]).HTTP;
  return HTTP.post({ url: Endpoints.GUILD_POWERUP_TOGGLE(arg0, arg1), rejectWithError: true });
};
export const disablePowerupForGuild = function disablePowerupForGuild(arg0, arg1) {
  const HTTP = require(dependencyMap[5]).HTTP;
  return HTTP.del({ url: Endpoints.GUILD_POWERUP_TOGGLE(arg0, arg1), rejectWithError: true });
};
