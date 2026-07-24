// Module ID: 16052
// Function ID: 124144
// Name: _isNativeReflectConstruct
// Dependencies: [5, 6, 7, 15, 17, 18, 1194, 1348, 4469, 1838, 4808, 653, 1355, 3, 664, 5078, 675, 686, 6894, 12652, 1360, 491, 2]

// Module 16052 (_isNativeReflectConstruct)
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import AutomaticLifecycleManager from "AutomaticLifecycleManager";
import dispatcher from "dispatcher";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_createForOfIteratorHelperLoose";
import closure_13 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { ChannelFlags } from "set";
import importDefaultResult from "_possibleConstructorReturn";
import tmp4 from "AutomaticLifecycleManager";
import set from "_defineProperties";

const require = arg1;
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
  if (null != dependencyMap[guild_id]) {
    requestId = tmp.requestId;
  }
  let str = "unknown";
  if (null != requestId) {
    str = requestId;
  }
  return str;
}
function cleanupResyncState(guild_id) {
  if (null != dependencyMap3[guild_id]) {
    const _clearTimeout = clearTimeout;
    clearTimeout(dependencyMap3[guild_id]);
    delete tmp3[tmp2];
  }
  if (null != dependencyMap2[guild_id]) {
    const _clearTimeout2 = clearTimeout;
    clearTimeout(dependencyMap2[guild_id]);
    delete tmp[tmp2];
  }
}
function cleanupIntegrityCheckState(guild_id) {
  if (null != dependencyMap5[guild_id]) {
    const _clearTimeout = clearTimeout;
    clearTimeout(dependencyMap5[guild_id]);
    delete tmp3[tmp2];
  }
  if (null != dependencyMap4[guild_id]) {
    const _clearTimeout2 = clearTimeout;
    clearTimeout(dependencyMap4[guild_id]);
    delete tmp[tmp2];
  }
}
function handleGuildCreate(guild) {
  guild = guild.guild;
  let closure_1;
  if (true !== guild.unavailable) {
    if (null != dependencyMap6[guild.id]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap6[guild.id]);
    }
    closure_1 = c29;
    const _setTimeout = setTimeout;
    dependencyMap6[guild.id] = setTimeout(() => {
      delete tmp2[tmp];
      if (closure_1 === outer1_29) {
        outer1_23.delete(guild.id);
        outer1_39(guild.id);
        outer1_42(guild.id);
      }
    }, 0);
  }
}
function handlePostConnectionOpen() {
  set.clear();
  scheduleGuildResyncs();
  guildIds = guildIds.getGuildIds();
  const item = guildIds.forEach((arg0) => {
    outer1_42(arg0);
  });
}
function handleChannelSync(integrity_check, arg1) {
  if (integrity_check.integrity_check) {
    (function doIntegrityCheck(integrity_check) {
      let channels;
      let guild_id;
      ({ guild_id, channels } = integrity_check);
      const mutableGuildChannelsForGuild = outer1_10.getMutableGuildChannelsForGuild(guild_id);
      const set = new Set();
      const items = [];
      const item = channels.forEach((flags) => {
        let parent_id;
        if (null != table[flags.id]) {
          let obj = outer2_0(outer2_2[20]);
          flags = flags.flags;
          let num2 = 0;
          if (null != flags) {
            num2 = flags;
          }
          const hasFlagResult = obj.hasFlag(num2, outer2_15.OBFUSCATED);
          const hasFlagResult1 = outer2_0(outer2_2[20]).hasFlag(tmp.flags, outer2_15.OBFUSCATED);
          if (hasFlagResult !== hasFlagResult1) {
            const _HermesInternal2 = HermesInternal;
            outer2_16.warn("Integrity check failure: " + flags.id + " serverObfuscated: " + hasFlagResult + " != clientObfuscated: " + hasFlagResult1);
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
          const obj2 = outer2_0(outer2_2[20]);
        } else {
          const _HermesInternal = HermesInternal;
          outer2_16.warn("Integrity check failure: " + flags.id + " was missing.");
        }
      });
      const tmp = outer1_32(guild_id);
      const joined = Array.from(set).join(", ");
      let json = null;
      if (items.length > 0) {
        const _JSON = JSON;
        json = JSON.stringify(items);
      }
      if (set.size > 0) {
        let verbose = outer1_16.warn;
      } else {
        verbose = outer1_16.verbose;
      }
      verbose("Integrity check for guild " + guild_id + " completed. Discrepancies found: " + joined);
      const arr = Array.from(set);
      let obj = { guild_id, request_id: tmp, num_channels_received: channels.length, num_discrepancies_found: set.size, discrepancy_channel_ids: joined, discrepancies_details: json };
      outer1_1(outer1_2[16]).track(outer1_14.GUILD_CHANNEL_INTEGRITY_CHECK_COMPLETED, obj);
      outer1_34(guild_id);
      outer1_23.add(guild_id);
    })(integrity_check);
  } else {
    let obj = importDefault(675);
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
  const items = [...Object.keys(closure_24), ...Object.keys(closure_25), ...Object.keys(closure_26), ...Object.keys(closure_27)];
  const set = new Set(items);
  const item = set.forEach((guild_id) => {
    let requestedUserId;
    let requestedUserId2;
    if (null != outer1_22[guild_id]) {
      if (null != outer1_24[guild_id]) {
        let obj = outer1_1(outer1_2[16]);
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
        obj.track(outer1_14.GUILD_CHANNEL_RESYNC_CANCELED, obj);
      }
      if (null != outer1_26[guild_id]) {
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
        outer1_1(outer1_2[16]).track(outer1_14.GUILD_CHANNEL_INTEGRITY_CHECK_CANCELED, obj);
        const obj3 = outer1_1(outer1_2[16]);
      }
    }
  });
  const item1 = set.forEach((arg0) => {
    outer1_33(arg0);
    outer1_34(arg0);
  });
  for (const key10049 in closure_28) {
    let tmp7 = key10049;
    let _clearTimeout = clearTimeout;
    let tmp8 = dependencyMap6;
    let clearTimeoutResult = clearTimeout(dependencyMap6[key10049]);
    let tmp10 = dependencyMap6;
    delete tmp2[tmp3];
    continue;
  }
  for (const key10052 in closure_22) {
    let tmp11 = key10052;
    let tmp12 = closure_22;
    delete tmp[tmp2];
    continue;
  }
  set.clear();
}
function scheduleGuildResyncs() {
  return _scheduleGuildResyncs(...arguments);
}
function _scheduleGuildResyncs() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _getResyncGuilds() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function scheduleIntegrityCheck(guild_id) {
  const _require = guild_id;
  let obj = _require(12652);
  if (obj.isChannelMetadataIntegrityCheckEnabled("scheduleIntegrityCheck")) {
    cleanupIntegrityCheckState(guild_id);
    if (null != dependencyMap[guild_id]) {
      let requestId = tmp7.requestId;
    } else {
      const v4Result = _require(491).v4();
      setLatestRequest(guild_id, v4Result, "integrity_check");
      requestId = v4Result;
      const obj2 = _require(491);
    }
    if (!tmp3) {
      obj = { guild_id, request_id: requestId };
      importDefault(675).track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_REQUESTED, obj);
      const obj3 = importDefault(675);
    }
    const _Math = Math;
    const _Math2 = Math;
    const _setTimeout = setTimeout;
    dependencyMap4[guild_id] = setTimeout(() => {
      delete tmp[tmp2];
      (function triggerIntegrityCheck(closure_0) {
        let obj = callback(outer2_2[19]);
        if (obj.isChannelMetadataIntegrityCheckEnabled("triggerIntegrityCheck")) {
          if (!outer2_23.has(closure_0)) {
            const tmp3 = outer2_32(closure_0);
            if (null == outer2_12.getGuild(closure_0)) {
              obj = { guild_id: closure_0, request_id: tmp3, failure_reason: "guild_not_found" };
              outer2_1(outer2_2[16]).track(outer2_14.GUILD_CHANNEL_INTEGRITY_CHECK_FAILED, obj);
              outer2_34(closure_0);
            } else {
              obj = { guild_id: closure_0, request_id: tmp3 };
              outer2_1(outer2_2[16]).track(outer2_14.GUILD_CHANNEL_INTEGRITY_CHECK_EXECUTED, obj);
              const socket = outer2_13.getSocket();
              const result = socket.triggerGuildChannelResync(closure_0, null);
              (function scheduleIntegrityCheckTimeout(closure_0, arg1) {
                let closure_1 = arg1;
                if (null != outer3_27[closure_0]) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(outer3_27[closure_0]);
                }
                outer3_27[closure_0] = setTimeout(() => {
                  outer4_16.warn("Integrity check timeout for guild " + closure_0 + " with request " + closure_1);
                  let obj = outer4_1(outer4_2[16]);
                  obj = { guild_id: closure_0, request_id: closure_1, failure_reason: "timeout" };
                  obj.track(outer4_14.GUILD_CHANNEL_INTEGRITY_CHECK_FAILED, obj);
                  outer4_34(closure_0);
                }, outer3_21);
              })(closure_0, tmp3);
            }
          }
        }
      })(closure_0);
    }, closure_18 + Math.ceil(Math.random() * closure_19));
    tmp3 = null != dependencyMap4[guild_id];
  }
}
importDefaultResult = new importDefaultResult("ChannelResyncManager");
let closure_17 = 2 * require("set").Millis.SECOND;
let closure_18 = 30 * require("set").Millis.SECOND;
let closure_19 = 300 * require("set").Millis.SECOND;
let closure_20 = 30 * require("set").Millis.SECOND;
let closure_21 = 60 * require("set").Millis.SECOND;
let closure_22 = {};
let set = new Set();
let closure_24 = {};
let closure_25 = {};
let closure_26 = {};
let closure_27 = {};
let closure_28 = {};
let c29 = 0;
tmp4 = new tmp4();
let result = set.fileFinishedImporting("modules/gateway/ChannelResyncManager.tsx");

export default tmp4;
