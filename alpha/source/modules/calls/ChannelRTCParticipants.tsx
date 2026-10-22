// Module ID: 6765
// Function ID: 6766
// Name: ChannelRTCParticipants
// Dependencies: [4820, 6760, 5992, 6671, 6627, 502, 6482, 4821, 2014, 6670, 1392, 6764, 5616, 5618, 1087, 6761, 5704, 6676, 4896, 6766, 12, 5596, 5597, 5975, 6767, 6630, 2]
// Exports: activityParticipantIdToApplicationId, areParticipantsEqual, getEmbeddedActivityParticipantId, getFrameParticipantId

// Module 6765 (ChannelRTCParticipants)
import _mod12 from "module_12" /* 12 */;
import ContentClassificationEmbeddedActivityFilterExperiment2 from "ContentClassificationEmbeddedActivityFilterExperiment" /* 5596 */;
import ContentClassificationReference from "ContentClassificationReference" /* 5597 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5975 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6630 */;
import getParticipantUserKeyDefault from "getParticipantUserKey" /* 6676 */;
import useIsSpeaking from "useIsSpeaking" /* 6766 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;
import FramesStore from "FramesStore" /* 6760 */;
import SoundboardStore from "SoundboardStore" /* 5992 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 6671 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6627 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 6482 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
import SpeakingStore from "SpeakingStore" /* 6670 */;
import UserStore from "UserStore" /* 1392 */;
import VideoStreamStore from "VideoStreamStore" /* 6764 */;
import VoiceStateStore from "VoiceStateStore" /* 5616 */;
import CallConstants from "CallConstants" /* 5618 */;
import Constants_mod from "Constants" /* 1087 */;
import FramesConstants from "FramesConstants" /* 6761 */;
import Constants_mod2 from "Constants" /* 5704 */;
import size from "module_2" /* 2 */;

let set;

