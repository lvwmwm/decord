// Module ID: 12449
// Function ID: 95043
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12449 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const tmp2 = (EventEmitter) => {
  class GatewaySocketOpCodes {
    constructor() {
      self = this;
      tmp = closure_3(this, GatewaySocketOpCodes);
      obj = closure_6(GatewaySocketOpCodes);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GatewaySocketOpCodes;
  callback2(GatewaySocketOpCodes, EventEmitter);
  let obj = {
    key: "presenceUpdate",
    value(status, since, activities, afk) {
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.PRESENCE_UPDATE, { status, since, activities, afk });
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "voiceStateUpdate",
    value(guildId) {
      const self = this;
      guildId = guildId.guildId;
      if (guildId === undefined) {
        guildId = null;
      }
      let channelId = guildId.channelId;
      if (channelId === undefined) {
        channelId = null;
      }
      let flag = guildId.selfMute;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = guildId.selfDeaf;
      if (flag2 === undefined) {
        flag2 = false;
      }
      let flag3 = guildId.selfVideo;
      if (flag3 === undefined) {
        flag3 = false;
      }
      let preferredRegion = guildId.preferredRegion;
      if (preferredRegion === undefined) {
        preferredRegion = null;
      }
      let preferredRegions = guildId.preferredRegions;
      if (preferredRegions === undefined) {
        preferredRegions = null;
      }
      let prop = guildId.videoStreamParameters;
      if (prop === undefined) {
        prop = null;
      }
      let num = guildId.flags;
      if (num === undefined) {
        num = 0;
      }
      const obj = { guild_id: guildId, channel_id: channelId, self_mute: flag, self_deaf: flag2, self_video: flag3, flags: num };
      let result = null != channelId;
      if (result) {
        result = closure_8.shouldIncludePreferredRegion();
      }
      if (result) {
        obj.preferred_region = preferredRegion;
        obj.preferred_regions = preferredRegions;
      }
      if (null != prop) {
        let mapped;
        if (null != prop) {
          mapped = prop.map((type) => ({ type: type.type, rid: type.rid, quality: type.quality }));
        }
        obj.tracks = mapped;
      }
      self.send(GatewaySocketOpCodes(closure_2[6]).Opcode.VOICE_STATE_UPDATE, obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "voiceServerPing",
    value() {
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.VOICE_SERVER_PING, null);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "requestGuildMembers",
    value(guild_id) {
      let limit;
      let presences;
      let query;
      let userIds;
      ({ query, limit, userIds, presences } = arg1);
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.REQUEST_GUILD_MEMBERS, { guild_id, query, limit, user_ids: userIds, presences });
    }
  };
  items[4] = {
    key: "searchRecentMembers",
    value(guild_id) {
      let continuationToken;
      let query;
      ({ query, continuationToken } = arg1);
      const obj = { guild_id };
      let str = "";
      if (null != query) {
        str = query;
      }
      obj.query = str;
      let tmp = null;
      if (null != continuationToken) {
        tmp = continuationToken;
      }
      obj.continuation_token = tmp;
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.SEARCH_RECENT_MEMBERS, obj);
    }
  };
  items[5] = {
    key: "updateGuildSubscriptions",
    value(arg0) {
      const self = this;
      const GatewaySocketOpCodes = this;
      let closure_2 = {};
      let closure_3 = 0;
      let obj = arg0(closure_2[7]);
      const keys = obj.keys(arg0);
      const item = keys.forEach((arg0) => {
        const items = [arg0, arg0[arg0]];
        const length = JSON.stringify(items).length;
        if (closure_3 + length > 15360) {
          const obj = { subscriptions: closure_2 };
          self.send(self(closure_2[6]).Opcode.GUILD_SUBSCRIPTIONS_BULK, obj);
          closure_2 = {};
          closure_3 = 0;
        }
        closure_2[arg0] = arg0[arg0];
        closure_3 = closure_3 + length;
      });
      if (closure_3 > 0) {
        obj = { subscriptions: closure_2 };
        self.send(GatewaySocketOpCodes(closure_2[6]).Opcode.GUILD_SUBSCRIPTIONS_BULK, obj);
      }
    }
  };
  items[6] = {
    key: "callConnect",
    value(channel_id) {
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.CALL_CONNECT, { channel_id });
    }
  };
  items[7] = {
    key: "streamCreate",
    value(type, guild_id, channel_id) {
      let tmp = arg3;
      const self = this;
      if (arg3 === undefined) {
        tmp = null;
      }
      const obj = { type, guild_id, channel_id, preferred_region: tmp };
      self.send(GatewaySocketOpCodes(closure_2[6]).Opcode.STREAM_CREATE, obj);
    }
  };
  items[8] = {
    key: "streamWatch",
    value(stream_key) {
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.STREAM_WATCH, { stream_key });
    }
  };
  items[9] = {
    key: "streamPing",
    value(stream_key) {
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.STREAM_PING, { stream_key });
    }
  };
  items[10] = {
    key: "streamDelete",
    value(stream_key) {
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.STREAM_DELETE, { stream_key });
    }
  };
  items[11] = {
    key: "streamSetPaused",
    value(stream_key, paused) {
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.STREAM_SET_PAUSED, { stream_key, paused });
    }
  };
  items[12] = {
    key: "requestForumUnreads",
    value(guild_id, channel_id, arr) {
      const obj = { guild_id, channel_id, threads: arr.map((threadId) => ({ thread_id: threadId.threadId, ack_message_id: threadId.ackMessageId })) };
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.REQUEST_FORUM_UNREADS, obj);
    }
  };
  items[13] = {
    key: "requestSoundboardSounds",
    value(guild_ids) {
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.REQUEST_SOUNDBOARD_SOUNDS, { guild_ids });
    }
  };
  items[14] = {
    key: "requestLastMessages",
    value(guild_id, channel_ids) {
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.REQUEST_LAST_MESSAGES, { guild_id, channel_ids });
    }
  };
  items[15] = {
    key: "getDeletedEntityIdsNotMatchingHash",
    value(guild_id, channel_ids_hash, role_ids_hash, emoji_ids_hash, sticker_ids_hash) {
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH, { guild_id, channel_ids_hash, role_ids_hash, emoji_ids_hash, sticker_ids_hash });
    }
  };
  items[16] = {
    key: "triggerGuildChannelResync",
    value(guild_id, obfuscated_channel_ids) {
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.GUILD_CHANNELS_RESYNC, { guild_id, obfuscated_channel_ids });
    }
  };
  items[17] = {
    key: "requestChannelInfo",
    value(guild_id, fields) {
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.REQUEST_CHANNEL_INFO, { guild_id, fields });
    }
  };
  items[18] = {
    key: "requestChannelMemberCount",
    value(guild_id, channel_id) {
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.REQUEST_CHANNEL_MEMBER_COUNT, { guild_id, channel_id });
    }
  };
  items[19] = {
    key: "remoteCommand",
    value(target_session_id, payload) {
      this.send(GatewaySocketOpCodes(closure_2[6]).Opcode.REMOTE_COMMAND, { target_session_id, payload });
    }
  };
  return callback(GatewaySocketOpCodes, items);
}(arg1(dependencyMap[8]).EventEmitter);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/gateway/GatewaySocketOpCodes.tsx");

export default tmp2;
export const Opcode = arg1(dependencyMap[6]).Opcode;
