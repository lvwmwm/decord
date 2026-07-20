// Module ID: 4139
// Function ID: 34695
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4139 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function _getParticipants(channelId) {
  let tmp = closure_31[channelId];
  if (null == tmp) {
    let tmp4 = importDefault(dependencyMap[21]);
    const prototype = tmp4.prototype;
    tmp4 = new tmp4(channelId);
    closure_31[channelId] = tmp4;
    tmp = tmp4;
  }
  return tmp;
}
function updateParticipants(arg0) {
  let arr = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    arr = closure_30;
  }
  return arr.reduce((arg0, arg1) => {
    if (!arg0(callback(arg1))) {
      return arg0;
    } else {
      const obj = callback(arg1);
      if (0 === obj.size()) {
        function updateSelectedParticipantId(arg0) {
          let id = id.getId();
          const obj = callback3(arg0);
          if (0 !== obj.size()) {
            if (voiceChannelId.getVoiceChannelId() === arg0) {
              const NONE2 = constants2.NONE;
              const found = obj.toArray(id(closure_2[21]).ChannelRTCParticipantsIndexes.STREAM).find((type) => {
                let activeStreamForStreamKey = type.type === constants.STREAM;
                if (activeStreamForStreamKey) {
                  activeStreamForStreamKey = activeStreamForStreamKey.getActiveStreamForStreamKey(type.id);
                }
                return activeStreamForStreamKey;
              });
              if (null != found) {
                callback(closure_2[23])(found.type === constants.STREAM, "Impossible condition");
                id = found.id;
              } else if (1 !== obj.size()) {
                if (1 === obj.size(id(closure_2[21]).ChannelRTCParticipantsIndexes.VIDEO)) {
                  id = callback2(obj.toArray(id(closure_2[21]).ChannelRTCParticipantsIndexes.VIDEO), 1)[0].id;
                } else {
                  const found1 = obj.toArray().find((type) => {
                    let tmp = type.type === constants.USER;
                    if (tmp) {
                      tmp = type.id !== id;
                    }
                    if (tmp) {
                      tmp = !type.ringing;
                    }
                    return tmp;
                  });
                  let id1;
                  if (null != found1) {
                    id1 = found1.id;
                  }
                  if (null != id1) {
                    id = id1;
                  }
                  const toArrayResult1 = obj.toArray();
                }
              }
              const first = callback2(callback4(arg0), 1)[0];
              let NONE = first;
              if (first !== constants2.AUTO) {
                NONE = first;
                if (first !== constants2.NONE) {
                  const participant = obj.getParticipant(first);
                  let tmp17 = null == participant;
                  if (!tmp17) {
                    let tmp19 = participant.type === constants.STREAM;
                    if (tmp19) {
                      tmp19 = null == activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id);
                    }
                    tmp17 = tmp19;
                  }
                  NONE = first;
                  if (tmp17) {
                    NONE = constants2.NONE;
                  }
                }
              }
              const items = [NONE, id];
              callback5(arg0, items);
            }
          }
          callback5(arg0, null);
        }(arg1);
      } else {
        if (!callback3(arg1)) {
          if (!callback2(obj)) {
            let VIDEO = constants2.VOICE;
          }
          if (VIDEO !== constants2.VOICE) {
            closure_34[arg1] = VIDEO;
          }
        }
        VIDEO = constants2.VIDEO;
      }
      let tmp10;
      if (null != closure_35[arg1]) {
        tmp10 = tmp8[closure_27.APP];
      }
      delete r4[r3];
      if (tmp10 !== constants.HAVEN) {
        delete r1[r3];
      }
    }
  }, false);
}
function updateParticipant(arg0) {
  let tmp = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    tmp = closure_30;
  }
  return updateParticipants((updateParticipant) => updateParticipant.updateParticipant(updateParticipant), tmp);
}
function _getSelectedParticipantId(channelId) {
  const channel = store2.getChannel(channelId);
  if (null != channel) {
    channel.isDM();
  }
  let tmp3 = closure_32[channelId];
  if (null == tmp3) {
    const items = [tmp2, constants2.NONE];
    tmp3 = items;
  }
  return tmp3;
}
function getHasSelectedParticipant(channelId) {
  let tmp = null != closure_32[channelId];
  if (tmp) {
    tmp = callback3(closure_32[channelId], 1)[0] !== constants2.NONE;
  }
  return tmp;
}
function updateElapsedSelectedParticipantStats(currentVoiceChannelId) {
  if (null == closure_33[currentVoiceChannelId]) {
    closure_33[currentVoiceChannelId] = { "Bool(true)": "r", "Bool(true)": "onRequireModeratorMFAClick", "Bool(true)": "Array", "Bool(true)": "isSpamMessageRequest" };
  }
  const nowResult = performance.now();
  if (closure_33[currentVoiceChannelId].lastUpdate > 0) {
    let str = "gridDurationMs";
    const diff = nowResult - tmp2.lastUpdate;
    if (tmp4) {
      str = "focusDurationMs";
    }
    tmp2[str] = tmp2[str] + diff;
  }
  closure_33[currentVoiceChannelId].lastUpdate = nowResult;
}
function setSelectedParticipantId(channelId, arg1) {
  updateElapsedSelectedParticipantStats(channelId);
  if (null == arg1) {
    delete r3[r2];
  } else {
    closure_32[channelId] = arg1;
  }
  if (tmp2 !== getHasSelectedParticipant(channelId)) {
    closure_33[channelId].toggleCount = closure_33[channelId].toggleCount + 1;
  }
}
function hasVideo(id) {
  let hasEmbeddedActivityResult = id.size(arg1(dependencyMap[21]).ChannelRTCParticipantsIndexes.STREAM) > 0;
  if (!hasEmbeddedActivityResult) {
    hasEmbeddedActivityResult = id.size(arg1(dependencyMap[21]).ChannelRTCParticipantsIndexes.VIDEO) > 0;
  }
  if (!hasEmbeddedActivityResult) {
    hasEmbeddedActivityResult = id.hasEmbeddedActivity();
  }
  return hasEmbeddedActivityResult;
}
function clearChannel(arg0) {
  delete r2[r1];
  delete r2[r1];
  delete r2[r1];
  delete r0[r1];
}
function handleRebuildActiveChannels() {
  const items = [];
  const channelId = store3.getChannelId();
  if (null != channelId) {
    items.push(channelId);
  }
  const voiceChannelId = store3.getVoiceChannelId();
  if (!tmp5) {
    items.push(voiceChannelId);
  }
  const remoteSessionId = remoteSessionId.getRemoteSessionId();
  const voiceStateForSession = voiceStateForSession.getVoiceStateForSession(store.getId(), remoteSessionId);
  let channelId1;
  if (null != voiceStateForSession) {
    channelId1 = voiceStateForSession.channelId;
  }
  if (null != channelId1) {
    let channelId2;
    if (null != voiceStateForSession) {
      channelId2 = voiceStateForSession.channelId;
    }
    items.push(channelId2);
  }
  const tmp = updateParticipants;
  const tmp5 = null == voiceChannelId || items.includes(voiceChannelId);
  const obj = importDefault(dependencyMap[22]);
  const item = importDefault(dependencyMap[22]).difference(closure_30, items).forEach(clearChannel);
  const differenceResult = importDefault(dependencyMap[22]).difference(closure_30, items);
  closure_30 = items;
  return tmp((rebuild) => rebuild.rebuild(), importDefault(dependencyMap[22]).difference(items, closure_30));
}
function handleEmbeddedActivityChange() {
  return updateParticipants((updateEmbeddedActivities) => updateEmbeddedActivities.updateEmbeddedActivities());
}
function handleSpeaking(userId) {
  const arg1 = userId.userId;
  return updateParticipants((updateParticipantSpeaking) => updateParticipantSpeaking.updateParticipantSpeaking(userId));
}
function handleUserUpdate(user) {
  return updateParticipant(user.user.id);
}
function handleCallUpdate(channelId) {
  const items = [channelId.channelId];
  return updateParticipants((rebuild) => rebuild.rebuild(), items);
}
function handleChannelDelete(channel) {
  delete r1[r2];
  delete r1[r2];
  clearChannel(channel.channel.id);
}
function handleStreamClose(streamKey) {
  const decodeStreamKeyResult = arg1(dependencyMap[25]).decodeStreamKey(streamKey.streamKey);
  const items = [decodeStreamKeyResult.channelId];
  return updateParticipant(decodeStreamKeyResult.ownerId, items);
}
function isGuildVocalOrThread(channelId) {
  const channel = store2.getChannel(channelId);
  let isGuildVocalOrThreadResult;
  if (null != channel) {
    isGuildVocalOrThreadResult = channel.isGuildVocalOrThread();
  }
  return Boolean(isGuildVocalOrThreadResult);
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
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
let closure_18 = importDefault(dependencyMap[15]);
let closure_19 = importDefault(dependencyMap[16]);
let closure_20 = importDefault(dependencyMap[17]);
({ ParticipantTypes: closure_21, ParticipantSelectionTypes: closure_22, isStreamParticipant: closure_23 } = arg1(dependencyMap[18]));
const tmp2 = arg1(dependencyMap[18]);
({ ChannelLayouts: closure_24, ChannelModes: closure_25, ChannelTypes: closure_26, AppContext: closure_27 } = arg1(dependencyMap[19]));
let importDefaultResult = importDefault(dependencyMap[20]);
importDefaultResult = new importDefaultResult("ChannelRTCStore");
importDefaultResult.enableNativeLogger(true);
const frozen = Object.freeze([]);
let closure_30 = [];
let closure_31 = {};
let closure_32 = {};
let closure_33 = {};
let closure_34 = {};
let closure_35 = {};
let closure_36 = {};
let closure_37 = {};
let closure_38 = {};
let closure_39 = {};
let closure_40 = {};
let tmp7 = (PersistedStore) => {
  class ChannelRTCStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ChannelRTCStore);
      obj = closure_6(ChannelRTCStore);
      tmp2 = closure_5;
      if (closure_41()) {
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
  const arg1 = ChannelRTCStore;
  callback2(ChannelRTCStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(voiceParticipantsHidden) {
      this.waitFor(closure_11, closure_12, closure_13, closure_14, closure_9, closure_10, closure_15, closure_16, closure_17, closure_18, closure_19, closure_20);
      const items = [closure_9];
      this.syncWith(items, closure_54);
      const items1 = [closure_10];
      this.syncWith(items1, closure_53);
      let prop;
      if (null != voiceParticipantsHidden) {
        prop = voiceParticipantsHidden.voiceParticipantsHidden;
      }
      if (undefined !== prop) {
        let prop1;
        if (null != voiceParticipantsHidden) {
          prop1 = voiceParticipantsHidden.voiceParticipantsHidden;
        }
        const merged = Object.assign(closure_37, prop1);
        const tmp6 = closure_37;
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return { voiceParticipantsHidden: closure_37 };
    }
  };
  items[1] = obj;
  obj = {
    key: "getParticipantsVersion",
    value(arg0) {
      return callback5(arg0).version;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getParticipants",
    value(arg0) {
      let toArrayResult = callback5(arg0).toArray();
      if (null == toArrayResult) {
        toArrayResult = closure_29;
      }
      return toArrayResult;
    }
  };
  items[4] = {
    key: "getSpeakingParticipants",
    value(arg0) {
      let toArrayResult = callback5(arg0).toArray(ChannelRTCStore(closure_2[21]).ChannelRTCParticipantsIndexes.SPEAKING);
      if (null == toArrayResult) {
        toArrayResult = closure_29;
      }
      return toArrayResult;
    }
  };
  items[5] = {
    key: "getFilteredParticipants",
    value(arg0) {
      const obj = callback5(arg0);
      if (null != closure_37[arg0]) {
        if (tmp) {
          let toArrayResult = obj.toArray(ChannelRTCStore(closure_2[21]).ChannelRTCParticipantsIndexes.FILTERED);
        }
        return toArrayResult;
      }
      toArrayResult = obj.toArray(ChannelRTCStore(closure_2[21]).ChannelRTCParticipantsIndexes.NOT_POPPED_OUT);
    }
  };
  items[6] = {
    key: "getVideoParticipants",
    value(arg0) {
      let toArrayResult = callback5(arg0).toArray(ChannelRTCStore(closure_2[21]).ChannelRTCParticipantsIndexes.VIDEO);
      if (null == toArrayResult) {
        toArrayResult = closure_29;
      }
      return toArrayResult;
    }
  };
  items[7] = {
    key: "getStreamParticipants",
    value(arg0) {
      let toArrayResult = callback5(arg0).toArray(ChannelRTCStore(closure_2[21]).ChannelRTCParticipantsIndexes.STREAM);
      if (null == toArrayResult) {
        toArrayResult = closure_29;
      }
      return toArrayResult;
    }
  };
  items[8] = {
    key: "getActivityParticipants",
    value(arg0) {
      let toArrayResult = callback5(arg0).toArray(ChannelRTCStore(closure_2[21]).ChannelRTCParticipantsIndexes.ACTIVITY);
      if (null == toArrayResult) {
        toArrayResult = closure_29;
      }
      return toArrayResult;
    }
  };
  items[9] = {
    key: "getParticipant",
    value(arg0, arg1) {
      return callback5(arg0).getParticipant(arg1);
    }
  };
  items[10] = {
    key: "getUserParticipantCount",
    value(arg0) {
      const obj = callback5(arg0);
      const diff = obj.size() - obj.size(ChannelRTCStore(closure_2[21]).ChannelRTCParticipantsIndexes.STREAM);
      return diff - obj.size(ChannelRTCStore(closure_2[21]).ChannelRTCParticipantsIndexes.ACTIVITY);
    }
  };
  items[11] = {
    key: "getParticipantsOpen",
    value(arg0) {
      return null == closure_36[arg0] || closure_36[arg0];
    }
  };
  items[12] = {
    key: "getVoiceParticipantsHidden",
    value(arg0) {
      return null != closure_37[arg0] && closure_37[arg0];
    }
  };
  items[13] = {
    key: "getSelectedParticipantId",
    value(arg0) {
      const tmp = callback3(callback6(arg0), 2);
      let first = tmp[0];
      let tmp4 = null;
      if (first !== constants.NONE) {
        if (first === constants.AUTO) {
          let tmp7 = null;
          if (tmp3 !== constants.NONE) {
            tmp7 = null;
            if (tmp3 !== constants.AUTO) {
              tmp7 = tmp3;
            }
          }
          first = tmp7;
        }
        tmp4 = first;
      }
      return tmp4;
    }
  };
  items[14] = {
    key: "getSelectedParticipant",
    value(arg0) {
      const selectedParticipantId = this.getSelectedParticipantId(arg0);
      let participant = null;
      if (null != selectedParticipantId) {
        participant = callback5(arg0).getParticipant(selectedParticipantId);
        const obj = callback5(arg0);
      }
      return participant;
    }
  };
  items[15] = {
    key: "getSelectedParticipantStats",
    value(arg0) {
      if (null == closure_33[arg0]) {
        let obj = {};
      } else {
        obj = {};
        const _Math = Math;
        obj.view_mode_grid_duration_ms = Math.floor(tmp.gridDurationMs);
        const _Math2 = Math;
        obj.view_mode_focus_duration_ms = Math.floor(tmp.focusDurationMs);
        obj.view_mode_toggle_count = tmp.toggleCount;
      }
      return obj;
    }
  };
  items[16] = {
    key: "getGuildRingingUsers",
    value(arg0) {
      return callback5(arg0).guildRingingUsers;
    }
  };
  items[17] = {
    key: "getMode",
    value(arg0) {
      if (null != closure_34[arg0]) {
        return tmp;
      } else {
        callback7(arg0) ? closure_25.VIDEO : closure_25.VOICE;
      }
    }
  };
  items[18] = {
    key: "getLayout",
    value(arg0) {
      if (arg1 === undefined) {
        const APP = constants3.APP;
      }
      return constants2.NORMAL;
    }
  };
  items[19] = {
    key: "getChatOpen",
    value(arg0) {
      return null != closure_38[arg0] && closure_38[arg0];
    }
  };
  items[20] = {
    key: "getAllChatOpen",
    value() {
      return closure_38;
    }
  };
  items[21] = {
    key: "isFullscreenInContext",
    value() {
      let APP = arg0;
      if (arg0 === undefined) {
        APP = constants3.APP;
      }
      const ChannelRTCStore = APP;
      const values = Object.values(closure_35);
      return values.some((arg0) => arg0[closure_0] === constants.FULL_SCREEN);
    }
  };
  items[22] = {
    key: "getStageStreamSize",
    value(arg0) {
      return closure_39[arg0];
    }
  };
  items[23] = {
    key: "getStageVideoLimitBoostUpsellDismissed",
    value(arg0) {
      return closure_40[arg0];
    }
  };
  items[24] = {
    key: "isParticipantPoppedOut",
    value(arg0, arg1) {
      const participant = this.getParticipant(arg0, arg1);
      let tmp2 = null != participant;
      if (tmp2) {
        tmp2 = "isPoppedOut" in participant && participant.isPoppedOut;
        const tmp3 = "isPoppedOut" in participant && participant.isPoppedOut;
      }
      return tmp2;
    }
  };
  return callback(ChannelRTCStore, items);
}(importDefault(dependencyMap[26]).PersistedStore);
tmp7.displayName = "ChannelRTCStore";
tmp7.persistKey = "ChannelRTCStore";
tmp7 = new tmp7(importDefault(dependencyMap[27]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let done;
    const tmp = _createForOfIteratorHelperLoose(closure_30);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_52;
        let tmp3 = closure_52(iter.value);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
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
    let arg1;
    if (null != channelId) {
      delete r0[r6];
    } else if (null != currentVoiceChannelId) {
      delete r4[r5];
      delete r4[r5];
      updateElapsedSelectedParticipantStats(currentVoiceChannelId);
    }
    let flag = false;
    if (channelId !== currentVoiceChannelId) {
      flag = false;
      if (null != currentVoiceChannelId) {
        const tmp7 = _getParticipants(currentVoiceChannelId);
        arg1 = tmp7;
        const guildRingingUsers = tmp7.guildRingingUsers;
        const item = guildRingingUsers.forEach((arg0) => tmp7.updateGuildRingingUsers(arg0, false));
        const items = [currentVoiceChannelId];
        flag = updateParticipants((rebuild) => rebuild.rebuild(), items);
      }
    }
    if (!flag) {
      flag = handleRebuildActiveChannels();
    }
    return flag;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    const tmp = handleRebuildActiveChannels();
    if (null == channelId) {
      return tmp;
    } else if (null == channelId.messageId) {
      return tmp;
    } else if (closure_38[channelId]) {
      return tmp;
    } else {
      const channel = store2.getChannel(channelId);
      let tmp4 = tmp;
      if (null != channel) {
        let flag = tmp;
        if (channel.isGuildVocal()) {
          closure_38[channelId] = true;
          flag = true;
        }
        tmp4 = flag;
      }
      return tmp4;
    }
  },
  CHANNEL_RTC_ACTIVE_CHANNELS: handleRebuildActiveChannels,
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(arg0) {
    let voiceStates;
    ({ voiceStates, initial: closure_0 } = arg0);
    return voiceStates.reduce((arg0, arg1) => {
      let channelId;
      let guildId;
      let userId;
      ({ userId, channelId, guildId } = arg1);
      if (tmp) {
        let obj = callback(closure_2[24]);
        obj = { guildId, location: "voice_status_update" };
        obj = { autoTrackExposure: false };
        if (obj.getCurrentConfig(obj, obj).enabled) {
          const result = callback2(channelId).updateGuildRingingUsers(userId, false);
          const obj4 = callback2(channelId);
        }
      }
      if (closure_0) {
        if (null != channelId) {
          let tmp7 = arg0;
        }
        return tmp7;
      }
      tmp7 = callback3(userId) || arg0;
    }, false);
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    if (channel.type === constants4.GROUP_DM) {
      const originChannelId = channel.originChannelId;
      if (null != originChannelId) {
        const obj = {};
        let NORMAL;
        if (null != closure_35[originChannelId]) {
          NORMAL = tmp5[closure_27.APP];
        }
        if (null == NORMAL) {
          NORMAL = constants3.NORMAL;
        }
        obj[constants5.APP] = NORMAL;
        closure_35[channel.id] = obj;
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
    clearChannel(channelId.channelId);
  },
  CHANNEL_RTC_SELECT_PARTICIPANT: function handleSelectParticipant(channelId) {
    channelId = channelId.channelId;
    const id = channelId.id;
    const tmp3 = _getParticipants(channelId);
    const arg1 = tmp3;
    if (null == id) {
      const item = tmp3.toArray(arg1(dependencyMap[21]).ChannelRTCParticipantsIndexes.STREAM).forEach((user) => {
        if (callback(user)) {
          tmp3.updateParticipant(user.user.id);
        }
      });
      const toArrayResult = tmp3.toArray(arg1(dependencyMap[21]).ChannelRTCParticipantsIndexes.STREAM);
    }
    if (null != id) {
      let NONE = id;
    } else {
      NONE = constants2.NONE;
    }
    const items = [NONE, callback3(_getSelectedParticipantId(channelId), 2)[1]];
    setSelectedParticipantId(channelId, items);
    if (obj2.isStreamKey(id)) {
      const ownerId = arg1(dependencyMap[25]).decodeStreamKey(tmp2).ownerId;
      if (ownerId === store.getId()) {
        const items1 = [tmp];
        updateParticipant(tmp14, items1);
      }
      while (true) {
        let tmp20 = hasVideo;
        if (hasVideo(tmp3)) {
          break;
        } else {
          let tmp21 = closure_36;
          let tmp22 = channelId;
          let flag = false;
          closure_36[tmp] = false;
          // break
        }
        break;
      }
      const obj3 = arg1(dependencyMap[25]);
      const tmp14 = ownerId;
    }
  },
  CHANNEL_RTC_POPOUT_PARTICIPANT: function handlePopOutParticipant(arg0) {
    let channelId;
    let participantId;
    ({ channelId, participantId } = arg0);
    if (callback3(_getSelectedParticipantId(channelId), 1)[0] === participantId) {
      setSelectedParticipantId(channelId, null);
    }
    const obj = _getParticipants(channelId);
    const participant = obj.getParticipant(participantId);
    let tmp5 = null != participant;
    if (tmp5) {
      tmp5 = participant.type !== constants.ACTIVITY;
    }
    if (tmp5) {
      const result = obj.updateParticipantPoppedOut(participantId, true);
      const items = [channelId];
      updateParticipant(participant.user.id, items);
    }
  },
  CHANNEL_RTC_RETURN_PARTICIPANT: function handleReturnParticipant(arg0) {
    let channelId;
    let participantId;
    ({ channelId, participantId } = arg0);
    const obj = _getParticipants(channelId);
    const result = obj.updateParticipantPoppedOut(participantId, false);
    const participant = obj.getParticipant(participantId);
    let tmp3 = null != participant;
    if (tmp3) {
      tmp3 = participant.type !== constants.ACTIVITY;
    }
    if (tmp3) {
      const items = [channelId];
      updateParticipant(participant.user.id, items);
    }
  },
  CHANNEL_RTC_UPDATE_LAYOUT: function handleCallLayout(channelId) {
    let appContext;
    let layout;
    channelId = channelId.channelId;
    const obj = {};
    ({ layout, appContext } = channelId);
    const merged = Object.assign(closure_35[channelId]);
    obj[appContext] = layout;
    closure_35[channelId] = obj;
  },
  CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function handleUpdateParticipantsOpen(channelId) {
    closure_36[channelId.channelId] = channelId.participantsOpen;
  },
  CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function handleUpdateVoiceParticipantsHidden(channelId) {
    closure_37[channelId.channelId] = channelId.voiceParticipantsHidden;
  },
  CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function handleUpdateStageStreamSize(channelId) {
    closure_39[channelId.channelId] = channelId.large;
  },
  CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function handleUpdateStageVideoLimitBoostUpsellDismissed(channelId) {
    closure_40[channelId.channelId] = channelId.dismissed;
  },
  STREAM_UPDATE_SELF_HIDDEN: function handleUpdateSelfStreamHidden(channelId) {
    channelId = channelId.channelId;
    const id = store.getId();
    if (channelId.selfStreamHidden) {
      const first = callback3(_getSelectedParticipantId(channelId), 1)[0];
      const obj2 = arg1(dependencyMap[25]);
      if (tmp6) {
        setSelectedParticipantId(channelId, null);
      }
      const tmp6 = arg1(dependencyMap[25]).isStreamKey(first) && first.includes(id);
    }
    const items = [channelId];
    updateParticipant(id, items);
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function handleUpdateChatOpen(channelId) {
    closure_38[channelId.channelId] = channelId.chatOpen;
  },
  RTC_CONNECTION_VIDEO: function handleRTCConnectionVideo(channelId) {
    const items = [channelId.channelId];
    return updateParticipant(channelId.userId, items);
  },
  RTC_CONNECTION_PLATFORM: function handleRTCConnectionPlatform(channelId) {
    const items = [channelId.channelId];
    return updateParticipant(channelId.userId, items);
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function handleMediaEngineSetLocalVideoDisabled(userId) {
    return updateParticipant(userId.userId);
  },
  MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function handleVideoSourceQuality(channelId) {
    ({ senderUserId: closure_0, maxResolution: closure_1, maxFrameRate: closure_2 } = channelId);
    const items = [channelId.channelId];
    return updateParticipants((updateParticipantQuality) => updateParticipantQuality.updateParticipantQuality(closure_0, closure_1, closure_2), items);
  },
  STREAM_CLOSE: handleStreamClose,
  STREAM_DELETE: handleStreamClose,
  STREAM_WATCH: function handleStreamWatch(streamKey) {
    const decodeStreamKeyResult = arg1(dependencyMap[25]).decodeStreamKey(streamKey.streamKey);
    const items = [decodeStreamKeyResult.channelId];
    return updateParticipant(decodeStreamKeyResult.ownerId, items);
  },
  SPEAKING: handleSpeaking,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: handleSpeaking,
  GUILD_SOUNDBOARD_SOUND_PLAY_END: handleSpeaking,
  PUSH_TO_TALK_STATE_CHANGE: function handlePushToTalkStateChange() {
    return updateParticipants((updateParticipantSpeaking) => updateParticipantSpeaking.updateParticipantSpeaking(id.getId()));
  },
  GUILD_RING_START: function handleGuildRingStart(channelId) {
    let guildId;
    let ongoingRings;
    channelId = channelId.channelId;
    let closure_0;
    ({ guildId, ongoingRings } = channelId);
    if (obj.getCurrentConfig({ guildId, location: "guild_ring_start" }).enabled) {
      closure_0 = _getParticipants(channelId);
      const _Object = Object;
      const keys = Object.keys(ongoingRings);
      const item = keys.forEach((arg0) => closure_0.updateGuildRingingUsers(arg0, true));
      const items = [channelId];
      return updateParticipants((rebuild) => rebuild.rebuild(), items);
    } else {
      return false;
    }
    const obj = importDefault(dependencyMap[24]);
  },
  GUILD_RING_STOP: function handleGuildRingStop(guildId) {
    let channelId;
    let ringing;
    ({ channelId, ringing } = guildId);
    let closure_0;
    if (obj.getCurrentConfig({ guildId: guildId.guildId, location: "guild_ring_start" }).enabled) {
      closure_0 = _getParticipants(channelId);
      const item = ringing.forEach((arg0) => closure_0.updateGuildRingingUsers(arg0, false));
      const items = [channelId];
      return updateParticipants((rebuild) => rebuild.rebuild(), items);
    } else {
      return false;
    }
    const obj = importDefault(dependencyMap[24]);
  },
  USER_UPDATE: handleUserUpdate,
  GUILD_MEMBER_UPDATE: handleUserUpdate,
  GUILD_DELETE: function handleGuildDelete(guild) {
    const arg1 = guild.guild;
    const items = [];
    const importDefault = items;
    const item = importDefault(dependencyMap[22]).forEach(closure_30, (channelId) => {
      const channel = channel.getChannel(channelId);
      let tmp = null != channel;
      if (tmp) {
        tmp = channel.getGuildId() !== guild.id;
      }
      if (!tmp) {
        items.push(channelId);
      }
    });
    if (0 === items.length) {
      return false;
    } else {
      const item1 = importDefault(dependencyMap[22]).forEach(items, (arg0) => {
        callback(arg0);
      });
    }
    const arr2 = importDefault(dependencyMap[22]);
  }
});
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let done;
    const tmp = _createForOfIteratorHelperLoose(closure_30);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_52;
        let tmp3 = closure_52(iter.value);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
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
    let arg1;
    if (null != channelId) {
      delete r0[r6];
    } else if (null != currentVoiceChannelId) {
      delete r4[r5];
      delete r4[r5];
      updateElapsedSelectedParticipantStats(currentVoiceChannelId);
    }
    let flag = false;
    if (channelId !== currentVoiceChannelId) {
      flag = false;
      if (null != currentVoiceChannelId) {
        const tmp7 = _getParticipants(currentVoiceChannelId);
        arg1 = tmp7;
        const guildRingingUsers = tmp7.guildRingingUsers;
        const item = guildRingingUsers.forEach((arg0) => tmp7.updateGuildRingingUsers(arg0, false));
        const items = [currentVoiceChannelId];
        flag = updateParticipants((rebuild) => rebuild.rebuild(), items);
      }
    }
    if (!flag) {
      flag = handleRebuildActiveChannels();
    }
    return flag;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    const tmp = handleRebuildActiveChannels();
    if (null == channelId) {
      return tmp;
    } else if (null == channelId.messageId) {
      return tmp;
    } else if (closure_38[channelId]) {
      return tmp;
    } else {
      const channel = store2.getChannel(channelId);
      let tmp4 = tmp;
      if (null != channel) {
        let flag = tmp;
        if (channel.isGuildVocal()) {
          closure_38[channelId] = true;
          flag = true;
        }
        tmp4 = flag;
      }
      return tmp4;
    }
  },
  CHANNEL_RTC_ACTIVE_CHANNELS: handleRebuildActiveChannels,
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(arg0) {
    let voiceStates;
    ({ voiceStates, initial: closure_0 } = arg0);
    return voiceStates.reduce((arg0, arg1) => {
      let channelId;
      let guildId;
      let userId;
      ({ userId, channelId, guildId } = arg1);
      if (tmp) {
        let obj = callback(closure_2[24]);
        obj = { guildId, location: "voice_status_update" };
        obj = { autoTrackExposure: false };
        if (obj.getCurrentConfig(obj, obj).enabled) {
          const result = callback2(channelId).updateGuildRingingUsers(userId, false);
          const obj4 = callback2(channelId);
        }
      }
      if (closure_0) {
        if (null != channelId) {
          let tmp7 = arg0;
        }
        return tmp7;
      }
      tmp7 = callback3(userId) || arg0;
    }, false);
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    if (channel.type === constants4.GROUP_DM) {
      const originChannelId = channel.originChannelId;
      if (null != originChannelId) {
        const obj = {};
        let NORMAL;
        if (null != closure_35[originChannelId]) {
          NORMAL = tmp5[closure_27.APP];
        }
        if (null == NORMAL) {
          NORMAL = constants3.NORMAL;
        }
        obj[constants5.APP] = NORMAL;
        closure_35[channel.id] = obj;
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
    clearChannel(channelId.channelId);
  },
  CHANNEL_RTC_SELECT_PARTICIPANT: function handleSelectParticipant(channelId) {
    channelId = channelId.channelId;
    const id = channelId.id;
    const tmp3 = _getParticipants(channelId);
    const arg1 = tmp3;
    if (null == id) {
      const item = tmp3.toArray(arg1(dependencyMap[21]).ChannelRTCParticipantsIndexes.STREAM).forEach((user) => {
        if (callback(user)) {
          tmp3.updateParticipant(user.user.id);
        }
      });
      const toArrayResult = tmp3.toArray(arg1(dependencyMap[21]).ChannelRTCParticipantsIndexes.STREAM);
    }
    if (null != id) {
      let NONE = id;
    } else {
      NONE = constants2.NONE;
    }
    const items = [NONE, callback3(_getSelectedParticipantId(channelId), 2)[1]];
    setSelectedParticipantId(channelId, items);
    if (obj2.isStreamKey(id)) {
      const ownerId = arg1(dependencyMap[25]).decodeStreamKey(tmp2).ownerId;
      if (ownerId === store.getId()) {
        const items1 = [tmp];
        updateParticipant(tmp14, items1);
      }
      while (true) {
        let tmp20 = hasVideo;
        if (hasVideo(tmp3)) {
          break;
        } else {
          let tmp21 = closure_36;
          let tmp22 = channelId;
          let flag = false;
          closure_36[tmp] = false;
          // break
        }
        break;
      }
      const obj3 = arg1(dependencyMap[25]);
      const tmp14 = ownerId;
    }
  },
  CHANNEL_RTC_POPOUT_PARTICIPANT: function handlePopOutParticipant(arg0) {
    let channelId;
    let participantId;
    ({ channelId, participantId } = arg0);
    if (callback3(_getSelectedParticipantId(channelId), 1)[0] === participantId) {
      setSelectedParticipantId(channelId, null);
    }
    const obj = _getParticipants(channelId);
    const participant = obj.getParticipant(participantId);
    let tmp5 = null != participant;
    if (tmp5) {
      tmp5 = participant.type !== constants.ACTIVITY;
    }
    if (tmp5) {
      const result = obj.updateParticipantPoppedOut(participantId, true);
      const items = [channelId];
      updateParticipant(participant.user.id, items);
    }
  },
  CHANNEL_RTC_RETURN_PARTICIPANT: function handleReturnParticipant(arg0) {
    let channelId;
    let participantId;
    ({ channelId, participantId } = arg0);
    const obj = _getParticipants(channelId);
    const result = obj.updateParticipantPoppedOut(participantId, false);
    const participant = obj.getParticipant(participantId);
    let tmp3 = null != participant;
    if (tmp3) {
      tmp3 = participant.type !== constants.ACTIVITY;
    }
    if (tmp3) {
      const items = [channelId];
      updateParticipant(participant.user.id, items);
    }
  },
  CHANNEL_RTC_UPDATE_LAYOUT: function handleCallLayout(channelId) {
    let appContext;
    let layout;
    channelId = channelId.channelId;
    const obj = {};
    ({ layout, appContext } = channelId);
    const merged = Object.assign(closure_35[channelId]);
    obj[appContext] = layout;
    closure_35[channelId] = obj;
  },
  CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function handleUpdateParticipantsOpen(channelId) {
    closure_36[channelId.channelId] = channelId.participantsOpen;
  },
  CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function handleUpdateVoiceParticipantsHidden(channelId) {
    closure_37[channelId.channelId] = channelId.voiceParticipantsHidden;
  },
  CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function handleUpdateStageStreamSize(channelId) {
    closure_39[channelId.channelId] = channelId.large;
  },
  CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function handleUpdateStageVideoLimitBoostUpsellDismissed(channelId) {
    closure_40[channelId.channelId] = channelId.dismissed;
  },
  STREAM_UPDATE_SELF_HIDDEN: function handleUpdateSelfStreamHidden(channelId) {
    channelId = channelId.channelId;
    const id = store.getId();
    if (channelId.selfStreamHidden) {
      const first = callback3(_getSelectedParticipantId(channelId), 1)[0];
      const obj2 = arg1(dependencyMap[25]);
      if (tmp6) {
        setSelectedParticipantId(channelId, null);
      }
      const tmp6 = arg1(dependencyMap[25]).isStreamKey(first) && first.includes(id);
    }
    const items = [channelId];
    updateParticipant(id, items);
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function handleUpdateChatOpen(channelId) {
    closure_38[channelId.channelId] = channelId.chatOpen;
  },
  RTC_CONNECTION_VIDEO: function handleRTCConnectionVideo(channelId) {
    const items = [channelId.channelId];
    return updateParticipant(channelId.userId, items);
  },
  RTC_CONNECTION_PLATFORM: function handleRTCConnectionPlatform(channelId) {
    const items = [channelId.channelId];
    return updateParticipant(channelId.userId, items);
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function handleMediaEngineSetLocalVideoDisabled(userId) {
    return updateParticipant(userId.userId);
  },
  MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function handleVideoSourceQuality(channelId) {
    ({ senderUserId: closure_0, maxResolution: closure_1, maxFrameRate: closure_2 } = channelId);
    const items = [channelId.channelId];
    return updateParticipants((updateParticipantQuality) => updateParticipantQuality.updateParticipantQuality(closure_0, closure_1, closure_2), items);
  },
  STREAM_CLOSE: handleStreamClose,
  STREAM_DELETE: handleStreamClose,
  STREAM_WATCH: function handleStreamWatch(streamKey) {
    const decodeStreamKeyResult = arg1(dependencyMap[25]).decodeStreamKey(streamKey.streamKey);
    const items = [decodeStreamKeyResult.channelId];
    return updateParticipant(decodeStreamKeyResult.ownerId, items);
  },
  SPEAKING: handleSpeaking,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: handleSpeaking,
  GUILD_SOUNDBOARD_SOUND_PLAY_END: handleSpeaking,
  PUSH_TO_TALK_STATE_CHANGE: function handlePushToTalkStateChange() {
    return updateParticipants((updateParticipantSpeaking) => updateParticipantSpeaking.updateParticipantSpeaking(id.getId()));
  },
  GUILD_RING_START: function handleGuildRingStart(channelId) {
    let guildId;
    let ongoingRings;
    channelId = channelId.channelId;
    let closure_0;
    ({ guildId, ongoingRings } = channelId);
    if (obj.getCurrentConfig({ guildId, location: "guild_ring_start" }).enabled) {
      closure_0 = _getParticipants(channelId);
      const _Object = Object;
      const keys = Object.keys(ongoingRings);
      const item = keys.forEach((arg0) => closure_0.updateGuildRingingUsers(arg0, true));
      const items = [channelId];
      return updateParticipants((rebuild) => rebuild.rebuild(), items);
    } else {
      return false;
    }
    const obj = importDefault(dependencyMap[24]);
  },
  GUILD_RING_STOP: function handleGuildRingStop(guildId) {
    let channelId;
    let ringing;
    ({ channelId, ringing } = guildId);
    let closure_0;
    if (obj.getCurrentConfig({ guildId: guildId.guildId, location: "guild_ring_start" }).enabled) {
      closure_0 = _getParticipants(channelId);
      const item = ringing.forEach((arg0) => closure_0.updateGuildRingingUsers(arg0, false));
      const items = [channelId];
      return updateParticipants((rebuild) => rebuild.rebuild(), items);
    } else {
      return false;
    }
    const obj = importDefault(dependencyMap[24]);
  },
  USER_UPDATE: handleUserUpdate,
  GUILD_MEMBER_UPDATE: handleUserUpdate,
  GUILD_DELETE: function handleGuildDelete(guild) {
    const arg1 = guild.guild;
    const items = [];
    const importDefault = items;
    const item = importDefault(dependencyMap[22]).forEach(closure_30, (channelId) => {
      const channel = channel.getChannel(channelId);
      let tmp = null != channel;
      if (tmp) {
        tmp = channel.getGuildId() !== guild.id;
      }
      if (!tmp) {
        items.push(channelId);
      }
    });
    if (0 === items.length) {
      return false;
    } else {
      const item1 = importDefault(dependencyMap[22]).forEach(items, (arg0) => {
        callback(arg0);
      });
    }
    const arr2 = importDefault(dependencyMap[22]);
  }
};
const tmp3 = arg1(dependencyMap[19]);
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/calls/ChannelRTCStore.tsx");

export default tmp7;
export const NO_PARTICIPANTS = frozen;