let asLaunched;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let getFrameLaunchChannelId;
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
          let selfVideo;
          if (voiceState != null) {
            selfVideo = voiceState.selfVideo;
          }
          let str = "\u0003";
          if (!selfVideo) {
            const voiceState2 = type.voiceState;
            let selfStream;
            if (voiceState2 != null) {
              selfStream = voiceState2.selfStream;
            }
            str = "\u0005";
            if (selfStream) {
              str = "\u0004";
            }
          }
          const _HermesInternal = HermesInternal;
          return "" + str + getParticipantUserKeyDefault(type.userNick, type.user);
        }
      }
    }
    let str4 = "\u0003";
    if (type.userVideo) {
      str4 = "\u0002";
    }
    const _HermesInternal2 = HermesInternal;
    return "" + str4 + getParticipantUserKeyDefault(type.userNick, type.user) + "\u0003";
  }
}
({ isStreamParticipant: closure_15, ParticipantTypes: closure_16 } = CallConstants);
let Constants = Constants_mod2;
({ ActivityTypes: closure_17, ChannelTypes: closure_18 } = Constants);
({ asLaunched, getFrameLaunchChannelId } = FramesConstants);
Constants = Constants_mod2;
({ MediaEngineContextTypes: closure_19, Features: closure_20 } = Constants);
const __EMBEDDED_ACTIVITIES__ = "__EMBEDDED_ACTIVITIES__";
const ChannelRTCParticipantsIndexes = { VIDEO: "VIDEO", STREAM: "STREAM", FILTERED: "FILTERED", SPEAKING: "SPEAKING", ACTIVITY: "ACTIVITY", NOT_POPPED_OUT: "NOT_POPPED_OUT", STAGE_SPEAKER: "STAGE_SPEAKER" };
let result = size.fileFinishedImporting("modules/calls/ChannelRTCParticipants.tsx");
class ChannelRTCParticipants {
  constructor(channelId) {
    const obj = Object.create(new.target.prototype);
    obj.participants = {};
    obj.lastSpoke = {};
    obj.poppedOutParticipants = new Set();
    new Set();
    obj.stageSpeakerIds = new Set();
    new Set();
    const secondaryIndexMap = new obj(4896).SecondaryIndexMap((type) => {
      const items = [];
      const tmp2 = type.type === constants.USER && type.speaking;
      if (tmp2) {
        items.push(obj.SPEAKING);
      }
      if (type.type === constants.USER) {
        const voiceState = type.voiceState;
        let selfVideo;
        if (voiceState != null) {
          selfVideo = voiceState.selfVideo;
        }
        if (selfVideo) {
          items.push(obj.VIDEO);
          const tmp11 = obj;
          const tmp13 = type.localVideoDisabled || type.isPoppedOut;
          if (!tmp13) {
            items.push(tmp11.FILTERED);
          }
        }
        if (type.type === constants.ACTIVITY) {
          items.push(obj.ACTIVITY);
        }
        if (!("isPoppedOut" in type && type.isPoppedOut)) {
          items.push(obj.NOT_POPPED_OUT);
        }
        let hasItem = !tmp17 && type.type !== tmp.ACTIVITY;
        if (hasItem) {
          const stageSpeakerIds = obj.stageSpeakerIds;
          hasItem = stageSpeakerIds.has(type.user.id);
        }
        if (hasItem) {
          items.push(obj.STAGE_SPEAKER);
        }
        return items;
      }
      if (closure_15(type)) {
        items.push(obj.STREAM);
        let isPoppedOut = type.type === tmp.HIDDEN_STREAM;
        const tmp7 = obj;
        if (!isPoppedOut) {
          isPoppedOut = null == type.streamId;
        }
        if (!isPoppedOut) {
          isPoppedOut = type.isPoppedOut;
        }
        if (!isPoppedOut) {
          items.push(tmp7.FILTERED);
        }
      }
    }, sortKey);
    obj.participantByIndex = secondaryIndexMap;
    obj.channelId = channelId;
    return obj;
  }
  size(arg0) {
    const participantByIndex = this.participantByIndex;
    return participantByIndex.size(arg0);
  }
  toArray(arg0) {
    const participantByIndex = this.participantByIndex;
    return participantByIndex.values(arg0, true);
  }
  rebuild() {
    const self = this;
    const channel = ChannelStore.getChannel(this.channelId);
    if (null != channel) {
      if (channel.type !== constants3.GUILD_TEXT) {
        let recipients;
        self.call = CallStore.getCall(self.channelId);
        if (channel.isPrivate()) {
          return false;
        }
        const _Set = Set;
        if (channel.isGuildVocalOrThread()) {
          const _Object = Object;
          recipients = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id));
        } else {
          recipients = channel.recipients;
        }
        const self2 = this;
        const self3 = this;
        const _Set1 = new _Set(recipients);
        _Set1.add(AuthenticationStore.getId());
        const allActiveStreamsForChannel = ApplicationStreamingStore.getAllActiveStreamsForChannel(self.channelId);
        const item = allActiveStreamsForChannel.forEach((ownerId) => _Set1.add(ownerId.ownerId));
        const participantByIndex = self.participantByIndex;
        participantByIndex.clear();
        self.participants = {};
        const stageSpeakerIds = self.stageSpeakerIds;
        stageSpeakerIds.clear();
        const item1 = _Set1.forEach((item) => self.updateParticipant(item));
        const result = self.updateEmbeddedActivities();
        return true;
      }
    }
    return false;
  }
  getParticipant(arg0) {
    const participantByIndex = this.participantByIndex;
    let value = participantByIndex.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  updateEmbeddedActivities() {
    return this.updateParticipant(__EMBEDDED_ACTIVITIES__);
  }
  hasEmbeddedActivity() {
    return this.size(obj.ACTIVITY) > 0;
  }
  updateParticipant(id) {
    let result;
    const self = this;
    const tmp = __EMBEDDED_ACTIVITIES__;
    if (id === __EMBEDDED_ACTIVITIES__) {
      result = self._getParticipantsForEmbeddedActivities();
    } else {
      result = self._getParticipantsForUser(id);
    }
    let flag = null != arr || 0 !== result.length;
    if (flag) {
      if (this.participants[id] != null) {
        const item = arr.forEach((id) => {
          const participantByIndex = self.participantByIndex;
          participantByIndex.delete(id.id);
        });
      }
      if (id !== tmp) {
        self.updateStageSpeaker(id);
      }
      const item1 = result.forEach((id) => {
        const participantByIndex = self.participantByIndex;
        const result = participantByIndex.set(id.id, id);
      });
      self.participants[id] = result;
      flag = true;
    }
    return flag;
  }
  updateStageSpeaker(id) {
    const self = this;
    const channel = ChannelStore.getChannel(this.channelId);
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult != null) {
      if (isGuildStageVoiceResult) {
        if (StageChannelRoleStore.isSpeaker(id, self.channelId)) {
          const stageSpeakerIds = self.stageSpeakerIds;
          stageSpeakerIds.add(id);
        }
      }
    }
    const stageSpeakerIds2 = self.stageSpeakerIds;
    stageSpeakerIds2.delete(id);
  }
  updateParticipantSpeaking(id) {
    const self = this;
    const userId = id;
    let flag;
    if (this.participants[id] != null) {
      flag = arr.reduce((acc, type) => {
        let flag = acc;
        if (type.type === constants.USER) {
          const obj2 = { userId, checkIsMuted: true };
          const obj = useIsSpeaking;
          const isSpeaking = obj.getIsSpeaking(obj2);
          const isSoundSharingResult = SpeakingStore.isSoundSharing(userId);
          const participantByIndex = self.participantByIndex;
          const isUserPlayingSoundsResult = SoundboardStore.isUserPlayingSounds(userId);
          const value = participantByIndex.get(type.id);
          type = undefined;
          if (value != null) {
            type = value.type;
          }
          if (type === tmp.USER) {
            if (value.speaking === isSpeaking) {
              return flag;
            }
          }
          if (isSpeaking) {
            const _Date = Date;
            self.lastSpoke[userId] = Date.now();
          }
          const participantByIndex2 = tmp10.participantByIndex;
          const id = type.id;
          const obj3 = { speaking: isSpeaking, lastSpoke: self.lastSpoke[userId], playingSoundboard: isUserPlayingSoundsResult, soundsharing: isSoundSharingResult };
          set = participantByIndex2.set;
          const merged = Object.assign(type);
          const result = set(id, obj3);
          flag = true;
        } else {
          return flag;
        }
      }, false);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  updateParticipantQuality(arg0, maxResolution, maxFrameRate) {
    const self = this;
    let flag;
    if (this.participants[arg0] != null) {
      flag = arr.reduce((acc, type) => {
        let flag = acc;
        if (type.type === constants.STREAM) {
          const participantByIndex = self.participantByIndex;
          const id = type.id;
          const obj = { maxResolution, maxFrameRate };
          set = participantByIndex.set;
          const merged = Object.assign(type);
          const result = set(id, obj);
          flag = true;
        }
        return flag;
      }, false);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  updateParticipantPoppedOut(participantId, arg1) {
    const poppedOutParticipants = this.poppedOutParticipants;
    const tmp = arg1;
    if (tmp) {
      poppedOutParticipants.add(participantId);
    } else {
      poppedOutParticipants.delete(participantId);
    }
  }
  _getEmbeddedActivities() {
    const embeddedActivitiesForChannelIncludingHidden = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannelIncludingHidden(this.channelId);
    const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(this.channelId);
    let uniqByResult = embeddedActivitiesForChannelIncludingHidden;
    if (null != selfEmbeddedActivityForChannel) {
      let obj = _mod12;
      const items = [];
      items[HermesBuiltin.arraySpread(items, embeddedActivitiesForChannelIncludingHidden, 0)] = selfEmbeddedActivityForChannel;
      uniqByResult = obj.uniqBy(items, (compositeInstanceId) => compositeInstanceId.compositeInstanceId);
    }
    const ContentClassificationEmbeddedActivityFilterExperiment = ContentClassificationEmbeddedActivityFilterExperiment2.ContentClassificationEmbeddedActivityFilterExperiment;
    const enabled = ContentClassificationEmbeddedActivityFilterExperiment.getConfig({ location: "rtc_participants" }).enabled;
    const currentUser = UserStore.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    let found = uniqByResult;
    if (!nsfwAllowed) {
      found = uniqByResult;
      if (enabled) {
        found = uniqByResult.filter((contentClassification) => {
          const obj = ContentClassificationReference;
          return !obj.isAgeRestrictedClassificationReference(contentClassification.contentClassification);
        });
      }
    }
    return found;
  }
  _getParticipantsForEmbeddedActivities() {
    const self = this;
    const result = this._getEmbeddedActivities();
    return result.map((applicationId, index) => {
      let combined;
      let compositeInstanceId;
      let guildId;
      let items;
      let participants;
      const obj = { type: constants.ACTIVITY, id: combined, applicationId: applicationId.applicationId, activityType: constants2.PLAYING, activityUrl: null, participants: items, guildId, sortKey: index.toString() };
      ({ applicationId, compositeInstanceId } = applicationId);
      if (null != compositeInstanceId) {
        const _HermesInternal2 = HermesInternal;
        combined = "activity-" + applicationId + "-" + compositeInstanceId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "activity-" + applicationId;
      }
      ({ url: obj.activityUrl, participants } = applicationId);
      if (participants == null) {
        participants = [];
      }
      items = [...participants];
      const channel = ChannelStore.getChannel(self.channelId);
      guildId = undefined;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      if (guildId == null) {
        guildId = null;
      }
      return obj;
    });
  }
  _getParticipantsForUser(userId) {
    let flag2;
    let num;
    let obj10;
    let obj2;
    let obj3;
    let obj4;
    let poppedOutParticipants;
    let poppedOutParticipants2;
    let tmp8Result;
    const items = [];
    const user = UserStore.getUser(userId);
    if (null == user) {
      return items;
    } else {
      const self = this;
      const voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(this.channelId, userId);
      const voicePlatformForChannel = VoiceStateStore.getVoicePlatformForChannel(this.channelId, userId);
      const channel = ChannelStore.getChannel(this.channelId);
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      const call = self.call;
      let flag;
      if (call != null) {
        const ringing = call.ringing;
        if (ringing != null) {
          flag = ringing.includes(userId);
        }
      }
      if (flag == null) {
        flag = false;
      }
      const tmp3 = null != voiceStateForChannel || flag;
      if (tmp3) {
        const obj = { type: constants.USER, user, id: user.id, voiceState: voiceStateForChannel, voicePlatform: voicePlatformForChannel, speaking: obj2.getIsSpeaking(obj3), lastSpoke: num, playingSoundboard: SoundboardStore.isUserPlayingSounds(userId), soundsharing: SpeakingStore.isSoundSharing(userId), ringing: flag, userNick: obj4.getName(guildId, self.channelId, user), userAvatarDecoration: tmp8Result.getAvatarDecoration(user, guildId), localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isPoppedOut: poppedOutParticipants.has(user.id) };
        const merged = Object.assign(VideoStreamStore.getUserStreamData(userId, guildId));
        obj3 = { userId, checkIsMuted: true };
        num = self.lastSpoke[userId];
        obj2 = useIsSpeaking;
        const tmp8 = require;
        if (num == null) {
          num = 0;
        }
        obj4 = NicknameUtilsDefault;
        poppedOutParticipants = self.poppedOutParticipants;
        tmp8Result = tmp8(6767);
        items.push(obj);
      }
      let streamForUser = ApplicationStreamingStore.getStreamForUser(userId, guildId);
      if (streamForUser == null) {
        streamForUser = obj6.getActiveStreamForUser(userId, guildId);
      }
      if (MediaEngineStore.supports(constants5.VIDEO)) {
        if (null != streamForUser) {
          if (streamForUser.channelId === self.channelId) {
            const obj12 = StreamKeyUtils;
            const encodeStreamKeyResult = obj12.encodeStreamKey(streamForUser);
            const participant = self.getParticipant(encodeStreamKeyResult);
            let type;
            const tmp18 = streamForUser.ownerId === AuthenticationStore.getId() && ApplicationStreamingStore.isSelfStreamHidden(self.channelId);
            if (participant != null) {
              type = participant.type;
            }
            let tmp21 = null;
            if (type === constants.STREAM) {
              let tmp22;
              if (null != participant.maxResolution) {
                const obj5 = {};
                const merged1 = Object.assign(participant.maxResolution);
                tmp22 = obj5;
              }
              tmp21 = { maxResolution: tmp22, maxFrameRate: participant.maxFrameRate };
              const obj7 = { maxResolution: tmp22, maxFrameRate: participant.maxFrameRate };
            }
            const obj8 = { type: tmp18 ? constants.HIDDEN_STREAM : constants.STREAM, id: encodeStreamKeyResult, userVideo: flag2, user, userNick: obj10.getName(guildId, self.channelId, user), stream: streamForUser, isPoppedOut: poppedOutParticipants2.has(encodeStreamKeyResult) };
            const merged2 = Object.assign(VideoStreamStore.getUserStreamData(userId, guildId, constants4.STREAM));
            const merged3 = Object.assign(tmp21);
            flag2 = undefined;
            if (voiceStateForChannel != null) {
              flag2 = voiceStateForChannel.selfVideo;
            }
            if (flag2 == null) {
              flag2 = false;
            }
            poppedOutParticipants2 = self.poppedOutParticipants;
            obj10 = NicknameUtilsDefault;
            items.push(obj8);
          }
        }
      }
      return items;
    }
  }
}
Object.defineProperty(ChannelRTCParticipants.prototype, "version", {
  get: function version() {
    return this.participantByIndex.version;
  },
  set: undefined
});

export default ChannelRTCParticipants;
export const getEmbeddedActivityParticipantId = function getEmbeddedActivityParticipantId(arg0) {
  let applicationId;
  let combined;
  let instanceId;
  ({ applicationId, instanceId } = arg0);
  if (null != instanceId) {
    const _HermesInternal2 = HermesInternal;
    combined = "activity-" + applicationId + "-" + instanceId;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "activity-" + applicationId;
  }
  return combined;
};
export const getFrameParticipantId = function getFrameParticipantId(arg0) {
  let applicationId;
  let combined;
  let id;
  ({ applicationId, id } = arg0);
  if (null != id) {
    const _HermesInternal2 = HermesInternal;
    combined = "activity-" + applicationId + "-" + id;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "activity-" + applicationId;
  }
  return combined;
};
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
export { ChannelRTCParticipantsIndexes };
