// Module ID: 15888
// Function ID: 121649
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15888 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function setLatestRequest(guildId, v4Result, integrity_check) {
  closure_22[guildId] = { guildId, requestId: v4Result, source: integrity_check, requestedUserId: id.getId() };
}
function getLatestRequestId(guild_id) {
  let requestId;
  if (null != closure_22[guild_id]) {
    requestId = tmp.requestId;
  }
  let str = "unknown";
  if (null != requestId) {
    str = requestId;
  }
  return str;
}
function cleanupResyncState(guild_id) {
  if (null != closure_25[guild_id]) {
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_25[guild_id]);
    delete r2[r1];
  }
  if (null != closure_24[guild_id]) {
    const _clearTimeout2 = clearTimeout;
    clearTimeout(closure_24[guild_id]);
    delete r0[r1];
  }
}
function cleanupIntegrityCheckState(guild_id) {
  if (null != closure_27[guild_id]) {
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_27[guild_id]);
    delete r2[r1];
  }
  if (null != closure_26[guild_id]) {
    const _clearTimeout2 = clearTimeout;
    clearTimeout(closure_26[guild_id]);
    delete r0[r1];
  }
}
function handleGuildCreate(guild) {
  guild = guild.guild;
  const arg1 = guild;
  let closure_1;
  if (true !== guild.unavailable) {
    if (null != closure_28[guild.id]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_28[guild.id]);
    }
    closure_1 = closure_29;
    const _setTimeout = setTimeout;
    closure_28[guild.id] = setTimeout(() => {
      delete r3[r2];
      if (closure_1 === closure_29) {
        set.delete(guild.id);
        callback(guild.id);
        callback2(guild.id);
      }
    }, 0);
  }
}
function handlePostConnectionOpen() {
  set.clear();
  scheduleGuildResyncs();
  const guildIds = guildIds.getGuildIds();
  const item = guildIds.forEach((arg0) => {
    callback(arg0);
  });
}
function handleChannelSync(integrity_check, arg1) {
  if (integrity_check.integrity_check) {
    function doIntegrityCheck(integrity_check) {
      let channels;
      let guild_id;
      ({ guild_id, channels } = integrity_check);
      const mutableGuildChannelsForGuild2 = mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(guild_id);
      const set = new Set();
      const items = [];
      const item = channels.forEach((flags) => {
        let parent_id;
        if (null != callback[flags.id]) {
          let obj = callback(items[20]);
          flags = flags.flags;
          let num2 = 0;
          if (null != flags) {
            num2 = flags;
          }
          const hasFlagResult = obj.hasFlag(num2, constants.OBFUSCATED);
          const hasFlagResult1 = callback(items[20]).hasFlag(tmp.flags, constants.OBFUSCATED);
          if (hasFlagResult !== hasFlagResult1) {
            const _HermesInternal2 = HermesInternal;
            closure_16.warn("Integrity check failure: " + flags.id + " serverObfuscated: " + hasFlagResult + " != clientObfuscated: " + hasFlagResult1);
            set.add(flags.id);
            obj = { channel_id: flags.id, server_obfuscated: hasFlagResult, client_obfuscated: hasFlagResult1 };
            const flags3 = flags.flags;
            let num3 = 0;
            if (null != flags3) {
              num3 = flags3;
            }
            obj.server_flags = num3;
            const flags2 = tmp.flags;
            let num4 = 0;
            if (null != flags2) {
              num4 = flags2;
            }
            obj.client_flags = num4;
            ({ type: obj3.channel_type, parent_id } = flags);
            let tmp13 = null;
            if (null != parent_id) {
              tmp13 = parent_id;
            }
            obj.parent_id = tmp13;
            items.push(obj);
          }
          const obj2 = callback(items[20]);
        } else {
          const _HermesInternal = HermesInternal;
          closure_16.warn("Integrity check failure: " + flags.id + " was missing.");
        }
      });
      const tmp = callback(guild_id);
      const joined = Array.from(set).join(", ");
      let json = null;
      if (items.length > 0) {
        const _JSON = JSON;
        json = JSON.stringify(items);
      }
      if (set.size > 0) {
        let verbose = closure_16.warn;
      } else {
        verbose = closure_16.verbose;
      }
      verbose("Integrity check for guild " + guild_id + " completed. Discrepancies found: " + joined);
      const arr = Array.from(set);
      const obj = { guild_id, request_id: tmp, num_channels_received: channels.length, num_discrepancies_found: set.size, discrepancy_channel_ids: joined, discrepancies_details: json };
      set(items[16]).track(constants.GUILD_CHANNEL_INTEGRITY_CHECK_COMPLETED, obj);
      callback2(guild_id);
      set.add(guild_id);
    }(integrity_check);
  } else {
    let obj = importDefault(dependencyMap[16]);
    obj = { guild_id: integrity_check.guild_id, request_id: getLatestRequestId(integrity_check.guild_id), num_new_channels: integrity_check.channels.length };
    obj.track(AnalyticEvents.GUILD_CHANNEL_RESYNC_COMPLETED, obj);
    cleanupResyncState(integrity_check.guild_id);
    scheduleIntegrityCheck(integrity_check.guild_id);
    const tmp2 = getLatestRequestId(integrity_check.guild_id);
  }
}
function handleLogout(isSwitchingAccount) {
  closure_29 = closure_29 + 1;
  let str = "logout";
  if (true === isSwitchingAccount.isSwitchingAccount) {
    str = "account_switch";
  }
  const arg1 = str;
  const items = [...Object.keys(closure_24), ...Object.keys(closure_25), ...Object.keys(closure_26), ...Object.keys(closure_27)];
  const set = new Set(items);
  const item = set.forEach((guild_id) => {
    let requestedUserId;
    let requestedUserId2;
    if (null != closure_22[guild_id]) {
      if (null != closure_24[guild_id]) {
        let obj = callback(closure_2[16]);
        obj = { guild_id };
        ({ requestId: obj2.request_id, requestedUserId } = tmp);
        let tmp5 = null;
        if (null != requestedUserId) {
          tmp5 = requestedUserId;
        }
        obj.requested_user_id = tmp5;
        obj.cancellation_reason = str;
        obj.had_scheduled_timer = tmp19;
        obj.had_pending_timeout = tmp21;
        obj.track(constants.GUILD_CHANNEL_RESYNC_CANCELED, obj);
      }
      if (null != closure_26[guild_id]) {
        obj = { guild_id };
        ({ requestId: obj4.request_id, requestedUserId: requestedUserId2 } = tmp);
        let tmp15 = null;
        if (null != requestedUserId2) {
          tmp15 = requestedUserId2;
        }
        obj.requested_user_id = tmp15;
        obj.cancellation_reason = str;
        obj.had_scheduled_timer = tmp9;
        obj.had_pending_timeout = tmp11;
        callback(closure_2[16]).track(constants.GUILD_CHANNEL_INTEGRITY_CHECK_CANCELED, obj);
        const obj3 = callback(closure_2[16]);
      }
    }
  });
  const item1 = set.forEach((arg0) => {
    callback2(arg0);
    callback3(arg0);
  });
  for (const key10049 in closure_28) {
    let tmp4 = key10049;
    let _clearTimeout = clearTimeout;
    let tmp5 = closure_28;
    let clearTimeoutResult = clearTimeout(closure_28[key10049]);
    let tmp7 = closure_28;
    delete r8[r9];
  }
  for (const key10052 in closure_22) {
    let tmp8 = key10052;
    let tmp9 = closure_22;
    delete r7[r8];
  }
  set.clear();
}
function scheduleGuildResyncs() {
  return _scheduleGuildResyncs(...arguments);
}
function _scheduleGuildResyncs() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _scheduleGuildResyncs = obj;
  return obj(...arguments);
}
function _getResyncGuilds() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getResyncGuilds = obj;
  return obj(...arguments);
}
function scheduleIntegrityCheck(guild_id) {
  const arg1 = guild_id;
  let obj = arg1(dependencyMap[19]);
  if (obj.isChannelMetadataIntegrityCheckEnabled("scheduleIntegrityCheck")) {
    cleanupIntegrityCheckState(guild_id);
    if (null != closure_22[guild_id]) {
      let requestId = tmp7.requestId;
    } else {
      const v4Result = arg1(dependencyMap[21]).v4();
      setLatestRequest(guild_id, v4Result, "integrity_check");
      requestId = v4Result;
      const obj2 = arg1(dependencyMap[21]);
    }
    if (!tmp3) {
      obj = { guild_id, request_id: requestId };
      importDefault(dependencyMap[16]).track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_REQUESTED, obj);
      const obj3 = importDefault(dependencyMap[16]);
    }
    const _Math = Math;
    const _Math2 = Math;
    const _setTimeout = setTimeout;
    closure_26[guild_id] = setTimeout(() => {
      delete r0[r2];
      function triggerIntegrityCheck(guild_id) {
        let obj = callback(closure_2[19]);
        if (obj.isChannelMetadataIntegrityCheckEnabled("triggerIntegrityCheck")) {
          if (!set.has(guild_id)) {
            const tmp3 = callback3(guild_id);
            if (null == guild.getGuild(guild_id)) {
              obj = { guild_id, request_id: tmp3, failure_reason: "guild_not_found" };
              callback2(closure_2[16]).track(constants.GUILD_CHANNEL_INTEGRITY_CHECK_FAILED, obj);
              callback4(guild_id);
            } else {
              obj = { guild_id, request_id: tmp3 };
              callback2(closure_2[16]).track(constants.GUILD_CHANNEL_INTEGRITY_CHECK_EXECUTED, obj);
              const socket = socket.getSocket();
              const result = socket.triggerGuildChannelResync(guild_id, null);
              function scheduleIntegrityCheckTimeout(guild_id, arg1) {
                if (null != closure_27[guild_id]) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(closure_27[guild_id]);
                }
                closure_27[guild_id] = setTimeout(() => {
                  closure_16.warn("Integrity check timeout for guild " + arg0 + " with request " + arg1);
                  let obj = arg1(closure_2[16]);
                  obj = { guild_id: arg0, request_id: arg1, failure_reason: "timeout" };
                  obj.track(constants.GUILD_CHANNEL_INTEGRITY_CHECK_FAILED, obj);
                  callback(arg0);
                }, closure_21);
              }(guild_id, tmp3);
            }
          }
        }
      }(arg0);
    }, closure_18 + Math.ceil(Math.random() * closure_19));
    const tmp3 = null != closure_26[guild_id];
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
const AnalyticEvents = arg1(dependencyMap[11]).AnalyticEvents;
const ChannelFlags = arg1(dependencyMap[12]).ChannelFlags;
let importDefaultResult = importDefault(dependencyMap[13]);
importDefaultResult = new importDefaultResult("ChannelResyncManager");
let closure_17 = 2 * importDefault(dependencyMap[14]).Millis.SECOND;
let closure_18 = 30 * importDefault(dependencyMap[14]).Millis.SECOND;
let closure_19 = 300 * importDefault(dependencyMap[14]).Millis.SECOND;
let closure_20 = 30 * importDefault(dependencyMap[14]).Millis.SECOND;
let closure_21 = 60 * importDefault(dependencyMap[14]).Millis.SECOND;
let tmp4 = (arg0) => {
  class ChannelResyncManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, ChannelResyncManager);
      items1 = [...items];
      obj = closure_7(ChannelResyncManager);
      tmp2 = closure_6;
      if (closure_30()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { GUILD_CREATE: closure_35, POST_CONNECTION_OPEN: closure_36, CHANNEL_SYNC: closure_37, LOGOUT: closure_38 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = ChannelResyncManager;
  callback3(ChannelResyncManager, arg0);
  const items = [
    {
      key: "__unsafeGetTestState",
      value() {
        return { scheduledResyncTimerGuildIds: Object.keys(closure_24), pendingResyncTimeoutGuildIds: Object.keys(closure_25), scheduledIntegrityCheckTimerGuildIds: Object.keys(closure_26), pendingIntegrityCheckTimeoutGuildIds: Object.keys(closure_27), pendingGuildCreateDeferredGuildIds: Object.keys(closure_28), guildIdsWithLatestRequest: Object.keys(closure_22), guildsCompletedIntegrityCheck: Array.from(closure_23), sessionEpoch: closure_29 };
      }
    }
  ];
  return callback2(ChannelResyncManager, items);
}(importDefault(dependencyMap[15]));
let closure_22 = {};
const set = new Set();
let closure_24 = {};
let closure_25 = {};
let closure_26 = {};
let closure_27 = {};
let closure_28 = {};
let closure_29 = 0;
tmp4 = new tmp4();
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/gateway/ChannelResyncManager.tsx");

export default tmp4;
