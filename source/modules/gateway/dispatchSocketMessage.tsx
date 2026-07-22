// Module ID: 12493
// Function ID: 95437
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 12493 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
          tmp8 = timestamps.type !== constants.LISTENING;
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
        let tmp2 = closure_28;
        let tmp3 = closure_28(value.guild_id, value.member.user, value.member);
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
      let tmp5 = closure_13;
      obj.oldChannelId = closure_13.getUserVoiceChannelId(value.guild_id, value.user_id);
      obj.connectedAt = value.connected_at;
      let arr = items.push(obj);
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  dispatchOrResetSocket({ type: "VOICE_STATE_UPDATES", voiceStates: items });
}
function dispatchOrResetSocket(arg0) {
  const arg1 = arg0;
  const obj = importDefault(dependencyMap[20]);
  importDefault(dependencyMap[20]).dispatch(arg0).catch((error) => {
    closure_17.error("dispatchOrResetSocket error during " + error.type + ":", error);
    const socket = error(closure_3[13]).socket;
    const result = socket.resetSocketOnDispatchError({ error, action: error.type });
  });
}
function dispatchGuildMemberAdd(guild_id, author, member) {
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
  member = member.getMember(guild_id, author.id);
  let obj = author(dependencyMap[23]);
  const result = obj.parseServerUserCollectibles(collectibles);
  const result1 = author(dependencyMap[24]).parseServerDisplayNameStyles(display_name_styles);
  let isEqualResult = null != member && member.nick === nick && member.avatar === avatar;
  if (isEqualResult) {
    isEqualResult = importDefault(dependencyMap[21]).isEqual(member.roles, roles);
    const obj3 = importDefault(dependencyMap[21]);
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
    isEqualResult = author(dependencyMap[36]).isEqualAvatarDecoration(tmp9, tmp10);
    const obj4 = author(dependencyMap[36]);
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
    isEqualResult = importDefault(dependencyMap[21]).isEqual(tmp15, tmp16);
    const obj5 = importDefault(dependencyMap[21]);
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
    isEqualResult = importDefault(dependencyMap[21]).isEqual(tmp19, tmp20);
    const obj6 = importDefault(dependencyMap[21]);
  }
  if (!isEqualResult) {
    obj = { type: "GUILD_MEMBER_ADD", guildId: guild_id, user: author, roles, nick, avatar, avatarDecoration: avatar_decoration_data, premiumSince: premium_since, isPending: pending, joinedAt: joined_at, communicationDisabledUntil: communication_disabled_until, unusualDMActivityUntil: unusual_dm_activity_until, flags, collectibles: result, displayNameStyles: result1 };
    dispatchOrResetSocket(obj);
  }
}
function dispatchMessageMembers(author) {
  let guild_id;
  let member;
  let mentions;
  ({ member, mentions, guild_id } = author);
  const arg1 = guild_id;
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
          delete r4.member;
          callback(guild_id, member, member.member);
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
    obj.activities = closure_25(activities);
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
  return arr.map((arg0) => callback(arg0, arg1));
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
  const tmpResult = importDefault(dependencyMap[37])(activities, hidden_activities);
  const tmp = importDefault(dependencyMap[37]);
  return { user: activities.user, status: activities.status, clientStatus: activities.client_status, activities: populateCountdownFlagToActivities(tmpResult.activities), hiddenActivities: tmpResult.hiddenActivities, guildId: guild_id, processedAtTimestamp: activities.processed_at_timestamp };
}
function dispatchPresence(arg0) {
  importDefaultResult4.add(arg0);
}
let closure_4 = [false];
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = arg1(dependencyMap[1]).createChannelRecordFromServer;
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const ChannelLoader = arg1(dependencyMap[4]).ChannelLoader;
let closure_11 = importDefault(dependencyMap[5]);
let closure_12 = importDefault(dependencyMap[6]);
let closure_13 = importDefault(dependencyMap[7]);
let closure_14 = importDefault(dependencyMap[8]);
let closure_15 = importDefault(dependencyMap[9]);
const ActivityTypes = arg1(dependencyMap[10]).ActivityTypes;
let importDefaultResult = importDefault(dependencyMap[11]);
importDefaultResult = new importDefaultResult("ConnectionStore");
let importDefaultResult1 = importDefault(dependencyMap[12]);
importDefaultResult1 = new importDefaultResult1(arg1(dependencyMap[13]).socket, (arg0, id) => {
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
let importDefaultResult2 = importDefault(dependencyMap[12]);
importDefaultResult2 = new importDefaultResult2(arg1(dependencyMap[13]).socket, (arg0, guildId) => {
  let tmp = arg0;
  if (null == arg0) {
    let obj = { type: "SOUNDBOARD_SOUNDS_RECEIVED", updates: [] };
    tmp = obj;
  }
  const updates = tmp.updates;
  obj = { guildId: guildId.guild_id, sounds: soundboard_sounds.map((name) => ({ name: name.name, soundId: name.sound_id, emojiName: name.emoji_name, emojiId: name.emoji_id, userId: name.user_id, volume: name.volume, available: name.available, guildId: arg1.guild_id })) };
  const soundboard_sounds = guildId.soundboard_sounds;
  updates.push(obj);
  return tmp;
}, (arg0) => "SOUNDBOARD_SOUNDS" !== arg0);
let importDefaultResult3 = importDefault(dependencyMap[12]);
importDefaultResult3 = new importDefaultResult3(arg1(dependencyMap[13]).socket, (arg0, arg1) => {
  let tmp = arg0;
  if (null == arg0) {
    const obj = { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] };
    tmp = obj;
  }
  const chunks = tmp.chunks;
  chunks.push(arg1);
  return tmp;
}, (arg0) => "GUILD_MEMBERS_CHUNK" !== arg0);
let importDefaultResult4 = importDefault(dependencyMap[12]);
importDefaultResult4 = new importDefaultResult4(arg1(dependencyMap[13]).socket, (arg0, arg1) => {
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
const result = definePreloadableDispatch(["Array"], (data_mode) => {
  let guildIds = null;
  if ("full" !== data_mode.data_mode) {
    const items = [data_mode.id];
    guildIds = ChannelLoader.loadGuildIds(items);
  }
  return guildIds;
}, (arg0) => {
  const arg1 = arg0;
  const initialGuild = importDefault(dependencyMap[14]).initialGuild;
  initialGuild.measure(() => {
    const Emitter = callback(closure_3[15]).Emitter;
    Emitter.batched(() => {
      let obj = callback(closure_3[16]);
      const hydrateInitialGuildResult = obj.hydrateInitialGuild(hydrateInitialGuildResult, hydrateInitialGuildResult(closure_3[13]).socket.identifyStartTime);
      if (null != currentUser.getCurrentUser()) {
        obj = { type: "GUILD_CREATE", guild: hydrateInitialGuildResult };
        callback2(obj);
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
        callback2(obj);
        const _HermesInternal = HermesInternal;
        closure_17.log("Dispatched INITIAL_GUILD " + hydrateInitialGuildResult.id);
      }
    });
  });
});
defineSimpleDispatch([true], (arg0) => {
  const arg1 = arg0;
  const readySupplemental = importDefault(dependencyMap[14]).readySupplemental;
  readySupplemental.measure(() => {
    const Emitter = callback(closure_3[15]).Emitter;
    Emitter.batched(() => {
      const hydrateReadySupplemental = callback(items[14]).hydrateReadySupplemental;
      const measureResult = hydrateReadySupplemental.measure(() => callback(items[16]).hydrateReadySupplementalPayload(found, found(items[13]).socket.identifyStartTime));
      let found = measureResult;
      const guilds = measureResult.guilds;
      found = guilds.filter((unavailable) => true !== unavailable.unavailable);
      const item = found.forEach((presences) => {
        presences = presences.presences;
        if (!presences) {
          presences = [];
        }
        presences.presences = closure_31(presences, presences.id);
      });
      let presences = found.presences;
      if (null == presences) {
        presences = [];
      }
      const callback = closure_31(presences, undefined);
      let prop = found.lazy_private_channels;
      if (null == prop) {
        prop = [];
      }
      let closure_2 = prop.map((arg0) => callback2(arg0));
      const dispatchReadySupplemental = callback(items[14]).dispatchReadySupplemental;
      dispatchReadySupplemental.measure(() => {
        callback3({ type: "CONNECTION_OPEN_SUPPLEMENTAL", guilds: found, presences: closure_1, lazyPrivateChannels: closure_2 });
      });
      const items = [];
      const item1 = found.forEach((voice_states) => {
        const found = voice_states;
        voice_states = voice_states.voice_states;
        const item = voice_states.forEach((userId) => {
          const obj = { userId: userId.user_id, guildId: userId.id, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf };
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
          const arr = arr.push(obj);
        });
      });
      callback2({ voiceStates: items });
      const localVoiceState = found(items[13]).localVoiceState;
      localVoiceState.update();
    });
  });
  const timerId = setTimeout(() => {
    callback2({ type: "POST_CONNECTION_OPEN" });
  }, 2000);
});
const result1 = definePreloadableDispatch(["<string:26535168>"], (guilds) => {
  guilds = guilds.guilds;
  const result = importAll(dependencyMap[16]).preloadReadyPayloadData();
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
  const obj = importAll(dependencyMap[16]);
  return Promise.all(items).then((arg0) => {
    let tmp;
    [tmp] = arg0;
    return tmp;
  });
}, (user) => {
  const arg1 = user;
  const importDefault = arg2;
  if (user.user.bot) {
    const obj = { type: "LOGOUT" };
    dispatchOrResetSocket(obj);
  } else {
    const ready = importDefault(dependencyMap[14]).ready;
    ready.measure(() => {
      const Emitter = arg2(closure_3[15]).Emitter;
      Emitter.batched(() => {
        const hydrateReady = callback(closure_3[14]).hydrateReady;
        const measureResult = hydrateReady.measure(() => callback(closure_3[16]).hydrateReadyPayloadPrioritized(lib, lib(closure_3[13]).socket.identifyStartTime, closure_1));
        let lib = measureResult;
        const private_channels = measureResult.private_channels;
        lib = private_channels.map((arg0) => callback2(arg0));
        const guilds = lib.guilds;
        const found = guilds.filter((unavailable) => true === unavailable.unavailable && true !== unavailable.geo_restricted);
        const callback = found.map((id) => id.id);
        const guilds1 = lib.guilds;
        let closure_2 = guilds1.filter((unavailable) => true !== unavailable.unavailable);
        const guilds2 = lib.guilds;
        closure_3 = guilds2.filter((geo_restricted) => true === geo_restricted.geo_restricted);
        let result;
        if (null != lib.user_settings_proto) {
          let obj = lib(closure_3[17]);
          result = obj.b64ToPreloadedUserSettingsProto(lib.user_settings_proto);
        }
        callback(closure_3[18])("AllGatewayConnectionStores", () => lib(closure_3[19]));
        const dispatchReady = callback(closure_3[14]).dispatchReady;
        dispatchReady.measure(() => {
          let obj = { type: "CONNECTION_OPEN", sessionId: lib.session_id, authSessionIdHash: lib.auth_session_id_hash, staticAuthSessionId: lib.static_client_session_id, user: lib.user, users: lib.users, guilds: closure_2, initialPrivateChannels: lib, unavailableGuilds: closure_1, readState: lib.read_state, userGuildSettings: lib.user_guild_settings, tutorial: lib.tutorial };
          let relationships = lib.relationships;
          if (null == relationships) {
            relationships = [];
          }
          obj.relationships = relationships;
          obj.gameRelationships = lib.game_relationships;
          obj.friendSuggestionCount = lib.friend_suggestion_count;
          obj.analyticsToken = lib.analytics_token;
          obj.experiments = lib.experiments;
          obj.connectedAccounts = lib.connected_accounts;
          obj.guildExperiments = lib.guild_experiments;
          const apex_experiments = lib.apex_experiments;
          let tmp2;
          if (null != apex_experiments) {
            tmp2 = apex_experiments;
          }
          obj.apexExperiments = tmp2;
          obj.requiredAction = lib.required_action;
          obj.consents = lib.consents;
          let sessions = lib.sessions;
          if (null == sessions) {
            sessions = [];
          }
          obj.sessions = closure_30(sessions);
          obj.pendingPayments = lib.pending_payments;
          const country_code = lib.country_code;
          let tmp4;
          if (null != country_code) {
            tmp4 = country_code;
          }
          obj.countryCode = tmp4;
          let guild_join_requests = lib.guild_join_requests;
          if (null == guild_join_requests) {
            guild_join_requests = [];
          }
          obj.guildJoinRequests = guild_join_requests;
          obj.userSettingsProto = result;
          obj.apiCodeVersion = lib.api_code_version;
          obj.auth = lib.auth;
          obj = { flags: lib.notification_settings.flags };
          obj.notificationSettings = obj;
          obj.geoRestrictedGuilds = closure_3;
          obj.explicitContentScanVersion = lib.explicit_content_scan_version;
          obj.failedStates = lib.failed_states;
          const linked_users = lib.linked_users;
          let tmp5;
          if (null != linked_users) {
            tmp5 = linked_users;
          }
          obj.linkedUsers = tmp5;
          const regional_feature_config = lib.regional_feature_config;
          let tmp6;
          if (null != regional_feature_config) {
            tmp6 = regional_feature_config;
          }
          obj.regionalFeatureConfig = tmp6;
          closure_27(obj);
        });
        if (null != lib.auth_token) {
          obj = { type: "UPDATE_TOKEN", token: lib.auth_token, userId: lib.user.id };
          callback2(obj);
        }
        if (null != lib.ad_personalization_toggles_disabled) {
          obj = { type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED", disabled: lib.ad_personalization_toggles_disabled };
          callback2(obj);
        }
        const localPresenceState = lib(closure_3[13]).localPresenceState;
        localPresenceState.update();
        const localVoiceState = lib(closure_3[13]).localVoiceState;
        localVoiceState.update();
      });
    });
  }
});
defineSimpleDispatch([true], (apex_experiments) => {
  const obj = { type: "CONNECTION_OPEN_STATE_UPDATE" };
  apex_experiments = apex_experiments.apex_experiments;
  let tmp2;
  if (null != apex_experiments) {
    tmp2 = apex_experiments;
  }
  obj.apexExperiments = tmp2;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch([true], (experimentName) => {
  let obj = importDefault(dependencyMap[20]);
  obj = { type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE", experimentName: experimentName.experiment_name, variantId: experimentName.variant_id };
  obj.dispatch(obj);
});
defineSimpleDispatch([-0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002353670454037946], (experimentName) => {
  let obj = importDefault(dependencyMap[20]);
  obj = { type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: experimentName.experiment_name };
  obj.dispatch(obj);
});
defineSimpleDispatch(["<string:29484544>"], () => {
  const localPresenceState = arg1(dependencyMap[13]).localPresenceState;
  localPresenceState.forceUpdate();
  const localVoiceState = arg1(dependencyMap[13]).localVoiceState;
  localVoiceState.forceUpdate();
  dispatchOrResetSocket({ type: "CONNECTION_RESUMED" });
});
defineSimpleDispatch([0.4], (guildId) => {
  if (null != guildId.member) {
    dispatchGuildMemberAdd(guildId.guild_id, guildId.member.user, guildId.member);
  }
  dispatchOrResetSocket({ type: "TYPING_START", guildId: guildId.guild_id, channelId: guildId.channel_id, userId: guildId.user_id });
});
defineSimpleDispatch([true], (ongoingRings) => {
  dispatchOrResetSocket({ type: "GUILD_RING_START", ongoingRings: ongoingRings.ongoing_rings, channelId: ongoingRings.channel_id, guildId: ongoingRings.guild_id });
});
defineSimpleDispatch([], (ringing) => {
  dispatchOrResetSocket({ type: "GUILD_RING_STOP", ringing: ringing.ringing, channelId: ringing.channel_id, guildId: ringing.guild_id });
});
defineSimpleDispatch(["<string:3972844748>"], (userId) => {
  dispatchOrResetSocket({ type: "ACTIVITY_START", userId: userId.user_id, activity: userId.activity });
});
defineSimpleDispatch(["accessibilityRole"], (actionType) => {
  dispatchOrResetSocket({ type: "ACTIVITY_USER_ACTION", actionType: actionType.action_type, user: actionType.user, applicationId: actionType.application_id, channelId: actionType.channel_id, messageId: actionType.message_id });
});
const result2 = definePreloadableDispatch([], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (author) => {
  dispatchMessageMembers(author);
  if (null != author.author) {
    const obj = { y: null, CHANNEL_OVERWRITE_UPDATE: true, y: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZl", MWK: null, y: "84ba0e9777eebc421cca049a4fcf9730", playbackHeartbeatTime: "fi.messages.84ba0e9777eebc421cca049a4fcf9730.compiled.messages" };
    ({ guild_id: obj.guildId, channel_id: obj.channelId } = author);
    obj.message = author;
    dispatchOrResetSocket(obj);
  }
});
const result3 = definePreloadableDispatch([0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000039295884284670765], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  dispatchMessageMembers(guildId);
  dispatchOrResetSocket({ type: "MESSAGE_UPDATE", guildId: guildId.guild_id, message: guildId });
});
const result4 = definePreloadableDispatch(["OAUTH2_TOKEN_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  dispatchOrResetSocket({ type: "MESSAGE_DELETE", guildId: guildId.guild_id, id: guildId.id, channelId: guildId.channel_id });
});
const result5 = definePreloadableDispatch([false], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  dispatchOrResetSocket({ type: "MESSAGE_DELETE_BULK", guildId: guildId.guild_id, ids: guildId.ids, channelId: guildId.channel_id });
});
const result6 = definePreloadableDispatch([false], (channel_id) => ChannelLoader.loadGuildFromChannelId(channel_id.channel_id), (channelId) => {
  dispatchOrResetSocket({ type: "MESSAGE_ACK", channelId: channelId.channel_id, messageId: channelId.message_id, manual: channelId.manual, newMentionCount: channelId.mention_count, version: channelId.version });
});
defineSimpleDispatch(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (id) => {
  dispatchOrResetSocket({ type: "GUILD_FEATURE_ACK", id: id.resource_id, ackType: id.ack_type, ackedId: id.entity_id });
});
defineSimpleDispatch([null], (ackType) => {
  dispatchOrResetSocket({ type: "USER_NON_CHANNEL_ACK", ackType: ackType.ack_type, ackedId: ackType.entity_id });
});
const result7 = definePreloadableDispatch(["<string:1090519331>"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (channelId) => {
  dispatchOrResetSocket({ type: "CHANNEL_PINS_ACK", channelId: channelId.channel_id, timestamp: channelId.timestamp, version: channelId.version });
});
const result8 = definePreloadableDispatch([], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (channelId) => {
  dispatchOrResetSocket({ type: "CHANNEL_PINS_UPDATE", channelId: channelId.channel_id, lastPinTimestamp: channelId.last_pin_timestamp });
});
const result9 = definePreloadableDispatch([], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (arg0, type) => {
  dispatchOrResetSocket({ type, channel: callback2(arg0) });
});
defineSimpleDispatch([null], (id, type) => {
  dispatchOrResetSocket({ type, id: id.id, guildId: id.guild_id, status: id.status });
});
defineSimpleDispatch([], (id, type) => {
  const obj = { type, id: id.id, guildId: id.guild_id };
  const voice_start_time = id.voice_start_time;
  let tmp2;
  if (null != voice_start_time) {
    tmp2 = voice_start_time;
  }
  obj.voiceStartTime = tmp2;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch([-1337917436], (guildId, type) => {
  const channels = guildId.channels;
  dispatchOrResetSocket({ type, guildId: guildId.guild_id, channels: channels.map((id) => ({ id: id.id, status: id.status, voiceStartTime: id.voice_start_time })) });
});
defineSimpleDispatch([], (guildId, type) => {
  dispatchOrResetSocket({ type, guildId: guildId.guild_id, channelId: guildId.channel_id, online: guildId.presence_count, total: guildId.member_count });
});
const result10 = definePreloadableDispatch([], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (arg0) => {
  importDefaultResult1.add(arg0);
});
const result11 = definePreloadableDispatch([0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017082380665173827, "STREAM_DELETE", "GENERIC_PUSH_NOTIFICATION_SENT"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (isNewlyCreated, type) => {
  dispatchOrResetSocket({ type, isNewlyCreated: isNewlyCreated.newly_created, channel: callback2(callback(isNewlyCreated, closure_4)) });
});
const result12 = definePreloadableDispatch(["<string:1093959761>"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  const obj = {
    type: "THREAD_LIST_SYNC",
    guildId: guildId.guild_id,
    threads: threads.map((parent_id) => {
      const channel = channel.getChannel(parent_id.parent_id);
      if (null != channel) {
        ({ nsfw: parent_id.nsfw, type: parent_id.parentChannelThreadType } = channel);
      }
      return callback(parent_id);
    }),
    mostRecentMessages: guildId.most_recent_messages
  };
  const threads = guildId.threads;
  let mapped;
  if (guildId.members) {
    mapped = importDefault(dependencyMap[21]).map(guildId.members, importDefault(dependencyMap[22]));
    const arr2 = importDefault(dependencyMap[21]);
  }
  obj.members = mapped;
  obj.channelIds = guildId.channel_ids;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["flexDirection"], (id) => {
  dispatchOrResetSocket({ type: "THREAD_MEMBER_UPDATE", id: id.id, guildId: id.guild_id, userId: id.user_id, flags: id.flags, muted: id.muted, muteConfig: id.mute_config, joinTimestamp: id.join_timestamp });
});
defineSimpleDispatch([null], (id) => {
  const arg1 = id;
  const obj = { type: "THREAD_MEMBERS_UPDATE", id: id.id, guildId: id.guild_id, memberCount: id.member_count };
  const added_members = id.added_members;
  let mapped;
  if (null != added_members) {
    mapped = added_members.map((id) => ({ id: id.id, guildId: id.guild_id, userId: id.user_id, flags: id.flags, joinTimestamp: id.join_timestamp }));
  }
  obj.addedMembers = mapped;
  ({ removed_member_ids: obj.removedMemberIds, member_ids_preview: obj.memberIdsPreview } = id);
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch([false], (permission_denied) => {
  let threads;
  if (!permission_denied.permission_denied) {
    const obj = { type: "FORUM_UNREADS" };
    ({ channel_id: obj.channelId, threads } = permission_denied);
    obj.threads = threads.map((threadId) => ({ threadId: threadId.thread_id, missing: threadId.missing, count: threadId.count }));
    dispatchOrResetSocket(obj);
  }
});
defineSimpleDispatch(["<string:441516036>"], (arg0) => {
  importDefaultResult2.add(arg0);
});
defineSimpleDispatch([true, true], (channelId, type) => {
  dispatchOrResetSocket({ type, channelId: channelId.channel_id, user: channelId.user, nick: channelId.nick, isMember: null != store.getBasicChannel(channelId.channel_id) });
});
const result13 = definePreloadableDispatch([null], (data_mode) => {
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
    obj = importAll(dependencyMap[16]);
    const result = obj.hydratePreviouslyUnavailableGuild(unavailable);
    const arg1 = result;
    obj = { type: "GUILD_CREATE", guild: result };
    dispatchOrResetSocket(obj);
    const obj1 = { type: "VOICE_STATE_UPDATES" };
    const voice_states = result.voice_states;
    obj1.voiceStates = voice_states.map((userId) => {
      const obj = { userId: userId.user_id, guildId: result.id, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf, selfVideo: tmp, suppress: userId.suppress, selfStream: tmp2 };
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
defineSimpleDispatch([true], (guild) => {
  let obj = { type: "GUILD_UPDATE", guild };
  dispatchOrResetSocket(obj);
  if (guild.unavailable) {
    obj = { type: "GUILD_UNAVAILABLE", guildId: guild.id };
    dispatchOrResetSocket(obj);
  }
});
defineSimpleDispatch([null], (guildId) => {
  let obj = { type: "GUILD_PRUNE_UPDATE", guildId: guildId.guild_id, prune: obj };
  obj = { isPreview: guildId.prune.is_preview, isFinished: guildId.prune.is_finished, days: guildId.prune.days, pruneCount: guildId.prune.prune_count, includeRoles: guildId.prune.include_roles };
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch([2051080196], (guildId) => {
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
defineSimpleDispatch([null], (geo_restricted) => {
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
defineSimpleDispatch([1090519561], (arg0) => {
  const arg1 = arg0;
  const Emitter = importDefault(dependencyMap[15]).Emitter;
  Emitter.batched((self) => {
    set.add({ guildId: self.guild_id, members: self.members, notFound: self.not_found });
    if (null != self.presences) {
      const item = callback2(self.presences, self.guild_id).forEach(closure_33);
      const arr = callback2(self.presences, self.guild_id);
    }
    callback(closure_3[12]).flush("GUILD_MEMBERS_CHUNK");
  });
});
defineSimpleDispatch([null], (arg0) => {
  const arg1 = arg0;
  const Emitter = importDefault(dependencyMap[15]).Emitter;
  Emitter.batched((self) => {
    callback2({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: self.guild_id, threadId: self.thread_id, members: self.members });
    if (null != self.presences) {
      const item = callback3(self.presences, self.guild_id).forEach(closure_33);
      const arr = callback3(self.presences, self.guild_id);
    }
    callback(closure_3[12]).flush();
  });
});
defineSimpleDispatch([null, null, null, null, null], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, user: guildId.user, avatar: guildId.avatar, avatarDecoration: guildId.avatar_decoration_data, roles: guildId.roles, nick: guildId.nick, premiumSince: guildId.premium_since, isPending: guildId.pending, joinedAt: guildId.joined_at, communicationDisabledUntil: guildId.communication_disabled_until, unusualDMActivityUntil: guildId.unusual_dm_activity_until, flags: guildId.flags, collectibles: type(dependencyMap[23]).parseServerUserCollectibles(guildId.collectibles) };
  const obj2 = type(dependencyMap[23]);
  obj.displayNameStyles = type(dependencyMap[24]).parseServerDisplayNameStyles(guildId.display_name_styles);
  dispatchOrResetSocket(obj);
});
const result14 = definePreloadableDispatch([172032001, 1358955676], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId, type) => {
  dispatchOrResetSocket({ type, guildId: guildId.guild_id, role: guildId.role });
});
const result15 = definePreloadableDispatch([null], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  dispatchOrResetSocket({ type: "GUILD_ROLE_DELETE", guildId: guildId.guild_id, roleId: guildId.role_id, version: guildId.version });
});
defineSimpleDispatch([], (guildId) => {
  dispatchOrResetSocket({ type: "GUILD_EMOJIS_UPDATE", guildId: guildId.guild_id, emojis: guildId.emojis });
});
defineSimpleDispatch([0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006924745048855999], (guildId) => {
  dispatchOrResetSocket({ type: "GUILD_STICKERS_UPDATE", guildId: guildId.guild_id, stickers: guildId.stickers });
});
defineSimpleDispatch([-0.000000000000000000000000000000006690645349343701], (guildId) => {
  dispatchOrResetSocket({ type: "GUILD_INTEGRATIONS_UPDATE", guildId: guildId.guild_id });
});
defineSimpleDispatch([166471089894259940000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000], (application) => {
  dispatchOrResetSocket({ type: "INTEGRATION_CREATE", application: application.application, guildId: application.guild_id });
});
defineSimpleDispatch([0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006733259538778241], (applicationId) => {
  dispatchOrResetSocket({ type: "INTEGRATION_DELETE", applicationId: applicationId.application_id, guildId: applicationId.guild_id });
});
defineSimpleDispatch(["GUILD_UPDATE"], (user) => {
  dispatchOrResetSocket({ type: "CURRENT_USER_UPDATE", user });
});
defineSimpleDispatch([], (settings) => {
  let obj = arg1(dependencyMap[17]);
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
defineSimpleDispatch(["feedItemActioned"], (arg0) => {
  const items = [arg0];
  dispatchOrResetSocket({ type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: items });
});
defineSimpleDispatch([], () => {
  dispatchOrResetSocket({ type: "USER_CONNECTIONS_UPDATE" });
});
defineSimpleDispatch([], (requiredAction) => {
  dispatchOrResetSocket({ type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: requiredAction.required_action });
});
defineSimpleDispatch(["<string:609288196>"], (arg0) => {
  const merged = Object.assign(arg0);
  dispatchOrResetSocket({ type: "USER_NOTE_UPDATE" });
});
defineSimpleDispatch([false], (id) => {
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
defineSimpleDispatch([], (relationship) => {
  dispatchOrResetSocket({ type: "RELATIONSHIP_REMOVE", relationship });
});
defineSimpleDispatch([null], (id) => {
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
defineSimpleDispatch([], (id) => {
  dispatchOrResetSocket({ type: "GAME_RELATIONSHIP_ADD", gameRelationship: { id: id.id, applicationId: id.application_id, type: id.type, since: id.since, dmAccessType: id.dm_access_type, user: id.user } });
});
defineSimpleDispatch([null], (id) => {
  dispatchOrResetSocket({ type: "GAME_RELATIONSHIP_REMOVE", userId: id.id, applicationId: id.application_id });
});
defineSimpleDispatch(["isArray"], (guild_id) => {
  dispatchPresence(transformPresence(guild_id, guild_id.guild_id));
});
defineSimpleDispatch([], (arr) => {
  dispatchOrResetSocket({ type: "PRESENCES_REPLACE", presences: transformPresences(arr, undefined) });
});
defineSimpleDispatch(["y"], (arr) => {
  dispatchOrResetSocket({ type: "SESSIONS_REPLACE", sessions: convertSessions(arr) });
});
defineSimpleDispatch(["GUILD_DIRECTORY_ENTRY_UPDATE"], (arg0) => {
  const items = [arg0];
  dispatchVoiceStateUpdates(items);
});
defineSimpleDispatch([null], (voice_states) => {
  dispatchVoiceStateUpdates(voice_states.voice_states);
});
defineSimpleDispatch([], (guildId) => {
  dispatchOrResetSocket({ type: "VOICE_SERVER_UPDATE", guildId: guildId.guild_id, channelId: guildId.channel_id, endpoint: guildId.endpoint, token: guildId.token });
});
defineSimpleDispatch(["VOICE_CHANNEL_EFFECT_SEND"], (channelId) => {
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
defineSimpleDispatch([0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009097152424434828], (channelId) => {
  dispatchOrResetSocket({ type: "CALL_UPDATE", channelId: channelId.channel_id, messageId: channelId.message_id, region: channelId.region, ongoingRings: channelId.ongoing_rings });
});
defineSimpleDispatch(["CLIPS_REMOTE_TRIGGER"], (channelId) => {
  dispatchOrResetSocket({ type: "CALL_DELETE", channelId: channelId.channel_id, unavailable: channelId.unavailable });
});
defineSimpleDispatch([0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001664647434350156], (id) => {
  dispatchOrResetSocket({ type: "OAUTH2_TOKEN_CREATE", id: id.id, scopes: id.scopes, application: id.application });
});
defineSimpleDispatch([true], (id) => {
  dispatchOrResetSocket({ type: "OAUTH2_TOKEN_DELETE", id: id.id, applicationId: id.application_id });
});
defineSimpleDispatch([], (accessToken) => {
  dispatchOrResetSocket({ type: "OAUTH2_TOKEN_REVOKE", accessToken: accessToken.access_token });
});
defineSimpleDispatch([], (id) => {
  dispatchOrResetSocket({ type: "RECENT_MENTION_DELETE", id: id.message_id });
});
defineSimpleDispatch([], (body) => {
  const obj = { type: "SAVED_MESSAGE_CREATE", savedMessage: arg1(dependencyMap[25]).savedMessageCreateObjectToClient(body) };
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch([], (channelId) => {
  const obj = { type: "SAVED_MESSAGE_DELETE", savedMessageData: arg1(dependencyMap[25]).savedMessageDeleteObjectToClient(channelId) };
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch([], (suggestion) => {
  dispatchOrResetSocket({ type: "FRIEND_SUGGESTION_CREATE", suggestion });
});
defineSimpleDispatch([null], (suggestedUserId) => {
  dispatchOrResetSocket({ type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: suggestedUserId.suggested_user_id });
});
defineSimpleDispatch([true], (guildId) => {
  dispatchOrResetSocket({ type: "WEBHOOKS_UPDATE", guildId: guildId.guild_id, channelId: guildId.channel_id });
});
defineSimpleDispatch([false, false], (channelId, type) => {
  dispatchOrResetSocket({ type, channelId: channelId.channel_id, messageId: channelId.message_id, userId: channelId.user_id, emoji: channelId.emoji, colors: channelId.burst_colors, reactionType: channelId.type, messageAuthorId: channelId.message_author_id });
});
defineSimpleDispatch([], (answer_id) => {
  let obj = {};
  let str = "MESSAGE_REACTION_REMOVE";
  if ("MESSAGE_POLL_VOTE_ADD" === arg1) {
    str = "MESSAGE_REACTION_ADD";
  }
  obj.type = str;
  ({ channel_id: obj.channelId, message_id: obj.messageId, user_id: obj.userId } = answer_id);
  obj = { id: answer_id.answer_id, name: "" };
  obj.emoji = obj;
  obj.reactionType = arg1(dependencyMap[26]).ReactionTypes.VOTE;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch([null], (channelId) => {
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
      obj["reactionType"] = callback(closure_3[26]).ReactionTypes.VOTE;
      return obj;
    })
  });
});
defineSimpleDispatch([null], (channelId) => {
  dispatchOrResetSocket({ type: "MESSAGE_REACTION_REMOVE_ALL", channelId: channelId.channel_id, messageId: channelId.message_id });
});
defineSimpleDispatch([null], (channelId) => {
  dispatchOrResetSocket({ type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: channelId.channel_id, messageId: channelId.message_id, emoji: channelId.emoji });
});
defineSimpleDispatch(["<string:708902916>"], (channelId) => {
  dispatchOrResetSocket({ type: "MESSAGE_REACTION_ADD_MANY", channelId: channelId.channel_id, messageId: channelId.message_id, reactions: channelId.reactions });
});
defineSimpleDispatch([], (payment) => {
  dispatchOrResetSocket({ type: "PAYMENT_UPDATE", payment });
});
defineSimpleDispatch([null, null, null], (entitlement, type) => {
  dispatchOrResetSocket({ type, entitlement });
});
defineSimpleDispatch([], () => {
  if (obj.isUserSettingsOpen()) {
    const paymentSources = arg1(dependencyMap[28]).fetchPaymentSources();
    const obj2 = arg1(dependencyMap[28]);
    const subscriptionPlansBySKUs = importAll(dependencyMap[29]).fetchSubscriptionPlansBySKUs(fetchedSKUIDs.getFetchedSKUIDs());
    const obj3 = importAll(dependencyMap[29]);
  }
});
defineSimpleDispatch([], () => {
  const currentUser = importAll(dependencyMap[30]).fetchCurrentUser();
  const obj = importAll(dependencyMap[30]);
  if (obj2.isUserSettingsOpen()) {
    const subscriptions = arg1(dependencyMap[28]).fetchSubscriptions();
    const obj3 = arg1(dependencyMap[28]);
  }
});
defineSimpleDispatch([], (recipientId) => {
  dispatchOrResetSocket({ type: "WISHLIST_ITEM_PURCHASED", recipientId: recipientId.recipient_id, skuId: recipientId.sku_id });
});
defineSimpleDispatch([], (badge_id) => {
  const badge = arg1(dependencyMap[31]).fetchBadge(badge_id.badge_id);
});
defineSimpleDispatch(["PREMIUM_KEY"], (subscription_id) => {
  dispatchOrResetSocket({ type: "GUILD_BOOST_SLOT_CREATE", guildBoostSlot: closure_7.createFromServer(subscription_id, store2.getSubscriptionById(subscription_id.subscription_id)) });
});
defineSimpleDispatch([], (subscription_id) => {
  dispatchOrResetSocket({ type: "GUILD_BOOST_SLOT_UPDATE", guildBoostSlot: closure_7.createFromServer(subscription_id, store2.getSubscriptionById(subscription_id.subscription_id)) });
});
defineSimpleDispatch([null], (paymentSourceType) => {
  dispatchOrResetSocket({ type: "BILLING_POPUP_BRIDGE_CALLBACK", paymentSourceType: paymentSourceType.payment_source_type, state: paymentSourceType.state, path: paymentSourceType.path, query: paymentSourceType.query });
});
defineSimpleDispatch([], (loadId) => {
  dispatchOrResetSocket({ type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE", loadId: loadId.load_id, skuId: loadId.sku_id, skuSubscriptionPlanId: loadId.sku_subscription_plan_id });
});
defineSimpleDispatch(["GAME_SERVER_DELETE"], (arg0) => {
  const arg1 = arg0;
  const purchaseTokenHash = arg1(dependencyMap[32]).getPurchaseTokenHash();
  purchaseTokenHash.then((self) => {
    const purchase_token_hash = self.purchase_token_hash;
    if (purchase_token_hash === self) {
      const obj = { type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: purchase_token_hash, expiresAt: self.expires_at };
      callback(obj);
    }
  });
});
defineSimpleDispatch(["USER_APPLICATION_IDENTITY_UPDATE"], (arg0) => {
  const arg1 = arg0;
  const Emitter = importDefault(dependencyMap[15]).Emitter;
  Emitter.batched(() => {
    function handleItem(member) {
      if (null != member.member) {
        member = member.member;
        callback(handleItem.guild_id, member.user, member);
        if (null != member.presence) {
          callback3(callback2(member.presence, handleItem.guild_id));
        }
      }
    }
    const ops = handleItem.ops;
    const item = ops.forEach((arg0) => {
      let items;
      let op;
      ({ op, items } = arg0);
      if ("SYNC" === op) {
        const item = items.forEach(handleItem);
      } else if ("UPDATE" === op) {
        handleItem(tmp);
      }
    });
    let obj = callback(closure_3[12]);
    obj.flush();
    obj = { type: "GUILD_MEMBER_LIST_UPDATE", guildId: handleItem.guild_id, id: handleItem.id, ops: handleItem.ops, groups: handleItem.groups, memberCount: handleItem.member_count, onlineCount: handleItem.online_count };
    callback2(obj);
  });
});
defineSimpleDispatch([null], (uses) => {
  dispatchOrResetSocket({ type: "GIFT_CODE_UPDATE", uses: uses.uses, code: uses.code });
});
defineSimpleDispatch(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (giftCode) => {
  dispatchOrResetSocket({ type: "GIFT_CODE_CREATE", giftCode });
});
defineSimpleDispatch(["GUILD_ROOM_UPDATE"], (libraryApplication) => {
  dispatchOrResetSocket({ type: "LIBRARY_APPLICATION_UPDATE", libraryApplication });
});
defineSimpleDispatch(["Text"], (streamKey) => {
  dispatchOrResetSocket({ type: "STREAM_CREATE", streamKey: streamKey.stream_key, region: streamKey.region, viewerIds: streamKey.viewer_ids, rtcServerId: streamKey.rtc_server_id, rtcChannelId: streamKey.rtc_channel_id, paused: streamKey.paused });
});
defineSimpleDispatch([null], (streamKey) => {
  dispatchOrResetSocket({ type: "STREAM_SERVER_UPDATE", streamKey: streamKey.stream_key, endpoint: streamKey.endpoint, token: streamKey.token });
});
defineSimpleDispatch(["y"], (streamKey) => {
  dispatchOrResetSocket({ type: "STREAM_UPDATE", streamKey: streamKey.stream_key, region: streamKey.region, viewerIds: streamKey.viewer_ids, paused: streamKey.paused });
});
defineSimpleDispatch(["MESSAGE_REQUEST_NOTIFICATION_SENT"], (streamKey) => {
  dispatchOrResetSocket({ type: "STREAM_DELETE", streamKey: streamKey.stream_key, unavailable: streamKey.unavailable, reason: streamKey.reason });
});
defineSimpleDispatch([null], (title) => {
  dispatchOrResetSocket({ type: "GENERIC_PUSH_NOTIFICATION_SENT", title: title.title, body: title.body, trackingType: title.tracking_type, icon: title.icon, route: title.route, tag: title.tag });
});
defineSimpleDispatch([75], (route) => {
  dispatchOrResetSocket({ type: "REACTION_NOTIFICATION_SENT", route: route.route, message: route.message, emoji: route.emoji, reactorUserId: route.reactor_user_id, title: route.title, body: route.body, trackingType: route.tracking_type, icon: route.icon });
});
defineSimpleDispatch(["isArray"], (item) => {
  dispatchOrResetSocket({ type: "NOTIFICATION_CENTER_ITEM_CREATE", item });
});
defineSimpleDispatch([6], (id) => {
  dispatchOrResetSocket({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: id.id });
});
defineSimpleDispatch([null], (id) => {
  const obj = { withTiming: true, FRIEND_INVITES: true, withTiming: true };
  const items = [id.id];
  obj.ids = items;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch([], (item_enum) => {
  dispatchOrResetSocket({ type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: item_enum.item_enum });
});
defineSimpleDispatch([50], (user_status) => {
  dispatchOrResetSocket({ type: "QUESTS_USER_STATUS_UPDATE", user_status: user_status.user_status });
});
defineSimpleDispatch(["isArray"], (quest_enrollment_blocked_until) => {
  dispatchOrResetSocket({ type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: quest_enrollment_blocked_until.quest_enrollment_blocked_until });
});
defineSimpleDispatch(["isArray"], (quest_id) => {
  dispatchOrResetSocket({ type: "QUEST_PREVIEW_UPDATE", quest_id: quest_id.quest_id });
});
defineSimpleDispatch([null], (guildId, type) => {
  dispatchOrResetSocket({ type, guildId: guildId.guild_id });
});
defineSimpleDispatch([], (guildId) => {
  dispatchOrResetSocket({ type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: guildId.guild_id, version: guildId.version });
});
defineSimpleDispatch([], (request) => {
  dispatchOrResetSocket({ type: "GUILD_JOIN_REQUEST_CREATE", request: request.request, status: request.status, guildId: request.guild_id });
});
defineSimpleDispatch(["dispatch"], (request) => {
  dispatchOrResetSocket({ type: "GUILD_JOIN_REQUEST_UPDATE", request: request.request, status: request.status, guildId: request.guild_id });
});
defineSimpleDispatch([null], (id) => {
  dispatchOrResetSocket({ type: "GUILD_JOIN_REQUEST_DELETE", id: id.id, userId: id.user_id, guildId: id.guild_id });
});
defineSimpleDispatch(["minor"], (id) => {
  dispatchOrResetSocket({ type: "INTERACTION_CREATE", interactionId: id.id, nonce: id.nonce });
});
defineSimpleDispatch([null], (id) => {
  dispatchOrResetSocket({ type: "INTERACTION_SUCCESS", interactionId: id.id, nonce: id.nonce });
});
defineSimpleDispatch(["COLLECTIBLES_SHOP_VIEWED"], (id) => {
  dispatchOrResetSocket({ type: "INTERACTION_FAILURE", interactionId: id.id, nonce: id.nonce, reasonCode: id.reason_code });
});
defineSimpleDispatch(["patch"], (choices) => {
  dispatchOrResetSocket({ type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: choices.choices, nonce: choices.nonce });
});
defineSimpleDispatch([null], (id) => {
  const obj = { type: "INTERACTION_MODAL_CREATE", id: id.id, channelId: id.channel_id, customId: id.custom_id, application: id.application, title: id.title, components: arg1(dependencyMap[33]).transformComponents(id.components) };
  ({ nonce: obj.nonce, resolved: obj.resolved } = id);
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch([true], (id) => {
  dispatchOrResetSocket({ type: "INTERACTION_IFRAME_MODAL_CREATE", id: id.id, channelId: id.channel_id, customId: id.custom_id, application: id.application, title: id.title, iframePath: id.iframe_path, modalSize: id.modal_size, nonce: id.nonce });
});
defineSimpleDispatch(["prerelease"], (instance) => {
  dispatchOrResetSocket({ type: "STAGE_INSTANCE_CREATE", instance });
});
defineSimpleDispatch([], (instance) => {
  dispatchOrResetSocket({ type: "STAGE_INSTANCE_UPDATE", instance });
});
defineSimpleDispatch([], (instance) => {
  dispatchOrResetSocket({ type: "STAGE_INSTANCE_DELETE", instance });
});
defineSimpleDispatch([false], (guildScheduledEvent) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent });
});
defineSimpleDispatch([0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002661792731532402], (guildScheduledEvent) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent });
});
defineSimpleDispatch(["SEMVER"], (guildScheduledEvent) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent });
});
defineSimpleDispatch([-6342207352304095000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000], (eventException) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException });
});
defineSimpleDispatch([], (eventException) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException });
});
defineSimpleDispatch([null], (eventException) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException });
});
defineSimpleDispatch([true], (eventId) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: eventId.event_id });
});
defineSimpleDispatch([null], (userId) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_USER_ADD", userId: userId.user_id, guildId: userId.guild_id, guildEventId: userId.guild_scheduled_event_id, guildEventExceptionId: userId.guild_scheduled_event_exception_id, response: userId.response });
});
defineSimpleDispatch([], (userId) => {
  dispatchOrResetSocket({ type: "GUILD_SCHEDULED_EVENT_USER_REMOVE", userId: userId.user_id, guildId: userId.guild_id, guildEventId: userId.guild_scheduled_event_id, guildEventExceptionId: userId.guild_scheduled_event_exception_id, response: userId.response });
});
defineSimpleDispatch([], (channelId) => {
  dispatchOrResetSocket({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: channelId.directory_channel_id, entry: channelId });
});
defineSimpleDispatch([], (channelId) => {
  dispatchOrResetSocket({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: channelId.directory_channel_id, entry: channelId });
});
defineSimpleDispatch([], (channelId) => {
  dispatchOrResetSocket({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: channelId.directory_channel_id, guildId: channelId.entity_id });
});
defineSimpleDispatch(["CMD"], (guildId) => {
  dispatchOrResetSocket({ type: "AUTO_MODERATION_MENTION_RAID_DETECTION", guildId: guildId.guild_id, decisionId: guildId.decision_id, suspiciousMentionActivityUntil: guildId.suspicious_mention_activity_until });
});
defineSimpleDispatch([null], (emoji) => {
  dispatchOrResetSocket({ type: "VOICE_CHANNEL_EFFECT_SEND", emoji: emoji.emoji, channelId: emoji.channel_id, userId: emoji.user_id, animationType: emoji.animation_type, animationId: emoji.animation_id, soundId: emoji.sound_id, soundVolume: emoji.sound_volume });
});
defineSimpleDispatch(["<string:1438138880>"], (userId) => {
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
defineSimpleDispatch(["Array"], (guildId) => {
  let obj = { type: "GUILD_SOUNDBOARD_SOUND_CREATE" };
  obj = { guildId: guildId.guild_id, name: guildId.name, soundId: guildId.sound_id, user: new closure_8(guildId.user) };
  ({ user_id: obj2.userId, volume: obj2.volume, emoji_id: obj2.emojiId, emoji_name: obj2.emojiName, available: obj2.available } = guildId);
  obj.sound = obj;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch([null], (guildId) => {
  let obj = { type: "GUILD_SOUNDBOARD_SOUND_UPDATE" };
  obj = { guildId: guildId.guild_id, name: guildId.name, soundId: guildId.sound_id, user: new closure_8(guildId.user) };
  ({ user_id: obj2.userId, volume: obj2.volume, emoji_id: obj2.emojiId, emoji_name: obj2.emojiName, available: obj2.available } = guildId);
  obj.sound = obj;
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch([null], (guildId) => {
  dispatchOrResetSocket({ type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: guildId.guild_id, soundId: guildId.sound_id });
});
defineSimpleDispatch([], (guildId) => {
  const arg1 = guildId;
  const soundboard_sounds = guildId.soundboard_sounds;
  dispatchOrResetSocket({ type: "GUILD_SOUNDBOARD_SOUNDS_UPDATE", guildId: guildId.guild_id, soundboardSounds: soundboard_sounds.map((name) => ({ name: name.name, soundId: name.sound_id, emojiName: name.emoji_name, emojiId: name.emoji_id, userId: name.user_id, volume: name.volume, available: name.available, guildId: name.guild_id })) });
});
definePreloadableDispatch([null], (guild_id) => {
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
defineSimpleDispatch([1107297483], (authSessionIdHash) => {
  dispatchOrResetSocket({ type: "AUTH_SESSION_CHANGE", authSessionIdHash: authSessionIdHash.auth_session_id_hash });
});
defineSimpleDispatch([null], (provider) => {
  dispatchOrResetSocket({ type: "USER_CONNECTIONS_LINK_CALLBACK", provider: provider.provider, callbackCode: provider.callback_code, callbackState: provider.callback_state });
});
defineSimpleDispatch([null], (provider) => {
  dispatchOrResetSocket({ type: "USER_CONNECTIONS_CALLBACK", provider: provider.provider, code: provider.code, state: provider.state, openid_params: provider.openid_params });
});
defineSimpleDispatch([true], (arg0) => {
  const merged = Object.assign(arg0);
  dispatchOrResetSocket({ type: "DELETED_ENTITY_IDS" });
});
definePreloadableDispatch([], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guild_id) => {
  if (!guild_id.integrity_check) {
    const channels = guild_id.channels;
    const item = channels.forEach((arg0) => {
      set.add(arg0);
    });
  }
  dispatchOrResetSocket({ type: "CHANNEL_SYNC", guild_id: guild_id.guild_id, channels: guild_id.channels, integrity_check: guild_id.integrity_check });
});
defineSimpleDispatch(["LOAD_ARCHIVED_THREADS_SUCCESS"], (id) => {
  dispatchOrResetSocket({ type: "CONSOLE_COMMAND_UPDATE", id: id.id, result: id.result, error: id.error });
});
definePreloadableDispatch([null], (guild_id) => {
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
defineSimpleDispatch([-347013119], (guildId) => {
  dispatchOrResetSocket({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS", guildId: guildId.guild_id, restrictions: guildId.restrictions });
});
defineSimpleDispatch(["x"], (userTrialOfferId) => {
  dispatchOrResetSocket({ type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE", userTrialOfferId: userTrialOfferId.user_trial_offer_id, recipientId: userTrialOfferId.recipient_id });
});
defineSimpleDispatch([null], (guildId) => {
  dispatchOrResetSocket({ type: "MESSAGE_PREVIEWS_LOADED", guildId: guildId.guild_id, messages: guildId.messages });
});
defineSimpleDispatch([], (credential) => {
  dispatchOrResetSocket({ type: "AUTHENTICATOR_UPDATE", credential });
});
defineSimpleDispatch([], (credential) => {
  dispatchOrResetSocket({ type: "AUTHENTICATOR_CREATE", credential });
});
defineSimpleDispatch(["RIGHT CTRL"], (credential) => {
  dispatchOrResetSocket({ type: "AUTHENTICATOR_DELETE", credential });
});
defineSimpleDispatch([], (flags) => {
  dispatchOrResetSocket({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: flags.flags } });
});
defineSimpleDispatch([null], (arg0) => {
  const merged = Object.assign(arg0);
  dispatchOrResetSocket({ type: "CONVERSATION_SUMMARY_UPDATE" });
});
defineSimpleDispatch([], (data) => {
  dispatchOrResetSocket({ type: "PREMIUM_MARKETING_PREVIEW", data });
});
defineSimpleDispatch(["<string:1699807236>"], (applicationId) => {
  dispatchOrResetSocket({ type: "USER_APPLICATION_UPDATE", applicationId: applicationId.application_id });
});
defineSimpleDispatch(["c"], (applicationId) => {
  dispatchOrResetSocket({ type: "USER_APPLICATION_REMOVE", applicationId: applicationId.application_id });
});
defineSimpleDispatch([null], (guildId) => {
  dispatchOrResetSocket({ type: "DM_SETTINGS_UPSELL_SHOW", guildId: guildId.guild_id });
});
defineSimpleDispatch([null], (refreshAfterMs) => {
  dispatchOrResetSocket({ type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: refreshAfterMs.refresh_after_ms });
});
defineSimpleDispatch([], (balance) => {
  dispatchOrResetSocket({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: balance.balance });
});
defineSimpleDispatch([], (paymentSourceId) => {
  dispatchOrResetSocket({ type: "WALLET_BALANCE_UPDATE", paymentSourceId: paymentSourceId.payment_source_id, balance: paymentSourceId.balance, currency: paymentSourceId.currency });
});
defineSimpleDispatch(["PAGEUP", "\u21DE"], (guildId, type) => {
  dispatchOrResetSocket({ type, guildId: guildId.guild_id, entitlements: guildId.entitlements });
});
defineSimpleDispatch([2063597867, 1358955488], (guildId, type) => {
  dispatchOrResetSocket({ type, guildId: guildId.guild_id, gameServer: guildId.game_server });
});
defineSimpleDispatch([true], (guildId, type) => {
  dispatchOrResetSocket({ type, guildId: guildId.guild_id, gameServerId: guildId.game_server_id });
});
defineSimpleDispatch([1107297248], (guildId, type) => {
  dispatchOrResetSocket({ type, guildId: guildId.guild_id });
});
defineSimpleDispatch([null], (user_id, type) => {
  dispatchOrResetSocket({ type, user_id: user_id.user_id, application_id: user_id.application_id, username: user_id.username, avatar_hash: user_id.avatar_hash, metadata: user_id.metadata });
});
defineSimpleDispatch(["\u2193"], (user_id, type) => {
  dispatchOrResetSocket({ type, user_id: user_id.user_id, application_id: user_id.application_id });
});
defineSimpleDispatch([null], (interactionId) => {
  dispatchOrResetSocket({ type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE", interactionId: interactionId.interaction_id, applicationId: interactionId.application_id, skuId: interactionId.sku_id, recipientId: interactionId.recipient_id, eligible: interactionId.eligible, ineligibleReason: interactionId.ineligible_reason });
});
defineSimpleDispatch(["isArray"], (body, type) => {
  const obj = { type, room: type(dependencyMap[34]).serverGuildRoomToClient(body) };
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch([true], (userId, type) => {
  dispatchOrResetSocket({ type, userId: userId.user_id, roomId: userId.room_id });
});
defineSimpleDispatch(["\u2190"], (body, type) => {
  const obj = { type, room: type(dependencyMap[34]).serverGuildRoomToClient(body) };
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch(["<string:1561460242>"], (roomId, type) => {
  const obj = { type, room: type(dependencyMap[35]).parseRoom(roomId) };
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch([51197952], (userId, type) => {
  dispatchOrResetSocket({ type, userId: userId.user_id, roomId: userId.room_id });
});
defineSimpleDispatch([null], (roomId, type) => {
  const obj = { type, room: type(dependencyMap[35]).parseRoom(roomId) };
  dispatchOrResetSocket(obj);
});
defineSimpleDispatch([0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016997182279391916], (gameApplicationIds, type) => {
  dispatchOrResetSocket({ type, gameApplicationIds: gameApplicationIds.game_application_ids, guildId: gameApplicationIds.guild_id });
});
defineSimpleDispatch([null], (triggeringUserId) => {
  dispatchOrResetSocket({ type: "MESSAGE_REQUEST_NOTIFICATION_SENT", triggeringUserId: triggeringUserId.triggering_user_id, numMutualGuilds: triggeringUserId.num_mutual_guilds });
});
arg1(dependencyMap[38]).fileFinishedImporting("modules/gateway/dispatchSocketMessage.tsx");

export default function getDispatchHandler(type) {
  return closure_22[type];
};
