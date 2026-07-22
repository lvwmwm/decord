// Module ID: 10756
// Function ID: 83573
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: keySection, parseSection

// Module 10756 (_isNativeReflectConstruct)
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
    closure_17[arg0] = {};
  });
}
function destroyReplayConnection() {
  if (null != _null) {
    _null.destroy();
    const _null = null;
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
function updateStats(arg0) {
  let arr2;
  let tmp10;
  let obj = arg1;
  let timestamp = arg2;
  if (arg1 === undefined) {
    obj = {};
  }
  if (timestamp === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  obj = {};
  const entries = Object.entries(arg0);
  let num = 0;
  if (0 < entries.length) {
    do {
      let tmp8 = closure_7;
      let tmp9 = closure_7(entries[num], 2);
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
              let tmp21 = closure_31;
              let arr = items1.push(closure_31(arr1[num3], obj, timestamp));
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
            let tmp19 = closure_31;
            obj[tmp10] = closure_31(arr1, obj1, timestamp);
            tmp14 = tmp3;
            tmp15 = tmp4;
            num2 = tmp5;
            tmp16 = tmp6;
            tmp17 = tmp7;
          }
        }
        let tmp13 = closure_19;
        if (tmp10 in closure_19) {
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
              let arr1 = items2.shift();
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
      let tmp3 = tmp14;
      let tmp4 = tmp15;
      let tmp5 = num2;
      let tmp6 = tmp16;
      let tmp7 = tmp17;
    } while (num < entries.length);
  }
  return obj;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
const tmp2 = arg1(dependencyMap[9]);
const MediaEngineContextTypes = tmp2.MediaEngineContextTypes;
({ Features: closure_13, SimulcastOverrideQuality: closure_14 } = tmp2);
const keySectionResult = keySection(MediaEngineContextTypes.DEFAULT, arg1(dependencyMap[8]).RTCDebugSections.TRANSPORT, 0);
let closure_17 = {};
const map = new Map();
let obj = { "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003562007816064813, "Bool(false)": -625777451929953900000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000004665177423075728, "Bool(false)": 0.0000000000000000000000000000000000000007492573506792921, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000004667261458395371, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000041336278527542125, "Bool(false)": -2718669166212202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000004667261458271609, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000012181491896527616, "Bool(false)": 241979899612687240000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000004667261426588809, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008709925065606198, "Bool(false)": 0.6, "Bool(false)": "BounceOutRight", "Bool(false)": null, "Bool(false)": 0.6, "Bool(false)": "BounceOutLeft", "Bool(false)": null, "Bool(false)": 0.6, "Bool(false)": "BounceOutUp", "Bool(false)": null, "Bool(false)": 0.6, "Bool(false)": "BounceOutDown", "Bool(false)": null, "Bool(false)": 0.6 };
const obj2 = () => {
  class RTCDebugVideoOutputMap {
    constructor(arg0) {
      tmp = closure_8(this, RTCDebugVideoOutputMap);
      this.state = arg0;
      return;
    }
  }
  const arg1 = RTCDebugVideoOutputMap;
  let obj = {
    key: "put",
    value(arg0, arg1, arg2, arg3) {
      const self = this;
      if ("" === arg3) {
        let obj = {};
        const merged = Object.assign(self.state);
        callback2(arg0, arg1, arg2);
        delete r2[r0];
        const prototype2 = RTCDebugVideoOutputMap.prototype;
        const tmp18 = new RTCDebugVideoOutputMap(obj);
        return tmp18;
      } else {
        obj = {};
        obj[callback2(arg0, arg1, arg2)] = arg3;
        const merged1 = Object.assign(self.state);
        const prototype = RTCDebugVideoOutputMap.prototype;
        const tmp8 = new RTCDebugVideoOutputMap(obj);
        return tmp8;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "get",
    value(arg0, arg1, arg2) {
      const tmp = this.state[closure_25(undefined, arg0, arg1, arg2)];
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
}();
let closure_20 = obj2.empty();
let closure_21 = false;
let closure_22 = null;
const map1 = new Map();
setDefaultStats();
let tmp7 = (Store) => {
  class RTCDebugStore {
    constructor() {
      self = this;
      tmp = closure_8(this, RTCDebugStore);
      obj = closure_5(RTCDebugStore);
      tmp2 = closure_4;
      if (closure_24()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = RTCDebugStore;
  callback(RTCDebugStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_10, closure_11);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getSection",
    value() {
      return closure_16;
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
      obj.fps = closure_27(frameRateRender);
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
      obj.bitrateEstimate = closure_27(prop);
      let frameRateEncode;
      if (null != found) {
        frameRateEncode = found.frameRateEncode;
      }
      obj.fps = closure_27(frameRateEncode);
      return obj;
    }
  };
  items[4] = {
    key: "getAllStats",
    value() {
      let DEFAULT = arg0;
      if (arg0 === undefined) {
        DEFAULT = constants.DEFAULT;
      }
      return Object.values(closure_17[DEFAULT]);
    }
  };
  items[5] = {
    key: "getVideoStreams",
    value() {
      return closure_20;
    }
  };
  items[6] = {
    key: "shouldRecordNextConnection",
    value() {
      return closure_21;
    }
  };
  items[7] = {
    key: "getSimulcastDebugOverride",
    value(arg0, arg1) {
      const tmp = callback4(arg0, arg1);
      if (map.has(tmp)) {
        let NO_OVERRIDE = map.get(tmp);
      } else {
        NO_OVERRIDE = constants2.NO_OVERRIDE;
      }
      return NO_OVERRIDE;
    }
  };
  return callback3(RTCDebugStore, items);
}(importDefault(dependencyMap[13]).Store);
tmp7.displayName = "RTCDebugStore";
obj = {
  RTC_DEBUG_MODAL_OPEN: function handleOpen(section) {
    section = section.section;
  },
  RTC_DEBUG_MODAL_CLOSE: function handleFormClose() {
    destroyReplayConnection();
  },
  RTC_DEBUG_MODAL_SET_SECTION: function handleSetSection(section) {

  },
  RTC_DEBUG_MODAL_OPEN_REPLAY: function handleOpenReplay() {
    importAll(dependencyMap[10]).chooseReplayPath();
  },
  RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: function handleOpenReplayAtPath(path) {
    path = path.path;
    let arg1;
    const mediaEngine = mediaEngine.getMediaEngine();
    destroyReplayConnection();
    if (mediaEngine.supports(constants.CONNECTION_REPLAY)) {
      if (0 !== path.length) {
        const replayConnection = mediaEngine.createReplayConnection(MediaEngineContextTypes.DEFAULT, path);
        arg1 = replayConnection;
        if (null != replayConnection) {
          let closure_22 = replayConnection;
          replayConnection.on(arg1(dependencyMap[11]).BaseConnectionEvent.Video, (userId) => {
            let obj = callback(closure_3[12]);
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
          importDefault(dependencyMap[12]).wait(() => callback2(closure_3[10]).open());
          const obj2 = importDefault(dependencyMap[12]);
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
    const arg1 = connectionStats.connectionStats;
    const values = Object.values(MediaEngineContextTypes);
    const item = values.forEach((arg0) => {
      const connectionStats = arg0;
      const found = connectionStats.filter((context) => context.context === context);
      const item = found.forEach((stats, index) => {
        let context;
        let obj = { context: stats, stats: stats.stats, index };
        ({ context, stats, index } = obj);
        if (null != stats) {
          const tmp4 = callback(closure_16.split(":"), 3);
          if (tmp4[0] === context) {
            const _parseInt = parseInt;
            if (parseInt(tmp6) === index) {
              if (null != user.getUser(tmp5)) {
                const _Object = Object;
                const keys = Object.keys(stats.rtp.inbound);
                if (!keys.includes(tmp5)) {
                  closure_16 = closure_15;
                }
              }
            }
          }
          const _Date = Date;
          const timestamp = Date.now();
          let tmp12 = stats;
          if (null != stats.screenshare) {
            const _HermesInternal = HermesInternal;
            const combined = "" + context + ":" + index;
            const value = store.get(combined);
            if (null != tmp[index]) {
              const screenshare = tmp28.screenshare;
            }
            const result = store.set(combined, timestamp);
            tmp12 = stats;
            if (null != value) {
              tmp12 = stats;
              if (null != screenshare) {
                const result1 = (timestamp - value) / 1000;
                tmp12 = stats;
                if (result1 > 0) {
                  obj = {};
                  const merged = Object.assign(stats);
                  obj = {};
                  const merged1 = Object.assign(stats.screenshare);
                  const merged2 = Object.assign(callback2(stats.screenshare, screenshare, result1));
                  obj["screenshare"] = obj;
                  tmp12 = obj;
                }
              }
            }
          }
          tmp[index] = callback3(tmp12, tmp[index], timestamp);
        } else {
          delete r1[r2];
        }
      });
    });
  }
};
tmp7 = new tmp7(importDefault(dependencyMap[12]), obj);
const result = arg1(dependencyMap[14]).fileFinishedImporting("stores/RTCDebugStore.tsx");

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
