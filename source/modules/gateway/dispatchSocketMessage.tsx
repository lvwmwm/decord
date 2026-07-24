// Module ID: 12658
// Function ID: 97914
// Name: _createForOfIteratorHelperLoose
// Dependencies: [29, 1352, 4028, 1857, 1348, 1917, 1849, 4146, 3781, 3782, 653, 3, 12630, 12614, 14, 566, 12659, 1318, 6724, 12660, 686, 22, 7023, 1829, 1860, 9569, 7005, 12736, 4451, 5638, 7976, 8315, 4460, 4353, 12737, 12739, 1828, 12741, 2]
// Exports: default

// Module 12658 (_createForOfIteratorHelperLoose)
import fetchSubscriptionPlansForSKU from "fetchSubscriptionPlansForSKU";
import { createChannelRecordFromServer as closure_6 } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { ChannelLoader } from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import { ActivityTypes } from "ME";
import importDefaultResult from "_isNativeReflectConstruct";
import importDefaultResult1 from "_createForOfIteratorHelperLoose";
import importDefaultResult2 from "_createForOfIteratorHelperLoose";
import importDefaultResult3 from "_createForOfIteratorHelperLoose";
import importDefaultResult4 from "_createForOfIteratorHelperLoose";

let require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function populateCountdownFlagToActivities(activities) {
  return activities.map((timestamps) => {
    timestamps = timestamps.timestamps;
    let end;
    if (null != timestamps) {
      end = timestamps.end;
    }
    const created_at = timestamps.created_at;
    let tmp2 = timestamps;
    if (null != end) {
      tmp2 = timestamps;
      if (null != created_at) {
        let obj = {};
        const merged = Object.assign(timestamps);
        obj = {};
        const merged1 = Object.assign(timestamps.timestamps);
        let tmp8 = end > created_at;
        if (tmp8) {
          tmp8 = timestamps.type !== outer1_16.LISTENING;
        }
        obj["isCountDown"] = tmp8;
        obj["timestamps"] = obj;
        tmp2 = obj;
      }
    }
    return tmp2;
  });
}
function defineSimpleDispatch(arg0, dispatch) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = closure_22;
      let obj = {
        preload() {
              return null;
            },
        dispatch
      };
      closure_22[iter.value] = obj;
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
}
function definePreloadableDispatch(arg0, preload, dispatch) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = closure_22;
      let obj = { preload, dispatch };
      closure_22[iter.value] = obj;
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
}
function dispatchVoiceStateUpdates(items) {
  let iter2;
  let self_video;
  items = [];
  const tmp = _createForOfIteratorHelperLoose(items);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      if (null != value.member) {
        let tmp2 = dispatchGuildMemberAdd;
        let tmp3 = dispatchGuildMemberAdd(value.guild_id, value.member.user, value.member);
      }
      let obj = {};
      ({ user_id: obj.userId, guild_id: obj.guildId, session_id: obj.sessionId, channel_id: obj.channelId, mute: obj.mute, deaf: obj.deaf, self_mute: obj.selfMute, self_deaf: obj.selfDeaf, self_video } = value);
      if (!self_video) {
        self_video = false;
      }
      obj.selfVideo = self_video;
      obj.suppress = value.suppress;
      obj.selfStream = value.self_stream || false;
      let request_to_speak_timestamp = value.request_to_speak_timestamp;
      let tmp4 = null;
      if (null != request_to_speak_timestamp) {
        tmp4 = request_to_speak_timestamp;
      }
      obj.requestToSpeakTimestamp = tmp4;
      let discoverable = value.discoverable;
      obj.discoverable = null == discoverable || discoverable;
      let tmp5 = userVoiceChannelId;
      obj.oldChannelId = userVoiceChannelId.getUserVoiceChannelId(value.guild_id, value.user_id);
      obj.connectedAt = value.connected_at;
      let arr = items.push(obj);
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  dispatchOrResetSocket({ type: "VOICE_STATE_UPDATES", voiceStates: items });
}
function dispatchOrResetSocket(arg0) {
  let closure_0 = arg0;
  const obj = importDefault(686);
  importDefault(686).dispatch(arg0).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + lib.type + ":", error);
    const socket = lib(outer1_3[13]).socket;
    const result = socket.resetSocketOnDispatchError({ error, action: lib.type });
  });
}
function dispatchGuildMemberAdd(guild_id, user, member) {
  let avatar;
  let avatar_decoration_data;
  let collectibles;
  let communication_disabled_until;
  let display_name_styles;
  let flags;
  let joined_at;
  let nick;
  let pending;
  let premium_since;
  let roles;
  let unusual_dm_activity_until;
  ({ roles, nick, avatar, avatar_decoration_data, flags, premium_since, pending, joined_at, communication_disabled_until, unusual_dm_activity_until } = member);
  ({ collectibles, display_name_styles } = member);
  member = member.getMember(guild_id, user.id);
  let obj = require(1829) /* parseSkuIdFromServerData */;
  const result = obj.parseServerUserCollectibles(collectibles);
  const result1 = require(1860) /* wrapHue */.parseServerDisplayNameStyles(display_name_styles);
  let isEqualResult = null != member && member.nick === nick && member.avatar === avatar;
  if (isEqualResult) {
    isEqualResult = importDefault(22).isEqual(member.roles, roles);
    const obj3 = importDefault(22);
  }
  if (isEqualResult) {
    const avatarDecoration = member.avatarDecoration;
    let tmp9 = null;
    if (null != avatarDecoration) {
      tmp9 = avatarDecoration;
    }
    let tmp10 = null;
    if (null != avatar_decoration_data) {
      tmp10 = avatar_decoration_data;
    }
    isEqualResult = require(1828) /* parseAvatarDecorationData */.isEqualAvatarDecoration(tmp9, tmp10);
    const obj4 = require(1828) /* parseAvatarDecorationData */;
  }
  if (isEqualResult) {
    isEqualResult = member.premiumSince === premium_since;
  }
  if (isEqualResult) {
    isEqualResult = member.isPending === pending;
  }
  if (isEqualResult) {
    isEqualResult = member.joinedAt === joined_at;
  }
  if (isEqualResult) {
    isEqualResult = member.communicationDisabledUntil === communication_disabled_until;
  }
  if (isEqualResult) {
    isEqualResult = member.flags === flags;
  }
  if (isEqualResult) {
    const unusualDMActivityUntil = member.unusualDMActivityUntil;
    let tmp11 = null;
    if (null != unusualDMActivityUntil) {
      tmp11 = unusualDMActivityUntil;
    }
    let tmp12 = null;
    if (null != unusual_dm_activity_until) {
      tmp12 = unusual_dm_activity_until;
    }
    isEqualResult = tmp11 === tmp12;
  }
  if (isEqualResult) {
    const collectibles2 = member.collectibles;
    let tmp15 = null;
    if (null != collectibles2) {
      tmp15 = collectibles2;
    }
    let tmp16 = null;
    if (null != result) {
      tmp16 = result;
    }
    isEqualResult = importDefault(22).isEqual(tmp15, tmp16);
    const obj5 = importDefault(22);
  }
  if (isEqualResult) {
    const displayNameStyles = member.displayNameStyles;
    let tmp19 = null;
    if (null != displayNameStyles) {
      tmp19 = displayNameStyles;
    }
    let tmp20 = null;
    if (null != result1) {
      tmp20 = result1;
    }
    isEqualResult = importDefault(22).isEqual(tmp19, tmp20);
    const obj6 = importDefault(22);
  }
  if (!isEqualResult) {
    obj = { type: "GUILD_MEMBER_ADD", guildId: guild_id, user, roles, nick, avatar, avatarDecoration: avatar_decoration_data, premiumSince: premium_since, isPending: pending, joinedAt: joined_at, communicationDisabledUntil: communication_disabled_until, unusualDMActivityUntil: unusual_dm_activity_until, flags, collectibles: result, displayNameStyles: result1 };
    dispatchOrResetSocket(obj);
  }
}
function dispatchMessageMembers(author) {
  let guild_id;
  let member;
  let mentions;
  ({ member, mentions, guild_id } = author);
  let tmp = null != member;
  if (tmp) {
    tmp = null != guild_id;
  }
  if (tmp) {
    dispatchGuildMemberAdd(guild_id, author.author, member);
  }
  if (null != mentions) {
    const item = mentions.forEach((member) => {
      if (null != member.member) {
        if (null != guild_id) {
          delete tmp.member;
          outer1_28(guild_id, member, member.member);
        }
      }
    });
  }
}
function convertSessions(arr) {
  return arr.map((sessionId) => {
    const obj = { sessionId: sessionId.session_id, lastModified: sessionId.last_modified, status: sessionId.status };
    let activities = sessionId.activities;
    if (null == activities) {
      activities = [];
    }
    obj.activities = outer1_25(activities);
    let hidden_activities = sessionId.hidden_activities;
    if (null == hidden_activities) {
      hidden_activities = [];
    }
    obj.hiddenActivities = hidden_activities;
    obj.active = sessionId.active;
    obj.clientInfo = sessionId.client_info;
    return obj;
  });
}
function transformPresences(arr, arg1) {
  let closure_0 = arg1;
  return arr.map((arg0) => outer1_32(arg0, closure_0));
}
function transformPresence(activities, guild_id) {
  activities = activities.activities;
  if (null == activities) {
    activities = [];
  }
  let hidden_activities = activities.hidden_activities;
  if (null == hidden_activities) {
    hidden_activities = [];
  }
  const tmpResult = importDefault(12741)(activities, hidden_activities);
  const tmp = importDefault(12741);
  return { user: activities.user, status: activities.status, clientStatus: activities.client_status, activities: populateCountdownFlagToActivities(tmpResult.activities), hiddenActivities: tmpResult.hiddenActivities, guildId: guild_id, processedAtTimestamp: activities.processed_at_timestamp };
}
function dispatchPresence(arg0) {
  importDefaultResult4.add(arg0);
}
let closure_4 = ["newly_created"];
importDefaultResult = new importDefaultResult("ConnectionStore");
importDefaultResult1 = new importDefaultResult1(require("importDefaultResult1").socket, (arg0, id) => {
  let tmp = arg0;
  if (null == arg0) {
    let obj = { type: "CHANNEL_UPDATES", channels: [] };
    tmp = obj;
  }
  let tmp2 = callback2(id);
  const channel = store.getChannel(id.id);
  let mergeResult;
  if (null != channel) {
    obj = {};
    const merged = Object.assign(tmp2);
    obj["recipients"] = channel.recipients;
    let bitrate = tmp2.bitrate;
    if (null == bitrate) {
      bitrate = channel.bitrate;
    }
    obj["bitrate"] = bitrate;
    mergeResult = channel.merge(obj);
  }
  const channels = tmp.channels;
  if (null != mergeResult) {
    tmp2 = mergeResult;
  }
  channels.push(tmp2);
  return tmp;
}, (arg0) => "CHANNEL_UPDATE" !== arg0);
importDefaultResult2 = new importDefaultResult2(require("importDefaultResult1").socket, (arg0, guildId) => {
  let tmp = arg0;
  let closure_0 = guildId;
  if (null == arg0) {
    let obj = { type: "SOUNDBOARD_SOUNDS_RECEIVED", updates: [] };
    tmp = obj;
  }
  const updates = tmp.updates;
  obj = { guildId: guildId.guild_id, sounds: soundboard_sounds.map((name) => ({ name: name.name, soundId: name.sound_id, emojiName: name.emoji_name, emojiId: name.emoji_id, userId: name.user_id, volume: name.volume, available: name.available, guildId: guildId.guild_id })) };
  soundboard_sounds = guildId.soundboard_sounds;
  updates.push(obj);
  return tmp;
}, (arg0) => "SOUNDBOARD_SOUNDS" !== arg0);
importDefaultResult3 = new importDefaultResult3(require("importDefaultResult1").socket, (arg0, arg1) => {
  let tmp = arg0;
  if (null == arg0) {
    const obj = { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] };
    tmp = obj;
  }
  const chunks = tmp.chunks;
  chunks.push(arg1);
  return tmp;
}, (arg0) => "GUILD_MEMBERS_CHUNK" !== arg0);
importDefaultResult4 = new importDefaultResult4(require("importDefaultResult1").socket, (arg0, arg1) => {
  let tmp = arg0;
  if (null == arg0) {
    const obj = { type: "PRESENCE_UPDATES", updates: [] };
    tmp = obj;
  }
  const updates = tmp.updates;
  updates.push(arg1);
  return tmp;
}, (arg0) => {
  let tmp = "PRESENCE_UPDATE" !== arg0;
  if (tmp) {
    tmp = "GUILD_MEMBERS_CHUNK" !== arg0;
  }
  return tmp;
});
let closure_22 = {};
let result = definePreloadableDispatch(["INITIAL_GUILD"], (data_mode) => {
  let guildIds = null;
  if ("full" !== data_mode.data_mode) {
    const items = [data_mode.id];
    guildIds = ChannelLoader.loadGuildIds(items);
  }
  return guildIds;
}, (arg0) => {
  let closure_0 = arg0;
  const initialGuild = importDefault(14).initialGuild;
  initialGuild.measure(() => {
    const Emitter = outer1_1(outer1_3[15]).Emitter;
    Emitter.batched(() => {
      let obj = outer2_2(outer2_3[16]);
      const hydrateInitialGuildResult = obj.hydrateInitialGuild(outer1_0, callback(outer2_3[13]).socket.identifyStartTime);
      callback = hydrateInitialGuildResult;
      if (null != outer2_12.getCurrentUser()) {
        obj = { type: "GUILD_CREATE", guild: hydrateInitialGuildResult };
        outer2_27(obj);
        obj = { type: "VOICE_STATE_UPDATES" };
        const voice_states = hydrateInitialGuildResult.voice_states;
        obj.voiceStates = voice_states.map((userId) => {
          const obj = { userId: userId.user_id, guildId: hydrateInitialGuildResult.id, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf, selfVideo: tmp, suppress: userId.suppress, selfStream: tmp2 };
          const request_to_speak_timestamp = userId.request_to_speak_timestamp;
          let tmp3 = null;
          if (null != request_to_speak_timestamp) {
            tmp3 = request_to_speak_timestamp;
          }
          obj.requestToSpeakTimestamp = tmp3;
          const discoverable = userId.discoverable;
          obj.discoverable = null == discoverable || discoverable;
          obj.connectedAt = userId.connected_at;
          return obj;
        });
        outer2_27(obj);
        const _HermesInternal = HermesInternal;
        outer2_17.log("Dispatched INITIAL_GUILD " + outer1_0.id);
      }
    });
  });
});
defineSimpleDispatch(["READY_SUPPLEMENTAL"], (arg0) => {
  let closure_0 = arg0;
  const readySupplemental = importDefault(14).readySupplemental;
  readySupplemental.measure(() => {
    const Emitter = outer1_1(outer1_3[15]).Emitter;
    Emitter.batched(() => {
      const hydrateReadySupplemental = outer2_1(outer2_3[14]).hydrateReadySupplemental;
      const measureResult = hydrateReadySupplemental.measure(() => outer3_2(outer3_3[16]).hydrateReadySupplementalPayload(outer2_0, callback(outer3_3[13]).socket.identifyStartTime));
      const outer1_0 = measureResult;
      const guilds = measureResult.guilds;
      const found = guilds.filter((unavailable) => true !== unavailable.unavailable);
      let item = found.forEach((presences) => {
        presences = presences.presences;
        if (!presences) {
          presences = [];
        }
        presences.presences = outer3_31(presences, presences.id);
      });
      let presences = outer1_0.presences;
      if (null == presences) {
        presences = [];
      }
      let closure_1 = outer2_31(presences, undefined);
      let prop = outer1_0.lazy_private_channels;
      if (null == prop) {
        prop = [];
      }
      let closure_2 = prop.map((arg0) => outer3_6(arg0));
      const dispatchReadySupplemental = outer2_1(outer2_3[14]).dispatchReadySupplemental;
      dispatchReadySupplemental.measure(() => {
        outer3_27({ type: "CONNECTION_OPEN_SUPPLEMENTAL", guilds: found, presences: closure_1, lazyPrivateChannels: closure_2 });
      });
      const items = [];
      const item1 = found.forEach((voice_states) => {
        let closure_0 = voice_states;
        voice_states = voice_states.voice_states;
        const item = voice_states.forEach((userId) => {
          const obj = { userId: userId.user_id, guildId: voice_states.id, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf };
          let flag = userId.self_video;
          if (!flag) {
            flag = false;
          }
          obj.selfVideo = flag;
          obj.suppress = userId.suppress;
          obj.selfStream = userId.self_stream || false;
          const request_to_speak_timestamp = userId.request_to_speak_timestamp;
          let tmp2 = null;
          if (null != request_to_speak_timestamp) {
            tmp2 = request_to_speak_timestamp;
          }
          obj.requestToSpeakTimestamp = tmp2;
          const discoverable = userId.discoverable;
          obj.discoverable = null == discoverable || discoverable;
          obj.connectedAt = userId.connected_at;
          outer1_3.push(obj);
        });
      });
      let obj = { type: "VOICE_STATE_UPDATES", voiceStates: items, initial: true };
      outer2_27(obj);
      const localVoiceState = callback(outer2_3[13]).localVoiceState;
      localVoiceState.update();
    });
  });
  const timerId = setTimeout(() => {
    outer1_27({ type: "POST_CONNECTION_OPEN" });
  }, 2000);
});
let result1 = definePreloadableDispatch(["READY"], (guilds) => {
  guilds = guilds.guilds;
  const result = importAll(12659).preloadReadyPayloadData();
  const found = guilds.filter((unavailable) => {
    let tmp = !unavailable.unavailable;
    if (tmp) {
      let tmp2 = "partial" === unavailable.data_mode;
      if (tmp2) {
        let channels = unavailable.partial_updates.channels;
        if (null == channels) {
          channels = [];
        }
        let tmp4 = channels.length > 0;
        if (!tmp4) {
          let deleted_channel_ids = unavailable.partial_updates.deleted_channel_ids;
          if (null == deleted_channel_ids) {
            deleted_channel_ids = [];
          }
          tmp4 = deleted_channel_ids.length > 0;
        }
        tmp2 = tmp4;
      }
      tmp = tmp2;
    }
    return tmp;
  });
  let guildIds = ChannelLoader.loadGuildIds(found.map((id) => id.id));
  if (null == guildIds) {
    guildIds = Promise.resolve();
  }
  const items = [result, guildIds];
  const obj = importAll(12659);
  return Promise.all(items).then((arg0) => {
    let tmp;
    [tmp] = arg0;
    return tmp;
  });
}, (user) => {
  let closure_0 = user;
  const importDefault = arg2;
  if (user.user.bot) {
    let obj = { type: "LOGOUT" };
    dispatchOrResetSocket(obj);
  } else {
    const ready = importDefault(14).ready;
    ready.measure(() => {
      const Emitter = callback(outer1_3[15]).Emitter;
      Emitter.batched(() => {
        const hydrateReady = callback2(outer2_3[14]).hydrateReady;
        const measureResult = hydrateReady.measure(() => outer3_2(outer3_3[16]).hydrateReadyPayloadPrioritized(outer2_0, callback(outer3_3[13]).socket.identifyStartTime, outer2_1));
        const outer1_0 = measureResult;
        const private_channels = measureResult.private_channels;
        const callback = private_channels.map((arg0) => outer3_6(arg0));
        const guilds = outer1_0.guilds;
        const found = guilds.filter((unavailable) => true === unavailable.unavailable && true !== unavailable.geo_restricted);
        callback2 = found.map((id) => id.id);
        const guilds1 = outer1_0.guilds;
        let closure_2 = guilds1.filter((unavailable) => true !== unavailable.unavailable);
        const guilds2 = outer1_0.guilds;
        let closure_3 = guilds2.filter((geo_restricted) => true === geo_restricted.geo_restricted);
        let result;
        if (null != outer1_0.user_settings_proto) {
          let obj = callback(outer2_3[17]);
          result = obj.b64ToPreloadedUserSettingsProto(outer1_0.user_settings_proto);
        }
        callback2(outer2_3[18])("AllGatewayConnectionStores", () => callback(outer3_3[19]));
        const dispatchReady = callback2(outer2_3[14]).dispatchReady;
        dispatchReady.measure(() => {
          let obj = { type: "CONNECTION_OPEN", sessionId: outer2_0.session_id, authSessionIdHash: outer2_0.auth_session_id_hash, staticAuthSessionId: outer2_0.static_client_session_id, user: outer2_0.user, users: outer2_0.users, guilds: closure_2, initialPrivateChannels: closure_0, unavailableGuilds: closure_1, readState: outer2_0.read_state, userGuildSettings: outer2_0.user_guild_settings, tutorial: outer2_0.tutorial };
          let relationships = outer2_0.relationships;
          if (null == relationships) {
            relationships = [];
          }
          obj.relationships = relationships;
          obj.gameRelationships = outer2_0.game_relationships;
          obj.friendSuggestionCount = outer2_0.friend_suggestion_count;
          obj.analyticsToken = outer2_0.analytics_token;
          obj.experiments = outer2_0.experiments;
          obj.connectedAccounts = outer2_0.connected_accounts;
          obj.guildExperiments = outer2_0.guild_experiments;
          const apex_experiments = outer2_0.apex_experiments;
          let tmp2;
          if (null != apex_experiments) {
            tmp2 = apex_experiments;
          }
          obj.apexExperiments = tmp2;
          obj.requiredAction = outer2_0.required_action;
          obj.consents = outer2_0.consents;
          let sessions = outer2_0.sessions;
          if (null == sessions) {
            sessions = [];
          }
          obj.sessions = outer3_30(sessions);
          obj.pendingPayments = outer2_0.pending_payments;
          const country_code = outer2_0.country_code;
          let tmp4;
          if (null != country_code) {
            tmp4 = country_code;
          }
          obj.countryCode = tmp4;
          let guild_join_requests = outer2_0.guild_join_requests;
          if (null == guild_join_requests) {
            guild_join_requests = [];
          }
          obj.guildJoinRequests = guild_join_requests;
          obj.userSettingsProto = closure_4;
          obj.apiCodeVersion = outer2_0.api_code_version;
          obj.auth = outer2_0.auth;
          obj = { flags: outer2_0.notification_settings.flags };
          obj.notificationSettings = obj;
          obj.geoRestrictedGuilds = closure_3;
          obj.explicitContentScanVersion = outer2_0.explicit_content_scan_version;
          obj.failedStates = outer2_0.failed_states;
          const linked_users = outer2_0.linked_users;
          let tmp5;
          if (null != linked_users) {
            tmp5 = linked_users;
          }
          obj.linkedUsers = tmp5;
          const regional_feature_config = outer2_0.regional_feature_config;
          let tmp6;
          if (null != regional_feature_config) {
            tmp6 = regional_feature_config;
          }
          obj.regionalFeatureConfig = tmp6;
          outer3_27(obj);
        });
        if (null != outer1_0.auth_token) {
          obj = { type: "UPDATE_TOKEN", token: outer1_0.auth_token, userId: outer1_0.user.id };
          outer2_27(obj);
        }
        if (null != outer1_0.ad_personalization_toggles_disabled) {
          obj = { type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED", disabled: outer1_0.ad_personalization_toggles_disabled };
          outer2_27(obj);
        }
        const localPresenceState = callback(outer2_3[13]).localPresenceState;
        localPresenceState.update();
        const localVoiceState = callback(outer2_3[13]).localVoiceState;
        localVoiceState.update();
      });
    });
  }
});
defineSimpleDispatch(["STATE_UPDATE"], (apex_experiments) => {
  const obj = { type: "CONNECTION_OPEN_STATE_UPDATE" };
  apex_experiments = apex_experiments.apex_experiments;
  let tmp2;
  if (null != apex_experiments) {
    tmp2 = apex_experiments;
  }
  obj.apexExperiments = tmp2;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (experimentName) => {
  let obj = importDefault(686);
  obj = { type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE", experimentName: experimentName.experiment_name, variantId: experimentName.variant_id };
  obj.dispatch(obj);
});
defineSimpleDispatch(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (experimentName) => {
  let obj = importDefault(686);
  obj = { type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: experimentName.experiment_name };
  obj.dispatch(obj);
});
defineSimpleDispatch(["RESUMED"], () => {
  const localPresenceState = require(12614) /* importDefaultResult1 */.localPresenceState;
  localPresenceState.forceUpdate();
  const localVoiceState = require(12614) /* importDefaultResult1 */.localVoiceState;
  localVoiceState.forceUpdate();
  dispatchOrResetSocket({ type: "CONNECTION_RESUMED" });
});
defineSimpleDispatch(["TYPING_START"], (guildId) => {
  if (null != guildId.member) {
    dispatchGuildMemberAdd(guildId.guild_id, guildId.member.user, guildId.member);
  }
  dispatchOrResetSocket({ type: "TYPING_START", guildId: guildId.guild_id, channelId: guildId.channel_id, userId: guildId.user_id });
});
defineSimpleDispatch(["GUILD_RING_START"], (ongoingRings) => {
  dispatchOrResetSocket({ type: "GUILD_RING_START", ongoingRings: ongoingRings.ongoing_rings, channelId: ongoingRings.channel_id, guildId: ongoingRings.guild_id });
});
defineSimpleDispatch(["GUILD_RING_STOP"], (ringing) => {
  dispatchOrResetSocket({ type: "GUILD_RING_STOP", ringing: ringing.ringing, channelId: ringing.channel_id, guildId: ringing.guild_id });
});
defineSimpleDispatch(["ACTIVITY_START"], (userId) => {
  dispatchOrResetSocket({ type: "ACTIVITY_START", userId: userId.user_id, activity: userId.activity });
});
defineSimpleDispatch(["ACTIVITY_USER_ACTION"], (actionType) => {
  dispatchOrResetSocket({ type: "ACTIVITY_USER_ACTION", actionType: actionType.action_type, user: actionType.user, applicationId: actionType.application_id, channelId: actionType.channel_id, messageId: actionType.message_id });
});
const result2 = definePreloadableDispatch(["MESSAGE_CREATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (author) => {
  dispatchMessageMembers(author);
  if (null != author.author) {
    const obj = { type: "MESSAGE_CREATE", guildId: null, channelId: null, message: null, optimistic: false, isPushNotification: false };
    ({ guild_id: obj.guildId, channel_id: obj.channelId } = author);
    obj.message = author;
    dispatchOrResetSocket(obj);
  }
});
const result3 = definePreloadableDispatch(["MESSAGE_UPDATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  dispatchMessageMembers(guildId);
  dispatchOrResetSocket({ type: "MESSAGE_UPDATE", guildId: guildId.guild_id, message: guildId });
});
const result4 = definePreloadableDispatch(["MESSAGE_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  dispatchOrResetSocket({ type: "MESSAGE_DELETE", guildId: guildId.guild_id, id: guildId.id, channelId: guildId.channel_id });
});
const result5 = definePreloadableDispatch(["MESSAGE_DELETE_BULK"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  dispatchOrResetSocket({ type: "MESSAGE_DELETE_BULK", guildId: guildId.guild_id, ids: guildId.ids, channelId: guildId.channel_id });
});
const result6 = definePreloadableDispatch(["MESSAGE_ACK"], (channel_id) => ChannelLoader.loadGuildFromChannelId(channel_id.channel_id), (channelId) => {
  dispatchOrResetSocket({ type: "MESSAGE_ACK", channelId: channelId.channel_id, messageId: channelId.message_id, manual: channelId.manual, newMentionCount: channelId.mention_count, version: channelId.version });
});
defineSimpleDispatch(["GUILD_FEATURE_ACK"], (id) => {
  dispatchOrResetSocket({ type: "GUILD_FEATURE_ACK", id: id.resource_id, ackType: id.ack_type, ackedId: id.entity_id });
});
defineSimpleDispatch(["USER_NON_CHANNEL_ACK"], (ackType) => {
  dispatchOrResetSocket({ type: "USER_NON_CHANNEL_ACK", ackType: ackType.ack_type, ackedId: ackType.entity_id });
});
const result7 = definePreloadableDispatch(["CHANNEL_PINS_ACK"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (channelId) => {
  dispatchOrResetSocket({ type: "CHANNEL_PINS_ACK", channelId: channelId.channel_id, timestamp: channelId.timestamp, version: channelId.version });
});
const result8 = definePreloadableDispatch(["CHANNEL_PINS_UPDATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (channelId) => {
  dispatchOrResetSocket({ type: "CHANNEL_PINS_UPDATE", channelId: channelId.channel_id, lastPinTimestamp: channelId.last_pin_timestamp });
});
const result9 = definePreloadableDispatch(["CHANNEL_CREATE", "CHANNEL_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (arg0, type) => {
  dispatchOrResetSocket({ type, channel: callback2(arg0) });
});
defineSimpleDispatch(["VOICE_CHANNEL_STATUS_UPDATE"], (id, type) => {
  dispatchOrResetSocket({ type, id: id.id, guildId: id.guild_id, status: id.status });
});
defineSimpleDispatch(["VOICE_CHANNEL_START_TIME_UPDATE"], (id, type) => {
  const obj = { type, id: id.id, guildId: id.guild_id };
  const voice_start_time = id.voice_start_time;
  let tmp2;
  if (null != voice_start_time) {
    tmp2 = voice_start_time;
  }
  obj.voiceStartTime = tmp2;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["CHANNEL_INFO"], (guildId, type) => {
  const channels = guildId.channels;
  dispatchOrResetSocket({ type, guildId: guildId.guild_id, channels: channels.map((id) => ({ id: id.id, status: id.status, voiceStartTime: id.voice_start_time })) });
});
defineSimpleDispatch(["CHANNEL_MEMBER_COUNT_UPDATE"], (guildId, type) => {
  dispatchOrResetSocket({ type, guildId: guildId.guild_id, channelId: guildId.channel_id, online: guildId.presence_count, total: guildId.member_count });
});
const result10 = definePreloadableDispatch(["CHANNEL_UPDATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (arg0) => {
  importDefaultResult1.add(arg0);
});
const result11 = definePreloadableDispatch(["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (isNewlyCreated, type) => {
  dispatchOrResetSocket({ type, isNewlyCreated: isNewlyCreated.newly_created, channel: callback2(callback(isNewlyCreated, closure_4)) });
});
const result12 = definePreloadableDispatch(["THREAD_LIST_SYNC"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  const obj = {
    type: "THREAD_LIST_SYNC",
    guildId: guildId.guild_id,
    threads: threads.map((parent_id) => {
      const channel = outer1_9.getChannel(parent_id.parent_id);
      if (null != channel) {
        ({ nsfw: parent_id.nsfw, type: parent_id.parentChannelThreadType } = channel);
      }
      return outer1_6(parent_id);
    }),
    mostRecentMessages: guildId.most_recent_messages
  };
  threads = guildId.threads;
  let mapped;
  if (guildId.members) {
    mapped = importDefault(22).map(guildId.members, importDefault(7023));
    const arr2 = importDefault(22);
  }
  obj.members = mapped;
  obj.channelIds = guildId.channel_ids;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["THREAD_MEMBER_UPDATE"], (id) => {
  dispatchOrResetSocket({ type: "THREAD_MEMBER_UPDATE", id: id.id, guildId: id.guild_id, userId: id.user_id, flags: id.flags, muted: id.muted, muteConfig: id.mute_config, joinTimestamp: id.join_timestamp });
});
defineSimpleDispatch(["THREAD_MEMBERS_UPDATE"], (id) => {
  let closure_0 = id;
  const obj = { type: "THREAD_MEMBERS_UPDATE", id: id.id, guildId: id.guild_id, memberCount: id.member_count };
  const added_members = id.added_members;
  let mapped;
  if (null != added_members) {
    mapped = added_members.map((id) => ({ id: id.id, guildId: guild_id.guild_id, userId: id.user_id, flags: id.flags, joinTimestamp: id.join_timestamp }));
  }
  obj.addedMembers = mapped;
  ({ removed_member_ids: obj.removedMemberIds, member_ids_preview: obj.memberIdsPreview } = id);
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["FORUM_UNREADS"], (permission_denied) => {
  let threads;
  if (!permission_denied.permission_denied) {
    const obj = { type: "FORUM_UNREADS" };
    ({ channel_id: obj.channelId, threads } = permission_denied);
    obj.threads = threads.map((threadId) => ({ threadId: threadId.thread_id, missing: threadId.missing, count: threadId.count }));
    dispatchOrResetSocket(obj);
  }
});
defineSimpleDispatch(["SOUNDBOARD_SOUNDS"], (arg0) => {
  importDefaultResult2.add(arg0);
});
defineSimpleDispatch(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (channelId, type) => {
  dispatchOrResetSocket({ type, channelId: channelId.channel_id, user: channelId.user, nick: channelId.nick, isMember: null != store.getBasicChannel(channelId.channel_id) });
});
const result13 = definePreloadableDispatch(["GUILD_CREATE"], (data_mode) => {
  let guildIds = null;
  if ("full" !== data_mode.data_mode) {
    const items = [data_mode.id];
    guildIds = ChannelLoader.loadGuildIds(items);
  }
  return guildIds;
}, (unavailable) => {
  if (unavailable.unavailable) {
    let obj = { type: "GUILD_UNAVAILABLE", guildId: unavailable.id };
    dispatchOrResetSocket(obj);
  } else {
    obj = importAll(12659);
    const result = obj.hydratePreviouslyUnavailableGuild(unavailable);
    const require = result;
    obj = { type: "GUILD_CREATE", guild: result };
    dispatchOrResetSocket(obj);
    const obj1 = { type: "VOICE_STATE_UPDATES" };
    const voice_states = result.voice_states;
    obj1.voiceStates = voice_states.map((userId) => {
      const obj = { userId: userId.user_id, guildId: id.id, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf, selfVideo: tmp, suppress: userId.suppress, selfStream: tmp2 };
      const request_to_speak_timestamp = userId.request_to_speak_timestamp;
      let tmp3 = null;
      if (null != request_to_speak_timestamp) {
        tmp3 = request_to_speak_timestamp;
      }
      obj.requestToSpeakTimestamp = tmp3;
      const discoverable = userId.discoverable;
      obj.discoverable = null == discoverable || discoverable;
      obj.connectedAt = userId.connected_at;
      return obj;
    });
    dispatchOrResetSocket(obj1);
  }
});
defineSimpleDispatch(["GUILD_UPDATE"], (guild) => {
  let obj = { type: "GUILD_UPDATE", guild };
  dispatchOrResetSocket(obj);
  if (guild.unavailable) {
    obj = { type: "GUILD_UNAVAILABLE", guildId: guild.id };
    dispatchOrResetSocket(obj);
  }
});
defineSimpleDispatch(["GUILD_PRUNE_UPDATE"], (guildId) => {
  obj = { type: "GUILD_PRUNE_UPDATE", guildId: guildId.guild_id, prune: obj };
  obj = { isPreview: guildId.prune.is_preview, isFinished: guildId.prune.is_finished, days: guildId.prune.days, pruneCount: guildId.prune.prune_count, includeRoles: guildId.prune.include_roles };
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["GUILD_BULK_BAN_UPDATE"], (guildId) => {
  let obj = { type: "GUILD_BULK_BAN_UPDATE", guildId: guildId.guild_id };
  obj = {};
  const bulk_ban = guildId.bulk_ban;
  let banned_users;
  if (null != bulk_ban) {
    banned_users = bulk_ban.banned_users;
  }
  if (null == banned_users) {
    banned_users = [];
  }
  obj.bannedUsers = banned_users;
  const bulk_ban2 = guildId.bulk_ban;
  let failed_users;
  if (null != bulk_ban2) {
    failed_users = bulk_ban2.failed_users;
  }
  if (null == failed_users) {
    failed_users = [];
  }
  obj.failedUsers = failed_users;
  obj.bulkBan = obj;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["GUILD_DELETE"], (geo_restricted) => {
  let obj = { type: "GUILD_DELETE", guild: geo_restricted };
  dispatchOrResetSocket(obj);
  if (geo_restricted.geo_restricted) {
    obj = { type: "GUILD_GEO_RESTRICTED" };
    ({ id: obj3.guildId, icon: obj3.icon, name: obj3.name } = geo_restricted);
    dispatchOrResetSocket(obj);
  } else if (geo_restricted.unavailable) {
    obj = { type: "GUILD_UNAVAILABLE", guildId: geo_restricted.id };
    dispatchOrResetSocket(obj);
  }
});
defineSimpleDispatch(["GUILD_MEMBERS_CHUNK"], (arg0) => {
  let closure_0 = arg0;
  const Emitter = importDefault(566).Emitter;
  Emitter.batched(() => {
    outer1_20.add({ guildId: closure_0.guild_id, members: closure_0.members, notFound: closure_0.not_found });
    if (null != closure_0.presences) {
      const item = outer1_31(closure_0.presences, closure_0.guild_id).forEach(outer1_33);
      const arr = outer1_31(closure_0.presences, closure_0.guild_id);
    }
    outer1_1(outer1_3[12]).flush("GUILD_MEMBERS_CHUNK");
  });
});
defineSimpleDispatch(["THREAD_MEMBER_LIST_UPDATE"], (arg0) => {
  let closure_0 = arg0;
  const Emitter = importDefault(566).Emitter;
  Emitter.batched(() => {
    outer1_27({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: closure_0.guild_id, threadId: closure_0.thread_id, members: closure_0.members });
    if (null != closure_0.presences) {
      const item = outer1_31(closure_0.presences, closure_0.guild_id).forEach(outer1_33);
      const arr = outer1_31(closure_0.presences, closure_0.guild_id);
    }
    outer1_1(outer1_3[12]).flush();
  });
});
defineSimpleDispatch(["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, user: guildId.user, avatar: guildId.avatar, avatarDecoration: guildId.avatar_decoration_data, roles: guildId.roles, nick: guildId.nick, premiumSince: guildId.premium_since, isPending: guildId.pending, joinedAt: guildId.joined_at, communicationDisabledUntil: guildId.communication_disabled_until, unusualDMActivityUntil: guildId.unusual_dm_activity_until, flags: guildId.flags, collectibles: require(1829) /* parseSkuIdFromServerData */.parseServerUserCollectibles(guildId.collectibles) };
  const obj2 = require(1829) /* parseSkuIdFromServerData */;
  obj.displayNameStyles = require(1860) /* wrapHue */.parseServerDisplayNameStyles(guildId.display_name_styles);
  dispatchOrResetSocket(obj);
});
const result14 = definePreloadableDispatch(["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId, type) => {
  dispatchOrResetSocket({ type, guildId: guildId.guild_id, role: guildId.role });
});
const result15 = definePreloadableDispatch(["GUILD_ROLE_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  dispatchOrResetSocket({ type: "GUILD_ROLE_DELETE", guildId: guildId.guild_id, roleId: guildId.role_id, version: guildId.version });
});
defineSimpleDispatch(["GUILD_EMOJIS_UPDATE"], (guildId) => {
  dispatchOrResetSocket({ type: "GUILD_EMOJIS_UPDATE", guildId: guildId.guild_id, emojis: guildId.emojis });
});
defineSimpleDispatch(["GUILD_STICKERS_UPDATE"], (guildId) => {
  dispatchOrResetSocket({ type: "GUILD_STICKERS_UPDATE", guildId: guildId.guild_id, stickers: guildId.stickers });
});
defineSimpleDispatch(["GUILD_INTEGRATIONS_UPDATE"], (guildId) => {
  dispatchOrResetSocket({ type: "GUILD_INTEGRATIONS_UPDATE", guildId: guildId.guild_id });
});
defineSimpleDispatch(["INTEGRATION_CREATE"], (application) => {
  dispatchOrResetSocket({ type: "INTEGRATION_CREATE", application: application.application, guildId: application.guild_id });
});
defineSimpleDispatch(["INTEGRATION_DELETE"], (applicationId) => {
  dispatchOrResetSocket({ type: "INTEGRATION_DELETE", applicationId: applicationId.application_id, guildId: applicationId.guild_id });
});
defineSimpleDispatch(["USER_UPDATE"], (user) => {
  dispatchOrResetSocket({ type: "CURRENT_USER_UPDATE", user });
});
defineSimpleDispatch(["USER_SETTINGS_PROTO_UPDATE"], (settings) => {
  let obj = require(1318) /* _createForOfIteratorHelperLoose */;
  const b64ToProtoWithTypeResult = obj.b64ToProtoWithType(settings.settings.type, settings.settings.proto);
  if (null != b64ToProtoWithTypeResult) {
    if ("string" === typeof b64ToProtoWithTypeResult) {
      const _Error = Error;
      throw Error("UserSettingsProto must not be a string");
    } else {
      obj = { type: "USER_SETTINGS_PROTO_UPDATE" };
      obj = { proto: b64ToProtoWithTypeResult, type: settings.settings.type };
      obj.settings = obj;
      obj.partial = settings.partial;
      dispatchOrResetSocket(obj);
    }
  }
});
defineSimpleDispatch(["USER_GUILD_SETTINGS_UPDATE"], (arg0) => {
  const items = [arg0];
  dispatchOrResetSocket({ type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: items });
});
defineSimpleDispatch(["USER_CONNECTIONS_UPDATE"], () => {
  dispatchOrResetSocket({ type: "USER_CONNECTIONS_UPDATE" });
});
defineSimpleDispatch(["USER_REQUIRED_ACTION_UPDATE"], (requiredAction) => {
  dispatchOrResetSocket({ type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: requiredAction.required_action });
});
defineSimpleDispatch(["USER_NOTE_UPDATE"], (arg0) => {
  const merged = Object.assign(arg0);
  dispatchOrResetSocket({ type: "USER_NOTE_UPDATE" });
});
defineSimpleDispatch(["RELATIONSHIP_ADD"], (id) => {
  let obj = { type: "RELATIONSHIP_ADD" };
  obj = { id: id.id, type: id.type, user: id.user, since: id.since, nickname: id.nickname };
  let flag = id.is_spam_request;
  if (!flag) {
    flag = false;
  }
  obj.isSpamRequest = flag;
  obj.isStrangerRequest = id.is_stranger_request || false;
  obj.userIgnored = id.user_ignored || false;
  ({ origin_application_id: obj2.originApplicationId, note: obj2.note } = id);
  obj.relationship = obj;
  obj.shouldNotify = true === id.should_notify;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["RELATIONSHIP_REMOVE"], (relationship) => {
  dispatchOrResetSocket({ type: "RELATIONSHIP_REMOVE", relationship });
});
defineSimpleDispatch(["RELATIONSHIP_UPDATE"], (id) => {
  let obj = { type: "RELATIONSHIP_UPDATE" };
  obj = { id: id.id, type: id.type, user: id.user, nickname: id.nickname, since: id.since };
  let flag = id.is_spam_request;
  if (!flag) {
    flag = false;
  }
  obj.isSpamRequest = flag;
  obj.isStrangerRequest = id.is_stranger_request || false;
  obj.userIgnored = id.user_ignored || false;
  ({ origin_application_id: obj2.originApplicationId, note: obj2.note } = id);
  obj.relationship = obj;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["GAME_RELATIONSHIP_ADD"], (id) => {
  dispatchOrResetSocket({ type: "GAME_RELATIONSHIP_ADD", gameRelationship: { id: id.id, applicationId: id.application_id, type: id.type, since: id.since, dmAccessType: id.dm_access_type, user: id.user } });
});
defineSimpleDispatch(["GAME_RELATIONSHIP_REMOVE"], (id) => {
  dispatchOrResetSocket({ type: "GAME_RELATIONSHIP_REMOVE", userId: id.id, applicationId: id.application_id });
});
defineSimpleDispatch(["PRESENCE_UPDATE"], (guild_id) => {
  dispatchPresence(transformPresence(guild_id, guild_id.guild_id));
});
defineSimpleDispatch(["PRESENCES_REPLACE"], (arr) => {
  dispatchOrResetSocket({ type: "PRESENCES_REPLACE", presences: transformPresences(arr, undefined) });
});
defineSimpleDispatch(["SESSIONS_REPLACE"], (arr) => {
  dispatchOrResetSocket({ type: "SESSIONS_REPLACE", sessions: convertSessions(arr) });
});
defineSimpleDispatch(["VOICE_STATE_UPDATE"], (arg0) => {
  const items = [arg0];
  dispatchVoiceStateUpdates(items);
});
defineSimpleDispatch(["VOICE_STATE_UPDATE_BATCH"], (voice_states) => {
  dispatchVoiceStateUpdates(voice_states.voice_states);
});
defineSimpleDispatch(["VOICE_SERVER_UPDATE"], (guildId) => {
  dispatchOrResetSocket({ type: "VOICE_SERVER_UPDATE", guildId: guildId.guild_id, channelId: guildId.channel_id, endpoint: guildId.endpoint, token: guildId.token });
});
defineSimpleDispatch(["CALL_CREATE"], (channelId) => {
  let obj = { type: "CALL_CREATE", channelId: channelId.channel_id, messageId: channelId.message_id, region: channelId.region, ongoingRings: channelId.ongoing_rings };
  dispatchOrResetSocket(obj);
  const voice_states = channelId.voice_states;
  if (null != voice_states) {
    obj = {
      type: "VOICE_STATE_UPDATES",
      voiceStates: voice_states.map((userId) => {
          const obj = { userId: userId.user_id, guildId: null, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf, selfVideo: tmp, suppress: userId.suppress, selfStream: tmp2 };
          const request_to_speak_timestamp = userId.request_to_speak_timestamp;
          let tmp3 = null;
          if (null != request_to_speak_timestamp) {
            tmp3 = request_to_speak_timestamp;
          }
          obj.requestToSpeakTimestamp = tmp3;
          const discoverable = userId.discoverable;
          obj.discoverable = null == discoverable || discoverable;
          obj.connectedAt = userId.connected_at;
          return obj;
        })
    };
    dispatchOrResetSocket(obj);
  }
});
defineSimpleDispatch(["CALL_UPDATE"], (channelId) => {
  dispatchOrResetSocket({ type: "CALL_UPDATE", channelId: channelId.channel_id, messageId: channelId.message_id, region: channelId.region, ongoingRings: channelId.ongoing_rings });
});
defineSimpleDispatch(["CALL_DELETE"], (channelId) => {
  dispatchOrResetSocket({ type: "CALL_DELETE", channelId: channelId.channel_id, unavailable: channelId.unavailable });
});
defineSimpleDispatch(["OAUTH2_TOKEN_CREATE"], (id) => {
  dispatchOrResetSocket({ type: "OAUTH2_TOKEN_CREATE", id: id.id, scopes: id.scopes, application: id.application });
});
defineSimpleDispatch(["OAUTH2_TOKEN_DELETE"], (id) => {
  dispatchOrResetSocket({ type: "OAUTH2_TOKEN_DELETE", id: id.id, applicationId: id.application_id });
});
defineSimpleDispatch(["OAUTH2_TOKEN_REVOKE"], (accessToken) => {
  dispatchOrResetSocket({ type: "OAUTH2_TOKEN_REVOKE", accessToken: accessToken.access_token });
});
defineSimpleDispatch(["RECENT_MENTION_DELETE"], (id) => {
  dispatchOrResetSocket({ type: "RECENT_MENTION_DELETE", id: id.message_id });
});
defineSimpleDispatch(["SAVED_MESSAGE_CREATE"], (body) => {
  const obj = { type: "SAVED_MESSAGE_CREATE", savedMessage: require(9569) /* savedMessageDataToClient */.savedMessageCreateObjectToClient(body) };
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["SAVED_MESSAGE_DELETE"], (channelId) => {
  const obj = { type: "SAVED_MESSAGE_DELETE", savedMessageData: require(9569) /* savedMessageDataToClient */.savedMessageDeleteObjectToClient(channelId) };
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["FRIEND_SUGGESTION_CREATE"], (suggestion) => {
  dispatchOrResetSocket({ type: "FRIEND_SUGGESTION_CREATE", suggestion });
});
defineSimpleDispatch(["FRIEND_SUGGESTION_DELETE"], (suggestedUserId) => {
  dispatchOrResetSocket({ type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: suggestedUserId.suggested_user_id });
});
defineSimpleDispatch(["WEBHOOKS_UPDATE"], (guildId) => {
  dispatchOrResetSocket({ type: "WEBHOOKS_UPDATE", guildId: guildId.guild_id, channelId: guildId.channel_id });
});
defineSimpleDispatch(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (channelId, type) => {
  dispatchOrResetSocket({ type, channelId: channelId.channel_id, messageId: channelId.message_id, userId: channelId.user_id, emoji: channelId.emoji, colors: channelId.burst_colors, reactionType: channelId.type, messageAuthorId: channelId.message_author_id });
});
defineSimpleDispatch(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (answer_id) => {
  let obj = {};
  let str = "MESSAGE_REACTION_REMOVE";
  if ("MESSAGE_POLL_VOTE_ADD" === arg1) {
    str = "MESSAGE_REACTION_ADD";
  }
  obj.type = str;
  ({ channel_id: obj.channelId, message_id: obj.messageId, user_id: obj.userId } = answer_id);
  obj = { id: answer_id.answer_id, name: "" };
  obj.emoji = obj;
  obj.reactionType = require(7005) /* ReactionTypes */.ReactionTypes.VOTE;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["MESSAGE_POLL_VOTE_ADD_MANY"], (channelId) => {
  const votes = channelId.votes;
  dispatchOrResetSocket({
    type: "MESSAGE_REACTION_ADD_MANY",
    channelId: channelId.channel_id,
    messageId: channelId.message_id,
    reactions: votes.map((answer_id) => {
      let obj = {};
      const merged = Object.assign(answer_id);
      obj = { id: answer_id.answer_id, name: "" };
      obj["emoji"] = obj;
      obj["reactionType"] = outer1_0(outer1_3[26]).ReactionTypes.VOTE;
      return obj;
    })
  });
});
defineSimpleDispatch(["MESSAGE_REACTION_REMOVE_ALL"], (channelId) => {
  dispatchOrResetSocket({ type: "MESSAGE_REACTION_REMOVE_ALL", channelId: channelId.channel_id, messageId: channelId.message_id });
});
defineSimpleDispatch(["MESSAGE_REACTION_REMOVE_EMOJI"], (channelId) => {
  dispatchOrResetSocket({ type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: channelId.channel_id, messageId: channelId.message_id, emoji: channelId.emoji });
});
defineSimpleDispatch(["MESSAGE_REACTION_ADD_MANY"], (channelId) => {
  dispatchOrResetSocket({ type: "MESSAGE_REACTION_ADD_MANY", channelId: channelId.channel_id, messageId: channelId.message_id, reactions: channelId.reactions });
});
defineSimpleDispatch(["PAYMENT_UPDATE"], (payment) => {
  dispatchOrResetSocket({ type: "PAYMENT_UPDATE", payment });
});
defineSimpleDispatch(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (entitlement, type) => {
  dispatchOrResetSocket({ type, entitlement });
});
defineSimpleDispatch(["USER_PAYMENT_SOURCES_UPDATE"], () => {
  if (obj.isUserSettingsOpen()) {
    const paymentSources = require(4451) /* _deletePaymentSource */.fetchPaymentSources();
    const obj2 = require(4451) /* _deletePaymentSource */;
    const subscriptionPlansBySKUs = importAll(5638).fetchSubscriptionPlansBySKUs(fetchedSKUIDs.getFetchedSKUIDs());
    const obj3 = importAll(5638);
  }
});
defineSimpleDispatch(["USER_SUBSCRIPTIONS_UPDATE"], () => {
  const currentUser = importAll(7976).fetchCurrentUser();
  const obj = importAll(7976);
  if (obj2.isUserSettingsOpen()) {
    const subscriptions = require(4451) /* _deletePaymentSource */.fetchSubscriptions();
    const obj3 = require(4451) /* _deletePaymentSource */;
  }
});
defineSimpleDispatch(["WISHLIST_ITEM_PURCHASED"], (recipientId) => {
  dispatchOrResetSocket({ type: "WISHLIST_ITEM_PURCHASED", recipientId: recipientId.recipient_id, skuId: recipientId.sku_id });
});
defineSimpleDispatch(["USER_BADGE_STATE_UPDATE"], (badge_id) => {
  const badge = require(8315) /* urlUserId */.fetchBadge(badge_id.badge_id);
});
defineSimpleDispatch(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (subscription_id) => {
  dispatchOrResetSocket({ type: "GUILD_BOOST_SLOT_CREATE", guildBoostSlot: _isNativeReflectConstruct.createFromServer(subscription_id, store2.getSubscriptionById(subscription_id.subscription_id)) });
});
defineSimpleDispatch(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (subscription_id) => {
  dispatchOrResetSocket({ type: "GUILD_BOOST_SLOT_UPDATE", guildBoostSlot: _isNativeReflectConstruct.createFromServer(subscription_id, store2.getSubscriptionById(subscription_id.subscription_id)) });
});
defineSimpleDispatch(["BILLING_POPUP_BRIDGE_CALLBACK"], (paymentSourceType) => {
  dispatchOrResetSocket({ type: "BILLING_POPUP_BRIDGE_CALLBACK", paymentSourceType: paymentSourceType.payment_source_type, state: paymentSourceType.state, path: paymentSourceType.path, query: paymentSourceType.query });
});
defineSimpleDispatch(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (loadId) => {
  dispatchOrResetSocket({ type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE", loadId: loadId.load_id, skuId: loadId.sku_id, skuSubscriptionPlanId: loadId.sku_subscription_plan_id });
});
defineSimpleDispatch(["USER_PAYMENT_CLIENT_ADD"], (arg0) => {
  const _require = arg0;
  const purchaseTokenHash = _require(4460).getPurchaseTokenHash();
  purchaseTokenHash.then((arg0) => {
    const purchase_token_hash = closure_0.purchase_token_hash;
    if (purchase_token_hash === arg0) {
      const obj = { type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: purchase_token_hash, expiresAt: closure_0.expires_at };
      outer1_27(obj);
    }
  });
});
defineSimpleDispatch(["GUILD_MEMBER_LIST_UPDATE"], (arg0) => {
  let closure_0 = arg0;
  const Emitter = importDefault(566).Emitter;
  Emitter.batched(() => {
    function handleItem(member) {
      if (null != member.member) {
        member = member.member;
        outer2_28(handleItem.guild_id, member.user, member);
        if (null != member.presence) {
          outer2_33(outer2_32(member.presence, handleItem.guild_id));
        }
      }
    }
    const ops = handleItem.ops;
    let item = ops.forEach((arg0) => {
      let items;
      let op;
      ({ op, items } = arg0);
      if ("SYNC" === op) {
        const item = items.forEach(handleItem);
      } else if ("UPDATE" === op) {
        handleItem(tmp);
      }
    });
    let obj = outer1_1(outer1_3[12]);
    obj.flush();
    obj = { type: "GUILD_MEMBER_LIST_UPDATE", guildId: handleItem.guild_id, id: handleItem.id, ops: handleItem.ops, groups: handleItem.groups, memberCount: handleItem.member_count, onlineCount: handleItem.online_count };
    outer1_27(obj);
  });
});
defineSimpleDispatch(["GIFT_CODE_UPDATE"], (uses) => {
  dispatchOrResetSocket({ type: "GIFT_CODE_UPDATE", uses: uses.uses, code: uses.code });
});
defineSimpleDispatch(["GIFT_CODE_CREATE"], (giftCode) => {
  dispatchOrResetSocket({ type: "GIFT_CODE_CREATE", giftCode });
});
defineSimpleDispatch(["LIBRARY_APPLICATION_UPDATE"], (libraryApplication) => {
  dispatchOrResetSocket({ type: "LIBRARY_APPLICATION_UPDATE", libraryApplication });
});
defineSimpleDispatch(["STREAM_CREATE"], (streamKey) => {
  dispatchOrResetSocket({ type: "STREAM_CREATE", streamKey: streamKey.stream_key, region: streamKey.region, viewerIds: streamKey.viewer_ids, rtcServerId: streamKey.rtc_server_id, rtcChannelId: streamKey.rtc_channel_id, paused: streamKey.paused });
});
defineSimpleDispatch(["STREAM_SERVER_UPDATE"], (streamKey) => {
  dispatchOrResetSocket({ type: "STREAM_SERVER_UPDATE", streamKey: streamKey.stream_key, endpoint: streamKey.endpoint, token: streamKey.token });
});
defineSimpleDispatch(["STREAM_UPDATE"], (streamKey) => {
  dispatchOrResetSocket({ type: "STREAM_UPDATE", streamKey: streamKey.stream_key, region: streamKey.region, viewerIds: streamKey.viewer_ids, paused: streamKey.paused });
});
defineSimpleDispatch(["STREAM_DELETE"], (streamKey) => {
  dispatchOrResetSocket({ type: "STREAM_DELETE", streamKey: streamKey.stream_key, unavailable: streamKey.unavailable, reason: streamKey.reason });
});
defineSimpleDispatch(["GENERIC_PUSH_NOTIFICATION_SENT"], (title) => {
  dispatchOrResetSocket({ type: "GENERIC_PUSH_NOTIFICATION_SENT", title: title.title, body: title.body, trackingType: title.tracking_type, icon: title.icon, route: title.route, tag: title.tag });
});
defineSimpleDispatch(["REACTION_NOTIFICATION_SENT"], (route) => {
  dispatchOrResetSocket({ type: "REACTION_NOTIFICATION_SENT", route: route.route, message: route.message, emoji: route.emoji, reactorUserId: route.reactor_user_id, title: route.title, body: route.body, trackingType: route.tracking_type, icon: route.icon });
});
defineSimpleDispatch(["NOTIFICATION_CENTER_ITEM_CREATE"], (item) => {
  dispatchOrResetSocket({ type: "NOTIFICATION_CENTER_ITEM_CREATE", item });
});
defineSimpleDispatch(["NOTIFICATION_CENTER_ITEM_DELETE"], (id) => {
  dispatchOrResetSocket({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: id.id });
});
defineSimpleDispatch(["NOTIFICATION_CENTER_ITEMS_ACK"], (id) => {
  const obj = { type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: null, optimistic: false };
  const items = [id.id];
  obj.ids = items;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (item_enum) => {
  dispatchOrResetSocket({ type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: item_enum.item_enum });
});
defineSimpleDispatch(["QUESTS_USER_STATUS_UPDATE"], (user_status) => {
  dispatchOrResetSocket({ type: "QUESTS_USER_STATUS_UPDATE", user_status: user_status.user_status });
});
defineSimpleDispatch(["QUESTS_USER_COMPLETION_UPDATE"], (quest_enrollment_blocked_until) => {
  dispatchOrResetSocket({ type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: quest_enrollment_blocked_until.quest_enrollment_blocked_until });
});
defineSimpleDispatch(["QUEST_PREVIEW_UPDATE"], (quest_id) => {
  dispatchOrResetSocket({ type: "QUEST_PREVIEW_UPDATE", quest_id: quest_id.quest_id });
});
defineSimpleDispatch(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (guildId, type) => {
  dispatchOrResetSocket({ type, guildId: guildId.guild_id });
});
defineSimpleDispatch(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (guildId) => {
  dispatchOrResetSocket({ type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: guildId.guild_id, version: guildId.version });
});
defineSimpleDispatch(["GUILD_JOIN_REQUEST_CREATE"], (request) => {
  dispatchOrResetSocket({ type: "GUILD_JOIN_REQUEST_CREATE", request: request.request, status: request.status, guildId: request.guild_id });
});
defineSimpleDispatch(["GUILD_JOIN_REQUEST_UPDATE"], (request) => {
  dispatchOrResetSocket({ type: "GUILD_JOIN_REQUEST_UPDATE", request: request.request, status: request.status, guildId: request.guild_id });
});
defineSimpleDispatch(["GUILD_JOIN_REQUEST_DELETE"], (id) => {
  dispatchOrResetSocket({ type: "GUILD_JOIN_REQUEST_DELETE", id: id.id, userId: id.user_id, guildId: id.guild_id });
});
defineSimpleDispatch(["INTERACTION_CREATE"], (id) => {
  dispatchOrResetSocket({ type: "INTERACTION_CREATE", interactionId: id.id, nonce: id.nonce });
});
defineSimpleDispatch(["INTERACTION_SUCCESS"], (id) => {
  dispatchOrResetSocket({ type: "INTERACTION_SUCCESS", interactionId: id.id, nonce: id.nonce });
});
defineSimpleDispatch(["INTERACTION_FAILURE"], (id) => {
  dispatchOrResetSocket({ type: "INTERACTION_FAILURE", interactionId: id.id, nonce: id.nonce, reasonCode: id.reason_code });
});
defineSimpleDispatch(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (choices) => {
  dispatchOrResetSocket({ type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: choices.choices, nonce: choices.nonce });
});
defineSimpleDispatch(["INTERACTION_MODAL_CREATE"], (id) => {
  const obj = { type: "INTERACTION_MODAL_CREATE", id: id.id, channelId: id.channel_id, customId: id.custom_id, application: id.application, title: id.title, components: require(4353) /* _createForOfIteratorHelperLoose */.transformComponents(id.components) };
  ({ nonce: obj.nonce, resolved: obj.resolved } = id);
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["INTERACTION_IFRAME_MODAL_CREATE"], (id) => {
  dispatchOrResetSocket({ type: "INTERACTION_IFRAME_MODAL_CREATE", id: id.id, channelId: id.channel_id, customId: id.custom_id, application: id.application, title: id.title, iframePath: id.iframe_path, modalSize: id.modal_size, nonce: id.nonce });
});
defineSimpleDispatch(["STAGE_INSTANCE_CREATE"], (instance) => {
  dispatchOrResetSocket({ type: "STAGE_INSTANCE_CREATE", instance });
});
defineSimpleDispatch(["STAGE_INSTANCE_UPDATE"], (instance) => {
  dispatchOrResetSocket({ type: "STAGE_INSTANCE_UPDATE", instance });
});
defineSimpleDispatch(["STAGE_INSTANCE_DELETE"], (instance) => {
  dispatchOrResetSocket({ type: "STAGE_INSTANCE_DELETE", instance });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_CREATE"], (guildScheduledEvent) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_UPDATE"], (guildScheduledEvent) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_DELETE"], (guildScheduledEvent) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (eventException) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (eventException) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (eventException) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (eventId) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: eventId.event_id });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_USER_ADD"], (userId) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_USER_ADD", userId: userId.user_id, guildId: userId.guild_id, guildEventId: userId.guild_scheduled_event_id, guildEventExceptionId: userId.guild_scheduled_event_exception_id, response: userId.response });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (userId) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_USER_REMOVE", userId: userId.user_id, guildId: userId.guild_id, guildEventId: userId.guild_scheduled_event_id, guildEventExceptionId: userId.guild_scheduled_event_exception_id, response: userId.response });
});
defineSimpleDispatch(["GUILD_DIRECTORY_ENTRY_CREATE"], (channelId) => {
  dispatchOrResetSocket({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: channelId.directory_channel_id, entry: channelId });
});
defineSimpleDispatch(["GUILD_DIRECTORY_ENTRY_UPDATE"], (channelId) => {
  dispatchOrResetSocket({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: channelId.directory_channel_id, entry: channelId });
});
defineSimpleDispatch(["GUILD_DIRECTORY_ENTRY_DELETE"], (channelId) => {
  dispatchOrResetSocket({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: channelId.directory_channel_id, guildId: channelId.entity_id });
});
defineSimpleDispatch(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (guildId) => {
  dispatchOrResetSocket({ type: "AUTO_MODERATION_MENTION_RAID_DETECTION", guildId: guildId.guild_id, decisionId: guildId.decision_id, suspiciousMentionActivityUntil: guildId.suspicious_mention_activity_until });
});
defineSimpleDispatch(["VOICE_CHANNEL_EFFECT_SEND"], (emoji) => {
  dispatchOrResetSocket({ type: "VOICE_CHANNEL_EFFECT_SEND", emoji: emoji.emoji, channelId: emoji.channel_id, userId: emoji.user_id, animationType: emoji.animation_type, animationId: emoji.animation_id, soundId: emoji.sound_id, soundVolume: emoji.sound_volume });
});
defineSimpleDispatch(["CLIPS_REMOTE_TRIGGER"], (userId) => {
  const obj = { type: "CLIPS_REMOTE_TRIGGER", userId: userId.user_id, applicationId: userId.application_id };
  const party_id = userId.party_id;
  let tmp2 = null;
  if (null != party_id) {
    tmp2 = party_id;
  }
  obj.partyId = tmp2;
  obj.remoteClipId = userId.remote_clip_id;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["GUILD_SOUNDBOARD_SOUND_CREATE"], (guildId) => {
  let obj = { type: "GUILD_SOUNDBOARD_SOUND_CREATE" };
  obj = { guildId: guildId.guild_id, name: guildId.name, soundId: guildId.sound_id, user: new closure_8(guildId.user) };
  ({ user_id: obj2.userId, volume: obj2.volume, emoji_id: obj2.emojiId, emoji_name: obj2.emojiName, available: obj2.available } = guildId);
  obj.sound = obj;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (guildId) => {
  let obj = { type: "GUILD_SOUNDBOARD_SOUND_UPDATE" };
  obj = { guildId: guildId.guild_id, name: guildId.name, soundId: guildId.sound_id, user: new closure_8(guildId.user) };
  ({ user_id: obj2.userId, volume: obj2.volume, emoji_id: obj2.emojiId, emoji_name: obj2.emojiName, available: obj2.available } = guildId);
  obj.sound = obj;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["GUILD_SOUNDBOARD_SOUND_DELETE"], (guildId) => {
  dispatchOrResetSocket({ type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: guildId.guild_id, soundId: guildId.sound_id });
});
defineSimpleDispatch(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (guildId) => {
  let closure_0 = guildId;
  const soundboard_sounds = guildId.soundboard_sounds;
  dispatchOrResetSocket({ type: "GUILD_SOUNDBOARD_SOUNDS_UPDATE", guildId: guildId.guild_id, soundboardSounds: soundboard_sounds.map((name) => ({ name: name.name, soundId: name.sound_id, emojiName: name.emoji_name, emojiId: name.emoji_id, userId: name.user_id, volume: name.volume, available: name.available, guildId: guildId.guild_id })) });
});
definePreloadableDispatch(["EMBEDDED_ACTIVITY_UPDATE_V2"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (application_id) => {
  let obj = { type: "EMBEDDED_ACTIVITY_UPDATE_V2" };
  obj = { application_id: application_id.application_id, launch_id: application_id.launch_id, composite_instance_id: application_id.composite_instance_id, location: application_id.location };
  let participants = application_id.participants;
  if (null == participants) {
    participants = [];
  }
  obj.participants = participants;
  obj.content_classification = application_id.content_classification;
  obj.instance = obj;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["AUTH_SESSION_CHANGE"], (authSessionIdHash) => {
  dispatchOrResetSocket({ type: "AUTH_SESSION_CHANGE", authSessionIdHash: authSessionIdHash.auth_session_id_hash });
});
defineSimpleDispatch(["USER_CONNECTIONS_LINK_CALLBACK"], (provider) => {
  dispatchOrResetSocket({ type: "USER_CONNECTIONS_LINK_CALLBACK", provider: provider.provider, callbackCode: provider.callback_code, callbackState: provider.callback_state });
});
defineSimpleDispatch(["USER_CONNECTIONS_CALLBACK"], (provider) => {
  dispatchOrResetSocket({ type: "USER_CONNECTIONS_CALLBACK", provider: provider.provider, code: provider.code, state: provider.state, openid_params: provider.openid_params });
});
defineSimpleDispatch(["DELETED_ENTITY_IDS"], (arg0) => {
  const merged = Object.assign(arg0);
  dispatchOrResetSocket({ type: "DELETED_ENTITY_IDS" });
});
definePreloadableDispatch(["CHANNEL_SYNC"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guild_id) => {
  if (!guild_id.integrity_check) {
    const channels = guild_id.channels;
    const item = channels.forEach((arg0) => {
      outer1_18.add(arg0);
    });
  }
  dispatchOrResetSocket({ type: "CHANNEL_SYNC", guild_id: guild_id.guild_id, channels: guild_id.channels, integrity_check: guild_id.integrity_check });
});
defineSimpleDispatch(["CONSOLE_COMMAND_UPDATE"], (id) => {
  dispatchOrResetSocket({ type: "CONSOLE_COMMAND_UPDATE", id: id.id, result: id.result, error: id.error });
});
definePreloadableDispatch(["PASSIVE_UPDATE_V2"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  let updated_channels;
  let updated_voice_states;
  ({ updated_channels, updated_voice_states } = guildId);
  dispatchOrResetSocket({
    type: "PASSIVE_UPDATE_V2",
    guildId: guildId.guild_id,
    members: guildId.updated_members,
    channels: updated_channels.map((id) => ({ id: id.id, lastMessageId: id.last_message_id, lastPinTimestamp: id.last_pin_timestamp })),
    voiceStates: updated_voice_states.map((channelId) => {
      let discoverable;
      const obj = { channelId: channelId.channel_id, deaf: tmp, mute: tmp2 };
      const request_to_speak_timestamp = channelId.request_to_speak_timestamp;
      let tmp3 = null;
      if (null != request_to_speak_timestamp) {
        tmp3 = request_to_speak_timestamp;
      }
      obj.requestToSpeakTimestamp = tmp3;
      obj.selfDeaf = channelId.self_deaf || false;
      obj.selfMute = channelId.self_mute || false;
      obj.selfStream = channelId.self_stream || false;
      obj.selfVideo = channelId.self_video || false;
      ({ session_id: obj.sessionId, suppress: obj.suppress, user_id: obj.userId, discoverable } = channelId);
      obj.discoverable = null == discoverable || discoverable;
      obj.connectedAt = channelId.connected_at;
      return obj;
    }),
    removedVoiceStateUsers: guildId.removed_voice_states
  });
});
defineSimpleDispatch(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (guildId) => {
  dispatchOrResetSocket({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS", guildId: guildId.guild_id, restrictions: guildId.restrictions });
});
defineSimpleDispatch(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (userTrialOfferId) => {
  dispatchOrResetSocket({ type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE", userTrialOfferId: userTrialOfferId.user_trial_offer_id, recipientId: userTrialOfferId.recipient_id });
});
defineSimpleDispatch(["LAST_MESSAGES"], (guildId) => {
  dispatchOrResetSocket({ type: "MESSAGE_PREVIEWS_LOADED", guildId: guildId.guild_id, messages: guildId.messages });
});
defineSimpleDispatch(["AUTHENTICATOR_UPDATE"], (credential) => {
  dispatchOrResetSocket({ type: "AUTHENTICATOR_UPDATE", credential });
});
defineSimpleDispatch(["AUTHENTICATOR_CREATE"], (credential) => {
  dispatchOrResetSocket({ type: "AUTHENTICATOR_CREATE", credential });
});
defineSimpleDispatch(["AUTHENTICATOR_DELETE"], (credential) => {
  dispatchOrResetSocket({ type: "AUTHENTICATOR_DELETE", credential });
});
defineSimpleDispatch(["NOTIFICATION_SETTINGS_UPDATE"], (flags) => {
  dispatchOrResetSocket({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: flags.flags } });
});
defineSimpleDispatch(["CONVERSATION_SUMMARY_UPDATE"], (arg0) => {
  const merged = Object.assign(arg0);
  dispatchOrResetSocket({ type: "CONVERSATION_SUMMARY_UPDATE" });
});
defineSimpleDispatch(["PREMIUM_MARKETING_PREVIEW"], (data) => {
  dispatchOrResetSocket({ type: "PREMIUM_MARKETING_PREVIEW", data });
});
defineSimpleDispatch(["USER_APPLICATION_UPDATE"], (applicationId) => {
  dispatchOrResetSocket({ type: "USER_APPLICATION_UPDATE", applicationId: applicationId.application_id });
});
defineSimpleDispatch(["USER_APPLICATION_REMOVE"], (applicationId) => {
  dispatchOrResetSocket({ type: "USER_APPLICATION_REMOVE", applicationId: applicationId.application_id });
});
defineSimpleDispatch(["DM_SETTINGS_UPSELL_SHOW"], (guildId) => {
  dispatchOrResetSocket({ type: "DM_SETTINGS_UPSELL_SHOW", guildId: guildId.guild_id });
});
defineSimpleDispatch(["CONTENT_INVENTORY_INBOX_STALE"], (refreshAfterMs) => {
  dispatchOrResetSocket({ type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: refreshAfterMs.refresh_after_ms });
});
defineSimpleDispatch(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (balance) => {
  dispatchOrResetSocket({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: balance.balance });
});
defineSimpleDispatch(["WALLET_BALANCE_UPDATE"], (paymentSourceId) => {
  dispatchOrResetSocket({ type: "WALLET_BALANCE_UPDATE", paymentSourceId: paymentSourceId.payment_source_id, balance: paymentSourceId.balance, currency: paymentSourceId.currency });
});
defineSimpleDispatch(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (guildId, type) => {
  dispatchOrResetSocket({ type, guildId: guildId.guild_id, entitlements: guildId.entitlements });
});
defineSimpleDispatch(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (guildId, type) => {
  dispatchOrResetSocket({ type, guildId: guildId.guild_id, gameServer: guildId.game_server });
});
defineSimpleDispatch(["GAME_SERVER_DELETE"], (guildId, type) => {
  dispatchOrResetSocket({ type, guildId: guildId.guild_id, gameServerId: guildId.game_server_id });
});
defineSimpleDispatch(["GUILD_APPLIED_BOOSTS_UPDATE"], (guildId, type) => {
  dispatchOrResetSocket({ type, guildId: guildId.guild_id });
});
defineSimpleDispatch(["USER_APPLICATION_IDENTITY_UPDATE"], (user_id, type) => {
  dispatchOrResetSocket({ type, user_id: user_id.user_id, application_id: user_id.application_id, username: user_id.username, avatar_hash: user_id.avatar_hash, metadata: user_id.metadata });
});
defineSimpleDispatch(["USER_APPLICATION_IDENTITY_REMOVE"], (user_id, type) => {
  dispatchOrResetSocket({ type, user_id: user_id.user_id, application_id: user_id.application_id });
});
defineSimpleDispatch(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (interactionId) => {
  dispatchOrResetSocket({ type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE", interactionId: interactionId.interaction_id, applicationId: interactionId.application_id, skuId: interactionId.sku_id, recipientId: interactionId.recipient_id, eligible: interactionId.eligible, ineligibleReason: interactionId.ineligible_reason });
});
defineSimpleDispatch(["GUILD_ROOM_CONNECT"], (body, type) => {
  const obj = { type, room: require(12737) /* mapGuildRoomBaseObjectFields */.serverGuildRoomToClient(body) };
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["GUILD_ROOM_DISCONNECT"], (userId, type) => {
  dispatchOrResetSocket({ type, userId: userId.user_id, roomId: userId.room_id });
});
defineSimpleDispatch(["GUILD_ROOM_UPDATE"], (body, type) => {
  const obj = { type, room: require(12737) /* mapGuildRoomBaseObjectFields */.serverGuildRoomToClient(body) };
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["HAVEN_CONNECT"], (roomId, type) => {
  const obj = { type, room: require(12739) /* parseParticipant */.parseRoom(roomId) };
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["HAVEN_DISCONNECT"], (userId, type) => {
  dispatchOrResetSocket({ type, userId: userId.user_id, roomId: userId.room_id });
});
defineSimpleDispatch(["HAVEN_UPDATE"], (roomId, type) => {
  const obj = { type, room: require(12739) /* parseParticipant */.parseRoom(roomId) };
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE"], (gameApplicationIds, type) => {
  dispatchOrResetSocket({ type, gameApplicationIds: gameApplicationIds.game_application_ids, guildId: gameApplicationIds.guild_id });
});
defineSimpleDispatch(["MESSAGE_REQUEST_NOTIFICATION_SENT"], (triggeringUserId) => {
  dispatchOrResetSocket({ type: "MESSAGE_REQUEST_NOTIFICATION_SENT", triggeringUserId: triggeringUserId.triggering_user_id, numMutualGuilds: triggeringUserId.num_mutual_guilds });
});
require("_isNativeReflectConstruct").fileFinishedImporting("modules/gateway/dispatchSocketMessage.tsx");

export default function getDispatchHandler(type) {
  return table[type];
};
