// Module ID: 4957
// Function ID: 42571
// Name: sortKey
// Dependencies: [6, 7, 4149, 1348, 4958, 1917, 3767, 1849, 4146, 4203, 4954, 1353, 4960, 4314, 3754, 4319, 4961, 4194, 2]

// Module 4957 (sortKey)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { getComparator } from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";

const require = arg1;
function sortKey(speaker) {
  let connectedOn;
  let role;
  let type;
  let user;
  let userNick;
  let voiceState;
  ({ role, connectedOn, voiceState } = speaker);
  let str = "\u0001";
  let str2 = "\u0001";
  ({ user, userNick, type } = speaker);
  if (speaker.speaker) {
    str2 = "\0";
  }
  let str3 = str;
  if (type === obj.STREAM) {
    str3 = "\0";
  }
  let str4 = "\0";
  if (voiceState.selfMute) {
    str4 = str;
  }
  if (voiceState.selfVideo) {
    str = "\0";
  }
  let position;
  if (null != role) {
    position = role.position;
  }
  let num = 999;
  if (null != position) {
    num = position;
  }
  const combined = "" + num;
  return "" + str2 + str3 + str4 + str + combined.padStart(3, "0") + connectedOn + importDefault(4960)(userNick, user);
}
function requestToSpeakSortKey(user) {
  user = user.user;
  const requestToSpeakTimestamp = user.voiceState.requestToSpeakTimestamp;
  if (null == requestToSpeakTimestamp) {
    let id = user.id;
  } else {
    const _Date = Date;
    const _HermesInternal = HermesInternal;
    id = "" + Date.parse(requestToSpeakTimestamp) + user.id;
  }
  return id;
}
function isRequestedToSpeakAll(rtsState) {
  let tmp = rtsState === require(4314) /* getAudienceRequestToSpeakState */.RequestToSpeakStates.REQUESTED_TO_SPEAK;
  if (!tmp) {
    tmp = rtsState === require(4314) /* getAudienceRequestToSpeakState */.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  }
  return tmp;
}
function getParticipantIndex(arg0) {
  let blocked;
  let ignored;
  let isFriend;
  let role;
  let rtsState;
  let speaker;
  ({ role, rtsState } = arg0);
  const items = [];
  ({ speaker, blocked, ignored, isFriend } = arg0);
  if (isRequestedToSpeakAll(rtsState)) {
    items.push(obj.ALL_REQUESTED_TO_SPEAK);
  }
  if (rtsState === require(4314) /* getAudienceRequestToSpeakState */.RequestToSpeakStates.REQUESTED_TO_SPEAK) {
    items.push(obj.REQUESTED_TO_SPEAK_ONLY);
  }
  if (speaker) {
    items.push(obj.SPEAKER);
  } else {
    if (null != role) {
      items.push(role.id);
    } else {
      items.push(obj.NO_ROLE);
    }
    items.push(obj.AUDIENCE);
  }
  if (blocked) {
    items.push(obj.BLOCKED);
  } else if (ignored) {
    items.push(obj.IGNORED);
  }
  if (isFriend) {
    items.push(obj.FRIEND);
  }
  return items;
}
let obj = { SPEAKER: "SPEAKER", AUDIENCE: "AUDIENCE", NO_ROLE: "NO_ROLE", ALL_REQUESTED_TO_SPEAK: "ALL_REQUESTED_TO_SPEAK", REQUESTED_TO_SPEAK_ONLY: "REQUESTED_TO_SPEAK_ONLY", BLOCKED: "BLOCKED", IGNORED: "IGNORED", FRIEND: "FRIEND", SELECTED: "SELECTED", MEDIA: "MEDIA" };
obj = { VOICE: "VOICE", STREAM: "STREAM" };
let tmp2 = (() => {
  class StageChannelParticipants {
    constructor(arg0) {
      tmp = outer1_3(this, StageChannelParticipants);
      this.participants = {};
      secondaryIndexMap = new StageChannelParticipants(outer1_2[14]).SecondaryIndexMap(outer1_20, outer1_17);
      this._participantsIndex = secondaryIndexMap;
      secondaryIndexMap1 = new StageChannelParticipants(outer1_2[14]).SecondaryIndexMap(() => [], outer1_18);
      this._requestToSpeakIndex = secondaryIndexMap1;
      this.channelId = arg0;
      channel = outer1_6.getChannel(arg0);
      guildId = undefined;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      this.guildId = guildId;
      return;
    }
  }
  let obj = {
    key: "_getParticipantsForUser",
    value(id) {
      const self = this;
      const items = [];
      const voiceStateForChannel = outer1_11.getVoiceStateForChannel(this.channelId, id);
      if (null == voiceStateForChannel) {
        return items;
      } else {
        const user = outer1_10.getUser(id);
        if (null == user) {
          let isPublicResult = null != self.guildId;
          if (isPublicResult) {
            isPublicResult = outer1_14.isPublic(self.channelId);
          }
          if (isPublicResult) {
            const member = outer1_7.requestMember(self.guildId, id);
          }
          return items;
        } else {
          let first = null;
          if (null != arg1) {
            first = arg1[0];
          }
          let member1 = null;
          if (null != self.guildId) {
            member1 = outer1_8.getMember(self.guildId, id);
          }
          let nick;
          if (null != member1) {
            nick = member1.nick;
          }
          if (null == nick) {
            let obj = outer1_1(outer1_2[15]);
            nick = obj.getName(self.guildId, self.channelId, user);
          }
          obj = { user, userNick: outer1_1(outer1_2[15]).getName(self.guildId, self.channelId, user), nick, comparator: outer1_12(voiceStateForChannel, nick), voiceState: voiceStateForChannel };
          const obj3 = outer1_1(outer1_2[15]);
          obj.role = StageChannelParticipants(outer1_2[16]).getHighestHoistedRole(self.guildId, id);
          obj.speaker = outer1_13.isSpeaker(id, self.channelId);
          obj.member = member1;
          obj.blocked = outer1_9.isBlocked(user.id);
          obj.ignored = outer1_9.isIgnored(user.id);
          obj.isFriend = outer1_9.isFriend(user.id);
          let connectedOn;
          if (null != first) {
            connectedOn = first.connectedOn;
          }
          if (null == connectedOn) {
            const _Date = Date;
            connectedOn = Date.now();
          }
          obj.connectedOn = connectedOn;
          obj = {};
          const merged = Object.assign(obj);
          obj["type"] = outer1_16.VOICE;
          obj["id"] = user.id;
          const obj4 = StageChannelParticipants(outer1_2[16]);
          obj["rtsState"] = StageChannelParticipants(outer1_2[13]).getAudienceRequestToSpeakState(voiceStateForChannel);
          items.push(obj);
          let streamForUser = outer1_5.getStreamForUser(id, self.guildId);
          if (null == streamForUser) {
            streamForUser = outer1_5.getActiveStreamForUser(id, self.guildId);
          }
          if (null != streamForUser) {
            if (streamForUser.channelId === self.channelId) {
              const obj1 = {};
              const obj7 = StageChannelParticipants(outer1_2[17]);
              const merged1 = Object.assign(obj);
              obj1["id"] = StageChannelParticipants(outer1_2[17]).encodeStreamKey(streamForUser);
              obj1["type"] = outer1_16.STREAM;
              obj1["rtsState"] = StageChannelParticipants(outer1_2[13]).RequestToSpeakStates.NONE;
              items.push(obj1);
              const encodeStreamKeyResult = StageChannelParticipants(outer1_2[17]).encodeStreamKey(streamForUser);
            }
          }
          return items;
        }
      }
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "updateParticipant",
    value(arg0) {
      const self = this;
      let closure_1 = arg0;
      let result = this._getParticipantsForUser(arg0, arr);
      let flag = null != arr;
      if (!flag) {
        flag = 0 !== result.length;
      }
      if (flag) {
        if (null != arr) {
          const item = arr.forEach((id) => {
            const _participantsIndex = self._participantsIndex;
            _participantsIndex.delete(id.id);
            const _requestToSpeakIndex = self._requestToSpeakIndex;
            _requestToSpeakIndex.delete(id.id);
          });
        }
        const item1 = result.forEach((id) => {
          const _participantsIndex = self._participantsIndex;
          const result = _participantsIndex.set(id.id, id);
          if (id.id === closure_1) {
            if (outer2_19(id.rtsState)) {
              const _requestToSpeakIndex2 = self._requestToSpeakIndex;
              const result1 = _requestToSpeakIndex2.set(closure_1, id);
            }
          }
          const _requestToSpeakIndex = self._requestToSpeakIndex;
          _requestToSpeakIndex.delete(closure_1);
        });
        this.participants[arg0] = result;
        flag = true;
      }
      return flag;
    }
  };
  items[1] = obj;
  obj = {
    key: "rebuild",
    value() {
      let self = this;
      self = this;
      const channel = outer1_6.getChannel(this.channelId);
      if (null != channel) {
        if (channel.isGuildStageVoice()) {
          const _Set = Set;
          const _Object = Object;
          const set = new Set(Object.keys(outer1_11.getVoiceStatesForChannel(channel.id)));
          const _participantsIndex = self._participantsIndex;
          _participantsIndex.clear();
          const _requestToSpeakIndex = self._requestToSpeakIndex;
          _requestToSpeakIndex.clear();
          self.participants = {};
          const item = set.forEach((arg0) => self.updateParticipant(arg0));
          return true;
        }
      }
      return false;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "version",
    get() {
      return this._participantsIndex.version;
    }
  };
  items[4] = {
    key: "size",
    value(arg0) {
      const _participantsIndex = this._participantsIndex;
      return _participantsIndex.size(arg0);
    }
  };
  items[5] = {
    key: "toArray",
    value(arg0) {
      const _participantsIndex = this._participantsIndex;
      return _participantsIndex.values(arg0, true);
    }
  };
  items[6] = {
    key: "getParticipant",
    value(arg0) {
      const _participantsIndex = this._participantsIndex;
      const value = _participantsIndex.get(arg0);
      let tmp2 = null;
      if (null != value) {
        tmp2 = value;
      }
      return tmp2;
    }
  };
  items[7] = {
    key: "requestToSpeakVersion",
    get() {
      return this._requestToSpeakIndex.version;
    }
  };
  items[8] = {
    key: "getRequestToSpeakParticipants",
    value() {
      const _requestToSpeakIndex = this._requestToSpeakIndex;
      return _requestToSpeakIndex.values(undefined, true);
    }
  };
  return callback(StageChannelParticipants, items);
})();
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/StageChannelParticipants.tsx");

export default tmp2;
export const StageChannelParticipantNamedIndex = obj;
export const StageChannelParticipantTypes = obj;
export { isRequestedToSpeakAll };
