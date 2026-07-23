// Module ID: 11520
// Function ID: 89740
// Name: guildPowerupsAckNotification
// Dependencies: [4018, 653, 686, 11521, 4369, 507, 11522, 1327, 2]
// Exports: disablePowerupForGuild, enablePowerupForGuild, fetchGuildBoostEntitlements, fetchPowerupCatalogForGuild, guildPowerupsAckNotification, guildPowerupsResetNotifications

// Module 11520 (guildPowerupsAckNotification)
import BoostedGuildTiers from "BoostedGuildTiers";
import { Endpoints } from "ME";

let closure_3;
let closure_4;
({ GUILD_POWERUP_APPLICATION_ID: closure_3, GuildPowerupType: closure_4 } = BoostedGuildTiers);
let result = require("dispatcher").fileFinishedImporting("modules/premium/powerups/GuildPowerupsActionCreators.tsx");

export const guildPowerupsAckNotification = function guildPowerupsAckNotification(closure_0) {
  let obj = importDefault(686);
  obj = { type: "GUILD_POWERUPS_ACK_NOTIFICATION", guildId: closure_0 };
  obj.dispatch(obj);
};
export const guildPowerupsResetNotifications = function guildPowerupsResetNotifications() {
  importDefault(686).dispatch({ type: "GUILD_POWERUPS_RESET_NOTIFICATIONS" });
};
export const fetchPowerupCatalogForGuild = function fetchPowerupCatalogForGuild(guildId) {
  const _require = guildId;
  if (true === arg1) {
    const MOCK_LEVELS = _require(11521).MOCK_LEVELS;
    const combined = MOCK_LEVELS.concat(_require(11521).MOCK_PERKS);
    let obj = {};
    obj[constants.LEVEL] = _require(11521).MOCK_LEVELS;
    obj[constants.PERK] = _require(11521).MOCK_PERKS;
    let obj2 = importDefault(686);
    obj = { type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS", guildId };
    let sorted = combined.sort((skuId, skuId2) => {
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
    const obj5 = _require(4369);
    obj1.rejectWithError = _require(507).rejectWithMigratedError();
    const result = obj5.httpGetWithCountryCodeQuery(obj1);
    return result.then((body) => {
      let allPowerups;
      let powerupCatalog;
      const guildId = body;
      body = body.body;
      const mapped = body.map((arg0) => outer2_1(outer2_2[6])(body.body, arg0));
      const found = mapped.filter(guildId(outer1_2[7]).isNotNullish);
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
      outer1_1(outer1_2[2]).dispatch({ type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS", guildId, allPowerups, powerupCatalog });
      return body.body;
    });
  }
};
export const fetchGuildBoostEntitlements = function fetchGuildBoostEntitlements(closure_0, arg1) {
  let flag = arg1;
  const _require = closure_0;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = _require(4369);
  obj = { url: Endpoints.GUILD_POWERUPS(closure_0), query: obj, oldFormErrors: true };
  obj = { include_ends_at: flag, rejectWithError: _require(507).rejectWithMigratedError() };
  const result = obj.httpGetWithCountryCodeQuery(obj);
  return result.then((body) => {
    let obj = {};
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
    obj = { type: "GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS", guildId: obj, unlockedPowerups: obj, unlockedGameServers: obj };
    outer1_1(outer1_2[2]).dispatch(obj);
  });
};
export const enablePowerupForGuild = function enablePowerupForGuild(arg0, arg1) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  return HTTP.post({ url: Endpoints.GUILD_POWERUP_TOGGLE(arg0, arg1), rejectWithError: true });
};
export const disablePowerupForGuild = function disablePowerupForGuild(arg0, arg1) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  return HTTP.del({ url: Endpoints.GUILD_POWERUP_TOGGLE(arg0, arg1), rejectWithError: true });
};
