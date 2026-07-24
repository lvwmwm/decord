// Module ID: 10561
// Function ID: 82407
// Name: getEmbeddedActivityParticipantId
// Dependencies: [6, 7, 1347, 4149, 1194, 4809, 1348, 4177, 4952, 1849, 10562, 4146, 4148, 653, 4191, 4960, 3754, 10563, 22, 10564, 10565, 4319, 9126, 4194, 2]
// Exports: activityParticipantIdToApplicationId, areParticipantsEqual

// Module 10561 (getEmbeddedActivityParticipantId)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ParticipantTypes from "ParticipantTypes";
import ME from "ME";
import { MediaEngineContextTypes } from "DesktopSources";

let closure_15;
let closure_16;
let closure_17;
let closure_18;
const require = arg1;
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
            tmp2 = null != voiceState2 && voiceState2.selfStream;
          } else {
            str = "\u0003";
          }
          const _HermesInternal = HermesInternal;
          return "" + str + importDefault(4960)(type.userNick, type.user);
        }
      }
    }
    let str4 = "\u0003";
    if (type.userVideo) {
      str4 = "\u0002";
    }
    const _HermesInternal2 = HermesInternal;
    return "" + str4 + importDefault(4960)(type.userNick, type.user) + "\u0003";
  }
}
({ isStreamParticipant: closure_15, ParticipantTypes: closure_16 } = ParticipantTypes);
({ ActivityTypes: closure_17, ChannelTypes: closure_18 } = ME);
let obj = { VIDEO: "VIDEO", STREAM: "STREAM", FILTERED: "FILTERED", SPEAKING: "SPEAKING", ACTIVITY: "ACTIVITY", NOT_POPPED_OUT: "NOT_POPPED_OUT" };
const tmp4 = (() => {
  class ChannelRTCParticipants {
    constructor(arg0) {
      tmp = outer1_3(this, ChannelRTCParticipants);
      this.participants = {};
      this.lastSpoke = {};
      set = new Set();
      this.guildRingingUsers = set;
      set1 = new Set();
      this.poppedOutParticipants = set1;
      secondaryIndexMap = new ChannelRTCParticipants(outer1_2[16]).SecondaryIndexMap((type) => {
        const items = [];
        if (tmp) {
          items.push(outer2_20.SPEAKING);
        }
        if (type.type === outer2_16.USER) {
          const voiceState = type.voiceState;
          if (null != voiceState) {
            if (voiceState.selfVideo) {
              items.push(outer2_20.VIDEO);
              if (!tmp13) {
                items.push(outer2_20.FILTERED);
              }
              tmp13 = type.localVideoDisabled || type.isPoppedOut;
            }
            if (type.type === outer2_16.ACTIVITY) {
              items.push(outer2_20.ACTIVITY);
            }
            if (!tmp19) {
              items.push(outer2_20.NOT_POPPED_OUT);
            }
            return items;
          }
        }
        if (outer2_15(type)) {
          items.push(outer2_20.STREAM);
          let isPoppedOut = type.type === outer2_16.HIDDEN_STREAM;
          if (!isPoppedOut) {
            isPoppedOut = null == type.streamId;
          }
          if (!isPoppedOut) {
            isPoppedOut = type.isPoppedOut;
          }
          if (!isPoppedOut) {
            items.push(outer2_20.FILTERED);
          }
        }
      }, outer1_22);
      this.participantByIndex = secondaryIndexMap;
      this.channelId = arg0;
      return;
    }
  }
  let obj = {
    key: "version",
    get() {
      return this.participantByIndex.version;
    }
  };
  let items = [obj, , , , , , , , , , , , , , ];
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
      let self = this;
      self = this;
      const channel = outer1_9.getChannel(this.channelId);
      if (null != channel) {
        if (channel.type !== outer1_18.GUILD_TEXT) {
          self.call = outer1_8.getCall(self.channelId);
          if (channel.isPrivate()) {
            return false;
          }
          let _Set = Set;
          if (channel.isGuildVocalOrThread()) {
            const _Object = Object;
            let recipients = Object.keys(outer1_14.getVoiceStatesForChannel(channel.id));
          } else {
            recipients = channel.recipients;
          }
          const prototype = _Set.prototype;
          _Set = new _Set(recipients);
          let set = _Set;
          _Set.add(outer1_7.getId());
          let arr = _Set;
          if (self.guildRingingUsers.size > 0) {
            const _Set2 = Set;
            const items = [];
            HermesBuiltin.arraySpread(self.guildRingingUsers, HermesBuiltin.arraySpread(_Set, 0));
            set = new Set(items);
            arr = set;
          }
          const allActiveStreamsForChannel = outer1_6.getAllActiveStreamsForChannel(self.channelId);
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
      return this.size(outer1_20.ACTIVITY) > 0;
    }
  };
  items[7] = {
    key: "updateParticipant",
    value(arg0) {
      let self = this;
      self = this;
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
      const self = this;
      let closure_1 = arg0;
      let reduced;
      if (null != this.participants[arg0]) {
        reduced = arr.reduce((arg0, type) => {
          let flag = arg0;
          if (type.type === outer2_16.USER) {
            type = undefined;
            let obj = ChannelRTCParticipants(outer2_2[17]);
            obj = { userId: closure_1, checkIsMuted: true };
            const isSpeaking = obj.getIsSpeaking(obj);
            const isSoundSharingResult = outer2_11.isSoundSharing(closure_1);
            const participantByIndex = self.participantByIndex;
            const value = participantByIndex.get(type.id);
            if (null != value) {
              type = value.type;
            }
            if (type === outer2_16.USER) {
              return flag;
            }
            if (isSpeaking) {
              const _Date = Date;
              self.lastSpoke[closure_1] = Date.now();
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
      const self = this;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let reduced;
      if (null != this.participants[arg0]) {
        reduced = arr.reduce((arg0, type) => {
          let flag = arg0;
          if (type.type === outer2_16.STREAM) {
            const participantByIndex = self.participantByIndex;
            const obj = {};
            const merged = Object.assign(type);
            obj["maxResolution"] = closure_1;
            obj["maxFrameRate"] = closure_2;
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
      const embeddedActivitiesForChannelIncludingHidden = outer1_5.getEmbeddedActivitiesForChannelIncludingHidden(this.channelId);
      const selfEmbeddedActivityForChannel = outer1_5.getSelfEmbeddedActivityForChannel(this.channelId);
      let uniqByResult = embeddedActivitiesForChannelIncludingHidden;
      if (null != selfEmbeddedActivityForChannel) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(embeddedActivitiesForChannelIncludingHidden, 0);
        items[arraySpreadResult] = selfEmbeddedActivityForChannel;
        const sum = arraySpreadResult + 1;
        uniqByResult = ChannelRTCParticipants(outer1_2[18]).uniqBy(items, (compositeInstanceId) => compositeInstanceId.compositeInstanceId);
        const obj = ChannelRTCParticipants(outer1_2[18]);
      }
      let nsfwAllowed;
      const ContentClassificationEmbeddedActivityFilterExperiment = ChannelRTCParticipants(outer1_2[19]).ContentClassificationEmbeddedActivityFilterExperiment;
      const currentUser = outer1_12.getCurrentUser();
      if (null != currentUser) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      let found = uniqByResult;
      if (!nsfwAllowed) {
        found = uniqByResult;
        if (ContentClassificationEmbeddedActivityFilterExperiment.getConfig({ location: "rtc_participants" }).enabled) {
          found = uniqByResult.filter((contentClassification) => !ChannelRTCParticipants(outer2_2[20]).isAgeRestrictedClassificationReference(contentClassification.contentClassification));
        }
      }
      return found;
    }
  };
  items[13] = {
    key: "_getParticipantsForEmbeddedActivities",
    value() {
      const self = this;
      const result = this._getEmbeddedActivities();
      return result.map((applicationId) => {
        obj = { type: outer2_16.ACTIVITY, id: outer2_21(obj), applicationId: applicationId.applicationId, activityType: outer2_17.PLAYING, activityUrl: applicationId.url };
        obj = { applicationId: applicationId.applicationId, instanceId: applicationId.compositeInstanceId };
        let participants = applicationId.participants;
        if (null == participants) {
          participants = [];
        }
        const items = [...participants];
        obj.participants = items;
        const channel = outer2_9.getChannel(self.channelId);
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
      const user = outer1_12.getUser(userId);
      if (null == user) {
        return items;
      } else {
        const voiceStateForChannel = outer1_14.getVoiceStateForChannel(self.channelId, userId);
        const voicePlatformForChannel = outer1_14.getVoicePlatformForChannel(self.channelId, userId);
        const channel = outer1_9.getChannel(self.channelId);
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
          let obj = { type: outer1_16.USER };
          const merged = Object.assign(outer1_13.getUserStreamData(userId, guildId));
          obj["user"] = user;
          obj["id"] = user.id;
          obj["voiceState"] = voiceStateForChannel;
          obj["voicePlatform"] = voicePlatformForChannel;
          let obj1 = ChannelRTCParticipants(outer1_2[17]);
          obj = { userId, checkIsMuted: true };
          obj["speaking"] = obj1.getIsSpeaking(obj);
          let num2 = 0;
          if (null != self.lastSpoke[userId]) {
            num2 = tmp12;
          }
          obj["lastSpoke"] = num2;
          obj["soundsharing"] = outer1_11.isSoundSharing(userId);
          obj["ringing"] = tmp4;
          obj["userNick"] = outer1_1(outer1_2[21]).getName(guildId, self.channelId, user);
          const obj4 = outer1_1(outer1_2[21]);
          obj["userAvatarDecoration"] = ChannelRTCParticipants(outer1_2[22]).getAvatarDecoration(user, guildId);
          obj["localVideoDisabled"] = outer1_10.isLocalVideoDisabled(user.id);
          const poppedOutParticipants = self.poppedOutParticipants;
          obj["isPoppedOut"] = poppedOutParticipants.has(user.id);
          items.push(obj);
          const obj5 = ChannelRTCParticipants(outer1_2[22]);
        }
        let streamForUser = outer1_6.getStreamForUser(userId, guildId);
        if (null == streamForUser) {
          streamForUser = outer1_6.getActiveStreamForUser(userId, guildId);
        }
        if (null != streamForUser) {
          if (streamForUser.channelId === self.channelId) {
            const encodeStreamKeyResult = ChannelRTCParticipants(outer1_2[23]).encodeStreamKey(streamForUser);
            const participant = self.getParticipant(encodeStreamKeyResult);
            let isSelfStreamHiddenResult = streamForUser.ownerId === outer1_7.getId();
            if (isSelfStreamHiddenResult) {
              isSelfStreamHiddenResult = outer1_6.isSelfStreamHidden(self.channelId);
            }
            let type;
            if (null != participant) {
              type = participant.type;
            }
            let tmp26 = null;
            if (type === outer1_16.STREAM) {
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
            const merged2 = Object.assign(outer1_13.getUserStreamData(userId, guildId, outer1_19.STREAM));
            const merged3 = Object.assign(tmp26);
            obj2["type"] = isSelfStreamHiddenResult ? outer1_16.HIDDEN_STREAM : outer1_16.STREAM;
            obj2["id"] = encodeStreamKeyResult;
            let selfVideo;
            if (null != voiceStateForChannel) {
              selfVideo = voiceStateForChannel.selfVideo;
            }
            obj2["userVideo"] = null != selfVideo && selfVideo;
            obj2["user"] = user;
            const obj11 = ChannelRTCParticipants(outer1_2[23]);
            const tmp39 = null != selfVideo && selfVideo;
            obj2["userNick"] = outer1_1(outer1_2[21]).getName(guildId, self.channelId, user);
            obj2["stream"] = streamForUser;
            const poppedOutParticipants2 = self.poppedOutParticipants;
            obj2["isPoppedOut"] = poppedOutParticipants2.has(encodeStreamKeyResult);
            items.push(obj2);
            const obj9 = outer1_1(outer1_2[21]);
          }
        }
        return items;
      }
    }
  };
  return callback(ChannelRTCParticipants, items);
})();
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/calls/ChannelRTCParticipants.tsx");

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
