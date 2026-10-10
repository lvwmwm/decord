// Module ID: 6036
// Function ID: 6037
// Name: ChannelRTCStore
// Dependencies: [32, 2064, 5111, 5948, 5897, 502, 5758, 2065, 5108, 2116, 5947, 1390, 6037, 5113, 5115, 1085, 3, 6038, 12, 38, 5900, 504, 584, 2]

// Module 6036 (ChannelRTCStore)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6038 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import GameConsoleStore from "GameConsoleStore" /* 5111 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5948 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5897 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5758 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import PresenceStore from "PresenceStore" /* 5108 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import SpeakingStore from "SpeakingStore" /* 5947 */;
import UserStore from "UserStore" /* 1390 */;
import VideoStreamStore from "VideoStreamStore" /* 6037 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;
import CallConstants from "CallConstants" /* 5115 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const ChannelRTCParticipantsDefault = ChannelRTCParticipants;

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
function getParticipants(arg0) {
  let tmp2 = closure_28[arg0];
  if (null == tmp2) {
    const self = this;
    const self2 = this;
    const tmp6 = new ChannelRTCParticipantsDefault(arg0);
    tmp[arg0] = tmp6;
    tmp2 = tmp6;
  }
  return tmp2;
}
function updateParticipant(arg0, arr) {
  let closure_0 = arg0;
  const f92610 = (dependencyMap) => dependencyMap.updateParticipant(f92610);
  return arr.reduce(function(acc, item) {
    let tmp = item;
    let tmp3 = closure_2_28[item];
    if (null == tmp3) {
      const self = this;
      const self2 = this;
      const tmp7 = new closure_2_1(closure_2_2[17])(item);
      closure_2_28[item] = tmp7;
      tmp3 = tmp7;
    }
    let flag = acc;
    if (f92610(tmp3)) {
      obj = tmp2[item];
      if (null == obj) {
        const self3 = this;
        const self4 = this;
        const tmp12 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp12;
        obj = tmp12;
      }
      if (0 !== obj.size()) {
        const _Boolean = Boolean;
        const channel = closure_2_10.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!_Boolean(isGuildVocalOrThreadResult)) {
          let tmp19;
          let VIDEO;
          let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
          const tmp16 = closure_2_0;
          const tmp17 = closure_2_2;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            tmp19 = constants3;
            VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp19.VOICE) {
            delete closure_2_31[tmp];
            delete closure_2_32[tmp];
          } else {
            closure_2_31[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp19 = constants3;
      }
      const id1 = id.getId();
      let obj2 = tmp2[item];
      if (null == obj2) {
        const self5 = this;
        const self6 = this;
        const tmp27 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp27;
        obj2 = tmp27;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
          const found = toArrayResult.find((type) => {
            const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            return tmp;
          });
          if (null != found) {
            closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else {
            id = id1;
            if (1 !== obj2.size()) {
              if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const toArrayResult1 = obj2.toArray();
                const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                let id3;
                if (found1 != null) {
                  id3 = found1.id;
                }
                if (id3 == null) {
                  id3 = id1;
                }
                id = id3;
              }
            }
          }
          const channel1 = closure_2_10.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp40 = closure_2_29[item];
          if (tmp40 == null) {
            const items = [tmp38, constants2.NONE];
            tmp40 = items;
          }
          const first = closure_2_3(tmp40, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp44 = null == participant;
              if (!tmp44) {
                tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
              }
              id2 = first;
              if (tmp44) {
                id2 = tmp57.NONE;
              }
            }
          }
          const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
          if (tmp48) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_2_42(item, items1);
          flag = true;
        }
      }
      closure_2_42(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
function getSelectedParticipantId(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  if (channel != null) {
    channel.isDM();
  }
  let tmp4 = closure_29[arg0];
  if (tmp4 == null) {
    const items = [tmp3, tmp2.NONE];
    tmp4 = items;
  }
  return tmp4;
}
function setSelectedParticipantId(channelId, arg1) {
  const tmp = channelId;
  if (null == closure_30[channelId]) {
    closure_30[channelId] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 };
  }
  const nowResult = performance.now();
  const tmp6 = null != closure_29[channelId] && _slicedToArray(tmp5[channelId], 1)[0] !== constants2.NONE;
  if (closure_30[channelId].lastUpdate > 0) {
    let str = "gridDurationMs";
    const diff = nowResult - tmp3.lastUpdate;
    if (tmp6) {
      str = "focusDurationMs";
    }
    closure_30[channelId][str] = closure_30[channelId][str] + diff;
  }
  closure_30[channelId].lastUpdate = nowResult;
  const tmp10 = null != tmp5[channelId] && _slicedToArray(tmp5[channelId], 1)[0] !== constants2.NONE;
  if (null == arg1) {
    delete closure_29[tmp];
  } else {
    closure_29[channelId] = arg1;
  }
  const tmp13 = null != tmp5[channelId] && _slicedToArray(tmp5[channelId], 1)[0] !== constants2.NONE;
  if (tmp10 !== tmp13) {
    closure_30[channelId].toggleCount = closure_30[channelId].toggleCount + 1;
  }
}
function hasVideo(size) {
  let hasEmbeddedActivityResult = size.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM) > 0;
  if (!hasEmbeddedActivityResult) {
    hasEmbeddedActivityResult = size.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO) > 0;
  }
  if (!hasEmbeddedActivityResult) {
    hasEmbeddedActivityResult = size.hasEmbeddedActivity();
  }
  return hasEmbeddedActivityResult;
}
function clearChannel(arg0) {
  delete closure_28[arg0];
  delete closure_29[arg0];
  delete closure_31[arg0];
  delete closure_32[arg0];
  delete closure_36[arg0];
}
function handleRebuildActiveChannels() {
  const items = [];
  const channelId = SelectedChannelStore.getChannelId();
  obj = SelectedChannelStore;
  if (null != channelId) {
    items.push(channelId);
  }
  const voiceChannelId = obj.getVoiceChannelId();
  const tmp4 = null == voiceChannelId || items.includes(voiceChannelId);
  if (!tmp4) {
    items.push(voiceChannelId);
  }
  const remoteSessionId = GameConsoleStore.getRemoteSessionId();
  const voiceStateForSession = VoiceStateStore.getVoiceStateForSession(AuthenticationStore.getId(), remoteSessionId);
  let channelId1;
  if (voiceStateForSession != null) {
    channelId1 = voiceStateForSession.channelId;
  }
  if (null != channelId1) {
    let channelId2;
    const push = items.push;
    if (voiceStateForSession != null) {
      channelId2 = voiceStateForSession.channelId;
    }
    push(channelId2);
  }
  const fn = (rebuild) => rebuild.rebuild();
  const obj2 = _modDef12;
  const differenceResult = obj2.difference(items, items);
  const item = differenceResult.forEach(clearChannel);
  const obj3 = _modDef12;
  let differenceResult1 = obj3.difference(items, items);
  if (differenceResult1 === undefined) {
    differenceResult1 = items;
  }
  return differenceResult1.reduce(function(acc, item) {
    let tmp = item;
    let tmp3 = closure_2_28[item];
    if (null == tmp3) {
      const self = this;
      const self2 = this;
      const tmp7 = new closure_2_1(closure_2_2[17])(item);
      closure_2_28[item] = tmp7;
      tmp3 = tmp7;
    }
    let flag = acc;
    if (f92610(tmp3)) {
      obj = tmp2[item];
      if (null == obj) {
        const self3 = this;
        const self4 = this;
        const tmp12 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp12;
        obj = tmp12;
      }
      if (0 !== obj.size()) {
        const _Boolean = Boolean;
        const channel = closure_2_10.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!_Boolean(isGuildVocalOrThreadResult)) {
          let tmp19;
          let VIDEO;
          let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
          const tmp16 = closure_2_0;
          const tmp17 = closure_2_2;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            tmp19 = constants3;
            VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp19.VOICE) {
            delete closure_2_31[tmp];
            delete closure_2_32[tmp];
          } else {
            closure_2_31[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp19 = constants3;
      }
      const id1 = id.getId();
      let obj2 = tmp2[item];
      if (null == obj2) {
        const self5 = this;
        const self6 = this;
        const tmp27 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp27;
        obj2 = tmp27;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
          const found = toArrayResult.find((type) => {
            const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            return tmp;
          });
          if (null != found) {
            closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else {
            id = id1;
            if (1 !== obj2.size()) {
              if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const toArrayResult1 = obj2.toArray();
                const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                let id3;
                if (found1 != null) {
                  id3 = found1.id;
                }
                if (id3 == null) {
                  id3 = id1;
                }
                id = id3;
              }
            }
          }
          const channel1 = closure_2_10.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp40 = closure_2_29[item];
          if (tmp40 == null) {
            const items = [tmp38, constants2.NONE];
            tmp40 = items;
          }
          const first = closure_2_3(tmp40, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp44 = null == participant;
              if (!tmp44) {
                tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
              }
              id2 = first;
              if (tmp44) {
                id2 = tmp57.NONE;
              }
            }
          }
          const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
          if (tmp48) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_2_42(item, items1);
          flag = true;
        }
      }
      closure_2_42(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
function handleEmbeddedActivityChange() {
  const f92612 = (updateEmbeddedActivities) => updateEmbeddedActivities.updateEmbeddedActivities();
  return closure_26.reduce(function(acc, item) {
    let tmp = item;
    let tmp3 = closure_2_28[item];
    if (null == tmp3) {
      const self = this;
      const self2 = this;
      const tmp7 = new closure_2_1(closure_2_2[17])(item);
      closure_2_28[item] = tmp7;
      tmp3 = tmp7;
    }
    let flag = acc;
    if (f92610(tmp3)) {
      obj = tmp2[item];
      if (null == obj) {
        const self3 = this;
        const self4 = this;
        const tmp12 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp12;
        obj = tmp12;
      }
      if (0 !== obj.size()) {
        const _Boolean = Boolean;
        const channel = closure_2_10.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!_Boolean(isGuildVocalOrThreadResult)) {
          let tmp19;
          let VIDEO;
          let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
          const tmp16 = closure_2_0;
          const tmp17 = closure_2_2;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            tmp19 = constants3;
            VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp19.VOICE) {
            delete closure_2_31[tmp];
            delete closure_2_32[tmp];
          } else {
            closure_2_31[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp19 = constants3;
      }
      const id1 = id.getId();
      let obj2 = tmp2[item];
      if (null == obj2) {
        const self5 = this;
        const self6 = this;
        const tmp27 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp27;
        obj2 = tmp27;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
          const found = toArrayResult.find((type) => {
            const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            return tmp;
          });
          if (null != found) {
            closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else {
            id = id1;
            if (1 !== obj2.size()) {
              if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const toArrayResult1 = obj2.toArray();
                const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                let id3;
                if (found1 != null) {
                  id3 = found1.id;
                }
                if (id3 == null) {
                  id3 = id1;
                }
                id = id3;
              }
            }
          }
          const channel1 = closure_2_10.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp40 = closure_2_29[item];
          if (tmp40 == null) {
            const items = [tmp38, constants2.NONE];
            tmp40 = items;
          }
          const first = closure_2_3(tmp40, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp44 = null == participant;
              if (!tmp44) {
                tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
              }
              id2 = first;
              if (tmp44) {
                id2 = tmp57.NONE;
              }
            }
          }
          const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
          if (tmp48) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_2_42(item, items1);
          flag = true;
        }
      }
      closure_2_42(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
function handleSpeaking(userId) {
  userId = userId.userId;
  const f92613 = (updateParticipantSpeaking) => updateParticipantSpeaking.updateParticipantSpeaking(userId);
  return closure_26.reduce(function(acc, item) {
    let tmp = item;
    let tmp3 = closure_2_28[item];
    if (null == tmp3) {
      const self = this;
      const self2 = this;
      const tmp7 = new closure_2_1(closure_2_2[17])(item);
      closure_2_28[item] = tmp7;
      tmp3 = tmp7;
    }
    let flag = acc;
    if (f92610(tmp3)) {
      obj = tmp2[item];
      if (null == obj) {
        const self3 = this;
        const self4 = this;
        const tmp12 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp12;
        obj = tmp12;
      }
      if (0 !== obj.size()) {
        const _Boolean = Boolean;
        const channel = closure_2_10.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!_Boolean(isGuildVocalOrThreadResult)) {
          let tmp19;
          let VIDEO;
          let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
          const tmp16 = closure_2_0;
          const tmp17 = closure_2_2;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            tmp19 = constants3;
            VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp19.VOICE) {
            delete closure_2_31[tmp];
            delete closure_2_32[tmp];
          } else {
            closure_2_31[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp19 = constants3;
      }
      const id1 = id.getId();
      let obj2 = tmp2[item];
      if (null == obj2) {
        const self5 = this;
        const self6 = this;
        const tmp27 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp27;
        obj2 = tmp27;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
          const found = toArrayResult.find((type) => {
            const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            return tmp;
          });
          if (null != found) {
            closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else {
            id = id1;
            if (1 !== obj2.size()) {
              if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const toArrayResult1 = obj2.toArray();
                const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                let id3;
                if (found1 != null) {
                  id3 = found1.id;
                }
                if (id3 == null) {
                  id3 = id1;
                }
                id = id3;
              }
            }
          }
          const channel1 = closure_2_10.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp40 = closure_2_29[item];
          if (tmp40 == null) {
            const items = [tmp38, constants2.NONE];
            tmp40 = items;
          }
          const first = closure_2_3(tmp40, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp44 = null == participant;
              if (!tmp44) {
                tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
              }
              id2 = first;
              if (tmp44) {
                id2 = tmp57.NONE;
              }
            }
          }
          const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
          if (tmp48) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_2_42(item, items1);
          flag = true;
        }
      }
      closure_2_42(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
function handleUserUpdate(user) {
  const id = user.user.id;
  const f92610 = (dependencyMap) => dependencyMap.updateParticipant(f92610);
  const arr = closure_26;
  if (closure_26 !== undefined) {
    return arr.reduce(function(acc, item) {
      let tmp = item;
      let tmp3 = closure_2_28[item];
      if (null == tmp3) {
        const self = this;
        const self2 = this;
        const tmp7 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp7;
        tmp3 = tmp7;
      }
      let flag = acc;
      if (f92610(tmp3)) {
        obj = tmp2[item];
        if (null == obj) {
          const self3 = this;
          const self4 = this;
          const tmp12 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp12;
          obj = tmp12;
        }
        if (0 !== obj.size()) {
          const _Boolean = Boolean;
          const channel = closure_2_10.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!_Boolean(isGuildVocalOrThreadResult)) {
            let tmp19;
            let VIDEO;
            let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
            const tmp16 = closure_2_0;
            const tmp17 = closure_2_2;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              tmp19 = constants3;
              VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp19.VOICE) {
              delete closure_2_31[tmp];
              delete closure_2_32[tmp];
            } else {
              closure_2_31[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp19 = constants3;
        }
        const id1 = id.getId();
        let obj2 = tmp2[item];
        if (null == obj2) {
          const self5 = this;
          const self6 = this;
          const tmp27 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp27;
          obj2 = tmp27;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
            const found = toArrayResult.find((type) => {
              const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              return tmp;
            });
            if (null != found) {
              closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else {
              id = id1;
              if (1 !== obj2.size()) {
                if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                } else {
                  const toArrayResult1 = obj2.toArray();
                  const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                  let id3;
                  if (found1 != null) {
                    id3 = found1.id;
                  }
                  if (id3 == null) {
                    id3 = id1;
                  }
                  id = id3;
                }
              }
            }
            const channel1 = closure_2_10.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp40 = closure_2_29[item];
            if (tmp40 == null) {
              const items = [tmp38, constants2.NONE];
              tmp40 = items;
            }
            const first = closure_2_3(tmp40, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp44 = null == participant;
                if (!tmp44) {
                  tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                id2 = first;
                if (tmp44) {
                  id2 = tmp57.NONE;
                }
              }
            }
            const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
            if (tmp48) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_2_42(item, items1);
            flag = true;
          }
        }
        closure_2_42(item, null);
        flag = true;
      }
      return flag;
    }, false);
  }
}
function handleCallUpdate(channelId) {
  const items = [channelId.channelId];
  const f92614 = (rebuild) => rebuild.rebuild();
  return items.reduce(function(acc, item) {
    let tmp = item;
    let tmp3 = closure_2_28[item];
    if (null == tmp3) {
      const self = this;
      const self2 = this;
      const tmp7 = new closure_2_1(closure_2_2[17])(item);
      closure_2_28[item] = tmp7;
      tmp3 = tmp7;
    }
    let flag = acc;
    if (f92610(tmp3)) {
      obj = tmp2[item];
      if (null == obj) {
        const self3 = this;
        const self4 = this;
        const tmp12 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp12;
        obj = tmp12;
      }
      if (0 !== obj.size()) {
        const _Boolean = Boolean;
        const channel = closure_2_10.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!_Boolean(isGuildVocalOrThreadResult)) {
          let tmp19;
          let VIDEO;
          let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
          const tmp16 = closure_2_0;
          const tmp17 = closure_2_2;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            tmp19 = constants3;
            VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp19.VOICE) {
            delete closure_2_31[tmp];
            delete closure_2_32[tmp];
          } else {
            closure_2_31[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp19 = constants3;
      }
      const id1 = id.getId();
      let obj2 = tmp2[item];
      if (null == obj2) {
        const self5 = this;
        const self6 = this;
        const tmp27 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp27;
        obj2 = tmp27;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
          const found = toArrayResult.find((type) => {
            const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            return tmp;
          });
          if (null != found) {
            closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else {
            id = id1;
            if (1 !== obj2.size()) {
              if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const toArrayResult1 = obj2.toArray();
                const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                let id3;
                if (found1 != null) {
                  id3 = found1.id;
                }
                if (id3 == null) {
                  id3 = id1;
                }
                id = id3;
              }
            }
          }
          const channel1 = closure_2_10.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp40 = closure_2_29[item];
          if (tmp40 == null) {
            const items = [tmp38, constants2.NONE];
            tmp40 = items;
          }
          const first = closure_2_3(tmp40, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp44 = null == participant;
              if (!tmp44) {
                tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
              }
              id2 = first;
              if (tmp44) {
                id2 = tmp57.NONE;
              }
            }
          }
          const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
          if (tmp48) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_2_42(item, items1);
          flag = true;
        }
      }
      closure_2_42(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
function handleChannelDelete(channel) {
  const id = channel.channel.id;
  set.delete(id);
  delete closure_35[id];
  delete closure_28[id];
  delete closure_29[id];
  delete closure_31[id];
  delete closure_32[id];
  delete closure_36[id];
}
function handleStreamClose(streamKey) {
  let closure_129_0;
  let f92610;
  streamKey = streamKey.streamKey;
  obj = f92610(5900);
  const items = [];
  ({ channelId: arr[0], ownerId: closure_129_0 } = obj.decodeStreamKey(streamKey));
  f92610 = (dependencyMap) => dependencyMap.updateParticipant(f92610);
  obj.decodeStreamKey(streamKey);
  return items.reduce(function(acc, item) {
    let tmp = item;
    let tmp3 = closure_2_28[item];
    if (null == tmp3) {
      const self = this;
      const self2 = this;
      const tmp7 = new closure_2_1(closure_2_2[17])(item);
      closure_2_28[item] = tmp7;
      tmp3 = tmp7;
    }
    let flag = acc;
    if (f92610(tmp3)) {
      obj = tmp2[item];
      if (null == obj) {
        const self3 = this;
        const self4 = this;
        const tmp12 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp12;
        obj = tmp12;
      }
      if (0 !== obj.size()) {
        const _Boolean = Boolean;
        const channel = closure_2_10.getChannel(item);
        let isGuildVocalOrThreadResult;
        if (channel != null) {
          isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
        }
        if (!_Boolean(isGuildVocalOrThreadResult)) {
          let tmp19;
          let VIDEO;
          let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
          const tmp16 = closure_2_0;
          const tmp17 = closure_2_2;
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
          }
          if (!hasEmbeddedActivityResult) {
            hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
          }
          if (!hasEmbeddedActivityResult) {
            tmp19 = constants3;
            VIDEO = constants3.VOICE;
          }
          if (VIDEO === tmp19.VOICE) {
            delete closure_2_31[tmp];
            delete closure_2_32[tmp];
          } else {
            closure_2_31[item] = VIDEO;
          }
        }
        VIDEO = constants3.VIDEO;
        tmp19 = constants3;
      }
      const id1 = id.getId();
      let obj2 = tmp2[item];
      if (null == obj2) {
        const self5 = this;
        const self6 = this;
        const tmp27 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp27;
        obj2 = tmp27;
      }
      if (0 !== obj2.size()) {
        if (voiceChannelId.getVoiceChannelId() === item) {
          const NONE = constants2.NONE;
          const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
          const found = toArrayResult.find((type) => {
            const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
            return tmp;
          });
          if (null != found) {
            closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
            id = found.id;
          } else {
            id = id1;
            if (1 !== obj2.size()) {
              if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
              } else {
                const toArrayResult1 = obj2.toArray();
                const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                let id3;
                if (found1 != null) {
                  id3 = found1.id;
                }
                if (id3 == null) {
                  id3 = id1;
                }
                id = id3;
              }
            }
          }
          const channel1 = closure_2_10.getChannel(item);
          if (channel1 != null) {
            channel1.isDM();
          }
          let tmp40 = closure_2_29[item];
          if (tmp40 == null) {
            const items = [tmp38, constants2.NONE];
            tmp40 = items;
          }
          const first = closure_2_3(tmp40, 1)[0];
          let id2 = first;
          if (first !== constants2.AUTO) {
            id2 = first;
            if (first !== constants2.NONE) {
              const participant = obj2.getParticipant(first);
              let tmp44 = null == participant;
              if (!tmp44) {
                tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
              }
              id2 = first;
              if (tmp44) {
                id2 = tmp57.NONE;
              }
            }
          }
          const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
          if (tmp48) {
            id2 = found.id;
          }
          const items1 = [id2, id];
          closure_2_42(item, items1);
          flag = true;
        }
      }
      closure_2_42(item, null);
      flag = true;
    }
    return flag;
  }, false);
}
({ ParticipantTypes: closure_17, ParticipantSelectionTypes: closure_18, isStreamParticipant: closure_19 } = CallConstants);
({ ChannelLayouts: closure_20, ChannelModes: closure_21, ChannelTypes: closure_22, AppContext: closure_23 } = Constants);
let obj = new LoggerDefault("ChannelRTCStore");
obj.enableNativeLogger(true);
const frozen = Object.freeze([]);
let closure_26 = [];
new Set();
let closure_28 = {};
const set = {};
const __initData = {};
let closure_31 = {};
let closure_32 = {};
const __initData3 = {};
const voiceParticipantsHidden = {};
const __initData4 = {};
let closure_36 = {};
let closure_37 = {};
const __initData5 = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class ChannelRTCStore extends PersistedStore {
  initialize(voiceParticipantsHidden) {
    this.waitFor(ApplicationStreamingStore, AuthenticationStore, CallStore, ChannelStore, EmbeddedActivitiesStore, GameConsoleStore, PresenceStore, SelectedChannelStore, SpeakingStore, StageChannelRoleStore, UserStore, VideoStreamStore, VoiceStateStore);
    const items = [EmbeddedActivitiesStore];
    this.syncWith(items, handleEmbeddedActivityChange);
    const items1 = [GameConsoleStore];
    this.syncWith(items1, handleRebuildActiveChannels);
    let prop;
    if (voiceParticipantsHidden != null) {
      prop = voiceParticipantsHidden.voiceParticipantsHidden;
    }
    if (undefined !== prop) {
      let prop1;
      const _Object = Object;
      const tmp6 = voiceParticipantsHidden;
      if (voiceParticipantsHidden != null) {
        prop1 = voiceParticipantsHidden.voiceParticipantsHidden;
      }
      assign(tmp6, prop1);
    }
  }
  getState() {
    return { voiceParticipantsHidden };
  }
  getParticipantsVersion(arg0) {
    let tmp2 = closure_28[arg0];
    if (null == tmp2) {
      const self = this;
      const self2 = this;
      const tmp6 = new ChannelRTCParticipantsDefault(arg0);
      tmp[arg0] = tmp6;
      tmp2 = tmp6;
    }
    return tmp2.version;
  }
  getParticipants(arg0) {
    obj = closure_28[arg0];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(arg0);
      tmp[arg0] = tmp5;
      obj = tmp5;
    }
    let toArrayResult = obj.toArray();
    if (toArrayResult == null) {
      toArrayResult = frozen;
    }
    return toArrayResult;
  }
  getSpeakingParticipants(id) {
    obj = closure_28[id];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(id);
      tmp[id] = tmp5;
      obj = tmp5;
    }
    let toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.SPEAKING);
    if (toArrayResult == null) {
      toArrayResult = frozen;
    }
    return toArrayResult;
  }
  getFilteredParticipants(arg0) {
    obj = closure_28[arg0];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(arg0);
      tmp[arg0] = tmp5;
      obj = tmp5;
    }
    if (voiceParticipantsHidden[arg0] != null) {
      let toArrayResult;
      if (voiceParticipantsHidden[arg0]) {
        toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.FILTERED);
      }
      return toArrayResult;
    }
    toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.NOT_POPPED_OUT);
  }
  getStageSpeakerParticipants(arg0) {
    obj = closure_28[arg0];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(arg0);
      tmp[arg0] = tmp5;
      obj = tmp5;
    }
    return obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STAGE_SPEAKER);
  }
  getVideoParticipants(channelId) {
    obj = closure_28[channelId];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(channelId);
      tmp[channelId] = tmp5;
      obj = tmp5;
    }
    let toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.VIDEO);
    if (toArrayResult == null) {
      toArrayResult = frozen;
    }
    return toArrayResult;
  }
  getStreamParticipants(id) {
    obj = closure_28[id];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(id);
      tmp[id] = tmp5;
      obj = tmp5;
    }
    let toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
    if (toArrayResult == null) {
      toArrayResult = frozen;
    }
    return toArrayResult;
  }
  getActivityParticipants(channelId) {
    obj = closure_28[channelId];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(channelId);
      tmp[channelId] = tmp5;
      obj = tmp5;
    }
    let toArrayResult = obj.toArray(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.ACTIVITY);
    if (toArrayResult == null) {
      toArrayResult = frozen;
    }
    return toArrayResult;
  }
  getParticipant(arg0, arg1) {
    obj = closure_28[arg0];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(arg0);
      tmp[arg0] = tmp5;
      obj = tmp5;
    }
    return obj.getParticipant(arg1);
  }
  getUserParticipantCount(id) {
    obj = closure_28[id];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(id);
      tmp[id] = tmp5;
      obj = tmp5;
    }
    const sizeResult = obj.size();
    const diff = sizeResult - obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.STREAM);
    return diff - obj.size(ChannelRTCParticipants.ChannelRTCParticipantsIndexes.ACTIVITY);
  }
  getParticipantsOpen(arg0) {
    let flag = closure_33[arg0];
    if (flag == null) {
      flag = true;
    }
    return flag;
  }
  getVoiceParticipantsHidden(channelId) {
    let flag = voiceParticipantsHidden[channelId];
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  getSelectedParticipantId(arg0) {
    let tmp6;
    let tmp7;
    const channel = ChannelStore.getChannel(arg0);
    if (channel != null) {
      channel.isDM();
    }
    let tmp4 = closure_29[arg0];
    if (tmp4 == null) {
      const items = [tmp3, constants2.NONE];
      tmp4 = items;
    }
    [tmp6, tmp7] = tmp4;
    let tmp8 = null;
    _slicedToArray(tmp4, 2);
    if (tmp6 !== constants2.NONE) {
      tmp8 = tmp6;
    }
    return tmp8;
  }
  getSelectedParticipant(id) {
    const selectedParticipantId = this.getSelectedParticipantId(id);
    let participant = null;
    if (null != selectedParticipantId) {
      obj = closure_28[id];
      if (null == obj) {
        const self = this;
        const self2 = this;
        const tmp7 = new ChannelRTCParticipantsDefault(id);
        tmp3[id] = tmp7;
        obj = tmp7;
      }
      participant = obj.getParticipant(selectedParticipantId);
    }
    return participant;
  }
  getSelectedParticipantStats(arg0) {
    if (null == closure_30[arg0]) {
      obj = {};
    } else {
      obj = { view_mode_grid_duration_ms: Math.floor(closure_30[arg0].gridDurationMs), view_mode_focus_duration_ms: Math.floor(closure_30[arg0].focusDurationMs), view_mode_toggle_count: closure_30[arg0].toggleCount };
      const _Math = Math;
      const _Math2 = Math;
    }
    return obj;
  }
  getMode(arg0) {
    let tmp = closure_31[arg0];
    if (tmp == null) {
      const _Boolean = Boolean;
      const channel = ChannelStore.getChannel(arg0);
      let isGuildVocalOrThreadResult;
      if (channel != null) {
        isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
      }
      tmp = _Boolean(isGuildVocalOrThreadResult) ? tmp5.VIDEO : tmp5.VOICE;
    }
    return tmp;
  }
  getLayout(arg0) {
    if (arg1 === undefined) {
      const APP = constants5.APP;
    }
    return constants3.NORMAL;
  }
  getChatOpen(channelId) {
    return set.has(channelId);
  }
  getOpenChatChannelIds() {
    return set;
  }
  isFullscreenInContext() {
    let APP = arg0;
    if (arg0 === undefined) {
      APP = constants5.APP;
    }
    const values = Object.values(closure_32);
    return values.some((item) => item[APP] === constants.FULL_SCREEN);
  }
  getStageStreamSize(arg0) {
    return closure_35[arg0];
  }
  getStageVideoLimitBoostUpsellDismissed(arg0) {
    return closure_37[arg0];
  }
  getStageAudienceSidebarOpen(arg0) {
    let tmp = closure_38[arg0];
    if (tmp == null) {
      tmp = !set.has(arg0);
    }
    return tmp;
  }
  isParticipantPoppedOut(arg0, id) {
    const participant = this.getParticipant(arg0, id);
    let tmp2 = null != participant;
    if (tmp2) {
      tmp2 = "isPoppedOut" in participant && participant.isPoppedOut;
    }
    return tmp2;
  }
}
const prototype = ChannelRTCStore.prototype;
ChannelRTCStore.displayName = "ChannelRTCStore";
ChannelRTCStore.persistKey = "ChannelRTCStore";
let obj2 = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    for (const item10005 of closure_26) {
      let tmp2 = clearChannel(item10005);
      continue;
    }
    handleRebuildActiveChannels();
  },
  CONNECTION_OPEN_SUPPLEMENTAL: handleRebuildActiveChannels,
  THREAD_LIST_SYNC: handleRebuildActiveChannels,
  OVERLAY_INITIALIZE: handleRebuildActiveChannels,
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(arg0) {
    let channelId;
    let currentVoiceChannelId;
    ({ channelId, currentVoiceChannelId } = arg0);
    if (null != channelId) {
      delete closure_30[channelId];
    } else if (null != currentVoiceChannelId) {
      set.delete(currentVoiceChannelId);
      delete closure_35[currentVoiceChannelId];
      if (null == closure_30[currentVoiceChannelId]) {
        closure_30[currentVoiceChannelId] = { gridDurationMs: 0, focusDurationMs: 0, toggleCount: 0, lastUpdate: 0 };
      }
      const _performance = performance;
      const nowResult = performance.now();
      const tmp5 = null != closure_29[currentVoiceChannelId] && _slicedToArray(tmp4[currentVoiceChannelId], 1)[0] !== constants2.NONE;
      if (closure_30[currentVoiceChannelId].lastUpdate > 0) {
        let str = "gridDurationMs";
        const diff = nowResult - tmp.lastUpdate;
        if (tmp5) {
          str = "focusDurationMs";
        }
        closure_30[currentVoiceChannelId][str] = closure_30[currentVoiceChannelId][str] + diff;
      }
      closure_30[currentVoiceChannelId].lastUpdate = nowResult;
    }
    let flag = false;
    const tmp9 = channelId !== currentVoiceChannelId && null != currentVoiceChannelId;
    if (tmp9) {
      const items = [currentVoiceChannelId];
      const f92616 = (rebuild) => rebuild.rebuild();
      flag = items.reduce(function(acc, item) {
        let tmp = item;
        let tmp3 = closure_2_28[item];
        if (null == tmp3) {
          const self = this;
          const self2 = this;
          const tmp7 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp7;
          tmp3 = tmp7;
        }
        let flag = acc;
        if (f92610(tmp3)) {
          obj = tmp2[item];
          if (null == obj) {
            const self3 = this;
            const self4 = this;
            const tmp12 = new closure_2_1(closure_2_2[17])(item);
            closure_2_28[item] = tmp12;
            obj = tmp12;
          }
          if (0 !== obj.size()) {
            const _Boolean = Boolean;
            const channel = closure_2_10.getChannel(item);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!_Boolean(isGuildVocalOrThreadResult)) {
              let tmp19;
              let VIDEO;
              let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
              const tmp16 = closure_2_0;
              const tmp17 = closure_2_2;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                tmp19 = constants3;
                VIDEO = constants3.VOICE;
              }
              if (VIDEO === tmp19.VOICE) {
                delete closure_2_31[tmp];
                delete closure_2_32[tmp];
              } else {
                closure_2_31[item] = VIDEO;
              }
            }
            VIDEO = constants3.VIDEO;
            tmp19 = constants3;
          }
          const id1 = id.getId();
          let obj2 = tmp2[item];
          if (null == obj2) {
            const self5 = this;
            const self6 = this;
            const tmp27 = new closure_2_1(closure_2_2[17])(item);
            closure_2_28[item] = tmp27;
            obj2 = tmp27;
          }
          if (0 !== obj2.size()) {
            if (voiceChannelId.getVoiceChannelId() === item) {
              const NONE = constants2.NONE;
              const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
              const found = toArrayResult.find((type) => {
                const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                return tmp;
              });
              if (null != found) {
                closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else {
                id = id1;
                if (1 !== obj2.size()) {
                  if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                    id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                  } else {
                    const toArrayResult1 = obj2.toArray();
                    const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                    let id3;
                    if (found1 != null) {
                      id3 = found1.id;
                    }
                    if (id3 == null) {
                      id3 = id1;
                    }
                    id = id3;
                  }
                }
              }
              const channel1 = closure_2_10.getChannel(item);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp40 = closure_2_29[item];
              if (tmp40 == null) {
                const items = [tmp38, constants2.NONE];
                tmp40 = items;
              }
              const first = closure_2_3(tmp40, 1)[0];
              let id2 = first;
              if (first !== constants2.AUTO) {
                id2 = first;
                if (first !== constants2.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp44 = null == participant;
                  if (!tmp44) {
                    tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  id2 = first;
                  if (tmp44) {
                    id2 = tmp57.NONE;
                  }
                }
              }
              const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
              if (tmp48) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_2_42(item, items1);
              flag = true;
            }
          }
          closure_2_42(item, null);
          flag = true;
        }
        return flag;
      }, false);
    }
    if (!flag) {
      flag = handleRebuildActiveChannels();
    }
    return flag;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    const messageId = channelId.messageId;
    const tmp = handleRebuildActiveChannels();
    if (null == channelId) {
      return tmp;
    } else if (null == messageId) {
      return tmp;
    } else {
      obj = set;
      if (set.has(channelId)) {
        return tmp;
      } else {
        const channel = ChannelStore.getChannel(channelId);
        let tmp3 = tmp;
        if (null != channel) {
          let flag = tmp;
          if (channel.isGuildVocal()) {
            obj.add(channelId);
            closure_38[channelId] = false;
            flag = true;
          }
          tmp3 = flag;
        }
        return tmp3;
      }
    }
  },
  CHANNEL_RTC_ACTIVE_CHANNELS: handleRebuildActiveChannels,
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(arg0) {
    let voiceStates;
    ({ voiceStates, initial: require } = arg0);
    return voiceStates.reduce((acc, channelId) => {
      let activeStreamForStreamKey;
      let voiceChannelId;
      channelId = channelId.channelId;
      const userId = channelId.userId;
      if (require) {
        let tmp3;
        let tmp = null;
        if (null != channelId) {
          const tmp2 = closure_26;
          tmp3 = acc;
        }
        return tmp3;
      }
      let arr = closure_26;
      const f92610 = (dependencyMap) => dependencyMap.updateParticipant(f92610);
      if (closure_26 === undefined) {
        arr = closure_26;
      }
      tmp3 = arr.reduce(function(acc, item) {
        let tmp = item;
        let tmp3 = closure_2_28[item];
        if (null == tmp3) {
          const self = this;
          const self2 = this;
          const tmp7 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp7;
          tmp3 = tmp7;
        }
        let flag = acc;
        if (f92610(tmp3)) {
          obj = tmp2[item];
          if (null == obj) {
            const self3 = this;
            const self4 = this;
            const tmp12 = new closure_2_1(closure_2_2[17])(item);
            closure_2_28[item] = tmp12;
            obj = tmp12;
          }
          if (0 !== obj.size()) {
            const _Boolean = Boolean;
            const channel = closure_2_10.getChannel(item);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!_Boolean(isGuildVocalOrThreadResult)) {
              let tmp19;
              let VIDEO;
              let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
              const tmp16 = closure_2_0;
              const tmp17 = closure_2_2;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                tmp19 = constants3;
                VIDEO = constants3.VOICE;
              }
              if (VIDEO === tmp19.VOICE) {
                delete closure_2_31[tmp];
                delete closure_2_32[tmp];
              } else {
                closure_2_31[item] = VIDEO;
              }
            }
            VIDEO = constants3.VIDEO;
            tmp19 = constants3;
          }
          const id1 = id.getId();
          let obj2 = tmp2[item];
          if (null == obj2) {
            const self5 = this;
            const self6 = this;
            const tmp27 = new closure_2_1(closure_2_2[17])(item);
            closure_2_28[item] = tmp27;
            obj2 = tmp27;
          }
          if (0 !== obj2.size()) {
            if (voiceChannelId.getVoiceChannelId() === item) {
              const NONE = constants2.NONE;
              const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
              const found = toArrayResult.find((type) => {
                const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                return tmp;
              });
              if (null != found) {
                closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else {
                id = id1;
                if (1 !== obj2.size()) {
                  if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                    id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                  } else {
                    const toArrayResult1 = obj2.toArray();
                    const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                    let id3;
                    if (found1 != null) {
                      id3 = found1.id;
                    }
                    if (id3 == null) {
                      id3 = id1;
                    }
                    id = id3;
                  }
                }
              }
              const channel1 = closure_2_10.getChannel(item);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp40 = closure_2_29[item];
              if (tmp40 == null) {
                const items = [tmp38, constants2.NONE];
                tmp40 = items;
              }
              const first = closure_2_3(tmp40, 1)[0];
              let id2 = first;
              if (first !== constants2.AUTO) {
                id2 = first;
                if (first !== constants2.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp44 = null == participant;
                  if (!tmp44) {
                    tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  id2 = first;
                  if (tmp44) {
                    id2 = tmp57.NONE;
                  }
                }
              }
              const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
              if (tmp48) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_2_42(item, items1);
              flag = true;
            }
          }
          closure_2_42(item, null);
          flag = true;
        }
        return flag;
      }, false) || acc;
      const tmp4 = arr.reduce(function(acc, item) {
        let tmp = item;
        let tmp3 = closure_2_28[item];
        if (null == tmp3) {
          const self = this;
          const self2 = this;
          const tmp7 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp7;
          tmp3 = tmp7;
        }
        let flag = acc;
        if (f92610(tmp3)) {
          obj = tmp2[item];
          if (null == obj) {
            const self3 = this;
            const self4 = this;
            const tmp12 = new closure_2_1(closure_2_2[17])(item);
            closure_2_28[item] = tmp12;
            obj = tmp12;
          }
          if (0 !== obj.size()) {
            const _Boolean = Boolean;
            const channel = closure_2_10.getChannel(item);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!_Boolean(isGuildVocalOrThreadResult)) {
              let tmp19;
              let VIDEO;
              let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
              const tmp16 = closure_2_0;
              const tmp17 = closure_2_2;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                tmp19 = constants3;
                VIDEO = constants3.VOICE;
              }
              if (VIDEO === tmp19.VOICE) {
                delete closure_2_31[tmp];
                delete closure_2_32[tmp];
              } else {
                closure_2_31[item] = VIDEO;
              }
            }
            VIDEO = constants3.VIDEO;
            tmp19 = constants3;
          }
          const id1 = id.getId();
          let obj2 = tmp2[item];
          if (null == obj2) {
            const self5 = this;
            const self6 = this;
            const tmp27 = new closure_2_1(closure_2_2[17])(item);
            closure_2_28[item] = tmp27;
            obj2 = tmp27;
          }
          if (0 !== obj2.size()) {
            if (voiceChannelId.getVoiceChannelId() === item) {
              const NONE = constants2.NONE;
              const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
              const found = toArrayResult.find((type) => {
                const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                return tmp;
              });
              if (null != found) {
                closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else {
                id = id1;
                if (1 !== obj2.size()) {
                  if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                    id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                  } else {
                    const toArrayResult1 = obj2.toArray();
                    const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                    let id3;
                    if (found1 != null) {
                      id3 = found1.id;
                    }
                    if (id3 == null) {
                      id3 = id1;
                    }
                    id = id3;
                  }
                }
              }
              const channel1 = closure_2_10.getChannel(item);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp40 = closure_2_29[item];
              if (tmp40 == null) {
                const items = [tmp38, constants2.NONE];
                tmp40 = items;
              }
              const first = closure_2_3(tmp40, 1)[0];
              let id2 = first;
              if (first !== constants2.AUTO) {
                id2 = first;
                if (first !== constants2.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp44 = null == participant;
                  if (!tmp44) {
                    tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  id2 = first;
                  if (tmp44) {
                    id2 = tmp57.NONE;
                  }
                }
              }
              const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
              if (tmp48) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_2_42(item, items1);
              flag = true;
            }
          }
          closure_2_42(item, null);
          flag = true;
        }
        return flag;
      }, false) || acc;
    }, false);
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    if (channel.type === constants4.GROUP_DM) {
      const originChannelId = channel.originChannelId;
      if (null != originChannelId) {
        let NORMAL;
        const id = channel.id;
        const APP = constants5.APP;
        const tmp2 = closure_32;
        if (closure_32[originChannelId] != null) {
          NORMAL = tmp3[constants5.APP];
        }
        if (NORMAL == null) {
          NORMAL = constants3.NORMAL;
        }
        obj = {};
        obj[APP] = NORMAL;
        tmp2[id] = obj;
        return true;
      }
    }
    return false;
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  CALL_CREATE: handleCallUpdate,
  CALL_UPDATE: handleCallUpdate,
  CALL_DELETE: function handleCallDelete(channelId) {
    channelId = channelId.channelId;
    delete closure_28[channelId];
    delete closure_29[channelId];
    delete closure_31[channelId];
    delete closure_32[channelId];
    delete closure_36[channelId];
  },
  CHANNEL_RTC_SELECT_PARTICIPANT: function handleSelectParticipant(arg0) {
    let channelId;
    let id;
    ({ channelId, id } = arg0);
    obj = getParticipants(channelId);
    if (null == id) {
      const toArrayResult = obj.toArray(obj(6038).ChannelRTCParticipantsIndexes.STREAM);
      const item = toArrayResult.forEach((user) => {
        if (closure_19(user)) {
          obj.updateParticipant(user.user.id);
        }
      });
    }
    let NONE = id;
    const tmp4 = _slicedToArray(getSelectedParticipantId(channelId), 2)[1];
    const tmp5 = setSelectedParticipantId;
    if (id == null) {
      NONE = constants2.NONE;
    }
    const items = [NONE, tmp4];
    tmp5(channelId, items);
    const obj2 = obj(5900);
    const tmp8 = obj;
    if (obj2.isStreamKey(id)) {
      try {
        const tmp8Result = tmp8(5900);
        const ownerId = tmp8Result.decodeStreamKey(id).ownerId;
        const tmp10 = ownerId;
        if (ownerId === AuthenticationStore.getId()) {
          const items1 = [channelId];
          updateParticipant(tmp10, items1);
        }
      } catch (tmp15) {
        const _HermesInternal = HermesInternal;
        obj.warn("INVALID STREAM KEY FORMAT " + id, tmp15);
      }
      if (!hasVideo(obj)) {
        closure_33[channelId] = false;
      }
    }
  },
  CHANNEL_RTC_POPOUT_PARTICIPANT: function handlePopOutParticipant(arg0) {
    let channelId;
    let participantId;
    ({ channelId, participantId } = arg0);
    const channel = ChannelStore.getChannel(channelId);
    if (channel != null) {
      channel.isDM();
    }
    let tmp4 = closure_29[channelId];
    if (tmp4 == null) {
      const items = [tmp3, tmp2.NONE];
      tmp4 = items;
    }
    if (_slicedToArray(tmp4, 1)[0] === participantId) {
      setSelectedParticipantId(channelId, null);
    }
    let obj2 = closure_28[channelId];
    if (null == obj2) {
      const self = this;
      const self2 = this;
      const tmp11 = new ChannelRTCParticipantsDefault(channelId);
      tmp7[channelId] = tmp11;
      obj2 = tmp11;
    }
    const participant = obj2.getParticipant(participantId);
    const tmp14 = null != participant && participant.type !== constants.ACTIVITY;
    if (tmp14) {
      const result = obj2.updateParticipantPoppedOut(participantId, true);
      const items1 = [channelId];
      const id = participant.user.id;
      const f92610 = (dependencyMap) => dependencyMap.updateParticipant(f92610);
      const reduced = items1.reduce(function(acc, item) {
        let tmp = item;
        let tmp3 = closure_2_28[item];
        if (null == tmp3) {
          const self = this;
          const self2 = this;
          const tmp7 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp7;
          tmp3 = tmp7;
        }
        let flag = acc;
        if (f92610(tmp3)) {
          obj = tmp2[item];
          if (null == obj) {
            const self3 = this;
            const self4 = this;
            const tmp12 = new closure_2_1(closure_2_2[17])(item);
            closure_2_28[item] = tmp12;
            obj = tmp12;
          }
          if (0 !== obj.size()) {
            const _Boolean = Boolean;
            const channel = closure_2_10.getChannel(item);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!_Boolean(isGuildVocalOrThreadResult)) {
              let tmp19;
              let VIDEO;
              let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
              const tmp16 = closure_2_0;
              const tmp17 = closure_2_2;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                tmp19 = constants3;
                VIDEO = constants3.VOICE;
              }
              if (VIDEO === tmp19.VOICE) {
                delete closure_2_31[tmp];
                delete closure_2_32[tmp];
              } else {
                closure_2_31[item] = VIDEO;
              }
            }
            VIDEO = constants3.VIDEO;
            tmp19 = constants3;
          }
          const id1 = id.getId();
          let obj2 = tmp2[item];
          if (null == obj2) {
            const self5 = this;
            const self6 = this;
            const tmp27 = new closure_2_1(closure_2_2[17])(item);
            closure_2_28[item] = tmp27;
            obj2 = tmp27;
          }
          if (0 !== obj2.size()) {
            if (voiceChannelId.getVoiceChannelId() === item) {
              const NONE = constants2.NONE;
              const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
              const found = toArrayResult.find((type) => {
                const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                return tmp;
              });
              if (null != found) {
                closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else {
                id = id1;
                if (1 !== obj2.size()) {
                  if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                    id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                  } else {
                    const toArrayResult1 = obj2.toArray();
                    const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                    let id3;
                    if (found1 != null) {
                      id3 = found1.id;
                    }
                    if (id3 == null) {
                      id3 = id1;
                    }
                    id = id3;
                  }
                }
              }
              const channel1 = closure_2_10.getChannel(item);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp40 = closure_2_29[item];
              if (tmp40 == null) {
                const items = [tmp38, constants2.NONE];
                tmp40 = items;
              }
              const first = closure_2_3(tmp40, 1)[0];
              let id2 = first;
              if (first !== constants2.AUTO) {
                id2 = first;
                if (first !== constants2.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp44 = null == participant;
                  if (!tmp44) {
                    tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  id2 = first;
                  if (tmp44) {
                    id2 = tmp57.NONE;
                  }
                }
              }
              const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
              if (tmp48) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_2_42(item, items1);
              flag = true;
            }
          }
          closure_2_42(item, null);
          flag = true;
        }
        return flag;
      }, false);
    }
  },
  CHANNEL_RTC_RETURN_PARTICIPANT: function handleReturnParticipant(arg0) {
    let channelId;
    let participantId;
    ({ channelId, participantId } = arg0);
    obj = closure_28[channelId];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp5 = new ChannelRTCParticipantsDefault(channelId);
      tmp[channelId] = tmp5;
      obj = tmp5;
    }
    const result = obj.updateParticipantPoppedOut(participantId, false);
    const participant = obj.getParticipant(participantId);
    const tmp9 = null != participant && participant.type !== constants.ACTIVITY;
    if (tmp9) {
      const items = [channelId];
      const id = participant.user.id;
      const f92610 = (dependencyMap) => dependencyMap.updateParticipant(f92610);
      const reduced = items.reduce(function(acc, item) {
        let tmp = item;
        let tmp3 = closure_2_28[item];
        if (null == tmp3) {
          const self = this;
          const self2 = this;
          const tmp7 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp7;
          tmp3 = tmp7;
        }
        let flag = acc;
        if (f92610(tmp3)) {
          obj = tmp2[item];
          if (null == obj) {
            const self3 = this;
            const self4 = this;
            const tmp12 = new closure_2_1(closure_2_2[17])(item);
            closure_2_28[item] = tmp12;
            obj = tmp12;
          }
          if (0 !== obj.size()) {
            const _Boolean = Boolean;
            const channel = closure_2_10.getChannel(item);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!_Boolean(isGuildVocalOrThreadResult)) {
              let tmp19;
              let VIDEO;
              let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
              const tmp16 = closure_2_0;
              const tmp17 = closure_2_2;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                tmp19 = constants3;
                VIDEO = constants3.VOICE;
              }
              if (VIDEO === tmp19.VOICE) {
                delete closure_2_31[tmp];
                delete closure_2_32[tmp];
              } else {
                closure_2_31[item] = VIDEO;
              }
            }
            VIDEO = constants3.VIDEO;
            tmp19 = constants3;
          }
          const id1 = id.getId();
          let obj2 = tmp2[item];
          if (null == obj2) {
            const self5 = this;
            const self6 = this;
            const tmp27 = new closure_2_1(closure_2_2[17])(item);
            closure_2_28[item] = tmp27;
            obj2 = tmp27;
          }
          if (0 !== obj2.size()) {
            if (voiceChannelId.getVoiceChannelId() === item) {
              const NONE = constants2.NONE;
              const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
              const found = toArrayResult.find((type) => {
                const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                return tmp;
              });
              if (null != found) {
                closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else {
                id = id1;
                if (1 !== obj2.size()) {
                  if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                    id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                  } else {
                    const toArrayResult1 = obj2.toArray();
                    const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                    let id3;
                    if (found1 != null) {
                      id3 = found1.id;
                    }
                    if (id3 == null) {
                      id3 = id1;
                    }
                    id = id3;
                  }
                }
              }
              const channel1 = closure_2_10.getChannel(item);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp40 = closure_2_29[item];
              if (tmp40 == null) {
                const items = [tmp38, constants2.NONE];
                tmp40 = items;
              }
              const first = closure_2_3(tmp40, 1)[0];
              let id2 = first;
              if (first !== constants2.AUTO) {
                id2 = first;
                if (first !== constants2.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp44 = null == participant;
                  if (!tmp44) {
                    tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  id2 = first;
                  if (tmp44) {
                    id2 = tmp57.NONE;
                  }
                }
              }
              const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
              if (tmp48) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_2_42(item, items1);
              flag = true;
            }
          }
          closure_2_42(item, null);
          flag = true;
        }
        return flag;
      }, false);
    }
  },
  CHANNEL_RTC_UPDATE_LAYOUT: function handleCallLayout(channelId) {
    let appContext;
    let layout;
    channelId = channelId.channelId;
    obj = {};
    ({ layout, appContext } = channelId);
    const merged = Object.assign(closure_32[channelId]);
    obj[appContext] = layout;
    closure_32[channelId] = obj;
  },
  CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function handleUpdateParticipantsOpen(channelId) {
    closure_33[channelId.channelId] = channelId.participantsOpen;
  },
  CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function handleUpdateVoiceParticipantsHidden(channelId) {
    voiceParticipantsHidden[channelId.channelId] = channelId.voiceParticipantsHidden;
  },
  CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function handleUpdateStageStreamSize(channelId) {
    closure_35[channelId.channelId] = channelId.large;
  },
  CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function handleUpdateStageVideoLimitBoostUpsellDismissed(channelId) {
    closure_37[channelId.channelId] = channelId.dismissed;
  },
  STREAM_UPDATE_SELF_HIDDEN: function handleUpdateSelfStreamHidden(channelId) {
    let f92610;
    channelId = channelId.channelId;
    const selfStreamHidden = channelId.selfStreamHidden;
    const id = AuthenticationStore.getId();
    if (selfStreamHidden) {
      const channel = ChannelStore.getChannel(channelId);
      if (channel != null) {
        channel.isDM();
      }
      let tmp8 = closure_29[channelId];
      if (tmp8 == null) {
        const items = [tmp6, tmp5.NONE];
        tmp8 = items;
      }
      const first = _slicedToArray(tmp8, 1)[0];
      const obj3 = f92610(5900);
      const tmp12 = obj3.isStreamKey(first) && first.includes(id);
      if (tmp12) {
        setSelectedParticipantId(channelId, null);
      }
    }
    const items1 = [channelId];
    f92610 = (dependencyMap) => dependencyMap.updateParticipant(f92610);
    const reduced = items1.reduce(function(acc, item) {
      let tmp = item;
      let tmp3 = closure_2_28[item];
      if (null == tmp3) {
        const self = this;
        const self2 = this;
        const tmp7 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp7;
        tmp3 = tmp7;
      }
      let flag = acc;
      if (f92610(tmp3)) {
        obj = tmp2[item];
        if (null == obj) {
          const self3 = this;
          const self4 = this;
          const tmp12 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp12;
          obj = tmp12;
        }
        if (0 !== obj.size()) {
          const _Boolean = Boolean;
          const channel = closure_2_10.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!_Boolean(isGuildVocalOrThreadResult)) {
            let tmp19;
            let VIDEO;
            let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
            const tmp16 = closure_2_0;
            const tmp17 = closure_2_2;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              tmp19 = constants3;
              VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp19.VOICE) {
              delete closure_2_31[tmp];
              delete closure_2_32[tmp];
            } else {
              closure_2_31[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp19 = constants3;
        }
        const id1 = id.getId();
        let obj2 = tmp2[item];
        if (null == obj2) {
          const self5 = this;
          const self6 = this;
          const tmp27 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp27;
          obj2 = tmp27;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
            const found = toArrayResult.find((type) => {
              const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              return tmp;
            });
            if (null != found) {
              closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else {
              id = id1;
              if (1 !== obj2.size()) {
                if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                } else {
                  const toArrayResult1 = obj2.toArray();
                  const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                  let id3;
                  if (found1 != null) {
                    id3 = found1.id;
                  }
                  if (id3 == null) {
                    id3 = id1;
                  }
                  id = id3;
                }
              }
            }
            const channel1 = closure_2_10.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp40 = closure_2_29[item];
            if (tmp40 == null) {
              const items = [tmp38, constants2.NONE];
              tmp40 = items;
            }
            const first = closure_2_3(tmp40, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp44 = null == participant;
                if (!tmp44) {
                  tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                id2 = first;
                if (tmp44) {
                  id2 = tmp57.NONE;
                }
              }
            }
            const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
            if (tmp48) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_2_42(item, items1);
            flag = true;
          }
        }
        closure_2_42(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function handleUpdateChatOpen(channelId) {
    channelId = channelId.channelId;
    if (channelId.chatOpen) {
      set.add(channelId);
      closure_38[channelId] = false;
    } else {
      set.delete(channelId);
    }
  },
  CHANNEL_RTC_UPDATE_STAGE_AUDIENCE_SIDEBAR_OPEN: function handleUpdateStageAudienceSidebarOpen(arg0) {
    let channelId;
    let open;
    ({ channelId, open } = arg0);
    closure_38[channelId] = open;
    if (open) {
      set.delete(channelId);
    }
  },
  RTC_CONNECTION_VIDEO: function handleRTCConnectionVideo(arg0) {
    let closure_129_0;
    const items = [];
    ({ channelId: arr[0], userId: closure_129_0 } = arg0);
    const f92610 = (dependencyMap) => dependencyMap.updateParticipant(f92610);
    return items.reduce(function(acc, item) {
      let tmp = item;
      let tmp3 = closure_2_28[item];
      if (null == tmp3) {
        const self = this;
        const self2 = this;
        const tmp7 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp7;
        tmp3 = tmp7;
      }
      let flag = acc;
      if (f92610(tmp3)) {
        obj = tmp2[item];
        if (null == obj) {
          const self3 = this;
          const self4 = this;
          const tmp12 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp12;
          obj = tmp12;
        }
        if (0 !== obj.size()) {
          const _Boolean = Boolean;
          const channel = closure_2_10.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!_Boolean(isGuildVocalOrThreadResult)) {
            let tmp19;
            let VIDEO;
            let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
            const tmp16 = closure_2_0;
            const tmp17 = closure_2_2;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              tmp19 = constants3;
              VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp19.VOICE) {
              delete closure_2_31[tmp];
              delete closure_2_32[tmp];
            } else {
              closure_2_31[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp19 = constants3;
        }
        const id1 = id.getId();
        let obj2 = tmp2[item];
        if (null == obj2) {
          const self5 = this;
          const self6 = this;
          const tmp27 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp27;
          obj2 = tmp27;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
            const found = toArrayResult.find((type) => {
              const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              return tmp;
            });
            if (null != found) {
              closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else {
              id = id1;
              if (1 !== obj2.size()) {
                if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                } else {
                  const toArrayResult1 = obj2.toArray();
                  const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                  let id3;
                  if (found1 != null) {
                    id3 = found1.id;
                  }
                  if (id3 == null) {
                    id3 = id1;
                  }
                  id = id3;
                }
              }
            }
            const channel1 = closure_2_10.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp40 = closure_2_29[item];
            if (tmp40 == null) {
              const items = [tmp38, constants2.NONE];
              tmp40 = items;
            }
            const first = closure_2_3(tmp40, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp44 = null == participant;
                if (!tmp44) {
                  tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                id2 = first;
                if (tmp44) {
                  id2 = tmp57.NONE;
                }
              }
            }
            const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
            if (tmp48) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_2_42(item, items1);
            flag = true;
          }
        }
        closure_2_42(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  RTC_CONNECTION_PLATFORM: function handleRTCConnectionPlatform(arg0) {
    let closure_129_0;
    const items = [];
    ({ channelId: arr[0], userId: closure_129_0 } = arg0);
    const f92610 = (dependencyMap) => dependencyMap.updateParticipant(f92610);
    return items.reduce(function(acc, item) {
      let tmp = item;
      let tmp3 = closure_2_28[item];
      if (null == tmp3) {
        const self = this;
        const self2 = this;
        const tmp7 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp7;
        tmp3 = tmp7;
      }
      let flag = acc;
      if (f92610(tmp3)) {
        obj = tmp2[item];
        if (null == obj) {
          const self3 = this;
          const self4 = this;
          const tmp12 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp12;
          obj = tmp12;
        }
        if (0 !== obj.size()) {
          const _Boolean = Boolean;
          const channel = closure_2_10.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!_Boolean(isGuildVocalOrThreadResult)) {
            let tmp19;
            let VIDEO;
            let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
            const tmp16 = closure_2_0;
            const tmp17 = closure_2_2;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              tmp19 = constants3;
              VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp19.VOICE) {
              delete closure_2_31[tmp];
              delete closure_2_32[tmp];
            } else {
              closure_2_31[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp19 = constants3;
        }
        const id1 = id.getId();
        let obj2 = tmp2[item];
        if (null == obj2) {
          const self5 = this;
          const self6 = this;
          const tmp27 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp27;
          obj2 = tmp27;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
            const found = toArrayResult.find((type) => {
              const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              return tmp;
            });
            if (null != found) {
              closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else {
              id = id1;
              if (1 !== obj2.size()) {
                if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                } else {
                  const toArrayResult1 = obj2.toArray();
                  const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                  let id3;
                  if (found1 != null) {
                    id3 = found1.id;
                  }
                  if (id3 == null) {
                    id3 = id1;
                  }
                  id = id3;
                }
              }
            }
            const channel1 = closure_2_10.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp40 = closure_2_29[item];
            if (tmp40 == null) {
              const items = [tmp38, constants2.NONE];
              tmp40 = items;
            }
            const first = closure_2_3(tmp40, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp44 = null == participant;
                if (!tmp44) {
                  tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                id2 = first;
                if (tmp44) {
                  id2 = tmp57.NONE;
                }
              }
            }
            const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
            if (tmp48) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_2_42(item, items1);
            flag = true;
          }
        }
        closure_2_42(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function handleMediaEngineSetLocalVideoDisabled(userId) {
    userId = userId.userId;
    const f92610 = (dependencyMap) => dependencyMap.updateParticipant(f92610);
    const arr = closure_26;
    if (closure_26 !== undefined) {
      return arr.reduce(function(acc, item) {
        let tmp = item;
        let tmp3 = closure_2_28[item];
        if (null == tmp3) {
          const self = this;
          const self2 = this;
          const tmp7 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp7;
          tmp3 = tmp7;
        }
        let flag = acc;
        if (f92610(tmp3)) {
          obj = tmp2[item];
          if (null == obj) {
            const self3 = this;
            const self4 = this;
            const tmp12 = new closure_2_1(closure_2_2[17])(item);
            closure_2_28[item] = tmp12;
            obj = tmp12;
          }
          if (0 !== obj.size()) {
            const _Boolean = Boolean;
            const channel = closure_2_10.getChannel(item);
            let isGuildVocalOrThreadResult;
            if (channel != null) {
              isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
            }
            if (!_Boolean(isGuildVocalOrThreadResult)) {
              let tmp19;
              let VIDEO;
              let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
              const tmp16 = closure_2_0;
              const tmp17 = closure_2_2;
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
              }
              if (!hasEmbeddedActivityResult) {
                hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
              }
              if (!hasEmbeddedActivityResult) {
                tmp19 = constants3;
                VIDEO = constants3.VOICE;
              }
              if (VIDEO === tmp19.VOICE) {
                delete closure_2_31[tmp];
                delete closure_2_32[tmp];
              } else {
                closure_2_31[item] = VIDEO;
              }
            }
            VIDEO = constants3.VIDEO;
            tmp19 = constants3;
          }
          const id1 = id.getId();
          let obj2 = tmp2[item];
          if (null == obj2) {
            const self5 = this;
            const self6 = this;
            const tmp27 = new closure_2_1(closure_2_2[17])(item);
            closure_2_28[item] = tmp27;
            obj2 = tmp27;
          }
          if (0 !== obj2.size()) {
            if (voiceChannelId.getVoiceChannelId() === item) {
              const NONE = constants2.NONE;
              const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
              const found = toArrayResult.find((type) => {
                const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                return tmp;
              });
              if (null != found) {
                closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else {
                id = id1;
                if (1 !== obj2.size()) {
                  if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                    id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                  } else {
                    const toArrayResult1 = obj2.toArray();
                    const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                    let id3;
                    if (found1 != null) {
                      id3 = found1.id;
                    }
                    if (id3 == null) {
                      id3 = id1;
                    }
                    id = id3;
                  }
                }
              }
              const channel1 = closure_2_10.getChannel(item);
              if (channel1 != null) {
                channel1.isDM();
              }
              let tmp40 = closure_2_29[item];
              if (tmp40 == null) {
                const items = [tmp38, constants2.NONE];
                tmp40 = items;
              }
              const first = closure_2_3(tmp40, 1)[0];
              let id2 = first;
              if (first !== constants2.AUTO) {
                id2 = first;
                if (first !== constants2.NONE) {
                  const participant = obj2.getParticipant(first);
                  let tmp44 = null == participant;
                  if (!tmp44) {
                    tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  }
                  id2 = first;
                  if (tmp44) {
                    id2 = tmp57.NONE;
                  }
                }
              }
              const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
              if (tmp48) {
                id2 = found.id;
              }
              const items1 = [id2, id];
              closure_2_42(item, items1);
              flag = true;
            }
          }
          closure_2_42(item, null);
          flag = true;
        }
        return flag;
      }, false);
    }
  },
  MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function handleVideoSourceQuality(channelId) {
    let closure_129_0;
    let closure_129_1;
    let closure_129_2;
    ({ senderUserId: closure_129_0, maxResolution: closure_129_1, maxFrameRate: closure_129_2 } = channelId);
    const items = [channelId.channelId];
    const f92619 = (updateParticipantQuality) => updateParticipantQuality.updateParticipantQuality(closure_1_0, closure_1_1, closure_1_2);
    return items.reduce(function(acc, item) {
      let tmp = item;
      let tmp3 = closure_2_28[item];
      if (null == tmp3) {
        const self = this;
        const self2 = this;
        const tmp7 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp7;
        tmp3 = tmp7;
      }
      let flag = acc;
      if (f92610(tmp3)) {
        obj = tmp2[item];
        if (null == obj) {
          const self3 = this;
          const self4 = this;
          const tmp12 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp12;
          obj = tmp12;
        }
        if (0 !== obj.size()) {
          const _Boolean = Boolean;
          const channel = closure_2_10.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!_Boolean(isGuildVocalOrThreadResult)) {
            let tmp19;
            let VIDEO;
            let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
            const tmp16 = closure_2_0;
            const tmp17 = closure_2_2;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              tmp19 = constants3;
              VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp19.VOICE) {
              delete closure_2_31[tmp];
              delete closure_2_32[tmp];
            } else {
              closure_2_31[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp19 = constants3;
        }
        const id1 = id.getId();
        let obj2 = tmp2[item];
        if (null == obj2) {
          const self5 = this;
          const self6 = this;
          const tmp27 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp27;
          obj2 = tmp27;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
            const found = toArrayResult.find((type) => {
              const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              return tmp;
            });
            if (null != found) {
              closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else {
              id = id1;
              if (1 !== obj2.size()) {
                if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                } else {
                  const toArrayResult1 = obj2.toArray();
                  const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                  let id3;
                  if (found1 != null) {
                    id3 = found1.id;
                  }
                  if (id3 == null) {
                    id3 = id1;
                  }
                  id = id3;
                }
              }
            }
            const channel1 = closure_2_10.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp40 = closure_2_29[item];
            if (tmp40 == null) {
              const items = [tmp38, constants2.NONE];
              tmp40 = items;
            }
            const first = closure_2_3(tmp40, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp44 = null == participant;
                if (!tmp44) {
                  tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                id2 = first;
                if (tmp44) {
                  id2 = tmp57.NONE;
                }
              }
            }
            const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
            if (tmp48) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_2_42(item, items1);
            flag = true;
          }
        }
        closure_2_42(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  STREAM_CLOSE: handleStreamClose,
  STREAM_DELETE: handleStreamClose,
  STREAM_WATCH: function handleStreamWatch(streamKey) {
    let closure_129_0;
    let f92610;
    streamKey = streamKey.streamKey;
    obj = f92610(5900);
    const items = [];
    ({ channelId: arr[0], ownerId: closure_129_0 } = obj.decodeStreamKey(streamKey));
    f92610 = (dependencyMap) => dependencyMap.updateParticipant(f92610);
    obj.decodeStreamKey(streamKey);
    return items.reduce(function(acc, item) {
      let tmp = item;
      let tmp3 = closure_2_28[item];
      if (null == tmp3) {
        const self = this;
        const self2 = this;
        const tmp7 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp7;
        tmp3 = tmp7;
      }
      let flag = acc;
      if (f92610(tmp3)) {
        obj = tmp2[item];
        if (null == obj) {
          const self3 = this;
          const self4 = this;
          const tmp12 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp12;
          obj = tmp12;
        }
        if (0 !== obj.size()) {
          const _Boolean = Boolean;
          const channel = closure_2_10.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!_Boolean(isGuildVocalOrThreadResult)) {
            let tmp19;
            let VIDEO;
            let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
            const tmp16 = closure_2_0;
            const tmp17 = closure_2_2;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              tmp19 = constants3;
              VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp19.VOICE) {
              delete closure_2_31[tmp];
              delete closure_2_32[tmp];
            } else {
              closure_2_31[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp19 = constants3;
        }
        const id1 = id.getId();
        let obj2 = tmp2[item];
        if (null == obj2) {
          const self5 = this;
          const self6 = this;
          const tmp27 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp27;
          obj2 = tmp27;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
            const found = toArrayResult.find((type) => {
              const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              return tmp;
            });
            if (null != found) {
              closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else {
              id = id1;
              if (1 !== obj2.size()) {
                if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                } else {
                  const toArrayResult1 = obj2.toArray();
                  const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                  let id3;
                  if (found1 != null) {
                    id3 = found1.id;
                  }
                  if (id3 == null) {
                    id3 = id1;
                  }
                  id = id3;
                }
              }
            }
            const channel1 = closure_2_10.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp40 = closure_2_29[item];
            if (tmp40 == null) {
              const items = [tmp38, constants2.NONE];
              tmp40 = items;
            }
            const first = closure_2_3(tmp40, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp44 = null == participant;
                if (!tmp44) {
                  tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                id2 = first;
                if (tmp44) {
                  id2 = tmp57.NONE;
                }
              }
            }
            const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
            if (tmp48) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_2_42(item, items1);
            flag = true;
          }
        }
        closure_2_42(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  SPEAKING: handleSpeaking,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: handleSpeaking,
  GUILD_SOUNDBOARD_SOUND_PLAY_END: handleSpeaking,
  PUSH_TO_TALK_STATE_CHANGE: function handlePushToTalkStateChange() {
    let id;
    const f92620 = (updateParticipantSpeaking) => updateParticipantSpeaking.updateParticipantSpeaking(id.getId());
    return closure_26.reduce(function(acc, item) {
      let tmp = item;
      let tmp3 = closure_2_28[item];
      if (null == tmp3) {
        const self = this;
        const self2 = this;
        const tmp7 = new closure_2_1(closure_2_2[17])(item);
        closure_2_28[item] = tmp7;
        tmp3 = tmp7;
      }
      let flag = acc;
      if (f92610(tmp3)) {
        obj = tmp2[item];
        if (null == obj) {
          const self3 = this;
          const self4 = this;
          const tmp12 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp12;
          obj = tmp12;
        }
        if (0 !== obj.size()) {
          const _Boolean = Boolean;
          const channel = closure_2_10.getChannel(item);
          let isGuildVocalOrThreadResult;
          if (channel != null) {
            isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
          }
          if (!_Boolean(isGuildVocalOrThreadResult)) {
            let tmp19;
            let VIDEO;
            let hasEmbeddedActivityResult = obj.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM) > 0;
            const tmp16 = closure_2_0;
            const tmp17 = closure_2_2;
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.size(tmp16(tmp17[17]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
            }
            if (!hasEmbeddedActivityResult) {
              hasEmbeddedActivityResult = obj.hasEmbeddedActivity();
            }
            if (!hasEmbeddedActivityResult) {
              tmp19 = constants3;
              VIDEO = constants3.VOICE;
            }
            if (VIDEO === tmp19.VOICE) {
              delete closure_2_31[tmp];
              delete closure_2_32[tmp];
            } else {
              closure_2_31[item] = VIDEO;
            }
          }
          VIDEO = constants3.VIDEO;
          tmp19 = constants3;
        }
        const id1 = id.getId();
        let obj2 = tmp2[item];
        if (null == obj2) {
          const self5 = this;
          const self6 = this;
          const tmp27 = new closure_2_1(closure_2_2[17])(item);
          closure_2_28[item] = tmp27;
          obj2 = tmp27;
        }
        if (0 !== obj2.size()) {
          if (voiceChannelId.getVoiceChannelId() === item) {
            const NONE = constants2.NONE;
            const toArrayResult = obj2.toArray(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.STREAM);
            const found = toArrayResult.find((type) => {
              const tmp = type.type === constants.STREAM && null != activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
              return tmp;
            });
            if (null != found) {
              closure_2_1(closure_2_2[19])(found.type === constants.STREAM, "Impossible condition");
              id = found.id;
            } else {
              id = id1;
              if (1 !== obj2.size()) {
                if (1 === obj2.size(closure_2_0(closure_2_2[17]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = closure_2_3(obj2.toArray(tmp58(tmp59[17]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                } else {
                  const toArrayResult1 = obj2.toArray();
                  const found1 = toArrayResult1.find((type) => type.type === constants.USER && type.id !== id1 && !type.ringing);
                  let id3;
                  if (found1 != null) {
                    id3 = found1.id;
                  }
                  if (id3 == null) {
                    id3 = id1;
                  }
                  id = id3;
                }
              }
            }
            const channel1 = closure_2_10.getChannel(item);
            if (channel1 != null) {
              channel1.isDM();
            }
            let tmp40 = closure_2_29[item];
            if (tmp40 == null) {
              const items = [tmp38, constants2.NONE];
              tmp40 = items;
            }
            const first = closure_2_3(tmp40, 1)[0];
            let id2 = first;
            if (first !== constants2.AUTO) {
              id2 = first;
              if (first !== constants2.NONE) {
                const participant = obj2.getParticipant(first);
                let tmp44 = null == participant;
                if (!tmp44) {
                  tmp44 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                  const tmp46 = participant.type === constants.STREAM && null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                }
                id2 = first;
                if (tmp44) {
                  id2 = tmp57.NONE;
                }
              }
            }
            const tmp48 = id2 === tmp57.NONE && null != found && true === closure_2_36[item];
            if (tmp48) {
              id2 = found.id;
            }
            const items1 = [id2, id];
            closure_2_42(item, items1);
            flag = true;
          }
        }
        closure_2_42(item, null);
        flag = true;
      }
      return flag;
    }, false);
  },
  USER_UPDATE: handleUserUpdate,
  GUILD_MEMBER_UPDATE: handleUserUpdate,
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    const items = [];
    let tmp = items;
    const arr2 = items(12);
    const item = arr2.forEach(closure_26, (arg0) => {
      const channel = ChannelStore.getChannel(arg0);
      const tmp = null != channel && channel.getGuildId() !== guild.id;
      if (!tmp) {
        items.push(arg0);
      }
    });
    if (0 === items.length) {
      return false;
    } else {
      const tmpResult = tmp(12);
      const item1 = tmpResult.forEach(items, (arg0) => {
        delete closure_1_28[arg0];
        delete closure_1_29[arg0];
        delete closure_1_31[arg0];
        delete closure_1_32[arg0];
        delete closure_1_36[arg0];
      });
    }
  }
};
const channelRTCStore = new ChannelRTCStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/calls/ChannelRTCStore.tsx");

export default channelRTCStore;
export const NO_PARTICIPANTS = frozen;
