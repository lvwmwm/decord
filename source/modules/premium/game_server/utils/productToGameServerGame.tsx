// Module ID: 11507
// Function ID: 89669
// Name: productToGameServerGame
// Dependencies: []
// Exports: productToGameServerGame

// Module 11507 (productToGameServerGame)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/premium/game_server/utils/productToGameServerGame.tsx");

export const productToGameServerGame = function productToGameServerGame(id) {
  const skus = id.skus;
  const mapped = skus.map((id) => {
    const plan_features = id.tenant_metadata.plan_features;
    return { id: id.id, name: id.name, cost: id.tenant_metadata.boost_price, specifications: plan_features.map((title) => ({ title: title.title, description: title.description })) };
  });
  const sorted = mapped.sort((cost, cost2) => cost2.cost - cost.cost);
  let num = 0;
  if (sorted.length > 0) {
    const _Math = Math;
    const items = [];
    HermesBuiltin.arraySpread(sorted.map((cost) => cost.cost), 0);
    const _Math2 = Math;
    num = HermesBuiltin.apply(items, Math);
  }
  const obj = { id: id.id, name: id.name };
  const tenant_metadata = id.tenant_metadata;
  let game_application_id;
  if (null != tenant_metadata) {
    const guild_monetization = tenant_metadata.guild_monetization;
    if (null != guild_monetization) {
      const game_server = guild_monetization.game_server;
      if (null != game_server) {
        game_application_id = game_server.game_application_id;
      }
    }
  }
  let str = "";
  if (null != game_application_id) {
    str = game_application_id;
  }
  obj.gameId = str;
  const tenant_metadata2 = id.tenant_metadata;
  let provider;
  if (null != tenant_metadata2) {
    const guild_monetization2 = tenant_metadata2.guild_monetization;
    if (null != guild_monetization2) {
      const game_server2 = guild_monetization2.game_server;
      if (null != game_server2) {
        provider = game_server2.provider;
      }
    }
  }
  obj.provider = provider;
  obj.plans = sorted;
  obj.baseCost = num;
  const tenant_metadata3 = id.tenant_metadata;
  let disabled;
  if (null != tenant_metadata3) {
    const guild_monetization3 = tenant_metadata3.guild_monetization;
    if (null != guild_monetization3) {
      const game_server3 = guild_monetization3.game_server;
      if (null != game_server3) {
        disabled = game_server3.disabled;
      }
    }
  }
  obj.disabled = disabled;
  const tenant_metadata4 = id.tenant_metadata;
  let early_access;
  if (null != tenant_metadata4) {
    const guild_monetization4 = tenant_metadata4.guild_monetization;
    if (null != guild_monetization4) {
      const game_server4 = guild_monetization4.game_server;
      if (null != game_server4) {
        early_access = game_server4.early_access;
      }
    }
  }
  obj.early_access = early_access;
  const tenant_metadata5 = id.tenant_metadata;
  let can_market;
  if (null != tenant_metadata5) {
    const guild_monetization5 = tenant_metadata5.guild_monetization;
    if (null != guild_monetization5) {
      const game_server5 = guild_monetization5.game_server;
      if (null != game_server5) {
        can_market = game_server5.can_market;
      }
    }
  }
  obj.can_market = can_market;
  return obj;
};
