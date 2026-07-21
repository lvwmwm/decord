// Module ID: 4037
// Function ID: 33628
// Name: getPowerupEntitlementPrice
// Dependencies: [284214097]
// Exports: default

// Module 4037 (getPowerupEntitlementPrice)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/premium/powerups/utils/getPowerupEntitlementPrice.tsx");

export default function getPowerupEntitlementPrice(tenant_metadata) {
  let guild_monetization;
  if (null != tenant_metadata) {
    tenant_metadata = tenant_metadata.tenant_metadata;
    if (null != tenant_metadata) {
      guild_monetization = tenant_metadata.guild_monetization;
    }
  }
  if (null != tenant_metadata) {
    const sku = tenant_metadata.sku;
    if (null != sku) {
      const tenant_metadata2 = sku.tenant_metadata;
      if (null != tenant_metadata2) {
        guild_monetization = tenant_metadata2.guild_monetization;
      }
    }
  }
  let boost_price;
  if (null != guild_monetization) {
    const game_server = guild_monetization.game_server;
    if (null != game_server) {
      boost_price = game_server.boost_price;
    }
  }
  if (null == boost_price) {
    let boost_price1;
    if (null != guild_monetization) {
      const powerup = guild_monetization.powerup;
      if (null != powerup) {
        boost_price1 = powerup.boost_price;
      }
    }
    boost_price = boost_price1;
  }
  if (null == boost_price) {
    let boost_price2;
    if (null != guild_monetization) {
      const game_server2 = guild_monetization.game_server;
      if (null != game_server2) {
        boost_price2 = game_server2.boost_price;
      }
    }
    boost_price = boost_price2;
  }
  if (null == boost_price) {
    let boost_price3;
    if (null != guild_monetization) {
      const powerup2 = guild_monetization.powerup;
      if (null != powerup2) {
        boost_price3 = powerup2.boost_price;
      }
    }
    boost_price = boost_price3;
  }
  return boost_price;
};
