// Module ID: 6697
// Function ID: 51876
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6697 (_isNativeReflectConstruct)
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
  const Storage = arg1(dependencyMap[13]).Storage;
  Storage.remove(closure_15);
  const Storage2 = arg1(dependencyMap[13]).Storage;
  Storage2.remove(closure_16);
  const Storage3 = arg1(dependencyMap[13]).Storage;
  Storage3.remove(closure_17);
  let closure_20 = "no-cache";
  if (tmp5) {
    let closure_19 = true;
  }
}
async function _loadChannelHistory(arg0, guildId, channelId, arg3) {
  const nowResult = performance.now();
  if (null != arg0) {
    if (null != channelId) {
      const obj2 = callback2(closure_2[15]);
      const tmp10 = yield obj2.startupLoad(arg0, guildId, channelId, closure_14);
      const _HermesInternal = HermesInternal;
      closure_18.verbose("loaded " + tmp10.messages.length + " messages (guild: " + guildId + ", channel: " + channelId + ").");
      let obj = { guildId, channelId };
      ({ users: obj3.users, members: obj3.members, messages: obj3.messages } = tmp10);
      const obj4 = callback2(closure_2[16]);
      const result = obj4.recordChannelFetchedLocal(channelId, callback(closure_2[16]).INITIAL_MESSAGE_FETCH_KEY, null, null, closure_14, tmp10.messages);
      const _performance = performance;
      const items = [performance.now() - nowResult, obj];
      return items;
    }
  }
  closure_18.verbose("skipped loaded messages (channel: " + channelId + ", database: " + arg0 + ").");
  const items1 = [performance.now() - nowResult, ];
  obj = { <string:3104355260>: false, <string:3130036820>: false, users: [], members: [], messages: [] };
  items1[1] = obj;
  return items1;
}
async function _loadEarlyCache(name, arg1, arg2, arg3) {
  let channelId;
  let guildId2;
  let socket;
  let tmp4;
  let tmp6;
  let tmp27;
  let arr2;
  let tmp28;
  let arr3;
  let tmp29;
  let arr4;
  let arr5;
  channelId = undefined;
  closure_18.verbose("loading early cache");
  socket = arr4.getSocket();
  socket.connect();
  let guildId = guildId.getGuildId();
  tmp4 = null;
  if (null != guildId) {
    tmp4 = guildId;
  }
  channelId = channelId.getChannelId();
  tmp6 = null;
  if (null != channelId) {
    tmp6 = channelId;
  }
  const loadCachedMessages = arg2(socket[17]).loadCachedMessages;
  const result = loadCachedMessages.measureAsyncWithoutNesting(() => function loadChannelHistory(arg0, arg1, arg2) {
    return callback(...arguments);
  }(arg0, tmp4, tmp6));
  const fetchGuildCache = arg2(socket[17]).fetchGuildCache;
  const nowResult = performance.now();
  const fetchGuildCache2 = arg2(socket[17]).fetchGuildCache;
  const measureAsyncResult = fetchGuildCache.measureAsync(() => function loadInitialGuilds(arg0, arg1) {
    return callback(...arguments);
  }(arg0, arg2));
  if (null != name) {
    let timeAsyncResult = arg2(socket[18]).timeAsync("\u{1F4BE}", "cache: private_channels", () => arg2(socket[19]).getAsync(arg0, null));
    const obj2 = arg2(socket[18]);
  } else {
    timeAsyncResult = Promise.resolve([]);
  }
  if (null == name) {
    let resolved = Promise.resolve({});
  } else {
    resolved = arg2(socket[18]).timeAsync("\u{1F4BE}", "cache: user_settings", () => arg2(socket[20]).getAll(arg0));
    const obj3 = arg2(socket[18]);
  }
  if (null == name) {
    let resolved1 = Promise.resolve([]);
  } else {
    resolved1 = arg2(socket[18]).timeAsync("\u{1F4BE}", "cache: read_states", () => arg2(socket[21]).getAll(arg0));
    const obj4 = arg2(socket[18]);
  }
  if (null == name) {
    let resolved2 = Promise.resolve([]);
  } else {
    resolved2 = arg2(socket[18]).timeAsync("\u{1F4BE}", "cache: user_guild_settings", () => arg2(socket[22]).getAll(arg0));
    const obj5 = arg2(socket[18]);
  }
  arg2(socket[23])("AllCacheStores", () => arg0(socket[24]));
  arg2(socket[23])("MobileAppDatabaseManager", () => arg0(socket[25]));
  const items = [
    result,
    measureAsyncResult,
    fetchGuildCache2.measureAsync(() => function loadInitialGuildChannels(arg0, arg1) {
      return callback(...arguments);
    }(arg0, arg2)),
    timeAsyncResult,
    resolved,
    resolved1,
    resolved2
  ];
  const tmp25 = tmp4(yield Promise.all(items), 7);
  const tmp26 = tmp4(tmp25[0], 2);
  tmp27 = tmp26[1];
  arr2 = tmp25[1];
  tmp28 = tmp25[2];
  arr3 = tmp25[3];
  tmp29 = tmp25[4];
  arr4 = tmp25[5];
  arr5 = tmp25[6];
  closure_18.verbose("cache loaded in " + performance.now() - nowResult + "ms (channel_history " + tmp26[0] + "ms)");
  if (null == tmp27) {
    arg2(socket[26])("database:history_cache_null");
    closure_18.verbose("finished without dispatching CACHE_LOADED");
    const items1 = [false, null, 0];
    return items1;
  } else {
    const _Object2 = Object;
    const members = tmp27.members;
    channelId = Object.fromEntries(members.map((userId) => {
      const items = [userId.userId, userId];
      return items;
    }));
    guildId = tmp28.guildId;
    yield new Promise((arg0, arg1) => {
      const arg2 = arg1;
      const Emitter = arg2(socket[27]).Emitter;
      return Emitter.batched(() => {
        arg1(closure_2[18]).time("\u{1F4BE}", "Dispatch Mini Cache", () => {
          let obj = callback(closure_2[28]);
          obj = { type: "CACHE_LOADED", guilds: closure_6, privateChannels: closure_8 };
          let channels = channels.channels;
          if (null == channels) {
            channels = [];
          }
          obj.initialGuildChannels = channels;
          const items = [...closure_5.users];
          obj.users = items;
          if (null == closure_5.channelId) {
            obj = {};
          } else {
            obj = {};
            obj[closure_5.channelId] = closure_5.messages;
          }
          obj.messages = obj;
          if (null == closure_5.guildId) {
            let obj1 = {};
          } else {
            obj1 = {};
            obj1[closure_5.guildId] = closure_12;
          }
          obj.guildMembers = obj1;
          obj.userSettings = closure_9;
          obj.userGuildSettings = closure_11;
          obj.readStates = closure_10;
          return obj.dispatch(obj).then(closure_0, callback);
        });
        const obj = arg1(closure_2[18]);
        arg1(closure_2[18]).time("\u{1F4BE}", "socket.processFirstQueuedDispatch()", () => {
          const dispatcher = dispatcher.dispatcher;
          return dispatcher.processFirstQueuedDispatch(new Set([8194600381347578000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000]));
        });
      });
    });
    const _JSON = JSON;
    const json = JSON.stringify(arg2);
    name = undefined;
    if (null != name) {
      name = name.name;
    }
    let length = arr3.length;
    ({ guildId: guildId2, channelId } = tmp27);
    const channels = tmp28.channels;
    length = undefined;
    if (null != channels) {
      length = channels.length;
    }
    const _Object = Object;
    const _HermesInternal = HermesInternal;
    closure_18.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: " + arg1 + "\n          selected_guild: " + tmp4 + "\n          selected_channel: " + tmp6 + "\n          navigation_state: " + json + "\n          database: " + null != name + "\n            name: " + name + "\n        data:\n          database:\n            private_channels: " + length + "\n            channel_history:\n              guild: " + guildId2 + "\n              channel: " + channelId + "\n              messages: " + tmp27.messages.length + "\n                members: " + tmp27.members.length + "\n                users: " + tmp27.users.length + "\n            initial_guild:\n              id: " + guildId + "\n              channels: " + length + "\n            user_settings: " + Object.keys(tmp29).length + "\n            read_states: " + arr4.length + "\n            user_guild_settings: " + arr5.length + "\n      )");
    const obj = { guilds: arr2.length };
    arg2(socket[17]).setEarlyCacheInfo(obj);
    closure_18.verbose("finished dispatching CACHE_LOADED");
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
  const measureAsyncResult1 = fetchGuildCache2.measureAsync(() => function loadInitialGuildChannels(arg0, arg1) {
    return callback(...arguments);
  }(arg0, arg2));
}
async function _loadInitialGuilds(arg0, page, arg2) {
  let guildId;
  if (null == arg0) {
    return [];
  } else {
    page = page.page;
    if ("private-channels" !== page) {
      if ("guild-channels" !== page) {
        if ("other" === page) {
          if ("@me" === page.guildId) {
            let closure_25 = true;
          }
        }
      }
      if (closure_25) {
        const tmp9 = yield arg0(closure_2[29]).tryLoadAsync(() => guildId(closure_2[18]).timeAsync("\u{1F4BE}", "cache: guilds", () => callback(closure_2[30]).getAsync(closure_0)));
        let items = tmp9;
        if (null == tmp9) {
          items = [];
        }
        return items;
      } else {
        guildId = yield guildId(closure_2[31]).getCommittedVersions().initial_guild_id;
        if (null == guildId) {
          guildId = page.guildId;
        }
        if (null != guildId) {
          if ("@me" !== guildId) {
            const tmp6 = yield arg0(closure_2[29]).tryLoadAsync(() => guildId(closure_2[30]).getOneAsync(arg0, guildId));
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
    closure_25 = true;
  }
}
async function _loadInitialGuildChannels(arg0, page, arg2) {
  let guildId;
  if (null == arg0) {
    return Promise.resolve({ "Null": false, "Null": false });
  } else {
    guildId = yield guildId(closure_2[31]).getCommittedVersions().initial_guild_id;
    let tmp = null == guildId;
    if (tmp) {
      tmp = "guild-channels" === page.page;
    }
    if (tmp) {
      guildId = page.guildId;
    }
    if (null != arg0) {
      if (null != guildId) {
        const obj = { channels: yield arg0(closure_2[29]).tryLoadAsync(() => guildId(closure_2[19]).getAsync(arg0, guildId)), guildId };
        return obj;
      }
    }
    const _HermesInternal = HermesInternal;
    closure_18.verbose("skipped loading initial guild (guild: " + guildId + ", database: " + arg0 + ")");
    return Promise.resolve({ "Null": false, "Null": false });
  }
}
async function _loadLateLazyCache(arg0, arg1, arg2, arg3, arg4) {
  let closure_4;
  let closure_5;
  let closure_6;
  let closure_7;
  let socket2;
  closure_18.verbose("loading late lazy cache");
  const fetchLazyCache = arg1(arg2[17]).fetchLazyCache;
  const tmp2 = arg3(yield fetchLazyCache.measureAsync(() => {
    const items = [
      arg0(arg2[29]).tryLoadAsync(() => {
        if (null != closure_0) {
          let timeAsyncResult = callback(closure_2[18]).timeAsync("\u{1F4BE}", "cache: cache_version", () => callback(closure_2[32]).okAsync(closure_0));
          const obj = callback(closure_2[18]);
        } else {
          timeAsyncResult = Promise.resolve(true);
        }
        return timeAsyncResult;
      }),
    ,

    ];
    const obj = arg0(arg2[29]);
    items[1] = arg0(arg2[29]).tryLoadAsync(() => {
      if (null != closure_0) {
        if (!closure_25) {
          let timeAsyncResult = callback(closure_2[18]).timeAsync("\u{1F4BE}", "cache: lazy guilds", () => callback(closure_2[30]).getAsync(closure_0));
          const obj = callback(closure_2[18]);
        }
        return timeAsyncResult;
      }
      timeAsyncResult = Promise.resolve([]);
    });
    const obj2 = arg0(arg2[29]);
    items[2] = arg0(arg2[29]).tryLoadAsync(() => {
      if (null != closure_0) {
        let timeAsyncResult = callback(closure_2[18]).timeAsync("\u{1F4BE}", "cache: basic_channels", () => callback(closure_2[33]).getAsync(closure_0));
        const obj2 = callback(closure_2[18]);
      } else {
        const obj = { all: [], stale: [], channels: [] };
        timeAsyncResult = Promise.resolve(obj);
      }
      return timeAsyncResult;
    });
    return Promise.all(items);
  }), 3);
  closure_4 = tmp2[0];
  closure_5 = tmp2[1];
  closure_6 = tmp2[2];
  const fetchStaleChannels = arg1(arg2[17]).fetchStaleChannels;
  closure_7 = yield fetchStaleChannels.measureAsync(() => {
    if (null != arg0) {
      if (null != closure_6) {
        if (closure_6.stale.length > 0) {
          let tryLoadAsyncResult = arg0(arg2[29]).tryLoadAsync(() => function loadGuildChannels(closure_0, stale) {
            closure_18.verbose("loading stale guild channels (count: " + stale.length + ", ids: " + stale.join(", ") + ")");
            return Promise.all(stale.map((arg0) => {
              const async = callback(closure_2[19]).getAsync(arg0, arg0);
              return async.then(() => { ... });
            }));
          }(closure_0, stale.stale));
          const obj = arg0(arg2[29]);
        }
        return tryLoadAsyncResult;
      }
    }
    tryLoadAsyncResult = Promise.resolve([]);
  });
  const DelayLoadLateLazyCacheHoldoutExperiment = arg0(arg2[34]).DelayLoadLateLazyCacheHoldoutExperiment;
  const verbose = closure_18.verbose;
  if (DelayLoadLateLazyCacheHoldoutExperiment.getCachedEnabled()) {
    verbose("loadLateLazyCache: not yielding to react");
    const loadLazyCache = arg1(arg2[17]).loadLazyCache;
    loadLazyCache.recordStart();
    socket2 = socket.getSocket();
    callback(() => {
      if (false === closure_4) {
        arg1(arg2[26])("database:not_ok");
        arg1(arg2[28]).dispatch({ "Bool(true)": false, "Bool(true)": false });
        const obj14 = arg1(arg2[28]);
        let obj = { type: "CACHE_LOADED_LAZY_NO_CACHE" };
        arg1(arg2[28]).dispatch(obj);
      } else {
        if (null != closure_5) {
          if (null != closure_6) {
            if (null != closure_7) {
              if (null == closure_4) {
                arg1(arg2[26])("database:versionless");
                closure_18.log("kv_cache was not ok (null version with values)");
                arg1(arg2[28]).dispatch({ "Bool(true)": 0.000000000000000000000000000000000000005877472958352305, "Bool(true)": 0.00000000000000000000000000002524355432732662 });
                const obj8 = arg1(arg2[28]);
                obj = { type: "CACHE_LOADED_LAZY_NO_CACHE" };
                arg1(arg2[28]).dispatch(obj);
              }
              if (closure_23) {
                arg1(arg2[26])("already_connected");
                closure_18.log("Skipping lazy cache; already connected.");
                let obj5 = arg1(arg2[28]);
                const obj1 = { type: "CACHE_LOADED_LAZY_NO_CACHE" };
                obj5.dispatch(obj1);
              } else {
                obj = { hadCacheAtStartup: true };
                closure_8.addAnalytics(obj);
                const obj2 = { type: "CACHE_LOADED_LAZY", guilds: closure_5, guildChannels: closure_7, basicGuildChannels: closure_6.channels, initialGuildId: arg2 };
                const arg0 = obj2;
                const deserializeCache = arg1(arg2[17]).deserializeCache;
                deserializeCache.measure(() => {
                  if (null != obj2.channels) {
                    callback(closure_2[14])(tmp.channels);
                  }
                  if (null != obj2.privateChannels) {
                    callback(closure_2[14])(tmp.privateChannels);
                  }
                  if (null != obj2.guildChannels) {
                    const result = obj2(closure_2[14]).deserializeChannelEntries(tmp.guildChannels);
                    const obj = obj2(closure_2[14]);
                  }
                });
                const dispatchLazyCache = arg1(arg2[17]).dispatchLazyCache;
                dispatchLazyCache.measure(() => callback(closure_2[28]).dispatch(obj2));
                const _performance = performance;
                const _HermesInternal = HermesInternal;
                closure_18.verbose("late lazy cache loaded (ok: true, took: " + performance.now() - tmp + "ms)");
                let obj3 = { usedCacheAtStartup: true };
                closure_8.addAnalytics(obj3);
                const reduced = closure_7.reduce((arg0, arg1) => {
                  let arr;
                  [, arr] = arg1;
                  return arg0 + arr.length;
                }, 0);
                const all = closure_6.all;
                const reduced1 = all.reduce((arg0, arg1) => {
                  let arr;
                  [, arr] = arg1;
                  return arg0 + arr.length;
                }, 0);
                const channels = closure_6.channels;
                const reduced2 = channels.reduce((arg0, arg1) => {
                  let arr;
                  [, arr] = arg1;
                  return arg0 + arr.length;
                }, 0);
                const diff = reduced1 - reduced2;
                let str4 = "";
                if (0 !== closure_6.stale.length) {
                  const stale = closure_6.stale;
                  const _HermesInternal2 = HermesInternal;
                  str4 = " \u00B7 " + stale.join(", ");
                }
                let name;
                if (null != arg0) {
                  name = arg0.name;
                }
                const _HermesInternal3 = HermesInternal;
                closure_18.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: " + arg1 + "\n          initial_guild: " + arg2 + "\n          database: " + null != arg0 + "\n            ok: " + closure_4 + "\n            name: " + name + "\n        data:\n          database:\n            guilds: " + closure_5.length + "\n            basic_channels:\n              total: " + reduced1 + " (" + closure_6.channels.length + " guilds)\n              stale: " + diff + " (" + closure_6.stale.length + " guilds" + str4 + ")\n              unstale: " + reduced2 + "\n            full_channels (guilds_with_stale_basic_channels):\n              total: " + reduced + " (" + closure_7.length + " guilds)\n      )");
                obj3 = arg1(arg2[17]);
                const obj4 = { guilds: closure_5.length, privateChannels: arg3, basicChannels: reduced1, basicChannelsStale: diff, fullChannels: reduced, fullChannelGuilds: closure_7.length };
                obj3.setLazyCacheInfo(obj4);
              }
            }
          }
        }
        arg1(arg2[26])("database:load_failed");
        const _HermesInternal4 = HermesInternal;
        closure_18.log("couldn't load database item (\n          database: " + null != arg0 + "\n          basic_channels: " + null != closure_6 + "\n          guild_channels: " + null != closure_7 + "\n          guilds: " + null != closure_5 + "\n        )");
        arg1(arg2[28]).dispatch({ "Bool(true)": 0.0000000000000000000000000000000000000000000000013684558017555923, "Bool(true)": 0.000000000000000000000000000000000000005877472958352305 });
        const obj11 = arg1(arg2[28]);
        obj5 = { type: "CACHE_LOADED_LAZY_NO_CACHE" };
        arg1(arg2[28]).dispatch(obj5);
      }
    });
  } else {
    verbose("loadLateLazyCache: yielding to react");
    const obj = arg0(arg2[35]);
    return yield obj.waitSafelyForPostTTI(num3);
  }
}
function resumeFluxAndSocket(arg0) {
  const arg1 = arg0;
  const importDefault = socket.getSocket();
  let closure_2 = false;
  const Emitter = importDefault(closure_2[27]).Emitter;
  Emitter.batched(() => {
    arg0();
    const dispatcher = lib.dispatcher;
    if (dispatcher.hasStuffToDispatchNow()) {
      let closure_2 = true;
      const loadLazyCache = lib(closure_2[17]).loadLazyCache;
      loadLazyCache.recordEnd();
      closure_18.verbose("Processing First Queued Dispatch");
      const dispatcher3 = lib.dispatcher;
      const _Set = Set;
      const set = new Set([true, true]);
      const result = dispatcher3.processFirstQueuedDispatch(set);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_18.verbose("Unpausing Dispatch Queue");
        const dispatcher = dispatcher.dispatcher;
        dispatcher.unpauseDispatchQueue();
      }, 100);
    } else {
      closure_18.verbose("Unpausing Dispatch Queue");
      const dispatcher2 = lib.dispatcher;
      dispatcher2.unpauseDispatchQueue();
    }
  });
  if (!closure_2) {
    const loadLazyCache = importDefault(closure_2[17]).loadLazyCache;
    loadLazyCache.recordEnd();
  }
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
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
({ MAX_MESSAGES_PER_CHANNEL: closure_14, CACHE_STORE_KEY: closure_15, CACHE_STORE_LAZY_KEY: closure_16, CACHE_STORE_CHANNELS_LAZY_KEY: closure_17 } = arg1(dependencyMap[11]));
let importDefaultResult = importDefault(dependencyMap[12]);
importDefaultResult = new importDefaultResult("CacheStore");
let closure_19 = false;
let closure_20 = "initializing";
let closure_21 = 0;
let closure_22 = false;
let closure_23 = false;
let closure_24 = false;
let closure_25 = false;
let tmp5 = (Store) => {
  class CacheStoreClass {
    constructor() {
      self = this;
      tmp = closure_4(this, CacheStoreClass);
      obj = closure_7(CacheStoreClass);
      tmp2 = closure_6;
      if (closure_26()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = CacheStoreClass;
  callback2(CacheStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_11, closure_10, closure_12, closure_13);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "hasCache",
    value() {
      return closure_22;
    }
  };
  items[1] = obj;
  obj = {
    key: "getLazyCacheStatus",
    value() {
      return closure_20;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "lastWriteTime",
    get() {
      return closure_21;
    }
  };
  items[4] = {
    key: "canWriteCaches",
    value(arg0) {
      if (obj.isAuthenticated()) {
        if (closure_19) {
          closure_18.log("Not writing cache because caches cleared");
          let flag2 = false;
        } else {
          let tmp5 = !arg0;
          if (tmp5) {
            tmp5 = !closure_24;
          }
          flag2 = !tmp5;
          if (tmp5) {
            closure_18.log("Not writing cache because never connected");
            flag2 = false;
          }
        }
      } else {
        closure_18.log("Not writing cache because not authenticated");
        return false;
      }
    }
  };
  const obj3 = { key: "loadCacheAsync" };
  let closure_0 = callback3(async (arg0, arg1) => {
    let id;
    let result;
    const callOnceResult = arg0(result[38]).callOnce(arg1);
    const obj = arg0(result[38]);
    id(result[17]).setInitialPage(arg0.page);
    const guildId = arg0.guildId;
    const obj2 = id(result[17]);
    let tmp3 = null;
    if (null != guildId) {
      tmp3 = null;
      if ("@me" !== guildId) {
        tmp3 = guildId;
      }
    }
    id(result[17]).setInitialGuildId(tmp3);
    if ("initializing" !== closure_20) {
      id(result[26])("cache:lazy_cache_not_initializing");
      callOnceResult();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const socket = socket.getSocket();
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
      id = id.getId();
      result = id(result[39]).carefullyOpenDatabase(id);
      const loadMiniCache = id(result[17]).loadMiniCache;
      const tmp6 = callback(yield loadMiniCache.measureAsync(() => function loadEarlyCache(result, id, arg2) {
        return callback(...arguments);
      }(result, id, arg0)), 3);
      callOnceResult();
      if (tmp6[0]) {
        yield function loadLateLazyCache(arg0, arg1, arg2, arg3) {
          return callback(...arguments);
        }(tmp28, tmp24, tmp7, tmp8);
      } else {
        return yield function dontLoadLateLazyCache() {
          callback2(() => callback(closure_2[28]).dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" }));
          return Promise.resolve();
        }();
      }
      const obj4 = id(result[39]);
      const tmp24 = id;
      const tmp28 = result;
    }
  });
  obj3.value = function loadCacheAsync(arg0, arg1) {
    return callback(...arguments);
  };
  items[5] = obj3;
  return callback(CacheStoreClass, items);
}(importDefault(dependencyMap[27]).Store);
tmp5.displayName = "CacheStore";
tmp5 = new tmp5(importDefault(dependencyMap[28]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_23 = true;
    let closure_24 = true;
    return false;
  },
  LOGOUT: handleClearCaches,
  CONNECTION_CLOSED: function handleConnectionClose() {
    let closure_23 = false;
    let closure_24 = true;
    return false;
  },
  CACHE_LOADED: function handleCacheLoaded() {
    let closure_22 = true;
  },
  CACHE_LOADED_LAZY: function handleCacheLoadedLazy() {
    let closure_22 = true;
    let closure_20 = "cache-loaded";
  },
  CACHE_LOADED_LAZY_NO_CACHE: function handleCacheLoadedLazyNoCache() {
    let closure_20 = "no-cache";
  },
  CLEAR_CACHES: handleClearCaches,
  WRITE_CACHES: function saveCaches() {
    importDefaultResult.verbose("Writing cache now");
    let closure_21 = Date.now();
    let closure_22 = true;
    const Storage = arg1(dependencyMap[13]).Storage;
    Storage.remove(closure_15);
    const Storage2 = arg1(dependencyMap[13]).Storage;
    Storage2.remove(closure_17);
    const Storage3 = arg1(dependencyMap[13]).Storage;
    Storage3.remove(closure_16);
  }
});
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_23 = true;
    let closure_24 = true;
    return false;
  },
  LOGOUT: handleClearCaches,
  CONNECTION_CLOSED: function handleConnectionClose() {
    let closure_23 = false;
    let closure_24 = true;
    return false;
  },
  CACHE_LOADED: function handleCacheLoaded() {
    let closure_22 = true;
  },
  CACHE_LOADED_LAZY: function handleCacheLoadedLazy() {
    let closure_22 = true;
    let closure_20 = "cache-loaded";
  },
  CACHE_LOADED_LAZY_NO_CACHE: function handleCacheLoadedLazyNoCache() {
    let closure_20 = "no-cache";
  },
  CLEAR_CACHES: handleClearCaches,
  WRITE_CACHES: function saveCaches() {
    importDefaultResult.verbose("Writing cache now");
    let closure_21 = Date.now();
    let closure_22 = true;
    const Storage = arg1(dependencyMap[13]).Storage;
    Storage.remove(closure_15);
    const Storage2 = arg1(dependencyMap[13]).Storage;
    Storage2.remove(closure_17);
    const Storage3 = arg1(dependencyMap[13]).Storage;
    Storage3.remove(closure_16);
  }
};
const tmp2 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[40]).fileFinishedImporting("modules/cache/CacheStore.tsx");

export default tmp5;
export const ENABLE_CACHE_STORE = true;
