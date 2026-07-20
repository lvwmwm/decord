// Module ID: 11497
// Function ID: 89602
// Name: fetchGameServerCatalog
// Dependencies: []
// Exports: acceptGameServerToS, disableGameServerForGuild, enableGameServerForGuild, fetchGameServerCatalog, fetchGameServerGlobalCatalog, fetchGameServerInstances, fetchGameServerInstructions, fetchGameServerRegions, resetGameServerRegionState, updateGameServerForGuild, updateGameServerRegionPingState, wakeGameServer

// Module 11497 (fetchGameServerCatalog)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const GAME_SERVER_COLLECTION_ID = arg1(dependencyMap[2]).GAME_SERVER_COLLECTION_ID;
({ AnalyticEvents: closure_6, Endpoints: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/premium/game_server/GameServerActionCreators.tsx");

export const fetchGameServerCatalog = function fetchGameServerCatalog(guild_id) {
  let flag = arg1;
  const arg1 = guild_id;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      let obj = callback(closure_2[4]);
      obj = { type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId: arg0 };
      const prop = arg0(closure_2[5]).GAME_SERVER_GAME_MOCKS;
      obj.catalog = prop.reduce((arg0, id) => {
        arg0[id.id] = id;
        return arg0;
      }, {});
      obj.dispatch(obj);
    }, 5000);
  } else {
    const currentUser = authStore.getCurrentUser();
    let isStaffResult;
    if (null != currentUser) {
      isStaffResult = currentUser.isStaff();
    }
    let obj = { url: closure_7.STOREFRONT_COLLECTION_WITH_PRODUCTS(GAME_SERVER_COLLECTION_ID) };
    obj = { locale: closure_3.locale, guild_id, include_unpublished_products: null != isStaffResult && isStaffResult, include_unpublished_collection: null != isStaffResult && isStaffResult };
    obj.query = obj;
    obj.oldFormErrors = true;
    const obj2 = arg1(dependencyMap[6]);
    obj.rejectWithError = arg1(dependencyMap[7]).rejectWithMigratedError();
    obj.retries = 2;
    const result = obj2.httpGetWithCountryCodeQuery(obj);
    return result.then((body) => {
      const products = body.body.products;
      const reduced = products.reduce((arg0, id) => {
        const result = callback(closure_2[8]).productToGameServerGame(id);
        arg0[result.id] = result;
        return arg0;
      }, {});
      let obj = callback(closure_2[4]);
      obj = { type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId: body, catalog: reduced };
      obj.dispatch(obj);
    });
  }
};
export const fetchGameServerGlobalCatalog = function fetchGameServerGlobalCatalog() {
  const currentUser = authStore.getCurrentUser();
  let isStaffResult;
  if (null != currentUser) {
    isStaffResult = currentUser.isStaff();
  }
  let obj = { url: closure_7.STOREFRONT_COLLECTION_WITH_PRODUCTS(GAME_SERVER_COLLECTION_ID), query: obj, oldFormErrors: true };
  obj = { locale: closure_3.locale, include_unpublished_products: tmp2, include_unpublished_collection: tmp2 };
  const obj2 = arg1(dependencyMap[6]);
  obj.rejectWithError = arg1(dependencyMap[7]).rejectWithMigratedError();
  obj.retries = 2;
  const result = obj2.httpGetWithCountryCodeQuery(obj);
  return result.then((body) => {
    const products = body.body.products;
    const reduced = products.reduce((arg0, id) => {
      const result = callback(closure_2[8]).productToGameServerGame(id);
      arg0[result.id] = result;
      return arg0;
    }, {});
    callback(closure_2[4]).dispatch({ type: "GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS", catalog: reduced });
  });
};
export const fetchGameServerInstances = function fetchGameServerInstances(arg0, arg1, signal) {
  let flag = arg1;
  arg1 = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      let obj = callback(closure_2[4]);
      obj = { type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId: arg0 };
      const prop = arg0(closure_2[5]).GAME_SERVER_INSTANCE_MOCKS;
      obj.instances = prop.reduce((arg0, id) => {
        arg0[id.id] = id;
        return arg0;
      }, {});
      obj.dispatch(obj);
    }, 5000);
    let resolved = Promise.resolve();
  } else {
    const HTTP = arg1(dependencyMap[7]).HTTP;
    const obj = { url: closure_7.GAME_SERVERS(arg0), signal };
    const value = HTTP.get(obj);
    resolved = value.then((body) => {
      if (null != body.body) {
        body = body.body;
        const reduced = body.reduce((arg0, id) => {
          arg0[id.id] = callback(closure_2[9])(id);
          return arg0;
        }, {});
        let obj = callback(closure_2[4]);
        obj = { type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId: body, instances: reduced };
        obj.dispatch(obj);
      }
    });
  }
  return resolved;
};
export const fetchGameServerInstructions = function fetchGameServerInstructions(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  let obj = arg1(dependencyMap[6]);
  obj = { url: closure_7.STOREFRONT_PRODUCT_BY_SKU_ID(arg1), query: obj, rejectWithError: true, retries: 3 };
  obj = { locale: closure_3.locale };
  const result = obj.httpGetWithCountryCodeQuery(obj);
  return result.then((body) => {
    if (null != body.body) {
      const tenant_metadata = body.body.tenant_metadata;
      let pc;
      if (null != tenant_metadata) {
        const guild_monetization = tenant_metadata.guild_monetization;
        if (null != guild_monetization) {
          const game_server = guild_monetization.game_server;
          if (null != game_server) {
            pc = game_server.instructions.pc;
          }
        }
      }
      if (null == pc) {
        pc = [];
      }
      let obj = arg1(closure_2[4]);
      obj = { type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS", guildId: body, skuId: arg1, instructions: pc };
      obj.dispatch(obj);
    }
  });
};
export const acceptGameServerToS = function acceptGameServerToS(arg0, provider) {
  if (arg0) {
    let id;
    let obj = importDefault(dependencyMap[10]);
    obj = {};
    const currentUser = authStore.getCurrentUser();
    if (null != currentUser) {
      id = currentUser.id;
    }
    obj.user_id = id;
    obj.provider = provider;
    obj.track(constants.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, obj);
  }
};
export const resetGameServerRegionState = function resetGameServerRegionState() {
  importDefault(dependencyMap[4]).dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
};
export const updateGameServerRegionPingState = function updateGameServerRegionPingState(pingUrl, state) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "GAME_SERVER_REGION_PING_STATE_UPDATE", pingUrl, state };
  obj.dispatch(obj);
};
export const enableGameServerForGuild = function enableGameServerForGuild(arg0, arg1, game_server_name, game_server_region) {
  const HTTP = arg1(dependencyMap[7]).HTTP;
  let obj = { url: closure_7.GUILD_POWERUP_TOGGLE(arg0, arg1), body: obj, rejectWithError: true, oldFormErrors: true };
  obj = { game_server_name, game_server_region };
  return HTTP.post(obj);
};
export const updateGameServerForGuild = function updateGameServerForGuild(arg0, arg1, sku_id, game_server_name) {
  const HTTP = arg1(dependencyMap[7]).HTTP;
  let obj = { url: closure_7.GUILD_POWERUP_UPDATE(arg0, arg1), body: obj, rejectWithError: true, oldFormErrors: true };
  obj = { game_server_name, sku_id };
  return HTTP.patch(obj);
};
export const disableGameServerForGuild = function disableGameServerForGuild(arg0, arg1, entitlement_id) {
  const HTTP = arg1(dependencyMap[7]).HTTP;
  let obj = { url: closure_7.GUILD_POWERUP_TOGGLE(arg0, arg1), query: obj, rejectWithError: true, oldFormErrors: true };
  obj = { entitlement_id };
  return HTTP.del(obj);
};
export const fetchGameServerRegions = function fetchGameServerRegions(arg0) {
  const HTTP = arg1(dependencyMap[7]).HTTP;
  const obj = { "Bool(true)": 24, "Bool(true)": 24, "Bool(true)": null, "Bool(true)": "8ba3e8ee2991f198308400197cdb28bc", url: closure_7.GAME_SERVER_REGIONS(arg0) };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let obj = callback(closure_2[4]);
    obj = { type: "GAME_SERVER_FETCH_REGIONS_SUCCESS" };
    body = body.body;
    const mapped = body.map(callback(closure_2[11]));
    obj.regions = mapped.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
    obj.dispatch(obj);
  });
};
export const wakeGameServer = function wakeGameServer(arg0, arg1) {
  arg1 = arg0;
  const HTTP = arg1(dependencyMap[7]).HTTP;
  const obj = { url: closure_7.GAME_SERVER_WAKE(arg0, arg1), rejectWithError: true };
  return HTTP.post({ url: closure_7.GAME_SERVER_WAKE(arg0, arg1), rejectWithError: true }).then((body) => {
    let obj = callback(closure_2[4]);
    obj = { type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS", guildId: body, instance: callback(closure_2[9])(body.body) };
    obj.dispatch(obj);
  });
};
