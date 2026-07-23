// Module ID: 4215
// Function ID: 36638
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 4216, 4194, 566, 686, 2]

// Module 4215 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import isStreamKey from "isStreamKey";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";

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
function isStatsOutbound(found) {
  return "packetsSent" in found;
}
function updateAveragedStatsHelper(minVersion, arg1, arg2, arr, arr2) {
  let tmp = arg2;
  const found = arr.find((type) => "video" === type.type);
  if (null == arg2) {
    const obj = { packetsSentOrReceived: 0, packetsLost: 0, packetLossRate: 0, frameRate: 0, resolution: 0, entropy: 0, numDatapoints: 0, frameRateAggregated: 0, resolutionAggregated: 0, entropyAggregated: 0, minVersion };
    tmp = obj;
  }
  if (null == found) {
    return tmp;
  } else {
    if (isStatsOutbound(found)) {
      const packetsSent = found.packetsSent;
      let num2 = 0;
      if (null != packetsSent) {
        num2 = packetsSent;
      }
      let num = num2;
    } else {
      const packetsReceived = found.packetsReceived;
      num = 0;
      if (null != packetsReceived) {
        num = packetsReceived;
      }
    }
    const packetsLost = found.packetsLost;
    if (isStatsOutbound(found)) {
      let num4 = 0;
      if (tmp5) {
        num4 = packetsLost;
      }
      let num3 = num4;
    } else {
      num3 = 0;
      if (tmp5) {
        num3 = packetsLost;
      }
    }
    if (isStatsOutbound(found)) {
      const frameRateEncode = found.frameRateEncode;
      let num6 = 0;
      if (null != frameRateEncode) {
        num6 = frameRateEncode;
      }
      let num5 = num6;
    } else {
      const frameRateDecode = found.frameRateDecode;
      num5 = 0;
      if (null != frameRateDecode) {
        num5 = frameRateDecode;
      }
    }
    const resolution = found.resolution;
    let height;
    if (null != resolution) {
      height = resolution.height;
    }
    let num7 = 0;
    if (null != height) {
      num7 = height;
    }
    let num8 = 0;
    if (isStatsOutbound(found)) {
      const videoEntropy = found.videoEntropy;
      num8 = 0;
      if (null != videoEntropy) {
        num8 = videoEntropy;
      }
    }
    tmp.numDatapoints = tmp.numDatapoints + 1;
    tmp.frameRateAggregated = tmp.frameRateAggregated + num5;
    tmp.resolutionAggregated = tmp.resolutionAggregated + num7;
    tmp.entropyAggregated = tmp.entropyAggregated + num8;
    let found1;
    if (null != arr2) {
      found1 = arr2.find((type) => "video" === type.type);
    }
    if (null != found1) {
      if (arg1 >= tmp.minVersion) {
        tmp.numDatapoints = tmp.numDatapoints - 1;
        if (isStatsOutbound(found1)) {
          const packetsSent2 = found1.packetsSent;
          let num11 = 0;
          if (null != packetsSent2) {
            num11 = packetsSent2;
          }
          let num10 = num11;
        } else {
          const packetsReceived2 = found1.packetsReceived;
          num10 = 0;
          if (null != packetsReceived2) {
            num10 = packetsReceived2;
          }
        }
        const packetsLost2 = found1.packetsLost;
        if (isStatsOutbound(found1)) {
          let num13 = 0;
          if (tmp13) {
            num13 = packetsLost2;
          }
          let num12 = num13;
        } else {
          num12 = 0;
          if (tmp13) {
            num12 = packetsLost2;
          }
        }
        if (isStatsOutbound(found1)) {
          const frameRateEncode2 = found1.frameRateEncode;
          let num15 = 0;
          if (null != frameRateEncode2) {
            num15 = frameRateEncode2;
          }
          let num14 = num15;
        } else {
          const frameRateDecode2 = found1.frameRateDecode;
          num14 = 0;
          if (null != frameRateDecode2) {
            num14 = frameRateDecode2;
          }
        }
        let num16 = 0;
        if (isStatsOutbound(found1)) {
          const videoEntropy2 = found1.videoEntropy;
          num16 = 0;
          if (null != videoEntropy2) {
            num16 = videoEntropy2;
          }
        }
        const resolution2 = found1.resolution;
        let height1;
        if (null != resolution2) {
          height1 = resolution2.height;
        }
        let num17 = 0;
        if (null != height1) {
          num17 = height1;
        }
        tmp.frameRateAggregated = tmp.frameRateAggregated - num14;
        tmp.resolutionAggregated = tmp.resolutionAggregated - num17;
        tmp.entropyAggregated = tmp.entropyAggregated - num16;
        tmp.packetsSentOrReceived = num - num10;
        tmp.packetsLost = num3 - num12;
      }
      tmp.frameRate = tmp.frameRateAggregated / tmp.numDatapoints;
      tmp.resolution = tmp.resolutionAggregated / tmp.numDatapoints;
      tmp.entropy = tmp.entropyAggregated / tmp.numDatapoints;
      tmp.packetLossRate = tmp.packetsLost / (tmp.packetsSentOrReceived + tmp.packetsLost);
      return tmp;
    }
    tmp.packetsSentOrReceived = num;
    tmp.packetsLost = num3;
  }
}
function updateAveragedStats(closure_10, prop, value, arr) {
  if (null == closure_10[prop]) {
    closure_10[prop] = {};
  }
  id = id.getId();
  let version;
  if (null != arr) {
    version = arr.version;
  }
  let num = 0;
  if (null != version) {
    num = version;
  }
  let outbound;
  if (null != arr) {
    outbound = arr.stats.rtp.outbound;
  }
  closure_10[prop][id] = updateAveragedStatsHelper(value.version, num, closure_10[prop][id], value.stats.rtp.outbound, outbound);
  const keys = Object.keys(value.stats.rtp.inbound);
  for (let num2 = 0; num2 < keys.length; num2 = num2 + 1) {
    let tmp5 = keys[num2];
    version = value.version;
    let version1;
    let tmp6 = updateAveragedStatsHelper;
    if (null != arr) {
      version1 = arr.version;
    }
    let num3 = 0;
    if (null != version1) {
      num3 = version1;
    }
    let tmp8 = closure_10[prop][tmp5];
    let tmp9 = value.stats.rtp.inbound[tmp5];
    let tmp10;
    if (null != arr) {
      tmp10 = arr.stats.rtp.inbound[tmp5];
    }
    let tmp11 = version;
    let tmp12 = num3;
    let tmp13 = tmp8;
    let tmp14 = tmp9;
    let tmp15 = tmp10;
    closure_10[prop][tmp5] = tmp6(version, num3, tmp8, tmp9, tmp10);
  }
}
function resetAccumulatedStats(mediaEngineConnectionId, ownerId) {
  let tmp5;
  if (null != dependencyMap2[mediaEngineConnectionId]) {
    tmp5 = tmp4[ownerId];
  }
  if (null != tmp5) {
    delete tmp3[tmp2];
  }
  let tmp9;
  if (null != dependencyMap3[mediaEngineConnectionId]) {
    tmp9 = tmp8[ownerId];
  }
  if (null != tmp9) {
    delete tmp[tmp2];
  }
}
function getStatsHistoryAtIndex(prop, arg1) {
  if (null == prop) {
    return null;
  } else {
    let tmp2 = null;
    if (null != dependencyMap[prop]) {
      tmp2 = null;
      if (arr.length > arg1) {
        tmp2 = arr[arr.length - arg1 - 1];
      }
    }
    return tmp2;
  }
}
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let tmp2 = ((Store) => {
  class MediaEngineStatsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, MediaEngineStatsStore);
      obj = outer1_5(MediaEngineStatsStore);
      tmp2 = outer1_4;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(MediaEngineStatsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_8);
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "getConnectionStats",
    value(arg0) {
      return outer1_19(arg0, 0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getLastConnectionStats",
    value(arg0) {
      return outer1_19(arg0, 1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getStatsHistory",
    value(arg0) {
      if (null == arg0) {
        let items = [];
      } else {
        items = outer1_9[arg0];
        if (null == items) {
          items = [];
        }
      }
      return items;
    }
  };
  items[4] = {
    key: "getAccumulatedPerformanceStats",
    value(arg0, arg1, arg2) {
      let tmp = null;
      if (null != arg0) {
        const tmp3 = "long" === arg2 ? outer1_10 : outer1_11[arg0];
        let tmp4;
        if (null != tmp3) {
          tmp4 = tmp3[arg1];
        }
        let tmp6 = null;
        if (null != tmp4) {
          tmp6 = tmp4;
        }
        tmp = tmp6;
      }
      return tmp;
    }
  };
  return callback(MediaEngineStatsStore, items);
})(require("initialize").Store);
tmp2.displayName = "MediaEngineStatsStore";
tmp2 = new tmp2(require("dispatcher"), {
  MEDIA_ENGINE_CONNECTION_STATS: function handleMediaEngineConnectionStats(connectionStats) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(connectionStats.connectionStats);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let prop = value.mediaEngineConnectionId;
        if (0 !== prop.length) {
          {}[prop] = value;
          let tmp26 = dependencyMap;
          if (!(prop in dependencyMap)) {
            let tmp2 = dependencyMap;
            dependencyMap[prop] = [];
          }
          let tmp3 = dependencyMap;
          let arr2 = dependencyMap[prop];
          let arr = arr2.push(value);
          let tmp5 = dependencyMap;
          arr = undefined;
          if (dependencyMap[prop].length > 30) {
            let tmp7 = dependencyMap;
            let arr3 = dependencyMap[prop];
            arr = arr3.shift();
          }
          let tmp9 = closure_11;
          let tmp10 = getStatsHistoryAtIndex;
          let tmp8 = updateAveragedStats;
          let tmp11 = getStatsHistoryAtIndex(prop, 15);
          let tmp12;
          if (null != tmp11) {
            tmp12 = tmp11;
          }
          let tmp13 = tmp9;
          let tmp14 = prop;
          let tmp15 = value;
          let tmp16 = tmp12;
          let tmp8Result = tmp8(tmp9, prop, value, tmp12);
          let tmp18 = updateAveragedStats;
          let tmp19 = closure_10;
          let tmp20 = prop;
          let tmp21 = value;
          let tmp22 = arr;
          let tmp23 = updateAveragedStats(closure_10, prop, value, arr);
          let tmp24 = tmp11;
          let tmp25 = arr;
        }
        iter3 = tmp();
        iter2 = iter3;
      } while (!iter3.done);
    }
  },
  MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET: function handleResetStats(mediaEngineConnectionId) {
    if (null != mediaEngineConnectionId.mediaEngineConnectionId) {
      delete tmp3[tmp2];
      delete tmp3[tmp2];
      delete tmp[tmp2];
    }
  },
  STREAM_UPDATE: function handleStreamUpdate(streamKey) {
    streamKey = streamKey.streamKey;
    if (streamKey.paused) {
      return false;
    } else {
      rTCConnection = rTCConnection.getRTCConnection(streamKey);
      let mediaEngineConnectionId;
      if (null != rTCConnection) {
        mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      }
      if (null == mediaEngineConnectionId) {
        return false;
      } else {
        resetAccumulatedStats(mediaEngineConnectionId, require(4194) /* isStreamKey */.decodeStreamKey(streamKey).ownerId);
      }
    }
  },
  RTC_CONNECTION_VIDEO: function handleVideo(mediaEngineConnectionId) {
    mediaEngineConnectionId = mediaEngineConnectionId.mediaEngineConnectionId;
    if (null == mediaEngineConnectionId) {
      return false;
    } else {
      resetAccumulatedStats(mediaEngineConnectionId, tmp);
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/media_engine/MediaEngineStatsStore.tsx");

export default tmp2;
