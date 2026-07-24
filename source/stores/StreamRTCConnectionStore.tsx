// Module ID: 4216
// Function ID: 36664
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4150, 1194, 4177, 4217, 4202, 653, 4195, 44, 4219, 22, 4194, 6980, 686, 4227, 477, 12781, 566, 2]

// Module 4216 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import isStreamKey from "isStreamKey";
import dispatcher from "dispatcher";
import getMediaEngineImpl from "getMediaEngineImpl";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import ME from "ME";
import { StreamTypes } from "StreamIssueReportReasons";
import importDefaultResult1 from "dispatcher";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function destroyStreamRTCConnections() {
  const item = importDefault(22).forEach(closure_23, (isOwner) => {
    let str = "receiver-disconnect";
    if (isOwner.isOwner) {
      str = "sender-disconnect";
    }
    isOwner.destroy(str);
    delete tmp3[tmp2];
    delete tmp[tmp2];
  });
}
function handleRtcAction() {
  return true;
}
function parseSourceType(str) {
  if (null == str) {
    return "unknown";
  } else {
    if (!require(477) /* set */.isPlatformEmbedded) {
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
const RTCConnectionQuality = ME.RTCConnectionQuality;
let closure_16 = {};
let closure_17 = {};
let closure_18 = {};
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
const PORTRAIT = ME.StreamLayouts.PORTRAIT;
let closure_23 = {};
let tmp3 = ((Store) => {
  class StreamRTCConnectionStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, StreamRTCConnectionStore);
      obj = outer1_7(StreamRTCConnectionStore);
      tmp2 = outer1_6;
      if (outer1_24()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(StreamRTCConnectionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_10, outer1_11, outer1_13, outer1_9);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "getRTCConnections",
    value() {
      return outer1_23;
    }
  };
  items[1] = obj;
  obj = {
    key: "getAllActiveStreamKeys",
    value() {
      return Object.keys(outer1_23);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getRTCConnection",
    value(arg0) {
      return outer1_23[arg0];
    }
  };
  items[4] = {
    key: "getQuality",
    value(arg0) {
      if (outer1_1(outer1_2[20])(outer1_11)) {
        if (null != arg0) {
          let quality;
          if (null != outer1_23[arg0]) {
            quality = tmp3.quality;
          }
        }
        return quality;
      }
      quality = outer1_14.UNKNOWN;
    }
  };
  items[5] = {
    key: "getMediaSessionId",
    value(arg0) {
      if (null == arg0) {
        return null;
      } else {
        let tmp2;
        if (null != outer1_23[arg0]) {
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
        if (null != outer1_23[arg0]) {
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
        if (null != outer1_23[arg0]) {
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
        if (null != outer1_23[arg0]) {
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
        if (null != outer1_23[arg0]) {
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
        if (null != outer1_23[arg0]) {
          maxViewers = obj.getMaxViewers();
        }
        return maxViewers;
      }
    }
  };
  items[11] = {
    key: "getStreamSourceId",
    value(arg0) {
      return outer1_19[arg0];
    }
  };
  items[12] = {
    key: "getLastNonZeroRemoteVideoSinkWantsTime",
    value(arg0) {
      return outer1_21[arg0];
    }
  };
  items[13] = {
    key: "getUserIds",
    value(arg0) {
      let userIds;
      if (null != outer1_23[arg0]) {
        userIds = obj.getUserIds();
      }
      return userIds;
    }
  };
  items[14] = {
    key: "isUserConnected",
    value(arg0, arg1) {
      let isUserConnected;
      if (null != outer1_23[arg0]) {
        isUserConnected = obj.getIsUserConnected(arg1);
      }
      return isUserConnected;
    }
  };
  items[15] = {
    key: "getSecureFramesState",
    value(arg0) {
      let secureFramesState;
      if (null != outer1_23[arg0]) {
        secureFramesState = obj.getSecureFramesState();
      }
      return secureFramesState;
    }
  };
  items[16] = {
    key: "getSecureFramesRosterMapEntry",
    value(arg0, arg1) {
      let secureFramesRosterMap;
      if (null != outer1_23[arg0]) {
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
})(require("initialize").Store);
tmp3.displayName = "StreamRTCConnectionStore";
if (importDefaultResult.isSupported()) {
  let obj = {
    CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
        sessionId = sessionId.sessionId;
        destroyStreamRTCConnections();
      },
    CONNECTION_CLOSED: function handleConnectionClosed() {
        let c3 = null;
        destroyStreamRTCConnections();
      },
    RTC_CONNECTION_STATE: handleRtcAction,
    RTC_CONNECTION_PING: handleRtcAction,
    RTC_CONNECTION_LOSS_RATE: handleRtcAction,
    RTC_CONNECTION_UPDATE_ID: function handleRtcConnectionUpdateId(arg0) {
        let closure_0 = arg0;
        return importDefault(22).some(closure_23, (arg0) => arg0 === connection.connection);
      },
    RTC_CONNECTION_SECURE_FRAMES_UPDATE: handleRtcAction,
    RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: function handleRtcConnectionRemoteVideoSinkWants(guildId) {
        let channelId;
        let context;
        let userId;
        let wants;
        guildId = guildId.guildId;
        ({ context, wants, userId, channelId } = guildId);
        let obj = require(4194) /* isStreamKey */;
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
        let tmp4 = context === require(4227) /* getMediaEngineImpl */.MediaEngineContextTypes.STREAM;
        if (tmp4) {
          tmp4 = null != dependencyMap4[encodeStreamKeyResult];
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
        let importDefault;
        let pid;
        let sourceId;
        let sourcePid;
        let streamType;
        appContext = appContext.appContext;
        ({ pid, nativePickerStyleUsed: importDefault, goLiveModalDurationMs } = appContext);
        ({ streamType, guildId, channelId, sourceId, sourcePid, analyticsLocations } = appContext);
        let obj = appContext(4194);
        obj = { streamType, guildId, channelId, ownerId: id.getId() };
        const encodeStreamKeyResult = obj.encodeStreamKey(obj);
        closure_16[encodeStreamKeyResult] = { appContext, analyticsLocations };
        const item = importDefault(22).forEach(dependencyMap4, (analyticsContext) => {
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
          gameForPID = gameForPID.getGameForPID(pid);
          if (null != gameForPID) {
            obj = {};
            ({ name: obj3.name, id: obj3.id, exeName: obj3.exe, distributor: obj3.distributor, sku: obj3.sku, gameMetadata: obj3.gameMetadata } = gameForPID);
            dependencyMap2[encodeStreamKeyResult] = obj;
          }
          if (null != dependencyMap4[encodeStreamKeyResult]) {
            let analyticsContext = tmp11.analyticsContext;
            let result = analyticsContext.updateStreamApplication(dependencyMap2[encodeStreamKeyResult]);
          }
        } else if (null != dependencyMap4[encodeStreamKeyResult]) {
          const analyticsContext2 = tmp6.analyticsContext;
          const result1 = analyticsContext2.updateStreamApplication(null);
        }
        if (null != goLiveModalDurationMs) {
          closure_20[encodeStreamKeyResult] = goLiveModalDurationMs;
        } else {
          delete tmp2[tmp];
        }
      },
    STREAM_STOP: function handleStreamStop(appContext) {
        appContext = appContext.appContext;
        const streamKey = appContext.streamKey;
        closure_16[streamKey] = { appContext, analyticsLocations: undefined };
        const item = importDefault(22).forEach(closure_23, (analyticsContext) => {
          analyticsContext = analyticsContext.analyticsContext;
          analyticsContext.setActionContext(appContext);
          if (analyticsContext.isOwner) {
            analyticsContext.trackEnd();
          }
        });
        closure_19[streamKey] = null;
        closure_18[streamKey] = null;
        delete tmp[tmp2];
      },
    STREAM_CREATE: function handleStreamCreate(arg0) {
        let region;
        let rtcChannelId;
        let rtcServerId;
        let streamKey;
        let viewerIds;
        ({ streamKey, rtcServerId, viewerIds } = arg0);
        let obj = dependencyMap4[streamKey];
        ({ rtcChannelId, region } = arg0);
        let obj1 = require(4194) /* isStreamKey */;
        let tmp4 = null == obj;
        if (tmp4) {
          tmp4 = null != rtcServerId;
        }
        if (tmp4) {
          if (null == table[streamKey]) {
            dependencyMap2[streamKey] = null;
          }
          let tmp8 = null == dependencyMap2[streamKey];
          if (tmp8) {
            tmp8 = null == dependencyMap3[streamKey];
          }
          if (tmp8) {
            dependencyMap2[streamKey] = require(6980) /* _findPlayingActivity */.getStreamerApplication(decodeStreamKeyResult, closure_12);
            const obj3 = require(6980) /* _findPlayingActivity */;
          }
          const StreamRTCAnalyticsContext = require(4219) /* _isNativeReflectConstruct */.StreamRTCAnalyticsContext;
          obj = { streamRegion: region, streamApplication: dependencyMap2[streamKey], streamSourceType: parseSourceType(dependencyMap3[streamKey]) };
          let appContext;
          if (null != dependencyMap[streamKey]) {
            appContext = tmp20.appContext;
          }
          obj.actionContext = appContext;
          let num3 = 0;
          if (null != viewerIds) {
            num3 = viewerIds.length;
          }
          obj.numViewers = num3;
          obj.goLiveModalDurationMs = table2[streamKey];
          let analyticsLocations;
          if (null != dependencyMap[streamKey]) {
            analyticsLocations = tmp24.analyticsLocations;
          }
          obj.analyticsLocations = analyticsLocations;
          const prototype = StreamRTCAnalyticsContext.prototype;
          const streamRTCAnalyticsContext = new StreamRTCAnalyticsContext(obj);
          importDefault(44)(null != closure_3, "Creating RTCConnection without session.");
          let tmp35 = importDefault(4219);
          obj = { sessionId: closure_3, streamKey, serverId: rtcServerId, channelId: rtcChannelId, initialLayout: PORTRAIT, analyticsContext: streamRTCAnalyticsContext, parentMediaSessionId: mediaSessionId.getMediaSessionId() };
          const prototype2 = tmp35.prototype;
          tmp35 = new tmp35(obj);
          dependencyMap4[streamKey] = tmp35;
          obj = tmp35;
        }
        delete tmp[tmp2];
        decodeStreamKeyResult = obj1.decodeStreamKey(streamKey);
        obj1 = { type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET", mediaEngineConnectionId: obj.getMediaEngineConnectionId() };
        importDefault(686).dispatch(obj1);
      },
    STREAM_SERVER_UPDATE: function handleStreamServerUpdate(endpoint) {
        if (null == dependencyMap4[endpoint.streamKey]) {
          return false;
        } else {
          obj.connect(endpoint.endpoint, endpoint.token);
        }
      },
    STREAM_UPDATE: function handleStreamUpdate(viewerIds) {
        viewerIds = viewerIds.viewerIds;
        if (null == dependencyMap4[viewerIds.streamKey]) {
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
        let obj = dependencyMap4[arg0.streamKey];
        if (null == obj) {
          return false;
        } else {
          obj = { type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET" };
          obj.mediaEngineConnectionId = obj.getMediaEngineConnectionId();
          importDefault(686).dispatch(obj);
          obj.destroy("stream-end");
          delete tmp[tmp2];
        }
      },
    STREAM_LAYOUT_UPDATE: function handleLayoutUpdate(layout) {
        layout = layout.layout;
        const values = Object.values(closure_23);
        const item = values.forEach((layoutChange) => layoutChange.layoutChange(layout));
      },
    VIDEO_SIZE_UPDATE: function handleVideoSizeUpdate(arg0) {
        let dependencyMap;
        let importDefault;
        let require;
        ({ streamId: require, dimensions: importDefault, zoom: dependencyMap } = arg0);
        const item = importDefault(22).forEach(closure_23, (setVideoSize) => {
          if (null != setVideoSize) {
            setVideoSize.setVideoSize(closure_0, closure_1, closure_2);
          }
        });
      }
  };
} else {
  obj = {};
}
tmp3 = new tmp3(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/StreamRTCConnectionStore.tsx");

export default tmp3;
