// Module ID: 4036
// Function ID: 33598
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4036 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getStateForGuild(arg0) {
  if (null == closure_7[arg0]) {
    const obj = { catalog: {}, instances: {}, instructions: {}, entitlements: {} };
    closure_7[arg0] = obj;
  }
  return closure_7[arg0];
}
function recalculateAppliedBoosts(arg0, entitlements) {
  const values = Object.values(entitlements);
  return values.reduce((arg0, arg1) => {
    const tmp = callback(closure_1[5])(arg1);
    let num = 0;
    if (null != tmp) {
      num = tmp;
    }
    return arg0 + num;
  }, 0);
}
function handleGameServerInstanceCreated(arg0) {
  let gameServer;
  let guildId;
  ({ guildId, gameServer } = arg0);
  const tmp = getStateForGuild(guildId);
  let obj = {};
  const merged = Object.assign(closure_7);
  obj = {};
  const merged1 = Object.assign(tmp);
  obj = {};
  const merged2 = Object.assign(tmp.instances);
  obj[gameServer.id] = importDefault(dependencyMap[6])(gameServer);
  obj["instances"] = obj;
  obj[guildId] = obj;
  closure_7 = obj;
}
function handleGameServerEntitlementsChanged(guildId, entitlements) {
  let obj = {};
  const merged = Object.assign(closure_7);
  obj = {};
  const merged1 = Object.assign(entitlements);
  obj["appliedBoosts"] = recalculateAppliedBoosts(undefined, entitlements.entitlements);
  obj[guildId] = obj;
  closure_7 = obj;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = {};
let closure_8 = { catalog: {}, hasFetchedCatalog: false, catalogLastFetchedAt: undefined };
let tmp2 = (PersistedStore) => {
  class GameServerStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GameServerStore);
      obj = closure_5(GameServerStore);
      tmp2 = closure_4;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = GameServerStore;
  callback2(GameServerStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {

    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_7;
    }
  };
  items[1] = obj;
  obj = {
    key: "getStateForGuild",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        tmp = closure_7[arg0];
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGlobalCatalogState",
    value() {
      return closure_8;
    }
  };
  items[4] = {
    key: "getGlobalCatalogGame",
    value(arg0) {
      const GameServerStore = arg0;
      const values = Object.values(closure_8.catalog);
      return values.find((gameId) => gameId.gameId === gameId);
    }
  };
  items[5] = {
    key: "getLowestGameCostForGuild",
    value(arg0) {
      if (null == arg0) {
        return null;
      } else {
        let catalog;
        if (null != closure_7[arg0]) {
          catalog = tmp2.catalog;
        }
        if (null == catalog) {
          catalog = {};
        }
        const values = Object.values(catalog);
        let applyResult = null;
        if (0 !== values.length) {
          const _Math = Math;
          const items = [];
          HermesBuiltin.arraySpread(values.map((baseCost) => baseCost.baseCost), 0);
          const _Math2 = Math;
          applyResult = HermesBuiltin.apply(items, Math);
        }
        return applyResult;
      }
    }
  };
  items[6] = {
    key: "hasFetchedCatalog",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        let hasFetchedCatalog;
        if (null != closure_7[arg0]) {
          hasFetchedCatalog = tmp3.hasFetchedCatalog;
        }
        tmp = true === hasFetchedCatalog;
      }
      return tmp;
    }
  };
  items[7] = {
    key: "hasFetchedInstances",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        let hasFetchedInstances;
        if (null != closure_7[arg0]) {
          hasFetchedInstances = tmp3.hasFetchedInstances;
        }
        tmp = true === hasFetchedInstances;
      }
      return tmp;
    }
  };
  items[8] = {
    key: "shouldFetchCatalogForGuild",
    value(arg0) {
      let catalogLastFetchedAt;
      if (null != closure_7[arg0]) {
        catalogLastFetchedAt = tmp.catalogLastFetchedAt;
      }
      let tmp3 = null == catalogLastFetchedAt;
      if (!tmp3) {
        const _Date = Date;
        const sum = catalogLastFetchedAt + 86400000;
        tmp3 = sum < Date.now();
      }
      return tmp3;
    }
  };
  items[9] = {
    key: "shouldFetchInstancesForGuild",
    value(arg0) {
      let prop;
      if (null != closure_7[arg0]) {
        prop = tmp.instancesLastFetchedAt;
      }
      let tmp3 = null == prop;
      if (!tmp3) {
        const _Date = Date;
        const sum = prop + 300000;
        tmp3 = sum < Date.now();
      }
      return tmp3;
    }
  };
  items[10] = {
    key: "shouldFetchGlobalCatalog",
    value() {
      const catalogLastFetchedAt = closure_8.catalogLastFetchedAt;
      let tmp = null == catalogLastFetchedAt;
      if (!tmp) {
        const _Date = Date;
        const sum = catalogLastFetchedAt + 86400000;
        tmp = sum < Date.now();
      }
      return tmp;
    }
  };
  return callback(GameServerStore, items);
}(importDefault(dependencyMap[7]).PersistedStore);
tmp2.displayName = "GameServerStore";
tmp2.persistKey = "GameServerStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  LOGOUT: function handleReset() {
    let closure_7 = {};
    let closure_8 = { catalog: {}, hasFetchedCatalog: false, catalogLastFetchedAt: undefined };
  },
  GAME_SERVER_FETCH_CATALOG_SUCCESS: function handleFetchCatalogSuccess(guildId) {
    guildId = guildId.guildId;
    let obj = {};
    const merged = Object.assign(closure_7);
    obj = {};
    const merged1 = Object.assign(getStateForGuild(guildId));
    obj["catalog"] = guildId.catalog;
    obj["hasFetchedCatalog"] = true;
    obj["catalogLastFetchedAt"] = Date.now();
    obj[guildId] = obj;
    closure_7 = obj;
  },
  GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS: function handleFetchGlobalCatalogSuccess(catalog) {
    let closure_8 = { catalog: catalog.catalog, hasFetchedCatalog: true, catalogLastFetchedAt: Date.now() };
  },
  GAME_SERVER_FETCH_INSTANCES_SUCCESS: function handleFetchInstancesSuccess(guildId) {
    guildId = guildId.guildId;
    let obj = {};
    const merged = Object.assign(closure_7);
    obj = {};
    const merged1 = Object.assign(getStateForGuild(guildId));
    obj["instances"] = guildId.instances;
    obj["hasFetchedInstances"] = true;
    obj["instancesLastFetchedAt"] = Date.now();
    obj[guildId] = obj;
    closure_7 = obj;
  },
  GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS: function handleFetchProductSuccess(guildId) {
    let instructions;
    let skuId;
    guildId = guildId.guildId;
    let obj = {};
    ({ skuId, instructions } = guildId);
    const merged = Object.assign(closure_7);
    obj = {};
    const merged1 = Object.assign(getStateForGuild(guildId));
    obj = {};
    const merged2 = Object.assign(getStateForGuild(guildId).instructions);
    obj[skuId] = instructions;
    obj["instructions"] = obj;
    obj[guildId] = obj;
    closure_7 = obj;
  },
  GAME_SERVER_UPDATE_INSTANCE_SUCCESS: function handleUpdateInstanceSuccess(arg0) {
    let guildId;
    let instance;
    ({ guildId, instance } = arg0);
    const tmp = getStateForGuild(guildId);
    let obj = {};
    const merged = Object.assign(closure_7);
    obj = {};
    const merged1 = Object.assign(tmp);
    obj = {};
    const merged2 = Object.assign(tmp.instances);
    obj[instance.id] = instance;
    obj["instances"] = obj;
    obj[guildId] = obj;
    closure_7 = obj;
  },
  GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: function handleFetchBoostEntitlementsSuccess(arg0) {
    let guildId;
    let unlockedGameServers;
    ({ guildId, unlockedGameServers } = arg0);
    let obj = {};
    const merged = Object.assign(closure_7);
    obj = {};
    const merged1 = Object.assign(getStateForGuild(guildId));
    obj["entitlements"] = unlockedGameServers;
    obj["appliedBoosts"] = recalculateAppliedBoosts(undefined, unlockedGameServers);
    obj[guildId] = obj;
    closure_7 = obj;
  },
  GAME_SERVER_CREATE: handleGameServerInstanceCreated,
  GAME_SERVER_UPDATE: handleGameServerInstanceCreated,
  GAME_SERVER_DELETE: function handleGameServerInstanceDeleted(arg0) {
    let gameServerId;
    let guildId;
    ({ guildId, gameServerId } = arg0);
    delete r1[r3];
    let obj = {};
    const merged = Object.assign(closure_7);
    obj = {};
    const merged1 = Object.assign(getStateForGuild(guildId));
    obj[guildId] = obj;
    closure_7 = obj;
  },
  GUILD_POWERUP_ENTITLEMENTS_CREATE: function handleGameServerEntitlementCreated(arg0) {
    let entitlements;
    let guildId;
    ({ guildId, entitlements } = arg0);
    const tmp = getStateForGuild(guildId);
    const importDefault = tmp;
    const found = entitlements.filter((sku) => {
      sku = sku.sku;
      let game_server;
      if (null != sku) {
        const tenant_metadata = sku.tenant_metadata;
        if (null != tenant_metadata) {
          const guild_monetization = tenant_metadata.guild_monetization;
          if (null != guild_monetization) {
            game_server = guild_monetization.game_server;
          }
        }
      }
      return null != game_server;
    });
    const item = found.forEach((id) => {
      tmp.entitlements[id.id] = id;
    });
    handleGameServerEntitlementsChanged(guildId, tmp);
  },
  GUILD_POWERUP_ENTITLEMENTS_DELETE: function handleGameServerEntitlementDeleted(arg0) {
    let entitlements;
    let guildId;
    ({ guildId, entitlements } = arg0);
    const tmp = getStateForGuild(guildId);
    const importDefault = tmp;
    const item = entitlements.forEach((arg0) => {
      delete r1[r0];
    });
    handleGameServerEntitlementsChanged(guildId, tmp);
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/premium/game_server/GameServerStore.tsx");

export default tmp2;
