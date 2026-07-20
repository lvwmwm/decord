// Module ID: 4145
// Function ID: 34907
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4145 (_isNativeReflectConstruct)
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
function reset() {
  const map = new Map();
  let closure_4 = {};
  let closure_5 = {};
  let closure_6 = {};
}
function closeActiveStream(streamKey) {
  store.delete(streamKey);
}
function getAllStreams() {
  const items = [];
  for (const key10003 in closure_4) {
    let tmp3 = key10003;
    let tmp4 = closure_4;
    let tmp5 = closure_4[key10003];
    let tmp6 = tmp5;
    let keys = Object.keys();
    if (keys === undefined) {
      continue;
    } else {
      let tmp2 = keys[tmp];
      while (tmp2 !== undefined) {
        let tmp8 = tmp2;
        let tmp9 = closure_4;
        let arr = items.push(closure_4[key10003][tmp2]);
        // continue
      }
    }
    continue;
  }
  return items;
}
function handleStreamUpdate(streamKey) {
  let paused;
  let region;
  let viewerIds;
  streamKey = streamKey.streamKey;
  const obj = {};
  ({ region, viewerIds, paused } = streamKey);
  const merged = Object.assign(arg1(dependencyMap[17]).decodeStreamKey(streamKey));
  obj["state"] = paused ? closure_22.PAUSED : closure_22.ACTIVE;
  const result = store.set(streamKey, obj);
  closure_5[streamKey] = { streamKey, region, viewerIds };
}
function canViewChannel(arg0, arg1) {
  const basicChannel = store4.getBasicChannel(arg1);
  let tmp2 = arg0 === StreamTypes.CALL;
  if (!tmp2) {
    let canBasicChannelResult = null != basicChannel;
    if (canBasicChannelResult) {
      canBasicChannelResult = closure_18.canBasicChannel(constants4.VIEW_CHANNEL, basicChannel);
    }
    tmp2 = canBasicChannelResult;
  }
  return tmp2;
}
function isWatchableStream(streamType) {
  if (canViewChannel(streamType.streamType, streamType.channelId)) {
    return true;
  } else {
    const basicChannel = store4.getBasicChannel(streamType.channelId);
    let first = null != basicChannel;
    if (first) {
      const obj = arg1(dependencyMap[22]);
      first = obj.canWatchStream(basicChannel, closure_21, closure_16, closure_18, closure_12)[0];
    }
    return first;
  }
}
let closure_7 = importDefault(dependencyMap[0]);
let closure_8 = importDefault(dependencyMap[1]);
let closure_9 = importDefault(dependencyMap[2]);
let closure_10 = importDefault(dependencyMap[3]);
let closure_11 = importDefault(dependencyMap[4]);
let closure_12 = importDefault(dependencyMap[5]);
let closure_13 = importDefault(dependencyMap[6]);
let closure_14 = importDefault(dependencyMap[7]);
let closure_15 = importDefault(dependencyMap[8]);
let closure_16 = importDefault(dependencyMap[9]);
let closure_17 = importDefault(dependencyMap[10]);
let closure_18 = importDefault(dependencyMap[11]);
let closure_19 = importDefault(dependencyMap[12]);
let closure_20 = importDefault(dependencyMap[13]);
let closure_21 = importDefault(dependencyMap[14]);
({ ApplicationStreamStates: closure_22, RTCConnectionStates: closure_23, ApplicationStreamDeleteReasons: closure_24, NULL_STRING_GUILD_ID: closure_25, BasicPermissions: closure_26 } = arg1(dependencyMap[15]));
const StreamTypes = arg1(dependencyMap[16]).StreamTypes;
let closure_28 = null;
let closure_29 = {};
let closure_30 = null;
reset();
let closure_31;
let closure_32;
let tmp4 = (PersistedStore) => {
  class ApplicationStreamingStore {
    constructor() {
      self = this;
      tmp = closure_7(this, ApplicationStreamingStore);
      obj = closure_10(ApplicationStreamingStore);
      tmp2 = closure_9;
      if (closure_33()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_10;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_10(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ApplicationStreamingStore;
  callback2(ApplicationStreamingStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(selfStreamParticipantsHidden) {
      const items = [closure_18];
      this.syncWith(items, () => true);
      this.waitFor(closure_14, closure_15, closure_18, closure_19, closure_13, closure_20);
      let prop;
      if (null != selfStreamParticipantsHidden) {
        prop = selfStreamParticipantsHidden.selfStreamParticipantsHidden;
      }
      if (undefined !== prop) {
        let prop1;
        if (null != selfStreamParticipantsHidden) {
          prop1 = selfStreamParticipantsHidden.selfStreamParticipantsHidden;
        }
        const merged = Object.assign(closure_29, prop1);
        const tmp5 = closure_29;
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return { selfStreamParticipantsHidden: closure_29 };
    }
  };
  items[1] = obj;
  obj = {
    key: "isSelfStreamHidden",
    value(arg0) {
      return null != closure_29[arg0] && closure_29[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastActiveStream",
    value() {
      let tmp = null;
      if (callback(closure_2[23])(closure_17)) {
        const _Array = Array;
        let arr = Array.from(closure_3.values());
        arr = arr.pop();
        tmp = null;
        if (null != arr) {
          tmp = arr;
        }
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getAllActiveStreams",
    value() {
      if (callback(closure_2[23])(closure_17)) {
        const _Array = Array;
        let items = Array.from(closure_3.values());
      } else {
        items = [];
      }
      return items;
    }
  };
  items[5] = {
    key: "getAllActiveStreamsForChannel",
    value(arg0) {
      const ApplicationStreamingStore = arg0;
      if (callback(closure_2[23])(closure_17)) {
        const _Array = Array;
        let found = Array.from(closure_3.values()).filter((channelId) => channelId.channelId === channelId);
        const arr = Array.from(closure_3.values());
      } else {
        found = [];
      }
      return found;
    }
  };
  items[6] = {
    key: "getActiveStreamForStreamKey",
    value(arg0) {
      let tmp = null;
      if (callback(closure_2[23])(closure_17)) {
        const value = closure_3.get(arg0);
        tmp = null;
        if (null != value) {
          tmp = value;
        }
      }
      return tmp;
    }
  };
  items[7] = {
    key: "getActiveStreamForApplicationStream",
    value(currentUserActiveStream) {
      const self = this;
      if (callback(closure_2[23])(closure_17)) {
        if (null != currentUserActiveStream) {
          const activeStreamForStreamKey = self.getActiveStreamForStreamKey(ApplicationStreamingStore(closure_2[17]).encodeStreamKey(currentUserActiveStream));
          let tmp5 = null;
          if (null != activeStreamForStreamKey) {
            tmp5 = activeStreamForStreamKey;
          }
          return tmp5;
        }
      }
      return null;
    }
  };
  items[8] = {
    key: "getCurrentUserActiveStream",
    value() {
      const self = this;
      const channel = store2.getChannel(store3.getVoiceChannelId());
      let activeStreamForUser = null;
      if (null != channel) {
        const id = store.getId();
        activeStreamForUser = self.getActiveStreamForUser(id, channel.getGuildId());
      }
      return activeStreamForUser;
    }
  };
  items[9] = {
    key: "getActiveStreamForUser",
    value(arg0, arg1) {
      const self = this;
      const ApplicationStreamingStore = arg0;
      const streamForUser = this.getStreamForUser(arg0, arg1);
      if (null != streamForUser) {
        let activeStreamForApplicationStream = self.getActiveStreamForApplicationStream(streamForUser);
      } else {
        const allActiveStreams = self.getAllActiveStreams();
        const found = allActiveStreams.find((ownerId) => ownerId.ownerId === ownerId);
        activeStreamForApplicationStream = null;
        if (null != found) {
          activeStreamForApplicationStream = found;
        }
      }
      return activeStreamForApplicationStream;
    }
  };
  items[10] = {
    key: "getStreamerActiveStreamMetadata",
    value() {
      const self = this;
      const channel = store2.getChannel(store3.getVoiceChannelId());
      if (null == channel) {
        return null;
      } else {
        const id = store.getId();
        const activeStreamForUser = self.getActiveStreamForUser(id, channel.getGuildId());
        let tmp4 = null;
        if (null != activeStreamForUser) {
          const obj2 = ApplicationStreamingStore(closure_2[17]);
          let tmp9 = null;
          if (null != closure_6[obj2.encodeStreamKey(obj2, activeStreamForUser)]) {
            tmp9 = tmp8;
          }
          tmp4 = tmp9;
        }
        return tmp4;
      }
    }
  };
  items[11] = {
    key: "getStreamerActiveStreamMetadataForStream",
    value(arg0) {
      let tmp2 = null;
      if (null != closure_6[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[12] = {
    key: "getIsActiveStreamPreviewDisabled",
    value(arg0) {
      let previewDisabled;
      if (null != closure_6[arg0]) {
        previewDisabled = tmp.previewDisabled;
      }
      return null != previewDisabled && previewDisabled;
    }
  };
  items[13] = {
    key: "getAnyStreamForUser",
    value(arg0) {
      if (callback(closure_2[23])(closure_17)) {
        let tmp4 = null;
        if (null != closure_4[arg0]) {
          const _Object = Object;
          const values = Object.values(tmp3);
          const found = values.find((arg0) => callback(arg0));
          let tmp7 = null;
          if (null != found) {
            tmp7 = found;
          }
          tmp4 = tmp7;
        }
        return tmp4;
      } else {
        return null;
      }
    }
  };
  items[14] = {
    key: "getAnyDiscoverableStreamForUser",
    value(arg0) {
      if (callback(closure_2[23])(closure_17)) {
        let tmp4 = null;
        if (null != closure_4[arg0]) {
          const _Object = Object;
          const values = Object.values(tmp3);
          const found = values.find((discoverable) => {
            let tmp = callback(discoverable);
            if (tmp) {
              tmp = false !== discoverable.discoverable;
            }
            return tmp;
          });
          let tmp7 = null;
          if (null != found) {
            tmp7 = found;
          }
          tmp4 = tmp7;
        }
        return tmp4;
      } else {
        return null;
      }
    }
  };
  items[15] = {
    key: "getStreamForUser",
    value(arg0, arg1) {
      let tmp = arg1;
      if (callback(closure_2[23])(closure_17)) {
        let tmp5;
        if (null != closure_4[arg0]) {
          if (null == tmp) {
            tmp = closure_25;
          }
          tmp5 = tmp4[tmp];
        }
        let tmp6 = null;
        if (null != tmp5) {
          let tmp8 = null;
          if (callback6(tmp5)) {
            tmp8 = tmp5;
          }
          tmp6 = tmp8;
        }
        return tmp6;
      } else {
        return null;
      }
    }
  };
  items[16] = {
    key: "getRTCStream",
    value(arg0) {
      let tmp = null;
      if (callback(closure_2[23])(closure_17)) {
        tmp = null;
        if (null != closure_5[arg0]) {
          tmp = tmp4;
        }
      }
      return tmp;
    }
  };
  items[17] = {
    key: "getAllApplicationStreams",
    value() {
      if (callback(closure_2[23])(closure_17)) {
        let found = callback5().filter((streamType) => {
          let tmp = null != streamType;
          if (tmp) {
            tmp = callback(streamType.streamType, streamType.channelId);
          }
          return tmp;
        });
        const arr2 = callback5();
      } else {
        found = [];
      }
      return found;
    }
  };
  items[18] = {
    key: "getAllApplicationStreamsForChannel",
    value(arg0) {
      const ApplicationStreamingStore = arg0;
      if (callback(closure_2[23])(closure_17)) {
        let found = callback5().filter((channelId) => {
          let tmp = null != channelId;
          if (tmp) {
            tmp = channelId.channelId === channelId;
          }
          if (tmp) {
            tmp = callback(channelId.streamType, channelId.channelId);
          }
          return tmp;
        });
        const arr2 = callback5();
      } else {
        found = [];
      }
      return found;
    }
  };
  items[19] = {
    key: "getViewerIds",
    value(currentUserActiveStream) {
      if (callback(closure_2[23])(closure_17)) {
        let encodeStreamKeyResult = currentUserActiveStream;
        if ("string" !== typeof currentUserActiveStream) {
          encodeStreamKeyResult = ApplicationStreamingStore(closure_2[17]).encodeStreamKey(currentUserActiveStream);
          const obj = ApplicationStreamingStore(closure_2[17]);
        }
        let tmp5 = null;
        if (null != encodeStreamKeyResult) {
          tmp5 = closure_5[encodeStreamKeyResult];
        }
        return null != tmp5 ? tmp5.viewerIds : [];
      } else {
        return [];
      }
    }
  };
  items[20] = {
    key: "getCurrentAppIntent",
    value() {
      return closure_30;
    }
  };
  items[21] = {
    key: "getStreamingState",
    value() {
      const obj = {};
      if (callback(closure_2[23])(closure_17)) {
        const _Array = Array;
        obj.activeStreams = Array.from(closure_3.entries());
        obj.streamsByUserAndGuild = closure_4;
        obj.rtcStreams = closure_5;
        obj.streamerActiveStreamMetadatas = closure_6;
        let tmp = obj;
      } else {
        obj.activeStreams = [];
        obj.streamsByUserAndGuild = {};
        obj.rtcStreams = {};
        obj.streamerActiveStreamMetadatas = {};
        tmp = obj;
      }
      return tmp;
    }
  };
  return callback(ApplicationStreamingStore, items);
}(importDefault(dependencyMap[24]).PersistedStore);
tmp4.displayName = "ApplicationStreamingStore";
tmp4.persistKey = "ApplicationStreamingStore";
tmp4 = new tmp4(importDefault(dependencyMap[25]), {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource(arg0) {
    let errorCode;
    let settings;
    ({ settings, errorCode } = arg0);
    let desktopSettings;
    if (null != settings) {
      desktopSettings = settings.desktopSettings;
    }
    if (null == desktopSettings) {
      let cameraSettings;
      if (null != settings) {
        cameraSettings = settings.cameraSettings;
      }
      if (null == cameraSettings) {
        if (null == errorCode) {
          return false;
        } else {
          let flag2 = false;
          let flag = false;
          const keys = Object.keys();
          if (keys !== undefined) {
            flag = flag2;
            while (keys[tmp] !== undefined) {
              let tmp14 = tmp5;
              let tmp15 = store;
              let value = store.get(tmp5);
              if (null == value) {
                continue;
              } else {
                let tmp6 = store;
                let obj = {};
                let tmp7 = obj;
                let tmp8 = value;
                let merged = Object.assign(value);
                let tmp10 = constants;
                obj["state"] = constants.FAILED;
                obj["endReason"] = tmp2;
                obj["errorCode"] = errorCode;
                let result = store.set(tmp5, obj);
                flag2 = true;
                // continue
              }
              continue;
            }
          }
          return flag;
        }
      }
    }
    return false;
  },
  NATIVE_SCREEN_SHARE_PICKER_UPDATE: function handleNativePickerUpdate(content) {
    content = content.content;
    if (null == content) {
      return false;
    } else {
      let iter4 = _createForOfIteratorHelperLoose(content.applications);
      const iter6 = iter4();
      let iter2 = iter6;
      if (iter6.done) {
        const tmp5 = _createForOfIteratorHelperLoose(content.windows);
        const iter3 = tmp5();
        iter4 = iter3;
        if (!iter3.done) {
          while (true) {
            let value = iter4.value;
            if (null == value.owningApplication) {
              let iter5 = tmp5();
              iter4 = iter5;
              if (iter5.done) {
                break;
              }
            } else {
              let tmp6 = store2;
              let gameForPID = store2.getGameForPID(value.owningApplication.id);
              let gameForPID1 = gameForPID;
              if (null != gameForPID) {
                break;
              }
            }
            break;
          }
        }
      } else {
        gameForPID1 = store2.getGameForPID(iter2.value.id);
        while (null == gameForPID1) {
          let iter = iter4();
          iter2 = iter;
          break;
        }
      }
      let id = gameForPID1;
      let pid;
      if (null != gameForPID1) {
        pid = gameForPID1.pid;
      }
      let closure_31 = pid;
      if (tmp) {
        const tmp11 = importDefault(dependencyMap[19])(content);
        let obj = { pid: closure_31 };
        id = undefined;
        if (null != id) {
          id = id.id;
        }
        obj.id = id;
        if (null != tmp11) {
          obj.sourceName = tmp11;
        }
        let flag2 = false;
        let flag3 = false;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag3 = flag2;
          while (keys[iter4] !== undefined) {
            let tmp25 = tmp16;
            let tmp26 = closure_6;
            let tmp27 = closure_6[tmp16];
            let startsWithResult = null != tmp27;
            let obj2 = tmp27;
            if (startsWithResult) {
              let sourceId = tmp27.sourceId;
              startsWithResult = null != sourceId;
              obj2 = sourceId;
            }
            if (startsWithResult) {
              startsWithResult = obj2.startsWith("prepicked:");
            }
            if (!startsWithResult) {
              continue;
            } else {
              let tmp18 = closure_6;
              obj = {};
              let tmp19 = obj;
              let merged = Object.assign(closure_6[tmp16]);
              let tmp21 = obj;
              let tmp22 = obj;
              let merged1 = Object.assign(obj);
              closure_6[tmp16] = obj;
              flag2 = true;
              // continue
            }
            continue;
          }
        }
        return flag3;
      } else {
        return false;
      }
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(applicationStreamState) {
    applicationStreamState = applicationStreamState.applicationStreamState;
    const streamsByUserAndGuild = applicationStreamState.streamsByUserAndGuild;
    const map = new Map(applicationStreamState.activeStreams);
    ({ rtcStreams: closure_5, streamerActiveStreamMetadatas: closure_6 } = applicationStreamState);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, selfStream) => {
      let channelId;
      let guildId;
      let sessionId;
      let userId;
      ({ userId, guildId, channelId, sessionId } = selfStream);
      if (selfStream.selfStream) {
        if (null != channelId) {
          const obj = {};
          if (null != guildId) {
            let CALL = constants.GUILD;
          } else {
            CALL = constants.CALL;
          }
          obj.streamType = CALL;
          obj.ownerId = userId;
          obj.guildId = guildId;
          obj.channelId = channelId;
          obj.discoverable = tmp;
          if (null == closure_4[obj.ownerId]) {
            closure_4[obj.ownerId] = {};
          }
          let guildId2 = obj.guildId;
          if (null == guildId2) {
            guildId2 = closure_25;
          }
          closure_4[obj.ownerId][guildId2] = obj;
          return true;
        }
      }
      const id = store.getId();
      if (userId === id) {
        if (sessionId !== store.getSessionId()) {
          let tmp6 = arg0;
        }
        return tmp6;
      }
      let tmp7 = guildId;
      if (null == guildId) {
        tmp7 = closure_25;
      }
      let tmp9;
      if (null != closure_4[userId]) {
        tmp9 = tmp8[tmp7];
      }
      let flag = null != tmp9;
      if (flag) {
        delete r8[r9];
        flag = true;
      }
      if (!flag) {
        flag = arg0;
      }
      tmp6 = flag;
    }, false);
  },
  STREAM_WATCH: function handleStreamWatch(streamKey) {
    streamKey = streamKey.streamKey;
    let obj = arg1(dependencyMap[17]);
    const decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
    store.delete(streamKey);
    obj = {};
    const merged = Object.assign(decodeStreamKeyResult);
    obj["state"] = constants.CONNECTING;
    const result = store.set(streamKey, obj);
    if (decodeStreamKeyResult.ownerId === store3.getId()) {
      closure_29[decodeStreamKeyResult.channelId] = false;
    }
  },
  STREAM_START: function handleStreamStart(arg0) {
    let channelId;
    let guildId;
    let pid;
    let previewDisabled;
    let sourceIcon;
    let sourceId;
    let sourceName;
    let streamType;
    ({ streamType, guildId, channelId, pid, sourceId } = arg0);
    const arg1 = sourceId;
    ({ sourceName, sourceIcon, previewDisabled } = arg0);
    let obj = arg1(dependencyMap[17]);
    obj = { streamType, guildId, channelId, ownerId: store3.getId() };
    const encodeStreamKeyResult = obj.encodeStreamKey(obj);
    let startsWithResult = null != sourceId;
    if (startsWithResult) {
      startsWithResult = sourceId.startsWith("prepicked:");
    }
    if (startsWithResult) {
      startsWithResult = null == pid;
    }
    if (startsWithResult) {
      pid = closure_31;
    }
    if (null != sourceId) {
      if (sourceId.startsWith("prepicked:")) {
        if (null != closure_32) {
          let gameForPID = closure_32;
        }
        let tmp7 = null;
        if (null != gameForPID) {
          tmp7 = gameForPID;
        }
        obj = {};
        let id;
        if (null != tmp7) {
          id = tmp7.id;
        }
        obj.id = id;
        obj.pid = pid;
        obj.sourceName = sourceName;
        obj.previewDisabled = previewDisabled;
        obj.sourceIcon = sourceIcon;
        obj.sourceId = sourceId;
        closure_6[encodeStreamKeyResult] = obj;
        store.delete(encodeStreamKeyResult);
        const obj1 = { streamType, guildId, channelId, ownerId: store3.getId(), state: constants.CONNECTING };
        const result = store.set(encodeStreamKeyResult, obj1);
      }
    }
    if (null != pid) {
      gameForPID = store2.getGameForPID(pid);
    } else {
      gameForPID = null;
      if (null != sourceId) {
        const runningGames = store2.getRunningGames();
        gameForPID = runningGames.find((windowHandle) => callback(closure_2[18])(sourceId, windowHandle.windowHandle));
      }
    }
  },
  STREAM_STOP: function handleStreamStop(streamKey) {
    closure_6[streamKey.streamKey] = null;
  },
  STREAM_CREATE: handleStreamUpdate,
  STREAM_UPDATE: handleStreamUpdate,
  STREAM_TIMED_OUT: function handleStreamTimedOut(streamKey) {
    streamKey = streamKey.streamKey;
    const value = store.get(streamKey);
    if (null == value) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(value);
      obj["state"] = constants.FAILED;
      const result = store.set(streamKey, obj);
    }
  },
  STREAM_DELETE: function handleStreamDelete(unavailable) {
    let reason;
    let streamKey;
    ({ streamKey, reason } = unavailable);
    let arg1;
    delete r4[r2];
    const value = store.get(streamKey);
    if (null == value) {
      return false;
    } else {
      let FAILED = constants.ENDED;
      if (unavailable.unavailable) {
        FAILED = constants.RECONNECTING;
      } else if (reason === constants3.UNAUTHORIZED) {
        FAILED = constants.FAILED;
      } else if (reason === constants3.SAFETY_GUILD_RATE_LIMITED) {
        let obj = arg1(dependencyMap[17]);
        arg1 = obj.decodeStreamKey(streamKey).guildId;
        arg1(dependencyMap[21])(dependencyMap[20], dependencyMap.paths).then((arg0) => {
          arg0.default(guildId);
        });
        FAILED = constants.ENDED;
        const promise = arg1(dependencyMap[21])(dependencyMap[20], dependencyMap.paths);
      } else {
        let tmp4 = value.state === constants.FAILED;
        if (tmp4) {
          tmp4 = reason === constants3.USER_REQUESTED;
        }
        if (tmp4) {
          FAILED = constants.FAILED;
        }
      }
      obj = {};
      const merged = Object.assign(value);
      obj["state"] = FAILED;
      const result = store.set(streamKey, obj);
      let tmp19 = FAILED === constants.ENDED;
      if (tmp19) {
        tmp19 = closure_28 !== streamKey;
      }
      if (tmp19) {
        closeActiveStream(streamKey);
      }
    }
  },
  STREAM_CLOSE: function handleStreamClose(streamKey) {
    closeActiveStream(streamKey.streamKey);
  },
  STREAM_UPDATE_SELF_HIDDEN: function handleUpdateSelfStreamHidden(arg0) {
    let channelId;
    let selfStreamHidden;
    ({ channelId, selfStreamHidden } = arg0);
    let isStreamKeyResult = arg1(dependencyMap[17]).isStreamKey(closure_28);
    if (isStreamKeyResult) {
      isStreamKeyResult = null != closure_28;
      const obj2 = closure_28;
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = obj2.includes(store3.getId());
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = false === closure_29[channelId];
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = true === selfStreamHidden;
    }
    if (isStreamKeyResult) {
      closure_28 = null;
    }
    closure_29[channelId] = selfStreamHidden;
  },
  SET_STREAM_APP_INTENT: function handleStreamSetAppIntent(intent) {
    intent = intent.intent;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(arg0) {
    let state;
    let streamKey;
    ({ streamKey, state } = arg0);
    if (null == streamKey) {
      return false;
    } else {
      const value = store.get(streamKey);
      if (null != value) {
        if (value.state !== constants.ENDED) {
          if (value.state === constants.FAILED) {
            if (value.ownerId === store3.getId()) {
              return false;
            }
          }
          let ACTIVE = value.state;
          if (constants2.DISCONNECTED === state) {
            ACTIVE = constants.RECONNECTING;
          } else if (constants2.RTC_CONNECTED === state) {
            ACTIVE = constants.ACTIVE;
          }
          if (ACTIVE === value.state) {
            return false;
          } else {
            const obj = {};
            const merged = Object.assign(value);
            obj["state"] = ACTIVE;
            const result = store.set(streamKey, obj);
          }
        }
      }
      return false;
    }
  },
  CHANNEL_RTC_SELECT_PARTICIPANT: function handleStreamCloseAll(id) {
    id = id.id;
    let closure_28 = id;
    const item = Array.from(store.values()).forEach((state) => {
      let tmp = callback(closure_2[17]).encodeStreamKey(state) !== id;
      if (tmp) {
        tmp = state.state === constants.ENDED;
      }
      if (tmp) {
        callback2(callback(closure_2[17]).encodeStreamKey(state));
        const obj2 = callback(closure_2[17]);
      }
    });
    let isStreamKeyResult = null != id;
    if (isStreamKeyResult) {
      isStreamKeyResult = arg1(dependencyMap[17]).isStreamKey(id);
      const obj = arg1(dependencyMap[17]);
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = id.includes(store3.getId());
    }
    if (isStreamKeyResult) {
      closure_29[id.channelId] = false;
    }
  },
  CONNECTION_OPEN: reset,
  CONNECTION_CLOSED: reset,
  LOGOUT: reset
});
const obj = {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource(arg0) {
    let errorCode;
    let settings;
    ({ settings, errorCode } = arg0);
    let desktopSettings;
    if (null != settings) {
      desktopSettings = settings.desktopSettings;
    }
    if (null == desktopSettings) {
      let cameraSettings;
      if (null != settings) {
        cameraSettings = settings.cameraSettings;
      }
      if (null == cameraSettings) {
        if (null == errorCode) {
          return false;
        } else {
          let flag2 = false;
          let flag = false;
          const keys = Object.keys();
          if (keys !== undefined) {
            flag = flag2;
            while (keys[tmp] !== undefined) {
              let tmp14 = tmp5;
              let tmp15 = store;
              let value = store.get(tmp5);
              if (null == value) {
                continue;
              } else {
                let tmp6 = store;
                let obj = {};
                let tmp7 = obj;
                let tmp8 = value;
                let merged = Object.assign(value);
                let tmp10 = constants;
                obj["state"] = constants.FAILED;
                obj["endReason"] = tmp2;
                obj["errorCode"] = errorCode;
                let result = store.set(tmp5, obj);
                flag2 = true;
                // continue
              }
              continue;
            }
          }
          return flag;
        }
      }
    }
    return false;
  },
  NATIVE_SCREEN_SHARE_PICKER_UPDATE: function handleNativePickerUpdate(content) {
    content = content.content;
    if (null == content) {
      return false;
    } else {
      let iter4 = _createForOfIteratorHelperLoose(content.applications);
      const iter6 = iter4();
      let iter2 = iter6;
      if (iter6.done) {
        const tmp5 = _createForOfIteratorHelperLoose(content.windows);
        const iter3 = tmp5();
        iter4 = iter3;
        if (!iter3.done) {
          while (true) {
            let value = iter4.value;
            if (null == value.owningApplication) {
              let iter5 = tmp5();
              iter4 = iter5;
              if (iter5.done) {
                break;
              }
            } else {
              let tmp6 = store2;
              let gameForPID = store2.getGameForPID(value.owningApplication.id);
              let gameForPID1 = gameForPID;
              if (null != gameForPID) {
                break;
              }
            }
            break;
          }
        }
      } else {
        gameForPID1 = store2.getGameForPID(iter2.value.id);
        while (null == gameForPID1) {
          let iter = iter4();
          iter2 = iter;
          break;
        }
      }
      let id = gameForPID1;
      let pid;
      if (null != gameForPID1) {
        pid = gameForPID1.pid;
      }
      let closure_31 = pid;
      if (tmp) {
        const tmp11 = importDefault(dependencyMap[19])(content);
        let obj = { pid: closure_31 };
        id = undefined;
        if (null != id) {
          id = id.id;
        }
        obj.id = id;
        if (null != tmp11) {
          obj.sourceName = tmp11;
        }
        let flag2 = false;
        let flag3 = false;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag3 = flag2;
          while (keys[iter4] !== undefined) {
            let tmp25 = tmp16;
            let tmp26 = closure_6;
            let tmp27 = closure_6[tmp16];
            let startsWithResult = null != tmp27;
            let obj2 = tmp27;
            if (startsWithResult) {
              let sourceId = tmp27.sourceId;
              startsWithResult = null != sourceId;
              obj2 = sourceId;
            }
            if (startsWithResult) {
              startsWithResult = obj2.startsWith("prepicked:");
            }
            if (!startsWithResult) {
              continue;
            } else {
              let tmp18 = closure_6;
              obj = {};
              let tmp19 = obj;
              let merged = Object.assign(closure_6[tmp16]);
              let tmp21 = obj;
              let tmp22 = obj;
              let merged1 = Object.assign(obj);
              closure_6[tmp16] = obj;
              flag2 = true;
              // continue
            }
            continue;
          }
        }
        return flag3;
      } else {
        return false;
      }
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(applicationStreamState) {
    applicationStreamState = applicationStreamState.applicationStreamState;
    const streamsByUserAndGuild = applicationStreamState.streamsByUserAndGuild;
    const map = new Map(applicationStreamState.activeStreams);
    ({ rtcStreams: closure_5, streamerActiveStreamMetadatas: closure_6 } = applicationStreamState);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, selfStream) => {
      let channelId;
      let guildId;
      let sessionId;
      let userId;
      ({ userId, guildId, channelId, sessionId } = selfStream);
      if (selfStream.selfStream) {
        if (null != channelId) {
          const obj = {};
          if (null != guildId) {
            let CALL = constants.GUILD;
          } else {
            CALL = constants.CALL;
          }
          obj.streamType = CALL;
          obj.ownerId = userId;
          obj.guildId = guildId;
          obj.channelId = channelId;
          obj.discoverable = tmp;
          if (null == closure_4[obj.ownerId]) {
            closure_4[obj.ownerId] = {};
          }
          let guildId2 = obj.guildId;
          if (null == guildId2) {
            guildId2 = closure_25;
          }
          closure_4[obj.ownerId][guildId2] = obj;
          return true;
        }
      }
      const id = store.getId();
      if (userId === id) {
        if (sessionId !== store.getSessionId()) {
          let tmp6 = arg0;
        }
        return tmp6;
      }
      let tmp7 = guildId;
      if (null == guildId) {
        tmp7 = closure_25;
      }
      let tmp9;
      if (null != closure_4[userId]) {
        tmp9 = tmp8[tmp7];
      }
      let flag = null != tmp9;
      if (flag) {
        delete r8[r9];
        flag = true;
      }
      if (!flag) {
        flag = arg0;
      }
      tmp6 = flag;
    }, false);
  },
  STREAM_WATCH: function handleStreamWatch(streamKey) {
    streamKey = streamKey.streamKey;
    let obj = arg1(dependencyMap[17]);
    const decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
    store.delete(streamKey);
    obj = {};
    const merged = Object.assign(decodeStreamKeyResult);
    obj["state"] = constants.CONNECTING;
    const result = store.set(streamKey, obj);
    if (decodeStreamKeyResult.ownerId === store3.getId()) {
      closure_29[decodeStreamKeyResult.channelId] = false;
    }
  },
  STREAM_START: function handleStreamStart(arg0) {
    let channelId;
    let guildId;
    let pid;
    let previewDisabled;
    let sourceIcon;
    let sourceId;
    let sourceName;
    let streamType;
    ({ streamType, guildId, channelId, pid, sourceId } = arg0);
    const arg1 = sourceId;
    ({ sourceName, sourceIcon, previewDisabled } = arg0);
    let obj = arg1(dependencyMap[17]);
    obj = { streamType, guildId, channelId, ownerId: store3.getId() };
    const encodeStreamKeyResult = obj.encodeStreamKey(obj);
    let startsWithResult = null != sourceId;
    if (startsWithResult) {
      startsWithResult = sourceId.startsWith("prepicked:");
    }
    if (startsWithResult) {
      startsWithResult = null == pid;
    }
    if (startsWithResult) {
      pid = closure_31;
    }
    if (null != sourceId) {
      if (sourceId.startsWith("prepicked:")) {
        if (null != closure_32) {
          let gameForPID = closure_32;
        }
        let tmp7 = null;
        if (null != gameForPID) {
          tmp7 = gameForPID;
        }
        obj = {};
        let id;
        if (null != tmp7) {
          id = tmp7.id;
        }
        obj.id = id;
        obj.pid = pid;
        obj.sourceName = sourceName;
        obj.previewDisabled = previewDisabled;
        obj.sourceIcon = sourceIcon;
        obj.sourceId = sourceId;
        closure_6[encodeStreamKeyResult] = obj;
        store.delete(encodeStreamKeyResult);
        const obj1 = { streamType, guildId, channelId, ownerId: store3.getId(), state: constants.CONNECTING };
        const result = store.set(encodeStreamKeyResult, obj1);
      }
    }
    if (null != pid) {
      gameForPID = store2.getGameForPID(pid);
    } else {
      gameForPID = null;
      if (null != sourceId) {
        const runningGames = store2.getRunningGames();
        gameForPID = runningGames.find((windowHandle) => callback(closure_2[18])(sourceId, windowHandle.windowHandle));
      }
    }
  },
  STREAM_STOP: function handleStreamStop(streamKey) {
    closure_6[streamKey.streamKey] = null;
  },
  STREAM_CREATE: handleStreamUpdate,
  STREAM_UPDATE: handleStreamUpdate,
  STREAM_TIMED_OUT: function handleStreamTimedOut(streamKey) {
    streamKey = streamKey.streamKey;
    const value = store.get(streamKey);
    if (null == value) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(value);
      obj["state"] = constants.FAILED;
      const result = store.set(streamKey, obj);
    }
  },
  STREAM_DELETE: function handleStreamDelete(unavailable) {
    let reason;
    let streamKey;
    ({ streamKey, reason } = unavailable);
    let arg1;
    delete r4[r2];
    const value = store.get(streamKey);
    if (null == value) {
      return false;
    } else {
      let FAILED = constants.ENDED;
      if (unavailable.unavailable) {
        FAILED = constants.RECONNECTING;
      } else if (reason === constants3.UNAUTHORIZED) {
        FAILED = constants.FAILED;
      } else if (reason === constants3.SAFETY_GUILD_RATE_LIMITED) {
        let obj = arg1(dependencyMap[17]);
        arg1 = obj.decodeStreamKey(streamKey).guildId;
        arg1(dependencyMap[21])(dependencyMap[20], dependencyMap.paths).then((arg0) => {
          arg0.default(guildId);
        });
        FAILED = constants.ENDED;
        const promise = arg1(dependencyMap[21])(dependencyMap[20], dependencyMap.paths);
      } else {
        let tmp4 = value.state === constants.FAILED;
        if (tmp4) {
          tmp4 = reason === constants3.USER_REQUESTED;
        }
        if (tmp4) {
          FAILED = constants.FAILED;
        }
      }
      obj = {};
      const merged = Object.assign(value);
      obj["state"] = FAILED;
      const result = store.set(streamKey, obj);
      let tmp19 = FAILED === constants.ENDED;
      if (tmp19) {
        tmp19 = closure_28 !== streamKey;
      }
      if (tmp19) {
        closeActiveStream(streamKey);
      }
    }
  },
  STREAM_CLOSE: function handleStreamClose(streamKey) {
    closeActiveStream(streamKey.streamKey);
  },
  STREAM_UPDATE_SELF_HIDDEN: function handleUpdateSelfStreamHidden(arg0) {
    let channelId;
    let selfStreamHidden;
    ({ channelId, selfStreamHidden } = arg0);
    let isStreamKeyResult = arg1(dependencyMap[17]).isStreamKey(closure_28);
    if (isStreamKeyResult) {
      isStreamKeyResult = null != closure_28;
      const obj2 = closure_28;
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = obj2.includes(store3.getId());
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = false === closure_29[channelId];
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = true === selfStreamHidden;
    }
    if (isStreamKeyResult) {
      closure_28 = null;
    }
    closure_29[channelId] = selfStreamHidden;
  },
  SET_STREAM_APP_INTENT: function handleStreamSetAppIntent(intent) {
    intent = intent.intent;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(arg0) {
    let state;
    let streamKey;
    ({ streamKey, state } = arg0);
    if (null == streamKey) {
      return false;
    } else {
      const value = store.get(streamKey);
      if (null != value) {
        if (value.state !== constants.ENDED) {
          if (value.state === constants.FAILED) {
            if (value.ownerId === store3.getId()) {
              return false;
            }
          }
          let ACTIVE = value.state;
          if (constants2.DISCONNECTED === state) {
            ACTIVE = constants.RECONNECTING;
          } else if (constants2.RTC_CONNECTED === state) {
            ACTIVE = constants.ACTIVE;
          }
          if (ACTIVE === value.state) {
            return false;
          } else {
            const obj = {};
            const merged = Object.assign(value);
            obj["state"] = ACTIVE;
            const result = store.set(streamKey, obj);
          }
        }
      }
      return false;
    }
  },
  CHANNEL_RTC_SELECT_PARTICIPANT: function handleStreamCloseAll(id) {
    id = id.id;
    let closure_28 = id;
    const item = Array.from(store.values()).forEach((state) => {
      let tmp = callback(closure_2[17]).encodeStreamKey(state) !== id;
      if (tmp) {
        tmp = state.state === constants.ENDED;
      }
      if (tmp) {
        callback2(callback(closure_2[17]).encodeStreamKey(state));
        const obj2 = callback(closure_2[17]);
      }
    });
    let isStreamKeyResult = null != id;
    if (isStreamKeyResult) {
      isStreamKeyResult = arg1(dependencyMap[17]).isStreamKey(id);
      const obj = arg1(dependencyMap[17]);
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = id.includes(store3.getId());
    }
    if (isStreamKeyResult) {
      closure_29[id.channelId] = false;
    }
  },
  CONNECTION_OPEN: reset,
  CONNECTION_CLOSED: reset,
  LOGOUT: reset
};
const tmp2 = arg1(dependencyMap[15]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("stores/ApplicationStreamingStore.tsx");

export default tmp4;
