// Module ID: 4038
// Function ID: 33608
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4039, 4040, 566, 686, 2]

// Module 4038 (_isNativeReflectConstruct)
import gameServerResponseToInstance from "gameServerResponseToInstance";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getStateForGuild(arg0) {
  if (null == dependencyMap[arg0]) {
    const obj = { catalog: {}, instances: {}, instructions: {}, entitlements: {} };
    dependencyMap[arg0] = obj;
  }
  return dependencyMap[arg0];
}
function recalculateAppliedBoosts(arg0, entitlements) {
  const values = Object.values(entitlements);
  return values.reduce((arg0, arg1) => {
    const tmp = outer1_0(outer1_1[5])(arg1);
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
  const merged = Object.assign(obj);
  obj = {};
  const merged1 = Object.assign(tmp);
  obj = {};
  const merged2 = Object.assign(tmp.instances);
  obj[gameServer.id] = importDefault(4040)(gameServer);
  obj["instances"] = obj;
  obj[guildId] = obj;
}
function handleGameServerEntitlementsChanged(guildId, entitlements) {
  let obj = {};
  const merged = Object.assign(obj);
  obj = {};
  const merged1 = Object.assign(entitlements);
  obj["appliedBoosts"] = recalculateAppliedBoosts(undefined, entitlements.entitlements);
  obj[guildId] = obj;
}
let closure_7 = {};
let closure_8 = { catalog: {}, hasFetchedCatalog: false, catalogLastFetchedAt: undefined };
let tmp2 = ((PersistedStore) => {
  class GameServerStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GameServerStore);
      obj = outer1_5(GameServerStore);
      tmp2 = outer1_4;
      if (outer1_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GameServerStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      if (null != arg0) {
        const outer1_7 = arg0;
      }
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_7;
    }
  };
  items[1] = obj;
  obj = {
    key: "getStateForGuild",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        tmp = outer1_7[arg0];
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGlobalCatalogState",
    value() {
      return outer1_8;
    }
  };
  items[4] = {
    key: "getGlobalCatalogGame",
    value(arg0) {
      let closure_0 = arg0;
      const values = Object.values(outer1_8.catalog);
      return values.find((gameId) => gameId.gameId === closure_0);
    }
  };
  items[5] = {
    key: "getLowestGameCostForGuild",
    value(arg0) {
      if (null == arg0) {
        return null;
      } else {
        let catalog;
        if (null != outer1_7[arg0]) {
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
        if (null != outer1_7[arg0]) {
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
        if (null != outer1_7[arg0]) {
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
      if (null != outer1_7[arg0]) {
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
      if (null != outer1_7[arg0]) {
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
      const catalogLastFetchedAt = outer1_8.catalogLastFetchedAt;
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
})(require("initialize").PersistedStore);
tmp2.displayName = "GameServerStore";
tmp2.persistKey = "GameServerStore";
tmp2 = new tmp2(require("dispatcher"), {
  LOGOUT: function handleReset() {
    let closure_7 = {};
    let closure_8 = { catalog: {}, hasFetchedCatalog: false, catalogLastFetchedAt: undefined };
  },
  GAME_SERVER_FETCH_CATALOG_SUCCESS: function handleFetchCatalogSuccess(guildId) {
    guildId = guildId.guildId;
    let obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(getStateForGuild(guildId));
    obj["catalog"] = guildId.catalog;
    obj["hasFetchedCatalog"] = true;
    obj["catalogLastFetchedAt"] = Date.now();
    obj[guildId] = obj;
  },
  GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS: function handleFetchGlobalCatalogSuccess(catalog) {
    const obj = { catalog: catalog.catalog, hasFetchedCatalog: true, catalogLastFetchedAt: Date.now() };
  },
  GAME_SERVER_FETCH_INSTANCES_SUCCESS: function handleFetchInstancesSuccess(guildId) {
    guildId = guildId.guildId;
    let obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(getStateForGuild(guildId));
    obj["instances"] = guildId.instances;
    obj["hasFetchedInstances"] = true;
    obj["instancesLastFetchedAt"] = Date.now();
    obj[guildId] = obj;
  },
  GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS: function handleFetchProductSuccess(guildId) {
    let instructions;
    let skuId;
    guildId = guildId.guildId;
    let obj = {};
    ({ skuId, instructions } = guildId);
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(getStateForGuild(guildId));
    obj = {};
    const merged2 = Object.assign(getStateForGuild(guildId).instructions);
    obj[skuId] = instructions;
    obj["instructions"] = obj;
    obj[guildId] = obj;
  },
  GAME_SERVER_UPDATE_INSTANCE_SUCCESS: function handleUpdateInstanceSuccess(arg0) {
    let guildId;
    let instance;
    ({ guildId, instance } = arg0);
    const tmp = getStateForGuild(guildId);
    let obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(tmp);
    obj = {};
    const merged2 = Object.assign(tmp.instances);
    obj[instance.id] = instance;
    obj["instances"] = obj;
    obj[guildId] = obj;
  },
  GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: function handleFetchBoostEntitlementsSuccess(arg0) {
    let guildId;
    let unlockedGameServers;
    ({ guildId, unlockedGameServers } = arg0);
    let obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(getStateForGuild(guildId));
    obj["entitlements"] = unlockedGameServers;
    obj["appliedBoosts"] = recalculateAppliedBoosts(undefined, unlockedGameServers);
    obj[guildId] = obj;
  },
  GAME_SERVER_CREATE: handleGameServerInstanceCreated,
  GAME_SERVER_UPDATE: handleGameServerInstanceCreated,
  GAME_SERVER_DELETE: function handleGameServerInstanceDeleted(arg0) {
    let gameServerId;
    let guildId;
    ({ guildId, gameServerId } = arg0);
    delete tmp[tmp2];
    let obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(getStateForGuild(guildId));
    obj[guildId] = obj;
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
      delete tmp2[tmp];
    });
    handleGameServerEntitlementsChanged(guildId, tmp);
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/premium/game_server/GameServerStore.tsx");

export default tmp2;
