// Module ID: 10766
// Function ID: 83622
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 57, 6, 7, 4177, 1849, 653, 4191, 10767, 4227, 686, 566, 2]
// Exports: keySection, parseSection

// Module 10766 (_isNativeReflectConstruct)
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import DesktopSources from "DesktopSources";

let closure_13;
let closure_14;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function makeStreamKey(arg0, arg1, arg2) {
  return "" + arg0 + ":" + arg1 + ":" + arg2;
}
function makeSimulcastKey(userId, context) {
  return "" + userId + ":" + context;
}
function keySection(DEFAULT, TRANSPORT, arg2) {
  return "" + DEFAULT + ":" + TRANSPORT + ":" + arg2;
}
function getLastGraphValue(arr) {
  let tmp = arr;
  if (Array.isArray(arr)) {
    const iter = arr.at(-1);
    let value;
    if (null != iter) {
      value = iter.value;
    }
    tmp = value;
  }
  return tmp;
}
function setDefaultStats() {
  const values = Object.values(MediaEngineContextTypes);
  const item = values.forEach((arg0) => {
    outer1_17[arg0] = {};
  });
}
function destroyReplayConnection() {
  if (null != _null) {
    _null.destroy();
    _null = null;
  }
}
function computeScreenshareFps(videohookFrames, videohookFrames2) {
  videohookFrames = videohookFrames.videohookFrames;
  let num = 0;
  if (null != videohookFrames) {
    num = videohookFrames;
  }
  const hybridDxgiFrames = videohookFrames.hybridDxgiFrames;
  let num2 = 0;
  if (null != hybridDxgiFrames) {
    num2 = hybridDxgiFrames;
  }
  const hybridGdiFrames = videohookFrames.hybridGdiFrames;
  let num3 = 0;
  const sum = num + num2;
  if (null != hybridGdiFrames) {
    num3 = hybridGdiFrames;
  }
  const hybridVideohookFrames = videohookFrames.hybridVideohookFrames;
  let num4 = 0;
  const sum1 = sum + num3;
  if (null != hybridVideohookFrames) {
    num4 = hybridVideohookFrames;
  }
  const hybridGraphicsCaptureFrames = videohookFrames.hybridGraphicsCaptureFrames;
  let num5 = 0;
  const sum2 = sum1 + num4;
  if (null != hybridGraphicsCaptureFrames) {
    num5 = hybridGraphicsCaptureFrames;
  }
  const quartzFrames = videohookFrames.quartzFrames;
  let num6 = 0;
  const sum3 = sum2 + num5;
  if (null != quartzFrames) {
    num6 = quartzFrames;
  }
  const screenCaptureKitFrames = videohookFrames.screenCaptureKitFrames;
  let num7 = 0;
  const sum4 = sum3 + num6;
  if (null != screenCaptureKitFrames) {
    num7 = screenCaptureKitFrames;
  }
  videohookFrames2 = videohookFrames2.videohookFrames;
  let num8 = 0;
  const sum5 = sum4 + num7;
  if (null != videohookFrames2) {
    num8 = videohookFrames2;
  }
  const hybridDxgiFrames2 = videohookFrames2.hybridDxgiFrames;
  let num9 = 0;
  if (null != hybridDxgiFrames2) {
    num9 = hybridDxgiFrames2;
  }
  const hybridGdiFrames2 = videohookFrames2.hybridGdiFrames;
  let num10 = 0;
  const sum6 = num8 + num9;
  if (null != hybridGdiFrames2) {
    num10 = hybridGdiFrames2;
  }
  const hybridVideohookFrames2 = videohookFrames2.hybridVideohookFrames;
  let num11 = 0;
  const sum7 = sum6 + num10;
  if (null != hybridVideohookFrames2) {
    num11 = hybridVideohookFrames2;
  }
  const hybridGraphicsCaptureFrames2 = videohookFrames2.hybridGraphicsCaptureFrames;
  let num12 = 0;
  const sum8 = sum7 + num11;
  if (null != hybridGraphicsCaptureFrames2) {
    num12 = hybridGraphicsCaptureFrames2;
  }
  const quartzFrames2 = videohookFrames2.quartzFrames;
  let num13 = 0;
  const sum9 = sum8 + num12;
  if (null != quartzFrames2) {
    num13 = quartzFrames2;
  }
  const screenCaptureKitFrames2 = videohookFrames2.screenCaptureKitFrames;
  let num14 = 0;
  const sum10 = sum9 + num13;
  if (null != screenCaptureKitFrames2) {
    num14 = screenCaptureKitFrames2;
  }
  const hybridDxgiFramesUnique = videohookFrames.hybridDxgiFramesUnique;
  let num15 = 0;
  const sum11 = sum10 + num14;
  if (null != hybridDxgiFramesUnique) {
    num15 = hybridDxgiFramesUnique;
  }
  const hybridGdiBitBltFramesUnique = videohookFrames.hybridGdiBitBltFramesUnique;
  let num16 = 0;
  if (null != hybridGdiBitBltFramesUnique) {
    num16 = hybridGdiBitBltFramesUnique;
  }
  const hybridGdiPrintWindowFramesUnique = videohookFrames.hybridGdiPrintWindowFramesUnique;
  let num17 = 0;
  const sum12 = num15 + num16;
  if (null != hybridGdiPrintWindowFramesUnique) {
    num17 = hybridGdiPrintWindowFramesUnique;
  }
  const hybridVideohookFramesUnique = videohookFrames.hybridVideohookFramesUnique;
  let num18 = 0;
  const sum13 = sum12 + num17;
  if (null != hybridVideohookFramesUnique) {
    num18 = hybridVideohookFramesUnique;
  }
  const hybridGraphicsCaptureFramesUnique = videohookFrames.hybridGraphicsCaptureFramesUnique;
  let num19 = 0;
  const sum14 = sum13 + num18;
  if (null != hybridGraphicsCaptureFramesUnique) {
    num19 = hybridGraphicsCaptureFramesUnique;
  }
  const hybridDxgiFramesUnique2 = videohookFrames2.hybridDxgiFramesUnique;
  let num20 = 0;
  const sum15 = sum14 + num19;
  if (null != hybridDxgiFramesUnique2) {
    num20 = hybridDxgiFramesUnique2;
  }
  const hybridGdiBitBltFramesUnique2 = videohookFrames2.hybridGdiBitBltFramesUnique;
  let num21 = 0;
  if (null != hybridGdiBitBltFramesUnique2) {
    num21 = hybridGdiBitBltFramesUnique2;
  }
  const hybridGdiPrintWindowFramesUnique2 = videohookFrames2.hybridGdiPrintWindowFramesUnique;
  let num22 = 0;
  const sum16 = num20 + num21;
  if (null != hybridGdiPrintWindowFramesUnique2) {
    num22 = hybridGdiPrintWindowFramesUnique2;
  }
  const hybridVideohookFramesUnique2 = videohookFrames2.hybridVideohookFramesUnique;
  let num23 = 0;
  const sum17 = sum16 + num22;
  if (null != hybridVideohookFramesUnique2) {
    num23 = hybridVideohookFramesUnique2;
  }
  const hybridGraphicsCaptureFramesUnique2 = videohookFrames2.hybridGraphicsCaptureFramesUnique;
  let num24 = 0;
  const sum18 = sum17 + num23;
  if (null != hybridGraphicsCaptureFramesUnique2) {
    num24 = hybridGraphicsCaptureFramesUnique2;
  }
  const sum19 = sum18 + num24;
  return { screenshareCapturedFps: Math.max(0, (sum5 - sum11) / arg2), screenshareCapturedFpsUnique: Math.max(0, (sum15 - sum19) / arg2) };
}
function updateStats(arr1, arg1, timestamp) {
  let arr2;
  let tmp10;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (timestamp === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  obj = {};
  const entries = Object.entries(arr1);
  let num = 0;
  if (0 < entries.length) {
    do {
      let tmp8 = callback2;
      let tmp9 = callback2(entries[num], 2);
      [tmp10, arr2] = tmp9;
      let tmp11 = obj[tmp10];
      let _Array = Array;
      if (Array.isArray(arr1)) {
        if ("object" === typeof arr1[0]) {
          let _Array3 = Array;
          let items = tmp11;
          if (!Array.isArray(tmp11)) {
            items = [];
          }
          let items1 = [];
          obj[tmp10] = items1;
          let num3 = 0;
          let tmp14 = items;
          let tmp15 = items1;
          let num2 = 0;
          let tmp16 = tmp6;
          let tmp17 = tmp7;
          if (0 < arr1.length) {
            do {
              let tmp20 = items[num3];
              obj = tmp20;
              if ("object" !== typeof tmp20) {
                obj = {};
              }
              let tmp21 = updateStats;
              let arr = items1.push(updateStats(arr1[num3], obj, timestamp));
              num3 = num3 + 1;
              tmp14 = items;
              tmp15 = items1;
              tmp16 = tmp20;
              tmp17 = tmp7;
              num2 = num3;
            } while (num3 < arr1.length);
          }
        } else {
          obj[tmp10] = arr1;
          tmp14 = tmp3;
          tmp15 = tmp4;
          num2 = tmp5;
          tmp16 = tmp6;
          tmp17 = tmp7;
        }
      } else {
        let tmp12 = typeof arr1;
        if ("object" === tmp12) {
          if (null !== arr1) {
            if ("object" !== typeof tmp11) {
              let obj1 = {};
            } else {
              obj1 = tmp11;
            }
            let tmp19 = updateStats;
            obj[tmp10] = updateStats(arr1, obj1, timestamp);
            tmp14 = tmp3;
            tmp15 = tmp4;
            num2 = tmp5;
            tmp16 = tmp6;
            tmp17 = tmp7;
          }
        }
        let tmp13 = obj;
        if (tmp10 in obj) {
          if ("number" === tmp12) {
            let _Array2 = Array;
            let items2 = tmp11;
            if (!Array.isArray(tmp11)) {
              items2 = [];
            }
            obj[tmp10] = items2;
            let obj2 = { value: arr1, time: timestamp };
            arr = items2.push(obj2);
            tmp14 = tmp3;
            tmp15 = tmp4;
            num2 = tmp5;
            tmp16 = tmp6;
            tmp17 = items2;
            if (items2.length > 600) {
              arr1 = items2.shift();
              tmp14 = tmp3;
              tmp15 = tmp4;
              num2 = tmp5;
              tmp16 = tmp6;
              tmp17 = items2;
            }
          }
        }
        obj[tmp10] = arr1;
        tmp14 = tmp3;
        tmp15 = tmp4;
        num2 = tmp5;
        tmp16 = tmp6;
        tmp17 = tmp7;
      }
      num = num + 1;
      tmp3 = tmp14;
      tmp4 = tmp15;
      tmp5 = num2;
      tmp6 = tmp16;
      tmp7 = tmp17;
    } while (num < entries.length);
  }
  return obj;
}
const MediaEngineContextTypes = DesktopSources.MediaEngineContextTypes;
({ Features: closure_13, SimulcastOverrideQuality: closure_14 } = DesktopSources);
const keySectionResult = keySection(MediaEngineContextTypes.DEFAULT, require("ME").RTCDebugSections.TRANSPORT, 0);
let closure_17 = {};
const map = new Map();
let obj = { availableOutgoingBitrate: true, bitrate: true, bitrateTarget: true, bytesReceived: true, bytesSent: true, encoderQualityPsnr: true, encoderQualityVmaf: true, encodeUsage: true, frameRateDecode: true, frameRateEncode: true, frameRateInput: true, frameRateNetwork: true, frameRateRender: true, keyFramesEncoded: true, keyFramesDecoded: true, inboundBitrateEstimate: true, packetsLost: true, packetsReceived: true, packetsSent: true, ping: true, qpSum: true, videoEntropy: true, audioLevel: true, screenshareCapturedFps: true, screenshareCapturedFpsUnique: true };
let obj2 = (() => {
  class RTCDebugVideoOutputMap {
    constructor(arg0) {
      tmp = outer1_8(this, RTCDebugVideoOutputMap);
      this.state = arg0;
      return;
    }
  }
  let obj = {
    key: "put",
    value(arg0, arg1, arg2, arg3) {
      const self = this;
      if ("" === arg3) {
        let obj = {};
        const merged = Object.assign(self.state);
        outer1_25(arg0, arg1, arg2);
        delete tmp2[tmp];
        const prototype2 = RTCDebugVideoOutputMap.prototype;
        const tmp20 = new RTCDebugVideoOutputMap(obj);
        return tmp20;
      } else {
        obj = {};
        obj[outer1_25(arg0, arg1, arg2)] = arg3;
        const merged1 = Object.assign(self.state);
        const prototype = RTCDebugVideoOutputMap.prototype;
        const tmp10 = new RTCDebugVideoOutputMap(obj);
        return tmp10;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "get",
    value(arg0, arg1, arg2) {
      const tmp = this.state[outer1_25(undefined, arg0, arg1, arg2)];
      let tmp2 = null;
      if (null != tmp) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[1] = obj;
  obj = {
    key: "empty",
    value() {
      return new RTCDebugVideoOutputMap({});
    }
  };
  const items1 = [obj];
  return callback3(RTCDebugVideoOutputMap, items, items1);
})();
let closure_20 = obj2.empty();
let c21 = false;
let c22 = null;
const map1 = new Map();
setDefaultStats();
let tmp7 = ((Store) => {
  class RTCDebugStore {
    constructor() {
      self = this;
      tmp = outer1_8(this, RTCDebugStore);
      obj = outer1_5(RTCDebugStore);
      tmp2 = outer1_4;
      if (outer1_24()) {
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
  callback(RTCDebugStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_10, outer1_11);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getSection",
    value() {
      return outer1_16;
    }
  };
  items[1] = obj;
  obj = {
    key: "getInboundStats",
    value(arg0, arg1) {
      const first = this.getAllStats(arg1)[0];
      let tmp2;
      if (null != first) {
        const rtp = first.rtp;
        if (null != rtp) {
          tmp2 = rtp.inbound[arg0];
        }
      }
      let found;
      if (null != tmp2) {
        found = tmp2.find((type) => "video" === type.type);
      }
      const obj = {};
      let name;
      if (null != found) {
        name = found.codec.name;
      }
      obj.codec = name;
      let resolution;
      if (null != found) {
        resolution = found.resolution;
      }
      obj.resolution = resolution;
      obj.bitrateEstimate = undefined;
      let frameRateRender;
      if (null != found) {
        frameRateRender = found.frameRateRender;
      }
      obj.fps = outer1_27(frameRateRender);
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getOutboundStats",
    value(arg0) {
      const allStats = this.getAllStats(arg0);
      const first = allStats[0];
      let transport;
      if (null != first) {
        transport = first.transport;
      }
      const first1 = allStats[0];
      let outbound;
      if (null != first1) {
        const rtp = first1.rtp;
        if (null != rtp) {
          outbound = rtp.outbound;
        }
      }
      let found;
      if (null != outbound) {
        found = outbound.find((type) => "video" === type.type);
      }
      const obj = {};
      let name;
      if (null != found) {
        name = found.codec.name;
      }
      obj.codec = name;
      let resolution;
      if (null != found) {
        resolution = found.resolution;
      }
      obj.resolution = resolution;
      let prop;
      if (null != transport) {
        prop = transport.availableOutgoingBitrate;
      }
      obj.bitrateEstimate = outer1_27(prop);
      let frameRateEncode;
      if (null != found) {
        frameRateEncode = found.frameRateEncode;
      }
      obj.fps = outer1_27(frameRateEncode);
      return obj;
    }
  };
  items[4] = {
    key: "getAllStats",
    value() {
      let DEFAULT = arg0;
      if (arg0 === undefined) {
        DEFAULT = outer1_12.DEFAULT;
      }
      return Object.values(outer1_17[DEFAULT]);
    }
  };
  items[5] = {
    key: "getVideoStreams",
    value() {
      return outer1_20;
    }
  };
  items[6] = {
    key: "shouldRecordNextConnection",
    value() {
      return outer1_21;
    }
  };
  items[7] = {
    key: "getSimulcastDebugOverride",
    value(arg0, arg1) {
      const tmp = outer1_26(arg0, arg1);
      if (outer1_18.has(tmp)) {
        let NO_OVERRIDE = outer1_18.get(tmp);
      } else {
        NO_OVERRIDE = outer1_14.NO_OVERRIDE;
      }
      return NO_OVERRIDE;
    }
  };
  return callback3(RTCDebugStore, items);
})(require("initialize").Store);
tmp7.displayName = "RTCDebugStore";
obj = {
  RTC_DEBUG_MODAL_OPEN: function handleOpen(section) {
    section = section.section;
    if (null == section) {
      section = closure_15;
    }
  },
  RTC_DEBUG_MODAL_CLOSE: function handleFormClose() {
    destroyReplayConnection();
  },
  RTC_DEBUG_MODAL_SET_SECTION: function handleSetSection(section) {
    section = section.section;
  },
  RTC_DEBUG_MODAL_OPEN_REPLAY: function handleOpenReplay() {
    importAll(10767).chooseReplayPath();
  },
  RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: function handleOpenReplayAtPath(path) {
    path = path.path;
    let replayConnection;
    mediaEngine = mediaEngine.getMediaEngine();
    destroyReplayConnection();
    if (mediaEngine.supports(constants.CONNECTION_REPLAY)) {
      if (0 !== path.length) {
        replayConnection = mediaEngine.createReplayConnection(MediaEngineContextTypes.DEFAULT, path);
        if (null != replayConnection) {
          replayConnection.on(replayConnection(4227).BaseConnectionEvent.Video, (userId) => {
            let obj = outer1_1(outer1_3[12]);
            obj = { type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT", mediaEngineConnectionId: replayConnection.mediaEngineConnectionId, userId };
            let num = 0;
            if (null != arg3) {
              num = arg3;
            }
            obj.videoSsrc = num;
            let str = "";
            if (null != arg1) {
              str = arg1;
            }
            obj.streamId = str;
            obj.dispatch(obj);
          });
          importDefault(686).wait(() => outer1_2(outer1_3[10]).open());
          const obj2 = importDefault(686);
        }
      }
    }
  },
  RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: function handleUpdateVideoOutput(mediaEngineConnectionId) {
    closure_20 = closure_20.put(mediaEngineConnectionId.mediaEngineConnectionId, mediaEngineConnectionId.userId, mediaEngineConnectionId.videoSsrc, mediaEngineConnectionId.streamId);
  },
  RTC_DEBUG_SET_RECORDING_FLAG: function handleSetRecordingFlag(value) {
    value = value.value;
  },
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function handleSetSimulcastDebugOverride(userId) {
    const result = map.set(makeSimulcastKey(userId.userId, userId.context), userId.quality);
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    if (null != channelId.channelId) {
      setDefaultStats();
      map.clear();
      map1.clear();
    }
  },
  RTC_CONNECTION_VIDEO: function handleVideo(streamId) {
    if (null === streamId.streamId) {
      const result = map.set(makeSimulcastKey(streamId.userId, streamId.context), constants2.NO_OVERRIDE);
    }
  },
  MEDIA_ENGINE_CONNECTION_STATS: function handleMediaEngineConnectionStats(connectionStats) {
    connectionStats = connectionStats.connectionStats;
    const values = Object.values(MediaEngineContextTypes);
    let item = values.forEach((arg0) => {
      const connectionStats = arg0;
      const found = connectionStats.filter((context) => context.context === closure_0);
      const item = found.forEach((stats, index) => {
        let context;
        let obj = { context: closure_0, stats: stats.stats, index };
        ({ context, stats, index } = obj);
        if (null != stats) {
          const tmp6 = outer2_7(outer2_16.split(":"), 3);
          if (tmp6[0] === context) {
            const _parseInt = parseInt;
            if (parseInt(tmp8) === index) {
              if (null != outer2_11.getUser(tmp7)) {
                const _Object = Object;
                const keys = Object.keys(stats.rtp.inbound);
                if (!keys.includes(tmp7)) {
                  outer2_16 = outer2_15;
                }
              }
            }
          }
          const _Date = Date;
          const timestamp = Date.now();
          let tmp14 = stats;
          if (null != stats.screenshare) {
            const _HermesInternal = HermesInternal;
            const combined = "" + context + ":" + index;
            const value = outer2_23.get(combined);
            if (null != tmp3[index]) {
              const screenshare = tmp30.screenshare;
            }
            const result = outer2_23.set(combined, timestamp);
            tmp14 = stats;
            if (null != value) {
              tmp14 = stats;
              if (null != screenshare) {
                const result1 = (timestamp - value) / 1000;
                tmp14 = stats;
                if (result1 > 0) {
                  obj = {};
                  const merged = Object.assign(stats);
                  obj = {};
                  const merged1 = Object.assign(stats.screenshare);
                  const merged2 = Object.assign(outer2_30(stats.screenshare, screenshare, result1));
                  obj["screenshare"] = obj;
                  tmp14 = obj;
                }
              }
            }
          }
          tmp3[index] = outer2_31(tmp14, tmp3[index], timestamp);
        } else {
          delete tmp[tmp2];
        }
      });
    });
  }
};
tmp7 = new tmp7(require("dispatcher"), obj);
let result = require("_inherits").fileFinishedImporting("stores/RTCDebugStore.tsx");

export default tmp7;
export const DEFAULT_SECTION = keySectionResult;
export const graphs = obj;
export const RTCDebugVideoOutputMap = obj2;
export { keySection };
export const parseSection = function parseSection(str) {
  const tmp = callback2(str.split(":"), 2);
  return { context: tmp[0], section: tmp[1] };
};
export { getLastGraphValue };
