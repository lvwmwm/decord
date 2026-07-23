// Module ID: 4149
// Function ID: 34947
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4144, 4150, 1194, 1348, 1838, 4177, 3758, 4202, 1906, 4146, 653, 4195, 664, 4194, 12838, 12839, 12840, 1934, 6967, 12730, 566, 686, 2]

// Module 4149 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "ME";
import set from "set";
import isStreamKey from "isStreamKey";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_isNativeReflectConstruct";
import ME from "ME";
import { StreamTypes } from "StreamIssueReportReasons";

let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
  const map1 = new Map();
}
function closeActiveStream(streamKey) {
  store.delete(streamKey);
}
function getAllStreams() {
  const items = [];
  for (const key10003 in closure_4) {
    let tmp3 = key10003;
    let tmp4 = dependencyMap;
    let tmp5 = dependencyMap[key10003];
    let tmp6 = tmp5;
    let keys = Object.keys();
    if (keys === undefined) {
      continue;
    } else {
      let tmp2 = keys[tmp];
      while (tmp2 !== undefined) {
        let tmp8 = tmp2;
        let tmp9 = dependencyMap;
        let arr = items.push(dependencyMap[key10003][tmp2]);
        continue;
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
  ({ region, viewerIds, paused } = streamKey);
  const value = store5.get(streamKey);
  let tmp2 = null == value;
  if (!tmp2) {
    const _Date = Date;
    tmp2 = Date.now() - value < closure_32;
  }
  if (!tmp2) {
    store5.delete(streamKey);
  }
  const obj = {};
  const merged = Object.assign(require(4194) /* isStreamKey */.decodeStreamKey(streamKey));
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
      const obj = require(6967) /* _createForOfIteratorHelperLoose */;
      first = obj.canWatchStream(basicChannel, closure_21, _createForOfIteratorHelperLoose, closure_18, closure_12)[0];
    }
    return first;
  }
}
({ ApplicationStreamStates: closure_22, RTCConnectionStates: closure_23, ApplicationStreamDeleteReasons: closure_24, NULL_STRING_GUILD_ID: closure_25, BasicPermissions: closure_26 } = ME);
let c29 = null;
let closure_30 = {};
let c31 = null;
let closure_32 = 10 * require("set").Millis.SECOND;
reset();
let c33;
let c34;
let tmp4 = ((PersistedStore) => {
  class ApplicationStreamingStore {
    constructor() {
      self = this;
      tmp = outer1_7(this, ApplicationStreamingStore);
      obj = outer1_10(ApplicationStreamingStore);
      tmp2 = outer1_9;
      if (outer1_35()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_10;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_10(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ApplicationStreamingStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(selfStreamParticipantsHidden) {
      const items = [outer1_18];
      this.syncWith(items, () => true);
      this.waitFor(outer1_14, outer1_15, outer1_18, outer1_19, outer1_13, outer1_20);
      let prop;
      if (null != selfStreamParticipantsHidden) {
        prop = selfStreamParticipantsHidden.selfStreamParticipantsHidden;
      }
      if (undefined !== prop) {
        let prop1;
        if (null != selfStreamParticipantsHidden) {
          prop1 = selfStreamParticipantsHidden.selfStreamParticipantsHidden;
        }
        const merged = Object.assign(outer1_30, prop1);
        const tmp5 = outer1_30;
      }
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return { selfStreamParticipantsHidden: outer1_30 };
    }
  };
  items[1] = obj;
  obj = {
    key: "isSelfStreamHidden",
    value(arg0) {
      return null != outer1_30[arg0] && outer1_30[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastActiveStream",
    value() {
      let tmp = null;
      if (outer1_1(outer1_2[24])(outer1_17)) {
        const _Array = Array;
        let arr = Array.from(outer1_3.values());
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
      if (outer1_1(outer1_2[24])(outer1_17)) {
        const _Array = Array;
        let items = Array.from(outer1_3.values());
      } else {
        items = [];
      }
      return items;
    }
  };
  items[5] = {
    key: "getAllActiveStreamsForChannel",
    value(arg0) {
      let closure_0 = arg0;
      if (outer1_1(outer1_2[24])(outer1_17)) {
        const _Array = Array;
        let found = Array.from(outer1_3.values()).filter((channelId) => channelId.channelId === closure_0);
        const arr = Array.from(outer1_3.values());
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
      if (outer1_1(outer1_2[24])(outer1_17)) {
        const value = outer1_3.get(arg0);
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
      if (outer1_1(outer1_2[24])(outer1_17)) {
        if (null != currentUserActiveStream) {
          const activeStreamForStreamKey = self.getActiveStreamForStreamKey(ApplicationStreamingStore(outer1_2[18]).encodeStreamKey(currentUserActiveStream));
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
      const channel = outer1_15.getChannel(outer1_20.getVoiceChannelId());
      let activeStreamForUser = null;
      if (null != channel) {
        const id = outer1_14.getId();
        activeStreamForUser = self.getActiveStreamForUser(id, channel.getGuildId());
      }
      return activeStreamForUser;
    }
  };
  items[9] = {
    key: "isStreamMarkedFull",
    value(arg0) {
      return outer1_28.has(arg0);
    }
  };
  items[10] = {
    key: "getActiveStreamForUser",
    value(arg0, arg1) {
      const self = this;
      let closure_0 = arg0;
      const streamForUser = this.getStreamForUser(arg0, arg1);
      if (null != streamForUser) {
        let activeStreamForApplicationStream = self.getActiveStreamForApplicationStream(streamForUser);
      } else {
        const allActiveStreams = self.getAllActiveStreams();
        const found = allActiveStreams.find((ownerId) => ownerId.ownerId === closure_0);
        activeStreamForApplicationStream = null;
        if (null != found) {
          activeStreamForApplicationStream = found;
        }
      }
      return activeStreamForApplicationStream;
    }
  };
  items[11] = {
    key: "getStreamerActiveStreamMetadata",
    value() {
      const self = this;
      const channel = outer1_15.getChannel(outer1_20.getVoiceChannelId());
      if (null == channel) {
        return null;
      } else {
        const id = outer1_14.getId();
        const activeStreamForUser = self.getActiveStreamForUser(id, channel.getGuildId());
        let tmp4 = null;
        if (null != activeStreamForUser) {
          const obj2 = ApplicationStreamingStore(outer1_2[18]);
          const tmp8 = outer1_6[obj2.encodeStreamKey(obj2, activeStreamForUser)];
          let tmp9 = null;
          if (null != tmp8) {
            tmp9 = tmp8;
          }
          tmp4 = tmp9;
        }
        return tmp4;
      }
    }
  };
  items[12] = {
    key: "getStreamerActiveStreamMetadataForStream",
    value(arg0) {
      let tmp2 = null;
      if (null != outer1_6[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[13] = {
    key: "getIsActiveStreamPreviewDisabled",
    value(arg0) {
      let previewDisabled;
      if (null != outer1_6[arg0]) {
        previewDisabled = tmp.previewDisabled;
      }
      return null != previewDisabled && previewDisabled;
    }
  };
  items[14] = {
    key: "getAnyStreamForUser",
    value(arg0) {
      if (outer1_1(outer1_2[24])(outer1_17)) {
        let tmp4 = null;
        if (null != outer1_4[arg0]) {
          const _Object = Object;
          const values = Object.values(tmp3);
          const found = values.find((arg0) => outer2_41(arg0));
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
    key: "getAnyDiscoverableStreamForUser",
    value(arg0) {
      if (outer1_1(outer1_2[24])(outer1_17)) {
        let tmp4 = null;
        if (null != outer1_4[arg0]) {
          const _Object = Object;
          const values = Object.values(tmp3);
          const found = values.find((discoverable) => {
            let tmp = outer2_41(discoverable);
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
  items[16] = {
    key: "getStreamForUser",
    value(arg0, arg1) {
      let tmp = arg1;
      if (outer1_1(outer1_2[24])(outer1_17)) {
        let tmp5;
        if (null != outer1_4[arg0]) {
          if (null == tmp) {
            tmp = outer1_25;
          }
          tmp5 = tmp4[tmp];
        }
        let tmp6 = null;
        if (null != tmp5) {
          let tmp8 = null;
          if (outer1_41(tmp5)) {
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
  items[17] = {
    key: "getRTCStream",
    value(arg0) {
      let tmp = null;
      if (outer1_1(outer1_2[24])(outer1_17)) {
        tmp = null;
        if (null != outer1_5[arg0]) {
          tmp = tmp4;
        }
      }
      return tmp;
    }
  };
  items[18] = {
    key: "getAllApplicationStreams",
    value() {
      if (outer1_1(outer1_2[24])(outer1_17)) {
        let found = outer1_39().filter((streamType) => {
          let tmp = null != streamType;
          if (tmp) {
            tmp = outer2_40(streamType.streamType, streamType.channelId);
          }
          return tmp;
        });
        const arr2 = outer1_39();
      } else {
        found = [];
      }
      return found;
    }
  };
  items[19] = {
    key: "getAllApplicationStreamsForChannel",
    value(arg0) {
      let closure_0 = arg0;
      if (outer1_1(outer1_2[24])(outer1_17)) {
        let found = outer1_39().filter((channelId) => {
          let tmp = null != channelId;
          if (tmp) {
            tmp = channelId.channelId === closure_0;
          }
          if (tmp) {
            tmp = outer2_40(channelId.streamType, channelId.channelId);
          }
          return tmp;
        });
        const arr2 = outer1_39();
      } else {
        found = [];
      }
      return found;
    }
  };
  items[20] = {
    key: "getViewerIds",
    value(currentUserActiveStream) {
      if (outer1_1(outer1_2[24])(outer1_17)) {
        let encodeStreamKeyResult = currentUserActiveStream;
        if ("string" !== typeof currentUserActiveStream) {
          encodeStreamKeyResult = ApplicationStreamingStore(outer1_2[18]).encodeStreamKey(currentUserActiveStream);
          const obj = ApplicationStreamingStore(outer1_2[18]);
        }
        let tmp5 = null;
        if (null != encodeStreamKeyResult) {
          tmp5 = outer1_5[encodeStreamKeyResult];
        }
        return null != tmp5 ? tmp5.viewerIds : [];
      } else {
        return [];
      }
    }
  };
  items[21] = {
    key: "getCurrentAppIntent",
    value() {
      return outer1_31;
    }
  };
  items[22] = {
    key: "getStreamingState",
    value() {
      const obj = {};
      if (outer1_1(outer1_2[24])(outer1_17)) {
        const _Array = Array;
        obj.activeStreams = Array.from(outer1_3.entries());
        obj.streamsByUserAndGuild = outer1_4;
        obj.rtcStreams = outer1_5;
        obj.streamerActiveStreamMetadatas = outer1_6;
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
})(require("initialize").PersistedStore);
tmp4.displayName = "ApplicationStreamingStore";
tmp4.persistKey = "ApplicationStreamingStore";
tmp4 = new tmp4(require("dispatcher"), {
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
                continue;
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
      let pid;
      if (null != gameForPID1) {
        pid = gameForPID1.pid;
      }
      if (tmp) {
        const tmp11 = importDefault(12839)(content);
        let obj = { pid };
        let id;
        if (null != gameForPID1) {
          id = gameForPID1.id;
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
            let tmp26 = dependencyMap2;
            let tmp27 = dependencyMap2[tmp16];
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
              let tmp18 = dependencyMap2;
              obj = {};
              let tmp19 = obj;
              let merged = Object.assign(dependencyMap2[tmp16]);
              let tmp21 = obj;
              let tmp22 = obj;
              let merged1 = Object.assign(obj);
              dependencyMap2[tmp16] = obj;
              flag2 = true;
              continue;
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
    let closure_5;
    let closure_6;
    applicationStreamState = applicationStreamState.applicationStreamState;
    const streamsByUserAndGuild = applicationStreamState.streamsByUserAndGuild;
    const map = new Map(applicationStreamState.activeStreams);
    ({ rtcStreams: closure_5, streamerActiveStreamMetadatas: closure_6 } = applicationStreamState);
    const map1 = new Map();
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
            let CALL = outer1_27.GUILD;
          } else {
            CALL = outer1_27.CALL;
          }
          obj.streamType = CALL;
          obj.ownerId = userId;
          obj.guildId = guildId;
          obj.channelId = channelId;
          obj.discoverable = tmp3;
          if (null == outer1_4[obj.ownerId]) {
            outer1_4[obj.ownerId] = {};
          }
          let guildId2 = obj.guildId;
          if (null == guildId2) {
            guildId2 = outer1_25;
          }
          outer1_4[obj.ownerId][guildId2] = obj;
          return true;
        }
      }
      const id = outer1_14.getId();
      if (userId === id) {
        if (sessionId !== outer1_14.getSessionId()) {
          if (null != outer1_19.getChannelId()) {
            return arg0;
          }
        }
      }
      let tmp9 = guildId;
      if (null == guildId) {
        tmp9 = outer1_25;
      }
      let tmp11;
      if (null != outer1_4[userId]) {
        tmp11 = tmp10[tmp9];
      }
      let flag = null != tmp11;
      if (flag) {
        delete tmp[tmp2];
        flag = true;
      }
      if (!flag) {
        flag = tmp8;
      }
      if (!flag) {
        flag = arg0;
      }
      return flag;
    }, false);
  },
  STREAM_WATCH: function handleStreamWatch(streamKey) {
    streamKey = streamKey.streamKey;
    let obj = require(4194) /* isStreamKey */;
    const decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
    store.delete(streamKey);
    obj = {};
    const merged = Object.assign(decodeStreamKeyResult);
    obj["state"] = constants.CONNECTING;
    const result = store.set(streamKey, obj);
    if (decodeStreamKeyResult.ownerId === store3.getId()) {
      closure_30[decodeStreamKeyResult.channelId] = false;
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
    ({ sourceName, sourceIcon, previewDisabled } = arg0);
    let obj = sourceId(4194);
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
      pid = c33;
    }
    if (null != sourceId) {
      if (sourceId.startsWith("prepicked:")) {
        if (null != c34) {
          let gameForPID = c34;
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
        gameForPID = runningGames.find((windowHandle) => outer1_1(outer1_2[19])(sourceId, windowHandle.windowHandle));
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
    let guildId;
    delete tmp[tmp2];
    let flag = false;
    if (reason === constants3.STREAM_FULL) {
      flag = !store5.has(streamKey);
      const _Date = Date;
      const result = store5.set(streamKey, Date.now());
    }
    const value = store.get(streamKey);
    if (null == value) {
      return flag;
    } else {
      let FAILED = constants.ENDED;
      if (unavailable.unavailable) {
        FAILED = constants.RECONNECTING;
      } else if (reason === constants3.UNAUTHORIZED) {
        FAILED = constants.FAILED;
      } else if (reason === constants3.SAFETY_GUILD_RATE_LIMITED) {
        let obj = guildId(4194);
        guildId = obj.decodeStreamKey(streamKey).guildId;
        guildId(1934)(12840, dependencyMap.paths).then((arg0) => {
          arg0.default(guildId);
        });
        FAILED = constants.ENDED;
        const promise = guildId(1934)(12840, dependencyMap.paths);
      } else {
        let tmp10 = value.state === constants.FAILED;
        if (tmp10) {
          tmp10 = reason === constants3.USER_REQUESTED;
        }
        if (tmp10) {
          FAILED = constants.FAILED;
        }
      }
      obj = {};
      const merged = Object.assign(value);
      obj["state"] = FAILED;
      const result1 = store.set(streamKey, obj);
      let tmp25 = FAILED === constants.ENDED;
      if (tmp25) {
        tmp25 = c29 !== streamKey;
      }
      if (tmp25) {
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
    let isStreamKeyResult = require(4194) /* isStreamKey */.isStreamKey(c29);
    if (isStreamKeyResult) {
      isStreamKeyResult = null != c29;
      const obj2 = c29;
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = obj2.includes(store3.getId());
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = false === table[channelId];
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = true === selfStreamHidden;
    }
    if (isStreamKeyResult) {
      c29 = null;
    }
    table[channelId] = selfStreamHidden;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelectForFullStreams(channelId) {
    channelId = channelId.channelId;
    let c1;
    if (null == channelId) {
      return false;
    } else {
      c1 = false;
      const item = store5.forEach((arg0, streamKey) => {
        if (obj.decodeStreamKey(streamKey).channelId !== channelId) {
          c1 = outer1_28.delete(streamKey) || c1;
          const tmp2 = outer1_28.delete(streamKey) || c1;
        }
      });
      return c1;
    }
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
    const item = Array.from(store.values()).forEach((state) => {
      let tmp = outer1_0(outer1_2[18]).encodeStreamKey(state) !== id;
      if (tmp) {
        tmp = state.state === outer1_22.ENDED;
      }
      if (tmp) {
        outer1_38(outer1_0(outer1_2[18]).encodeStreamKey(state));
        const obj2 = outer1_0(outer1_2[18]);
      }
    });
    let isStreamKeyResult = null != id;
    if (isStreamKeyResult) {
      isStreamKeyResult = require(4194) /* isStreamKey */.isStreamKey(id);
      const obj = require(4194) /* isStreamKey */;
    }
    if (isStreamKeyResult) {
      isStreamKeyResult = id.includes(store3.getId());
    }
    if (isStreamKeyResult) {
      closure_30[id.channelId] = false;
    }
  },
  CONNECTION_OPEN: reset,
  CONNECTION_CLOSED: reset,
  LOGOUT: reset
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/ApplicationStreamingStore.tsx");

export default tmp4;
