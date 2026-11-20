// Module ID: 19332
// Function ID: 19333
// Name: ChannelResyncManager
// Dependencies: [5, 502, 4643, 6432, 4665, 6275, 1071, 4650, 3, 1088, 7364, 1255, 572, 8234, 1404, 2]

// Module 19332 (ChannelResyncManager)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1071 */;
import DurationsDefault from "Durations" /* 1088 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import ChannelConstants from "ChannelConstants" /* 4650 */;
import GuildsRequiringChannelSyncDefault from "GuildsRequiringChannelSync" /* 8234 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 6432 */;
import GuildStore from "GuildStore" /* 4665 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6275 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7364 */;
import size from "module_2" /* 2 */;

let c1, c2, c3, c4, closure_18, mutableGuildChannelsForGuild, set, socket;

function handleGuildCreate(guild) {
  guild = guild.guild;
  let closure_1;
  if (true !== guild.unavailable) {
    let tmp = closure_17;
    if (null != closure_17[guild.id]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp[guild.id]);
    }
    closure_1 = c18;
    const _setTimeout = setTimeout;
    tmp[guild.id] = setTimeout(() => {
      delete closure_17[guild.id];
      const tmp = guild;
      if (closure_1 === c18) {
        scheduleGuildResyncs(tmp.id);
      }
    }, 0);
  }
}
function handlePostConnectionOpen() {
  scheduleGuildResyncs();
}
function handleChannelSync(integrity_check) {
  if (!integrity_check.integrity_check) {
    let str;
    if (closure_14[integrity_check.guild_id] != null) {
      str = tmp2.requestId;
    }
    if (str == null) {
      str = "unknown";
    }
    const obj2 = { guild_id: integrity_check.guild_id, request_id: str, num_new_channels: integrity_check.channels.length };
    obj = AnalyticsUtilsDefault;
    obj.track(AnalyticEvents.GUILD_CHANNEL_RESYNC_COMPLETED, obj2);
    const guild_id = integrity_check.guild_id;
    if (null != closure_16[guild_id]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_16[guild_id]);
      delete closure_16[guild_id];
    }
    if (null != closure_15[guild_id]) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(closure_15[guild_id]);
      delete closure_15[guild_id];
    }
  }
}
function handleLogout(isSwitchingAccount) {
  closure_18 = closure_18 + 1;
  let str = "logout";
  if (true === isSwitchingAccount.isSwitchingAccount) {
    str = "account_switch";
  }
  const items = [...Object.keys(closure_15), ...Object.keys(closure_16)];
  set = new Set(items);
  const item = set.forEach((guild_id) => {
    let requestedUserId;
    if (null != closure_14[guild_id]) {
      const tmp2 = null != closure_15[guild_id] || null != closure_16[guild_id];
      if (tmp2) {
        obj = { guild_id, request_id: null, requested_user_id: requestedUserId, cancellation_reason: str, had_scheduled_timer: null != closure_15[guild_id], had_pending_timeout: null != closure_16[guild_id] };
        ({ requestId: obj.request_id, requestedUserId } = closure_14[guild_id]);
        const track = AnalyticsUtilsDefault.track;
        const GUILD_CHANNEL_RESYNC_CANCELED = AnalyticEvents.GUILD_CHANNEL_RESYNC_CANCELED;
        AnalyticsUtilsDefault;
        if (requestedUserId == null) {
          requestedUserId = null;
        }
        track(GUILD_CHANNEL_RESYNC_CANCELED, obj);
      }
    }
  });
  const item1 = set.forEach((item) => {
    if (null != closure_1_16[item]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_1_16[item]);
      delete closure_1_16[item];
    }
    if (null != closure_1_15[item]) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(closure_1_15[item]);
      delete closure_1_15[item];
    }
  });
  for (const key10036 in closure_17) {
    let _clearTimeout = clearTimeout;
    let tmp3 = key10036;
    let tmp4 = closure_17;
    let clearTimeoutResult = clearTimeout(closure_17[key10036]);
    delete tmp4[tmp3];
    continue;
  }
  for (const key10039 in closure_14) {
    delete closure_14[key10039];
    continue;
  }
}
function scheduleGuildResyncs() {
  return obj(...arguments);
}
let obj = function _scheduleGuildResyncs() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_2;
    let tmp4;
    function getResyncGuilds() {
      return closure_1_25(...arguments);
    }
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let tmp;
        let guildIds;
        let closure_1;
        let num = 2;
        c4 = 2;
        const tmp5 = c3;
        let num2 = 0;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let tmp6 = closure_0;
            tmp = undefined;
            guildIds = undefined;
            closure_1 = sessionEpoch;
            c3 = 1;
            c4 = 1;
            let obj4 = { value: getResyncGuilds(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          tmp = value;
          if (closure_1 === closure_130_18) {
            const tmp17 = globalThis;
            const _JSON = JSON;
            const _HermesInternal = HermesInternal;
            closure_130_11.verbose("Resync guilds: " + JSON.stringify(tmp));
            const eligible = tmp.eligible;
            const item = eligible.forEach((id) => {
              let constants2;
              let guild;
              const tmp2 = null != closure_1_0 && id.id !== tmp;
              if (!tmp2) {
                id = id.id;
                const tmp3 = closure_2_14;
                obj = { guildId: id, requestId: id.requestId, requestedUserId: id.getId() };
                const tmp4 = id;
                closure_2_14[id] = obj;
                if (null != closure_2_15[id]) {
                  const tmp6 = globalThis;
                  let _clearTimeout = clearTimeout;
                  const clearTimeoutResult = clearTimeout(tmp5[id]);
                }
                const _Math = Math;
                const _Math2 = Math;
                let _setTimeout = setTimeout;
                closure_2_15[id] = setTimeout(() => {
                  let logger;
                  delete closure_2_15[id];
                  let str;
                  if (closure_2_14[id] != null) {
                    str = tmp4.requestId;
                  }
                  if (str == null) {
                    str = "unknown";
                  }
                  if (null == guild.getGuild(id)) {
                    let obj2 = { guild_id: id, request_id: str, failure_reason: "guild_not_found" };
                    const obj4 = closure_2_1(closure_2_2[11]);
                    obj4.track(constants.GUILD_CHANNEL_RESYNC_FAILED, obj2);
                    if (null != closure_2_16[id]) {
                      let _clearTimeout2 = clearTimeout;
                      clearTimeout(tmp23[tmp3]);
                      delete closure_2_16[id];
                    }
                    if (null != closure_2_15[id]) {
                      const _clearTimeout3 = clearTimeout;
                      clearTimeout(tmp2[tmp3]);
                      delete closure_2_15[id];
                    }
                  } else {
                    const items = [];
                    mutableGuildChannelsForGuild = mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(tmp3);
                    let num2 = 0;
                    let num = 0;
                    const keys = Object.keys();
                    if (keys !== undefined) {
                      num = num2;
                      while (keys[tmp] !== undefined) {
                        let tmp33 = mutableGuildChannelsForGuild[tmp6];
                        let obj6 = closure_2_0(closure_2_2[14]);
                        if (obj6.hasFlag(tmp33.flags, constants2.OBFUSCATED)) {
                          let arr = items.push(tmp6);
                        }
                        num2 = num2 + 1;
                        continue;
                      }
                    }
                    obj = closure_2_1(closure_2_2[11]);
                    const obj3 = { guild_id: id, request_id: str, num_obfuscated_channels: items.length, num_total_channels: num };
                    obj.track(constants.GUILD_CHANNEL_RESYNC_EXECUTED, obj3);
                    socket = socket.getSocket();
                    const result = socket.triggerGuildChannelResync(tmp3, items);
                    closure_0 = tmp3;
                    if (null != closure_2_16[id]) {
                      let _clearTimeout = clearTimeout;
                      clearTimeout(closure_2_16[id]);
                    }
                    const _setTimeout = setTimeout;
                    closure_2_16[id] = setTimeout(() => {
                      logger.warn("Resync timeout for guild " + guild_id + " with request " + str);
                      obj = closure_2_1(closure_2_2[11]);
                      const obj2 = { guild_id, request_id: str, failure_reason: "timeout" };
                      obj.track(constants.GUILD_CHANNEL_RESYNC_FAILED, obj2);
                      if (null != closure_2_16[guild_id]) {
                        const _clearTimeout = clearTimeout;
                        clearTimeout(closure_2_16[guild_id]);
                        delete closure_2_16[guild_id];
                      }
                      if (null != closure_2_15[guild_id]) {
                        const _clearTimeout2 = clearTimeout;
                        clearTimeout(closure_2_15[guild_id]);
                        delete closure_2_15[guild_id];
                      }
                    }, closure_2_13);
                  }
                }, Math.ceil(Math.random() * closure_2_12));
              }
            });
            if (tmp.ineligible.length > 0) {
              const tmp23 = closure_1;
              const ineligible = tmp.ineligible;
              guildIds = ineligible.map((id) => id.id);
              const _JSON2 = JSON;
              const _HermesInternal2 = HermesInternal;
              closure_130_11.verbose("Guilds we are no longer part of are marked for resync. Unmarking them. Guilds: " + JSON.stringify(guildIds));
              let obj6 = { type: "UNMARK_RESYNC_GUILDS", guildIds };
              const obj5 = closure_130_1(closure_130_2[12]);
              obj5.dispatch(obj6);
            }
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        c4 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
obj = function _getResyncGuilds() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj4;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp3;
            c1 = 1;
            c2 = 1;
            const obj5 = { value: obj4.getAll(), done: false };
            obj4 = GuildsRequiringChannelSyncDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          obj = { eligible: [], ineligible: [] };
          c2 = 3;
          const obj7 = {
            value: value.reduce((ineligible, id) => {
                    if (null == guild.getGuild(id.id)) {
                      if (!unavailable.isUnavailable(id.id)) {
                        ineligible = ineligible.ineligible;
                        ineligible.push(id);
                      }
                      return ineligible;
                    }
                    const eligible = ineligible.eligible;
                    eligible.push(id);
                  }, obj),
            done: true
          };
          return obj7;
        }
      } catch (tmp7) {
        c2 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
const ChannelFlags = ChannelConstants.ChannelFlags;
let tmp2 = new LoggerDefault("ChannelResyncManager");
let closure_11 = tmp2;
let closure_12 = 2 * DurationsDefault.Millis.SECOND;
let closure_13 = 30 * DurationsDefault.Millis.SECOND;
class ChannelResyncManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    obj = { GUILD_CREATE: handleGuildCreate, POST_CONNECTION_OPEN: handlePostConnectionOpen, CHANNEL_SYNC: handleChannelSync, LOGOUT: handleLogout };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
  __unsafeGetTestState() {
    obj = { scheduledResyncTimerGuildIds: Object.keys(closure_15), pendingResyncTimeoutGuildIds: Object.keys(closure_16), pendingGuildCreateDeferredGuildIds: Object.keys(closure_17), guildIdsWithLatestRequest: Object.keys(closure_14), sessionEpoch };
    return obj;
  }
}
const prototype = ChannelResyncManager.prototype;
let closure_14 = {};
let closure_15 = {};
let closure_16 = {};
let closure_17 = {};
let c18 = 0;
const channelResyncManager = new ChannelResyncManager();
let result = size.fileFinishedImporting("modules/gateway/ChannelResyncManager.tsx");

export default channelResyncManager;
