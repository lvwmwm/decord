// Module ID: 4955
// Function ID: 42537
// Name: sortKey
// Dependencies: []

// Module 4955 (sortKey)
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
  return "" + str2 + str3 + str4 + str + combined.padStart(3, "0") + connectedOn + importDefault(dependencyMap[12])(userNick, user);
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
  let tmp = rtsState === arg1(dependencyMap[13]).RequestToSpeakStates.REQUESTED_TO_SPEAK;
  if (!tmp) {
    tmp = rtsState === arg1(dependencyMap[13]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
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
  if (rtsState === arg1(dependencyMap[13]).RequestToSpeakStates.REQUESTED_TO_SPEAK) {
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const getComparator = arg1(dependencyMap[9]).getComparator;
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let obj = { SPEAKER: "SPEAKER", AUDIENCE: "AUDIENCE", NO_ROLE: "NO_ROLE", ALL_REQUESTED_TO_SPEAK: "ALL_REQUESTED_TO_SPEAK", REQUESTED_TO_SPEAK_ONLY: "REQUESTED_TO_SPEAK_ONLY", BLOCKED: "BLOCKED", IGNORED: "IGNORED", FRIEND: "FRIEND", SELECTED: "SELECTED", MEDIA: "MEDIA" };
obj = { VOICE: "VOICE", STREAM: "STREAM" };
const tmp2 = () => {
  class StageChannelParticipants {
    constructor(arg0) {
      tmp = closure_3(this, StageChannelParticipants);
      this.participants = {};
      secondaryIndexMap = new StageChannelParticipants(closure_2[14]).SecondaryIndexMap(closure_20, closure_17);
      this._participantsIndex = secondaryIndexMap;
      secondaryIndexMap1 = new StageChannelParticipants(closure_2[14]).SecondaryIndexMap(() => [], closure_18);
      this._requestToSpeakIndex = secondaryIndexMap1;
      this.channelId = arg0;
      channel = closure_6.getChannel(arg0);
      guildId = undefined;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      this.guildId = guildId;
      return;
    }
  }
  const arg1 = StageChannelParticipants;
  let obj = {
    key: "_getParticipantsForUser",
    value(id) {
      const self = this;
      const items = [];
      const voiceStateForChannel = store2.getVoiceStateForChannel(this.channelId, id);
      if (null == voiceStateForChannel) {
        return items;
      } else {
        const user = user.getUser(id);
        if (null == user) {
          let isPublicResult = null != self.guildId;
          if (isPublicResult) {
            isPublicResult = _public.isPublic(self.channelId);
          }
          if (isPublicResult) {
            const member = closure_7.requestMember(self.guildId, id);
          }
          return items;
        } else {
          let first = null;
          if (null != arg1) {
            first = arg1[0];
          }
          let member1 = null;
          if (null != self.guildId) {
            member1 = member.getMember(self.guildId, id);
          }
          let nick;
          if (null != member1) {
            nick = member1.nick;
          }
          if (null == nick) {
            let obj = callback(closure_2[15]);
            nick = obj.getName(self.guildId, self.channelId, user);
          }
          obj = { user, userNick: callback(closure_2[15]).getName(self.guildId, self.channelId, user), nick, comparator: callback3(voiceStateForChannel, nick), voiceState: voiceStateForChannel };
          const obj3 = callback(closure_2[15]);
          obj.role = StageChannelParticipants(closure_2[16]).getHighestHoistedRole(self.guildId, id);
          obj.speaker = speaker.isSpeaker(id, self.channelId);
          obj.member = member1;
          obj.blocked = closure_9.isBlocked(user.id);
          obj.ignored = closure_9.isIgnored(user.id);
          obj.isFriend = closure_9.isFriend(user.id);
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
          obj["type"] = constants.VOICE;
          obj["id"] = user.id;
          const obj4 = StageChannelParticipants(closure_2[16]);
          obj["rtsState"] = StageChannelParticipants(closure_2[13]).getAudienceRequestToSpeakState(voiceStateForChannel);
          items.push(obj);
          let streamForUser = authStore.getStreamForUser(id, self.guildId);
          if (null == streamForUser) {
            streamForUser = authStore.getActiveStreamForUser(id, self.guildId);
          }
          if (null != streamForUser) {
            if (streamForUser.channelId === self.channelId) {
              const obj1 = {};
              const obj7 = StageChannelParticipants(closure_2[17]);
              const merged1 = Object.assign(obj);
              obj1["id"] = StageChannelParticipants(closure_2[17]).encodeStreamKey(streamForUser);
              obj1["type"] = constants.STREAM;
              obj1["rtsState"] = StageChannelParticipants(closure_2[13]).RequestToSpeakStates.NONE;
              items.push(obj1);
              const encodeStreamKeyResult = StageChannelParticipants(closure_2[17]).encodeStreamKey(streamForUser);
            }
          }
          return items;
        }
      }
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "updateParticipant",
    value(arg0) {
      const StageChannelParticipants = this;
      const arr = this.participants[arg0];
      const result = this._getParticipantsForUser(arg0, arr);
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
          if (id.id === id) {
            if (callback(id.rtsState)) {
              const _requestToSpeakIndex2 = self._requestToSpeakIndex;
              const result1 = _requestToSpeakIndex2.set(id, id);
            }
          }
          const _requestToSpeakIndex = self._requestToSpeakIndex;
          _requestToSpeakIndex.delete(id);
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
      const self = this;
      const StageChannelParticipants = this;
      const channel = store.getChannel(this.channelId);
      if (null != channel) {
        if (channel.isGuildStageVoice()) {
          const _Set = Set;
          const _Object = Object;
          const set = new Set(Object.keys(store2.getVoiceStatesForChannel(channel.id)));
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
}();
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/stage_channels/StageChannelParticipants.tsx");

export default tmp2;
export const StageChannelParticipantNamedIndex = obj;
export const StageChannelParticipantTypes = obj;
export { isRequestedToSpeakAll };
