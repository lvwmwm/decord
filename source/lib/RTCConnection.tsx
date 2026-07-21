// Module ID: 4200
// Function ID: 36219
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 4200 (_createForOfIteratorHelperLoose)
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getEventHistoryString() {
  let length;
  const items = [];
  arg1(dependencyMap[22]);
  let num = 0;
  if (0 < length.length) {
    do {
      let tmp3 = arr2[num];
      let obj = {};
      let tmp4 = obj;
      let tmp5 = tmp3;
      let merged = Object.assign(tmp3);
      obj["t"] = tmp2 - tmp3.t;
      let arr = items.push(obj);
      num = num + 1;
      length = arr2.length;
    } while (num < length);
  }
  return JSON.stringify(items);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
let closure_15 = importDefault(dependencyMap[11]);
let closure_16 = importDefault(dependencyMap[12]);
let closure_17 = importDefault(dependencyMap[13]);
let closure_18 = importDefault(dependencyMap[14]);
let closure_19 = importDefault(dependencyMap[15]);
let closure_20 = importDefault(dependencyMap[16]);
let closure_21 = importDefault(dependencyMap[17]);
({ AnalyticEvents: closure_22, ChannelTypes: closure_23, RTCConnectionStates: closure_24, RTCConnectionQuality: closure_25, BoostedGuildTiers: closure_26 } = arg1(dependencyMap[18]));
const PremiumTypes = arg1(dependencyMap[19]).PremiumTypes;
let closure_28 = arg1(dependencyMap[20]).BROWSER_SUPPORTS_UNIFIED_PLAN;
const tmp2 = arg1(dependencyMap[18]);
({ Features: closure_29, MediaEngineContextTypes: closure_30, ConnectionStates: closure_31, Codecs: closure_32, MediaTypes: closure_33, SpeakingFlags: closure_34, DISABLED_DEVICE_ID: closure_35 } = arg1(dependencyMap[21]));
let str = "ws:";
if (obj.test("https:")) {
  str = "wss:";
}
let closure_37 = { CONNECTION_CREATE: 0, [0]: "CONNECTION_CREATE", CONNECTION_DESTROY: 1, [1]: "CONNECTION_DESTROY", CONNECT: 2, [2]: "CONNECT", MLS_FAILURE: 3, [3]: "MLS_FAILURE", MESSAGE_RECEIVE: 4, [4]: "MESSAGE_RECEIVE", MESSAGE_SEND: 5, [5]: "MESSAGE_SEND", SET_ENDPOINT: 6, [6]: "SET_ENDPOINT", RECONNECT: 7, [7]: "RECONNECT", SET_STATE: 8, [8]: "SET_STATE", SET_NEXT_CHANNEL_ID: 9, [9]: "SET_NEXT_CHANNEL_ID", MLS_INIT: 10, [10]: "MLS_INIT", SECURE_FRAMES_INIT: 11, [11]: "SECURE_FRAMES_INIT" };
let closure_38 = 0;
let closure_39 = [];
const obj = /^https/;
const tmp3 = arg1(dependencyMap[21]);
const tmp4 = (arg0) => {
  class RTCConnection {
    constructor(arg0) {
      self = this;
      ({ userId, channelId, context } = arg0);
      ({ sessionId, guildId } = arg0);
      if (context === undefined) {
        tmp = closure_30;
        context = closure_30.DEFAULT;
      }
      RTCConnection = undefined;
      ({ streamServerId, streamChannelId, parentMediaSessionId, joinVoiceId } = arg0);
      tmp2 = closure_5(self, RTCConnection);
      obj = closure_8(RTCConnection);
      tmp3 = closure_7;
      if (closure_42()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = closure_8;
        constructResult = Reflect.construct(obj, [], closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp3Result = tmp3(self, constructResult);
      RTCConnection = tmp3Result;
      map = new Map();
      tmp3Result._secureFramesRosterMap = map;
      tmp3Result.reconnecting = false;
      tmp3Result._nextFailureId = 0;
      tmp3Result._mlsFailures = [];
      map1 = new Map();
      tmp3Result._secureFramesTransitionStates = map1;
      tmp3Result._secureFramesMaxConcurrentTransitions = 0;
      tmp3Result._secureFramesTransitionPrepareCount = 0;
      tmp3Result._secureFramesTransitionExecuteCount = 0;
      tmp3Result._numNoiseCancellationChanges = 0;
      tmp3Result.reconnect = () => {
        tmp3Result.recordEvent({ c: constants3.RECONNECT });
        const _socket = tmp3Result._socket;
        if (null != _socket) {
          if (tmp3Result._hasEverConnected) {
            tmp3Result._connectStartTime = tmp3Result(closure_3[22]).now();
            const obj2 = tmp3Result(closure_3[22]);
          }
          if (!tmp3Result._connecting) {
            const result = tmp3Result._trackVoiceConnectionConnecting();
            tmp3Result._connecting = true;
            tmp3Result._encountered_socket_failure = false;
            tmp3Result._voiceConnectionSuccessTracked = false;
          }
          tmp3Result._connectCount = tmp3Result._connectCount + 1;
          tmp3Result.reconnecting = true;
          _socket.close();
          _socket.connect();
        }
      };
      tmp3Result._alertMLSFailureDebouced = closure_1(closure_3[23])(tmp3Result._alertMLSFailure, 100);
      tmp3Result._handleNetworkOnline = () => {
        tmp3Result.expeditedHeartbeat(5000, "network detected online.");
      };
      tmp3Result._handleNetworkOffline = () => {
        tmp3Result.expeditedHeartbeat(15000, "network detected offline.", false);
      };
      tmp3Result._handleNoRoute = () => {
        const _socket = tmp3Result._socket;
        if (null != _socket) {
          _socket.noRoute();
        }
      };
      tmp3Result._handlePowerResume = () => {
        tmp3Result.expeditedHeartbeat(5000, "power monitor resumed");
      };
      tmp3Result._handleVoiceQualityPeriodicsStats = () => {
        let done;
        if (null != tmp3Result._voiceQuality) {
          const _voiceQuality = tmp3Result._voiceQuality;
          const periodicStats = _voiceQuality.getPeriodicStats();
          if (tmp3Result.shouldReportPeriodicStats(periodicStats)) {
            const tmp2 = callback2(periodicStats);
            let iter = tmp2();
            if (!iter.done) {
              do {
                let value = iter.value;
                let tmp4 = closure_1;
                let tmp5 = closure_3;
                let obj = closure_1(closure_3[24]);
                let tmp6 = closure_22;
                obj = {};
                let tmp7 = closure_0;
                let tmp8 = obj;
                let merged = Object.assign(closure_0._getAnalyticsProperties());
                let tmp10 = closure_0;
                obj["media_session_id"] = closure_0.getMediaSessionId();
                obj["sender_user_id"] = value.userId;
                let tmp11 = closure_0;
                obj["hostname"] = closure_0.hostname;
                obj["frame_op_silent"] = value.silent;
                obj["frame_op_normal"] = value.normal;
                obj["frame_op_merged"] = value.merged;
                obj["frame_op_expanded"] = value.expanded;
                obj["frame_op_accelerated"] = value.accelerated;
                obj["frame_op_preemptive_expanded"] = value.preemptiveExpanded;
                obj["frame_op_cng"] = value.cng;
                obj["accelerate_rate"] = value.accelerateRate;
                obj["expand_rate"] = value.expandRate;
                obj["preemptive_expand_rate"] = value.preemptiveExpandRate;
                obj["speech_expand_rate"] = value.speechExpandRate;
                obj["duration_ms"] = value.durationMs;
                let tmp12 = closure_0;
                obj["sequence_id"] = closure_0._voiceQualityPeriodicStatsSequenceId;
                let tmp13 = closure_0;
                obj["input_device"] = closure_0.getInputDeviceName();
                let tmp14 = closure_0;
                obj["output_device"] = closure_0.getOutputDeviceName();
                let _Math = Math;
                let tmp15 = closure_0;
                obj["ping_average"] = Math.round(closure_0.getAveragePing());
                let tmp16 = closure_0;
                obj["ping_bad_count"] = closure_0._pingBadCount;
                let tmp17 = closure_0;
                obj["parent_media_session_id"] = closure_0.parentMediaSessionId;
                let trackResult = obj.track(closure_22.VOICE_QUALITY_PERIODIC_STATS, obj);
                let iter2 = tmp2();
                iter = iter2;
                done = iter2.done;
              } while (!done);
            }
          }
          tmp3Result._voiceQualityPeriodicStatsSequenceId = tmp3Result._voiceQualityPeriodicStatsSequenceId + 1;
        }
      };
      tmp3Result.getAudioDeviceStates = () => ({ input_device: tmp3Result.getInputDeviceName(), input_device_count: Object.keys(store.getInputDevices()).length, output_device: tmp3Result.getOutputDeviceName(), output_device_count: Object.keys(store.getOutputDevices()).length });
      tmp3Result.getVideoDeviceStates = () => ({ camera_device: tmp3Result.getVideoDeviceName(), camera_device_count: Object.keys(store.getVideoDevices()).length });
      tmp3Result._trackVoiceConnectionConnecting = () => {
        const channel = channel.getChannel(tmp3Result.channelId);
        let type;
        if (null != channel) {
          type = channel.type;
        }
        let obj = callback(closure_3[24]);
        obj = {};
        const merged = Object.assign(tmp3Result.getAudioDeviceStates());
        const merged1 = Object.assign(tmp3Result.getVideoDeviceStates());
        obj["guild_id"] = tmp3Result.guildId;
        obj["channel_id"] = tmp3Result.channelId;
        obj["rtc_connection_id"] = tmp3Result.getRTCConnectionId();
        obj["hostname"] = tmp3Result.hostname;
        obj["connect_count"] = tmp3Result._connectCount;
        obj["context"] = tmp3Result.context;
        obj["channel_type"] = type;
        obj["participant_type"] = tmp3Result.getVoiceParticipantType();
        obj["is_muted"] = store.isMute();
        obj["join_voice_id"] = tmp3Result.joinVoiceId;
        obj["connection_serial"] = tmp3Result._connectionSerial;
        obj.track(constants.VOICE_CONNECTION_CONNECTING, obj);
      };
      tmp3Result.incomingVideoEnabledChanged = (arg0) => {
        const _goLiveQualityManager = tmp3Result._goLiveQualityManager;
        if (null != _goLiveQualityManager) {
          const result = _goLiveQualityManager.onIncomingVideoEnabled(arg0);
        }
        const _videoQuality = tmp3Result._videoQuality;
        if (null != _videoQuality) {
          const result1 = _videoQuality.setOcclusionIncomingVideoEnabled(arg0);
        }
      };
      tmp3Result.windowVisibilityChanged = (arg0) => {
        const _videoQuality = tmp3Result._videoQuality;
        if (null != _videoQuality) {
          const result = _videoQuality.setWindowOcclusionState(!arg0);
        }
      };
      tmp3Result.context = context;
      obj = { c: closure_37.CONNECTION_CREATE };
      recordEventResult = tmp3Result.recordEvent(obj);
      asyncResources = closure_17.fetchAsyncResources();
      tmp3Result._fetchAsyncResourcesPromise = asyncResources.catch((arg0) => {
        callback(closure_3[25]).captureException(arg0);
      });
      tmp3Result.userId = userId;
      tmp3Result.sessionId = sessionId;
      tmp3Result.guildId = guildId;
      tmp3Result._channelId = channelId;
      items = [];
      items[0] = channelId;
      set = new Set(items);
      tmp3Result.channelIds = set;
      tmp3Result.streamServerId = streamServerId;
      tmp3Result.streamChannelId = streamChannelId;
      tmp3Result.parentMediaSessionId = parentMediaSessionId;
      tmp3Result.joinVoiceId = joinVoiceId;
      tmp11 = +parentMediaSessionId;
      parentMediaSessionId = tmp11 + 1;
      tmp3Result._connectionSerial = tmp11;
      tmp12 = closure_1(closure_3[26]);
      tmp12 = new tmp12("RTCConnection(" + tmp3Result.trueServerId + ", " + tmp3Result.context + ")");
      tmp3Result.logger = tmp12;
      logger = tmp3Result.logger;
      enableNativeLoggerResult = logger.enableNativeLogger(true);
      tmp3Result._endpoint = null;
      tmp3Result.hostname = null;
      tmp3Result.port = null;
      tmp3Result.token = null;
      tmp3Result.voiceVersion = null;
      tmp3Result.rtcWorkerVersion = null;
      tmp3Result.state = closure_24.AWAITING_ENDPOINT;
      stateHistory = new RTCConnection(closure_3[27]).StateHistory(tmp3Result.state);
      tmp3Result.stateHistory = stateHistory;
      tmp3Result._socket = null;
      tmp16 = closure_1(closure_3[28]);
      tmp16 = new tmp16(1000, 10000);
      tmp3Result._backoff = tmp16;
      tmp3Result._destroyed = false;
      tmp3Result._pings = [];
      tmp3Result._pingBadCount = 0;
      tmp3Result._pingTimeouts = [];
      tmp3Result._mediaSessionId = null;
      tmp3Result._voiceQuality = null;
      tmp3Result._voiceQualityPeriodicStatsInterval = null;
      tmp3Result._voiceQualityPeriodicStatsSequenceId = 0;
      tmp3Result._systemResponsiveness = null;
      tmp3Result._noiseCancellationError = 0;
      tmp3Result._voiceDuration = null;
      tmp3Result._videoQuality = null;
      tmp3Result._videoHealthManager = null;
      tmp3Result._sentVideo = false;
      tmp3Result._videoDecoderFallbackSuppressed = false;
      tmp3Result._outboundLossRate = null;
      obj4 = RTCConnection(closure_3[22]);
      tmp3Result._createdTime = obj4.now();
      tmp3Result._connectStartTime = 0;
      tmp3Result._connectCompletedTime = 0;
      obj5 = RTCConnection(closure_3[29]);
      tmp3Result._rtcConnectionId = obj5.v4();
      tmp3Result._connectCount = 0;
      tmp3Result._hasEverConnected = false;
      tmp3Result._connecting = false;
      tmp3Result._voiceConnectionSuccessTracked = false;
      tmp3Result._hasCodecs = false;
      tmp3Result._mediaEngineConnectDuration = 0;
      tmp3Result._encountered_socket_failure = false;
      tmp3Result._inputDetected = false;
      tmp3Result._selectedExperiments = [];
      tmp3Result._secureFramesState = null;
      items1 = [];
      items1[0] = userId;
      set1 = new Set(items1);
      tmp3Result._userIds = set1;
      _secureFramesRosterMap = tmp3Result._secureFramesRosterMap;
      clearResult = _secureFramesRosterMap.clear();
      tmp3Result._mlsFailures = [];
      tmp3Result._nextFailureId = 0;
      tmp3Result._mediaEngineConnectionId = null;
      tmp3Result.reconnecting = false;
      tmp3Result._lastSentSpeakingStatus = 0;
      tmp3Result._lastSentSSRC = undefined;
      supportsResult = closure_17.supports(closure_29.FIRST_FRAME_CALLBACK);
      if (supportsResult) {
        tmp21 = closure_17;
        tmp22 = closure_29;
        supportsResult = closure_17.supports(closure_29.REMOTE_USER_MULTI_STREAM);
      }
      if (closure_30.DEFAULT === context) {
        tmp23 = closure_15;
        channel = closure_15.getChannel(tmp3Result.channelId);
        type = undefined;
        if (null != channel) {
          type = channel.type;
        }
        tmp26 = closure_23;
        tmp27 = closure_1;
        tmp28 = closure_3;
        num = 30;
        tmp29 = closure_1(closure_3[30]);
        prototype = tmp29.prototype;
        tmp30 = new.target;
        tmp31 = new.target;
        tmp32 = userId;
        tmp33 = supportsResult;
        tmp29 = new tmp29(userId, type === closure_23.GUILD_STAGE_VOICE, supportsResult);
        tmp35 = tmp29;
        tmp3Result._localMediaSinkWantsManager = tmp29;
        _localMediaSinkWantsManager = tmp3Result._localMediaSinkWantsManager;
        tmp36 = RTCConnection;
        onResult = _localMediaSinkWantsManager.on(RTCConnection(closure_3[30]).RTCMediaSinkWantsManagerEvent.Update, (arg0) => {
          let tmp = tmp3Result.state === constants2.RTC_CONNECTED;
          if (tmp) {
            tmp = null != tmp3Result._socket;
          }
          if (tmp) {
            const logger = tmp3Result.logger;
            const _JSON = JSON;
            const _HermesInternal = HermesInternal;
            logger.info("Media sink wants: " + JSON.stringify(arg0));
            const _socket = tmp3Result._socket;
            _socket.mediaSinkWants(arg0);
            const _connection = tmp3Result._connection;
            if (null != _connection) {
              const result = _connection.setLocalVideoSinkWants(arg0);
            }
          }
        });
        _localMediaSinkWantsManager2 = tmp3Result._localMediaSinkWantsManager;
        onResult1 = _localMediaSinkWantsManager2.on(RTCConnection(closure_3[30]).RTCMediaSinkWantsManagerEvent.UserSSRCUpdate, (arg0, arg1, arg2) => {
          const _connection = tmp3Result._connection;
          if (null != _connection) {
            const user = _connection.createUser(arg0, arg1, arg2);
          }
        });
      } else {
        tmp49 = closure_30;
        if (closure_30.STREAM === context) {
          tmp50 = closure_1;
          tmp51 = closure_3;
          num4 = 31;
          tmp52 = closure_1(closure_3[31]);
          prototype2 = tmp52.prototype;
          tmp53 = new.target;
          tmp54 = new.target;
          tmp52 = new tmp52();
          tmp56 = tmp52;
          tmp3Result._goLiveQualityManager = tmp52;
          _goLiveQualityManager = tmp3Result._goLiveQualityManager;
          tmp57 = RTCConnection;
          onResult2 = _goLiveQualityManager.on(RTCConnection(closure_3[31]).GoLiveQualityManagerEvent.RequestedSSRCsUpdate, (arg0, arg1, arg2) => {
            const _connection = tmp3Result._connection;
            if (null != _connection) {
              const user = _connection.createUser(arg0, arg1, arg2);
            }
          });
          _goLiveQualityManager2 = tmp3Result._goLiveQualityManager;
          onResult3 = _goLiveQualityManager2.on(RTCConnection(closure_3[31]).GoLiveQualityManagerEvent.RequestedStreamsUpdate, (arg0) => {
            let tmp = tmp3Result.state === constants2.RTC_CONNECTED;
            if (tmp) {
              tmp = null != tmp3Result._socket;
            }
            if (tmp) {
              const logger = tmp3Result.logger;
              const _JSON = JSON;
              const _HermesInternal = HermesInternal;
              logger.info("Go Live Media sink wants: " + JSON.stringify(arg0));
              const _socket = tmp3Result._socket;
              _socket.mediaSinkWants(arg0);
              const _connection = tmp3Result._connection;
              if (null != _connection) {
                const result = _connection.setLocalVideoSinkWants(arg0);
              }
            }
          });
        }
      }
      tmp3Result._remoteVideoSinkWants = RTCConnection(closure_3[30]).DEFAULT_WANTS_FULL;
      WindowVisibilityVideoManager = RTCConnection(closure_3[32]).WindowVisibilityVideoManager;
      onResult4 = WindowVisibilityVideoManager.on(RTCConnection(closure_3[32]).WindowVisibilityEvent.IncomingVideoEnabledChanged, tmp3Result.incomingVideoEnabledChanged);
      WindowVisibilityVideoManager2 = RTCConnection(closure_3[32]).WindowVisibilityVideoManager;
      onResult5 = WindowVisibilityVideoManager2.on(RTCConnection(closure_3[32]).WindowVisibilityEvent.WindowVisibilityChanged, tmp3Result.windowVisibilityChanged);
      if (closure_19.shouldRecordNextConnection()) {
        tmp3Result._recordingEnabled = true;
        tmp41 = closure_2;
        tmp42 = closure_3;
        num2 = 33;
        obj6 = closure_2(closure_3[33]);
        result = obj6.setShouldRecordNextConnection(false);
      } else {
        tmp3Result._recordingEnabled = false;
      }
      obj7 = closure_1(closure_3[34]);
      addOnlineCallbackResult = obj7.addOnlineCallback(tmp3Result._handleNetworkOnline);
      obj8 = closure_1(closure_3[34]);
      addOfflineCallbackResult = obj8.addOfflineCallback(tmp3Result._handleNetworkOffline);
      obj9 = RTCConnection(closure_3[35]);
      if (obj9.isDesktop()) {
        tmp46 = closure_1;
        tmp47 = closure_3;
        num3 = 36;
        powerMonitor = closure_1(closure_3[36]).powerMonitor;
        str = "resume";
        tmp3Result.powerMonitorListener = powerMonitor.on("resume", tmp3Result._handlePowerResume);
      }
      tmp3Result._supportedBandwidthEstimationExperiments = [];
      tmp3Result._bandwidthEstimationExperiment = null;
      mediaEngine = closure_17.getMediaEngine();
      supportedBandwidthEstimationExperiments = mediaEngine.getSupportedBandwidthEstimationExperiments((_supportedBandwidthEstimationExperiments) => {
        tmp3Result._supportedBandwidthEstimationExperiments = _supportedBandwidthEstimationExperiments;
      });
      return tmp3Result;
    }
  }
  const arg1 = RTCConnection;
  callback2(RTCConnection, arg0);
  let obj = {
    key: "recordEvent",
    value(arg0) {
      let length;
      const obj = {};
      const merged = Object.assign(arg0);
      obj["t"] = RTCConnection(closure_3[22]).now();
      obj["n"] = this._connectionSerial;
      let arr = arr.push(obj);
      if (arr.length > 50) {
        do {
          let tmp3 = closure_39;
          arr = closure_39.shift();
          let tmp5 = closure_39;
          length = closure_39.length;
        } while (length > 50);
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "quality",
    get() {
      const self = this;
      const lastPing = this.getLastPing();
      if (this.state === constants3.RTC_CONNECTED) {
        if (undefined !== lastPing) {
          if (lastPing <= 500) {
            if (lastPing > 250) {
              let UNKNOWN = constants4.AVERAGE;
            } else {
              UNKNOWN = constants4.FINE;
            }
          }
          UNKNOWN = constants4.BAD;
        }
        return UNKNOWN;
      }
      UNKNOWN = constants4.UNKNOWN;
    }
  };
  items[1] = obj;
  obj = {
    key: "endpoint",
    get() {
      return this._endpoint;
    },
    set(arg0) {
      let hostname;
      let port;
      const self = this;
      this.recordEvent({ c: constants9.SET_ENDPOINT, e: null != arg0 });
      if (null == arg0) {
        self._endpoint = null;
        self.hostname = null;
      } else {
        const _HermesInternal2 = HermesInternal;
        let combined = "" + closure_36 + "//" + arg0;
        let toURLSafeResult = callback(closure_3[37]).toURLSafe(combined);
        if (null == toURLSafeResult) {
          toURLSafeResult = {};
        }
        ({ hostname, port } = toURLSafeResult);
        if (null != port) {
          const _parseInt = parseInt;
          let _NaN = parseInt(port);
        } else {
          _NaN = NaN;
        }
        let tmp2 = null == hostname;
        if (!tmp2) {
          let tmp3 = 80 !== _NaN;
          if (tmp3) {
            tmp3 = 443 !== _NaN;
          }
          tmp2 = tmp3;
        }
        if (!tmp2) {
          const _HermesInternal = HermesInternal;
          combined = "" + closure_36 + "//" + hostname;
        }
        self._endpoint = `${tmp5}/`;
        self.hostname = hostname;
        const obj3 = callback(closure_3[37]);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "connect",
    value(endpoint, token) {
      const self = this;
      if (this._destroyed) {
        const _Error = Error;
        const error = new Error("RTCConnection.connect(...): Attempting to connect on destroyed instance.");
        throw error;
      } else {
        let obj = { c: constants9.CONNECT, e: null != endpoint, h: null != token };
        self.recordEvent(obj);
        const _backoff = self._backoff;
        _backoff.cancel();
        endpoint = self.endpoint;
        self.endpoint = endpoint;
        self.token = token;
        if (!tmp5) {
          self._cleanupSocket();
          self._mediaSessionId = null;
          if (null != endpoint) {
            self._rtcConnectionId = RTCConnection(closure_3[29]).v4();
            const obj2 = RTCConnection(closure_3[29]);
            obj = { type: "RTC_CONNECTION_UPDATE_ID", connection: self };
            callback(closure_3[38]).dispatch(obj);
            const obj3 = callback(closure_3[38]);
          }
        }
        if (null != self.endpoint) {
          if (null != self._socket) {
            self._cleanupSocket();
          }
          if (null != self._nextChannelId) {
            self._channelId = self._nextChannelId;
            self._nextChannelId = undefined;
          }
          let tmp16 = callback(closure_3[39]);
          const prototype = tmp16.prototype;
          tmp16 = new tmp16(self.endpoint, self.context);
          self._socket = tmp16;
          const _handleConnecting = self._handleConnecting;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.Connecting, _handleConnecting.bind(self, tmp16));
          const _handleConnect = self._handleConnect;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.Connect, _handleConnect.bind(self, tmp16));
          const _handleDisconnect = self._handleDisconnect;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.Disconnect, _handleDisconnect.bind(self, tmp16));
          const _handleResuming = self._handleResuming;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.Resuming, _handleResuming.bind(self, tmp16));
          const _handleReady = self._handleReady;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.Ready, _handleReady.bind(self, tmp16));
          const _handleSpeaking = self._handleSpeaking;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.Speaking, _handleSpeaking.bind(self, tmp16));
          const _handleVideo = self._handleVideo;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.Video, _handleVideo.bind(self, tmp16));
          const _handleControlPing = self._handleControlPing;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.Ping, _handleControlPing.bind(self));
          const _handleClientDisconnect = self._handleClientDisconnect;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.ClientDisconnect, _handleClientDisconnect.bind(self));
          const _handleClientConnect = self._handleClientConnect;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.ClientConnect, _handleClientConnect.bind(self));
          const _handleCodecs = self._handleCodecs;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.Codecs, _handleCodecs.bind(self));
          const _handleMediaSessionId = self._handleMediaSessionId;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.MediaSessionId, _handleMediaSessionId.bind(self));
          const _handleMediaSinkWants = self._handleMediaSinkWants;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.MediaSinkWants, _handleMediaSinkWants.bind(self));
          const _handleCodeVersion = self._handleCodeVersion;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.VoiceBackendVersion, _handleCodeVersion.bind(self));
          const _handleKeyframeInterval = self._handleKeyframeInterval;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.KeyframeInterval, _handleKeyframeInterval.bind(self));
          const handleFlags = self.handleFlags;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.Flags, handleFlags.bind(self));
          const handlePlatform = self.handlePlatform;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.Platform, handlePlatform.bind(self));
          const _handleBandwidthEstimationExperiment = self._handleBandwidthEstimationExperiment;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.BandwidthEstimationExperiment, _handleBandwidthEstimationExperiment.bind(self));
          const _handleSecureFramesInit = self._handleSecureFramesInit;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.SecureFramesInit, _handleSecureFramesInit.bind(self));
          const _handleSecureFramesPrepareTransition = self._handleSecureFramesPrepareTransition;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.SecureFramesPrepareTransition, _handleSecureFramesPrepareTransition.bind(self));
          const _handleSecureFramesPrepareEpoch = self._handleSecureFramesPrepareEpoch;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.SecureFramesPrepareEpoch, _handleSecureFramesPrepareEpoch.bind(self));
          const _handleSecureFramesExecuteTransition = self._handleSecureFramesExecuteTransition;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.SecureFramesExecuteTransition, _handleSecureFramesExecuteTransition.bind(self));
          const _handleMLSExternalSenderPackage = self._handleMLSExternalSenderPackage;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.MLSExternalSenderPackage, _handleMLSExternalSenderPackage.bind(self));
          const _handleMLSProposals = self._handleMLSProposals;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.MLSProposals, _handleMLSProposals.bind(self, tmp16));
          const _handleMLSPrepareCommitTransition = self._handleMLSPrepareCommitTransition;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.MLSPrepareCommitTransition, _handleMLSPrepareCommitTransition.bind(self));
          const _handleMLSWelcome = self._handleMLSWelcome;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.MLSWelcome, _handleMLSWelcome.bind(self));
          const _recordMessageEvent = self._recordMessageEvent;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.ReceiveMessage, _recordMessageEvent.bind(self, constants9.MESSAGE_RECEIVE));
          const _recordMessageEvent2 = self._recordMessageEvent;
          tmp16.on(RTCConnection(closure_3[39]).SocketEvent.SendMessage, _recordMessageEvent2.bind(self, constants9.MESSAGE_SEND));
          self._connectStartTime = RTCConnection(closure_3[22]).now();
          self._connectCount = self._connectCount + 1;
          self._connecting = true;
          self._voiceConnectionSuccessTracked = false;
          if (tmp51) {
            const result = self._trackVoiceConnectionConnecting();
            self._encountered_socket_failure = false;
            tmp16.connect();
          }
          const obj6 = RTCConnection(closure_3[22]);
          const tmp51 = null != tmp16 && self._socket === tmp16;
        } else {
          self.setState(constants3.AWAITING_ENDPOINT);
        }
      }
    }
  };
  items[4] = {
    key: "_recordMessageEvent",
    value(arg0, o) {
      this.recordEvent({ c: arg0, o });
    }
  };
  items[5] = {
    key: "destroy",
    value() {
      const self = this;
      const logger = this.logger;
      logger.info("Destroy RTCConnection");
      let obj = callback(closure_3[34]);
      obj.removeOnlineCallback(this._handleNetworkOnline);
      const result = callback(closure_3[34]).removeOfflineCallback(this._handleNetworkOffline);
      const obj2 = callback(closure_3[34]);
      if (obj3.isDesktop()) {
        const powerMonitorListener = self.powerMonitorListener;
        if (null != powerMonitorListener) {
          powerMonitorListener.call(self);
        }
      }
      obj = { c: constants9.CONNECTION_DESTROY };
      self.recordEvent(obj);
      const WindowVisibilityVideoManager = RTCConnection(closure_3[32]).WindowVisibilityVideoManager;
      WindowVisibilityVideoManager.off(RTCConnection(closure_3[32]).WindowVisibilityEvent.IncomingVideoEnabledChanged, self.incomingVideoEnabledChanged);
      const WindowVisibilityVideoManager2 = RTCConnection(closure_3[32]).WindowVisibilityVideoManager;
      WindowVisibilityVideoManager2.off(RTCConnection(closure_3[32]).WindowVisibilityEvent.WindowVisibilityChanged, self.windowVisibilityChanged);
      const _backoff = self._backoff;
      _backoff.cancel();
      self._cleanupSocket();
      const _voiceQuality = self._voiceQuality;
      if (null != _voiceQuality) {
        _voiceQuality.stop();
      }
      const _voiceQuality2 = self._voiceQuality;
      if (null != _voiceQuality2) {
        _voiceQuality2.removeAllListeners();
      }
      self._voiceQuality = null;
      clearInterval(self._voiceQualityPeriodicStatsInterval);
      self._voiceQualityPeriodicStatsInterval = null;
      self._voiceQualityPeriodicStatsSequenceId = 0;
      const _systemResponsiveness = self._systemResponsiveness;
      if (null != _systemResponsiveness) {
        _systemResponsiveness.stop();
      }
      self._systemResponsiveness = null;
      self._noiseCancellationError = 0;
      const _voiceDuration = self._voiceDuration;
      if (null != _voiceDuration) {
        _voiceDuration.stop();
      }
      self._voiceDuration = null;
      const _videoQuality = self._videoQuality;
      if (null != _videoQuality) {
        _videoQuality.stop();
      }
      self._videoQuality = null;
      self._videoHealthManager = null;
      self._secureFramesState = null;
      const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
      if (null != _localMediaSinkWantsManager) {
        _localMediaSinkWantsManager.reset();
      }
      if (null != self._connection) {
        const _connection = self._connection;
        self._connection = null;
        _connection.destroy();
      }
      self.removeAllListeners();
      self._destroyed = true;
    }
  };
  items[6] = {
    key: "shouldSendSpeaking",
    value(_lastSentSpeakingStatus, _lastSentSSRC) {
      const self = this;
      if (obj.isWeb()) {
        return true;
      } else {
        const obj2 = RTCConnection(closure_3[40]);
        const hasFlagResult = RTCConnection(closure_3[40]).hasFlag(_lastSentSpeakingStatus, constants8.PRIORITY);
        let tmp5 = self._lastSentSSRC !== _lastSentSSRC || hasFlagResult !== RTCConnection(closure_3[40]).hasFlag(self._lastSentSpeakingStatus, constants8.PRIORITY);
        if (tmp5) {
          let tmp6 = undefined !== self._lastSentSSRC;
          if (!tmp6) {
            tmp6 = _lastSentSpeakingStatus !== constants8.NONE;
          }
          if (tmp6) {
            let flag = self._lastSentSSRC === _lastSentSSRC;
            if (!flag) {
              flag = _lastSentSpeakingStatus !== constants8.NONE;
            }
            if (flag) {
              self._lastSentSpeakingStatus = _lastSentSpeakingStatus;
              self._lastSentSSRC = _lastSentSSRC;
              flag = true;
            }
            tmp6 = flag;
          }
          tmp5 = tmp6;
        }
        return tmp5;
      }
      const obj = RTCConnection(closure_3[35]);
    }
  };
  items[7] = {
    key: "sendSpeaking",
    value(arg0, arg1) {
      const self = this;
      const _socket = this._socket;
      if (null != _socket) {
        if (self.shouldSendSpeaking(arg0, arg1)) {
          _socket.speaking(arg0, store2.getPacketDelay(), arg1);
        }
      }
    }
  };
  items[8] = {
    key: "sendVideo",
    value(arg0, arg1, arg2, arg3) {
      const self = this;
      const _socket = this._socket;
      if (null != _socket) {
        if (0 !== arg1) {
          self._sentVideo = true;
        }
        if (self._sentVideo) {
          _socket.video(arg0, arg1, arg2, arg3);
        }
      }
    }
  };
  items[9] = {
    key: "getPings",
    value() {
      return this._pings;
    }
  };
  items[10] = {
    key: "getAveragePing",
    value() {
      const _pings = this._pings;
      const substr = _pings.slice(0, Math.min(this._pings.length, 20));
      let num = 0;
      if (0 !== substr.length) {
        num = 0;
        if (null != this._socket) {
          num = substr.reduce((arg0, value) => arg0 + value.value, 0) / substr.length;
        }
      }
      return num;
    }
  };
  items[11] = {
    key: "getLastPing",
    value() {
      const iter = this._pings[this._pings.length - 1];
      let value;
      if (null != iter) {
        value = iter.value;
      }
      return value;
    }
  };
  items[12] = {
    key: "getOutboundLossRate",
    value() {
      return this._outboundLossRate;
    }
  };
  items[13] = {
    key: "getMediaSessionId",
    value() {
      return this._mediaSessionId;
    }
  };
  items[14] = {
    key: "getVoiceParticipantType",
    value() {

    }
  };
  items[15] = {
    key: "getRTCConnectionId",
    value() {
      return this._rtcConnectionId;
    }
  };
  items[16] = {
    key: "getMediaEngineConnectionId",
    value() {
      return this._mediaEngineConnectionId;
    }
  };
  items[17] = {
    key: "getVoiceVersion",
    value() {
      return this.voiceVersion;
    }
  };
  items[18] = {
    key: "getRtcWorkerVersion",
    value() {
      return this.rtcWorkerVersion;
    }
  };
  items[19] = {
    key: "getDuration",
    value() {
      let num = 0;
      if (this._connectCompletedTime > 0) {
        num = RTCConnection(closure_3[22]).now() - tmp._connectCompletedTime;
        const obj = RTCConnection(closure_3[22]);
      }
      let num3 = 0;
      if (num > 0) {
        num3 = num;
      }
      return num3;
    }
  };
  items[20] = {
    key: "getDurationSeconds",
    value() {
      return this.getDuration() / 1000;
    }
  };
  items[21] = {
    key: "getVoiceDurationStats",
    value() {
      const _voiceDuration = this._voiceDuration;
      let durationStats;
      if (null != _voiceDuration) {
        durationStats = _voiceDuration.getDurationStats();
      }
      let tmp2 = null;
      if (null != durationStats) {
        tmp2 = durationStats;
      }
      return tmp2;
    }
  };
  items[22] = {
    key: "getPacketStats",
    value() {
      const _voiceQuality = this._voiceQuality;
      let packetStats;
      if (null != _voiceQuality) {
        packetStats = _voiceQuality.getPacketStats();
      }
      return packetStats;
    }
  };
  items[23] = {
    key: "getCreatedTime",
    value() {
      return this._createdTime;
    }
  };
  items[24] = {
    key: "getSecureFramesState",
    value() {
      return this._secureFramesState;
    }
  };
  items[25] = {
    key: "getSecureFramesRosterMap",
    value() {
      return this._secureFramesRosterMap;
    }
  };
  items[26] = {
    key: "getUserIds",
    value() {
      return this._userIds;
    }
  };
  items[27] = {
    key: "getIsUserConnected",
    value(arg0) {
      const _userIds = this._userIds;
      return _userIds.has(arg0);
    }
  };
  items[28] = {
    key: "getVideoHealthManager",
    value() {
      return this._videoHealthManager;
    }
  };
  items[29] = {
    key: "getBandwidthEstimationExperiment",
    value() {
      return this._bandwidthEstimationExperiment;
    }
  };
  items[30] = {
    key: "hasActiveRemoteWants",
    value() {
      const entries = Object.entries(this._remoteVideoSinkWants);
      return entries.some((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        if (Number.isInteger(tmp)) {
          let tmp3 = 0 !== tmp2;
        } else {
          tmp3 = "any" !== tmp;
          if (tmp3) {
            let someResult;
            if ("pixelCounts" === tmp) {
              const _Object = Object;
              const values = Object.values(tmp2);
              someResult = values.some((arg0) => 0 !== arg0);
            }
            tmp3 = someResult;
          }
        }
        return tmp3;
      });
    }
  };
  items[31] = {
    key: "pauseStatsCollectionForUser",
    value(arg0, arg1) {
      const orCreateVideoQuality = this.getOrCreateVideoQuality();
      if (null != orCreateVideoQuality) {
        if (arg1) {
          const result = orCreateVideoQuality.addUserToStatsCollectionPausedSet(arg0);
        } else {
          const result1 = orCreateVideoQuality.removeUserFromStatsCollectionPausedSet(arg0);
        }
      } else {
        const logger = this.logger;
        logger.error("pauseStatsCollectionForUser: Unable to create videoQuality.");
      }
    }
  };
  items[32] = {
    key: "getOutboundStats",
    value() {
      const orCreateVideoQuality = this.getOrCreateVideoQuality();
      let outboundStats = null;
      if (null != orCreateVideoQuality) {
        outboundStats = orCreateVideoQuality.getOutboundStats();
      }
      return outboundStats;
    }
  };
  items[33] = {
    key: "getInboundStats",
    value(arg0) {
      const orCreateVideoQuality = this.getOrCreateVideoQuality();
      let inboundStats = null;
      if (null != orCreateVideoQuality) {
        inboundStats = orCreateVideoQuality.getInboundStats(arg0);
      }
      return inboundStats;
    }
  };
  items[34] = {
    key: "setState",
    value(s) {
      let obj = arg1;
      const self = this;
      if (arg1 === undefined) {
        obj = {};
      }
      obj = { c: constants9.SET_STATE, s };
      self.recordEvent(obj);
      const logger = self.logger;
      logger.info("RTC connection state: " + self.state + " => " + s);
      self.state = s;
      const stateHistory = self.stateHistory;
      stateHistory.update(self.state);
      obj = { hostname: self.hostname, channelId: self.trueChannelId, context: self.context };
      self.emit(RTCConnection(closure_3[41]).RTCConnectionEvent.State, s, obj, obj);
    }
  };
  items[35] = {
    key: "expeditedHeartbeat",
    value(arg0) {
      let str = arg1;
      let flag = arg2;
      const self = this;
      if (arg1 === undefined) {
        str = "";
      }
      if (flag === undefined) {
        flag = true;
      }
      const _socket = self._socket;
      let expeditedHeartbeatResult = null != _socket;
      if (expeditedHeartbeatResult) {
        expeditedHeartbeatResult = _socket.expeditedHeartbeat(arg0, str, flag);
      }
      if (expeditedHeartbeatResult) {
        const _backoff = self._backoff;
        _backoff.cancel();
      }
    }
  };
  items[36] = {
    key: "resetBackoff",
    value() {
      let str = arg0;
      const self = this;
      if (arg0 === undefined) {
        str = "";
      }
      const _socket = self._socket;
      if (tmp) {
        const _backoff = self._backoff;
        _backoff.cancel();
      }
    }
  };
  items[37] = {
    key: "setSelectedParticipant",
    value(arg0) {
      const _localMediaSinkWantsManager = this._localMediaSinkWantsManager;
      if (null != _localMediaSinkWantsManager) {
        const result = _localMediaSinkWantsManager.setSelectedParticipant(arg0);
      }
    }
  };
  items[38] = {
    key: "setPipOpen",
    value(arg0) {
      const _localMediaSinkWantsManager = this._localMediaSinkWantsManager;
      if (null != _localMediaSinkWantsManager) {
        _localMediaSinkWantsManager.setPipOpen(arg0);
      }
    }
  };
  items[39] = {
    key: "setClipRecordUser",
    value(arg0, arg1, arg2) {
      const _connection = this._connection;
      if (!tmp) {
        _connection.setClipRecordUser(arg0, arg1, arg2);
      }
    }
  };
  items[40] = {
    key: "setNoiseCancellationEnabled",
    value(arg0) {
      this._numNoiseCancellationChanges = this._numNoiseCancellationChanges + 1;
      const _voiceDuration = this._voiceDuration;
      if (null != _voiceDuration) {
        const result = _voiceDuration.setNoiseCancellationEnabled(arg0);
      }
    }
  };
  items[41] = {
    key: "setSpatialAudioEnabled",
    value(arg0) {
      const _voiceDuration = this._voiceDuration;
      if (null != _voiceDuration) {
        const result = _voiceDuration.setSpatialAudioEnabled(arg0);
      }
    }
  };
  items[42] = {
    key: "setSimulcastDebugOverride",
    value(userId, arg1, context) {
      if (arg1 === this.context) {
        if (arg1 === constants6.DEFAULT) {
          const _localMediaSinkWantsManager = tmp._localMediaSinkWantsManager;
          if (null != _localMediaSinkWantsManager) {
            const result = _localMediaSinkWantsManager.setSimulcastDebugOverride(userId, context);
          }
        }
      }
    }
  };
  items[43] = {
    key: "setVideoSize",
    value(arg0, width) {
      const self = this;
      let isAndroidResult = null == width;
      if (!isAndroidResult) {
        isAndroidResult = RTCConnection(closure_3[35]).isAndroid();
        const obj = RTCConnection(closure_3[35]);
      }
      if (!isAndroidResult) {
        isAndroidResult = RTCConnection(closure_3[35]).isIOS();
        const obj2 = RTCConnection(closure_3[35]);
      }
      if (!isAndroidResult) {
        const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
        if (null != _localMediaSinkWantsManager) {
          _localMediaSinkWantsManager.setVideoSize(arg0, width.width * width.height);
        }
      }
      const _goLiveQualityManager = self._goLiveQualityManager;
      if (null != _goLiveQualityManager) {
        _goLiveQualityManager.setVideoSize(arg0, width, arg2);
      }
    }
  };
  items[44] = {
    key: "clearJoinVoiceId",
    value() {
      this.joinVoiceId = null;
    }
  };
  items[45] = {
    key: "setNextChannelId",
    value(_nextChannelId) {
      const self = this;
      this.recordEvent({ c: constants9.SET_NEXT_CHANNEL_ID });
      const channel = store.getChannel(this.channelId);
      let type;
      if (null != channel) {
        type = channel.type;
      }
      const logger = self.logger;
      logger.info("Updating channel: " + _nextChannelId + "(" + type + ")");
      self._nextChannelId = _nextChannelId;
      const channelIds = self.channelIds;
      channelIds.add(_nextChannelId);
    }
  };
  items[46] = {
    key: "getNextChannelId",
    value() {
      let _channelId = this._nextChannelId;
      if (null == _channelId) {
        _channelId = this._channelId;
      }
      return _channelId;
    }
  };
  items[47] = {
    key: "channelId",
    get() {
      return this._channelId;
    }
  };
  items[48] = {
    key: "trueServerId",
    get() {
      const self = this;
      let channelId = this.streamServerId;
      if (null == channelId) {
        channelId = self.guildId;
      }
      if (null == channelId) {
        channelId = self.channelId;
      }
      return channelId;
    }
  };
  items[49] = {
    key: "trueChannelId",
    get() {
      const self = this;
      if (null == this.streamServerId) {
        let streamChannelId = self.channelId;
      } else if (null != self.streamChannelId) {
        streamChannelId = self.streamChannelId;
      } else {
        const obj = callback(closure_3[42])(self.streamServerId);
        streamChannelId = callback(closure_3[42])(self.streamServerId).prev().toString();
        const str = callback(closure_3[42])(self.streamServerId).prev();
      }
      return streamChannelId;
    }
  };
  items[50] = {
    key: "_cleanupSocket",
    value() {
      const _socket = this._socket;
      if (null != _socket) {
        _socket.close();
        _socket.removeAllListeners();
        tmp._socket = null;
      }
    }
  };
  items[51] = {
    key: "_chooseExperiments",
    value() {
      const items = [];
      if (this._recordingEnabled) {
        items.push("connection_log");
      }
      if (store2.supports(constants5.FIXED_KEYFRAME_INTERVAL)) {
        items.push("fixed_keyframe_interval");
      }
      let obj = callback(closure_3[43]);
      const config = obj.getConfig({ location: "_chooseExperiments" });
      if (config.enabled) {
        items.push("should_analyze_user_voice_volume");
      }
      if (config.dontEmitVolumeOnlySpeakingEvents) {
        items.push("dont_emit_volume_only_speaking_events");
      }
      let enabled = RTCConnection(closure_3[35]).isWeb();
      if (enabled) {
        const BrowserTransceiverPaddingRemovalExperiment = RTCConnection(closure_3[44]).BrowserTransceiverPaddingRemovalExperiment;
        obj = { location: "RTCConnection" };
        enabled = BrowserTransceiverPaddingRemovalExperiment.getConfig(obj).enabled;
      }
      if (enabled) {
        items.push("browser_transceiver_padding_removal");
      }
      const obj2 = RTCConnection(closure_3[35]);
      if (obj4.isIOS()) {
        obj = { location: "_chooseExperiments" };
        const mode = callback(closure_3[45]).getConfig(obj).mode;
        if ("standard" === mode) {
          items.push("ios_video_stabilization_standard");
        } else if ("low_latency" === mode) {
          items.push("ios_video_stabilization_low_latency");
        }
        const obj5 = callback(closure_3[45]);
      }
      const obj4 = RTCConnection(closure_3[35]);
      let isAndroidResult = RTCConnection(closure_3[35]).isAndroid();
      if (isAndroidResult) {
        isAndroidResult = RTCConnection(closure_3[46]).isSurfaceDirectRendererExperimentEnabled();
        const obj8 = RTCConnection(closure_3[46]);
      }
      if (isAndroidResult) {
        items.push(RTCConnection(closure_3[46]).ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT);
      }
      this._selectedExperiments = items;
    }
  };
  items[52] = {
    key: "_handleConnecting",
    value() {
      const self = this;
      if (null != this.endpoint) {
        const channel = store.getChannel(self.channelId);
        let type;
        if (null != channel) {
          type = channel.type;
        }
        const logger = self.logger;
        const _HermesInternal = HermesInternal;
        logger.info("Connecting to RTC server " + self.endpoint + ", rtc-connection-id: " + self.getRTCConnectionId() + ", channel: " + self.channelId + "(" + type + ")");
      }
      self.setState(constants3.CONNECTING);
    }
  };
  items[53] = {
    key: "_handleConnect",
    value(arg0) {
      const self = this;
      const RTCConnection = this;
      const token = this.token;
      this.reconnecting = false;
      if (null == token) {
        const _Error = Error;
        const error = new Error("RTCConnection._handleConnect(...): Token is missing.");
        throw error;
      } else {
        const logger = self.logger;
        logger.info("Connected to RTC server.");
        const prop = self._fetchAsyncResourcesPromise;
        prop.finally(() => {
          arg0.identify({ serverId: self.trueServerId, channelId: self.trueChannelId, userId: self.userId, sessionId: self.sessionId, token, maxDaveProtocolVersion: store.getSupportedSecureFramesProtocolVersion(), video: store.supports(constants2.VIDEO), streamParameters: store.getVideoStreamParameters(self.context) });
          self.setState(constants.AUTHENTICATING);
        });
      }
    }
  };
  items[54] = {
    key: "_handleDisconnect",
    value(arg0, arg1, arg2, arg3) {
      let _backoff;
      let logger2;
      let _encountered_socket_failure = arg1;
      let self = this;
      const RTCConnection = this;
      self = this;
      const logger = this.logger;
      let infoResult = logger.info("Disconnected from RTC server, clean: " + arg1 + ", code: " + arg2 + ", reason: " + arg3 + ", state: " + this.state);
      if (!arg1) {
        _encountered_socket_failure = !self._connecting;
      }
      if (!_encountered_socket_failure) {
        _encountered_socket_failure = self._encountered_socket_failure;
      }
      if (!_encountered_socket_failure) {
        let obj = arg3(_videoQuality2[24]);
        obj = {};
        const merged = Object.assign(self._getAnalyticsProperties());
        obj["hostname"] = self.hostname;
        obj["connect_count"] = self._connectCount;
        obj["code"] = arg2;
        obj["reason"] = arg3;
        obj.track(constants.VOICE_CONNECTION_SOCKET_FAILURE, obj);
        self._encountered_socket_failure = true;
      }
      if (authStore.getRemoteDisconnectVoiceChannelId() === self.channelId) {
        const _connection = self._connection;
        if (null != _connection) {
          const result = _connection.wasRemoteDisconnected();
        }
      }
      if ("Force Close" !== arg3) {
        ({ _backoff, logger: logger2 } = self);
        const result1 = _backoff.fail(self.reconnect) / 1000;
        const _HermesInternal = HermesInternal;
        logger2.warn("Disconnect was not clean! reason=" + arg3 + ". Reconnecting in " + result1.toFixed(2) + " seconds.");
      }
      if (self.state === constants3.DISCONNECTED) {
        self._pingTimeouts = [];
        self._pings = [];
        self._connectCompletedTime = 0;
        self._pingBadCount = 0;
        self._inputDetected = false;
        infoResult = null;
        self._mediaSessionId = null;
        const _voiceQuality13 = self._voiceQuality;
        if (null != _voiceQuality13) {
          infoResult = _voiceQuality13.stop();
        }
        self._voiceQuality = null;
        const _clearInterval = clearInterval;
        infoResult = clearInterval(self._voiceQualityPeriodicStatsInterval);
        self._voiceQualityPeriodicStatsInterval = null;
        self._voiceQualityPeriodicStatsSequenceId = 0;
        self._noiseCancellationError = 0;
        self._numNoiseCancellationChanges = 0;
        const _voiceDuration2 = self._voiceDuration;
        if (null != _voiceDuration2) {
          infoResult = _voiceDuration2.stop();
        }
        self._voiceDuration = null;
        const _videoQuality = self._videoQuality;
        if (null != _videoQuality) {
          infoResult = _videoQuality.stop();
        }
        self._videoQuality = null;
        self._videoHealthManager = null;
        const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
        if (null != _localMediaSinkWantsManager) {
          infoResult = _localMediaSinkWantsManager.reset();
        }
        self._secureFramesState = null;
        const _Set = Set;
        const items = [self.userId];
        infoResult = new.target;
        infoResult = new.target;
        infoResult = items;
        infoResult = new Set(items);
        self._userIds = infoResult;
        const _secureFramesRosterMap = self._secureFramesRosterMap;
        infoResult = _secureFramesRosterMap.clear();
        const _secureFramesTransitionStates = self._secureFramesTransitionStates;
        infoResult = _secureFramesTransitionStates.clear();
        self._secureFramesNextTransitionState = undefined;
        self._secureFramesMaxConcurrentTransitions = 0;
        self._secureFramesTransitionPrepareCount = 0;
        self._secureFramesTransitionExecuteCount = 0;
        if (null != self._connection) {
          const _connection3 = self._connection;
          self._connection = null;
          self._hasCodecs = false;
          let reconnecting = self.reconnecting;
          if (!reconnecting) {
            reconnecting = tmp10;
          }
          infoResult = _connection3.destroy(reconnecting);
        }
        infoResult = constants3;
        obj = { willReconnect: tmp10 };
        infoResult = self.setState(constants3.DISCONNECTED, obj);
      } else {
        const _videoQuality2 = self._videoQuality;
        infoResult = null;
        if (null != _videoQuality2) {
          infoResult = constants6;
          if (self.context === constants6.DEFAULT) {
            infoResult = _videoQuality2.stop();
            if (self._sentVideo) {
              const outboundStats = _videoQuality2.getOutboundStats();
              const item = outboundStats.forEach((num_frames) => {
                num_frames = num_frames.num_frames;
                let num = 0;
                if (null != num_frames) {
                  num = num_frames;
                }
                if (num > 0) {
                  let obj = arg3(_videoQuality2[24]);
                  obj = {};
                  const merged = Object.assign(self._getAnalyticsProperties());
                  obj["app_hardware_acceleration_enabled"] = arg3(_videoQuality2[47]).getAppHardwareAccelerationEnabled();
                  obj["media_session_id"] = self.getMediaSessionId();
                  obj["sender_user_id"] = self.userId;
                  obj["reason"] = arg3;
                  obj["participant_type"] = "sender";
                  obj["guild_region"] = store2.getRegion(self.hostname);
                  obj["hostname"] = self.hostname;
                  obj["hardware_enabled"] = store.getHardwareEncoding();
                  const merged1 = Object.assign(num_frames);
                  const merged2 = Object.assign(_videoQuality2.getNetworkStats());
                  const merged3 = Object.assign(_videoQuality2.getCodecUsageStats("sender", self.userId));
                  obj["device_performance_class"] = arg3(_videoQuality2[48])();
                  obj.track(constants.VIDEO_STREAM_ENDED, obj);
                  const obj3 = arg3(_videoQuality2[47]);
                }
              });
              const cameraDurationStats = _videoQuality2.getCameraDurationStats();
              let tmp15 = null != cameraDurationStats;
              if (tmp15) {
                tmp15 = cameraDurationStats.camera_enabled_duration > 0;
              }
              if (tmp15) {
                const obj1 = {};
                const merged1 = Object.assign(cameraDurationStats);
                obj1["media_session_id"] = self.getMediaSessionId();
                arg3(_videoQuality2[24]).track(constants.VIDEO_CALL_ENDED, obj1);
                const obj4 = arg3(_videoQuality2[24]);
              }
            }
            const inboundParticipants = _videoQuality2.getInboundParticipants();
            const item1 = inboundParticipants.forEach((arg0) => {
              const inboundStats = _videoQuality2.getInboundStats(arg0);
              let num_frames;
              if (null != inboundStats) {
                num_frames = inboundStats.num_frames;
              }
              let num = 0;
              if (null != num_frames) {
                num = num_frames;
              }
              if (num > 0) {
                let obj = arg3(_videoQuality2[24]);
                obj = {};
                const merged = Object.assign(self._getAnalyticsProperties());
                obj["app_hardware_acceleration_enabled"] = arg3(_videoQuality2[47]).getAppHardwareAccelerationEnabled();
                obj["media_session_id"] = self.getMediaSessionId();
                obj["sender_user_id"] = arg0;
                obj["reason"] = arg3;
                obj["participant_type"] = "receiver";
                obj["guild_region"] = store2.getRegion(self.hostname);
                obj["hostname"] = self.hostname;
                obj["hardware_enabled"] = store.getHardwareEncoding();
                const merged1 = Object.assign(inboundStats);
                const merged2 = Object.assign(_videoQuality2.getNetworkStats());
                const merged3 = Object.assign(_videoQuality2.getCodecUsageStats("receiver", arg0));
                obj.track(constants.VIDEO_STREAM_ENDED, obj);
                const obj3 = arg3(_videoQuality2[47]);
              }
            });
          }
        }
        const mediaSessionId = self.getMediaSessionId();
        const mediaEngine = store2.getMediaEngine();
        const codecSurvey = mediaEngine.getCodecSurvey();
        codecSurvey.then((arg0) => {
          const parsed = JSON.parse(arg0);
          if (null != parsed) {
            if (null != parsed.available_video_encoders) {
              if (null != parsed.available_video_decoders) {
                let obj = arg3(_videoQuality2[24]);
                obj = {};
                const merged = Object.assign(parsed);
                obj["rtc_connection_id"] = self.getRTCConnectionId();
                obj["media_session_id"] = closure_4;
                obj.track(constants.VOICE_CODEC_DETECTED, obj);
              }
            }
          }
          const error = new Error("codec survey is not available");
          throw error;
        }).catch((arg0) => {
          const logger = self.logger;
          logger.warn(arg0);
        });
        self._trackMLSFailures({ info: null, newMessages: null });
        let preferredRegion = null;
        if (store3.shouldIncludePreferredRegion()) {
          preferredRegion = store3.getPreferredRegion();
        }
        const settings = store2.getSettings();
        const channel = store.getChannel(self.channelId);
        const connectionStats = connectionStats.getConnectionStats(self.getMediaEngineConnectionId());
        let prop;
        if (null != connectionStats) {
          const outbound = connectionStats.stats.rtp.outbound;
          const found = outbound.find((type) => "audio" === type.type);
          if (null != found) {
            prop = found.sampleRateMismatchPercent;
          }
        }
        const obj2 = {};
        const merged2 = Object.assign(self._getAnalyticsProperties());
        obj2["hostname"] = self.hostname;
        obj2["port"] = self.port;
        obj2["protocol"] = self.protocol;
        obj2["reconnect"] = tmp10;
        obj2["reason"] = arg3;
        obj2["duration"] = self.getDuration();
        const merged3 = Object.assign(authStore.getUserVoiceSettingsStats(self.context));
        const _voiceQuality = self._voiceQuality;
        let mosStats;
        if (null != _voiceQuality) {
          mosStats = _voiceQuality.getMosStats();
        }
        const merged4 = Object.assign(mosStats);
        const _voiceQuality2 = self._voiceQuality;
        let packetStats;
        if (null != _voiceQuality2) {
          packetStats = _voiceQuality2.getPacketStats();
        }
        const merged5 = Object.assign(packetStats);
        const _voiceQuality3 = self._voiceQuality;
        let bytesStats;
        if (null != _voiceQuality3) {
          bytesStats = _voiceQuality3.getBytesStats();
        }
        const merged6 = Object.assign(bytesStats);
        const _voiceQuality4 = self._voiceQuality;
        let bufferStats;
        if (null != _voiceQuality4) {
          bufferStats = _voiceQuality4.getBufferStats();
        }
        const merged7 = Object.assign(bufferStats);
        const _voiceQuality5 = self._voiceQuality;
        let networkStats;
        if (null != _voiceQuality5) {
          networkStats = _voiceQuality5.getNetworkStats();
        }
        const merged8 = Object.assign(networkStats);
        const _voiceQuality6 = self._voiceQuality;
        let systemResourceStats;
        if (null != _voiceQuality6) {
          systemResourceStats = _voiceQuality6.getSystemResourceStats();
        }
        const merged9 = Object.assign(systemResourceStats);
        const _voiceQuality7 = self._voiceQuality;
        let frameOpStats;
        if (null != _voiceQuality7) {
          frameOpStats = _voiceQuality7.getFrameOpStats();
        }
        const merged10 = Object.assign(frameOpStats);
        const _voiceQuality8 = self._voiceQuality;
        let durationStats;
        if (null != _voiceQuality8) {
          durationStats = _voiceQuality8.getDurationStats();
        }
        const merged11 = Object.assign(durationStats);
        const _voiceQuality9 = self._voiceQuality;
        let transportStats;
        if (null != _voiceQuality9) {
          transportStats = _voiceQuality9.getTransportStats();
        }
        const merged12 = Object.assign(transportStats);
        const _voiceQuality10 = self._voiceQuality;
        let e2EEStats;
        if (null != _voiceQuality10) {
          e2EEStats = _voiceQuality10.getE2EEStats();
        }
        const merged13 = Object.assign(e2EEStats);
        const _voiceQuality11 = self._voiceQuality;
        let audioDeviceStats;
        if (null != _voiceQuality11) {
          audioDeviceStats = _voiceQuality11.getAudioDeviceStats();
        }
        const merged14 = Object.assign(audioDeviceStats);
        const _voiceQuality12 = self._voiceQuality;
        let audioLevelStats;
        if (null != _voiceQuality12) {
          audioLevelStats = _voiceQuality12.getAudioLevelStats();
        }
        const merged15 = Object.assign(audioLevelStats);
        const _voiceDuration = self._voiceDuration;
        let durationStats1;
        if (null != _voiceDuration) {
          durationStats1 = _voiceDuration.getDurationStats();
        }
        const merged16 = Object.assign(durationStats1);
        const merged17 = Object.assign(usageStats.getUsageStats());
        const merged18 = Object.assign(self.getAudioDeviceStates());
        const _systemResponsiveness = self._systemResponsiveness;
        infoResult = undefined;
        if (null != _systemResponsiveness) {
          infoResult = _systemResponsiveness.getPttQueueLatencyStats();
        }
        infoResult = obj2;
        infoResult = Object.assign(infoResult);
        obj2["num_noise_cancellation_changes"] = self._numNoiseCancellationChanges;
        obj2["media_session_id"] = self.getMediaSessionId();
        infoResult = null;
        if (null != channel) {
          infoResult = channel.bitrate;
        }
        obj2["channel_bitrate"] = infoResult;
        obj2["cloudflare_best_region"] = preferredRegion;
        obj2["connect_count"] = self._connectCount;
        const _Math = Math;
        obj2["ping_average"] = Math.round(self.getAveragePing());
        obj2["ping_bad_count"] = self._pingBadCount;
        obj2["ping_timeout"] = self._pingTimeouts.length;
        obj2["input_detected"] = self._inputDetected;
        infoResult = store2;
        obj2["no_input_detected_notice"] = store2.getNoInputDetectedNotice();
        obj2["audio_input_mode"] = settings.mode;
        obj2["automatic_audio_input_sensitivity_enabled"] = settings.modeOptions.autoThreshold;
        obj2["audio_input_sensitivity"] = settings.modeOptions.threshold;
        obj2["echo_cancellation_enabled"] = settings.echoCancellation;
        obj2["sidechain_compression_enabled"] = settings.sidechainCompression;
        obj2["noise_suppression_enabled"] = settings.noiseSuppression;
        obj2["noise_cancellation_enabled"] = settings.noiseCancellation;
        obj2["noise_canceller_error"] = self._noiseCancellationError;
        obj2["automatic_gain_control_enabled"] = settings.automaticGainControl;
        obj2["voice_output_volume"] = settings.outputVolume;
        obj2["voice_input_volume"] = settings.inputVolume;
        obj2["encryption_mode"] = self._encryptionMode;
        obj2["channel_count"] = self.channelIds.size;
        infoResult = arg3;
        infoResult = _videoQuality2;
        obj2["device_performance_class"] = arg3(_videoQuality2[48])();
        infoResult = null;
        if (null != self._connection) {
          const _connection2 = self._connection;
          infoResult = undefined;
          if (null != _connection2) {
            infoResult = _connection2.getNumFastUdpReconnects();
          }
        }
        obj2["num_fast_udp_reconnects"] = infoResult;
        obj2["parent_media_session_id"] = self.parentMediaSessionId;
        infoResult = store2;
        const mediaEngine1 = store2.getMediaEngine();
        obj2["audio_subsystem"] = mediaEngine1.getAudioSubsystem();
        const mediaEngine2 = store2.getMediaEngine();
        obj2["audio_layer"] = mediaEngine2.getAudioLayer();
        obj2["automatic_audio_subsystem"] = settings.automaticAudioSubsystem;
        obj2["participant_type"] = self.getVoiceParticipantType();
        obj2["audio_capture_sample_rate_mismatch_percent"] = prop;
        obj2["krisp_sdk_version"] = store2.getState().krispVersion;
        obj2["secure_frames_max_concurrent_transitions"] = self._secureFramesMaxConcurrentTransitions;
        obj2["secure_frames_transition_prepare_count"] = self._secureFramesTransitionPrepareCount;
        obj2["secure_frames_transition_execute_count"] = self._secureFramesTransitionExecuteCount;
        obj2["vad_use_advanced_voice_activity"] = settings.modeOptions.vadUseKrisp;
        obj2["soundshare_experimental"] = store2.getExperimentalSoundshare();
        obj2["join_voice_id"] = self.joinVoiceId;
        obj2["bypass_system_input_processing"] = settings.bypassSystemInputProcessing;
        obj2["system_microphone_mode"] = store2.getSystemMicrophoneMode();
        infoResult = currentRouteType;
        obj2["output_audio_route_type"] = currentRouteType.getCurrentRouteType();
        let items1 = [
          () => {
              let closure_0 = callback(async () => {
                const _systemResources = _systemResources._systemResources;
                if (null != _systemResources) {
                  const batteryLevelStats = _systemResources.getBatteryLevelStats();
                }
                const tmp2 = yield batteryLevelStats;
                let tmp3 = tmp2;
                if (null == tmp2) {
                  const obj = { batteryUsageRounded: null };
                  tmp3 = obj;
                }
                return tmp3;
              });
              return function() {
                return callback(...arguments);
              };
            }()(),
      ,

        ];
        infoResult = arg3;
        infoResult = _videoQuality2;
        const nextPromise = codecSurvey.then((arg0) => {
          const parsed = JSON.parse(arg0);
          if (null != parsed) {
            if (null != parsed.available_video_encoders) {
              if (null != parsed.available_video_decoders) {
                let obj = arg3(_videoQuality2[24]);
                obj = {};
                const merged = Object.assign(parsed);
                obj["rtc_connection_id"] = self.getRTCConnectionId();
                obj["media_session_id"] = closure_4;
                obj.track(constants.VOICE_CODEC_DETECTED, obj);
              }
            }
          }
          const error = new Error("codec survey is not available");
          throw error;
        });
        items1[1] = arg3(_videoQuality2[49]).getKrispModel();
        if (store2.getKrispEnableStats()) {
          infoResult = store2;
          const mediaEngine3 = store2.getMediaEngine();
          infoResult = mediaEngine3.getNoiseCancellationStats();
        } else {
          infoResult = Promise.resolve(null);
        }
        items1[2] = infoResult;
        all = all(items1);
        items1 = all.then;
        infoResult = items1((arg0) => {
          let tmp2;
          let tmp4;
          [, tmp2, tmp4] = arg0;
          let obj = arg3(_videoQuality2[24]);
          obj = {};
          const merged = Object.assign(obj2);
          obj["battery_usage"] = tmp;
          obj["krisp_nc_model"] = tmp2;
          let lowNoiseMs;
          if (null != tmp4) {
            lowNoiseMs = tmp4.lowNoiseMs;
          }
          obj["duration_low_noise_detected_ms"] = lowNoiseMs;
          let mediumNoiseMs;
          if (null != tmp4) {
            mediumNoiseMs = tmp4.mediumNoiseMs;
          }
          obj["duration_medium_noise_detected_ms"] = mediumNoiseMs;
          let highNoiseMs;
          if (null != tmp4) {
            highNoiseMs = tmp4.highNoiseMs;
          }
          obj["duration_high_noise_detected_ms"] = highNoiseMs;
          let talkTimeMs;
          if (null != tmp4) {
            talkTimeMs = tmp3.talkTimeMs;
          }
          obj["duration_noise_cancellation_voice_detected_ms"] = talkTimeMs;
          obj.track(constants.VOICE_DISCONNECT, obj);
        });
        infoResult = self._trackRemainingSecureFrameTransitions();
        const obj10 = arg3(_videoQuality2[49]);
      }
    }
  };
  items[55] = {
    key: "_handleResuming",
    value() {
      const _connection = this._connection;
      if (null != _connection) {
        _connection.fastUdpReconnect();
      }
      const _connection2 = this._connection;
      if (null != _connection2) {
        _connection2.clearAllSpeaking();
      }
    }
  };
  items[56] = {
    key: "_handleReady",
    value(arg0, address, port, modes, ssrc, arr) {
      let context;
      let processPriority;
      let threadPriorityConfiguration;
      let userId;
      let items = arg6;
      const self = this;
      const RTCConnection = this;
      this.setState(constants3.RTC_CONNECTING);
      this.port = port;
      if (null == arg6) {
        items = [];
      }
      this._chooseExperiments(items);
      const ProcessBoostExperiment = RTCConnection(port[50]).ProcessBoostExperiment;
      const config = ProcessBoostExperiment.getConfig({ location: "media_engine_connect" });
      ({ processPriority, threadPriorityConfiguration } = config);
      if (0 === arr.length) {
        let obj = { e: "a", window: "isArray", k: "defineProperty", body: "construct", id: "a", accessibilityRole: "isArray", type: constants7.VIDEO, ssrc: ssrc + 1, rtxSsrc: ssrc + 2 };
        arr.push(obj);
      }
      const mediaEngine = store2.getMediaEngine();
      const persistentCodesEnabled = persistentCodesEnabled.getPersistentCodesEnabled();
      const staticAuthSessionId = staticAuthSessionId.getStaticAuthSessionId();
      if (null != staticAuthSessionId) {
        const tmp8 = staticAuthSessionId;
      }
      obj = { ssrc, address, port, modes, experiments: self._selectedExperiments, streamParameters: arr };
      const obj3 = RTCConnection(port[22]);
      ({ context, userId } = self);
      obj.qosEnabled = store2.getQoS();
      let tmp10;
      if (persistentCodesEnabled) {
        tmp10 = tmp8;
      }
      obj.signingKeyId = tmp10;
      obj.processPriority = processPriority;
      obj.threadPriorityConfiguration = threadPriorityConfiguration;
      const merged = Object.assign(self.getExtraConnectionOptions());
      const connectResult = mediaEngine.connect(context, userId, obj);
      const nowResult = RTCConnection(port[22]).now();
      self._mediaEngineConnectDuration = RTCConnection(port[22]).now() - nowResult;
      const obj6 = RTCConnection(port[22]);
      let isWebResult = RTCConnection(port[35]).isWeb();
      if (isWebResult) {
        isWebResult = !closure_28;
      }
      if (isWebResult) {
        arg0(port[25]).captureMessage("Browser does not support Unified Plan");
        const obj8 = arg0(port[25]);
      }
      connectResult.setUseElectronVideo(mediaEngine.supports(constants5.ELECTRON_VIDEO));
      let guild = null;
      if (null != self.guildId) {
        guild = guild.getGuild(self.guildId);
      }
      let premiumTier;
      if (null != guild) {
        premiumTier = guild.premiumTier;
      }
      let closure_5 = premiumTier === TIER_1.TIER_1;
      const currentUser = authStore2.getCurrentUser();
      let premiumType;
      if (null != currentUser) {
        premiumType = currentUser.premiumType;
      }
      let tmp23 = premiumType === closure_27.TIER_1;
      if (!tmp23) {
        tmp23 = premiumType === closure_27.TIER_2;
      }
      const result = connectResult.setCalcMaxBitrateFunc((videoCodec) => {
        let framerate;
        let height;
        ({ height, framerate } = videoCodec);
        let tmp = height > 0;
        if (tmp) {
          tmp = height <= 720;
        }
        if (closure_5) {
          if (!tmp23) {
            if (tmp) {
              if (!tmp2) {
                const ServerLadderExperiment = self(arg2[51]).ServerLadderExperiment;
                let obj = { location: "RTCConnection" };
                let bitrate = ServerLadderExperiment.getConfig(obj).bitrate;
              }
              return bitrate;
            }
          }
        }
        bitrate = null;
        if ("AV1" === videoCodec.videoCodec) {
          if (0 !== height) {
            bitrate = null;
            if (tmp) {
              bitrate = null;
            }
          }
          const AV1StreamBitrateReductionExperiment = self(arg2[52]).AV1StreamBitrateReductionExperiment;
          obj = { location: "RTCConnection" };
          bitrate = AV1StreamBitrateReductionExperiment.getConfig(obj).bitrate;
        }
      });
      if (store2.supports(constants5.IMAGE_QUALITY_MEASUREMENT)) {
        const result1 = connectResult.setVideoQualityMeasurement("imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec");
      }
      const result2 = connectResult.setVideoEncoderExperiments(store2.getVideoEncoderExperiments(self.context, self.getVoiceParticipantType()));
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.Speaking, (arg0, arg1, arg2) => {
        if (self.userId === arg0) {
          self.sendSpeaking(arg1, arg2);
        }
        self.emit(self(arg2[41]).RTCConnectionEvent.Speaking, arg0, arg1);
      });
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.NativeMuteChanged, (arg0) => {
        if (self.context === constants4.DEFAULT) {
          arg0(arg2[54]).nativeMuteChanged(arg0);
          const obj = arg0(arg2[54]);
        }
      });
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.Video, (userId, streamId, audioSsrc, arg3, rtxSsrc, videoStreamParameters) => {
        const self = userId;
        const obj = { userId, streamId, audioSsrc };
        let num = 0;
        if (null != arg3) {
          num = arg3;
        }
        obj.videoSsrc = num;
        obj.rtxSsrc = rtxSsrc;
        obj.videoStreamParameters = videoStreamParameters;
        self._handleVideoStreamId(obj);
        if (self.userId === userId) {
          let num2 = 0;
          if (null != audioSsrc) {
            num2 = audioSsrc;
          }
          let num3 = 0;
          if (null != arg3) {
            num3 = arg3;
          }
          let num4 = 0;
          if (null != rtxSsrc) {
            num4 = rtxSsrc;
          }
          self.sendVideo(num2, num3, num4, videoStreamParameters);
          if (null != videoStreamParameters) {
            const item = videoStreamParameters.forEach((quality) => {
              if (100 === quality.quality) {
                quality.emit(quality(closure_3[41]).RTCConnectionEvent.VideoSourceQualityChanged, quality.guildId, quality.channelId, quality, quality.maxResolution, quality.maxFrameRate, quality.context);
              }
            });
          }
          const tmp3 = self;
        }
      });
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.FirstFrame, (arg0, arg1, arg2) => {
        if (null != self._localMediaSinkWantsManager) {
          const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
          const result = _localMediaSinkWantsManager.setFirstFrameReceived(arg1);
          self.emit(self(arg2[41]).RTCConnectionEvent.Video, self.guildId, self.channelId, arg0, arg2, self.streamServerId);
        }
        if (null != self._goLiveQualityManager) {
          self.emit(self(arg2[41]).RTCConnectionEvent.Video, self.guildId, self.channelId, arg0, arg2, self.streamServerId);
        }
      });
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.Silence, (arg0) => {
        let _inputDetected = self._inputDetected;
        if (!_inputDetected) {
          _inputDetected = !arg0;
        }
        self._inputDetected = _inputDetected;
      });
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.Connected, (protocol) => {
        const logger = self.logger;
        logger.info("RTC connected to media server: " + arg1 + ":" + arg2);
        if (protocol === self._socket) {
          let tmp7 = protocol(arg2[55]);
          const prototype = tmp7.prototype;
          tmp7 = new tmp7(connectResult);
          self._voiceQuality = tmp7;
          const _voiceQuality = self._voiceQuality;
          _voiceQuality.start();
          const _voiceQuality2 = self._voiceQuality;
          _voiceQuality2.on(self(arg2[55]).VoiceQualityEvent.InputDeviceSampleRateChanged, (sampleRate) => {
            let obj = callback(closure_3[38]);
            obj = { type: "AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED", sampleRate };
            obj.dispatch(obj);
          });
          self._voiceQualityPeriodicStatsSequenceId = 0;
          const _setInterval = setInterval;
          self._voiceQualityPeriodicStatsInterval = setInterval(self._handleVoiceQualityPeriodicsStats, 300000);
          let tmp16 = protocol(arg2[56]);
          const prototype2 = tmp16.prototype;
          tmp16 = new tmp16(connectResult);
          self._systemResponsiveness = tmp16;
          const _systemResponsiveness = self._systemResponsiveness;
          _systemResponsiveness.start();
          let tmp23 = protocol(arg2[57]);
          const prototype3 = tmp23.prototype;
          tmp23 = new tmp23();
          self._systemResources = tmp23;
          const _systemResources = self._systemResources;
          _systemResources.setLastBattery();
          self._noiseCancellationError = 0;
          let tmp29 = protocol(arg2[58]);
          const prototype4 = tmp29.prototype;
          tmp29 = new tmp29(self.userId, connectResult);
          self._voiceDuration = tmp29;
          const _voiceDuration = self._voiceDuration;
          const selfMute = connectResult.getSelfMute();
          _voiceDuration.start(selfMute, connectResult.getSelfDeaf());
          self.protocol = protocol;
          if ("udp" === protocol) {
            const logger5 = self.logger;
            logger5.info("Sending UDP info to RTC server.", arg1, self._selectedExperiments);
            protocol.once(self(arg2[39]).SocketEvent.Encryption, (_encryptionMode) => {
              if (encryption === _connection._connection) {
                encryption.setEncryption(_encryptionMode, arg1);
                _connection._encryptionMode = _encryptionMode;
              }
            });
            protocol = protocol.selectProtocol(protocol, self.getRTCConnectionId(), arg1, self._selectedExperiments);
          } else if ("webrtc" === protocol) {
            const logger4 = self.logger;
            logger4.info("Sending local SDP to RTC server.");
            const _handleSDP = self._handleSDP;
            protocol.once(self(arg2[39]).SocketEvent.SDP, _handleSDP.bind(self));
            const protocol1 = protocol.selectProtocol(protocol, self.getRTCConnectionId(), arg1);
          } else {
            const logger3 = self.logger;
            logger3.error("Unable to determine protocol.");
          }
          const _backoff = self._backoff;
          _backoff.succeed();
        } else {
          const logger2 = self.logger;
          logger2.warn("Socket mismatch, disconnecting");
        }
      });
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.VideoEncoderFallback, (arr) => {
        const found = arr.filter((type) => "video" === type.type);
        const mapped = found.map((name) => name.name);
        const logger = self.logger;
        logger.info("The originally selected video encoder is not working, fallback to the other available encoders: " + mapped.join(","));
        arr.updateSession({ codecs: arr });
      });
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.VideoDecoderFallback, (arr) => {
        const channel = channel.getChannel(self.channelId);
        let type;
        if (null != channel) {
          type = channel.type;
        }
        if (type === constants2.GUILD_STAGE_VOICE) {
          if (!self._videoDecoderFallbackSuppressed) {
            const logger2 = self.logger;
            logger2.info("Suppressing video decoder fallback: stage channel");
            self._videoDecoderFallbackSuppressed = true;
          }
        } else {
          const found = arr.filter((type) => "video" === type.type);
          const mapped = found.map((name) => name.name);
          const logger = self.logger;
          const _HermesInternal = HermesInternal;
          logger.info("The originally selected video decoder is not working, fallback to the other available decoders: " + mapped.join(","));
          const obj = { codecs: arr };
          arr.updateSession(obj);
        }
      });
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.VideoCodecError, (codecStandard) => {
        let obj = { videoCodec: codecStandard.codecStandard, errorMessage: codecStandard.message, mediaContext: self.context };
        const _mediaSessionId = self._mediaSessionId;
        let tmp;
        if (null != _mediaSessionId) {
          tmp = _mediaSessionId;
        }
        obj.mediaSessionId = tmp;
        obj.streamKey = self.getMediaStreamKey();
        if ("encode" === codecStandard.mode) {
          obj = { type: self(arg2[59]).AVError.VIDEO_ENCODE_ERROR };
          const merged = Object.assign(obj);
          obj["videoEncoder"] = codecStandard.implName;
        } else {
          obj = { type: self(arg2[59]).AVError.VIDEO_DECODE_ERROR };
          const merged1 = Object.assign(obj);
          obj["videoDecoder"] = codecStandard.implName;
        }
        self(arg2[59]).reportAVError(obj);
      });
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.Error, (arg0) => {
        if (arg0 === self._socket) {
          let preferredRegion = null;
          if (closure_20.shouldIncludePreferredRegion()) {
            preferredRegion = closure_20.getPreferredRegion();
          }
          const logger = self.logger;
          const _HermesInternal = HermesInternal;
          logger.error("Error occurred while connecting to RTC server: " + arg0);
          let obj = arg0(arg2[24]);
          obj = {};
          const merged = Object.assign(self._getAnalyticsProperties());
          obj["hostname"] = self.hostname;
          obj["port"] = self.port;
          obj["protocol"] = self.protocol;
          obj["error"] = arg0;
          obj["cloudflare_best_region"] = preferredRegion;
          obj["connect_count"] = self._connectCount;
          obj["join_voice_id"] = self.joinVoiceId;
          obj.track(constants.VOICE_CONNECTION_FAILURE, obj);
        }
      });
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.ConnectionStateChange, (arg0) => {
        const logger = self.logger;
        logger.info("RTC media connection state change: " + self.state + " => " + arg0);
        if (arg0 === self._socket) {
          const state = self.state;
          if (constants5.DISCONNECTED === arg0) {
            self.setState(constants3.RTC_DISCONNECTED);
          } else if (constants5.CONNECTING === arg0) {
            self.setState(constants3.RTC_CONNECTING);
          } else if (constants5.CONNECTED === arg0) {
            self.setState(constants3.RTC_CONNECTED);
          } else if (constants5.NO_ROUTE === arg0) {
            self.setState(constants3.NO_ROUTE);
          } else if (constants5.ICE_CHECKING === arg0) {
            self.setState(constants3.ICE_CHECKING);
          } else if (constants5.DTLS_CONNECTING === arg0) {
            self.setState(constants3.DTLS_CONNECTING);
          }
          if (state === constants3.RTC_CONNECTING) {
            if (self.state === constants3.RTC_DISCONNECTED) {
              self.reconnect();
            }
            if (self.state === constants3.RTC_CONNECTED) {
              const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
              if (null != _localMediaSinkWantsManager) {
                _localMediaSinkWantsManager.setConnection(connectResult);
              }
              const _goLiveQualityManager = self._goLiveQualityManager;
              if (null != _goLiveQualityManager) {
                _goLiveQualityManager.update();
              }
              self._connectCompletedTime = self(arg2[22]).now();
              self._hasEverConnected = true;
              self._connecting = false;
              self._encountered_socket_failure = false;
              const result = self._trackVoiceConnectionSuccess(connectResult);
              const obj = self(arg2[22]);
            } else if (state === constants3.RTC_CONNECTED) {
              const stateHistory = self.stateHistory;
              stateHistory.reset(self.state);
            }
          }
          if (self.state === constants3.NO_ROUTE) {
            if (0 === self._backoff.fails) {
              self._handleNoRoute();
            }
            const _backoff = self._backoff;
            _backoff.fail(self.reconnect);
          }
        }
      });
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.SecureFramesUpdate, (_secureFramesState) => {
        self._secureFramesState = _secureFramesState;
        self.emit(self(arg2[41]).RTCConnectionEvent.SecureFramesUpdate);
      });
      const _handlePing = self._handlePing;
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.Ping, _handlePing.bind(self));
      const _handlePingTimeout = self._handlePingTimeout;
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.PingTimeout, _handlePingTimeout.bind(self));
      const _handleOutboundLossRate = self._handleOutboundLossRate;
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.OutboundLossRate, _handleOutboundLossRate.bind(self));
      const _handleLocalVideoDisabled = self._handleLocalVideoDisabled;
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.LocalVideoDisabled, _handleLocalVideoDisabled.bind(self));
      const obj7 = RTCConnection(port[35]);
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.Stats, arg0(port[60]).create());
      const _handleRemoteStreamsReady = self._handleRemoteStreamsReady;
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.RemoteStreamsReady, _handleRemoteStreamsReady.bind(self));
      const handleUsersMerged = self.handleUsersMerged;
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.UsersMerged, handleUsersMerged.bind(self));
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.NoiseCancellationError, (_noiseCancellationError) => {
        self._noiseCancellationError = _noiseCancellationError;
      });
      const _handleMLSFailure = self._handleMLSFailure;
      connectResult.on(RTCConnection(port[53]).BaseConnectionEvent.MLSFailure, _handleMLSFailure.bind(self));
      const result3 = connectResult.setRemoteVideoSinkWants(self._remoteVideoSinkWants);
      self._connection = connectResult;
      self._hasCodecs = false;
      self._mediaEngineConnectionId = connectResult.mediaEngineConnectionId;
    }
  };
  items[57] = {
    key: "_handleSpeaking",
    value(arg0, arg1, arg2, arg3) {
      const self = this;
      const _connection = this._connection;
      if (tmp) {
        if (arg3 !== constants8.NONE) {
          const user = _connection.createUser(arg1, arg2);
        }
        const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
        if (null != _localMediaSinkWantsManager) {
          _localMediaSinkWantsManager.setAudioSSRC(arg1, arg2);
        }
      }
    }
  };
  items[58] = {
    key: "handleFlags",
    value(arg0, arg1) {
      this.emit(RTCConnection(closure_3[41]).RTCConnectionEvent.Flags, arg0, arg1);
    }
  };
  items[59] = {
    key: "handlePlatform",
    value(arg0, arg1) {
      this.emit(RTCConnection(closure_3[41]).RTCConnectionEvent.Platform, arg0, arg1, this.channelId);
    }
  };
  items[60] = {
    key: "handleUsersMerged",
    value(arr) {
      this.emit(RTCConnection(closure_3[41]).RTCConnectionEvent.UsersMerged, arr.map((id) => id.id), this.context);
    }
  };
  items[61] = {
    key: "getOrCreateVideoQuality",
    value() {
      let allowedPoorFpsRatio;
      let backoffTimeSec;
      let fpsThreshold;
      let windowLength;
      const self = this;
      const RTCConnection = this;
      if (null != this._connection) {
        if (null == self._videoQuality) {
          const VideoQuality = RTCConnection(closure_3[61]).VideoQuality;
          const prototype2 = VideoQuality.prototype;
          const videoQuality = new VideoQuality(self._connection);
          self._videoQuality = videoQuality;
          const _videoQuality2 = self._videoQuality;
          const result = _videoQuality2.updateCallUserIdsCount(self._userIds.size);
          const _videoQuality3 = self._videoQuality;
          _videoQuality3.start();
          const defaultConfig = RTCConnection(closure_3[62]).VideoHealthManager.defaultConfig;
          ({ windowLength, allowedPoorFpsRatio, fpsThreshold, backoffTimeSec } = defaultConfig);
          if (defaultConfig.featureEnabled) {
            const VideoHealthManager = RTCConnection(closure_3[62]).VideoHealthManager;
            const prototype = VideoHealthManager.prototype;
            const videoHealthManager = new VideoHealthManager(windowLength, allowedPoorFpsRatio, fpsThreshold, backoffTimeSec);
            self._videoHealthManager = videoHealthManager;
            if (null != self._localMediaSinkWantsManager) {
              self._localMediaSinkWantsManager.videoHealthManager = self._videoHealthManager;
            }
            const _videoQuality = self._videoQuality;
            _videoQuality.on(RTCConnection(closure_3[61]).VideoQualityEvent.FpsUpdate, (arg0, arg1, arg2) => {
              const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
              if (tmp) {
                const _videoHealthManager = self._videoHealthManager;
                if (null != _videoHealthManager) {
                  _videoHealthManager.updateFps(arg0, arg1, arg2);
                }
              }
            });
          }
        }
      }
      return self._videoQuality;
    }
  };
  items[62] = {
    key: "_handleVideoStreamId",
    value(arg0) {
      let streamId;
      let userId;
      let videoSsrc;
      let videoStreamParameters;
      const self = this;
      const RTCConnection = this;
      ({ userId, streamId, videoSsrc, videoStreamParameters } = arg0);
      this.emit(RTCConnection(closure_3[41]).RTCConnectionEvent.Video, this.guildId, this.channelId, userId, streamId, this.streamServerId);
      if (tmp2) {
        const logger = self.logger;
        logger.error("_handleVideoStreamId: Unable to create videoQuality.");
      }
      if (tmp4) {
        const item = videoStreamParameters.forEach((ssrc) => {
          ssrc = ssrc.ssrc;
          let num = 0;
          if (null != ssrc) {
            num = ssrc;
          }
          let tmp = num > 0;
          if (tmp) {
            tmp = true === ssrc.active;
          }
          if (tmp) {
            const _videoQuality = self._videoQuality;
            if (null != _videoQuality) {
              _videoQuality.setOutboundSsrc(num);
            }
          }
        });
      }
      if (self.userId !== userId) {
        let tmp6 = 0 === videoSsrc && null === streamId;
        if (tmp6) {
          const _videoQuality = self._videoQuality;
          let hasItem;
          if (null != _videoQuality) {
            const inboundParticipants = _videoQuality.getInboundParticipants();
            hasItem = inboundParticipants.includes(userId);
          }
          tmp6 = !hasItem;
        }
        if (!tmp6) {
          const _videoQuality2 = self._videoQuality;
          if (null != _videoQuality2) {
            _videoQuality2.setInboundUser(userId, videoSsrc);
          }
          const _videoHealthManager = self._videoHealthManager;
          if (null != _videoHealthManager) {
            const user = _videoHealthManager.createUser(userId);
          }
        }
      }
      if (null != self._connection) {
        if (self.userId !== userId) {
          if (null != self._localMediaSinkWantsManager) {
            const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
            _localMediaSinkWantsManager.setStreamId(userId, streamId);
          } else if (null != self._goLiveQualityManager) {
            const _goLiveQualityManager = self._goLiveQualityManager;
            if (_goLiveQualityManager.getUserID() === userId) {
              const _goLiveQualityManager2 = self._goLiveQualityManager;
              if (null != _goLiveQualityManager2) {
                _goLiveQualityManager2.setStreamId(streamId);
              }
            }
          }
        }
      }
    }
  };
  items[63] = {
    key: "_handleLocalVideoDisabled",
    value(arg0, arg1) {
      const self = this;
      if (this.userId !== arg0) {
        const orCreateVideoQuality = self.getOrCreateVideoQuality();
        if (null == orCreateVideoQuality) {
          const logger = self.logger;
          logger.error("_handleLocalVideoDisabled: Unable to create videoQuality.");
        } else {
          orCreateVideoQuality.setUserVideoDisabled(arg0, arg1);
        }
      }
    }
  };
  items[64] = {
    key: "_handleRemoteStreamsReady",
    value(arg0) {
      let obj = RTCConnection(closure_3[22]);
      const diff = obj.now() - this._connectStartTime;
      obj = {};
      const merged = Object.assign(this._getAnalyticsProperties());
      obj["number_of_users"] = arg0;
      obj["duration_ms"] = diff;
      callback(closure_3[24]).track(constants.VOICE_CONNECTION_REMOTE_STREAMS_CREATED, obj);
    }
  };
  items[65] = {
    key: "_handleVideo",
    value(arg0, arg1, arg2, ssrc, arr) {
      let active;
      let iter;
      const self = this;
      const RTCConnection = this;
      if (null != this._connection) {
        if (self.userId !== arg1) {
          if (null != self._localMediaSinkWantsManager) {
            const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
            _localMediaSinkWantsManager.setAudioSSRC(arg1, arg2);
            const mapped = arr.map((rid) => ({ type: constants.VIDEO, rid: rid.rid, ssrc: rid.ssrc, rtxSsrc: rid.rtxSsrc, quality: rid.quality, active: arg3 > 0 }));
            if (0 === mapped.length) {
              let obj = { type: constants7.VIDEO, rid: "100", ssrc, rtxSsrc: ssrc + 1, quality: 100, active: ssrc > 0 };
              mapped.push(obj);
            }
            const _localMediaSinkWantsManager2 = self._localMediaSinkWantsManager;
            _localMediaSinkWantsManager2.setVideoSSRCs(arg1, mapped);
          } else {
            const items = [];
            const tmp12 = callback5(arr);
            const iter3 = tmp12();
            let iter2 = iter3;
            if (!iter3.done) {
              do {
                let value = iter2.value;
                let tmp = tmp4;
                if (null != value.ssrc) {
                  tmp = tmp4;
                  if (null != value.quality) {
                    obj = {};
                    ({ ssrc: obj.ssrc, quality: obj.quality, active } = value);
                    let tmp2 = null == active;
                    if (!tmp2) {
                      tmp2 = active;
                    }
                    obj.active = tmp2;
                    arr = items.push(obj);
                    tmp = active;
                  }
                }
                iter = tmp12();
                let tmp4 = tmp;
                iter2 = iter;
              } while (!iter.done);
            }
            const _goLiveQualityManager = self._goLiveQualityManager;
            if (null != _goLiveQualityManager) {
              _goLiveQualityManager.setUserID(arg1);
            }
            const _goLiveQualityManager2 = self._goLiveQualityManager;
            if (null != _goLiveQualityManager2) {
              const result = _goLiveQualityManager2.updateAudioAndVideoStreamInfo(arg2, items);
            }
          }
          if (null != arr) {
            const item = arr.forEach((quality) => {
              if (100 === quality.quality) {
                self.emit(self(closure_3[41]).RTCConnectionEvent.VideoSourceQualityChanged, self.guildId, self.channelId, arg1, quality.maxResolution, quality.maxFrameRate, self.context);
              }
            });
          }
        }
      }
    }
  };
  items[66] = {
    key: "_handleControlPing",
    value(arg0) {
      const self = this;
      if (!store2.supports(constants5.NATIVE_PING)) {
        self._handlePing(arg0);
      }
    }
  };
  items[67] = {
    key: "_handlePing",
    value(value) {
      let length;
      const self = this;
      if (undefined !== value) {
        const _pings = self._pings;
        const obj = {};
        const _Date = Date;
        obj.time = Date.now();
        obj.value = value;
        _pings.push(obj);
        if (self._pings.length >= 200) {
          do {
            let _pings1 = self._pings;
            let arr = _pings1.shift();
            length = self._pings.length;
          } while (length >= 200);
        }
        if (value > 500) {
          self._pingBadCount = self._pingBadCount + 1;
        }
        self.emit(RTCConnection(closure_3[41]).RTCConnectionEvent.Ping, self._pings, self.quality);
      }
    }
  };
  items[68] = {
    key: "_handlePingTimeout",
    value(arg0, arg1) {
      const self = this;
      const _pingTimeouts = this._pingTimeouts;
      _pingTimeouts.push(arg0);
      const length = this._pingTimeouts.length;
      let tmp2 = length >= 3;
      if (tmp2) {
        tmp2 = self._pingTimeouts[length - 1] === self._pingTimeouts[length - 2] + 1;
      }
      if (tmp2) {
        tmp2 = self._pingTimeouts[length - 2] === self._pingTimeouts[length - 3] + 1;
      }
      if (tmp2) {
        self._handlePing(arg1);
      }
    }
  };
  items[69] = {
    key: "_handleOutboundLossRate",
    value(_outboundLossRate) {
      this._outboundLossRate = _outboundLossRate;
      this.emit(RTCConnection(closure_3[41]).RTCConnectionEvent.OutboundLossRate, _outboundLossRate);
    }
  };
  items[70] = {
    key: "_getAnalyticsProperties",
    value() {
      const self = this;
      const channel = store.getChannel(this.channelId);
      let type;
      if (null != channel) {
        type = channel.type;
      }
      const obj = { guild_id: self.guildId, channel_id: self.channelId, channel_type: type, rtc_connection_id: self.getRTCConnectionId() };
      ({ context: obj.context, voiceVersion: obj.voice_backend_version, rtcWorkerVersion: obj.rtc_worker_backend_version } = self);
      return obj;
    }
  };
  items[71] = {
    key: "_handleClientConnect",
    value(arr) {
      const self = this;
      const RTCConnection = this;
      const item = arr.forEach((arg0) => {
        const _userIds = self._userIds;
        _userIds.add(arg0);
        const _connection = self._connection;
        if (null != _connection) {
          const user = _connection.createUser(arg0, 0);
        }
      });
      this.emit(RTCConnection(closure_3[41]).RTCConnectionEvent.ClientConnect, arr);
      const _videoQuality = this._videoQuality;
      if (null != _videoQuality) {
        const result = _videoQuality.updateCallUserIdsCount(self._userIds.size);
      }
      const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
      if (null != _localMediaSinkWantsManager) {
        _localMediaSinkWantsManager.updateCallUserIds(self._userIds);
      }
    }
  };
  items[72] = {
    key: "_handleClientDisconnect",
    value(arg0) {
      const self = this;
      const _videoQuality = this._videoQuality;
      if (null != _videoQuality) {
        if (self.context === constants6.DEFAULT) {
          const inboundStats = _videoQuality.getInboundStats(arg0);
          let num_frames;
          if (null != inboundStats) {
            num_frames = inboundStats.num_frames;
          }
          let num2 = 0;
          if (null != num_frames) {
            num2 = num_frames;
          }
          if (null != inboundStats) {
            if (num2 > 0) {
              let obj = {};
              const merged = Object.assign(self._getAnalyticsProperties());
              const obj2 = callback(closure_3[24]);
              obj["app_hardware_acceleration_enabled"] = callback(closure_3[47]).getAppHardwareAccelerationEnabled();
              obj["media_session_id"] = self.getMediaSessionId();
              obj["sender_user_id"] = arg0;
              obj["reason"] = "User disconnected";
              obj["participant_type"] = "receiver";
              obj["guild_region"] = store3.getRegion(self.hostname);
              obj["hostname"] = self.hostname;
              obj["hardware_enabled"] = store2.getHardwareEncoding();
              const merged1 = Object.assign(inboundStats);
              const merged2 = Object.assign(_videoQuality.getNetworkStats());
              const merged3 = Object.assign(_videoQuality.getCodecUsageStats("receiver", arg0));
              obj2.track(constants.VIDEO_STREAM_ENDED, obj);
              _videoQuality.destroyUser(arg0);
              const _videoHealthManager = self._videoHealthManager;
              if (null != _videoHealthManager) {
                _videoHealthManager.deleteUser(arg0);
              }
              const obj4 = callback(closure_3[47]);
            }
          }
        }
      }
      const _connection = self._connection;
      if (null != _connection) {
        _connection.destroyUser(arg0);
      }
      const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
      if (null != _localMediaSinkWantsManager) {
        _localMediaSinkWantsManager.destroyUser(arg0);
      }
      const _userIds = self._userIds;
      _userIds.delete(arg0);
      self.emit(RTCConnection(closure_3[41]).RTCConnectionEvent.ClientDisconnect, arg0);
      const _localMediaSinkWantsManager2 = self._localMediaSinkWantsManager;
      if (null != _localMediaSinkWantsManager2) {
        _localMediaSinkWantsManager2.updateCallUserIds(self._userIds);
      }
      const _videoQuality2 = self._videoQuality;
      if (null != _videoQuality2) {
        const result = _videoQuality2.updateCallUserIdsCount(self._userIds.size);
      }
      if (1 === self._userIds.size) {
        obj = RTCConnection(closure_3[22]);
        self._secureFramesLastBecameAloneTime = obj.now();
      }
    }
  };
  items[73] = {
    key: "_handleCodecs",
    value(arg0, arg1) {
      let OPUS = arg0;
      let H264 = arg1;
      const self = this;
      const _connection = this._connection;
      if (null != _connection) {
        if (null != self.protocol) {
          if (null == OPUS) {
            OPUS = closure_32.OPUS;
          }
          if (null == H264) {
            H264 = closure_32.H264;
          }
          _connection.setCodecs(OPUS, H264, self.context);
          self._hasCodecs = true;
          const result = self._trackVoiceConnectionSuccess(_connection);
        }
      }
      const logger = self.logger;
      logger.warn("Cannot set codecs on connection with protocol:", self.protocol);
    }
  };
  items[74] = {
    key: "_trackVoiceConnectionSuccess",
    value(context) {
      const self = this;
      function nullableSubtract(onConnectCallbackAt, onConnectCallbackAt2) {
        let diff = null;
        if (null != onConnectCallbackAt) {
          diff = null;
          if (null != onConnectCallbackAt2) {
            diff = onConnectCallbackAt - onConnectCallbackAt2;
          }
        }
        return diff;
      }
      if (!this._voiceConnectionSuccessTracked) {
        if (self.state === constants3.RTC_CONNECTED) {
          if (self._hasCodecs) {
            self._voiceConnectionSuccessTracked = true;
            let preferredRegion = null;
            if (store3.shouldIncludePreferredRegion()) {
              preferredRegion = store3.getPreferredRegion();
            }
            const settings = store2.getSettings();
            const result = self._getAnalyticsProperties();
            let obj = callback(closure_3[24]);
            obj = {};
            const merged = Object.assign(result);
            obj["hostname"] = self.hostname;
            obj["port"] = self.port;
            obj["protocol"] = self.protocol;
            obj["cloudflare_best_region"] = preferredRegion;
            obj["connect_time"] = RTCConnection(closure_3[22]).now() - 1 === self._connectCount ? self._createdTime : self._connectStartTime;
            obj["connect_count"] = self._connectCount;
            const mediaEngine = store2.getMediaEngine();
            obj["audio_subsystem"] = mediaEngine.getAudioSubsystem();
            const mediaEngine1 = store2.getMediaEngine();
            obj["audio_layer"] = mediaEngine1.getAudioLayer();
            obj["automatic_audio_subsystem"] = settings.automaticAudioSubsystem;
            obj["media_session_id"] = self.getMediaSessionId();
            obj["participant_type"] = self.getVoiceParticipantType();
            obj["join_voice_id"] = self.joinVoiceId;
            const mediaEngine2 = store2.getMediaEngine();
            let tmp18 = mediaEngine2.getVideoInputDeviceId() !== closure_35;
            if (tmp18) {
              tmp18 = context.context === constants6.DEFAULT;
            }
            obj["is_camera_enabled"] = tmp18;
            const stateHistory = self.stateHistory;
            const merged1 = Object.assign(stateHistory.getVoiceConnectionSuccessStats());
            obj.track(constants.VOICE_CONNECTION_SUCCESS, obj);
            const _performance = performance;
            const obj3 = RTCConnection(closure_3[22]);
            const nowResult = performance.now();
            obj = { rtc_connection_id: result.rtc_connection_id, time_1_creation_to_connect: self._connectStartTime - self._createdTime, time_2_media_engine_connect: self._mediaEngineConnectDuration };
            const transportInfo = context.transportInfo;
            let createConnectionTime;
            if (null != transportInfo) {
              createConnectionTime = transportInfo.createConnectionTime;
            }
            obj.time_3_media_engine_create_native_connection = createConnectionTime;
            const transportInfo2 = context.transportInfo;
            let connectTime;
            if (null != transportInfo2) {
              connectTime = transportInfo2.connectTime;
            }
            obj.time_4_media_engine_connect_to_socket = connectTime;
            const transportInfo3 = context.transportInfo;
            let prop;
            if (null != transportInfo3) {
              prop = transportInfo3.connectCallbackScheduledMs;
            }
            obj.time_5_scheduling_connected_callback = nullableSubtract(context.onConnectCallbackAt, prop);
            obj.time_6_state_connected_to_end_measure = nullableSubtract(nowResult, context.onConnectCallbackAt);
            obj.connect_count = self._connectCount;
            obj.rtc_connecting_native_connect = nullableSubtract(context.onConnectCallbackAt, context.beginInitializeAt);
            obj.rtc_connecting_native_codecs = nullableSubtract(context.onVideoCodecsCallbackAt, context.onConnectCallbackAt);
            obj.rtc_connecting_native_crypto_modes = nullableSubtract(context.onEncryptionModesCallbackAt, context.onVideoCodecsCallbackAt);
            callback(closure_3[24]).track(constants.VOICE_CONNECTION_TTC_COLLECTED, obj);
            const obj7 = callback(closure_3[24]);
          }
        }
      }
    }
  };
  items[75] = {
    key: "_handleSDP",
    value(arg0) {
      const self = this;
      const _connection = this._connection;
      if (null != _connection) {
        if (null != self.protocol) {
          _connection.setSDP(arg0);
        }
      }
      const logger = self.logger;
      logger.warn("Cannot set SDP on connection with protocol:", self.protocol);
    }
  };
  items[76] = {
    key: "_handleMediaSessionId",
    value(_mediaSessionId) {
      this._mediaSessionId = _mediaSessionId;
      const logger = this.logger;
      logger.info("Setting media-session-id: " + _mediaSessionId + " for rtc-connection-id: " + this.getRTCConnectionId());
      let obj = callback(closure_3[63]);
      const rawThermalState = obj.getRawThermalState();
      obj = {};
      const merged = Object.assign(this._getAnalyticsProperties());
      obj["media_session_id"] = this.getMediaSessionId();
      obj["parent_media_session_id"] = this.parentMediaSessionId;
      obj["raw_thermal_state"] = rawThermalState;
      callback(closure_3[24]).track(constants.MEDIA_SESSION_JOINED, obj);
      const obj2 = callback(closure_3[24]);
      obj = { type: "MEDIA_SESSION_JOINED", mediaSessionId: this.getMediaSessionId(), context: this.context };
      callback(closure_3[38]).dispatch(obj);
    }
  };
  items[77] = {
    key: "_handleMediaSinkWants",
    value(_remoteVideoSinkWants) {
      let _connection;
      let logger;
      ({ _connection, logger } = this);
      logger.info("Remote media sink wants: " + JSON.stringify(_remoteVideoSinkWants));
      this._remoteVideoSinkWants = _remoteVideoSinkWants;
      let obj = callback(closure_3[38]);
      obj = { type: "RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS", context: this.context, wants: _remoteVideoSinkWants, channelId: this.channelId, guildId: this.guildId, userId: this.userId };
      obj.dispatch(obj);
      if (null != _connection) {
        const result = _connection.setRemoteVideoSinkWants(_remoteVideoSinkWants);
      }
    }
  };
  items[78] = {
    key: "_handleCodeVersion",
    value(voiceVersion, rtcWorkerVersion) {
      this.voiceVersion = voiceVersion;
      this.rtcWorkerVersion = rtcWorkerVersion;
    }
  };
  items[79] = {
    key: "_handleKeyframeInterval",
    value(arg0) {
      const self = this;
      const _connection = this._connection;
      if (null != _connection) {
        if (null != self.protocol) {
          _connection.setKeyframeInterval(arg0);
        }
      }
      const logger = self.logger;
      logger.warn("Cannot set keyframe interval on connection with protocol:", self.protocol);
    }
  };
  items[80] = {
    key: "_handleBandwidthEstimationExperiment",
    value(_bandwidthEstimationExperiment) {
      this._bandwidthEstimationExperiment = _bandwidthEstimationExperiment;
      const mediaEngineExperiments = callback(closure_3[64]).getMediaEngineExperiments(_bandwidthEstimationExperiment);
      let tmp = null !== mediaEngineExperiments;
      if (tmp) {
        tmp = 0 !== mediaEngineExperiments.length;
      }
      if (tmp) {
        const _connection = this._connection;
        if (null != _connection) {
          const result = _connection.setBandwidthEstimationExperiments(mediaEngineExperiments);
        }
      }
    }
  };
  items[81] = {
    key: "_trackSecureFrameTransition",
    value(arg0) {
      const self = this;
      function differenceOrUndefined(executeFinishedTime, firstProposalsReceivedTime) {
        let diff;
        if (null != executeFinishedTime) {
          if (null != firstProposalsReceivedTime) {
            diff = executeFinishedTime - firstProposalsReceivedTime;
          }
        }
        return diff;
      }
      const _secureFramesTransitionStates = this._secureFramesTransitionStates;
      const value = _secureFramesTransitionStates.get(arg0);
      if (null != value) {
        const _secureFramesTransitionStates2 = self._secureFramesTransitionStates;
        _secureFramesTransitionStates2.delete(arg0);
        let obj = callback(closure_3[24]);
        obj = {};
        const merged = Object.assign(self._getAnalyticsProperties());
        obj["media_session_id"] = self.getMediaSessionId();
        obj["parent_media_session_id"] = self.parentMediaSessionId;
        obj["sender_user_id"] = self.userId;
        obj["transition_id"] = arg0;
        obj["protocol_version"] = value.protocolVersion;
        obj["start_to_init_duration"] = differenceOrUndefined(value.initReceivedTime, self._connectStartTime);
        obj["init_duration"] = differenceOrUndefined(value.initFinishedTime, value.initReceivedTime);
        obj["first_proposals_duration"] = differenceOrUndefined(value.firstProposalsFinishedTime, value.firstProposalsReceivedTime);
        obj["last_proposals_duration"] = differenceOrUndefined(value.lastProposalsFinishedTime, value.lastProposalsReceivedTime);
        obj["duration_between_proposals"] = differenceOrUndefined(value.lastProposalsReceivedTime, value.firstProposalsReceivedTime);
        obj["total_proposals_size"] = value.totalProposalsSize;
        obj["total_commit_welcome_size"] = value.totalCommitWelcomeSize;
        obj["welcome_wait_duration"] = differenceOrUndefined(value.welcomeReceivedTime, value.initFinishedTime);
        obj["welcome_duration"] = differenceOrUndefined(value.welcomeFinishedTime, value.welcomeReceivedTime);
        obj["welcome_size"] = value.welcomeSize;
        obj["welcome_error"] = value.welcomeError;
        obj["commit_wait_duration"] = differenceOrUndefined(value.commitReceivedTime, value.lastProposalsFinishedTime);
        obj["commit_duration"] = differenceOrUndefined(value.commitFinishedTime, value.commitReceivedTime);
        obj["commit_size"] = value.commitSize;
        obj["commit_error"] = value.commitError;
        obj["prepare_wait_duration"] = differenceOrUndefined(value.prepareReceivedTime, self._secureFramesLastBecameAloneTime);
        obj["prepare_duration"] = differenceOrUndefined(value.prepareFinishedTime, value.prepareReceivedTime);
        obj["execute_wait_duration"] = differenceOrUndefined(value.executeReceivedTime, value.readyTime);
        obj["execute_duration"] = differenceOrUndefined(value.executeFinishedTime, value.executeReceivedTime);
        obj["execute_error"] = value.executeError;
        obj["incomplete"] = value.incomplete;
        obj["active_transition_count"] = self._secureFramesTransitionStates.size;
        obj["time_since_creation"] = RTCConnection(closure_3[22]).now() - value.creationTime;
        obj["users_added_count"] = value.usersAdded;
        obj["users_removed_count"] = value.usersRemoved;
        obj["roster_size_after"] = value.rosterSizeAfter;
        obj["init_to_finish_duration"] = differenceOrUndefined(value.executeFinishedTime, value.initReceivedTime);
        obj.track(constants.SECURE_FRAMES_TRANSITION, obj);
        if (0 === arg0) {
          const result = self._trackRemainingSecureFrameTransitions();
        }
        const obj3 = RTCConnection(closure_3[22]);
      }
    }
  };
  items[82] = {
    key: "_trackRemainingSecureFrameTransitions",
    value() {
      const RTCConnection = this;
      const prop = this._secureFramesTransitionStates;
      const item = prop.forEach((arg0, arg1) => {
        arg0.incomplete = true;
        const result = self._trackSecureFrameTransition(arg1);
      });
    }
  };
  items[83] = {
    key: "_storeSecureFrameNextTransitionData",
    value(arg0) {
      const self = this;
      if (null == this._secureFramesNextTransitionState) {
        let obj = { creationTime: RTCConnection(closure_3[22]).now() };
        self._secureFramesNextTransitionState = obj;
        const obj2 = RTCConnection(closure_3[22]);
      }
      obj = {};
      const merged = Object.assign(self._secureFramesNextTransitionState);
      const merged1 = Object.assign(arg0);
      self._secureFramesNextTransitionState = obj;
      return obj;
    }
  };
  items[84] = {
    key: "_storeSecureFrameTransitionData",
    value(arg0, arg1) {
      const self = this;
      const _secureFramesTransitionStates = this._secureFramesTransitionStates;
      let result = _secureFramesTransitionStates.get(arg0);
      if (null == result) {
        result = self._storeSecureFrameNextTransitionData({});
        self._secureFramesNextTransitionState = undefined;
      }
      const _secureFramesTransitionStates2 = self._secureFramesTransitionStates;
      const merged = Object.assign(result);
      const merged1 = Object.assign(arg1);
      result = _secureFramesTransitionStates2.set(arg0, {});
      self._secureFramesMaxConcurrentTransitions = Math.max(self._secureFramesMaxConcurrentTransitions, self._secureFramesTransitionStates.size);
    }
  };
  items[85] = {
    key: "_handleSecureFramesInit",
    value(protocolVersion) {
      const self = this;
      const RTCConnection = this;
      let obj = RTCConnection(closure_3[22]);
      const nowResult = obj.now();
      obj = { c: constants9.SECURE_FRAMES_INIT, v: protocolVersion };
      this.recordEvent(obj);
      if (protocolVersion > 0) {
        const logger = self.logger;
        const _HermesInternal = HermesInternal;
        logger.info("DAVE protocol init with protocol version: " + protocolVersion);
        self._mlsInitReceivedTime = nowResult;
        const _connection2 = self._connection;
        if (null != _connection2) {
          const result = _connection2.prepareSecureFramesEpoch("1", protocolVersion, self.trueChannelId);
        }
        self._sendMLSKeyPackage();
        obj = { initReceivedTime: nowResult, initFinishedTime: RTCConnection(closure_3[22]).now(), protocolVersion };
        const result1 = self._storeSecureFrameNextTransitionData(obj);
        const obj1 = { c: constants9.MLS_INIT };
        self.recordEvent(obj1);
        const obj4 = RTCConnection(closure_3[22]);
      } else {
        const _connection = self._connection;
        if (null != _connection) {
          const result2 = _connection.prepareSecureFramesTransition(0, protocolVersion, () => {
            const _connection = self._connection;
            let obj = _connection;
            if (null != _connection) {
              const result = obj.executeSecureFramesTransition(0);
            }
            obj = { initReceivedTime: nowResult, initFinishedTime: self(closure_3[22]).now(), protocolVersion: arg0, executeError: false };
            const result1 = self._storeSecureFrameTransitionData(0, obj);
            const result2 = self._trackSecureFrameTransition(0);
          });
        }
      }
    }
  };
  items[86] = {
    key: "_handleSecureFramesRosterChange",
    value(arg0, arg1) {
      const RTCConnection = this;
      const items = [];
      let closure_2 = 0;
      let closure_3 = 0;
      const entries = Object.entries(arg0);
      const item = entries.forEach((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        items.push(tmp);
        if (null != tmp2) {
          if (0 !== tmp2.byteLength) {
            closure_2 = closure_2 + 1;
            const _secureFramesRosterMap = self._secureFramesRosterMap;
            const result = _secureFramesRosterMap.set(tmp, tmp2);
          }
        }
        closure_3 = closure_3 + 1;
        const _secureFramesRosterMap2 = self._secureFramesRosterMap;
        _secureFramesRosterMap2.delete(tmp);
      });
      const result = this._storeSecureFrameTransitionData(arg1, { usersAdded: closure_2, usersRemoved: closure_3, rosterSizeAfter: this._secureFramesRosterMap.size });
      this.emit(RTCConnection(closure_3[41]).RTCConnectionEvent.RosterMapUpdate, items);
    }
  };
  items[87] = {
    key: "_handleSecureFramesPrepareTransition",
    value(arg0, arg1) {
      const self = this;
      const RTCConnection = this;
      const logger = this.logger;
      logger.info("Preparing DAVE protocol transition: " + arg0 + ", protocol version: " + arg1);
      this._secureFramesTransitionPrepareCount = this._secureFramesTransitionPrepareCount + 1;
      closure_3 = RTCConnection(closure_3[22]).now();
      if (0 === arg1) {
        self._trackMLSFailures({ info: null, newMessages: null });
      }
      const _connection = self._connection;
      if (null != _connection) {
        const result = _connection.prepareSecureFramesTransition(arg0, arg1, () => {
          const result = self._maybeSendSecureFramesTransitionReady(arg0);
          const obj = { protocolVersion: arg1, prepareReceivedTime: closure_3, prepareFinishedTime: self(closure_3[22]).now() };
          const result1 = self._storeSecureFrameTransitionData(arg0, obj);
        });
      }
    }
  };
  items[88] = {
    key: "_handleSecureFramesPrepareEpoch",
    value(arg0, arg1) {
      const self = this;
      const logger = this.logger;
      logger.info("Preparing DAVE protocol epoch: " + arg0 + ", protocol version: " + arg1);
      const str = arg0.toString();
      const _connection = this._connection;
      if (null != _connection) {
        const result = _connection.prepareSecureFramesEpoch(str, arg1, self.trueChannelId);
      }
      if ("1" === str) {
        let obj = RTCConnection(closure_3[22]);
        self._mlsInitReceivedTime = obj.now();
        self._sendMLSKeyPackage();
        obj = { c: constants9.MLS_INIT };
        self.recordEvent(obj);
      }
    }
  };
  items[89] = {
    key: "_sendMLSKeyPackage",
    value() {
      const RTCConnection = this;
      const _connection = this._connection;
      if (null != _connection) {
        const mLSKeyPackage = _connection.getMLSKeyPackage((arg0) => {
          const logger = self.logger;
          logger.info("Got MLS key package, sending to RTC server");
          const _socket = self._socket;
          if (null != _socket) {
            _socket.sendMLSKeyPackage(arg0);
          }
        });
      }
    }
  };
  items[90] = {
    key: "_maybeSendSecureFramesTransitionReady",
    value(arg0) {
      const self = this;
      if (0 !== arg0) {
        const logger = self.logger;
        const _HermesInternal = HermesInternal;
        logger.info("Sending DAVE protocol ready for transition ID " + arg0);
        const _socket = self._socket;
        if (null != _socket) {
          const result = _socket.secureFramesReadyForTransition(arg0);
        }
        const obj = { readyTime: RTCConnection(closure_3[22]).now() };
        const result1 = self._storeSecureFrameTransitionData(arg0, obj);
        const obj2 = RTCConnection(closure_3[22]);
      }
    }
  };
  items[91] = {
    key: "_handleSecureFramesExecuteTransition",
    value(arg0) {
      const self = this;
      const logger = this.logger;
      logger.info("Executing DAVE protocol transition: " + arg0);
      this._secureFramesTransitionExecuteCount = this._secureFramesTransitionExecuteCount + 1;
      let obj = RTCConnection(closure_3[22]);
      const _connection = this._connection;
      if (null != _connection) {
        const result = obj2.executeSecureFramesTransition(tmp);
      }
      obj = { executeReceivedTime: obj.now() };
      const nowResult = obj.now();
      const obj2 = _connection;
      obj.executeFinishedTime = RTCConnection(closure_3[22]).now();
      obj.executeError = false;
      const result1 = self._storeSecureFrameTransitionData(tmp, obj);
      const result2 = self._trackSecureFrameTransition(tmp);
    }
  };
  items[92] = {
    key: "_handleMLSExternalSenderPackage",
    value(arg0) {
      const logger = this.logger;
      logger.info("Received MLS external sender package");
      const _connection = this._connection;
      if (null != _connection) {
        const result = _connection.updateMLSExternalSender(arg0);
      }
    }
  };
  items[93] = {
    key: "_handleMLSProposals",
    value(arg0, arg1) {
      const RTCConnection = this;
      closure_3 = RTCConnection(closure_3[22]).now();
      const logger = this.logger;
      logger.info("Received MLS proposals");
      const _connection = this._connection;
      if (null != _connection) {
        _connection.processMLSProposals(arg1, (byteLength) => {
          let obj = self(closure_3[22]);
          const nowResult = obj.now();
          const logger = self.logger;
          logger.info("Sending MLS commit welcome message");
          byteLength.sendMLSCommitWelcome(byteLength);
          let _secureFramesNextTransitionState = self._secureFramesNextTransitionState;
          if (null == _secureFramesNextTransitionState) {
            obj = { firstProposalsReceivedTime: closure_3, firstProposalsFinishedTime: nowResult };
            _secureFramesNextTransitionState = self._storeSecureFrameNextTransitionData(obj);
          }
          _secureFramesNextTransitionState.lastProposalsReceivedTime = closure_3;
          _secureFramesNextTransitionState.lastProposalsFinishedTime = nowResult;
          const totalProposalsSize = _secureFramesNextTransitionState.totalProposalsSize;
          let num = 0;
          if (null != totalProposalsSize) {
            num = totalProposalsSize;
          }
          _secureFramesNextTransitionState.totalProposalsSize = num + arg1.byteLength;
          const totalCommitWelcomeSize = _secureFramesNextTransitionState.totalCommitWelcomeSize;
          let num2 = 0;
          if (null != totalCommitWelcomeSize) {
            num2 = totalCommitWelcomeSize;
          }
          _secureFramesNextTransitionState.totalCommitWelcomeSize = num2 + byteLength.byteLength;
        });
      }
    }
  };
  items[94] = {
    key: "_handleMLSPrepareCommitTransition",
    value(arg0, arg1) {
      const RTCConnection = this;
      const logger = this.logger;
      logger.info("Received MLS commit for transition ID " + arg0);
      closure_3 = RTCConnection(closure_3[22]).now();
      const _connection = this._connection;
      if (null != _connection) {
        const result = _connection.prepareMLSCommitTransition(arg0, arg1, (arg0, protocolVersion) => {
          let obj = self;
          if (arg0) {
            obj._trackMLSFailures({ info: true, newMessages: true });
            obj._mlsSessionResetStartTime = undefined;
            const result = obj._handleSecureFramesRosterChange(arg2, arg0);
            const result1 = obj._maybeSendSecureFramesTransitionReady(arg0);
          } else {
            const logger = obj.logger;
            const _HermesInternal = HermesInternal;
            logger.warn("Failed to process MLS commit for transition ID " + arg0);
            obj._mlsSessionResetStartTime = self(closure_3[22]).now();
            const result2 = obj._flagMLSInvalidCommitWelcome(arg0);
            const result3 = obj._handleSecureFramesInit(protocolVersion);
            const obj2 = self(closure_3[22]);
          }
          obj = { protocolVersion, commitReceivedTime: closure_3, commitFinishedTime: self(closure_3[22]).now(), commitSize: protocolVersion.byteLength, commitError: !arg0 };
          const result4 = self._storeSecureFrameTransitionData(arg0, obj);
        });
      }
    }
  };
  items[95] = {
    key: "_handleMLSWelcome",
    value(arg0, arg1) {
      const RTCConnection = this;
      const logger = this.logger;
      logger.info("Received MLS welcome for transition ID " + arg0);
      closure_3 = RTCConnection(closure_3[22]).now();
      const _connection = this._connection;
      if (null != _connection) {
        _connection.processMLSWelcome(arg0, arg1, (arg0, protocolVersion) => {
          let obj = self;
          if (arg0) {
            obj._trackMLSFailures({ info: true, newMessages: true });
            obj._mlsSessionResetStartTime = undefined;
            const result = obj._handleSecureFramesRosterChange(arg2, arg0);
            const result1 = obj._maybeSendSecureFramesTransitionReady(arg0);
          } else {
            obj._mlsSessionResetStartTime = self(closure_3[22]).now();
            const result2 = obj._flagMLSInvalidCommitWelcome(arg0);
            obj._sendMLSKeyPackage();
            const obj2 = self(closure_3[22]);
          }
          obj = { protocolVersion, welcomeReceivedTime: closure_3, welcomeFinishedTime: self(closure_3[22]).now(), welcomeSize: protocolVersion.byteLength, welcomeError: !arg0 };
          const result3 = self._storeSecureFrameTransitionData(arg0, obj);
        });
      }
    }
  };
  items[96] = {
    key: "getMLSPairwiseFingerprint",
    value(arg0, arg1, arg2) {
      const _connection = this._connection;
      if (null != _connection) {
        const mLSPairwiseFingerprint = _connection.getMLSPairwiseFingerprint(arg0, arg1, arg2);
      }
    }
  };
  items[97] = {
    key: "_flagMLSInvalidCommitWelcome",
    value(arg0) {
      const logger = this.logger;
      logger.info("Flagging invalid MLS commit/welcome for transition ID " + arg0);
      const _socket = this._socket;
      if (null != _socket) {
        const result = _socket.flagMLSInvalidCommitWelcome(arg0);
      }
    }
  };
  items[98] = {
    key: "_handleMLSFailure",
    value(arr, reason) {
      const self = this;
      let obj = RTCConnection(closure_3[22]);
      const nowResult = obj.now();
      const tmp2 = +this._nextFailureId;
      this._nextFailureId = tmp2 + 1;
      obj = { c: constants9.MLS_FAILURE, i: tmp2 };
      this.recordEvent(obj);
      const _mlsFailures = this._mlsFailures;
      obj = { id: tmp2, source: arr, reason, count: 1 };
      let num = 0;
      if (null != this._mlsSessionResetStartTime) {
        num = 1;
      }
      obj.countDuringReset = num;
      obj.firstOccurrence = nowResult;
      let diff;
      if (null != self._mlsInitReceivedTime) {
        diff = nowResult - self._mlsInitReceivedTime;
      }
      obj.timeSinceInit = diff;
      obj.eventLog = callback7();
      _mlsFailures.push(obj);
      if (arr.includes("GetPersistedKeyPair")) {
        const obj1 = {};
        const intl = RTCConnection(closure_3[66]).intl;
        obj1.title = intl.string(RTCConnection(closure_3[66]).t.fJUioH);
        const intl2 = RTCConnection(closure_3[66]).intl;
        obj1.body = intl2.string(RTCConnection(closure_3[66]).t.CQLWvo);
        callback(closure_3[65]).show(obj1);
        const obj4 = callback(closure_3[65]);
      } else {
        const result = self._alertMLSFailureDebouced(arr, reason);
      }
    }
  };
  obj = {
    key: "_trackMLSFailures",
    value(arg0) {
      let done;
      let downgraded;
      let recovered;
      const self = this;
      ({ recovered, downgraded } = arg0);
      let obj = RTCConnection(closure_3[22]);
      const nowResult = obj.now();
      const mediaSessionId = this.getMediaSessionId();
      if (null != this._mlsSessionResetStartTime) {
        const diff = nowResult - self._mlsSessionResetStartTime;
      }
      const tmp4 = callback5(self._mlsFailures);
      let iter = tmp4();
      if (!iter.done) {
        do {
          let value = iter.value;
          let firstOccurrence = value.firstOccurrence;
          let tmp5 = closure_1;
          let tmp6 = closure_3;
          let obj2 = closure_1(closure_3[24]);
          let tmp7 = closure_22;
          obj = {};
          let tmp8 = obj;
          let merged = Object.assign(self._getAnalyticsProperties());
          obj["media_session_id"] = mediaSessionId;
          obj["parent_media_session_id"] = self.parentMediaSessionId;
          obj["failure_id"] = value.id;
          obj["failure_time"] = firstOccurrence - self._createdTime;
          obj["failure_source"] = value.source;
          obj["failure_reason"] = value.reason;
          obj["failure_count"] = value.count;
          obj["failure_was_recovered"] = recovered;
          obj["failure_cleared_by_downgrade"] = downgraded;
          obj["time_since_first_occurrence"] = nowResult - firstOccurrence;
          obj["time_since_last_reset"] = diff;
          obj["failure_count_during_reset"] = value.countDuringReset;
          obj["time_since_init"] = value.timeSinceInit;
          obj["event_history"] = value.eventLog;
          obj["connection_serial"] = self._connectionSerial;
          let trackResult = obj2.track(closure_22.MLS_FAILURES, obj);
          let iter2 = tmp4();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      self._mlsFailures = [];
    }
  };
  items[99] = obj;
  obj = {
    key: "_alertMLSFailure",
    value(arg0, arg1) {
      const currentUser = authStore2.getCurrentUser();
      let tmp = null != currentUser && currentUser.isStaff();
      if (!tmp) {
        tmp = null != currentUser && currentUser.isStaffPersonal();
        const tmp2 = null != currentUser && currentUser.isStaffPersonal();
      }
      if (tmp) {
        const obj = {};
        const _HermesInternal = HermesInternal;
        obj.title = "MLS Error in " + arg0;
        const _HermesInternal2 = HermesInternal;
        obj.body = "Error: " + arg1 + "! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!";
        callback(closure_3[65]).show(obj);
        const obj2 = callback(closure_3[65]);
      }
    }
  };
  items[100] = obj;
  obj = {
    key: "getExtraConnectionOptions",
    value() {
      return {};
    }
  };
  items[101] = obj;
  obj = {
    key: "getMediaStreamKey",
    value() {

    }
  };
  items[102] = obj;
  obj = {
    key: "shouldReportPeriodicStats",
    value(arg0) {
      const self = this;
      if (arg0.length > 10) {
        return false;
      } else {
        const mediaSessionId = self.getMediaSessionId();
        let tmp3 = null != mediaSessionId;
        if (tmp3) {
          tmp3 = callback(closure_3[67]).v3(mediaSessionId) % 100 <= 5;
          const obj = callback(closure_3[67]);
        }
        return tmp3;
      }
    }
  };
  items[103] = obj;
  obj = {
    key: "getInputDeviceName",
    value() {
      const inputDeviceId = store2.getInputDeviceId();
      const tmp2 = store2.getInputDevices()[inputDeviceId];
      let name;
      if (null != tmp2) {
        name = tmp2.name;
      }
      return name;
    }
  };
  items[104] = obj;
  obj = {
    key: "getOutputDeviceName",
    value() {
      const outputDeviceId = store2.getOutputDeviceId();
      const tmp2 = store2.getOutputDevices()[outputDeviceId];
      let name;
      if (null != tmp2) {
        name = tmp2.name;
      }
      return name;
    }
  };
  items[105] = obj;
  obj = {
    key: "getVideoDeviceName",
    value() {
      const videoDeviceId = store2.getVideoDeviceId();
      const tmp2 = store2.getVideoDevices()[videoDeviceId];
      let name;
      if (null != tmp2) {
        name = tmp2.name;
      }
      return name;
    }
  };
  items[106] = obj;
  obj = {
    key: "getInputDeviceSampleRate",
    value() {
      const _voiceQuality = this._voiceQuality;
      let prop;
      if (null != _voiceQuality) {
        prop = _voiceQuality.getAudioDeviceStats().input_device_session_sample_rate;
      }
      let tmp2 = null;
      if (null != prop) {
        tmp2 = prop;
      }
      return tmp2;
    }
  };
  items[107] = obj;
  return callback(RTCConnection, items);
}(importDefault(dependencyMap[68]));
const result = arg1(dependencyMap[69]).fileFinishedImporting("lib/RTCConnection.tsx");

export default tmp4;
