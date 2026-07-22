// Module ID: 10522
// Function ID: 82165
// Name: getEmbeddedActivityParticipantId
// Dependencies: []
// Exports: activityParticipantIdToApplicationId, areParticipantsEqual

// Module 10522 (getEmbeddedActivityParticipantId)
function getEmbeddedActivityParticipantId(arg0) {
  let applicationId;
  let instanceId;
  ({ applicationId, instanceId } = arg0);
  if (null != instanceId) {
    const _HermesInternal2 = HermesInternal;
    let combined = "activity-" + applicationId + "-" + instanceId;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "activity-" + applicationId;
  }
  return combined;
}
function sortKey(type) {
  type = type.type;
  if (constants.ACTIVITY === type) {
    const _HermesInternal3 = HermesInternal;
    return "\u0001" + type.sortKey;
  } else {
    if (constants.HIDDEN_STREAM !== type) {
      if (constants.STREAM !== type) {
        if (constants.USER === type) {
          const voiceState = type.voiceState;
          if (null == voiceState) {
            const voiceState2 = type.voiceState;
            let str = "\u0005";
            if (tmp2) {
              str = "\u0004";
            }
            const tmp2 = null != voiceState2 && voiceState2.selfStream;
          } else {
            str = "\u0003";
          }
          const _HermesInternal = HermesInternal;
          return "" + str + importDefault(dependencyMap[15])(type.userNick, type.user);
        }
      }
    }
    let str4 = "\u0003";
    if (type.userVideo) {
      str4 = "\u0002";
    }
    const _HermesInternal2 = HermesInternal;
    return "" + str4 + importDefault(dependencyMap[15])(type.userNick, type.user) + "\u0003";
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
let closure_14 = importDefault(dependencyMap[11]);
({ isStreamParticipant: closure_15, ParticipantTypes: closure_16 } = arg1(dependencyMap[12]));
const tmp2 = arg1(dependencyMap[12]);
({ ActivityTypes: closure_17, ChannelTypes: closure_18 } = arg1(dependencyMap[13]));
const MediaEngineContextTypes = arg1(dependencyMap[14]).MediaEngineContextTypes;
const obj = { VIDEO: "VIDEO", STREAM: "STREAM", FILTERED: "FILTERED", SPEAKING: "SPEAKING", ACTIVITY: "ACTIVITY", NOT_POPPED_OUT: "NOT_POPPED_OUT" };
const tmp3 = arg1(dependencyMap[13]);
const tmp4 = () => {
  class ChannelRTCParticipants {
    constructor(arg0) {
      tmp = closure_3(this, ChannelRTCParticipants);
      this.participants = {};
      this.lastSpoke = {};
      set = new Set();
      this.guildRingingUsers = set;
      set1 = new Set();
      this.poppedOutParticipants = set1;
      secondaryIndexMap = new ChannelRTCParticipants(closure_2[16]).SecondaryIndexMap((type) => {
        const items = [];
        if (tmp) {
          items.push(constants2.SPEAKING);
        }
        if (type.type === constants.USER) {
          const voiceState = type.voiceState;
          if (null != voiceState) {
            if (voiceState.selfVideo) {
              items.push(constants2.VIDEO);
              if (!tmp13) {
                items.push(constants2.FILTERED);
              }
              const tmp13 = type.localVideoDisabled || type.isPoppedOut;
            }
            if (type.type === constants.ACTIVITY) {
              items.push(constants2.ACTIVITY);
            }
            if (!tmp19) {
              items.push(constants2.NOT_POPPED_OUT);
            }
            return items;
          }
        }
        if (callback(type)) {
          items.push(constants2.STREAM);
          let isPoppedOut = type.type === constants.HIDDEN_STREAM;
          if (!isPoppedOut) {
            isPoppedOut = null == type.streamId;
          }
          if (!isPoppedOut) {
            isPoppedOut = type.isPoppedOut;
          }
          if (!isPoppedOut) {
            items.push(constants2.FILTERED);
          }
        }
      }, closure_22);
      this.participantByIndex = secondaryIndexMap;
      this.channelId = arg0;
      return;
    }
  }
  const arg1 = ChannelRTCParticipants;
  let obj = {
    key: "version",
    get() {
      return this.participantByIndex.version;
    }
  };
  const items = [obj, , , , , , , , , , , , , , ];
  obj = {
    key: "size",
    value(arg0) {
      const participantByIndex = this.participantByIndex;
      return participantByIndex.size(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "toArray",
    value(arg0) {
      const participantByIndex = this.participantByIndex;
      return participantByIndex.values(arg0, true);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "rebuild",
    value() {
      const self = this;
      const ChannelRTCParticipants = this;
      const channel = store3.getChannel(this.channelId);
      if (null != channel) {
        if (channel.type !== constants2.GUILD_TEXT) {
          self.call = call.getCall(self.channelId);
          if (channel.isPrivate()) {
            return false;
          }
          let _Set = Set;
          if (channel.isGuildVocalOrThread()) {
            const _Object = Object;
            let recipients = Object.keys(store4.getVoiceStatesForChannel(channel.id));
          } else {
            recipients = channel.recipients;
          }
          const prototype = _Set.prototype;
          _Set = new _Set(recipients);
          let set = _Set;
          _Set.add(store2.getId());
          let arr = _Set;
          if (self.guildRingingUsers.size > 0) {
            const _Set2 = Set;
            const items = [];
            HermesBuiltin.arraySpread(self.guildRingingUsers, HermesBuiltin.arraySpread(_Set, 0));
            set = new Set(items);
            arr = set;
          }
          const allActiveStreamsForChannel = authStore.getAllActiveStreamsForChannel(self.channelId);
          const item = allActiveStreamsForChannel.forEach((ownerId) => set.add(ownerId.ownerId));
          const participantByIndex = self.participantByIndex;
          participantByIndex.clear();
          self.participants = {};
          const item1 = arr.forEach((arg0) => self.updateParticipant(arg0));
          const result = self.updateEmbeddedActivities();
          return true;
        }
      }
      return false;
    }
  };
  items[4] = {
    key: "getParticipant",
    value(arg0) {
      const participantByIndex = this.participantByIndex;
      const value = participantByIndex.get(arg0);
      let tmp2 = null;
      if (null != value) {
        tmp2 = value;
      }
      return tmp2;
    }
  };
  items[5] = {
    key: "updateEmbeddedActivities",
    value() {
      return this.updateParticipant("__EMBEDDED_ACTIVITIES__");
    }
  };
  items[6] = {
    key: "hasEmbeddedActivity",
    value() {
      return this.size(constants4.ACTIVITY) > 0;
    }
  };
  items[7] = {
    key: "updateParticipant",
    value(arg0) {
      const self = this;
      const ChannelRTCParticipants = this;
      const arr = this.participants[arg0];
      if (arg0 === "__EMBEDDED_ACTIVITIES__") {
        let result = self._getParticipantsForEmbeddedActivities();
      } else {
        result = self._getParticipantsForUser(arg0);
      }
      let flag = null != arr;
      if (!flag) {
        flag = 0 !== result.length;
      }
      if (flag) {
        if (null != arr) {
          const item = arr.forEach((id) => {
            const participantByIndex = self.participantByIndex;
            participantByIndex.delete(id.id);
          });
        }
        const item1 = result.forEach((id) => {
          const participantByIndex = self.participantByIndex;
          const result = participantByIndex.set(id.id, id);
        });
        self.participants[arg0] = result;
        flag = true;
      }
      return flag;
    }
  };
  items[8] = {
    key: "updateParticipantSpeaking",
    value(arg0) {
      const ChannelRTCParticipants = this;
      const arr = this.participants[arg0];
      let reduced;
      if (null != arr) {
        reduced = arr.reduce((arg0, type) => {
          let flag = arg0;
          if (type.type === constants.USER) {
            type = undefined;
            let obj = self(closure_2[17]);
            obj = { userId: arg0, checkIsMuted: true };
            const isSpeaking = obj.getIsSpeaking(obj);
            const isSoundSharingResult = soundSharing.isSoundSharing(arg0);
            const participantByIndex = self.participantByIndex;
            const value = participantByIndex.get(type.id);
            if (null != value) {
              type = value.type;
            }
            if (type === constants.USER) {
              return flag;
            }
            if (isSpeaking) {
              const _Date = Date;
              self.lastSpoke[arg0] = Date.now();
            }
            const participantByIndex2 = self.participantByIndex;
            obj = {};
            const merged = Object.assign(type);
            obj["speaking"] = isSpeaking;
            obj["lastSpoke"] = self.lastSpoke[closure_1];
            obj["soundsharing"] = isSoundSharingResult;
            const result = participantByIndex2.set(type.id, obj);
            flag = true;
          } else {
            return flag;
          }
        }, false);
      }
      return null != reduced && reduced;
    }
  };
  items[9] = {
    key: "updateParticipantQuality",
    value(arg0, arg1, arg2) {
      const ChannelRTCParticipants = this;
      const arr = this.participants[arg0];
      let reduced;
      if (null != arr) {
        reduced = arr.reduce((arg0, type) => {
          let flag = arg0;
          if (type.type === constants.STREAM) {
            const participantByIndex = self.participantByIndex;
            const obj = {};
            const merged = Object.assign(type);
            obj["maxResolution"] = type;
            obj["maxFrameRate"] = arg2;
            const result = participantByIndex.set(type.id, obj);
            flag = true;
          }
          return flag;
        }, false);
      }
      return null != reduced && reduced;
    }
  };
  items[10] = {
    key: "updateGuildRingingUsers",
    value(arg0, arg1) {
      const guildRingingUsers = this.guildRingingUsers;
      if (arg1) {
        guildRingingUsers.add(arg0);
      } else {
        guildRingingUsers.delete(arg0);
      }
    }
  };
  items[11] = {
    key: "updateParticipantPoppedOut",
    value(arg0, arg1) {
      const poppedOutParticipants = this.poppedOutParticipants;
      if (arg1) {
        poppedOutParticipants.add(arg0);
      } else {
        poppedOutParticipants.delete(arg0);
      }
    }
  };
  items[12] = {
    key: "_getEmbeddedActivities",
    value() {
      const embeddedActivitiesForChannelIncludingHidden = store.getEmbeddedActivitiesForChannelIncludingHidden(this.channelId);
      const selfEmbeddedActivityForChannel = store.getSelfEmbeddedActivityForChannel(this.channelId);
      let uniqByResult = embeddedActivitiesForChannelIncludingHidden;
      if (null != selfEmbeddedActivityForChannel) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(embeddedActivitiesForChannelIncludingHidden, 0);
        items[arraySpreadResult] = selfEmbeddedActivityForChannel;
        const sum = arraySpreadResult + 1;
        uniqByResult = ChannelRTCParticipants(closure_2[18]).uniqBy(items, (compositeInstanceId) => compositeInstanceId.compositeInstanceId);
        const obj = ChannelRTCParticipants(closure_2[18]);
      }
      let nsfwAllowed;
      const ContentClassificationEmbeddedActivityFilterExperiment = ChannelRTCParticipants(closure_2[19]).ContentClassificationEmbeddedActivityFilterExperiment;
      const currentUser = authStore2.getCurrentUser();
      if (null != currentUser) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      let found = uniqByResult;
      if (!nsfwAllowed) {
        found = uniqByResult;
        if (ContentClassificationEmbeddedActivityFilterExperiment.getConfig({ location: "rtc_participants" }).enabled) {
          found = uniqByResult.filter((contentClassification) => !callback(closure_2[20]).isAgeRestrictedClassificationReference(contentClassification.contentClassification));
        }
      }
      return found;
    }
  };
  items[13] = {
    key: "_getParticipantsForEmbeddedActivities",
    value() {
      const ChannelRTCParticipants = this;
      const result = this._getEmbeddedActivities();
      return result.map((applicationId) => {
        let obj = { type: constants.ACTIVITY, id: callback(obj), applicationId: applicationId.applicationId, activityType: constants2.PLAYING, activityUrl: applicationId.url };
        obj = { applicationId: applicationId.applicationId, instanceId: applicationId.compositeInstanceId };
        let participants = applicationId.participants;
        if (null == participants) {
          participants = [];
        }
        const items = [...participants];
        obj.participants = items;
        const channel = channel.getChannel(self.channelId);
        let guildId;
        if (null != channel) {
          guildId = channel.getGuildId();
        }
        let tmp2 = null;
        if (null != guildId) {
          tmp2 = guildId;
        }
        obj.guildId = tmp2;
        obj.sortKey = arg1.toString();
        return obj;
      });
    }
  };
  items[14] = {
    key: "_getParticipantsForUser",
    value(userId) {
      const self = this;
      const items = [];
      const user = authStore2.getUser(userId);
      if (null == user) {
        return items;
      } else {
        const voiceStateForChannel = store4.getVoiceStateForChannel(self.channelId, userId);
        const voicePlatformForChannel = store4.getVoicePlatformForChannel(self.channelId, userId);
        const channel = store3.getChannel(self.channelId);
        let guildId;
        if (null != channel) {
          guildId = channel.getGuildId();
        }
        const call = self.call;
        let hasItem;
        if (null != call) {
          const ringing = call.ringing;
          if (null != ringing) {
            hasItem = ringing.includes(userId);
          }
        }
        if (!hasItem) {
          const guildRingingUsers = self.guildRingingUsers;
          hasItem = guildRingingUsers.has(userId);
        }
        if (tmp5) {
          let obj = { type: constants.USER };
          const merged = Object.assign(authStore3.getUserStreamData(userId, guildId));
          obj["user"] = user;
          obj["id"] = user.id;
          obj["voiceState"] = voiceStateForChannel;
          obj["voicePlatform"] = voicePlatformForChannel;
          let obj1 = ChannelRTCParticipants(closure_2[17]);
          obj = { userId, checkIsMuted: true };
          obj["speaking"] = obj1.getIsSpeaking(obj);
          let num2 = 0;
          if (null != self.lastSpoke[userId]) {
            num2 = tmp12;
          }
          obj["lastSpoke"] = num2;
          obj["soundsharing"] = soundSharing.isSoundSharing(userId);
          obj["ringing"] = tmp4;
          obj["userNick"] = callback(closure_2[21]).getName(guildId, self.channelId, user);
          const obj4 = callback(closure_2[21]);
          obj["userAvatarDecoration"] = ChannelRTCParticipants(closure_2[22]).getAvatarDecoration(user, guildId);
          obj["localVideoDisabled"] = localVideoDisabled.isLocalVideoDisabled(user.id);
          const poppedOutParticipants = self.poppedOutParticipants;
          obj["isPoppedOut"] = poppedOutParticipants.has(user.id);
          items.push(obj);
          const obj5 = ChannelRTCParticipants(closure_2[22]);
        }
        let streamForUser = authStore.getStreamForUser(userId, guildId);
        if (null == streamForUser) {
          streamForUser = authStore.getActiveStreamForUser(userId, guildId);
        }
        if (null != streamForUser) {
          if (streamForUser.channelId === self.channelId) {
            const encodeStreamKeyResult = ChannelRTCParticipants(closure_2[23]).encodeStreamKey(streamForUser);
            const participant = self.getParticipant(encodeStreamKeyResult);
            let isSelfStreamHiddenResult = streamForUser.ownerId === store2.getId();
            if (isSelfStreamHiddenResult) {
              isSelfStreamHiddenResult = authStore.isSelfStreamHidden(self.channelId);
            }
            let type;
            if (null != participant) {
              type = participant.type;
            }
            let tmp26 = null;
            if (type === constants.STREAM) {
              obj = {};
              let tmp27;
              if (null != participant.maxResolution) {
                obj1 = {};
                const merged1 = Object.assign(participant.maxResolution);
                tmp27 = obj1;
              }
              obj.maxResolution = tmp27;
              obj.maxFrameRate = participant.maxFrameRate;
              tmp26 = obj;
            }
            const obj2 = {};
            const merged2 = Object.assign(authStore3.getUserStreamData(userId, guildId, constants3.STREAM));
            const merged3 = Object.assign(tmp26);
            obj2["type"] = isSelfStreamHiddenResult ? constants.HIDDEN_STREAM : constants.STREAM;
            obj2["id"] = encodeStreamKeyResult;
            let selfVideo;
            if (null != voiceStateForChannel) {
              selfVideo = voiceStateForChannel.selfVideo;
            }
            obj2["userVideo"] = null != selfVideo && selfVideo;
            obj2["user"] = user;
            const obj11 = ChannelRTCParticipants(closure_2[23]);
            const tmp39 = null != selfVideo && selfVideo;
            obj2["userNick"] = callback(closure_2[21]).getName(guildId, self.channelId, user);
            obj2["stream"] = streamForUser;
            const poppedOutParticipants2 = self.poppedOutParticipants;
            obj2["isPoppedOut"] = poppedOutParticipants2.has(encodeStreamKeyResult);
            items.push(obj2);
            const obj9 = callback(closure_2[21]);
          }
        }
        return items;
      }
    }
  };
  return callback(ChannelRTCParticipants, items);
}();
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/calls/ChannelRTCParticipants.tsx");

export default tmp4;
export { getEmbeddedActivityParticipantId };
export const activityParticipantIdToApplicationId = function activityParticipantIdToApplicationId(id) {
  let tmp = id;
  if (null != id) {
    tmp = id.split("-")[1];
  }
  return tmp;
};
export { sortKey };
export const areParticipantsEqual = function areParticipantsEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  [, tmp] = arg0;
  [, tmp2] = arg1;
  return tmp === tmp2;
};
export const ChannelRTCParticipantsIndexes = obj;
