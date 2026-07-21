// Module ID: 12456
// Function ID: 95149
// Name: prettyPrintTrace_
// Dependencies: []
// Exports: createResumeAnalytics, getConnectionPath, getReadyPayloadByteSizeAnalytics, logGatewayConnected, logReadyPayloadReceived, logResumeAnalytics, reportDevtoolsEvent

// Module 12456 (prettyPrintTrace_)
function prettyPrintTrace_(arg0, arg1) {
  let length;
  if (null == arg0) {
    return "";
  } else {
    let num = 0;
    let str3 = "";
    let str4 = "";
    if (0 < arg0.length) {
      do {
        let sum = num + 1;
        let _HermesInternal = HermesInternal;
        let str = "\n";
        let tmp2 = arg1;
        let str2 = ": ";
        let tmp4 = closure_9;
        let text = `${"\n" + arg1 + arg0[num] + ": " + arg0[tmp].micros / 1000}`;
        str3 = `${"\n" + arg1 + arg0[num] + ": " + arg0[tmp].micros / 1000}${closure_9(arg0[tmp].calls, arg1 + "|  ")}`;
        num = num + 2;
        str4 = str3;
        length = arg0.length;
      } while (num < length);
    }
    return str4;
  }
}
function eachTraceCall(arg0, arg1) {
  let length;
  if (null != arg0) {
    if (arg0.length > 0) {
      let num4 = 0;
      if (0 < arg0.length) {
        do {
          let tmp = arg0[num4 + 1];
          let tmp2 = arg1(arg0[num4], tmp.micros);
          let tmp3 = closure_10;
          let tmp4 = closure_10(tmp.calls, arg1);
          num4 = num4 + 2;
          length = arg0.length;
        } while (num4 < length);
      }
    }
  }
}
function getReadyPayloadSizeAnalytics(guilds) {
  guilds = guilds.guilds;
  let closure_0 = 0;
  let closure_1 = 0;
  const item = guilds.forEach((unavailable) => {
    if (!unavailable.unavailable) {
      if ("partial" === unavailable.data_mode) {
        let channels = unavailable.partial_updates.channels;
      } else {
        channels = unavailable.channels;
      }
      if (tmp2) {
        const item = channels.forEach((type) => {
          closure_1 = closure_1 + 1;
          if (type.type === constants.GUILD_CATEGORY) {
            closure_0 = closure_0 + 1;
          }
        });
      }
      const tmp2 = null != channels && null != channels.forEach;
    }
  });
  return { num_guilds: guilds.length, num_guild_channels: closure_1, num_guild_category_channels: closure_0 };
}
let closure_2 = [];
let closure_3 = [];
let closure_4 = [];
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
({ AnalyticEvents: closure_7, ChannelTypes: closure_8 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/gateway/GatewaySocketAnalytics.tsx");

export function reportDevtoolsEvent() {

}
export const logReadyPayloadReceived = function logReadyPayloadReceived(socket, data, nowResult, compressionAnalytics, readyPayloadByteSizeAnalytics) {
  const tmp = function getReadyPayloadTraceAnalytics(_trace) {
    const obj = {};
    const parsed = JSON.parse(_trace._trace);
    let tmp4 = tmp3;
    if (null != parsed[0]) {
      tmp4 = "" !== tmp2[0];
    }
    let tmp6 = tmp4;
    if (tmp4) {
      tmp6 = "string" === typeof tmp2[0];
    }
    let startsWithResult = tmp6;
    if (tmp6) {
      const first = tmp2[0];
      startsWithResult = first.startsWith("gateway-");
    }
    if (startsWithResult) {
      let num2 = 0;
      if ("object" === typeof tmp2[1]) {
        num2 = 0;
        if ("micros" in tmp2[1]) {
          const _Math = Math;
          num2 = Math.floor(tmp2[1].micros / 1000);
        }
      }
      obj.identify_total_server_duration_ms = num2;
    }
    callback(parsed, (arg0, arg1) => {
      if ("start_session" === arg0) {
        const _Math2 = Math;
        obj.identify_api_duration_ms = Math.floor(arg1 / 1000);
      } else if ("guilds_connect" === arg0) {
        const _Math = Math;
        obj.identify_guilds_duration_ms = Math.floor(arg1 / 1000);
      }
    });
  }(data);
  if (null != compressionAnalytics) {
    let obj = importDefault(dependencyMap[3]);
    const _Math = Math;
    obj.addDetail("payload_size(kb)", Math.round(compressionAnalytics.uncompressed_byte_size / 1024));
  }
  const identify_total_server_duration_ms = tmp.identify_total_server_duration_ms;
  let num3 = 0;
  if (null != identify_total_server_duration_ms) {
    num3 = identify_total_server_duration_ms;
  }
  importDefault(dependencyMap[3]).addDetail("server_time(ms)", num3);
  obj = {};
  const merged = Object.assign(compressionAnalytics);
  const merged1 = Object.assign(tmp);
  const merged2 = Object.assign(getReadyPayloadSizeAnalytics(data));
  const merged3 = Object.assign(readyPayloadByteSizeAnalytics);
  obj["duration_ms_since_identify_start"] = nowResult - socket.identifyStartTime;
  obj["duration_ms_since_connection_start"] = nowResult - socket.connectionStartTime;
  obj["duration_ms_since_emit_start"] = Date.now() - nowResult;
  obj["is_reconnect"] = socket.hasConnectedOnce;
  obj["is_fast_connect"] = socket.isFastConnect;
  obj["did_force_clear_guild_hashes"] = socket.didForceClearGuildHashes;
  obj["identify_uncompressed_byte_size"] = socket.identifyUncompressedByteSize;
  obj["identify_compressed_byte_size"] = socket.identifyCompressedByteSize;
  const hadCacheAtStartup = socket.analytics.hadCacheAtStartup;
  obj["had_cache_at_startup"] = null != hadCacheAtStartup && hadCacheAtStartup;
  const usedCacheAtStartup = socket.analytics.usedCacheAtStartup;
  obj["used_cache_at_startup"] = null != usedCacheAtStartup && usedCacheAtStartup;
  const obj2 = importDefault(dependencyMap[3]);
  const tmp11 = null != hadCacheAtStartup && hadCacheAtStartup;
  const tmp12 = null != usedCacheAtStartup && usedCacheAtStartup;
  const result = importDefault(dependencyMap[4]).attachReadyPayloadProperties(obj);
  const obj4 = importDefault(dependencyMap[4]);
  importDefault(dependencyMap[5]).track(constants.READY_PAYLOAD_RECEIVED, obj, { logEventProperties: true });
};
export const getConnectionPath = function getConnectionPath(_trace) {
  _trace = _trace._trace;
  let first;
  if (null != _trace) {
    first = tmp[0];
  }
  let tmp4 = null;
  if (null != first) {
    const _JSON = JSON;
    tmp4 = prettyPrintTrace_(JSON.parse(first), "");
  }
  if (null != tmp4) {
    return tmp4;
  } else {
    while (true) {
      let tmp7 = _trace;
      let tmp8 = null;
      let str2 = "???";
      if (null == _trace._trace) {
        break;
      } else {
        let _trace2 = _trace._trace;
        let str3 = " -> ";
        str2 = _trace2.join(" -> ");
        // break
      }
      return str2;
    }
  }
};
export const getReadyPayloadByteSizeAnalytics = function getReadyPayloadByteSizeAnalytics(data) {
  let experiments;
  let guild_experiments;
  let guilds;
  let merged_members;
  let merged_presences;
  let private_channels;
  let read_state;
  let relationships;
  let user_guild_settings;
  let user_settings;
  let user_settings_proto;
  let users;
  if (Math.random() <= 0.01) {
    const _Date2 = Date;
    ({ guilds, merged_presences, merged_members, user_settings, user_settings_proto, experiments, guild_experiments } = data);
    const timestamp = Date.now();
    ({ read_state, private_channels, user_guild_settings, relationships, users } = data);
    let obj = callback(data, closure_2);
    const items = [];
    const importDefault = items;
    const items1 = [];
    const dependencyMap = items1;
    const items2 = [];
    closure_2 = items2;
    const items3 = [];
    let closure_3 = items3;
    const items4 = [];
    let closure_4 = items4;
    const items5 = [];
    const callback = items5;
    const items6 = [];
    let closure_6 = items6;
    const items7 = [];
    const item = guilds.forEach((unavailable) => {
      let guild_scheduled_events;
      let partial_updates;
      let stickers;
      let threads;
      partial_updates = unavailable;
      if (!unavailable.unavailable) {
        let properties = partial_updates.properties;
        if (null == properties) {
          properties = {};
        }
        ({ threads, guild_scheduled_events } = partial_updates);
        const tmp4 = items5(properties, items3);
        if ("partial" === partial_updates.data_mode) {
          let channels = partial_updates.partial_updates.channels;
        } else {
          channels = partial_updates.channels;
        }
        items.push(channels);
        if ("partial" === partial_updates.data_mode) {
          let roles = partial_updates.partial_updates.roles;
        } else {
          roles = partial_updates.roles;
        }
        items1.push(roles);
        if ("partial" === partial_updates.data_mode) {
          let emojis = partial_updates.partial_updates.emojis;
        } else {
          emojis = partial_updates.emojis;
        }
        items2.push(emojis);
        items3.push(threads);
        let push = items4.push;
        if ("partial" === partial_updates.data_mode) {
          ({ partial_updates, stickers } = partial_updates);
        } else {
          stickers = partial_updates.stickers;
        }
        push(stickers);
        items5.push(properties.features);
        push = items6;
        items6.push(guild_scheduled_events);
        items7.push(items5(partial_updates, items4), tmp4);
        const tmp6 = items5(partial_updates, items4);
      }
    });
    obj = {};
    let friends;
    if (null != merged_presences) {
      friends = merged_presences.friends;
    }
    if (null == friends) {
      friends = [];
    }
    obj.presences_size = JSON.stringify(friends).length;
    const _JSON = JSON;
    obj.users_size = JSON.stringify(users).length;
    const _JSON2 = JSON;
    obj.read_states_size = JSON.stringify(read_state).length;
    const _JSON3 = JSON;
    obj.private_channels_size = JSON.stringify(private_channels).length;
    let str = "";
    let str2 = "";
    if (null != user_settings) {
      str2 = user_settings;
    }
    if (null != user_settings_proto) {
      str = user_settings_proto;
    }
    obj.user_settings_size = JSON.stringify(str2).length + str.length;
    if (null == experiments) {
      experiments = [];
    }
    if (null == guild_experiments) {
      guild_experiments = [];
    }
    obj.experiments_size = JSON.stringify(experiments).length + JSON.stringify(guild_experiments).length;
    const _JSON4 = JSON;
    obj.user_guild_settings_size = JSON.stringify(user_guild_settings).length;
    const _JSON5 = JSON;
    obj.relationships_size = JSON.stringify(relationships).length;
    if (null == obj) {
      obj = {};
    }
    obj.remaining_data_size = JSON.stringify(obj).length;
    const _JSON6 = JSON;
    obj.guild_channels_size = JSON.stringify(items).length;
    if (null == merged_members) {
      merged_members = [];
    }
    obj.guild_members_size = JSON.stringify(merged_members).length;
    guilds = undefined;
    if (null != merged_presences) {
      guilds = merged_presences.guilds;
    }
    if (null == guilds) {
      guilds = [];
    }
    obj.guild_presences_size = JSON.stringify(guilds).length;
    const _JSON7 = JSON;
    obj.guild_roles_size = JSON.stringify(items1).length;
    const _JSON8 = JSON;
    obj.guild_emojis_size = JSON.stringify(items2).length;
    const _JSON9 = JSON;
    obj.guild_threads_size = JSON.stringify(items3).length;
    const _JSON10 = JSON;
    obj.guild_stickers_size = JSON.stringify(items4).length;
    const _JSON11 = JSON;
    obj.guild_events_size = JSON.stringify(items6).length;
    const _JSON12 = JSON;
    obj.guild_features_size = JSON.stringify(items5).length;
    const _JSON13 = JSON;
    obj.guild_remaining_data_size = JSON.stringify(items7).length;
    const _Date = Date;
    obj.size_metrics_duration_ms = Date.now() - timestamp;
    return obj;
  }
};
export const logGatewayConnected = function logGatewayConnected(failedConnectAttempts, altGateway, gateway_url) {
  let obj = importDefault(dependencyMap[5]);
  obj = { num_failed_connect_attempts: failedConnectAttempts.failedConnectAttempts, gateway_url, assigned_to_alt_gateway: altGateway.isAssignedToAltGateway(), did_fall_back_from_alt_gateway: altGateway.getDidFallBack(), is_reconnect: failedConnectAttempts.hasConnectedOnce, is_fast_connect: failedConnectAttempts.isFastConnect };
  obj.track(constants.GATEWAY_CONNECTED, obj, { logEventProperties: true });
};
export const createResumeAnalytics = function createResumeAnalytics(arg0) {
  const obj = {};
  let num = 0;
  if (null != arg0) {
    num = arg0;
  }
  obj.connectTime = num;
  obj.startTime = performance.now();
  obj.lastUpdateTime = performance.now();
  return obj;
};
export const logResumeAnalytics = function logResumeAnalytics(resumeAnalytics) {
  const currentUser = currentUser.getCurrentUser();
  let tmp = null == currentUser || !currentUser.isStaff();
  if (tmp) {
    const _Math = Math;
    tmp = Math.random() < 0.5;
  }
  if (!tmp) {
    let obj = { connect_time_ms: resumeAnalytics.connectTime };
    const _Math2 = Math;
    const _performance = performance;
    obj.resume_time_ms = Math.floor(performance.now() - resumeAnalytics.startTime);
    obj.num_events = resumeAnalytics.numEvents;
    const _Math3 = Math;
    obj.largest_wait_time_ms = Math.floor(resumeAnalytics.largestWaitTime);
    const _Math4 = Math;
    obj.initial_wait_time_ms = Math.floor(resumeAnalytics.initialWaitTime);
    const _Math5 = Math;
    obj.total_wait_time_ms = Math.floor(resumeAnalytics.totalWaitTime);
    const _Math6 = Math;
    obj.total_dispatch_time_ms = Math.floor(resumeAnalytics.dispatchTime);
    obj = { logEventProperties: true };
    importDefault(dependencyMap[5]).track(constants.CONNECTION_RESUMED, obj, obj);
    const obj2 = importDefault(dependencyMap[5]);
  }
};
