// Module ID: 4212
// Function ID: 36616
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4212 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function destroyStreamRTCConnections() {
  const item = importDefault(dependencyMap[14]).forEach(closure_23, (isOwner) => {
    let str = "receiver-disconnect";
    if (isOwner.isOwner) {
      str = "sender-disconnect";
    }
    isOwner.destroy(str);
    delete r2[r1];
    delete r0[r1];
  });
}
function handleRtcAction() {
  return true;
}
function parseSourceType(str) {
  if (null == str) {
    return "unknown";
  } else {
    if (!arg1(dependencyMap[19]).isPlatformEmbedded) {
      let name;
      if (null != globalThis.platform) {
        name = globalThis.platform.name;
      }
      if ("Chrome" !== name) {
        let name1;
        if (null != globalThis.platform) {
          name1 = globalThis.platform.name;
        }
        if ("Firefox" === name1) {
          let str5 = "screen";
          if ("" !== str) {
            str5 = "window";
          }
          return str5;
        } else {
          let name2;
          if (null != globalThis.platform) {
            name2 = globalThis.platform.name;
          }
          if ("Safari" === name2) {
            return "window";
          }
        }
      }
      return "unknown";
    }
    if (str.startsWith("web-contents-media-stream:")) {
      return "tab";
    } else if (str.startsWith("window:")) {
      return "window";
    } else if (str.startsWith("screen:")) {
      return "screen";
    }
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const importDefaultResult = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
const tmp2 = arg1(dependencyMap[10]);
const RTCConnectionQuality = tmp2.RTCConnectionQuality;
const StreamTypes = arg1(dependencyMap[11]).StreamTypes;
let closure_16 = {};
let closure_17 = {};
let closure_18 = {};
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
const PORTRAIT = tmp2.StreamLayouts.PORTRAIT;
let closure_23 = {};
let tmp3 = (Store) => {
  class StreamRTCConnectionStore {
    constructor() {
      self = this;
      tmp = closure_4(this, StreamRTCConnectionStore);
      obj = closure_7(StreamRTCConnectionStore);
      tmp2 = closure_6;
      if (closure_24()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = StreamRTCConnectionStore;
  callback2(StreamRTCConnectionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_10, closure_11, closure_13, closure_9);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "getRTCConnections",
    value() {
      return closure_23;
    }
  };
  items[1] = obj;
  obj = {
    key: "getAllActiveStreamKeys",
    value() {
      return Object.keys(closure_23);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getRTCConnection",
    value(arg0) {
      return closure_23[arg0];
    }
  };
  items[4] = {
    key: "getQuality",
    value(arg0) {
      if (callback(closure_2[20])(closure_11)) {
        if (null != arg0) {
          let quality;
          if (null != closure_23[arg0]) {
            quality = tmp3.quality;
          }
        }
        return quality;
      }
      quality = constants.UNKNOWN;
    }
  };
  items[5] = {
    key: "getMediaSessionId",
    value(arg0) {
      if (null == arg0) {
        return null;
      } else {
        let tmp2;
        if (null != closure_23[arg0]) {
          let mediaSessionId = null;
          if (null != obj) {
            mediaSessionId = obj.getMediaSessionId();
          }
          tmp2 = mediaSessionId;
        }
        return tmp2;
      }
    }
  };
  items[6] = {
    key: "getRtcConnectionId",
    value(arg0) {
      if (null == arg0) {
        return null;
      } else {
        let tmp2;
        if (null != closure_23[arg0]) {
          let rTCConnectionId = null;
          if (null != obj) {
            rTCConnectionId = obj.getRTCConnectionId();
          }
          tmp2 = rTCConnectionId;
        }
        return tmp2;
      }
    }
  };
  items[7] = {
    key: "getVideoStats",
    value(arg0) {
      if (null == arg0) {
        return null;
      } else {
        let videoStats = null;
        if (null != closure_23[arg0]) {
          videoStats = obj.getVideoStats();
        }
        return videoStats;
      }
    }
  };
  items[8] = {
    key: "getHostname",
    value(arg0) {
      if (null == arg0) {
        return "";
      } else {
        let str2 = "";
        if (null != closure_23[arg0]) {
          str2 = "";
          if (null != tmp2.hostname) {
            str2 = tmp2.hostname;
          }
        }
        return str2;
      }
    }
  };
  items[9] = {
    key: "getRegion",
    value(arg0) {
      if (null == arg0) {
        return null;
      } else {
        let region = null;
        if (null != closure_23[arg0]) {
          region = obj.getRegion();
        }
        return region;
      }
    }
  };
  items[10] = {
    key: "getMaxViewers",
    value(arg0) {
      if (null == arg0) {
        return null;
      } else {
        let maxViewers = null;
        if (null != closure_23[arg0]) {
          maxViewers = obj.getMaxViewers();
        }
        return maxViewers;
      }
    }
  };
  items[11] = {
    key: "getStreamSourceId",
    value(arg0) {
      return closure_19[arg0];
    }
  };
  items[12] = {
    key: "getLastNonZeroRemoteVideoSinkWantsTime",
    value(arg0) {
      return closure_21[arg0];
    }
  };
  items[13] = {
    key: "getUserIds",
    value(arg0) {
      let userIds;
      if (null != closure_23[arg0]) {
        userIds = obj.getUserIds();
      }
      return userIds;
    }
  };
  items[14] = {
    key: "isUserConnected",
    value(arg0, arg1) {
      let isUserConnected;
      if (null != closure_23[arg0]) {
        isUserConnected = obj.getIsUserConnected(arg1);
      }
      return isUserConnected;
    }
  };
  items[15] = {
    key: "getSecureFramesState",
    value(arg0) {
      let secureFramesState;
      if (null != closure_23[arg0]) {
        secureFramesState = obj.getSecureFramesState();
      }
      return secureFramesState;
    }
  };
  items[16] = {
    key: "getSecureFramesRosterMapEntry",
    value(arg0, arg1) {
      let secureFramesRosterMap;
      if (null != closure_23[arg0]) {
        secureFramesRosterMap = obj.getSecureFramesRosterMap();
      }
      let value;
      if (null != secureFramesRosterMap) {
        value = secureFramesRosterMap.get(arg1);
      }
      return value;
    }
  };
  return callback(StreamRTCConnectionStore, items);
}(importDefault(dependencyMap[21]).Store);
tmp3.displayName = "StreamRTCConnectionStore";
if (importDefaultResult.isSupported()) {
  let obj = {
    CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
        sessionId = sessionId.sessionId;
        destroyStreamRTCConnections();
      },
    CONNECTION_CLOSED: function handleConnectionClosed() {
        let closure_3 = null;
        destroyStreamRTCConnections();
      },
    RTC_CONNECTION_STATE: handleRtcAction,
    RTC_CONNECTION_PING: handleRtcAction,
    RTC_CONNECTION_LOSS_RATE: handleRtcAction,
    RTC_CONNECTION_UPDATE_ID: function handleRtcConnectionUpdateId(arg0) {
        const arg1 = arg0;
        return importDefault(dependencyMap[14]).some(closure_23, (arg0) => arg0 === arg0.connection);
      },
    RTC_CONNECTION_SECURE_FRAMES_UPDATE: handleRtcAction,
    RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: function handleRtcConnectionRemoteVideoSinkWants(guildId) {
        let channelId;
        let context;
        let userId;
        let wants;
        guildId = guildId.guildId;
        ({ context, wants, userId, channelId } = guildId);
        let obj = arg1(dependencyMap[15]);
        obj = {};
        if (null == guildId) {
          let GUILD = StreamTypes.CALL;
        } else {
          GUILD = StreamTypes.GUILD;
        }
        obj.streamType = GUILD;
        obj.guildId = guildId;
        obj.channelId = channelId;
        obj.ownerId = userId;
        const encodeStreamKeyResult = obj.encodeStreamKey(obj);
        let tmp4 = context === arg1(dependencyMap[18]).MediaEngineContextTypes.STREAM;
        if (tmp4) {
          tmp4 = null != closure_23[encodeStreamKeyResult];
        }
        if (tmp4) {
          const _Object = Object;
          const entries = Object.entries(wants);
          const tmp7 = !entries.some((arg0) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = arg0;
            let tmp3 = "any" !== tmp;
            if (tmp3) {
              tmp3 = 0 !== tmp2;
            }
            return tmp3;
          });
          if (!tmp7) {
            const _performance = performance;
            closure_21[encodeStreamKeyResult] = performance.now();
          }
          tmp4 = !tmp7;
          const tmp8 = !tmp7;
        }
        return tmp4;
      },
    STREAM_START: function handleStreamStart(appContext) {
        let analyticsLocations;
        let channelId;
        let goLiveModalDurationMs;
        let guildId;
        let pid;
        let sourceId;
        let sourcePid;
        let streamType;
        appContext = appContext.appContext;
        const arg1 = appContext;
        ({ pid, nativePickerStyleUsed: closure_1, goLiveModalDurationMs } = appContext);
        ({ streamType, guildId, channelId, sourceId, sourcePid, analyticsLocations } = appContext);
        let obj = arg1(dependencyMap[15]);
        obj = { streamType, guildId, channelId, ownerId: id.getId() };
        const encodeStreamKeyResult = obj.encodeStreamKey(obj);
        closure_16[encodeStreamKeyResult] = { appContext, analyticsLocations };
        const item = importDefault(dependencyMap[14]).forEach(closure_23, (analyticsContext) => {
          analyticsContext = analyticsContext.analyticsContext;
          analyticsContext.setActionContext(appContext);
          const result = analyticsContext.setNativePickerStyleUsed(closure_1);
          if (analyticsContext.isOwner) {
            analyticsContext.trackStart();
          }
        });
        if (null == pid) {
          pid = sourcePid;
        }
        closure_19[encodeStreamKeyResult] = sourceId;
        closure_18[encodeStreamKeyResult] = pid;
        if (null != pid) {
          const gameForPID = gameForPID.getGameForPID(pid);
          if (null != gameForPID) {
            obj = {};
            ({ name: obj3.name, id: obj3.id, exeName: obj3.exe, distributor: obj3.distributor, sku: obj3.sku, gameMetadata: obj3.gameMetadata } = gameForPID);
            closure_17[encodeStreamKeyResult] = obj;
          }
          if (null != closure_23[encodeStreamKeyResult]) {
            const analyticsContext = tmp9.analyticsContext;
            const result = analyticsContext.updateStreamApplication(closure_17[encodeStreamKeyResult]);
          }
        } else if (null != closure_23[encodeStreamKeyResult]) {
          const analyticsContext2 = tmp4.analyticsContext;
          const result1 = analyticsContext2.updateStreamApplication(null);
        }
        if (null != goLiveModalDurationMs) {
          closure_20[encodeStreamKeyResult] = goLiveModalDurationMs;
        } else {
          delete r4[r2];
        }
      },
    STREAM_STOP: function handleStreamStop(appContext) {
        appContext = appContext.appContext;
        const arg1 = appContext;
        const streamKey = appContext.streamKey;
        closure_16[streamKey] = { appContext, analyticsLocations: undefined };
        const item = importDefault(dependencyMap[14]).forEach(closure_23, (analyticsContext) => {
          analyticsContext = analyticsContext.analyticsContext;
          analyticsContext.setActionContext(appContext);
          if (analyticsContext.isOwner) {
            analyticsContext.trackEnd();
          }
        });
        closure_19[streamKey] = null;
        closure_18[streamKey] = null;
        delete r1[r2];
      },
    STREAM_CREATE: function handleStreamCreate(arg0) {
        let region;
        let rtcChannelId;
        let rtcServerId;
        let streamKey;
        let viewerIds;
        ({ streamKey, rtcServerId, viewerIds } = arg0);
        let obj = closure_23[streamKey];
        ({ rtcChannelId, region } = arg0);
        let obj1 = arg1(dependencyMap[15]);
        let tmp2 = null == obj;
        if (tmp2) {
          tmp2 = null != rtcServerId;
        }
        if (tmp2) {
          if (null == closure_18[streamKey]) {
            closure_17[streamKey] = null;
          }
          let tmp6 = null == closure_17[streamKey];
          if (tmp6) {
            tmp6 = null == closure_19[streamKey];
          }
          if (tmp6) {
            closure_17[streamKey] = arg1(dependencyMap[16]).getStreamerApplication(decodeStreamKeyResult, closure_12);
            const obj3 = arg1(dependencyMap[16]);
          }
          const StreamRTCAnalyticsContext = arg1(dependencyMap[13]).StreamRTCAnalyticsContext;
          obj = { streamRegion: region, streamApplication: closure_17[streamKey], streamSourceType: parseSourceType(closure_19[streamKey]) };
          let appContext;
          if (null != closure_16[streamKey]) {
            appContext = tmp18.appContext;
          }
          obj.actionContext = appContext;
          let num3 = 0;
          if (null != viewerIds) {
            num3 = viewerIds.length;
          }
          obj.numViewers = num3;
          obj.goLiveModalDurationMs = closure_20[streamKey];
          let analyticsLocations;
          if (null != closure_16[streamKey]) {
            analyticsLocations = tmp22.analyticsLocations;
          }
          obj.analyticsLocations = analyticsLocations;
          const prototype = StreamRTCAnalyticsContext.prototype;
          const streamRTCAnalyticsContext = new StreamRTCAnalyticsContext(obj);
          importDefault(dependencyMap[12])(null != closure_3, "Creating RTCConnection without session.");
          let tmp33 = importDefault(dependencyMap[13]);
          obj = { sessionId: closure_3, streamKey, serverId: rtcServerId, channelId: rtcChannelId, initialLayout: PORTRAIT, analyticsContext: streamRTCAnalyticsContext, parentMediaSessionId: mediaSessionId.getMediaSessionId() };
          const prototype2 = tmp33.prototype;
          tmp33 = new tmp33(obj);
          closure_23[streamKey] = tmp33;
          obj = tmp33;
        }
        delete r2[r3];
        const decodeStreamKeyResult = obj1.decodeStreamKey(streamKey);
        obj1 = { type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET", mediaEngineConnectionId: obj.getMediaEngineConnectionId() };
        importDefault(dependencyMap[17]).dispatch(obj1);
      },
    STREAM_SERVER_UPDATE: function handleStreamServerUpdate(endpoint) {
        if (null == closure_23[endpoint.streamKey]) {
          return false;
        } else {
          obj.connect(endpoint.endpoint, endpoint.token);
        }
      },
    STREAM_UPDATE: function handleStreamUpdate(viewerIds) {
        viewerIds = viewerIds.viewerIds;
        if (null == closure_23[viewerIds.streamKey]) {
          return false;
        } else {
          if (null != viewerIds) {
            const analyticsContext = obj.analyticsContext;
            analyticsContext.trackViewerCount(viewerIds.length);
          }
          obj.streamUpdate(tmp);
        }
      },
    STREAM_DELETE: function handleStreamDelete(arg0) {
        let obj = closure_23[arg0.streamKey];
        if (null == obj) {
          return false;
        } else {
          obj = { type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET" };
          obj.mediaEngineConnectionId = obj.getMediaEngineConnectionId();
          importDefault(dependencyMap[17]).dispatch(obj);
          obj.destroy("stream-end");
          delete r1[r2];
        }
      },
    STREAM_LAYOUT_UPDATE: function handleLayoutUpdate(layout) {
        layout = layout.layout;
        const arg1 = layout;
        const PORTRAIT = layout;
        const values = Object.values(closure_23);
        const item = values.forEach((layoutChange) => layoutChange.layoutChange(layout));
      },
    VIDEO_SIZE_UPDATE: function handleVideoSizeUpdate(arg0) {
        ({ streamId: closure_0, dimensions: closure_1, zoom: closure_2 } = arg0);
        const item = importDefault(dependencyMap[14]).forEach(closure_23, (setVideoSize) => {
          if (null != setVideoSize) {
            setVideoSize.setVideoSize(closure_0, closure_1, closure_2);
          }
        });
      }
  };
} else {
  obj = {};
}
tmp3 = new tmp3(importDefault(dependencyMap[17]), obj);
const importDefaultResult1 = importDefault(dependencyMap[17]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("stores/StreamRTCConnectionStore.tsx");

export default tmp3;
