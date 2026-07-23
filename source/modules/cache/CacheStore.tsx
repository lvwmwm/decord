// Module ID: 6708
// Function ID: 51976
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 5, 4808, 1194, 1906, 3947, 653, 3, 587, 1903, 6709, 6720, 14, 20, 1902, 6721, 6722, 6723, 6724, 6725, 6887, 6908, 566, 686, 1901, 6893, 6899, 6897, 6891, 1841, 6909, 477, 1328, 6911, 1898, 2]

// Module 6708 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import asyncGeneratorStep from "asyncGeneratorStep";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_createForOfIteratorHelperLoose";
import AppStartPerformance from "AppStartPerformance";
import _inherits from "_inherits";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult from "_possibleConstructorReturn";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleClearCaches(type) {
  importDefaultResult.log("Clearing cache store");
  let closure_21 = Date.now();
  const Storage = require(587) /* Storage */.Storage;
  Storage.remove(closure_15);
  const Storage2 = require(587) /* Storage */.Storage;
  Storage2.remove(closure_16);
  const Storage3 = require(587) /* Storage */.Storage;
  Storage3.remove(closure_17);
  let c20 = "no-cache";
  if (tmp5) {
    let c19 = true;
  }
}
async function _loadChannelHistory(arg0, arg1, arg2, arg3) {
  const nowResult = performance.now();
  if (null != arg0) {
    if (null != arg2) {
      const obj2 = outer2_1(outer2_2[15]);
      const tmp10 = yield obj2.startupLoad(arg0, arg1, arg2, outer2_14);
      const _HermesInternal = HermesInternal;
      outer2_18.verbose("loaded " + tmp10.messages.length + " messages (guild: " + arg1 + ", channel: " + arg2 + ").");
      let obj = { guildId: arg1, channelId: arg2 };
      ({ users: obj3.users, members: obj3.members, messages: obj3.messages } = tmp10);
      const obj4 = outer2_1(outer2_2[16]);
      const result = obj4.recordChannelFetchedLocal(arg2, outer2_0(outer2_2[16]).INITIAL_MESSAGE_FETCH_KEY, null, null, outer2_14, tmp10.messages);
      const _performance = performance;
      const items = [performance.now() - nowResult, obj];
      return items;
    }
  }
  outer2_18.verbose("skipped loaded messages (channel: " + arg2 + ", database: " + arg0 + ").");
  const items1 = [performance.now() - nowResult, ];
  obj = { guildId: null, channelId: null, users: [], members: [], messages: [] };
  items1[1] = obj;
  return items1;
}
async function _loadEarlyCache(arg0, arg1, arg2, arg3) {
  let channelId;
  let guildId2;
  let closure_0 = arg0;
  let closure_1 = arg2;
  let socket;
  let c3;
  let c4;
  let c5;
  let arr2;
  let c7;
  let arr3;
  let c9;
  let arr4;
  let arr5;
  let closure_12;
  outer2_18.verbose("loading early cache");
  socket = outer2_10.getSocket();
  socket.connect();
  let guildId = outer2_13.getGuildId();
  let tmp4 = null;
  if (null != guildId) {
    tmp4 = guildId;
  }
  c3 = tmp4;
  channelId = outer2_12.getChannelId();
  let tmp6 = null;
  if (null != channelId) {
    tmp6 = channelId;
  }
  c4 = tmp6;
  const loadCachedMessages = outer2_1(outer2_2[17]).loadCachedMessages;
  const result = loadCachedMessages.measureAsyncWithoutNesting(() => (function loadChannelHistory(closure_0, c3, c4) {
    return outer4_27(...arguments);
  })(closure_0, c3, c4));
  const fetchGuildCache = outer2_1(outer2_2[17]).fetchGuildCache;
  const nowResult = performance.now();
  const fetchGuildCache2 = outer2_1(outer2_2[17]).fetchGuildCache;
  const measureAsyncResult = fetchGuildCache.measureAsync(() => (function loadInitialGuilds(closure_0, closure_1) {
    return outer4_29(...arguments);
  })(closure_0, closure_1));
  if (null != arg0) {
    let timeAsyncResult = outer2_1(outer2_2[18]).timeAsync("\u{1F4BE}", "cache: private_channels", () => outer3_1(outer3_2[19]).getAsync(closure_0, null));
    const obj2 = outer2_1(outer2_2[18]);
  } else {
    timeAsyncResult = Promise.resolve([]);
  }
  if (null == arg0) {
    let resolved = Promise.resolve({});
  } else {
    resolved = outer2_1(outer2_2[18]).timeAsync("\u{1F4BE}", "cache: user_settings", () => outer3_1(outer3_2[20]).getAll(closure_0));
    const obj3 = outer2_1(outer2_2[18]);
  }
  if (null == arg0) {
    let resolved1 = Promise.resolve([]);
  } else {
    resolved1 = outer2_1(outer2_2[18]).timeAsync("\u{1F4BE}", "cache: read_states", () => outer3_1(outer3_2[21]).getAll(closure_0));
    const obj4 = outer2_1(outer2_2[18]);
  }
  if (null == arg0) {
    let resolved2 = Promise.resolve([]);
  } else {
    resolved2 = outer2_1(outer2_2[18]).timeAsync("\u{1F4BE}", "cache: user_guild_settings", () => outer3_1(outer3_2[22]).getAll(closure_0));
    const obj5 = outer2_1(outer2_2[18]);
  }
  outer2_1(outer2_2[23])("AllCacheStores", () => outer3_0(outer3_2[24]));
  outer2_1(outer2_2[23])("MobileAppDatabaseManager", () => outer3_0(outer3_2[25]));
  let items = [
    result,
    measureAsyncResult,
    fetchGuildCache2.measureAsync(() => (function loadInitialGuildChannels(closure_0, closure_1) {
      return outer4_30(...arguments);
    })(closure_0, closure_1)),
    timeAsyncResult,
    resolved,
    resolved1,
    resolved2
  ];
  const tmp25 = outer2_3(yield Promise.all(items), 7);
  const tmp26 = outer2_3(tmp25[0], 2);
  c5 = tmp27;
  arr2 = tmp25[1];
  c7 = tmp28;
  arr3 = tmp25[3];
  c9 = tmp29;
  arr4 = tmp25[5];
  arr5 = tmp25[6];
  outer2_18.verbose("cache loaded in " + performance.now() - nowResult + "ms (channel_history " + tmp26[0] + "ms)");
  if (null == tmp26[1]) {
    outer2_1(outer2_2[26])("database:history_cache_null");
    outer2_18.verbose("finished without dispatching CACHE_LOADED");
    const items1 = [false, null, 0];
    return items1;
  } else {
    const _Object2 = Object;
    const members = tmp27.members;
    closure_12 = Object.fromEntries(members.map((userId) => {
      const items = [userId.userId, userId];
      return items;
    }));
    guildId = tmp28.guildId;
    yield new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const Emitter = outer3_1(outer3_2[27]).Emitter;
      return Emitter.batched(() => {
        outer4_1(outer4_2[18]).time("\u{1F4BE}", "Dispatch Mini Cache", () => {
          let obj = outer5_1(outer5_2[28]);
          obj = { type: "CACHE_LOADED", guilds: outer2_6, privateChannels: outer2_8 };
          let channels = outer2_7.channels;
          if (null == channels) {
            channels = [];
          }
          obj.initialGuildChannels = channels;
          const items = [...outer2_5.users];
          obj.users = items;
          if (null == outer2_5.channelId) {
            obj = {};
          } else {
            obj = {};
            obj[outer2_5.channelId] = outer2_5.messages;
          }
          obj.messages = obj;
          if (null == outer2_5.guildId) {
            let obj1 = {};
          } else {
            obj1 = {};
            obj1[outer2_5.guildId] = outer2_12;
          }
          obj.guildMembers = obj1;
          obj.userSettings = outer2_9;
          obj.userGuildSettings = outer2_11;
          obj.readStates = outer2_10;
          return obj.dispatch(obj).then(outer1_0, outer1_1);
        });
        let obj = outer4_1(outer4_2[18]);
        outer4_1(outer4_2[18]).time("\u{1F4BE}", "socket.processFirstQueuedDispatch()", () => {
          const dispatcher = outer2_2.dispatcher;
          return dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"]));
        });
      });
    });
    const _JSON = JSON;
    const json = JSON.stringify(arg2);
    let name;
    if (null != arg0) {
      name = arg0.name;
    }
    let length = arr3.length;
    ({ guildId: guildId2, channelId } = tmp27);
    let channels = tmp28.channels;
    length = undefined;
    if (null != channels) {
      length = channels.length;
    }
    const _Object = Object;
    const _HermesInternal = HermesInternal;
    outer2_18.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: " + arg1 + "\n          selected_guild: " + tmp4 + "\n          selected_channel: " + tmp6 + "\n          navigation_state: " + json + "\n          database: " + null != arg0 + "\n            name: " + name + "\n        data:\n          database:\n            private_channels: " + length + "\n            channel_history:\n              guild: " + guildId2 + "\n              channel: " + channelId + "\n              messages: " + tmp27.messages.length + "\n                members: " + tmp27.members.length + "\n                users: " + tmp27.users.length + "\n            initial_guild:\n              id: " + guildId + "\n              channels: " + length + "\n            user_settings: " + Object.keys(tmp29).length + "\n            read_states: " + arr4.length + "\n            user_guild_settings: " + arr5.length + "\n      )");
    let obj = { guilds: arr2.length };
    outer2_1(outer2_2[17]).setEarlyCacheInfo(obj);
    outer2_18.verbose("finished dispatching CACHE_LOADED");
    const items2 = [true, , ];
    let tmp60 = null;
    if (tmp31) {
      tmp60 = null;
      if (null != guildId) {
        tmp60 = guildId;
      }
    }
    items2[1] = tmp60;
    items2[2] = arr3.length;
    return items2;
  }
  const measureAsyncResult1 = fetchGuildCache2.measureAsync(() => (function loadInitialGuildChannels(closure_0, closure_1) {
    return outer4_30(...arguments);
  })(closure_0, closure_1));
}
async function _loadInitialGuilds(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let guildId;
  if (null == arg0) {
    return [];
  } else {
    const page = arg1.page;
    if ("private-channels" !== page) {
      if ("guild-channels" !== page) {
        if ("other" === page) {
          if ("@me" === arg1.guildId) {
            let outer2_25 = true;
          }
        }
      }
      if (outer2_25) {
        const tmp9 = yield outer2_0(outer2_2[29]).tryLoadAsync(() => outer3_1(outer3_2[18]).timeAsync("\u{1F4BE}", "cache: guilds", () => outer4_1(outer4_2[30]).getAsync(outer1_0)));
        let items = tmp9;
        if (null == tmp9) {
          items = [];
        }
        return items;
      } else {
        guildId = yield outer2_1(outer2_2[31]).getCommittedVersions().initial_guild_id;
        if (null == guildId) {
          guildId = arg1.guildId;
        }
        if (null != guildId) {
          if ("@me" !== guildId) {
            const tmp6 = yield outer2_0(outer2_2[29]).tryLoadAsync(() => outer3_1(outer3_2[30]).getOneAsync(closure_0, guildId));
            if (null != tmp6) {
              const items1 = [tmp6];
              let items2 = items1;
            } else {
              items2 = [];
            }
            return items2;
          }
        }
        return [];
      }
    }
    outer2_25 = true;
  }
}
async function _loadInitialGuildChannels(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let guildId;
  if (null == arg0) {
    return Promise.resolve({ channels: null, guildId: null });
  } else {
    guildId = yield outer2_1(outer2_2[31]).getCommittedVersions().initial_guild_id;
    let tmp = null == guildId;
    if (tmp) {
      tmp = "guild-channels" === arg1.page;
    }
    if (tmp) {
      guildId = arg1.guildId;
    }
    if (null != arg0) {
      if (null != guildId) {
        const obj = { channels: yield outer2_0(outer2_2[29]).tryLoadAsync(() => outer3_1(outer3_2[19]).getAsync(closure_0, guildId)), guildId };
        return obj;
      }
    }
    const _HermesInternal = HermesInternal;
    outer2_18.verbose("skipped loading initial guild (guild: " + guildId + ", database: " + arg0 + ")");
    return Promise.resolve({ channels: null, guildId: null });
  }
}
async function _loadLateLazyCache(arg0, arg1, arg2, arg3, arg4) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let _slicedToArray = arg3;
  let asyncGeneratorStep;
  let _isNativeReflectConstruct;
  let _createForOfIteratorHelperLoose;
  let closure_7;
  let socket;
  outer2_18.verbose("loading late lazy cache");
  const fetchLazyCache = outer2_1(outer2_2[17]).fetchLazyCache;
  const tmp2 = outer2_3(yield fetchLazyCache.measureAsync(() => {
    const items = [
      outer3_0(outer3_2[29]).tryLoadAsync(() => {
        if (null != outer1_0) {
          let timeAsyncResult = outer4_1(outer4_2[18]).timeAsync("\u{1F4BE}", "cache: cache_version", () => outer5_1(outer5_2[32]).okAsync(outer2_0));
          const obj = outer4_1(outer4_2[18]);
        } else {
          timeAsyncResult = Promise.resolve(true);
        }
        return timeAsyncResult;
      }),
    ,

    ];
    let obj = outer3_0(outer3_2[29]);
    items[1] = outer3_0(outer3_2[29]).tryLoadAsync(() => {
      if (null != outer1_0) {
        if (!outer4_25) {
          let timeAsyncResult = outer4_1(outer4_2[18]).timeAsync("\u{1F4BE}", "cache: lazy guilds", () => outer5_1(outer5_2[30]).getAsync(outer2_0));
          const obj = outer4_1(outer4_2[18]);
        }
        return timeAsyncResult;
      }
      timeAsyncResult = Promise.resolve([]);
    });
    let obj2 = outer3_0(outer3_2[29]);
    items[2] = outer3_0(outer3_2[29]).tryLoadAsync(() => {
      if (null != outer1_0) {
        let timeAsyncResult = outer4_1(outer4_2[18]).timeAsync("\u{1F4BE}", "cache: basic_channels", () => outer5_1(outer5_2[33]).getAsync(outer2_0));
        const obj2 = outer4_1(outer4_2[18]);
      } else {
        const obj = { all: [], stale: [], channels: [] };
        timeAsyncResult = Promise.resolve(obj);
      }
      return timeAsyncResult;
    });
    return Promise.all(items);
  }), 3);
  asyncGeneratorStep = tmp2[0];
  _isNativeReflectConstruct = tmp2[1];
  _createForOfIteratorHelperLoose = tmp2[2];
  const fetchStaleChannels = outer2_1(outer2_2[17]).fetchStaleChannels;
  closure_7 = yield fetchStaleChannels.measureAsync(() => {
    if (null != closure_0) {
      if (null != _createForOfIteratorHelperLoose) {
        if (_createForOfIteratorHelperLoose.stale.length > 0) {
          let tryLoadAsyncResult = outer3_0(outer3_2[29]).tryLoadAsync(() => (function loadGuildChannels(outer1_0, stale) {
            let closure_0 = outer1_0;
            outer5_18.verbose("loading stale guild channels (count: " + stale.length + ", ids: " + stale.join(", ") + ")");
            return Promise.all(stale.map((arg0) => {
              let closure_0 = arg0;
              const async = outer6_1(outer6_2[19]).getAsync(closure_0, arg0);
              return async.then(() => { ... });
            }));
          })(outer1_0, outer1_6.stale));
          const obj = outer3_0(outer3_2[29]);
        }
        return tryLoadAsyncResult;
      }
    }
    tryLoadAsyncResult = Promise.resolve([]);
  });
  const DelayLoadLateLazyCacheHoldoutExperiment = outer2_0(outer2_2[34]).DelayLoadLateLazyCacheHoldoutExperiment;
  const verbose = outer2_18.verbose;
  if (DelayLoadLateLazyCacheHoldoutExperiment.getCachedEnabled()) {
    verbose("loadLateLazyCache: not yielding to react");
    const loadLazyCache = outer2_1(outer2_2[17]).loadLazyCache;
    loadLazyCache.recordStart();
    socket = outer2_10.getSocket();
    outer2_32(() => {
      if (false === asyncGeneratorStep) {
        outer3_1(outer3_2[26])("database:not_ok");
        outer3_1(outer3_2[28]).dispatch({ type: "CLEAR_CACHES", reason: "database:not_ok" });
        const obj14 = outer3_1(outer3_2[28]);
        let obj = { type: "CACHE_LOADED_LAZY_NO_CACHE" };
        outer3_1(outer3_2[28]).dispatch(obj);
      } else {
        if (null != _isNativeReflectConstruct) {
          if (null != _createForOfIteratorHelperLoose) {
            if (null != closure_7) {
              if (null == asyncGeneratorStep) {
                outer3_1(outer3_2[26])("database:versionless");
                outer3_18.log("kv_cache was not ok (null version with values)");
                outer3_1(outer3_2[28]).dispatch({ type: "CLEAR_CACHES", reason: "database:versionless" });
                const obj8 = outer3_1(outer3_2[28]);
                obj = { type: "CACHE_LOADED_LAZY_NO_CACHE" };
                outer3_1(outer3_2[28]).dispatch(obj);
              }
              if (outer3_23) {
                outer3_1(outer3_2[26])("already_connected");
                outer3_18.log("Skipping lazy cache; already connected.");
                let obj5 = outer3_1(outer3_2[28]);
                const obj1 = { type: "CACHE_LOADED_LAZY_NO_CACHE" };
                obj5.dispatch(obj1);
              } else {
                obj = { hadCacheAtStartup: true };
                AppStartPerformance.addAnalytics(obj);
                const obj2 = { type: "CACHE_LOADED_LAZY", guilds: _isNativeReflectConstruct, guildChannels: closure_7, basicGuildChannels: _createForOfIteratorHelperLoose.channels, initialGuildId: closure_2 };
                const deserializeCache = outer3_1(outer3_2[17]).deserializeCache;
                deserializeCache.measure(() => {
                  if (null != obj2.channels) {
                    outer4_1(outer4_2[14])(tmp.channels);
                  }
                  if (null != obj2.privateChannels) {
                    outer4_1(outer4_2[14])(tmp.privateChannels);
                  }
                  if (null != obj2.guildChannels) {
                    const result = outer4_0(outer4_2[14]).deserializeChannelEntries(tmp.guildChannels);
                    const obj = outer4_0(outer4_2[14]);
                  }
                });
                const dispatchLazyCache = outer3_1(outer3_2[17]).dispatchLazyCache;
                dispatchLazyCache.measure(() => outer4_1(outer4_2[28]).dispatch(obj2));
                const _performance = performance;
                const _HermesInternal = HermesInternal;
                outer3_18.verbose("late lazy cache loaded (ok: true, took: " + performance.now() - tmp + "ms)");
                let obj3 = { usedCacheAtStartup: true };
                AppStartPerformance.addAnalytics(obj3);
                const reduced = closure_7.reduce((arg0, arg1) => {
                  let arr;
                  [, arr] = arg1;
                  return arg0 + arr.length;
                }, 0);
                const all = _createForOfIteratorHelperLoose.all;
                const reduced1 = all.reduce((arg0, arg1) => {
                  let arr;
                  [, arr] = arg1;
                  return arg0 + arr.length;
                }, 0);
                const channels = _createForOfIteratorHelperLoose.channels;
                const reduced2 = channels.reduce((arg0, arg1) => {
                  let arr;
                  [, arr] = arg1;
                  return arg0 + arr.length;
                }, 0);
                const diff = reduced1 - reduced2;
                let str4 = "";
                if (0 !== _createForOfIteratorHelperLoose.stale.length) {
                  const stale = _createForOfIteratorHelperLoose.stale;
                  const _HermesInternal2 = HermesInternal;
                  str4 = " \u00B7 " + stale.join(", ");
                }
                let name;
                if (null != obj2) {
                  name = obj2.name;
                }
                const _HermesInternal3 = HermesInternal;
                outer3_18.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: " + closure_1 + "\n          initial_guild: " + closure_2 + "\n          database: " + null != obj2 + "\n            ok: " + asyncGeneratorStep + "\n            name: " + name + "\n        data:\n          database:\n            guilds: " + _isNativeReflectConstruct.length + "\n            basic_channels:\n              total: " + reduced1 + " (" + _createForOfIteratorHelperLoose.channels.length + " guilds)\n              stale: " + diff + " (" + _createForOfIteratorHelperLoose.stale.length + " guilds" + str4 + ")\n              unstale: " + reduced2 + "\n            full_channels (guilds_with_stale_basic_channels):\n              total: " + reduced + " (" + closure_7.length + " guilds)\n      )");
                obj3 = outer3_1(outer3_2[17]);
                const obj4 = { guilds: _isNativeReflectConstruct.length, privateChannels: _slicedToArray, basicChannels: reduced1, basicChannelsStale: diff, fullChannels: reduced, fullChannelGuilds: closure_7.length };
                obj3.setLazyCacheInfo(obj4);
              }
            }
          }
        }
        outer3_1(outer3_2[26])("database:load_failed");
        const _HermesInternal4 = HermesInternal;
        outer3_18.log("couldn't load database item (\n          database: " + null != obj2 + "\n          basic_channels: " + null != _createForOfIteratorHelperLoose + "\n          guild_channels: " + null != closure_7 + "\n          guilds: " + null != _isNativeReflectConstruct + "\n        )");
        outer3_1(outer3_2[28]).dispatch({ type: "CLEAR_CACHES", reason: "database:load_failed" });
        const obj11 = outer3_1(outer3_2[28]);
        obj5 = { type: "CACHE_LOADED_LAZY_NO_CACHE" };
        outer3_1(outer3_2[28]).dispatch(obj5);
      }
    });
  } else {
    verbose("loadLateLazyCache: yielding to react");
    let obj = outer2_0(outer2_2[35]);
    return yield obj.waitSafelyForPostTTI(num3);
  }
}
function resumeFluxAndSocket(arg0) {
  let closure_0 = arg0;
  const importDefault = socket.getSocket();
  const dependencyMap = false;
  const Emitter = importDefault(566).Emitter;
  Emitter.batched(() => {
    callback();
    let dispatcher = lib.dispatcher;
    if (dispatcher.hasStuffToDispatchNow()) {
      const table = true;
      const loadLazyCache = lib(table[17]).loadLazyCache;
      loadLazyCache.recordEnd();
      outer1_18.verbose("Processing First Queued Dispatch");
      const dispatcher3 = lib.dispatcher;
      const _Set = Set;
      const set = new Set(["READY", "INITIAL_GUILD"]);
      const result = dispatcher3.processFirstQueuedDispatch(set);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        outer2_18.verbose("Unpausing Dispatch Queue");
        const dispatcher = outer1_1.dispatcher;
        dispatcher.unpauseDispatchQueue();
      }, 100);
    } else {
      outer1_18.verbose("Unpausing Dispatch Queue");
      const dispatcher2 = lib.dispatcher;
      dispatcher2.unpauseDispatchQueue();
    }
  });
  if (!dependencyMap) {
    let loadLazyCache = importDefault(14).loadLazyCache;
    loadLazyCache.recordEnd();
  }
}
({ MAX_MESSAGES_PER_CHANNEL: closure_14, CACHE_STORE_KEY: closure_15, CACHE_STORE_LAZY_KEY: closure_16, CACHE_STORE_CHANNELS_LAZY_KEY: closure_17 } = ME);
importDefaultResult = new importDefaultResult("CacheStore");
let c19 = false;
const initializing = "initializing";
let c21 = 0;
let c22 = false;
let c23 = false;
let c24 = false;
let c25 = false;
let tmp5 = ((Store) => {
  class CacheStoreClass {
    constructor() {
      self = this;
      tmp = outer1_4(this, CacheStoreClass);
      obj = outer1_7(CacheStoreClass);
      tmp2 = outer1_6;
      if (outer1_26()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(CacheStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_11, outer1_10, outer1_12, outer1_13);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "hasCache",
    value() {
      return outer1_22;
    }
  };
  items[1] = obj;
  obj = {
    key: "getLazyCacheStatus",
    value() {
      return outer1_20;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "lastWriteTime",
    get() {
      return outer1_21;
    }
  };
  items[4] = {
    key: "canWriteCaches",
    value(arg0) {
      if (obj.isAuthenticated()) {
        if (outer1_19) {
          outer1_18.log("Not writing cache because caches cleared");
          let flag2 = false;
        } else {
          let tmp5 = !arg0;
          if (tmp5) {
            tmp5 = !outer1_24;
          }
          flag2 = !tmp5;
          if (tmp5) {
            outer1_18.log("Not writing cache because never connected");
            flag2 = false;
          }
        }
      } else {
        outer1_18.log("Not writing cache because not authenticated");
        return false;
      }
    }
  };
  const obj3 = { key: "loadCacheAsync" };
  let closure_0 = callback3(async (arg0, arg1) => {
    const callback = arg0;
    let id;
    let c2;
    const callOnceResult = callback(outer2_2[38]).callOnce(arg1);
    const obj = callback(outer2_2[38]);
    CacheStoreClass(outer2_2[17]).setInitialPage(arg0.page);
    const guildId = arg0.guildId;
    const obj2 = CacheStoreClass(outer2_2[17]);
    let tmp3 = null;
    if (null != guildId) {
      tmp3 = null;
      if ("@me" !== guildId) {
        tmp3 = guildId;
      }
    }
    CacheStoreClass(outer2_2[17]).setInitialGuildId(tmp3);
    if ("initializing" !== outer2_20) {
      CacheStoreClass(outer2_2[26])("cache:lazy_cache_not_initializing");
      callOnceResult();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const socket = outer3_10.getSocket();
        let unpauseDispatchQueueResult;
        if (null != socket) {
          const dispatcher = socket.dispatcher;
          if (null != dispatcher) {
            unpauseDispatchQueueResult = dispatcher.unpauseDispatchQueue();
          }
        }
        return unpauseDispatchQueueResult;
      }, 0);
    } else {
      id = outer2_11.getId();
      const result = CacheStoreClass(outer2_2[39]).carefullyOpenDatabase(id);
      c2 = result;
      const loadMiniCache = CacheStoreClass(outer2_2[17]).loadMiniCache;
      const tmp6 = outer2_3(yield loadMiniCache.measureAsync(() => (function loadEarlyCache(c2, id, closure_0) {
        return outer4_28(...arguments);
      })(c2, id, closure_0)), 3);
      callOnceResult();
      if (tmp6[0]) {
        yield (function loadLateLazyCache(arg0, arg1, arg2, arg3) {
          return outer3_31(...arguments);
        })(tmp28, tmp24, tmp7, tmp8);
      } else {
        return yield (function dontLoadLateLazyCache() {
          outer3_32(() => CacheStoreClass(outer4_2[28]).dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" }));
          return Promise.resolve();
        })();
      }
      const obj4 = CacheStoreClass(outer2_2[39]);
      tmp24 = id;
      tmp28 = result;
    }
  });
  obj3.value = function loadCacheAsync(arg0, arg1) {
    return callback(...arguments);
  };
  items[5] = obj3;
  return callback(CacheStoreClass, items);
})(require("initialize").Store);
tmp5.displayName = "CacheStore";
tmp5 = new tmp5(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let c23 = true;
    let c24 = true;
    return false;
  },
  LOGOUT: handleClearCaches,
  CONNECTION_CLOSED: function handleConnectionClose() {
    let c23 = false;
    let c24 = true;
    return false;
  },
  CACHE_LOADED: function handleCacheLoaded() {
    let c22 = true;
  },
  CACHE_LOADED_LAZY: function handleCacheLoadedLazy() {
    let c22 = true;
    let c20 = "cache-loaded";
  },
  CACHE_LOADED_LAZY_NO_CACHE: function handleCacheLoadedLazyNoCache() {
    let c20 = "no-cache";
  },
  CLEAR_CACHES: handleClearCaches,
  WRITE_CACHES: function saveCaches() {
    importDefaultResult.verbose("Writing cache now");
    let closure_21 = Date.now();
    let c22 = true;
    const Storage = require(587) /* Storage */.Storage;
    Storage.remove(closure_15);
    const Storage2 = require(587) /* Storage */.Storage;
    Storage2.remove(closure_17);
    const Storage3 = require(587) /* Storage */.Storage;
    Storage3.remove(closure_16);
  }
});
let result = require("_defineProperties").fileFinishedImporting("modules/cache/CacheStore.tsx");

export default tmp5;
export const ENABLE_CACHE_STORE = true;
