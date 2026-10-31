// Module ID: 5770
// Function ID: 5771
// Name: RTCConnection
// Dependencies: [5, 5771, 5781, 5782, 5783, 5784, 502, 4863, 4885, 2006, 5764, 5787, 5863, 1383, 1072, 5864, 5865, 5768, 5866, 559, 5772, 5792, 1242, 3, 5867, 5868, 1266, 5870, 5879, 5873, 5880, 1475, 1375, 4825, 1377, 572, 2005, 1396, 5882, 14, 5883, 5884, 5885, 5886, 5887, 5888, 5889, 1252, 5020, 5890, 5836, 5891, 5893, 5906, 5902, 5907, 5908, 2047, 5909, 5911, 5912, 5913, 5789, 5914, 5946, 5947, 5948, 5949, 5951, 5954, 5956, 5957, 5958, 1113, 551, 15655, 1251, 2]

// Module 5770 (RTCConnection)
import LoggerDefault from "Logger" /* 3 */;
import debounceDefault from "debounce" /* 551 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import intl3 from "intl" /* 1113 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import _modDef1251 from "module_1251" /* 1251 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import v1 from "v1" /* 1266 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import URLUtilsDefault from "URLUtils" /* 1377 */;
import FlagUtils from "FlagUtils" /* 1396 */;
import RTCControlSocket from "RTCControlSocket" /* 2005 */;
import CrossPlatformNativeUtilsDefault from "CrossPlatformNativeUtils" /* 5020 */;
import TimeUtils from "TimeUtils" /* 5772 */;
import SystemAnalyticsStore from "SystemAnalyticsStore" /* 5783 */;
import flatRestDefault from "flatRest" /* 5836 */;
import BrowserConstants from "BrowserConstants" /* 5865 */;
import WindowVisibilityVideoManager3 from "WindowVisibilityVideoManager" /* 5873 */;
import RTCConnectionEvent from "RTCConnectionEvent" /* 5882 */;
import DesktopGeneralPerfExperiment from "DesktopGeneralPerfExperiment" /* 5883 */;
import ProportionalVadIndicatorExperimentDefault from "ProportionalVadIndicatorExperiment" /* 5884 */;
import SurfaceDirectRendererExperiment from "SurfaceDirectRendererExperiment" /* 5888 */;
import LinuxGpuDecodeExperiment from "LinuxGpuDecodeExperiment" /* 5889 */;
import getMediaPerformanceClassDefault from "getMediaPerformanceClass" /* 5890 */;
import VoiceQuality from "VoiceQuality" /* 5893 */;
import SystemResourcesDefault from "SystemResources" /* 5902 */;
import SystemResponsivenessDefault from "SystemResponsiveness" /* 5906 */;
import getFrontierTuningConfigIfEligibleDefault from "getFrontierTuningConfigIfEligible" /* 5909 */;
import ServerLadderExperiment2 from "ServerLadderExperiment" /* 5911 */;
import AV1BitrateTuningExperiment from "AV1BitrateTuningExperiment" /* 5912 */;
import NativeMuteManagerDefault from "NativeMuteManager" /* 5914 */;
import VoiceDurationDefault from "VoiceDuration" /* 5946 */;
import AVError from "AVError" /* 5947 */;
import VideoQuality from "VideoQuality" /* 5949 */;
import VideoHealthManager from "VideoHealthManager" /* 5951 */;
import ThermalUtilsDefault from "ThermalUtils" /* 5954 */;
import BandwidthEstimationExperimentDefault from "BandwidthEstimationExperiment" /* 5956 */;
import DaveMessageValidator from "DaveMessageValidator" /* 5957 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5958 */;
import E2eLatencyMeasurementExperiment2 from "E2eLatencyMeasurementExperiment" /* 15655 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import DeviceFrecencyStore from "DeviceFrecencyStore" /* 5771 */;
import MediaEngineStatsStore from "MediaEngineStatsStore" /* 5781 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 5782 */;
import AudioRouteStore from "AudioRouteStore" /* 5784 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildStore from "GuildStore" /* 4885 */;
import MediaEngineStore from "MediaEngineStore" /* 2006 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import RTCDebugStore from "RTCDebugStore" /* 5787 */;
import RTCRegionStore from "RTCRegionStore" /* 5863 */;
import UserStore from "UserStore" /* 1383 */;
import Constants_mod from "Constants" /* 1072 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 5864 */;
import Constants_mod2 from "Constants" /* 5768 */;
import TypedEventEmitter from "TypedEventEmitter" /* 5792 */;
import size_mod from "module_2" /* 2 */;

const RTCControlSocketDefault = RTCControlSocket;
const VoiceQualityDefault = VoiceQuality;
let _require, c1, closure_2, dependencyMap, importDefault, set, videoCodec;

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let tmp11;
let tmp8;
const BackoffDefault = tmp11(559);
const NetworkUtilsDefault = tmp11(1475);
const DiscordNativeDefault = tmp11(4825);
const DaveJoinTimerDefault = tmp11(5867);
const RTCMediaSinkWantsManagerDefault = tmp11(5870);
const GoLiveQualityManagerDefault = tmp11(5879);
const setShouldRecordNextConnectionDefault = tmp11(5880);
const VideoStabilizationExperimentDefault = tmp8(5887);
let obj = function _readAvx512EntropyHistogramSupported() {
  obj = _asyncToGenerator(async () => {
    let c2;
    let c3;
    let closure_1;
    let hasItem;
    let cpu_features = await getSystemAnalyticsInfo();
    if (cpu_features != null) {
      cpu_features = cpu_features.cpu_features;
      if (cpu_features != null) {
        hasItem = cpu_features.includes(closure_129_0(closure_129_2[18]).CpuFeature.Avx512icl);
      }
    }
    return true === hasItem;
  });
  return obj(...arguments);
};
function getAvx512EntropyHistogramSupported() {
  function readAvx512EntropyHistogramSupported() {
    return obj(...arguments);
  }
  if (closure_34 == null) {
    closure_34 = readAvx512EntropyHistogramSupported();
  }
  return closure_34;
}
function getEventHistoryString() {
  const items = [];
  TimeUtils;
  for (const item10012 of closure_39) {
    obj = { t: tmp2 - item10012.t };
    let push = items.push;
    let merged = Object.assign(item10012);
    let arr = push(obj);
    continue;
  }
  return JSON.stringify(items);
}
const getSystemAnalyticsInfo = SystemAnalyticsStore.getSystemAnalyticsInfo;
let Constants = Constants_mod2;
({ AnalyticEvents: closure_17, ChannelTypes: closure_18, RTCConnectionStates: closure_19, RTCConnectionQuality: closure_20, BoostedGuildTiers: closure_21 } = Constants);
({ ApplicationStreamFPS: closure_22, ApplicationStreamResolutions: closure_23 } = StreamSettingsConstants);
let closure_24 = BrowserConstants.BROWSER_SUPPORTS_UNIFIED_PLAN;
Constants = Constants_mod2;
({ Features: closure_25, MediaEngineContextTypes: closure_26, ConnectionStates: closure_27, Codecs: closure_28, MediaTypes: closure_29, SpeakingFlags: closure_30, DISABLED_DEVICE_ID: closure_31, VideoEncoderLatencyProfile: closure_32 } = Constants);
obj = /^https/;
let str = "ws:";
if (obj.test("https:")) {
  str = "wss:";
}
let closure_34 = null;
const constants11 = { CONNECTION_CREATE: 0, [0]: "CONNECTION_CREATE", CONNECTION_DESTROY: 1, [1]: "CONNECTION_DESTROY", CONNECT: 2, [2]: "CONNECT", MLS_FAILURE: 3, [3]: "MLS_FAILURE", MESSAGE_RECEIVE: 4, [4]: "MESSAGE_RECEIVE", MESSAGE_SEND: 5, [5]: "MESSAGE_SEND", SET_ENDPOINT: 6, [6]: "SET_ENDPOINT", RECONNECT: 7, [7]: "RECONNECT", SET_STATE: 8, [8]: "SET_STATE", SET_NEXT_CHANNEL_ID: 9, [9]: "SET_NEXT_CHANNEL_ID", MLS_INIT: 10, [10]: "MLS_INIT", SECURE_FRAMES_INIT: 11, [11]: "SECURE_FRAMES_INIT", DOWNGRADE_REFUSED: 12, [12]: "DOWNGRADE_REFUSED" };
let c38 = 0;
let closure_39 = [];
class RTCConnection extends TypedEventEmitter {
  constructor(arg0) {
    let channelId;
    let context;
    let createdTime;
    let guildId;
    let joinVoiceId;
    let parentMediaSessionId;
    let sessionId;
    let streamChannelId;
    let streamServerId;
    let tmp;
    let tmp2;
    let tmp6;
    let tmp7;
    let userId;
    ({ userId, sessionId, guildId, channelId, context } = arg0);
    if (context === undefined) {
      let tmp8 = constants6;
      context = constants6.DEFAULT;
    }
    ({ streamServerId, createdTime } = arg0);
    ({ streamChannelId, parentMediaSessionId, joinVoiceId } = arg0);
    obj = new RTCConnection(tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp, sessionId, channelId, guildId, streamServerId);
    obj._videoEncoderLatencyProfile = constants10.DEFAULT;
    obj._isStageChannel = null;
    obj._secureFramesRosterMap = new Map();
    obj.reconnecting = false;
    obj._nextFailureId = 0;
    obj._mlsFailures = [];
    new Map();
    obj._secureFramesTransitionStates = new Map();
    obj._secureFramesMaxConcurrentTransitions = 0;
    obj._secureFramesTransitionPrepareCount = 0;
    obj._secureFramesTransitionExecuteCount = 0;
    obj._consecutiveMLSInvalidMessages = 0;
    obj._numNoiseCancellationChanges = 0;
    obj.reconnect = function reconnect() {
      const obj2 = { c: constants2.RECONNECT };
      obj.recordEvent(obj2);
      const _socket = obj._socket;
      if (null != _socket) {
        if (obj._hasEverConnected) {
          const obj3 = obj(dependencyMap[20]);
          obj._connectStartTime = obj3.now();
        }
        if (!obj._connecting) {
          const result = obj._trackVoiceConnectionConnecting();
          obj._connecting = true;
          obj._encountered_socket_failure = false;
          obj._voiceConnectionSuccessTracked = false;
        }
        obj._connectCount = obj._connectCount + 1;
        obj.reconnecting = true;
        _socket.close();
        _socket.connect();
      }
    };
    let tmp11 = importDefault;
    let tmp12 = dependencyMap;
    new Map();
    obj._alertMLSFailureDebouced = debounceDefault(obj._alertMLSFailure, 100);
    obj._handleNetworkOnline = function _handleNetworkOnline() {
      obj.expeditedHeartbeat(5000, "network detected online.");
    };
    obj._handleNetworkOffline = function _handleNetworkOffline() {
      obj.expeditedHeartbeat(15000, "network detected offline.", false);
    };
    obj._handleNoRoute = function _handleNoRoute() {
      const _socket = obj._socket;
      if (_socket != null) {
        _socket.noRoute();
      }
    };
    obj._handlePowerResume = function _handlePowerResume() {
      obj.expeditedHeartbeat(5000, "power monitor resumed");
    };
    obj._handleVoiceQualityPeriodicsStats = function _handleVoiceQualityPeriodicsStats() {
      if (null != obj._voiceQuality) {
        const _voiceQuality = obj._voiceQuality;
        const periodicStats = _voiceQuality.getPeriodicStats();
        if (obj.shouldReportPeriodicStats(periodicStats)) {
          const iter = periodicStats[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp8 = AnalyticsUtilsDefault;
            let obj3 = { media_session_id: obj.getMediaSessionId(), sender_user_id: nextResult.userId, hostname: obj.hostname, sequence_id: obj._voiceQualityPeriodicStatsSequenceId, input_device: obj.getInputDeviceName(), output_device: obj.getOutputDeviceName(), ping_average: Math.round(obj.getAveragePing()) };
            let track = tmp8.track;
            let VOICE_QUALITY_PERIODIC_STATS = constants.VOICE_QUALITY_PERIODIC_STATS;
            let merged = Object.assign(obj._getAnalyticsProperties());
            ({ silent: obj2.frame_op_silent, normal: obj2.frame_op_normal, merged: obj2.frame_op_merged, expanded: obj2.frame_op_expanded, accelerated: obj2.frame_op_accelerated, preemptiveExpanded: obj2.frame_op_preemptive_expanded, cng: obj2.frame_op_cng, accelerateRate: obj2.accelerate_rate, expandRate: obj2.expand_rate, preemptiveExpandRate: obj2.preemptive_expand_rate, speechExpandRate: obj2.speech_expand_rate, durationMs: obj2.duration_ms } = nextResult);
            let _Math = Math;
            ({ _pingBadCount: obj2.ping_bad_count, parentMediaSessionId: obj2.parent_media_session_id } = obj);
            let trackResult = track(VOICE_QUALITY_PERIODIC_STATS, obj3);
            continue;
          }
        }
        obj._voiceQualityPeriodicStatsSequenceId = obj._voiceQualityPeriodicStatsSequenceId + 1;
      }
    };
    obj.getAudioDeviceStates = function getAudioDeviceStates() {
      obj = { input_device: obj.getInputDeviceName(), input_device_count: Object.keys(MediaEngineStore.getInputDevices()).length, output_device: obj.getOutputDeviceName(), output_device_count: Object.keys(MediaEngineStore.getOutputDevices()).length };
      return obj;
    };
    obj.getVideoDeviceStates = function getVideoDeviceStates() {
      obj = { camera_device: obj.getVideoDeviceName(), camera_device_count: Object.keys(MediaEngineStore.getVideoDevices()).length };
      return obj;
    };
    obj._trackVoiceConnectionConnecting = function _trackVoiceConnectionConnecting() {
      channel = channel.getChannel(obj.channelId);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      const obj3 = { rtc_connection_id: obj.getRTCConnectionId(), channel_type: type, participant_type: obj.getVoiceParticipantType(), is_muted: MediaEngineStore.isMute() };
      const track = AnalyticsUtilsDefault.track;
      const VOICE_CONNECTION_CONNECTING = constants.VOICE_CONNECTION_CONNECTING;
      AnalyticsUtilsDefault;
      const merged = Object.assign(obj.getAudioDeviceStates());
      const merged1 = Object.assign(obj.getVideoDeviceStates());
      ({ guildId: obj2.guild_id, channelId: obj2.channel_id } = obj);
      ({ hostname: obj2.hostname, _connectCount: obj2.connect_count, context: obj2.context } = obj);
      ({ joinVoiceId: obj2.join_voice_id, _connectionSerial: obj2.connection_serial } = obj);
      track(VOICE_CONNECTION_CONNECTING, obj3);
    };
    obj.incomingVideoEnabledChanged = function incomingVideoEnabledChanged(incomingVideoEnabled) {
      const _goLiveQualityManager = obj._goLiveQualityManager;
      const tmp = obj;
      if (_goLiveQualityManager != null) {
        const result = _goLiveQualityManager.onIncomingVideoEnabled(incomingVideoEnabled);
      }
      const _videoQuality = tmp._videoQuality;
      if (_videoQuality != null) {
        const result1 = _videoQuality.setOcclusionIncomingVideoEnabled(incomingVideoEnabled);
      }
    };
    obj.windowVisibilityChanged = function windowVisibilityChanged(arg0) {
      const _videoQuality = obj._videoQuality;
      if (_videoQuality != null) {
        const result = _videoQuality.setWindowOcclusionState(!arg0);
      }
    };
    obj.context = context;
    let obj2 = { c: constants11.CONNECTION_CREATE };
    obj.recordEvent(obj2);
    let obj3 = MediaEngineStore;
    const asyncResources = MediaEngineStore.fetchAsyncResources();
    obj._fetchAsyncResourcesPromise = asyncResources.catch((error) => {
      obj = SentryUtilsDefault;
      obj.captureException(error);
    });
    obj.userId = userId;
    obj.sessionId = sessionId;
    obj.guildId = guildId;
    obj._channelId = channelId;
    const items = [channelId];
    obj.channelIds = new Set(items);
    new Set(items);
    obj._latchIsStageChannel();
    obj.streamServerId = streamServerId;
    obj.streamChannelId = streamChannelId;
    obj.parentMediaSessionId = parentMediaSessionId;
    obj.joinVoiceId = joinVoiceId;
    let closure_38 = tmp16 + 1;
    obj._connectionSerial = +closure_38;
    const tmp17 = LoggerDefault;
    obj.logger = new tmp17("RTCConnection(" + obj.trueServerId + ", " + obj.context + ")");
    let logger = obj.logger;
    new tmp17("RTCConnection(" + obj.trueServerId + ", " + obj.context + ")");
    logger.enableNativeLogger(true);
    obj._endpoint = null;
    obj.hostname = null;
    obj.port = null;
    obj.token = null;
    obj.protocol = null;
    obj.voiceVersion = null;
    obj.rtcWorkerVersion = null;
    if (createdTime == null) {
      const obj4 = obj(5772);
      createdTime = obj4.now();
    }
    obj._createdTime = createdTime;
    obj._daveJoinTimer = new DaveJoinTimerDefault(obj._createdTime);
    obj.state = constants3.AWAITING_ENDPOINT;
    new DaveJoinTimerDefault(obj._createdTime);
    const stateHistory = new obj(5868).StateHistory(obj.state, obj._createdTime);
    obj.stateHistory = stateHistory;
    obj._socket = null;
    obj._backoff = new BackoffDefault(1000, 10000);
    new BackoffDefault(1000, 10000);
    obj._mlsFailureReconnectBackoff = new BackoffDefault(1000, 10000);
    obj._destroyed = false;
    obj._pings = [];
    obj._pingBadCount = 0;
    obj._pingTimeouts = [];
    obj._mediaSessionId = null;
    obj._voiceQuality = null;
    obj._voiceQualityPeriodicStatsInterval = null;
    obj._voiceQualityPeriodicStatsSequenceId = 0;
    obj._systemResponsiveness = null;
    obj._noiseCancellationError = 0;
    obj._voiceDuration = null;
    obj._videoQuality = null;
    obj._videoHealthManager = null;
    obj._sentVideo = false;
    obj._videoDecoderFallbackSuppressed = false;
    obj._outboundLossRate = null;
    obj._connectStartTime = 0;
    obj._connectCompletedTime = 0;
    new BackoffDefault(1000, 10000);
    const obj5 = obj(1266);
    obj._rtcConnectionId = obj5.v4();
    obj._connectCount = 0;
    obj._hasEverConnected = false;
    obj._connecting = false;
    obj._voiceConnectionSuccessTracked = false;
    obj._hasCodecs = false;
    obj._mediaEngineConnectDuration = 0;
    obj._selectProtocolSentAt = null;
    obj._selectProtocolAckAt = null;
    obj._encountered_socket_failure = false;
    obj._inputDetected = false;
    obj._inputCurrentlyDetected = false;
    obj._selectedExperiments = [];
    obj._secureFramesState = null;
    const items1 = [userId];
    obj._userIds = new Set(items1);
    const _secureFramesRosterMap = obj._secureFramesRosterMap;
    new Set(items1);
    _secureFramesRosterMap.clear();
    obj._mlsFailures = [];
    obj._consecutiveMLSInvalidMessages = 0;
    obj._nextFailureId = 0;
    obj._mediaEngineConnectionId = null;
    obj._readyData = null;
    obj._sfuEndpoint = null;
    obj._sfuEndpointBeforeLoss = null;
    obj._sfuFragmentStartTime = 0;
    obj._sfuFragmentPrecedingGapMs = 0;
    obj._sfuEndpointLossAt = null;
    obj._sfuFragmentStatsAtLoss = null;
    obj._sfuVideoEventsAtLoss = null;
    obj._sfuVoiceEventsAtLoss = null;
    obj._sfuBatteryAtLoss = null;
    obj._fastUdpReconnectsAtFragmentStart = 0;
    obj._numSfuMigrations = 0;
    obj._earlierFragmentVideoQualities = [];
    obj.reconnecting = false;
    obj._lastSentSpeakingStatus = 0;
    obj._lastSentSSRC = undefined;
    const tmp29 = obj3.supports(constants5.FIRST_FRAME_CALLBACK) && obj3.supports(constants5.REMOTE_USER_MULTI_STREAM);
    if (constants6.DEFAULT === context) {
      let channel = ChannelStore.getChannel(obj.channelId);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      const self = this;
      const self2 = this;
      obj._localMediaSinkWantsManager = new RTCMediaSinkWantsManagerDefault(userId, type === constants2.GUILD_STAGE_VOICE, tmp29);
      const _localMediaSinkWantsManager = obj._localMediaSinkWantsManager;
      const tmp37 = new RTCMediaSinkWantsManagerDefault(userId, type === constants2.GUILD_STAGE_VOICE, tmp29);
      _localMediaSinkWantsManager.on(obj(5870).RTCMediaSinkWantsManagerEvent.Update, (localVideoSinkWants) => {
        const tmp2 = obj.state === constants.RTC_CONNECTED && null != tmp._socket;
        if (tmp2) {
          const logger = tmp.logger;
          const _JSON = JSON;
          const _HermesInternal = HermesInternal;
          logger.info("Media sink wants: " + JSON.stringify(localVideoSinkWants));
          const _socket = tmp._socket;
          _socket.mediaSinkWants(localVideoSinkWants);
          const _connection = tmp._connection;
          if (_connection != null) {
            const result = _connection.setLocalVideoSinkWants(localVideoSinkWants);
          }
        }
      });
      const _localMediaSinkWantsManager2 = obj._localMediaSinkWantsManager;
      _localMediaSinkWantsManager2.on(obj(5870).RTCMediaSinkWantsManagerEvent.UserSSRCUpdate, (arg0, arg1, arg2) => {
        const _connection = obj._connection;
        if (_connection != null) {
          const user = _connection.createUser(arg0, arg1, arg2);
        }
      });
    } else if (tmp30.STREAM === context) {
      const self3 = this;
      const self4 = this;
      obj._goLiveQualityManager = new GoLiveQualityManagerDefault();
      let _goLiveQualityManager = obj._goLiveQualityManager;
      const tmp47 = new GoLiveQualityManagerDefault();
      _goLiveQualityManager.on(obj(5879).GoLiveQualityManagerEvent.RequestedSSRCsUpdate, (arg0, arg1, arg2) => {
        const _connection = obj._connection;
        if (_connection != null) {
          const user = _connection.createUser(arg0, arg1, arg2);
        }
      });
      const _goLiveQualityManager2 = obj._goLiveQualityManager;
      _goLiveQualityManager2.on(obj(5879).GoLiveQualityManagerEvent.RequestedStreamsUpdate, (localVideoSinkWants) => {
        const tmp2 = obj.state === constants.RTC_CONNECTED && null != tmp._socket;
        if (tmp2) {
          const logger = tmp.logger;
          const _JSON = JSON;
          const _HermesInternal = HermesInternal;
          logger.info("Go Live Media sink wants: " + JSON.stringify(localVideoSinkWants));
          const _socket = tmp._socket;
          _socket.mediaSinkWants(localVideoSinkWants);
          const _connection = tmp._connection;
          if (_connection != null) {
            const result = _connection.setLocalVideoSinkWants(localVideoSinkWants);
          }
        }
      });
    }
    obj._remoteVideoSinkWants = obj(5870).DEFAULT_WANTS_FULL;
    const WindowVisibilityVideoManager = tmp22(5873).WindowVisibilityVideoManager;
    WindowVisibilityVideoManager.on(obj(5873).WindowVisibilityEvent.IncomingVideoEnabledChanged, obj.incomingVideoEnabledChanged);
    const WindowVisibilityVideoManager2 = tmp22(5873).WindowVisibilityVideoManager;
    WindowVisibilityVideoManager2.on(obj(5873).WindowVisibilityEvent.WindowVisibilityChanged, obj.windowVisibilityChanged);
    if (RTCDebugStore.shouldRecordNextConnection()) {
      obj._recordingEnabled = true;
      setShouldRecordNextConnectionDefault(false);
    } else {
      obj._recordingEnabled = false;
    }
    const tmp11Result = NetworkUtilsDefault;
    tmp11Result.addOnlineCallback(obj._handleNetworkOnline);
    const tmp11Result2 = NetworkUtilsDefault;
    tmp11Result2.addOfflineCallback(obj._handleNetworkOffline);
    const tmp22Result = obj(1375);
    if (tmp22Result.isDesktop()) {
      const powerMonitor = DiscordNativeDefault.powerMonitor;
      obj.powerMonitorListener = powerMonitor.on("resume", obj._handlePowerResume);
    }
    obj._supportedBandwidthEstimationExperiments = [];
    obj._bandwidthEstimationExperiment = null;
    const mediaEngine = obj3.getMediaEngine();
    const supportedBandwidthEstimationExperiments = mediaEngine.getSupportedBandwidthEstimationExperiments((_supportedBandwidthEstimationExperiments) => {
      obj._supportedBandwidthEstimationExperiments = _supportedBandwidthEstimationExperiments;
    });
    return obj;
  }
  recordEvent(arg0) {
    let length;
    let obj2;
    const push = closure_39.push;
    obj = { t: obj2.now(), n: this._connectionSerial };
    const merged = Object.assign(arg0);
    obj2 = TimeUtils;
    push(obj);
    if (closure_39.length > 50) {
      do {
        let arr2 = closure_39.shift();
        length = closure_39.length;
      } while (length > 50);
    }
  }
  connect(endpoint, token) {
    const self = this;
    if (this._destroyed) {
      const _Error = Error;
      const self4 = this;
      const self5 = this;
      const error = new Error("RTCConnection.connect(...): Attempting to connect on destroyed instance.");
      throw error;
    } else {
      obj = { c: constants11.CONNECT, e: null != endpoint, h: null != token };
      self.recordEvent(obj);
      self._cancelReconnect();
      endpoint = self.endpoint;
      self.endpoint = endpoint;
      self.token = token;
      const tmp7 = endpoint === self.endpoint && self.token === token;
      if (!tmp7) {
        self._cleanupSocket();
        self._mediaSessionId = null;
        if (null != endpoint) {
          const obj2 = v1;
          self._rtcConnectionId = obj2.v4();
          const obj4 = { type: "RTC_CONNECTION_UPDATE_ID", connection: self };
          const obj3 = DispatcherDefault;
          obj3.dispatch(obj4);
        }
      }
      if (null != self.endpoint) {
        if (null != self._socket) {
          self._cleanupSocket();
        }
        if (null != self._nextChannelId) {
          self._channelId = self._nextChannelId;
          self._nextChannelId = undefined;
          self._isStageChannel = null;
          self._latchIsStageChannel();
        }
        const self2 = this;
        const self3 = this;
        const obj5 = new RTCControlSocketDefault(self.endpoint, self.context);
        self._socket = obj5;
        const on = obj5.on;
        const _handleConnecting = self._handleConnecting;
        on(RTCControlSocket.SocketEvent.Connecting, _handleConnecting.bind(self, obj5));
        const on2 = obj5.on;
        const _handleConnect = self._handleConnect;
        on2(RTCControlSocket.SocketEvent.Connect, _handleConnect.bind(self, obj5));
        const on3 = obj5.on;
        const _handleDisconnect = self._handleDisconnect;
        on3(RTCControlSocket.SocketEvent.Disconnect, _handleDisconnect.bind(self, obj5));
        const on4 = obj5.on;
        const _handleResuming = self._handleResuming;
        on4(RTCControlSocket.SocketEvent.Resuming, _handleResuming.bind(self, obj5));
        const on5 = obj5.on;
        const _handleReady = self._handleReady;
        on5(RTCControlSocket.SocketEvent.Ready, _handleReady.bind(self, obj5));
        const on6 = obj5.on;
        const _handleSelectProtocolAck = self._handleSelectProtocolAck;
        on6(RTCControlSocket.SocketEvent.SelectProtocolAck, _handleSelectProtocolAck.bind(self));
        const on7 = obj5.on;
        const _handleSfuUpdate = self._handleSfuUpdate;
        on7(RTCControlSocket.SocketEvent.SfuUpdate, _handleSfuUpdate.bind(self, obj5));
        const on8 = obj5.on;
        const _handleSpeaking = self._handleSpeaking;
        on8(RTCControlSocket.SocketEvent.Speaking, _handleSpeaking.bind(self, obj5));
        const on9 = obj5.on;
        const _handleVideo = self._handleVideo;
        on9(RTCControlSocket.SocketEvent.Video, _handleVideo.bind(self, obj5));
        const on10 = obj5.on;
        const _handleControlPing = self._handleControlPing;
        on10(RTCControlSocket.SocketEvent.Ping, _handleControlPing.bind(self));
        const on11 = obj5.on;
        const _handleClientDisconnect = self._handleClientDisconnect;
        on11(RTCControlSocket.SocketEvent.ClientDisconnect, _handleClientDisconnect.bind(self));
        const on12 = obj5.on;
        const _handleClientConnect = self._handleClientConnect;
        on12(RTCControlSocket.SocketEvent.ClientConnect, _handleClientConnect.bind(self));
        const on13 = obj5.on;
        const _handleCodecs = self._handleCodecs;
        on13(RTCControlSocket.SocketEvent.Codecs, _handleCodecs.bind(self));
        const on14 = obj5.on;
        const _handleMediaSessionId = self._handleMediaSessionId;
        on14(RTCControlSocket.SocketEvent.MediaSessionId, _handleMediaSessionId.bind(self));
        const on15 = obj5.on;
        const _handleMediaSinkWants = self._handleMediaSinkWants;
        on15(RTCControlSocket.SocketEvent.MediaSinkWants, _handleMediaSinkWants.bind(self));
        const on16 = obj5.on;
        const _handleCodeVersion = self._handleCodeVersion;
        on16(RTCControlSocket.SocketEvent.VoiceBackendVersion, _handleCodeVersion.bind(self));
        const on17 = obj5.on;
        const _handleKeyframeInterval = self._handleKeyframeInterval;
        on17(RTCControlSocket.SocketEvent.KeyframeInterval, _handleKeyframeInterval.bind(self));
        const on18 = obj5.on;
        const handleFlags = self.handleFlags;
        on18(RTCControlSocket.SocketEvent.Flags, handleFlags.bind(self));
        const on19 = obj5.on;
        const handlePlatform = self.handlePlatform;
        on19(RTCControlSocket.SocketEvent.Platform, handlePlatform.bind(self));
        const on20 = obj5.on;
        const _handleBandwidthEstimationExperiment = self._handleBandwidthEstimationExperiment;
        on20(RTCControlSocket.SocketEvent.BandwidthEstimationExperiment, _handleBandwidthEstimationExperiment.bind(self));
        const on21 = obj5.on;
        const _handleSecureFramesInit = self._handleSecureFramesInit;
        on21(RTCControlSocket.SocketEvent.SecureFramesInit, _handleSecureFramesInit.bind(self));
        const on22 = obj5.on;
        const _handleSecureFramesPrepareTransition = self._handleSecureFramesPrepareTransition;
        on22(RTCControlSocket.SocketEvent.SecureFramesPrepareTransition, _handleSecureFramesPrepareTransition.bind(self));
        const on23 = obj5.on;
        const _handleSecureFramesPrepareEpoch = self._handleSecureFramesPrepareEpoch;
        on23(RTCControlSocket.SocketEvent.SecureFramesPrepareEpoch, _handleSecureFramesPrepareEpoch.bind(self));
        const on24 = obj5.on;
        const _handleSecureFramesExecuteTransition = self._handleSecureFramesExecuteTransition;
        on24(RTCControlSocket.SocketEvent.SecureFramesExecuteTransition, _handleSecureFramesExecuteTransition.bind(self));
        const on25 = obj5.on;
        const _handleMLSExternalSenderPackage = self._handleMLSExternalSenderPackage;
        on25(RTCControlSocket.SocketEvent.MLSExternalSenderPackage, _handleMLSExternalSenderPackage.bind(self));
        const on26 = obj5.on;
        const _handleMLSProposals = self._handleMLSProposals;
        on26(RTCControlSocket.SocketEvent.MLSProposals, _handleMLSProposals.bind(self, obj5));
        const on27 = obj5.on;
        const _handleMLSPrepareCommitTransition = self._handleMLSPrepareCommitTransition;
        on27(RTCControlSocket.SocketEvent.MLSPrepareCommitTransition, _handleMLSPrepareCommitTransition.bind(self));
        const on28 = obj5.on;
        const _handleMLSWelcome = self._handleMLSWelcome;
        on28(RTCControlSocket.SocketEvent.MLSWelcome, _handleMLSWelcome.bind(self));
        const on29 = obj5.on;
        const _recordMessageEvent = self._recordMessageEvent;
        on29(RTCControlSocket.SocketEvent.ReceiveMessage, _recordMessageEvent.bind(self, constants11.MESSAGE_RECEIVE));
        const on30 = obj5.on;
        const _recordMessageEvent2 = self._recordMessageEvent;
        on30(RTCControlSocket.SocketEvent.SendMessage, _recordMessageEvent2.bind(self, constants11.MESSAGE_SEND));
        const obj6 = TimeUtils;
        self._connectStartTime = obj6.now();
        self._connectCount = self._connectCount + 1;
        self._connecting = true;
        self._voiceConnectionSuccessTracked = false;
        if (self._socket === obj5) {
          const result = self._trackVoiceConnectionConnecting();
          self._encountered_socket_failure = false;
          obj5.connect();
        }
      } else {
        self.setState(constants3.AWAITING_ENDPOINT);
      }
    }
  }
  _recordMessageEvent(c, o) {
    obj = { c, o };
    this.recordEvent(obj);
  }
  _scheduleReconnect() {
    const _mlsFailureReconnectBackoff = this._mlsFailureReconnectBackoff;
    _mlsFailureReconnectBackoff.cancel();
    const _backoff = this._backoff;
    return _backoff.fail(this.reconnect);
  }
  _scheduleMLSFailureReconnect() {
    const _backoff = this._backoff;
    _backoff.cancel();
    const _mlsFailureReconnectBackoff = this._mlsFailureReconnectBackoff;
    return _mlsFailureReconnectBackoff.fail(this.reconnect);
  }
  _cancelReconnect() {
    const _backoff = this._backoff;
    _backoff.cancel();
    const _mlsFailureReconnectBackoff = this._mlsFailureReconnectBackoff;
    _mlsFailureReconnectBackoff.cancel();
  }
  destroy() {
    const self = this;
    const logger = this.logger;
    logger.info("Destroy RTCConnection");
    obj = NetworkUtilsDefault;
    obj.removeOnlineCallback(this._handleNetworkOnline);
    const obj2 = NetworkUtilsDefault;
    const result = obj2.removeOfflineCallback(this._handleNetworkOffline);
    const obj3 = PlatformUtils;
    if (obj3.isDesktop()) {
      const powerMonitorListener = self.powerMonitorListener;
      if (powerMonitorListener != null) {
        powerMonitorListener();
      }
    }
    const obj4 = { c: constants11.CONNECTION_DESTROY };
    self.recordEvent(obj4);
    const WindowVisibilityVideoManager = tmp5(5873).WindowVisibilityVideoManager;
    WindowVisibilityVideoManager.off(WindowVisibilityVideoManager3.WindowVisibilityEvent.IncomingVideoEnabledChanged, self.incomingVideoEnabledChanged);
    const WindowVisibilityVideoManager2 = tmp5(5873).WindowVisibilityVideoManager;
    WindowVisibilityVideoManager2.off(WindowVisibilityVideoManager3.WindowVisibilityEvent.WindowVisibilityChanged, self.windowVisibilityChanged);
    self._cancelReconnect();
    self._cleanupSocket();
    const _voiceQuality = self._voiceQuality;
    if (_voiceQuality != null) {
      _voiceQuality.stop();
    }
    const _voiceQuality2 = self._voiceQuality;
    if (_voiceQuality2 != null) {
      _voiceQuality2.removeAllListeners();
    }
    self._voiceQuality = null;
    clearInterval(self._voiceQualityPeriodicStatsInterval);
    self._voiceQualityPeriodicStatsInterval = null;
    self._voiceQualityPeriodicStatsSequenceId = 0;
    const _systemResponsiveness = self._systemResponsiveness;
    if (_systemResponsiveness != null) {
      _systemResponsiveness.stop();
    }
    self._systemResponsiveness = null;
    self._noiseCancellationError = 0;
    const _voiceDuration = self._voiceDuration;
    if (_voiceDuration != null) {
      _voiceDuration.stop();
    }
    self._voiceDuration = null;
    const _videoQuality = self._videoQuality;
    if (_videoQuality != null) {
      _videoQuality.stop();
    }
    self._videoQuality = null;
    self._videoHealthManager = null;
    self._secureFramesState = null;
    const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
    if (_localMediaSinkWantsManager != null) {
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
  shouldSendSpeaking(_lastSentSpeakingStatus, _lastSentSSRC) {
    obj = PlatformUtils;
    if (obj.isWeb()) {
      return true;
    } else {
      const self = this;
      const tmpResult = FlagUtils;
      const hasFlagResult = tmpResult.hasFlag(_lastSentSpeakingStatus, constants9.PRIORITY);
      const tmpResult2 = FlagUtils;
      let tmp7 = this._lastSentSSRC !== _lastSentSSRC || hasFlagResult !== tmpResult2.hasFlag(this._lastSentSpeakingStatus, constants9.PRIORITY);
      if (tmp7) {
        let tmp8 = undefined !== self._lastSentSSRC || _lastSentSpeakingStatus !== tmp5.NONE;
        if (tmp8) {
          let flag = self._lastSentSSRC === _lastSentSSRC || _lastSentSpeakingStatus !== tmp5.NONE;
          if (flag) {
            self._lastSentSpeakingStatus = _lastSentSpeakingStatus;
            self._lastSentSSRC = _lastSentSSRC;
            flag = true;
          }
          tmp8 = flag;
        }
        tmp7 = tmp8;
      }
      return tmp7;
    }
  }
  sendSpeaking(_lastSentSpeakingStatus, _lastSentSSRC) {
    const self = this;
    const _socket = this._socket;
    if (null != _socket) {
      if (self.shouldSendSpeaking(_lastSentSpeakingStatus, _lastSentSSRC)) {
        _socket.speaking(_lastSentSpeakingStatus, MediaEngineStore.getPacketDelay(self.context), _lastSentSSRC);
      }
    }
  }
  sendVideo(arg0, arg1, arg2, arg3) {
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
  getPings() {
    return this._pings;
  }
  getAveragePing() {
    const _pings = this._pings;
    const substr = _pings.slice(0, Math.min(this._pings.length, 20));
    let num = 0;
    if (0 !== substr.length) {
      num = 0;
      if (null != this._socket) {
        num = substr.reduce((acc, value) => acc + value.value, 0) / substr.length;
      }
    }
    return num;
  }
  getLastPing() {
    let value;
    if (this._pings[this._pings.length - 1] != null) {
      value = iter.value;
    }
    return value;
  }
  getOutboundLossRate() {
    return this._outboundLossRate;
  }
  getMediaSessionId() {
    return this._mediaSessionId;
  }
  getVoiceParticipantType() {

  }
  getRTCConnectionId() {
    return this._rtcConnectionId;
  }
  getMediaEngineConnectionId() {
    return this._mediaEngineConnectionId;
  }
  getVoiceVersion() {
    return this.voiceVersion;
  }
  getRtcWorkerVersion() {
    return this.rtcWorkerVersion;
  }
  getDuration() {
    let num = 0;
    if (this._connectCompletedTime > 0) {
      obj = TimeUtils;
      num = obj.now() - tmp._connectCompletedTime;
    }
    let num2 = 0;
    if (num > 0) {
      num2 = num;
    }
    return num2;
  }
  getDurationSeconds() {
    return this.getDuration() / 1000;
  }
  getVoiceDurationStats() {
    const _voiceDuration = this._voiceDuration;
    let durationStats;
    if (_voiceDuration != null) {
      durationStats = _voiceDuration.getDurationStats();
    }
    if (durationStats == null) {
      durationStats = null;
    }
    return durationStats;
  }
  getPacketStats() {
    const _voiceQuality = this._voiceQuality;
    let packetStats;
    if (_voiceQuality != null) {
      packetStats = _voiceQuality.getPacketStats();
    }
    return packetStats;
  }
  getCreatedTime() {
    return this._createdTime;
  }
  getSecureFramesState() {
    return this._secureFramesState;
  }
  getSecureFramesRosterMap() {
    return this._secureFramesRosterMap;
  }
  getUserIds() {
    return this._userIds;
  }
  getIsUserConnected(arg0) {
    const _userIds = this._userIds;
    return _userIds.has(arg0);
  }
  getVideoHealthManager() {
    return this._videoHealthManager;
  }
  getBandwidthEstimationExperiment() {
    return this._bandwidthEstimationExperiment;
  }
  hasActiveRemoteWants() {
    const entries = Object.entries(this._remoteVideoSinkWants);
    return entries.some((item) => {
      let tmp;
      let tmp2;
      let tmp3;
      [tmp, tmp2] = item;
      if (Number.isInteger(tmp)) {
        tmp3 = 0 !== tmp2;
      } else {
        tmp3 = "any" !== tmp;
        if (tmp3) {
          let someResult;
          if ("pixelCounts" === tmp) {
            const _Object = Object;
            const values = Object.values(tmp2);
            someResult = values.some((item) => 0 !== item);
          }
          tmp3 = someResult;
        }
      }
      return tmp3;
    });
  }
  pauseStatsCollectionForUser(userId, arg1) {
    const orCreateVideoQuality = this.getOrCreateVideoQuality();
    if (null != orCreateVideoQuality) {
      const tmp3 = arg1;
      if (tmp3) {
        const result = orCreateVideoQuality.addUserToStatsCollectionPausedSet(userId);
      } else {
        const result1 = orCreateVideoQuality.removeUserFromStatsCollectionPausedSet(userId);
      }
    } else {
      const logger = this.logger;
      logger.error("pauseStatsCollectionForUser: Unable to create videoQuality.");
    }
  }
  getOutboundStats() {
    const orCreateVideoQuality = this.getOrCreateVideoQuality();
    let outboundStats = null;
    if (null != orCreateVideoQuality) {
      outboundStats = orCreateVideoQuality.getOutboundStats();
    }
    return outboundStats;
  }
  getInboundStats(arg0) {
    const orCreateVideoQuality = this.getOrCreateVideoQuality();
    let inboundStats = null;
    if (null != orCreateVideoQuality) {
      inboundStats = orCreateVideoQuality.getInboundStats(arg0);
    }
    return inboundStats;
  }
  setState(s) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const obj2 = { c: constants11.SET_STATE, s };
    this.recordEvent(obj2);
    const logger = this.logger;
    logger.info("RTC connection state: " + this.state + " => " + s);
    this.state = s;
    const stateHistory = this.stateHistory;
    stateHistory.update(this.state);
    const obj3 = { hostname: this.hostname, channelId: this.trueChannelId, context: this.context };
    this.emit(RTCConnectionEvent.RTCConnectionEvent.State, s, obj3, obj);
  }
  expeditedHeartbeat(arg0) {
    str = arg1;
    if (arg1 === undefined) {
      str = "";
    }
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    const self = this;
    const _socket = this._socket;
    const expeditedHeartbeatResult = null != _socket && _socket.expeditedHeartbeat(arg0, str, flag);
    if (expeditedHeartbeatResult) {
      self._cancelReconnect();
    }
  }
  resetBackoff() {
    str = arg0;
    if (arg0 === undefined) {
      str = "";
    }
    const self = this;
    const _socket = this._socket;
    const tmp = null != _socket && _socket.resetBackoff(str);
    if (tmp) {
      self._cancelReconnect();
    }
  }
  setSelectedParticipant(arg0) {
    const _localMediaSinkWantsManager = this._localMediaSinkWantsManager;
    if (_localMediaSinkWantsManager != null) {
      const result = _localMediaSinkWantsManager.setSelectedParticipant(arg0);
    }
  }
  setPipOpen(arg0) {
    const _localMediaSinkWantsManager = this._localMediaSinkWantsManager;
    if (_localMediaSinkWantsManager != null) {
      _localMediaSinkWantsManager.setPipOpen(arg0);
    }
  }
  setClipRecordUser(arg0, arg1, arg2) {
    const _connection = this._connection;
    if (_connection != null) {
      const setClipRecordUser = _connection.setClipRecordUser;
      if (setClipRecordUser != null) {
        setClipRecordUser(arg0, arg1, arg2);
      }
    }
  }
  setNoiseCancellationEnabled(arg0) {
    this._numNoiseCancellationChanges = this._numNoiseCancellationChanges + 1;
    const _voiceDuration = this._voiceDuration;
    if (_voiceDuration != null) {
      const result = _voiceDuration.setNoiseCancellationEnabled(arg0);
    }
  }
  setSpatialAudioEnabled(arg0) {
    const _voiceDuration = this._voiceDuration;
    if (_voiceDuration != null) {
      const result = _voiceDuration.setSpatialAudioEnabled(arg0);
    }
  }
  setAvSyncEnabled(arg0, arg1) {
    const _connection = this._connection;
    if (_connection != null) {
      _connection.setAvSyncEnabled(arg0, arg1);
    }
  }
  setVideoEncoderLatencyProfile(_videoEncoderLatencyProfile) {
    this._videoEncoderLatencyProfile = _videoEncoderLatencyProfile;
    const _connection = this._connection;
    if (_connection != null) {
      const result = _connection.setVideoEncoderLatencyProfile(_videoEncoderLatencyProfile);
    }
  }
  setSimulcastDebugOverride(arg0, arg1, arg2) {
    const tmp = arg1 === this.context && arg1 === constants6.DEFAULT;
    if (tmp) {
      const _localMediaSinkWantsManager = this._localMediaSinkWantsManager;
      if (_localMediaSinkWantsManager != null) {
        const result = _localMediaSinkWantsManager.setSimulcastDebugOverride(arg0, arg2);
      }
    }
  }
  setVideoSize(arg0, width, arg2) {
    let isAndroidResult = null == width;
    if (!isAndroidResult) {
      obj = PlatformUtils;
      isAndroidResult = obj.isAndroid();
    }
    if (!isAndroidResult) {
      const obj2 = PlatformUtils;
      isAndroidResult = obj2.isIOS();
    }
    const self = this;
    if (!isAndroidResult) {
      const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
      if (_localMediaSinkWantsManager != null) {
        _localMediaSinkWantsManager.setVideoSize(arg0, width.width * width.height);
      }
    }
    const _goLiveQualityManager = self._goLiveQualityManager;
    if (_goLiveQualityManager != null) {
      _goLiveQualityManager.setVideoSize(arg0, width, arg2);
    }
  }
  clearJoinVoiceId() {
    this.joinVoiceId = null;
  }
  setNextChannelId(channelId) {
    const self = this;
    obj = { c: constants11.SET_NEXT_CHANNEL_ID };
    this.recordEvent(obj);
    const channel = ChannelStore.getChannel(this.channelId);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    const logger = self.logger;
    logger.info("Updating channel: " + channelId + "(" + type + ")");
    self._nextChannelId = channelId;
    const channelIds = self.channelIds;
    channelIds.add(channelId);
  }
  getNextChannelId() {
    let _channelId = this._nextChannelId;
    if (_channelId == null) {
      _channelId = this._channelId;
    }
    return _channelId;
  }
  _cleanupSocket() {
    const self = this;
    const _socket = this._socket;
    if (null != _socket) {
      _socket.close();
      _socket.removeAllListeners();
      self._socket = null;
    }
    self._readyData = null;
    self._sfuEndpoint = null;
  }
  _chooseExperiments() {
    const self = this;
    obj = PlatformUtils;
    const items = [];
    const isDesktopResult = obj.isDesktop() && self.context === constants6.DEFAULT;
    if (isDesktopResult) {
      const tmpResult = DesktopGeneralPerfExperiment;
      if (tmpResult.getDesktopGeneralPerfExperimentConfig("capture_processing_delay_estimator").skipSilentDelayEstimatorFfts) {
        items.push("skip_silent_delay_estimator_ffts");
      }
    }
    if (self._recordingEnabled) {
      items.push("connection_log");
    }
    if (MediaEngineStore.supports(constants5.FIXED_KEYFRAME_INTERVAL)) {
      items.push("fixed_keyframe_interval");
    }
    const obj4 = ProportionalVadIndicatorExperimentDefault;
    const config = obj4.getConfig({ location: "_chooseExperiments" });
    const dontEmitVolumeOnlySpeakingEvents = config.dontEmitVolumeOnlySpeakingEvents;
    if (config.enabled) {
      items.push("should_analyze_user_voice_volume");
    }
    if (dontEmitVolumeOnlySpeakingEvents) {
      items.push("dont_emit_volume_only_speaking_events");
    }
    const tmpResult8 = PlatformUtils;
    let enabled = tmpResult8.isWeb() && self.context === constants6.STREAM;
    if (enabled) {
      const WebScreenShareAudioExperiment = tmp(5885).WebScreenShareAudioExperiment;
      enabled = WebScreenShareAudioExperiment.getConfig({ location: "RTCConnection" }).enabled;
    }
    if (enabled) {
      items.push("web_screen_share_audio");
    }
    const tmpResult9 = PlatformUtils;
    if (tmpResult9.isWeb()) {
      if (self.context === constants6.STREAM) {
        if (self.isStreamSender()) {
          const WebStreamingOptimizationsExperiment = tmp(5886).WebStreamingOptimizationsExperiment;
          const config1 = WebStreamingOptimizationsExperiment.getConfig({ location: "RTCConnection" });
          const degradationPreference = config1.degradationPreference;
          const motionContentHint = config1.motionContentHint;
          if ("maintain-framerate" === degradationPreference) {
            items.push("web_streaming_maintain_framerate");
          } else if ("balanced" === degradationPreference) {
            items.push("web_streaming_balanced");
          } else if ("maintain-resolution" === degradationPreference) {
            items.push("web_streaming_maintain_resolution");
            if (tmp16) {
              items.push("web_streaming_cpu_fallback");
            }
          }
          if (motionContentHint) {
            items.push("web_streaming_motion_content_hint");
          }
        }
      }
    }
    const tmpResult10 = PlatformUtils;
    if (tmpResult10.isIOS()) {
      const tmp8Result = VideoStabilizationExperimentDefault;
      const mode = tmp8Result.getConfig({ location: "_chooseExperiments" }).mode;
      if ("standard" === mode) {
        items.push("ios_video_stabilization_standard");
      } else if ("low_latency" === mode) {
        items.push("ios_video_stabilization_low_latency");
      }
    }
    const tmpResult11 = PlatformUtils;
    let isAndroidResult = tmpResult11.isAndroid();
    if (isAndroidResult) {
      const tmpResult12 = SurfaceDirectRendererExperiment;
      isAndroidResult = tmpResult12.isSurfaceDirectRendererExperimentEnabled();
    }
    if (isAndroidResult) {
      items.push(SurfaceDirectRendererExperiment.ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT);
    }
    const tmpResult13 = PlatformUtils;
    if (tmpResult13.isLinux()) {
      const tmpResult14 = LinuxGpuDecodeExperiment;
      const mode2 = tmpResult14.getLinuxGpuDecodeExperimentConfig("_chooseExperiments").mode;
      let tmp26 = "disable_all" === mode2;
      if (!tmp26) {
        tmp26 = "disable_nvidia" === mode2 && obj3.getHasNvidiaGpu();
        "disable_nvidia" === mode2 && MediaEngineStore.getHasNvidiaGpu();
      }
      if (tmp26) {
        items.push("disable_electron_decode");
      }
    }
    self._selectedExperiments = items;
  }
  _handleConnecting() {
    const self = this;
    if (null != this.endpoint) {
      const channel = ChannelStore.getChannel(self.channelId);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      const logger = self.logger;
      const _HermesInternal = HermesInternal;
      logger.info("Connecting to RTC server " + self.endpoint + ", rtc-connection-id: " + self.getRTCConnectionId() + ", channel: " + self.channelId + "(" + type + ")");
    }
    self.setState(constants3.CONNECTING);
  }
  _handleConnect(arg0) {
    const self = this;
    let closure_1 = arg0;
    const token = this.token;
    this.reconnecting = false;
    if (null == token) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("RTCConnection._handleConnect(...): Token is missing.");
      throw error;
    } else {
      const logger = self.logger;
      logger.info("Connected to RTC server.");
      const prop = self._fetchAsyncResourcesPromise;
      prop.finally(() => {
        obj = { serverId: self.trueServerId, channelId: self.trueChannelId, userId: self.userId, sessionId: self.sessionId, token, maxDaveProtocolVersion: MediaEngineStore.getSupportedSecureFramesProtocolVersion(), video: MediaEngineStore.supports(constants2.VIDEO), streamParameters: MediaEngineStore.getVideoStreamParameters(self.context) };
        closure_1.identify(obj);
        self.setState(constants.AUTHENTICATING);
      });
    }
  }
  _handleDisconnect(arg0, arg1, code, reason) {
    let media_session_id;
    let num3;
    const self = this;
    let _encountered_socket_failure = arg1;
    let logger = this.logger;
    logger.info("Disconnected from RTC server, clean: " + arg1 + ", code: " + code + ", reason: " + reason + ", state: " + this.state);
    if (!arg1) {
      _encountered_socket_failure = !self._connecting;
    }
    if (!_encountered_socket_failure) {
      _encountered_socket_failure = self._encountered_socket_failure;
    }
    if (!_encountered_socket_failure) {
      const tmp4 = self(1252);
      obj = { code, reason };
      let track = tmp4.track;
      const VOICE_CONNECTION_SOCKET_FAILURE = constants.VOICE_CONNECTION_SOCKET_FAILURE;
      let merged = Object.assign(self._getAnalyticsProperties());
      ({ hostname: obj.hostname, _connectCount: obj.connect_count } = self);
      track(VOICE_CONNECTION_SOCKET_FAILURE, obj);
      self._encountered_socket_failure = true;
    }
    if (RTCConnectionStore.getRemoteDisconnectVoiceChannelId() === self.channelId) {
      const _connection = self._connection;
      if (_connection != null) {
        const result = _connection.wasRemoteDisconnected();
      }
    }
    if ("Force Close" !== reason) {
      if (code !== require("RTCControlSocket").RTCSocketCloseCode.REPEATED_MLS_INVALID_MESSAGES) {
        if (code !== require("RTCControlSocket").RTCSocketCloseCode.DAVE_DOWNGRADE_REFUSED) {
          let _scheduleReconnectResult;
          if (code !== require("RTCControlSocket").RTCSocketCloseCode.DAVE_INVALID_MESSAGE) {
            _scheduleReconnectResult = self._scheduleReconnect();
          }
          const logger2 = self.logger;
          const result1 = _scheduleReconnectResult / 1000;
          const _HermesInternal = HermesInternal;
          logger2.warn("Disconnect was not clean! reason=" + reason + ". Reconnecting in " + result1.toFixed(2) + " seconds.");
        }
      }
      _scheduleReconnectResult = self._scheduleMLSFailureReconnect();
    }
    const tmp17 = constants3;
    if (self.state !== constants3.DISCONNECTED) {
      let _sfuEndpointBeforeLoss = self._sfuEndpoint;
      if (_sfuEndpointBeforeLoss == null) {
        _sfuEndpointBeforeLoss = self._sfuEndpointBeforeLoss;
      }
      if (self.context === constants6.DEFAULT) {
        const obj2 = { sfuMigration: false, sfuEndpoint: _sfuEndpointBeforeLoss };
        const result2 = self._flushVideoStreamEndedEvents(reason, obj2);
      }
      const result3 = self._flushVoiceStreamEndedEvents();
      _require = self.getMediaSessionId();
      const mediaEngine = MediaEngineStore.getMediaEngine();
      const codecSurvey = mediaEngine.getCodecSurvey();
      const nextPromise = codecSurvey.then((result) => {
        const parsed = JSON.parse(result);
        if (null != parsed) {
          if (null != parsed.available_video_encoders) {
            if (null != parsed.available_video_decoders) {
              obj = { rtc_connection_id: self.getRTCConnectionId(), media_session_id };
              const track = AnalyticsUtilsDefault.track;
              const VOICE_CODEC_DETECTED = constants.VOICE_CODEC_DETECTED;
              AnalyticsUtilsDefault;
              const merged = Object.assign(parsed);
              track(VOICE_CODEC_DETECTED, obj);
            }
          }
        }
        const error = new Error("codec survey is not available");
        throw error;
      });
      nextPromise.catch((error) => {
        const logger = self.logger;
        logger.warn(error);
      });
      self._trackMLSFailures({ recovered: false, downgraded: false });
      const _trackVoiceDisconnect = self._trackVoiceDisconnect;
      const obj3 = { reason, reconnect: "Force Close" !== reason, duration: self._getSfuFragmentDuration(), sfuMigration: false, sfuEndpoint: _sfuEndpointBeforeLoss, sfuTrailingGapMs: num3 };
      num3 = 0;
      if (null != self._sfuEndpointLossAt) {
        const obj6 = require("TimeUtils");
        num3 = obj6.now() - self._sfuEndpointLossAt;
      }
      const result4 = _trackVoiceDisconnect(obj3);
      const result5 = self._trackRemainingSecureFrameTransitions();
    }
    const result6 = self._resetPerConnectionAnalyticsState();
    self._inputCurrentlyDetected = false;
    self._connectCompletedTime = 0;
    self._mediaSessionId = null;
    self._sfuFragmentStartTime = 0;
    self._sfuFragmentPrecedingGapMs = 0;
    self._sfuEndpointLossAt = null;
    self._sfuFragmentStatsAtLoss = null;
    self._sfuVideoEventsAtLoss = null;
    self._sfuVoiceEventsAtLoss = null;
    self._sfuBatteryAtLoss = null;
    self._fastUdpReconnectsAtFragmentStart = 0;
    self._sfuEndpointBeforeLoss = null;
    self._numSfuMigrations = 0;
    self._earlierFragmentVideoQualities = [];
    const _voiceQuality = self._voiceQuality;
    if (_voiceQuality != null) {
      _voiceQuality.stop();
    }
    self._voiceQuality = null;
    clearInterval(self._voiceQualityPeriodicStatsInterval);
    self._voiceQualityPeriodicStatsInterval = null;
    self._voiceQualityPeriodicStatsSequenceId = 0;
    const _voiceDuration = self._voiceDuration;
    if (_voiceDuration != null) {
      _voiceDuration.stop();
    }
    self._voiceDuration = null;
    const _videoQuality = self._videoQuality;
    if (_videoQuality != null) {
      _videoQuality.stop();
    }
    self._videoQuality = null;
    self._videoHealthManager = null;
    const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
    if (_localMediaSinkWantsManager != null) {
      _localMediaSinkWantsManager.reset();
    }
    self._secureFramesState = null;
    const items = [self.userId];
    self._userIds = new Set(items);
    const _secureFramesRosterMap = self._secureFramesRosterMap;
    new Set(items);
    _secureFramesRosterMap.clear();
    self._consecutiveMLSInvalidMessages = 0;
    const _secureFramesTransitionStates = self._secureFramesTransitionStates;
    _secureFramesTransitionStates.clear();
    self._secureFramesNextTransitionState = undefined;
    self._secureFramesLastExecutedTransitionId = undefined;
    const _daveJoinTimer = self._daveJoinTimer;
    _daveJoinTimer.socketLost();
    if (null != self._connection) {
      const _connection2 = self._connection;
      self._connection = null;
      self._hasCodecs = false;
      let reconnecting = self.reconnecting;
      const destroy = _connection2.destroy;
      if (!reconnecting) {
        reconnecting = tmp11;
      }
      destroy(reconnecting);
    }
    self.protocol = null;
    self._readyData = null;
    self._sfuEndpoint = null;
    self.setState(tmp17.DISCONNECTED, { willReconnect: "Force Close" !== reason });
  }
  _flushVideoStreamEndedEvents(reason, arg1) {
    const self = this;
    const _videoQuality = this._videoQuality;
    if (null != _videoQuality) {
      let _sfuVideoEventsAtLoss = self._sfuVideoEventsAtLoss;
      if (null == _sfuVideoEventsAtLoss) {
        _videoQuality.stop();
        _sfuVideoEventsAtLoss = self._collectVideoStreamEndedEvents(_videoQuality);
      }
      obj = { sfuMigration: tmp, sfuEndpoint: tmp2 };
      const result = self._getSfuFragmentAnalyticsProperties(obj);
      const senders = _sfuVideoEventsAtLoss.senders;
      for (const item10019 of senders) {
        let tmp9 = AnalyticsUtilsDefault;
        let obj2 = { reason };
        let track = tmp9.track;
        let VIDEO_STREAM_ENDED = constants.VIDEO_STREAM_ENDED;
        let merged = Object.assign(item10019);
        let merged1 = Object.assign(result);
        let trackResult = track(VIDEO_STREAM_ENDED, obj2);
        continue;
      }
      if (null != _sfuVideoEventsAtLoss.callEnded) {
        const obj3 = AnalyticsUtilsDefault;
        obj3.track(constants.VIDEO_CALL_ENDED, _sfuVideoEventsAtLoss.callEnded);
      }
      const receivers = _sfuVideoEventsAtLoss.receivers;
      const values = receivers.values();
      for (const item10053 of values) {
        let tmp27 = AnalyticsUtilsDefault;
        let obj4 = { reason };
        let track2 = tmp27.track;
        let VIDEO_STREAM_ENDED2 = constants.VIDEO_STREAM_ENDED;
        let merged2 = Object.assign(item10053);
        let merged3 = Object.assign(result);
        let track2Result = track2(VIDEO_STREAM_ENDED2, obj4);
        continue;
      }
    }
  }
  _flushFinalVideoStreamEndedEvents(reason) {
    const self = this;
    let _sfuEndpointBeforeLoss = this._sfuEndpoint;
    const _flushVideoStreamEndedEvents = this._flushVideoStreamEndedEvents;
    if (_sfuEndpointBeforeLoss == null) {
      _sfuEndpointBeforeLoss = self._sfuEndpointBeforeLoss;
    }
    const result = _flushVideoStreamEndedEvents(reason, { sfuMigration: false, sfuEndpoint: _sfuEndpointBeforeLoss });
  }
  _collectVideoStreamEndedEvents(getOutboundStats) {
    let obj3;
    const self = this;
    obj = { senders: [], receivers: new Map(), callEnded: null };
    const obj2 = { app_hardware_acceleration_enabled: obj3.getAppHardwareAccelerationEnabled(), media_session_id: this.getMediaSessionId(), guild_region: RTCRegionStore.getRegion(this.hostname), hostname: this.hostname, hardware_enabled: MediaEngineStore.getHardwareEncoding() };
    new Map();
    const merged = Object.assign(this._getAnalyticsProperties());
    obj3 = CrossPlatformNativeUtilsDefault;
    if (this._sentVideo) {
      const outboundStats = getOutboundStats.getOutboundStats();
      const iter = outboundStats[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let num2 = nextResult.num_frames;
        let tmp9 = nextResult;
        if (num2 == null) {
          num2 = 0;
        }
        if (num2 > 0) {
          let senders = obj.senders;
          let obj4 = { sender_user_id: self.userId, participant_type: "sender", device_performance_class: getMediaPerformanceClassDefault() };
          let push = senders.push;
          let merged1 = Object.assign(obj2);
          let merged2 = Object.assign(tmp9);
          let merged3 = Object.assign(getOutboundStats.getNetworkStats());
          let merged4 = Object.assign(getOutboundStats.getCodecUsageStats("sender", self.userId));
          let arr = push(obj4);
        }
        continue;
      }
      const cameraDurationStats = getOutboundStats.getCameraDurationStats();
      const tmp11 = null != cameraDurationStats && cameraDurationStats.camera_enabled_duration > 0;
      if (tmp11) {
        const obj5 = { media_session_id: self.getMediaSessionId(), rtc_connection_id: self.getRTCConnectionId(), connect_count: self._connectCount };
        const merged5 = Object.assign(cameraDurationStats);
        obj.callEnded = obj5;
      }
    }
    const inboundParticipants = getOutboundStats.getInboundParticipants();
    const iter2 = inboundParticipants[Symbol.iterator]();
    const nextResult1 = iter2.next();
    while (iter2 !== undefined) {
      let tmp17 = nextResult1;
      let inboundStats = getOutboundStats.getInboundStats(nextResult1);
      let num3;
      let tmp19 = inboundStats;
      if (inboundStats != null) {
        num3 = inboundStats.num_frames;
      }
      if (num3 == null) {
        num3 = 0;
      }
      if (num3 > 0) {
        let receivers = obj.receivers;
        let obj6 = { sender_user_id: tmp17, participant_type: "receiver" };
        set = receivers.set;
        let merged6 = Object.assign(obj2);
        let merged7 = Object.assign(tmp19);
        let merged8 = Object.assign(getOutboundStats.getNetworkStats());
        let merged9 = Object.assign(getOutboundStats.getCodecUsageStats("receiver", tmp17));
        let result = set(tmp17, obj6);
      }
      continue;
    }
    return obj;
  }
  _flushVoiceStreamEndedEvents() {
    const self = this;
    let _sfuVoiceEventsAtLoss = this._sfuVoiceEventsAtLoss;
    if (_sfuVoiceEventsAtLoss == null) {
      _sfuVoiceEventsAtLoss = self._collectVoiceStreamEndedEvents();
    }
    for (const item10008 of _sfuVoiceEventsAtLoss) {
      obj = AnalyticsUtilsDefault;
      let trackResult = obj.track(constants.VOICE_STREAM_ENDED, item10008);
      continue;
    }
  }
  _collectVoiceStreamEndedEvents() {
    const self = this;
    const _voiceQuality = this._voiceQuality;
    if (null != _voiceQuality) {
      if (self.shouldReport()) {
        let tmp4ResultResult;
        const items = [];
        const outboundPacketsStats = _voiceQuality.getOutboundPacketsStats();
        const outboundBytesStats = _voiceQuality.getOutboundBytesStats();
        const outboundLatencyStats = _voiceQuality.getOutboundLatencyStats();
        const tmp6 = flatRestDefault;
        const tmp6Result = tmp6(_voiceQuality.getTransportStats(), ["transport_delay_ms", "transport_packet_count"]);
        const tmp8 = flatRestDefault;
        const tmp8Result = tmp8(_voiceQuality.getAudioDeviceStats(), ["audio_device_delay_ms", "audio_device_total_delay_ms"]);
        let closure_3 = tmp8Result;
        const tmp4 = importDefault;
        if (null != self._voiceDuration) {
          const _voiceDuration = self._voiceDuration;
          const tmp4Result = tmp4(5836);
          tmp4ResultResult = tmp4Result(_voiceDuration.getDurationStats(), ["duration_connected_ms", "duration_speaking_ms"]);
        }
        const _Math = Math;
        const rounded = Math.round(self.getAveragePing());
        let num = outboundPacketsStats.num_packets;
        if (num == null) {
          num = 0;
        }
        if (num > 0) {
          obj = { media_session_id: self.getMediaSessionId(), participant_type: str, ping_average: rounded, connect_count: self._connectCount };
          let push = items.push;
          let merged = Object.assign(self._getAnalyticsProperties());
          ({ parentMediaSessionId: obj.parent_media_session_id, userId: obj.sender_user_id } = self);
          str = "streamer";
          if (self.context === constants6.DEFAULT) {
            str = "sender";
          }
          let merged1 = Object.assign(outboundPacketsStats);
          let merged2 = Object.assign(outboundBytesStats);
          let merged3 = Object.assign(outboundLatencyStats);
          let merged4 = Object.assign(tmp6Result);
          let merged5 = Object.assign(tmp8Result);
          let merged6 = Object.assign(tmp4ResultResult);
          push(obj);
        }
        const inboundParticipants = _voiceQuality.getInboundParticipants();
        const item = inboundParticipants.forEach((sender_user_id) => {
          const inboundPacketsStats = _voiceQuality.getInboundPacketsStats(sender_user_id);
          let num = inboundPacketsStats.num_packets;
          if (num == null) {
            num = 0;
          }
          if (num > 0) {
            const push = items.push;
            const obj2 = { media_session_id: self.getMediaSessionId(), parent_media_session_id: self.parentMediaSessionId, sender_user_id, participant_type: "receiver", ping_average: rounded, connect_count: self._connectCount };
            const merged = Object.assign(self._getAnalyticsProperties());
            const merged1 = Object.assign(inboundPacketsStats);
            const merged2 = Object.assign(obj.getInboundBytesStats(sender_user_id));
            const merged3 = Object.assign(obj.getInboundDurationStats(sender_user_id));
            const merged4 = Object.assign(obj.getInboundJitterStats(sender_user_id));
            const merged5 = Object.assign(obj.getInboundLatencyStats(sender_user_id));
            const merged6 = Object.assign(closure_3);
            push(obj2);
          }
        });
        return items;
      }
    }
    return [];
  }
  _getSfuFragmentAnalyticsProperties(sfuEndpoint) {
    let address;
    let uniqueId;
    sfuEndpoint = sfuEndpoint.sfuEndpoint;
    obj = { sfu_migration: sfuEndpoint.sfuMigration, sfu_gap_ms: this._sfuFragmentPrecedingGapMs, num_sfu_migrations: this._numSfuMigrations, sfu_address: address, sfu_unique_id: uniqueId };
    address = undefined;
    if (sfuEndpoint != null) {
      address = sfuEndpoint.address;
    }
    uniqueId = undefined;
    if (sfuEndpoint != null) {
      uniqueId = sfuEndpoint.uniqueId;
    }
    return obj;
  }
  _trackVoiceDisconnect(sfuEndpoint) {
    let bitrate;
    let diff;
    let duration;
    let mediaEngine;
    let mediaEngine1;
    let noiseCancellationStats;
    let port;
    let reason;
    let reconnect;
    let sfuMigration;
    let sfuTrailingGapMs;
    function getBatteryLevel() {
      return closure_0(...arguments);
    }
    sfuEndpoint = sfuEndpoint.sfuEndpoint;
    let obj4;
    let _sfuBatteryAtLoss;
    const self = this;
    obj = RTCRegionStore;
    ({ reason, reconnect, duration, sfuMigration, sfuTrailingGapMs } = sfuEndpoint);
    let preferredRegion = null;
    if (RTCRegionStore.shouldIncludePreferredRegion()) {
      preferredRegion = obj.getPreferredRegion();
    }
    const obj2 = MediaEngineStore;
    const settings = MediaEngineStore.getSettings();
    const channel = ChannelStore.getChannel(self.channelId);
    const connectionStats = MediaEngineStatsStore.getConnectionStats(self.getMediaEngineConnectionId());
    let prop;
    if (connectionStats != null) {
      const outbound = connectionStats.stats.rtp.outbound;
      const found = outbound.find((type) => "audio" === type.type);
      if (found != null) {
        prop = found.sampleRateMismatchPercent;
      }
    }
    const _connection = self._connection;
    let numFastUdpReconnects;
    if (_connection != null) {
      numFastUdpReconnects = _connection.getNumFastUdpReconnects();
    }
    let tmp11Result;
    if (null != self._voiceQuality) {
      const _voiceQuality = self._voiceQuality;
      const tmp11 = self(obj4[50]);
      tmp11Result = tmp11(_voiceQuality.getTransportStats(), ["decryption_failures", "routing_failures"]);
    }
    let tmp15Result;
    if (null != self._voiceQuality) {
      const _voiceQuality2 = self._voiceQuality;
      const tmp15 = self(obj4[50]);
      tmp15Result = tmp15(_voiceQuality2.getAudioDeviceStats(), ["input_device_restart_count", "output_device_restart_count", "input_device_time_to_first_audio", "output_device_time_to_first_audio", "input_device_buffer_overfull_count", "output_device_buffer_underrun_count", "input_device_buffer_size", "input_device_buffer_occupied_size_mean", "input_device_session_sample_rate", "output_device_session_sample_rate", "input_device_time_from_connect_to_first_audio_ms", "output_device_time_from_connect_to_first_audio_ms"]);
    }
    obj4 = { hostname: self.hostname, port, protocol: self.protocol, reconnect, reason, duration, sfu_trailing_gap_ms: sfuTrailingGapMs, num_noise_cancellation_changes: self._numNoiseCancellationChanges, media_session_id: self.getMediaSessionId(), channel_bitrate: bitrate, cloudflare_best_region: preferredRegion, connect_count: self._connectCount, ping_average: Math.round(self.getAveragePing()), ping_bad_count: self._pingBadCount, ping_timeout: self._pingTimeouts.length, input_detected: self._inputDetected, no_input_detected_notice: obj2.getNoInputDetectedNotice(), audio_input_mode: settings.mode, automatic_audio_input_sensitivity_enabled: settings.modeOptions.autoThreshold, audio_input_sensitivity: settings.modeOptions.threshold, noise_canceller_error: self._noiseCancellationError, encryption_mode: self._encryptionMode, channel_count: self.channelIds.size, device_performance_class: self(obj4[49])(), num_fast_udp_reconnects: diff, parent_media_session_id: self.parentMediaSessionId, audio_subsystem: mediaEngine.getAudioSubsystem(), audio_layer: mediaEngine1.getAudioLayer(), automatic_audio_subsystem: settings.automaticAudioSubsystem, participant_type: self.getVoiceParticipantType(), audio_capture_sample_rate_mismatch_percent: prop, krisp_sdk_version: obj2.getState().krispVersion, vad_use_advanced_voice_activity: settings.modeOptions.vadUseKrisp, soundshare_experimental: obj2.getExperimentalSoundshare(), join_voice_id: self.joinVoiceId, bypass_system_input_processing: settings.bypassSystemInputProcessing, system_microphone_mode: obj2.getSystemMicrophoneMode(), output_audio_route_type: AudioRouteStore.getCurrentRouteType() };
    let merged = Object.assign(self._getAnalyticsProperties());
    port = undefined;
    if (sfuEndpoint != null) {
      port = sfuEndpoint.port;
    }
    if (port == null) {
      port = self.port;
    }
    const merged1 = Object.assign(self._getSfuFragmentAnalyticsProperties({ sfuMigration, sfuEndpoint }));
    const merged2 = Object.assign(RTCConnectionStore.getUserVoiceSettingsStats(obj2.getSettings(self.context)));
    const _voiceQuality3 = self._voiceQuality;
    let packetStats;
    if (_voiceQuality3 != null) {
      packetStats = _voiceQuality3.getPacketStats();
    }
    const merged3 = Object.assign(packetStats);
    const _voiceQuality4 = self._voiceQuality;
    let bytesStats;
    if (_voiceQuality4 != null) {
      bytesStats = _voiceQuality4.getBytesStats();
    }
    const merged4 = Object.assign(bytesStats);
    const _voiceQuality5 = self._voiceQuality;
    let bufferStats;
    if (_voiceQuality5 != null) {
      bufferStats = _voiceQuality5.getBufferStats();
    }
    const merged5 = Object.assign(bufferStats);
    const _voiceQuality6 = self._voiceQuality;
    let networkStats;
    if (_voiceQuality6 != null) {
      networkStats = _voiceQuality6.getNetworkStats();
    }
    const merged6 = Object.assign(networkStats);
    const _voiceQuality7 = self._voiceQuality;
    let systemResourceStats;
    if (_voiceQuality7 != null) {
      systemResourceStats = _voiceQuality7.getSystemResourceStats();
    }
    const merged7 = Object.assign(systemResourceStats);
    const _voiceQuality8 = self._voiceQuality;
    let frameOpStats;
    if (_voiceQuality8 != null) {
      frameOpStats = _voiceQuality8.getFrameOpStats();
    }
    const merged8 = Object.assign(frameOpStats);
    const merged9 = Object.assign(tmp11Result);
    const _voiceQuality9 = self._voiceQuality;
    let e2EEStats;
    if (_voiceQuality9 != null) {
      e2EEStats = _voiceQuality9.getE2EEStats();
    }
    const merged10 = Object.assign(e2EEStats);
    const merged11 = Object.assign(tmp15Result);
    const _voiceQuality10 = self._voiceQuality;
    let audioLevelStats;
    if (_voiceQuality10 != null) {
      audioLevelStats = _voiceQuality10.getAudioLevelStats();
    }
    const merged12 = Object.assign(audioLevelStats);
    const _voiceDuration = self._voiceDuration;
    let durationStats;
    if (_voiceDuration != null) {
      durationStats = _voiceDuration.getDurationStats();
    }
    const merged13 = Object.assign(durationStats);
    const _voiceDuration2 = self._voiceDuration;
    let deprecatedDurationStats;
    if (_voiceDuration2 != null) {
      deprecatedDurationStats = _voiceDuration2.getDeprecatedDurationStats();
    }
    const merged14 = Object.assign(deprecatedDurationStats);
    const merged15 = Object.assign(DeviceFrecencyStore.getUsageStats());
    const merged16 = Object.assign(self.getAudioDeviceStates());
    const _systemResponsiveness = self._systemResponsiveness;
    let pttQueueLatencyStats;
    if (_systemResponsiveness != null) {
      pttQueueLatencyStats = _systemResponsiveness.getPttQueueLatencyStats();
    }
    const merged17 = Object.assign(pttQueueLatencyStats);
    bitrate = null;
    if (null != channel) {
      bitrate = channel.bitrate;
    }
    ({ echoCancellation: obj3.echo_cancellation_enabled, sidechainCompression: obj3.sidechain_compression_enabled, noiseSuppression: obj3.noise_suppression_enabled, noiseCancellation: obj3.noise_cancellation_enabled } = settings);
    ({ automaticGainControl: obj3.automatic_gain_control_enabled, outputVolume: obj3.voice_output_volume, inputVolume: obj3.voice_input_volume } = settings);
    diff = null;
    const tmp47 = self;
    const tmp48 = obj4;
    if (null != numFastUdpReconnects) {
      diff = numFastUdpReconnects - self._fastUdpReconnectsAtFragmentStart;
    }
    mediaEngine = obj2.getMediaEngine();
    mediaEngine1 = obj2.getMediaEngine();
    ({ _secureFramesMaxConcurrentTransitions: obj3.secure_frames_max_concurrent_transitions, _secureFramesTransitionPrepareCount: obj3.secure_frames_transition_prepare_count, _secureFramesTransitionExecuteCount: obj3.secure_frames_transition_execute_count } = self);
    const merged18 = Object.assign(self._sfuFragmentStatsAtLoss);
    _sfuBatteryAtLoss = self._sfuBatteryAtLoss;
    let closure_0 = self(function*() {
      let c2;
      let c3;
      let value;
      let batteryLevelStats = value;
      if (value == null) {
        const _systemResources = batteryLevelStats._systemResources;
        batteryLevelStats = undefined;
        if (_systemResources != null) {
          batteryLevelStats = _systemResources.getBatteryLevelStats();
        }
      }
      value = yield batteryLevelStats;
      if (arg1 == null) {
        value = { batteryUsageRounded: null };
      }
      return value;
    });
    const items = [getBatteryLevel(), , ];
    const tmp47Result = tmp47(tmp48[51]);
    items[1] = tmp47Result.getKrispModel();
    if (obj2.getKrispEnableStats()) {
      const mediaEngine2 = obj2.getMediaEngine();
      noiseCancellationStats = mediaEngine2.getNoiseCancellationStats();
    } else {
      noiseCancellationStats = Promise.resolve(null);
    }
    items[2] = noiseCancellationStats;
    const allResult = all(items);
    allResult.then((result) => {
      let highNoiseMs;
      let lowNoiseMs;
      let mediumNoiseMs;
      let talkTimeMs;
      let tmp2;
      let tmp3;
      [, tmp2, tmp3] = result;
      const logger = self.logger;
      str = tmp2;
      const log = logger.log;
      if (tmp2 == null) {
        str = "null";
      }
      log("[VOICE_DISCONNECT] krisp_nc_model: " + str);
      obj = { battery_usage: tmp, krisp_nc_model: tmp2, duration_low_noise_detected_ms: lowNoiseMs, duration_medium_noise_detected_ms: mediumNoiseMs, duration_high_noise_detected_ms: highNoiseMs, duration_noise_cancellation_voice_detected_ms: talkTimeMs };
      const track = AnalyticsUtilsDefault.track;
      const VOICE_DISCONNECT = constants.VOICE_DISCONNECT;
      AnalyticsUtilsDefault;
      const merged = Object.assign(obj4);
      lowNoiseMs = undefined;
      if (tmp3 != null) {
        lowNoiseMs = tmp3.lowNoiseMs;
      }
      mediumNoiseMs = undefined;
      if (tmp3 != null) {
        mediumNoiseMs = tmp3.mediumNoiseMs;
      }
      highNoiseMs = undefined;
      if (tmp3 != null) {
        highNoiseMs = tmp3.highNoiseMs;
      }
      talkTimeMs = undefined;
      if (tmp3 != null) {
        talkTimeMs = tmp3.talkTimeMs;
      }
      track(VOICE_DISCONNECT, obj);
    });
  }
  _endSfuMigrationFragment(_sfuEndpointBeforeLoss, _sfuEndpointLossAt) {
    const self = this;
    let flag = 0 !== this._sfuFragmentStartTime;
    if (flag) {
      obj = { sfuMigration: true, sfuEndpoint: _sfuEndpointBeforeLoss };
      const result = self._flushVideoStreamEndedEvents("sfu-migration", obj);
      const result1 = self._flushVoiceStreamEndedEvents();
      const _Math = Math;
      const _trackVoiceDisconnect = self._trackVoiceDisconnect;
      const obj2 = { reason: "sfu-migration", reconnect: true, duration: Math.max(0, _sfuEndpointLossAt - self._sfuFragmentStartTime), sfuMigration: true, sfuEndpoint: _sfuEndpointBeforeLoss, sfuTrailingGapMs: 0 };
      const result2 = _trackVoiceDisconnect(obj2);
      self._numSfuMigrations = self._numSfuMigrations + 1;
      const _voiceQuality = self._voiceQuality;
      if (_voiceQuality != null) {
        _voiceQuality.stop();
      }
      const _voiceQuality2 = self._voiceQuality;
      if (_voiceQuality2 != null) {
        _voiceQuality2.removeAllListeners();
      }
      const result3 = self._resetPerConnectionAnalyticsState();
      const obj3 = v1;
      self._rtcConnectionId = obj3.v4();
      const obj5 = { type: "RTC_CONNECTION_UPDATE_ID", connection: self };
      const obj4 = DispatcherDefault;
      obj4.dispatch(obj5);
      self._sfuFragmentStartTime = 0;
      self._sfuFragmentStatsAtLoss = null;
      self._sfuVideoEventsAtLoss = null;
      self._sfuVoiceEventsAtLoss = null;
      self._sfuBatteryAtLoss = null;
      flag = true;
    }
    return flag;
  }
  _startSfuMigrationFragment(nowResult, _sfuFragmentPrecedingGapMs) {
    const self = this;
    this._connectCount = this._connectCount + 1;
    const _connection = this._connection;
    if (null != _connection) {
      const result = self._startPerConnectionCollectors(_connection, self._voiceQuality);
      const _voiceDuration = self._voiceDuration;
      if (_voiceDuration != null) {
        _voiceDuration.restartForFragment();
      }
      self._inputDetected = self._inputCurrentlyDetected;
      let num = _connection.getNumFastUdpReconnects();
      if (num == null) {
        num = 0;
      }
      self._fastUdpReconnectsAtFragmentStart = num;
      const _videoQuality = self._videoQuality;
      if (null != _videoQuality) {
        const prop = self._earlierFragmentVideoQualities;
        prop.push(_videoQuality);
        self._videoQuality = null;
        const orCreateVideoQuality = self.getOrCreateVideoQuality();
        if (orCreateVideoQuality != null) {
          obj = { continueTimeline: 0 === _sfuFragmentPrecedingGapMs };
          orCreateVideoQuality.seedFrom(_videoQuality, obj);
        }
      }
    }
    self._sfuFragmentStartTime = nowResult;
    self._sfuFragmentPrecedingGapMs = _sfuFragmentPrecedingGapMs;
    const result1 = self._restartFragmentAnalytics();
  }
  _restartFragmentAnalytics() {

  }
  _resetPerConnectionAnalyticsState() {
    this._pings = [];
    this._pingTimeouts = [];
    this._pingBadCount = 0;
    this._inputDetected = false;
    this._noiseCancellationError = 0;
    this._numNoiseCancellationChanges = 0;
    this._secureFramesMaxConcurrentTransitions = 0;
    this._secureFramesTransitionPrepareCount = 0;
    this._secureFramesTransitionExecuteCount = 0;
  }
  _startPerConnectionCollectors(_connection, _voiceQuality) {
    const self = this;
    this._voiceQuality = new VoiceQualityDefault(_connection);
    new VoiceQualityDefault(_connection);
    if (null != _voiceQuality) {
      _voiceQuality = self._voiceQuality;
      _voiceQuality.seedFrom(_voiceQuality);
    }
    const _voiceQuality2 = self._voiceQuality;
    _voiceQuality2.start();
    const _voiceQuality3 = self._voiceQuality;
    _voiceQuality3.on(VoiceQuality.VoiceQualityEvent.InputDeviceSampleRateChanged, (sampleRate) => {
      obj = DispatcherDefault;
      const obj2 = { type: "AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED", sampleRate };
      obj.dispatch(obj2);
    });
    const _systemResponsiveness = self._systemResponsiveness;
    if (_systemResponsiveness != null) {
      _systemResponsiveness.stop();
    }
    self._systemResponsiveness = new SystemResponsivenessDefault(_connection);
    const _systemResponsiveness2 = self._systemResponsiveness;
    new SystemResponsivenessDefault(_connection);
    _systemResponsiveness2.start();
    self._systemResources = new SystemResourcesDefault();
    const _systemResources = self._systemResources;
    new SystemResourcesDefault();
    _systemResources.setLastBattery();
  }
  _getSfuFragmentDuration() {
    let duration;
    const self = this;
    if (0 === this._sfuFragmentStartTime) {
      duration = self.getDuration();
    } else {
      let _sfuEndpointLossAt = self._sfuEndpointLossAt;
      const _Math = Math;
      if (_sfuEndpointLossAt == null) {
        obj = TimeUtils;
        _sfuEndpointLossAt = obj.now();
      }
      duration = max(0, _sfuEndpointLossAt - self._sfuFragmentStartTime);
    }
    return duration;
  }
  _freezeSfuFragmentAtEndpointLoss() {
    const self = this;
    obj = TimeUtils;
    this._sfuEndpointLossAt = obj.now();
    const _voiceQuality = this._voiceQuality;
    if (_voiceQuality != null) {
      _voiceQuality.stop();
    }
    const _systemResponsiveness = self._systemResponsiveness;
    if (_systemResponsiveness != null) {
      _systemResponsiveness.stop();
    }
    const _videoQuality = self._videoQuality;
    if (null != _videoQuality) {
      _videoQuality.stop();
      self._sfuVideoEventsAtLoss = self._collectVideoStreamEndedEvents(_videoQuality);
    }
    self._sfuVoiceEventsAtLoss = self._collectVoiceStreamEndedEvents();
    const _voiceQuality2 = self._voiceQuality;
    let networkStats;
    if (_voiceQuality2 != null) {
      networkStats = _voiceQuality2.getNetworkStats();
    }
    const obj2 = { ping_average: Math.round(self.getAveragePing()), ping_bad_count: self._pingBadCount, ping_timeout: self._pingTimeouts.length, input_detected: self._inputDetected };
    const merged = Object.assign(networkStats);
    const _voiceQuality3 = self._voiceQuality;
    let systemResourceStats;
    if (_voiceQuality3 != null) {
      systemResourceStats = _voiceQuality3.getSystemResourceStats();
    }
    const merged1 = Object.assign(systemResourceStats);
    const _voiceDuration = self._voiceDuration;
    let durationStats;
    if (_voiceDuration != null) {
      durationStats = _voiceDuration.getDurationStats();
    }
    const merged2 = Object.assign(durationStats);
    const _voiceDuration2 = self._voiceDuration;
    let deprecatedDurationStats;
    if (_voiceDuration2 != null) {
      deprecatedDurationStats = _voiceDuration2.getDeprecatedDurationStats();
    }
    const merged3 = Object.assign(deprecatedDurationStats);
    const _systemResponsiveness2 = self._systemResponsiveness;
    let pttQueueLatencyStats;
    if (_systemResponsiveness2 != null) {
      pttQueueLatencyStats = _systemResponsiveness2.getPttQueueLatencyStats();
    }
    const merged4 = Object.assign(pttQueueLatencyStats);
    self._sfuFragmentStatsAtLoss = obj2;
    const _systemResources = self._systemResources;
    let batteryLevelStats;
    if (_systemResources != null) {
      batteryLevelStats = _systemResources.getBatteryLevelStats();
    }
    if (batteryLevelStats == null) {
      batteryLevelStats = null;
    }
    self._sfuBatteryAtLoss = batteryLevelStats;
  }
  _handleResuming() {
    const _connection = this._connection;
    if (_connection != null) {
      _connection.fastUdpReconnect();
    }
    const _connection2 = this._connection;
    if (_connection2 != null) {
      _connection2.clearAllSpeaking();
    }
  }
  _setAvx512EntropyHistogramIfSupported(connectResult) {
    let closure_0 = connectResult;
    const self = this;
    return (async (arg0, value) => {
      let closure_0;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c1 = 1;
              c2 = 1;
              const obj4 = { value: getAvx512EntropyHistogramSupported(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const tmp5 = value && closure_128_1._connection === closure_128_0;
            if (tmp5) {
              const setAvx512EntropyHistogram = closure_128_0.setAvx512EntropyHistogram;
              obj = tmp(c2[55]);
              const result = setAvx512EntropyHistogram(obj.getIsAvx512EntropyHistogramEnabled("RTCConnection"));
            }
            c2 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp15) {
          c2 = 3;
          throw tmp15;
        }
      }
    })();
  }
  _handleSelectProtocolAck() {
    this._selectProtocolAckAt = performance.now();
  }
  _handleReady(socket, address, port, modes, ssrc, streamParameters, items) {
    const self = this;
    const _chooseExperiments = this._chooseExperiments;
    if (items == null) {
      items = [];
    }
    _chooseExperiments(items);
    if (0 === streamParameters.length) {
      obj = { type: constants8.VIDEO, rid: "100", ssrc: ssrc + 1, rtxSsrc: ssrc + 2, quality: 100, active: false };
      streamParameters.push(obj);
    }
    const obj2 = { socket, ssrc, streamParameters };
    self._readyData = obj2;
    let _sfuEndpoint = null;
    if (null != address) {
      _sfuEndpoint = null;
      if (null != port) {
        _sfuEndpoint = null;
        if (null != modes) {
          _sfuEndpoint = { address, port, modes };
          const obj3 = { address, port, modes };
        }
      }
    }
    if (_sfuEndpoint == null) {
      _sfuEndpoint = self._sfuEndpoint;
    }
    if (null == _sfuEndpoint) {
      self.port = null;
      const logger = self.logger;
      const _HermesInternal = HermesInternal;
      logger.info("READY did not include an SFU endpoint; waiting for sfu_update. supportsSfuUpdate=" + socket.supportsSfuUpdate());
      self.setState(constants3.AWAITING_ENDPOINT);
    } else {
      const result = self._connectMediaEngineWithEndpoint(_sfuEndpoint, obj2);
    }
  }
  _connectMediaEngineWithEndpoint(_sfuEndpoint, _readyData) {
    let _undefined;
    let context;
    let processPriority;
    let ssrc;
    let streamParameters;
    let threadPriorityConfiguration;
    let tmp9;
    let userId;
    let self = this;
    importDefault = _sfuEndpoint;
    const socket = _readyData.socket;
    let c3;
    let closure_4;
    _require = undefined;
    this._sfuEndpoint = _sfuEndpoint;
    this.protocol = null;
    ({ ssrc, streamParameters } = _readyData);
    this.setState(constants3.RTC_CONNECTING);
    this.port = _sfuEndpoint.port;
    const tmp3 = socket;
    const ProcessBoostExperiment = require("ProcessBoostExperiment").ProcessBoostExperiment;
    const config = ProcessBoostExperiment.getConfig({ location: "media_engine_connect" });
    obj = MediaEngineStore;
    ({ processPriority, threadPriorityConfiguration } = config);
    const mediaEngine = MediaEngineStore.getMediaEngine();
    const persistentCodesEnabled = SecureFramesPersistedStore.getPersistentCodesEnabled();
    const staticAuthSessionId = AuthenticationStore.getStaticAuthSessionId();
    let obj2 = { ssrc, address: _sfuEndpoint.address, port: _sfuEndpoint.port, modes: _sfuEndpoint.modes, experiments: self._selectedExperiments, streamParameters, videoSupported: obj.supports(constants5.VIDEO), qosEnabled: obj.getQoS(), signingKeyId: tmp9, processPriority, threadPriorityConfiguration };
    const connect = mediaEngine.connect;
    ({ context, userId } = self);
    const tmp2Result = require("TimeUtils");
    tmp9 = undefined;
    const nowResult = tmp2Result.now();
    if (persistentCodesEnabled) {
      tmp9 = staticAuthSessionId;
    }
    let merged = Object.assign(self.getExtraConnectionOptions());
    const connectResult = connect(context, userId, obj2);
    c3 = connectResult;
    const tmp2Result3 = require("TimeUtils");
    self._mediaEngineConnectDuration = tmp2Result3.now() - nowResult;
    const tmp2Result4 = require("PlatformUtils");
    let isWebResult = tmp2Result4.isWeb();
    if (isWebResult) {
      let tmp12 = closure_24;
      isWebResult = !closure_24;
    }
    if (isWebResult) {
      let tmp13 = importDefault;
      const obj8 = require("SentryUtils");
      obj8.captureMessage("Browser does not support Unified Plan");
    }
    connectResult.setUseElectronVideo(mediaEngine.supports(constants5.ELECTRON_VIDEO));
    let guild = null;
    if (null != self.guildId) {
      guild = GuildStore.getGuild(self.guildId);
    }
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    closure_4 = premiumTier === TIER_1.TIER_1;
    const canStreamQuality = require("PremiumUtils").canStreamQuality;
    const tmp20 = require("PremiumUtils");
    _require = canStreamQuality(require("PremiumUtils").StreamQuality.MID, UserStore.getCurrentUser());
    let result = connectResult.setCalcMaxBitrateFunc((videoCodec) => {
      let framerate;
      let height;
      ({ height, framerate } = videoCodec);
      let tmp = height > 0;
      videoCodec = videoCodec.videoCodec;
      if (tmp) {
        tmp = height <= 720;
      }
      if (height === RESOLUTION_1080.RESOLUTION_1080) {
        if (framerate === FPS_30.FPS_30) {
          const tmp6 = getFrontierTuningConfigIfEligibleDefault;
          const tmp6Result = tmp6("RTCConnection", UserStore.getCurrentUser(), self.guildId);
          let maxBitrate;
          if (tmp6Result != null) {
            maxBitrate = tmp6Result.maxBitrate;
          }
          if (null != maxBitrate) {
            return tmp6Result.maxBitrate;
          }
        }
      }
      const tmp12 = closure_4;
      if (tmp12) {
        const tmp13 = closure_0;
        if (!tmp13) {
          if (tmp) {
            let bitrate;
            if (framerate > 30) {
              const ServerLadderExperiment = ServerLadderExperiment2.ServerLadderExperiment;
              bitrate = ServerLadderExperiment.getConfig({ location: "RTCConnection" }).bitrate;
            }
            return bitrate;
          }
        }
      }
      let bitrate1 = null;
      if ("AV1" === videoCodec) {
        if (0 !== height) {
          bitrate1 = null;
          if (tmp) {
            bitrate1 = null;
          }
        }
        const AV1StreamBitrateReductionExperiment = AV1BitrateTuningExperiment.AV1StreamBitrateReductionExperiment;
        bitrate1 = AV1StreamBitrateReductionExperiment.getConfig({ location: "RTCConnection" }).bitrate;
      }
      bitrate = bitrate1;
    });
    const obj9 = UserStore;
    if (self.context === constants6.STREAM) {
      if ("streamer" === self.getVoiceParticipantType()) {
        const tmp19Result = require("getFrontierTuningConfigIfEligible");
        const tmp19ResultResult = tmp19Result("RTCConnection", obj9.getCurrentUser(), self.guildId);
        let maxResolution;
        const setFakeGoLiveEncodePixelCount = connectResult.setFakeGoLiveEncodePixelCount;
        if (tmp19ResultResult != null) {
          maxResolution = tmp19ResultResult.maxResolution;
        }
        let num = null;
        if (maxResolution === RESOLUTION_1080.RESOLUTION_1080) {
          num = 921600;
        }
        const result1 = setFakeGoLiveEncodePixelCount(num);
      }
    }
    if (obj.supports(constants5.IMAGE_QUALITY_MEASUREMENT)) {
      const SingleCpuCopyExperiment = tmp2(tmp3[61]).SingleCpuCopyExperiment;
      const enabled = SingleCpuCopyExperiment.getConfig({ location: "RTCConnection" }).enabled;
      let str4 = "imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec";
      if (enabled) {
        str4 = "imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec,singleCpuCopy";
      }
      const result2 = connectResult.setVideoQualityMeasurement(str4);
      connectResult.setSingleCpuCopy(enabled);
      const result3 = self._setAvx512EntropyHistogramIfSupported(connectResult);
    }
    const result4 = connectResult.setVideoEncoderExperiments(obj.getVideoEncoderExperiments(self.context, self.getVoiceParticipantType()));
    const result5 = connectResult.setVideoEncoderLatencyProfile(self._videoEncoderLatencyProfile);
    connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.Speaking, (arg0, _lastSentSpeakingStatus, _lastSentSSRC) => {
      if (self.userId === arg0) {
        self.sendSpeaking(_lastSentSpeakingStatus, _lastSentSSRC);
      }
      self.emit(RTCConnectionEvent.RTCConnectionEvent.Speaking, arg0, _lastSentSpeakingStatus);
    });
    connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.NativeMuteChanged, (arg0) => {
      if (self.context === constants4.DEFAULT) {
        obj = NativeMuteManagerDefault;
        obj.nativeMuteChanged(arg0);
      }
    });
    connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.Video, (userId, streamId, audioSsrc, arg3, rtxSsrc, videoStreamParameters) => {
      let num3;
      closure_0 = userId;
      let num = audioSsrc;
      let num2 = arg3;
      obj = { userId, streamId, audioSsrc, videoSsrc: num3, rtxSsrc, videoStreamParameters };
      num3 = arg3;
      const _handleVideoStreamId = self._handleVideoStreamId;
      if (arg3 == null) {
        num3 = 0;
      }
      let num4 = rtxSsrc;
      _handleVideoStreamId(obj);
      if (self.userId === userId) {
        const sendVideo = tmp.sendVideo;
        if (num == null) {
          num = 0;
        }
        if (num2 == null) {
          num2 = 0;
        }
        if (num4 == null) {
          num4 = 0;
        }
        sendVideo(num, num2, num4, videoStreamParameters);
        if (videoStreamParameters != null) {
          const item = videoStreamParameters.forEach((quality) => {
            if (100 === quality.quality) {
              self.emit(RTCConnectionEvent.RTCConnectionEvent.VideoSourceQualityChanged, self.guildId, self.channelId, userId, quality.maxResolution, quality.maxFrameRate, self.context);
            }
          });
        }
      }
    });
    connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.FirstFrame, (arg0, arg1, arg2) => {
      if (null != self._localMediaSinkWantsManager) {
        const _localMediaSinkWantsManager = obj._localMediaSinkWantsManager;
        const result = _localMediaSinkWantsManager.setFirstFrameReceived(arg1);
        self.emit(RTCConnectionEvent.RTCConnectionEvent.Video, self.guildId, self.channelId, arg0, arg2, self.streamServerId);
      }
      if (null != self._goLiveQualityManager) {
        self.emit(RTCConnectionEvent.RTCConnectionEvent.Video, self.guildId, self.channelId, arg0, arg2, self.streamServerId);
      }
    });
    connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.Silence, (arg0) => {
      self._inputCurrentlyDetected = !arg0;
      let _inputDetected = self._inputDetected;
      const tmp = self;
      if (!_inputDetected) {
        _inputDetected = !arg0;
      }
      tmp._inputDetected = _inputDetected;
    });
    connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.Connected, function(protocol, sdp) {
      let _connection;
      obj = self;
      const logger = self.logger;
      const tmp = config;
      logger.info("RTC connected to media server: " + config.address + ":" + config.port);
      if (socket === self._socket) {
        if (_undefined === obj._connection) {
          const result = obj._startPerConnectionCollectors(obj3);
          obj._voiceQualityPeriodicStatsSequenceId = 0;
          const _setInterval = setInterval;
          obj._voiceQualityPeriodicStatsInterval = setInterval(obj._handleVoiceQualityPeriodicsStats, 300000);
          obj._noiseCancellationError = 0;
          self = this;
          const self2 = this;
          obj._voiceDuration = new VoiceDurationDefault(obj.userId, _undefined);
          const _voiceDuration = obj._voiceDuration;
          const start = _voiceDuration.start;
          const tmp9 = new VoiceDurationDefault(obj.userId, _undefined);
          const selfMute = obj3.getSelfMute();
          start(selfMute, _undefined.getSelfDeaf());
          obj.protocol = protocol;
          if ("udp" === protocol) {
            const logger5 = obj.logger;
            logger5.info("Sending UDP info to RTC server.", sdp, obj._selectedExperiments);
            if (null == obj._sfuEndpoint) {
              const logger7 = obj.logger;
              logger7.info("Clearing SFU endpoint before SELECT_PROTOCOL.");
              _undefined.setUdpEndpoint(null);
            } else {
              const _sfuEndpoint = obj._sfuEndpoint;
              const tmp22 = null != tmp && tmp.address === _sfuEndpoint.address && tmp.port === _sfuEndpoint.port;
              if (!tmp22) {
                const logger6 = obj.logger;
                const _HermesInternal = HermesInternal;
                logger6.info("Retargeting SFU endpoint to " + obj._sfuEndpoint.address + ":" + obj._sfuEndpoint.port);
                const obj4 = { address: obj._sfuEndpoint.address, port: obj._sfuEndpoint.port };
                _undefined.setUdpEndpoint(obj4);
              }
            }
            socket.once(RTCControlSocket.SocketEvent.Encryption, (_encryptionMode, secretKey) => {
              obj = _undefined;
              if (_undefined === _connection._connection) {
                obj.setEncryption(_encryptionMode, secretKey);
                tmp._encryptionMode = _encryptionMode;
              }
            });
            obj._selectProtocolAckAt = null;
            const _performance2 = performance;
            obj._selectProtocolSentAt = performance.now();
            protocol = obj2.selectProtocol(protocol, obj.getRTCConnectionId(), sdp, obj._selectedExperiments);
          } else if ("webrtc" === protocol) {
            const logger4 = obj.logger;
            logger4.info("Sending local SDP to RTC server.");
            const once = obj2.once;
            const _handleSDP = obj._handleSDP;
            once(RTCControlSocket.SocketEvent.SDP, _handleSDP.bind(obj));
            obj._selectProtocolAckAt = null;
            const _performance = performance;
            obj._selectProtocolSentAt = performance.now();
            const protocol1 = obj2.selectProtocol(protocol, obj.getRTCConnectionId(), sdp);
          } else {
            const logger3 = obj.logger;
            logger3.error("Unable to determine protocol.");
          }
          const _backoff = obj._backoff;
          _backoff.succeed();
        }
      }
      const logger2 = obj.logger;
      logger2.warn("Ignoring connected event from stale RTC connection.");
    });
    connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.VideoEncoderFallback, (codecs) => {
      const found = codecs.filter((type) => "video" === type.type);
      const mapped = found.map((name) => name.name);
      const logger = self.logger;
      logger.info("The originally selected video encoder is not working, fallback to the other available encoders: " + mapped.join(","));
      obj = { codecs };
      socket.updateSession(obj);
    });
    connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.VideoDecoderFallback, (codecs) => {
      const channel = ChannelStore.getChannel(self.channelId);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      if (type === constants2.GUILD_STAGE_VOICE) {
        if (!self._videoDecoderFallbackSuppressed) {
          const logger2 = tmp.logger;
          logger2.info("Suppressing video decoder fallback: stage channel");
          self._videoDecoderFallbackSuppressed = true;
        }
      } else {
        const found = codecs.filter((type) => "video" === type.type);
        const mapped = found.map((name) => name.name);
        const logger = tmp.logger;
        const _HermesInternal = HermesInternal;
        logger.info("The originally selected video decoder is not working, fallback to the other available decoders: " + mapped.join(","));
        obj = { codecs };
        socket.updateSession(obj);
      }
    });
    connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.VideoCodecError, (codecStandard) => {
      let _mediaSessionId;
      let obj2;
      let obj4;
      obj = { videoCodec: codecStandard.codecStandard, errorMessage: codecStandard.message, mediaContext: self.context, mediaSessionId: _mediaSessionId, streamKey: obj2.getMediaStreamKey() };
      _mediaSessionId = self._mediaSessionId;
      const reportAVError = AVError.reportAVError;
      AVError;
      obj2 = self;
      if ("encode" === codecStandard.mode) {
        const obj3 = { type: AVError.AVError.VIDEO_ENCODE_ERROR, videoEncoder: codecStandard.implName };
        const merged = Object.assign(obj);
        obj4 = obj3;
      } else {
        obj4 = { type: AVError.AVError.VIDEO_DECODE_ERROR, videoDecoder: codecStandard.implName };
        const merged1 = Object.assign(obj);
      }
      reportAVError(obj4);
    });
    connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.Error, (error) => {
      if (socket === self._socket) {
        let preferredRegion = null;
        const obj3 = RTCRegionStore;
        if (RTCRegionStore.shouldIncludePreferredRegion()) {
          preferredRegion = obj3.getPreferredRegion();
        }
        const logger = obj.logger;
        const _HermesInternal = HermesInternal;
        logger.error("Error occurred while connecting to RTC server: " + error);
        const obj4 = { error, cloudflare_best_region: preferredRegion };
        const track = AnalyticsUtilsDefault.track;
        const VOICE_CONNECTION_FAILURE = constants.VOICE_CONNECTION_FAILURE;
        AnalyticsUtilsDefault;
        const merged = Object.assign(obj._getAnalyticsProperties());
        ({ hostname: obj2.hostname, port: obj2.port, protocol: obj2.protocol } = self);
        ({ _connectCount: obj2.connect_count, joinVoiceId: obj2.join_voice_id } = self);
        track(VOICE_CONNECTION_FAILURE, obj4);
      }
    });
    connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.ConnectionStateChange, (arg0) => {
      const logger = self.logger;
      logger.info("RTC media connection state change: " + self.state + " => " + arg0);
      if (socket === self._socket) {
        const state = obj.state;
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
            const _localMediaSinkWantsManager = obj._localMediaSinkWantsManager;
            if (_localMediaSinkWantsManager != null) {
              _localMediaSinkWantsManager.setConnection(c3);
            }
            const _goLiveQualityManager = obj._goLiveQualityManager;
            if (_goLiveQualityManager != null) {
              _goLiveQualityManager.update();
            }
            const obj2 = TimeUtils;
            self._connectCompletedTime = obj2.now();
            self._sfuFragmentStartTime = self._connectCompletedTime;
            self._hasEverConnected = true;
            self._connecting = false;
            self._encountered_socket_failure = false;
            const result = obj._trackVoiceConnectionSuccess(c3);
          } else if (state === constants3.RTC_CONNECTED) {
            const stateHistory = obj.stateHistory;
            stateHistory.reset(self.state);
          }
        }
        if (self.state === constants3.NO_ROUTE) {
          if (0 === self._backoff.fails) {
            self._handleNoRoute();
          }
          self._scheduleReconnect();
        }
      }
    });
    connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.SecureFramesUpdate, (_secureFramesState) => {
      self._secureFramesState = _secureFramesState;
      self.emit(RTCConnectionEvent.RTCConnectionEvent.SecureFramesUpdate);
    });
    const on = connectResult.on;
    const _handlePing = self._handlePing;
    on(require("BaseConnectionEvent").BaseConnectionEvent.Ping, _handlePing.bind(self));
    const on2 = connectResult.on;
    const _handlePingTimeout = self._handlePingTimeout;
    on2(require("BaseConnectionEvent").BaseConnectionEvent.PingTimeout, _handlePingTimeout.bind(self));
    const on3 = connectResult.on;
    const _handleOutboundLossRate = self._handleOutboundLossRate;
    on3(require("BaseConnectionEvent").BaseConnectionEvent.OutboundLossRate, _handleOutboundLossRate.bind(self));
    const on4 = connectResult.on;
    const _handleLocalVideoDisabled = self._handleLocalVideoDisabled;
    on4(require("BaseConnectionEvent").BaseConnectionEvent.LocalVideoDisabled, _handleLocalVideoDisabled.bind(self));
    const on5 = connectResult.on;
    const Stats = tmp2(tmp3[62]).BaseConnectionEvent.Stats;
    const tmp19Result2 = require("RTCBandwidthMonitor");
    on5(Stats, tmp19Result2.create());
    const on6 = connectResult.on;
    const _handleRemoteStreamsReady = self._handleRemoteStreamsReady;
    on6(require("BaseConnectionEvent").BaseConnectionEvent.RemoteStreamsReady, _handleRemoteStreamsReady.bind(self));
    const on7 = connectResult.on;
    const handleUsersMerged = self.handleUsersMerged;
    on7(require("BaseConnectionEvent").BaseConnectionEvent.UsersMerged, handleUsersMerged.bind(self));
    connectResult.on(require("BaseConnectionEvent").BaseConnectionEvent.NoiseCancellationError, (_noiseCancellationError) => {
      self._noiseCancellationError = _noiseCancellationError;
    });
    const on8 = connectResult.on;
    const _handleMLSFailure = self._handleMLSFailure;
    on8(require("BaseConnectionEvent").BaseConnectionEvent.MLSFailure, _handleMLSFailure.bind(self));
    const result6 = connectResult.setRemoteVideoSinkWants(self._remoteVideoSinkWants);
    self._connection = connectResult;
    self._hasCodecs = false;
    self._mediaEngineConnectionId = connectResult.mediaEngineConnectionId;
  }
  _handleSfuUpdate(arg0, primary) {
    let _endSfuMigrationFragment;
    let _sfuEndpointLossAt;
    let unique_id;
    const self = this;
    if (arg0 === this._socket) {
      primary = undefined;
      if (primary != null) {
        primary = primary.primary;
      }
      if (null != primary) {
        let _sfuEndpoint = { address: null, port: null, modes: null, uniqueId: unique_id };
        ({ ip: obj.address, port: obj.port, modes: obj.modes, unique_id } = primary);
        _sfuEndpoint = self._sfuEndpoint;
        const tmp13 = null != _sfuEndpoint && _sfuEndpoint.address === _sfuEndpoint.address && _sfuEndpoint.port === _sfuEndpoint.port;
        if (tmp13) {
          if (null != self._connection) {
            self._sfuEndpoint = _sfuEndpoint;
            self.port = _sfuEndpoint.port;
          }
        }
        let _sfuEndpointBeforeLoss = self._sfuEndpoint;
        if (_sfuEndpointBeforeLoss == null) {
          _sfuEndpointBeforeLoss = self._sfuEndpointBeforeLoss;
        }
        self._sfuEndpoint = _sfuEndpoint;
        self.port = _sfuEndpoint.port;
        const _connection2 = self._connection;
        if (null != _connection2) {
          if (null == self.protocol) {
            const logger7 = self.logger;
            logger7.info("Received sfu_update before media protocol was selected; endpoint cached.");
            self._sfuEndpointBeforeLoss = null;
            self._sfuEndpointLossAt = null;
          } else if ("udp" !== self.protocol) {
            const logger6 = self.logger;
            const _HermesInternal2 = HermesInternal;
            logger6.warn("Ignoring sfu_update for non-UDP protocol: " + self.protocol);
            self._sfuEndpointBeforeLoss = null;
            self._sfuEndpointLossAt = null;
          } else {
            const logger9 = self.logger;
            const _HermesInternal3 = HermesInternal;
            logger9.info("Retargeting SFU endpoint to " + _sfuEndpoint.address + ":" + _sfuEndpoint.port);
            const obj3 = TimeUtils;
            const nowResult = obj3.now();
            let num2 = 0;
            if (null != self._sfuEndpointLossAt) {
              num2 = nowResult - self._sfuEndpointLossAt;
            }
            ({ _sfuEndpointLossAt, _endSfuMigrationFragment } = self);
            if (_sfuEndpointLossAt == null) {
              _sfuEndpointLossAt = nowResult;
            }
            const obj4 = { address: null, port: null };
            ({ address: obj2.address, port: obj2.port } = _sfuEndpoint);
            const result = _endSfuMigrationFragment(_sfuEndpointBeforeLoss, _sfuEndpointLossAt);
            _connection2.setUdpEndpoint(obj4);
            if (result) {
              const result1 = self._startSfuMigrationFragment(nowResult, num2);
            }
            self._sfuEndpointBeforeLoss = null;
            self._sfuEndpointLossAt = null;
          }
        } else {
          const _readyData = self._readyData;
          if (null != _readyData) {
            if (_readyData.socket === arg0) {
              const result2 = self._connectMediaEngineWithEndpoint(_sfuEndpoint, _readyData);
            } else {
              const logger5 = self.logger;
              logger5.warn("sfu_update socket does not match READY socket.");
            }
          } else {
            const logger4 = self.logger;
            logger4.warn("Received unexpected SFU_UPDATE before READY.");
          }
        }
      } else {
        const logger8 = self.logger;
        logger8.info("Clearing SFU endpoint.");
        if (null != self._sfuEndpoint) {
          self._sfuEndpointBeforeLoss = self._sfuEndpoint;
          const tmp5 = null != self._connection && "udp" === self.protocol && 0 !== self._sfuFragmentStartTime && null == self._sfuEndpointLossAt;
          if (tmp5) {
            const result3 = self._freezeSfuFragmentAtEndpointLoss();
          }
        }
        self._sfuEndpoint = null;
        self.port = null;
        const _connection = self._connection;
        if (null == _connection) {
          self.setState(constants3.AWAITING_ENDPOINT);
        } else if (null == self.protocol) {
          const logger3 = self.logger;
          logger3.info("Received sfu_update before media protocol was selected; endpoint clear cached.");
        } else if ("udp" !== self.protocol) {
          const logger2 = self.logger;
          const _HermesInternal = HermesInternal;
          logger2.warn("Ignoring sfu_update for non-UDP protocol: " + self.protocol);
        } else {
          _connection.setUdpEndpoint(null);
        }
      }
    } else {
      const logger = self.logger;
      logger.warn("Received sfu_update from stale socket.");
    }
  }
  _shouldDropMediaEventForUser(userId, SPEAKING) {
    const self = this;
    const _userIds = this._userIds;
    const hasItem = _userIds.has(userId);
    let flag = !hasItem && false === self._latchIsStageChannel();
    if (flag) {
      const logger = self.logger;
      const _HermesInternal = HermesInternal;
      logger.warn("Dropping " + SPEAKING + " for user " + userId + " before CLIENTS_CONNECT.");
      flag = true;
    }
    return flag;
  }
  _handleSpeaking(arg0, userId, audioSSRC, arg3) {
    const self = this;
    if (!this._shouldDropMediaEventForUser(userId, "SPEAKING")) {
      const _connection = self._connection;
      const tmp2 = null != _connection && self.userId !== userId;
      if (tmp2) {
        if (arg3 !== constants9.NONE) {
          const user = _connection.createUser(userId, audioSSRC);
        }
        const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
        if (_localMediaSinkWantsManager != null) {
          _localMediaSinkWantsManager.setAudioSSRC(userId, audioSSRC);
        }
      }
    }
  }
  handleFlags(arg0, arg1) {
    this.emit(RTCConnectionEvent.RTCConnectionEvent.Flags, arg0, arg1);
  }
  handlePlatform(arg0, arg1) {
    this.emit(RTCConnectionEvent.RTCConnectionEvent.Platform, arg0, arg1, this.channelId);
  }
  handleUsersMerged(arr) {
    const emit = this.emit;
    emit(RTCConnectionEvent.RTCConnectionEvent.UsersMerged, arr.map((id) => id.id), this.context);
  }
  getOrCreateVideoQuality() {
    let allowedPoorFpsRatio;
    let backoffTimeSec;
    let fpsThreshold;
    let windowLength;
    const self = this;
    if (null != this._connection) {
      if (null == self._videoQuality) {
        const self4 = this;
        const self5 = this;
        const videoQuality = new VideoQuality.VideoQuality(self._connection);
        self._videoQuality = videoQuality;
        const _videoQuality2 = self._videoQuality;
        let result = _videoQuality2.updateCallUserIdsCount(self._userIds.size);
        const _videoQuality3 = self._videoQuality;
        _videoQuality3.start();
        const defaultConfig = VideoHealthManager.VideoHealthManager.defaultConfig;
        ({ windowLength, allowedPoorFpsRatio, fpsThreshold, backoffTimeSec } = defaultConfig);
        if (defaultConfig.featureEnabled) {
          if (null == self._videoHealthManager) {
            const self2 = this;
            const self3 = this;
            let tmp = windowLength;
            const videoHealthManager = new tmp8(5951).VideoHealthManager(windowLength, allowedPoorFpsRatio, fpsThreshold, backoffTimeSec);
            self._videoHealthManager = videoHealthManager;
          }
          if (null != self._localMediaSinkWantsManager) {
            self._localMediaSinkWantsManager.videoHealthManager = self._videoHealthManager;
          }
          const _videoQuality = self._videoQuality;
          _videoQuality.on(VideoQuality.VideoQualityEvent.FpsUpdate, (arg0, arg1, arg2) => {
            const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
            let result;
            const tmp = self;
            if (_localMediaSinkWantsManager != null) {
              result = _localMediaSinkWantsManager.shouldReceiveFromUser(arg0);
            }
            if (result) {
              const _videoHealthManager = tmp._videoHealthManager;
              if (_videoHealthManager != null) {
                _videoHealthManager.updateFps(arg0, arg1, arg2);
              }
            }
          });
        }
      }
    }
    return self._videoQuality;
  }
  _handleVideoStreamId(arg0) {
    let streamId;
    let userId;
    let videoSsrc;
    let videoStreamParameters;
    const self = this;
    ({ userId, streamId, videoSsrc, videoStreamParameters } = arg0);
    this.emit(RTCConnectionEvent.RTCConnectionEvent.Video, this.guildId, this.channelId, userId, streamId, this.streamServerId);
    const tmp2 = null != streamId && null == self.getOrCreateVideoQuality();
    if (tmp2) {
      const logger = self.logger;
      logger.error("_handleVideoStreamId: Unable to create videoQuality.");
    }
    const tmp4 = null != self._videoQuality && self.userId === userId;
    if (tmp4) {
      const item = videoStreamParameters.forEach((ssrc) => {
        let num = ssrc.ssrc;
        if (num == null) {
          num = 0;
        }
        const tmp = num > 0 && true === ssrc.active;
        if (tmp) {
          const _videoQuality = self._videoQuality;
          if (_videoQuality != null) {
            _videoQuality.setOutboundSsrc(num);
          }
        }
      });
    }
    if (self.userId !== userId) {
      let num = 0;
      let tmp7 = !tmp6;
      if (0 === videoSsrc && null === streamId) {
        let _videoQuality = self._videoQuality;
        let hasItem;
        if (_videoQuality != null) {
          const inboundParticipants = _videoQuality.getInboundParticipants();
          hasItem = inboundParticipants.includes(userId);
        }
        tmp7 = hasItem;
      }
      if (tmp7) {
        const _videoQuality2 = self._videoQuality;
        if (_videoQuality2 != null) {
          _videoQuality2.setInboundUser(userId, videoSsrc);
        }
        const _videoHealthManager = self._videoHealthManager;
        if (_videoHealthManager != null) {
          const user = _videoHealthManager.createUser(userId);
        }
      }
    }
    const tmp11 = null != self._connection && self.userId !== userId;
    if (tmp11) {
      if (null != self._localMediaSinkWantsManager) {
        const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
        _localMediaSinkWantsManager.setStreamId(userId, streamId);
      } else {
        let tmp12 = null != self._goLiveQualityManager;
        if (tmp12) {
          const _goLiveQualityManager = self._goLiveQualityManager;
          tmp12 = _goLiveQualityManager.getUserID() === userId;
        }
        if (tmp12) {
          const _goLiveQualityManager2 = self._goLiveQualityManager;
          if (_goLiveQualityManager2 != null) {
            _goLiveQualityManager2.setStreamId(streamId);
          }
        }
      }
    }
  }
  _handleLocalVideoDisabled(item10064, arg1) {
    const self = this;
    if (this.userId !== item10064) {
      const orCreateVideoQuality = self.getOrCreateVideoQuality();
      if (null == orCreateVideoQuality) {
        const logger = self.logger;
        logger.error("_handleLocalVideoDisabled: Unable to create videoQuality.");
      } else {
        orCreateVideoQuality.setUserVideoDisabled(item10064, arg1);
      }
    }
  }
  _handleRemoteStreamsReady(number_of_users) {
    obj = TimeUtils;
    const diff = obj.now() - this._connectStartTime;
    const obj2 = { number_of_users, duration_ms: diff };
    const track = AnalyticsUtilsDefault.track;
    const VOICE_CONNECTION_REMOTE_STREAMS_CREATED = constants.VOICE_CONNECTION_REMOTE_STREAMS_CREATED;
    AnalyticsUtilsDefault;
    const merged = Object.assign(this._getAnalyticsProperties());
    track(VOICE_CONNECTION_REMOTE_STREAMS_CREATED, obj2);
  }
  _handleVideo(arg0, userId, audioSSRC, ssrc, arr) {
    let active;
    const self = this;
    let closure_1 = userId;
    let closure_0 = ssrc;
    if (MediaEngineStore.supports(constants5.VIDEO)) {
      if (!self._shouldDropMediaEventForUser(userId, "VIDEO")) {
        if (null != self._connection) {
          if (self.userId !== userId) {
            if (null != self._localMediaSinkWantsManager) {
              const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
              _localMediaSinkWantsManager.setAudioSSRC(userId, audioSSRC);
              const mapped = arr.map((rid) => ({ type: constants.VIDEO, rid: rid.rid, ssrc: rid.ssrc, rtxSsrc: rid.rtxSsrc, quality: rid.quality, active: ssrc > 0 }));
              if (0 === mapped.length) {
                const obj2 = { type: constants8.VIDEO, rid: "100", ssrc, rtxSsrc: ssrc + 1, quality: 100, active: ssrc > 0 };
                mapped.push(obj2);
              }
              const _localMediaSinkWantsManager2 = self._localMediaSinkWantsManager;
              _localMediaSinkWantsManager2.setVideoSSRCs(userId, mapped);
            } else {
              const items = [];
              const iter = arr[Symbol.iterator]();
              const nextResult = iter.next();
              while (iter !== undefined) {
                let tmp5 = nextResult;
                let tmp6 = null != nextResult.ssrc;
                if (tmp6) {
                  tmp6 = null != tmp5.quality;
                }
                if (tmp6) {
                  obj = { ssrc: null, quality: null, active };
                  ({ ssrc: obj.ssrc, quality: obj.quality, active } = tmp5);
                  let push = items.push;
                  if (active == null) {
                    active = true;
                  }
                  let arr2 = push(obj);
                }
                continue;
              }
              const _goLiveQualityManager = self._goLiveQualityManager;
              if (_goLiveQualityManager != null) {
                _goLiveQualityManager.setUserID(userId);
              }
              const _goLiveQualityManager2 = self._goLiveQualityManager;
              if (_goLiveQualityManager2 != null) {
                const result = _goLiveQualityManager2.updateAudioAndVideoStreamInfo(audioSSRC, items);
              }
            }
            if (arr != null) {
              const item = arr.forEach((quality) => {
                if (100 === quality.quality) {
                  self.emit(RTCConnectionEvent.RTCConnectionEvent.VideoSourceQualityChanged, self.guildId, self.channelId, userId, quality.maxResolution, quality.maxFrameRate, self.context);
                }
              });
            }
          }
        }
      }
    }
  }
  _handleControlPing(value) {
    if (!MediaEngineStore.supports(constants5.NATIVE_PING)) {
      const self = this;
      this._handlePing(value);
    }
  }
  _handlePing(value) {
    let length;
    if (undefined !== value) {
      const self = this;
      const _pings = this._pings;
      const _Date = Date;
      const push = _pings.push;
      obj = { time: Date.now(), value };
      push(obj);
      if (this._pings.length >= 200) {
        do {
          let _pings1 = self._pings;
          let arr2 = _pings1.shift();
          length = self._pings.length;
        } while (length >= 200);
      }
      if (value > 500) {
        self._pingBadCount = self._pingBadCount + 1;
      }
      self.emit(RTCConnectionEvent.RTCConnectionEvent.Ping, self._pings, self.quality);
    }
  }
  _handlePingTimeout(arg0, value) {
    const self = this;
    const _pingTimeouts = this._pingTimeouts;
    _pingTimeouts.push(arg0);
    const tmp2 = length >= 3 && self._pingTimeouts[length - 1] === self._pingTimeouts[length - 2] + 1 && self._pingTimeouts[length - 2] === self._pingTimeouts[length - 3] + 1;
    if (tmp2) {
      self._handlePing(value);
    }
  }
  _handleOutboundLossRate(_outboundLossRate) {
    this._outboundLossRate = _outboundLossRate;
    this.emit(RTCConnectionEvent.RTCConnectionEvent.OutboundLossRate, _outboundLossRate);
  }
  _getAnalyticsProperties() {
    const self = this;
    const channel = ChannelStore.getChannel(this.channelId);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj = { guild_id: self.guildId, channel_id: self.channelId, channel_type: type, rtc_connection_id: self.getRTCConnectionId(), context: self.context, voice_backend_version: self.voiceVersion, rtc_worker_backend_version: self.rtcWorkerVersion };
    return obj;
  }
  _handleClientConnect(arr) {
    const self = this;
    const found = arr.filter((item) => item !== self.userId);
    const item = found.forEach((item) => {
      const _userIds = self._userIds;
      _userIds.add(item);
      const _connection = self._connection;
      if (_connection != null) {
        const user = _connection.createUser(item, 0);
      }
    });
    this.emit(RTCConnectionEvent.RTCConnectionEvent.ClientConnect, found);
    const _videoQuality = this._videoQuality;
    if (_videoQuality != null) {
      const result = _videoQuality.updateCallUserIdsCount(self._userIds.size);
    }
    const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
    if (_localMediaSinkWantsManager != null) {
      _localMediaSinkWantsManager.updateCallUserIds(self._userIds);
    }
  }
  _handleClientDisconnect(sender_user_id) {
    let _getSfuFragmentAnalyticsProperties;
    let _getSfuFragmentAnalyticsProperties2;
    let _sfuEndpoint;
    let _sfuEndpoint2;
    let _sfuVideoEventsAtLoss;
    let _videoQuality;
    let obj2;
    const self = this;
    ({ _videoQuality, _sfuVideoEventsAtLoss } = this);
    if (null != _videoQuality) {
      if (null != _sfuVideoEventsAtLoss) {
        if (self.context === constants6.DEFAULT) {
          const receivers = _sfuVideoEventsAtLoss.receivers;
          const value = receivers.get(sender_user_id);
          if (null != value) {
            const receivers2 = _sfuVideoEventsAtLoss.receivers;
            receivers2.delete(sender_user_id);
            const obj3 = { reason: "User disconnected" };
            const track2 = AnalyticsUtilsDefault.track;
            const VIDEO_STREAM_ENDED2 = constants.VIDEO_STREAM_ENDED;
            AnalyticsUtilsDefault;
            const merged = Object.assign(value);
            ({ _sfuEndpoint: _sfuEndpoint2, _getSfuFragmentAnalyticsProperties: _getSfuFragmentAnalyticsProperties2 } = self);
            if (_sfuEndpoint2 == null) {
              _sfuEndpoint2 = self._sfuEndpointBeforeLoss;
            }
            const obj4 = { sfuMigration: false, sfuEndpoint: _sfuEndpoint2 };
            const merged1 = Object.assign(_getSfuFragmentAnalyticsProperties2(obj4));
            track2(VIDEO_STREAM_ENDED2, obj3);
            _videoQuality.destroyUser(sender_user_id);
            const _videoHealthManager2 = self._videoHealthManager;
            if (_videoHealthManager2 != null) {
              _videoHealthManager2.deleteUser(sender_user_id);
            }
          }
        }
        const _voiceQuality = self._voiceQuality;
        if (null != _voiceQuality) {
          _voiceQuality.markUserDisconnected(sender_user_id);
        }
        const _connection = self._connection;
        if (null != _connection) {
          _connection.destroyUser(sender_user_id);
        }
        const _localMediaSinkWantsManager = self._localMediaSinkWantsManager;
        if (_localMediaSinkWantsManager != null) {
          _localMediaSinkWantsManager.destroyUser(sender_user_id);
        }
        const _userIds = self._userIds;
        _userIds.delete(sender_user_id);
        self.emit(RTCConnectionEvent.RTCConnectionEvent.ClientDisconnect, sender_user_id);
        const _localMediaSinkWantsManager2 = self._localMediaSinkWantsManager;
        const tmp32 = require;
        if (_localMediaSinkWantsManager2 != null) {
          _localMediaSinkWantsManager2.updateCallUserIds(self._userIds);
        }
        const _videoQuality2 = self._videoQuality;
        if (_videoQuality2 != null) {
          const result = _videoQuality2.updateCallUserIdsCount(self._userIds.size);
        }
        const _daveJoinTimer = self._daveJoinTimer;
        _daveJoinTimer.clientDisconnected(self._userIds.size);
        if (1 === self._userIds.size) {
          const tmp32Result = tmp32(5772);
          self._secureFramesLastBecameAloneTime = tmp32Result.now();
        }
      }
    }
    if (null != _videoQuality) {
      if (self.context === constants6.DEFAULT) {
        const inboundStats = _videoQuality.getInboundStats(sender_user_id);
        let tmp2 = null != inboundStats;
        if (tmp2) {
          let num;
          if (inboundStats != null) {
            num = inboundStats.num_frames;
          }
          if (num == null) {
            num = 0;
          }
          tmp2 = num > 0;
        }
        if (tmp2) {
          obj = { app_hardware_acceleration_enabled: obj2.getAppHardwareAccelerationEnabled(), media_session_id: self.getMediaSessionId(), sender_user_id, reason: "User disconnected", participant_type: "receiver", guild_region: RTCRegionStore.getRegion(self.hostname), hostname: self.hostname, hardware_enabled: MediaEngineStore.getHardwareEncoding() };
          const track = AnalyticsUtilsDefault.track;
          const VIDEO_STREAM_ENDED = constants.VIDEO_STREAM_ENDED;
          AnalyticsUtilsDefault;
          const merged2 = Object.assign(self._getAnalyticsProperties());
          obj2 = CrossPlatformNativeUtilsDefault;
          const merged3 = Object.assign(inboundStats);
          const merged4 = Object.assign(_videoQuality.getNetworkStats());
          const merged5 = Object.assign(_videoQuality.getCodecUsageStats("receiver", sender_user_id));
          ({ _sfuEndpoint, _getSfuFragmentAnalyticsProperties } = self);
          if (_sfuEndpoint == null) {
            _sfuEndpoint = self._sfuEndpointBeforeLoss;
          }
          const obj5 = { sfuMigration: false, sfuEndpoint: _sfuEndpoint };
          const merged6 = Object.assign(_getSfuFragmentAnalyticsProperties(obj5));
          track(VIDEO_STREAM_ENDED, obj);
          _videoQuality.destroyUser(sender_user_id);
          const _videoHealthManager = self._videoHealthManager;
          if (_videoHealthManager != null) {
            _videoHealthManager.deleteUser(sender_user_id);
          }
        }
      }
    }
  }
  _handleCodecs(OPUS, H264) {
    const self = this;
    const _connection = this._connection;
    if (null != _connection) {
      if (null != self.protocol) {
        const setCodecs = _connection.setCodecs;
        if (null == OPUS) {
          OPUS = closure_28.OPUS;
        }
        if (null == H264) {
          H264 = closure_28.H264;
        }
        setCodecs(OPUS, H264, self.context);
        self._hasCodecs = true;
        const result = self._trackVoiceConnectionSuccess(_connection);
      }
    }
    const logger = self.logger;
    logger.warn("Cannot set codecs on connection with protocol:", self.protocol);
  }
  _trackVoiceConnectionSuccess(_connection) {
    let _selectProtocolAckAt;
    let _selectProtocolSentAt;
    let beginInitializeAt;
    let connectTime;
    let createConnectionTime;
    let diff;
    let diff1;
    let diff2;
    let diff3;
    let diff4;
    let diff5;
    let mediaEngine;
    let mediaEngine1;
    let obj4;
    let onConnectCallbackAt;
    let onConnectCallbackAt3;
    let onConnectCallbackAt4;
    let onEncryptionModesCallbackAt;
    let onVideoCodecsCallbackAt;
    let onVideoCodecsCallbackAt2;
    let tmp18;
    let transportInfo4;
    const self = this;
    if (!this._voiceConnectionSuccessTracked) {
      if (self.state === constants3.RTC_CONNECTED) {
        if (self._hasCodecs) {
          self._voiceConnectionSuccessTracked = true;
          let preferredRegion = null;
          obj = RTCRegionStore;
          if (RTCRegionStore.shouldIncludePreferredRegion()) {
            preferredRegion = obj.getPreferredRegion();
          }
          const _connectCount = self._connectCount;
          const settings = MediaEngineStore.getSettings();
          const result = self._getAnalyticsProperties();
          const transportInfo = _connection.transportInfo;
          let address;
          if (transportInfo != null) {
            address = transportInfo.address;
          }
          let tmp8;
          if (null != address) {
            if ("" !== address) {
              let str3 = "ipv6";
              if (!address.includes(":")) {
                let str5;
                if (address.includes(".")) {
                  str5 = "ipv4";
                }
                str3 = str5;
              }
              tmp8 = str3;
            }
          }
          const obj5 = { address_family: tmp8, cloudflare_best_region: preferredRegion, connect_time: obj4.now() - (1 === _connectCount ? self._createdTime : self._connectStartTime), connect_count: self._connectCount, audio_subsystem: mediaEngine.getAudioSubsystem(), audio_layer: mediaEngine1.getAudioLayer(), automatic_audio_subsystem: settings.automaticAudioSubsystem, media_session_id: self.getMediaSessionId(), participant_type: self.getVoiceParticipantType(), join_voice_id: self.joinVoiceId, is_camera_enabled: tmp18, video_supported: MediaEngineStore.supports(constants5.VIDEO) };
          const track = AnalyticsUtilsDefault.track;
          const VOICE_CONNECTION_SUCCESS = constants.VOICE_CONNECTION_SUCCESS;
          AnalyticsUtilsDefault;
          const merged = Object.assign(result);
          ({ hostname: obj3.hostname, port: obj3.port, protocol: obj3.protocol } = self);
          obj4 = TimeUtils;
          mediaEngine = obj2.getMediaEngine();
          mediaEngine1 = obj2.getMediaEngine();
          const mediaEngine2 = obj2.getMediaEngine();
          tmp18 = mediaEngine2.getVideoInputDeviceId() !== __initData;
          const tmp12 = constants;
          if (tmp18) {
            tmp18 = _connection.context === constants6.DEFAULT;
          }
          const stateHistory = self.stateHistory;
          const merged1 = Object.assign(stateHistory.getVoiceConnectionSuccessStats());
          track(VOICE_CONNECTION_SUCCESS, obj5);
          const _performance = performance;
          const nowResult = performance.now();
          const transportInfo2 = _connection.transportInfo;
          const obj6 = { rtc_connection_id: result.rtc_connection_id, hostname: self.hostname, address_family: tmp8, time_1_creation_to_connect: self._connectStartTime - self._createdTime, time_2_media_engine_connect: self._mediaEngineConnectDuration, time_3_media_engine_create_native_connection: createConnectionTime, time_4_media_engine_connect_to_socket: connectTime, time_5_scheduling_connected_callback: diff, time_6_state_connected_to_end_measure: diff1, connect_count: self._connectCount, rtc_connecting_native_connect: diff2, rtc_connecting_native_codecs: diff3, rtc_connecting_native_crypto_modes: diff4, select_protocol_duration_ms: diff5 };
          createConnectionTime = undefined;
          const track2 = tmp9(1252).track;
          const VOICE_CONNECTION_TTC_COLLECTED = tmp12.VOICE_CONNECTION_TTC_COLLECTED;
          AnalyticsUtilsDefault;
          if (transportInfo2 != null) {
            createConnectionTime = transportInfo2.createConnectionTime;
          }
          const transportInfo3 = _connection.transportInfo;
          connectTime = undefined;
          if (transportInfo3 != null) {
            connectTime = transportInfo3.connectTime;
          }
          ({ onConnectCallbackAt, transportInfo: transportInfo4 } = _connection);
          diff = null;
          if (null != onConnectCallbackAt) {
            diff = null;
            if (null != connectCallbackScheduledMs) {
              diff = onConnectCallbackAt - connectCallbackScheduledMs;
            }
          }
          diff1 = null;
          if (null != nowResult) {
            diff1 = null;
            if (null != _connection.onConnectCallbackAt) {
              diff1 = nowResult - onConnectCallbackAt2;
            }
          }
          ({ onConnectCallbackAt: onConnectCallbackAt3, beginInitializeAt } = _connection);
          diff2 = null;
          if (null != onConnectCallbackAt3) {
            diff2 = null;
            if (null != beginInitializeAt) {
              diff2 = onConnectCallbackAt3 - beginInitializeAt;
            }
          }
          ({ onVideoCodecsCallbackAt, onConnectCallbackAt: onConnectCallbackAt4 } = _connection);
          diff3 = null;
          if (null != onVideoCodecsCallbackAt) {
            diff3 = null;
            if (null != onConnectCallbackAt4) {
              diff3 = onVideoCodecsCallbackAt - onConnectCallbackAt4;
            }
          }
          ({ onEncryptionModesCallbackAt, onVideoCodecsCallbackAt: onVideoCodecsCallbackAt2 } = _connection);
          diff4 = null;
          if (null != onEncryptionModesCallbackAt) {
            diff4 = null;
            if (null != onVideoCodecsCallbackAt2) {
              diff4 = onEncryptionModesCallbackAt - onVideoCodecsCallbackAt2;
            }
          }
          ({ _selectProtocolAckAt, _selectProtocolSentAt } = self);
          diff5 = null;
          if (null != _selectProtocolAckAt) {
            diff5 = null;
            if (null != _selectProtocolSentAt) {
              diff5 = _selectProtocolAckAt - _selectProtocolSentAt;
            }
          }
          track2(VOICE_CONNECTION_TTC_COLLECTED, obj6);
        }
      }
    }
  }
  _handleSDP(arg0) {
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
  _handleMediaSessionId(_mediaSessionId) {
    const self = this;
    this._mediaSessionId = _mediaSessionId;
    const logger = this.logger;
    logger.info("Setting media-session-id: " + _mediaSessionId + " for rtc-connection-id: " + this.getRTCConnectionId());
    if (this.shouldReport()) {
      const _connection = self._connection;
      if (null != _connection) {
        const result = _connection.setAudioLatencyMeasurement(true);
      }
    }
    obj = ThermalUtilsDefault;
    const rawThermalState = obj.getRawThermalState();
    const obj2 = { media_session_id: self.getMediaSessionId(), parent_media_session_id: self.parentMediaSessionId, raw_thermal_state: rawThermalState };
    const track = AnalyticsUtilsDefault.track;
    const MEDIA_SESSION_JOINED = constants.MEDIA_SESSION_JOINED;
    AnalyticsUtilsDefault;
    const merged = Object.assign(self._getAnalyticsProperties());
    track(MEDIA_SESSION_JOINED, obj2);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "MEDIA_SESSION_JOINED", mediaSessionId: self.getMediaSessionId(), context: self.context };
    obj3.dispatch(obj4);
  }
  _handleMediaSinkWants(_remoteVideoSinkWants) {
    let _connection;
    let logger;
    ({ _connection, logger } = this);
    logger.info("Remote media sink wants: " + JSON.stringify(_remoteVideoSinkWants));
    this._remoteVideoSinkWants = _remoteVideoSinkWants;
    obj = DispatcherDefault;
    const obj2 = { type: "RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS", context: this.context, wants: _remoteVideoSinkWants, channelId: this.channelId, guildId: this.guildId, userId: this.userId };
    obj.dispatch(obj2);
    if (_connection != null) {
      const result = _connection.setRemoteVideoSinkWants(_remoteVideoSinkWants);
    }
  }
  _handleCodeVersion(voiceVersion, rtcWorkerVersion) {
    this.voiceVersion = voiceVersion;
    this.rtcWorkerVersion = rtcWorkerVersion;
  }
  _handleKeyframeInterval(keyframeInterval) {
    const self = this;
    const _connection = this._connection;
    if (null != _connection) {
      if (null != self.protocol) {
        _connection.setKeyframeInterval(keyframeInterval);
      }
    }
    const logger = self.logger;
    logger.warn("Cannot set keyframe interval on connection with protocol:", self.protocol);
  }
  _handleBandwidthEstimationExperiment(_bandwidthEstimationExperiment) {
    this._bandwidthEstimationExperiment = _bandwidthEstimationExperiment;
    obj = BandwidthEstimationExperimentDefault;
    const mediaEngineExperiments = obj.getMediaEngineExperiments(_bandwidthEstimationExperiment);
    const tmp = null !== mediaEngineExperiments && 0 !== mediaEngineExperiments.length;
    if (tmp) {
      const _connection = this._connection;
      if (_connection != null) {
        const result = _connection.setBandwidthEstimationExperiments(mediaEngineExperiments);
      }
    }
  }
  _trackSecureFrameTransition(transition_id) {
    let commitFinishedTime;
    let commitReceivedTime;
    let commitReceivedTime2;
    let diff;
    let diff1;
    let diff10;
    let diff11;
    let diff12;
    let diff13;
    let diff2;
    let diff3;
    let diff4;
    let diff5;
    let diff6;
    let diff7;
    let diff8;
    let diff9;
    let executeFinishedTime;
    let executeFinishedTime2;
    let executeReceivedTime;
    let executeReceivedTime2;
    let firstProposalsFinishedTime;
    let firstProposalsReceivedTime;
    let firstProposalsReceivedTime2;
    let initFinishedTime;
    let initFinishedTime2;
    let initReceivedTime;
    let initReceivedTime2;
    let initReceivedTime3;
    let lastProposalsFinishedTime;
    let lastProposalsFinishedTime2;
    let lastProposalsReceivedTime;
    let lastProposalsReceivedTime2;
    let prepareFinishedTime;
    let prepareReceivedTime;
    let prepareReceivedTime2;
    let readyTime;
    let welcomeFinishedTime;
    let welcomeReceivedTime;
    let welcomeReceivedTime2;
    const self = this;
    const _secureFramesTransitionStates = this._secureFramesTransitionStates;
    const value = _secureFramesTransitionStates.get(transition_id);
    if (null != value) {
      const _secureFramesTransitionStates2 = self._secureFramesTransitionStates;
      size = self._secureFramesTransitionStates.size;
      _secureFramesTransitionStates2.delete(transition_id);
      const _daveJoinTimer = self._daveJoinTimer;
      const reportResult = _daveJoinTimer.report(transition_id);
      const obj3 = { media_session_id: self.getMediaSessionId(), transition_id, start_to_init_duration: diff, init_duration: diff1, first_proposals_duration: diff2, last_proposals_duration: diff3, duration_between_proposals: diff4, welcome_wait_duration: diff5, welcome_duration: diff6, commit_wait_duration: diff7, commit_duration: diff8, prepare_wait_duration: diff9, prepare_duration: diff10, execute_wait_duration: diff11, execute_duration: diff12, active_transition_count: size, time_since_creation: obj.now() - value.creationTime, init_to_finish_duration: diff13 };
      const track = AnalyticsUtilsDefault.track;
      const SECURE_FRAMES_TRANSITION = constants.SECURE_FRAMES_TRANSITION;
      AnalyticsUtilsDefault;
      const merged = Object.assign(self._getAnalyticsProperties());
      ({ parentMediaSessionId: obj2.parent_media_session_id, userId: obj2.sender_user_id } = self);
      ({ protocolVersion: obj2.protocol_version, initReceivedTime: initReceivedTime3 } = value);
      const _connectStartTime = self._connectStartTime;
      diff = undefined;
      if (null != initReceivedTime3) {
        if (null != _connectStartTime) {
          diff = initReceivedTime3 - _connectStartTime;
        }
      }
      ({ initFinishedTime, initReceivedTime } = value);
      diff1 = undefined;
      if (null != initFinishedTime) {
        if (null != initReceivedTime) {
          diff1 = initFinishedTime - initReceivedTime;
        }
      }
      ({ firstProposalsFinishedTime, firstProposalsReceivedTime } = value);
      diff2 = undefined;
      if (null != firstProposalsFinishedTime) {
        if (null != firstProposalsReceivedTime) {
          diff2 = firstProposalsFinishedTime - firstProposalsReceivedTime;
        }
      }
      ({ lastProposalsFinishedTime, lastProposalsReceivedTime } = value);
      diff3 = undefined;
      if (null != lastProposalsFinishedTime) {
        if (null != lastProposalsReceivedTime) {
          diff3 = lastProposalsFinishedTime - lastProposalsReceivedTime;
        }
      }
      ({ lastProposalsReceivedTime: lastProposalsReceivedTime2, firstProposalsReceivedTime: firstProposalsReceivedTime2 } = value);
      diff4 = undefined;
      if (null != lastProposalsReceivedTime2) {
        if (null != firstProposalsReceivedTime2) {
          diff4 = lastProposalsReceivedTime2 - firstProposalsReceivedTime2;
        }
      }
      ({ totalProposalsSize: obj2.total_proposals_size, totalCommitWelcomeSize: obj2.total_commit_welcome_size, welcomeReceivedTime, initFinishedTime: initFinishedTime2 } = value);
      diff5 = undefined;
      if (null != welcomeReceivedTime) {
        if (null != initFinishedTime2) {
          diff5 = welcomeReceivedTime - initFinishedTime2;
        }
      }
      ({ welcomeFinishedTime, welcomeReceivedTime: welcomeReceivedTime2 } = value);
      diff6 = undefined;
      if (null != welcomeFinishedTime) {
        if (null != welcomeReceivedTime2) {
          diff6 = welcomeFinishedTime - welcomeReceivedTime2;
        }
      }
      ({ welcomeSize: obj2.welcome_size, welcomeError: obj2.welcome_error, commitReceivedTime, lastProposalsFinishedTime: lastProposalsFinishedTime2 } = value);
      diff7 = undefined;
      if (null != commitReceivedTime) {
        if (null != lastProposalsFinishedTime2) {
          diff7 = commitReceivedTime - lastProposalsFinishedTime2;
        }
      }
      ({ commitFinishedTime, commitReceivedTime: commitReceivedTime2 } = value);
      diff8 = undefined;
      if (null != commitFinishedTime) {
        if (null != commitReceivedTime2) {
          diff8 = commitFinishedTime - commitReceivedTime2;
        }
      }
      ({ commitSize: obj2.commit_size, commitError: obj2.commit_error, prepareReceivedTime } = value);
      const _secureFramesLastBecameAloneTime = self._secureFramesLastBecameAloneTime;
      diff9 = undefined;
      if (null != prepareReceivedTime) {
        if (null != _secureFramesLastBecameAloneTime) {
          diff9 = prepareReceivedTime - _secureFramesLastBecameAloneTime;
        }
      }
      ({ prepareFinishedTime, prepareReceivedTime: prepareReceivedTime2 } = value);
      diff10 = undefined;
      if (null != prepareFinishedTime) {
        if (null != prepareReceivedTime2) {
          diff10 = prepareFinishedTime - prepareReceivedTime2;
        }
      }
      ({ executeReceivedTime, readyTime } = value);
      diff11 = undefined;
      if (null != executeReceivedTime) {
        if (null != readyTime) {
          diff11 = executeReceivedTime - readyTime;
        }
      }
      ({ executeFinishedTime, executeReceivedTime: executeReceivedTime2 } = value);
      diff12 = undefined;
      if (null != executeFinishedTime) {
        if (null != executeReceivedTime2) {
          diff12 = executeFinishedTime - executeReceivedTime2;
        }
      }
      ({ executeError: obj2.execute_error, incomplete: obj2.incomplete } = value);
      ({ usersAdded: obj2.users_added_count, usersRemoved: obj2.users_removed_count, rosterSizeAfter: obj2.roster_size_after, executeFinishedTime: executeFinishedTime2, initReceivedTime: initReceivedTime2 } = value);
      diff13 = undefined;
      obj = TimeUtils;
      if (null != executeFinishedTime2) {
        if (null != initReceivedTime2) {
          diff13 = executeFinishedTime2 - initReceivedTime2;
        }
      }
      ({ aloneWaitDuration: obj2.alone_wait_duration, timeToDaveGroup: obj2.time_to_dave_group_excluding_wait } = reportResult);
      track(SECURE_FRAMES_TRANSITION, obj3);
    }
  }
  _trackRemainingSecureFrameTransitions() {
    const self = this;
    const prop = this._secureFramesTransitionStates;
    const item = prop.forEach((item, index) => {
      item.incomplete = true;
      const result = self._trackSecureFrameTransition(index);
    });
  }
  _storeSecureFrameNextTransitionData(arg0) {
    let obj2;
    const self = this;
    if (null == this._secureFramesNextTransitionState) {
      const _secureFramesNextTransitionState = { creationTime: obj2.now() };
      self._secureFramesNextTransitionState = _secureFramesNextTransitionState;
      obj2 = TimeUtils;
    }
    const obj3 = {};
    const merged = Object.assign(self._secureFramesNextTransitionState);
    const merged1 = Object.assign(arg0);
    self._secureFramesNextTransitionState = obj3;
    return obj3;
  }
  _storeSecureFrameTransitionData(_secureFramesLastExecutedTransitionId, arg1) {
    const self = this;
    const _secureFramesTransitionStates = this._secureFramesTransitionStates;
    let result1 = _secureFramesTransitionStates.get(_secureFramesLastExecutedTransitionId);
    if (null == result1) {
      result1 = self._storeSecureFrameNextTransitionData({});
      self._secureFramesNextTransitionState = undefined;
    }
    const _secureFramesTransitionStates2 = self._secureFramesTransitionStates;
    obj = {};
    set = _secureFramesTransitionStates2.set;
    const merged = Object.assign(result1);
    const merged1 = Object.assign(arg1);
    const result = set(_secureFramesLastExecutedTransitionId, obj);
    self._secureFramesMaxConcurrentTransitions = Math.max(self._secureFramesMaxConcurrentTransitions, self._secureFramesTransitionStates.size);
  }
  _handleSecureFramesInit(v) {
    let require;
    let tmpResult;
    const self = this;
    const protocolVersion = v;
    obj = require("TimeUtils");
    const nowResult = obj.now();
    const tmp = require;
    require = nowResult;
    let obj2 = { c: constants11.SECURE_FRAMES_INIT, v };
    const tmp4 = constants11;
    this.recordEvent(obj2);
    const tmp2 = self;
    if (this._ensureDaveProtocolVersionAllowed(require("DaveMessageValidator").DaveSignal.INIT, v)) {
      if (v > 0) {
        const logger = self.logger;
        const _HermesInternal = HermesInternal;
        logger.info("DAVE protocol init with protocol version: " + v);
        self._mlsInitReceivedTime = nowResult;
        const _connection2 = self._connection;
        if (_connection2 != null) {
          let result = _connection2.prepareSecureFramesEpoch("1", v, self.trueChannelId);
        }
        self._sendMLSKeyPackage();
        let obj3 = { initReceivedTime: nowResult, initFinishedTime: tmpResult.now(), protocolVersion: v };
        const _storeSecureFrameNextTransitionData = self._storeSecureFrameNextTransitionData;
        tmpResult = tmp(tmp2[20]);
        let result1 = _storeSecureFrameNextTransitionData(obj3);
        const _daveJoinTimer = self._daveJoinTimer;
        _daveJoinTimer.start(self._userIds.size <= 1);
        const obj4 = { c: tmp4.MLS_INIT };
        self.recordEvent(obj4);
      } else {
        let _connection = self._connection;
        if (_connection != null) {
          let result2 = _connection.prepareSecureFramesTransition(0, v, () => {
            let flag;
            let obj3;
            try {
              const _connection = self._connection;
              if (_connection != null) {
                const result = _connection.executeSecureFramesTransition(0);
              }
              flag = false;
            } catch (tmp4) {
              obj = SentryUtilsDefault;
              obj.captureException(tmp4);
              flag = true;
            }
            const _storeSecureFrameTransitionData = self._storeSecureFrameTransitionData;
            const obj2 = { initReceivedTime: require, initFinishedTime: obj3.now(), protocolVersion, executeError: flag };
            obj3 = TimeUtils;
            const result1 = _storeSecureFrameTransitionData(0, obj2);
            const result2 = self._trackSecureFrameTransition(0);
            const result3 = self._trackRemainingSecureFrameTransitions();
          });
        }
      }
    }
  }
  _handleSecureFramesRosterChange(arg0, _secureFramesLastExecutedTransitionId) {
    const self = this;
    const items = [];
    dependencyMap = 0;
    _require = 0;
    const entries = Object.entries(arg0);
    const item = entries.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      items.push(tmp);
      if (null != tmp2) {
        if (0 !== tmp2.byteLength) {
          closure_2 = closure_2 + 1;
          const _secureFramesRosterMap = self._secureFramesRosterMap;
          const result = _secureFramesRosterMap.set(tmp, tmp2);
        }
      }
      closure_0 = closure_0 + 1;
      const _secureFramesRosterMap2 = self._secureFramesRosterMap;
      _secureFramesRosterMap2.delete(tmp);
    });
    obj = { usersAdded: dependencyMap, usersRemoved: _require, rosterSizeAfter: this._secureFramesRosterMap.size };
    let result = this._storeSecureFrameTransitionData(_secureFramesLastExecutedTransitionId, obj);
    this.emit(RTCConnectionEvent.RTCConnectionEvent.RosterMapUpdate, items);
  }
  _latchIsStageChannel() {
    const self = this;
    if (null == this._isStageChannel) {
      const channel = ChannelStore.getChannel(self._channelId);
      if (null != channel) {
        self._isStageChannel = channel.type === constants2.GUILD_STAGE_VOICE;
      }
    }
    return self._isStageChannel;
  }
  _ensureDaveProtocolVersionAllowed(EPOCH, protocol_version, transition_id) {
    const self = this;
    const _latchIsStageChannelResult = this._latchIsStageChannel();
    obj = DaveMessageValidator;
    let flag = obj.isDaveProtocolVersionAllowed(EPOCH, protocol_version, _latchIsStageChannelResult);
    if (!flag) {
      const logger = self.logger;
      const _HermesInternal = HermesInternal;
      logger.error("Refusing DAVE protocol downgrade to version " + protocol_version + " at " + EPOCH + ", disconnecting.");
      const obj2 = { c: constants11.DOWNGRADE_REFUSED, s: EPOCH };
      self.recordEvent(obj2);
      const obj3 = { media_session_id: self.getMediaSessionId(), parent_media_session_id: self.parentMediaSessionId, refused_at: EPOCH, transition_id, protocol_version, channel_resolved: null != _latchIsStageChannelResult, event_history: getEventHistoryString(), connection_serial: self._connectionSerial };
      const track = AnalyticsUtilsDefault.track;
      const DAVE_DOWNGRADE_REFUSED = constants.DAVE_DOWNGRADE_REFUSED;
      AnalyticsUtilsDefault;
      const merged = Object.assign(self._getAnalyticsProperties());
      track(DAVE_DOWNGRADE_REFUSED, obj3);
      const _socket = self._socket;
      flag = false;
      if (_socket != null) {
        const result = _socket.disconnectForRefusedDaveDowngrade(EPOCH);
        flag = false;
      }
    }
    return flag;
  }
  _handleSecureFramesPrepareTransition(transition_id, protocol_version) {
    let prepareReceivedTime;
    let protocolVersion;
    const self = this;
    let closure_1 = transition_id;
    dependencyMap = protocol_version;
    const logger = this.logger;
    logger.info("Preparing DAVE protocol transition: " + transition_id + ", protocol version: " + protocol_version);
    this._secureFramesTransitionPrepareCount = this._secureFramesTransitionPrepareCount + 1;
    obj = require("TimeUtils");
    _require = obj.now();
    if (this._ensureDaveProtocolVersionAllowed(require("DaveMessageValidator").DaveSignal.TRANSITION, protocol_version, transition_id)) {
      const _connection = this._connection;
      if (_connection != null) {
        let result = _connection.prepareSecureFramesTransition(transition_id, protocol_version, () => {
          let obj2;
          const result = self._maybeSendSecureFramesTransitionReady(transition_id);
          const _storeSecureFrameTransitionData = self._storeSecureFrameTransitionData;
          obj = { protocolVersion, prepareReceivedTime, prepareFinishedTime: obj2.now() };
          obj2 = TimeUtils;
          const result1 = _storeSecureFrameTransitionData(transition_id, obj);
        });
      }
    }
  }
  _handleSecureFramesPrepareEpoch(_1, protocol_version) {
    const self = this;
    const logger = this.logger;
    logger.info("Preparing DAVE protocol epoch: " + _1 + ", protocol version: " + protocol_version);
    const str1 = _1.toString();
    if (this._ensureDaveProtocolVersionAllowed(DaveMessageValidator.DaveSignal.EPOCH, protocol_version)) {
      const _connection = self._connection;
      if (_connection != null) {
        const result = _connection.prepareSecureFramesEpoch(str1, protocol_version, self.trueChannelId);
      }
      if ("1" === str1) {
        const tmp3Result = TimeUtils;
        self._mlsInitReceivedTime = tmp3Result.now();
        self._sendMLSKeyPackage();
        obj = { c: constants11.MLS_INIT };
        self.recordEvent(obj);
      }
    }
  }
  _sendMLSKeyPackage() {
    const self = this;
    const _connection = this._connection;
    if (_connection != null) {
      const mLSKeyPackage = _connection.getMLSKeyPackage((arg0) => {
        const logger = self.logger;
        logger.info("Got MLS key package, sending to RTC server");
        const _socket = self._socket;
        if (_socket != null) {
          _socket.sendMLSKeyPackage(arg0);
        }
      });
    }
  }
  _maybeSendSecureFramesTransitionReady(transition_id) {
    let obj2;
    if (0 !== transition_id) {
      const self = this;
      const logger = this.logger;
      const _HermesInternal = HermesInternal;
      logger.info("Sending DAVE protocol ready for transition ID " + transition_id);
      const _socket = this._socket;
      if (_socket != null) {
        const result = _socket.secureFramesReadyForTransition(transition_id);
      }
      const _storeSecureFrameTransitionData = self._storeSecureFrameTransitionData;
      obj = { readyTime: obj2.now() };
      obj2 = TimeUtils;
      const result1 = _storeSecureFrameTransitionData(transition_id, obj);
    }
  }
  _maybeTrackPreparedTransition(transition_id) {
    const self = this;
    if (transition_id === this._secureFramesLastExecutedTransitionId) {
      const _daveJoinTimer = self._daveJoinTimer;
      _daveJoinTimer.executed(transition_id, false);
      const result = self._trackSecureFrameTransition(transition_id);
    } else if (0 === transition_id) {
      const result1 = self._trackSecureFrameTransition(transition_id);
    }
  }
  _handleSecureFramesExecuteTransition(_secureFramesLastExecutedTransitionId) {
    let flag;
    let tmp2Result;
    const self = this;
    const logger = this.logger;
    logger.info("Executing DAVE protocol transition: " + _secureFramesLastExecutedTransitionId);
    this._secureFramesTransitionExecuteCount = this._secureFramesTransitionExecuteCount + 1;
    obj = TimeUtils;
    const nowResult = obj.now();
    try {
      const _connection = self._connection;
      if (_connection != null) {
        const result = _connection.executeSecureFramesTransition(_secureFramesLastExecutedTransitionId);
      }
      flag = false;
    } catch (tmp7) {
      const obj2 = SentryUtilsDefault;
      obj2.captureException(tmp7);
      flag = true;
    }
    self._secureFramesLastExecutedTransitionId = _secureFramesLastExecutedTransitionId;
    const _daveJoinTimer = self._daveJoinTimer;
    _daveJoinTimer.executed(_secureFramesLastExecutedTransitionId, flag);
    const _storeSecureFrameTransitionData = self._storeSecureFrameTransitionData;
    const obj3 = { executeReceivedTime: nowResult, executeFinishedTime: tmp2Result.now(), executeError: flag };
    tmp2Result = TimeUtils;
    const result1 = _storeSecureFrameTransitionData(_secureFramesLastExecutedTransitionId, obj3);
    const result2 = self._trackSecureFrameTransition(_secureFramesLastExecutedTransitionId);
  }
  _handleMLSExternalSenderPackage(arg0) {
    const logger = this.logger;
    logger.info("Received MLS external sender package");
    const _connection = this._connection;
    if (_connection != null) {
      const result = _connection.updateMLSExternalSender(arg0);
    }
  }
  _handleMLSProposals(arg0, arg1) {
    let byteLength;
    let closure_0;
    const self = this;
    let closure_1 = arg0;
    dependencyMap = arg1;
    obj = require("TimeUtils");
    _require = obj.now();
    let logger = this.logger;
    logger.info("Received MLS proposals");
    const _daveJoinTimer = this._daveJoinTimer;
    _daveJoinTimer.proposalsReceived(this._userIds.size);
    const _connection = this._connection;
    if (_connection != null) {
      _connection.processMLSProposals(arg1, (byteLength) => {
        obj = TimeUtils;
        const nowResult = obj.now();
        const logger = self.logger;
        logger.info("Sending MLS commit welcome message");
        closure_1.sendMLSCommitWelcome(byteLength);
        let _secureFramesNextTransitionState = self._secureFramesNextTransitionState;
        const obj2 = self;
        if (_secureFramesNextTransitionState == null) {
          const obj3 = { firstProposalsReceivedTime: lastProposalsReceivedTime, firstProposalsFinishedTime: nowResult };
          _secureFramesNextTransitionState = obj2._storeSecureFrameNextTransitionData(obj3);
        }
        _secureFramesNextTransitionState.lastProposalsReceivedTime = lastProposalsReceivedTime;
        _secureFramesNextTransitionState.lastProposalsFinishedTime = nowResult;
        let num = _secureFramesNextTransitionState.totalProposalsSize;
        if (num == null) {
          num = 0;
        }
        _secureFramesNextTransitionState.totalProposalsSize = num + byteLength.byteLength;
        let num2 = _secureFramesNextTransitionState.totalCommitWelcomeSize;
        if (num2 == null) {
          num2 = 0;
        }
        _secureFramesNextTransitionState.totalCommitWelcomeSize = num2 + byteLength.byteLength;
      });
    }
  }
  _handleMLSPrepareCommitTransition(arg0, arg1) {
    let _connection;
    let byteLength;
    const self = this;
    let closure_1 = arg0;
    dependencyMap = arg1;
    let logger = this.logger;
    logger.info("Received MLS commit for transition ID " + arg0);
    obj = _connection(5772);
    const commitReceivedTime = obj.now();
    _connection = this._connection;
    if (_connection != null) {
      let result = _connection.prepareMLSCommitTransition(arg0, arg1, (arg0, protocolVersion, arg2) => {
        let obj4;
        if (_connection === self._connection) {
          const _storeSecureFrameTransitionData = obj._storeSecureFrameTransitionData;
          const obj2 = { protocolVersion, commitReceivedTime, commitFinishedTime: obj4.now(), commitSize: byteLength.byteLength, commitError: !arg0 };
          obj4 = TimeUtils;
          const result = _storeSecureFrameTransitionData(closure_1, obj2);
          const tmp14 = require;
          if (arg0) {
            self._handleMLSSuccess();
            const result1 = obj._handleSecureFramesRosterChange(arg2, tmp12);
            const result2 = obj._maybeSendSecureFramesTransitionReady(tmp12);
            const _daveJoinTimer = obj._daveJoinTimer;
            _daveJoinTimer.joinSucceeded(closure_1, 0 === closure_1);
            const result3 = obj._maybeTrackPreparedTransition(tmp12);
          } else {
            const logger = obj.logger;
            const _HermesInternal = HermesInternal;
            logger.warn("Failed to process MLS commit for transition ID " + closure_1);
            const tmp14Result = tmp14(5772);
            self._mlsSessionResetStartTime = tmp14Result.now();
            if (self._flagMLSInvalidCommitWelcome(closure_1)) {
              const result4 = obj._handleSecureFramesInit(protocolVersion);
            }
          }
        }
      });
    }
  }
  _handleMLSWelcome(arg0, arg1) {
    let _connection;
    let byteLength;
    const self = this;
    let closure_1 = arg0;
    dependencyMap = arg1;
    const logger = this.logger;
    logger.info("Received MLS welcome for transition ID " + arg0);
    obj = _connection(5772);
    const welcomeReceivedTime = obj.now();
    _connection = this._connection;
    if (_connection != null) {
      _connection.processMLSWelcome(arg0, arg1, (arg0, protocolVersion, arg2) => {
        let obj4;
        if (_connection === self._connection) {
          const _storeSecureFrameTransitionData = obj._storeSecureFrameTransitionData;
          const obj2 = { protocolVersion, welcomeReceivedTime, welcomeFinishedTime: obj4.now(), welcomeSize: byteLength.byteLength, welcomeError: !arg0 };
          obj4 = TimeUtils;
          const result = _storeSecureFrameTransitionData(closure_1, obj2);
          const tmp12 = require;
          if (arg0) {
            self._handleMLSSuccess();
            const result1 = obj._handleSecureFramesRosterChange(arg2, tmp10);
            const result2 = obj._maybeSendSecureFramesTransitionReady(tmp10);
            const _daveJoinTimer = obj._daveJoinTimer;
            _daveJoinTimer.joinSucceeded(closure_1, 0 === closure_1);
            const result3 = obj._maybeTrackPreparedTransition(tmp10);
          } else {
            const tmp12Result = tmp12(5772);
            self._mlsSessionResetStartTime = tmp12Result.now();
            if (self._flagMLSInvalidCommitWelcome(closure_1)) {
              self._sendMLSKeyPackage();
            }
          }
        }
      });
    }
  }
  getMLSPairwiseFingerprint(arg0, arg1, arg2) {
    const _connection = this._connection;
    if (_connection != null) {
      const mLSPairwiseFingerprint = _connection.getMLSPairwiseFingerprint(arg0, arg1, arg2);
    }
  }
  _handleMLSSuccess() {
    this._trackMLSFailures({ recovered: true, downgraded: false });
    this._mlsSessionResetStartTime = undefined;
    this._consecutiveMLSInvalidMessages = 0;
    const _mlsFailureReconnectBackoff = this._mlsFailureReconnectBackoff;
    _mlsFailureReconnectBackoff.succeed();
  }
  _flagMLSInvalidCommitWelcome(transition_id) {
    const self = this;
    this._consecutiveMLSInvalidMessages = this._consecutiveMLSInvalidMessages + 1;
    if (this._consecutiveMLSInvalidMessages >= 5) {
      const logger2 = self.logger;
      const _HermesInternal2 = HermesInternal;
      logger2.error("" + self._consecutiveMLSInvalidMessages + " consecutive invalid MLS commit/welcome messages, disconnecting.");
      self._consecutiveMLSInvalidMessages = 0;
      const _socket2 = self._socket;
      if (_socket2 != null) {
        const result = _socket2.disconnectForRepeatedMLSInvalidMessages(tmp8);
      }
      return false;
    } else {
      const logger = self.logger;
      const _HermesInternal = HermesInternal;
      logger.info("Flagging invalid MLS commit/welcome for transition ID " + transition_id);
      const _socket = self._socket;
      if (_socket != null) {
        const result1 = _socket.flagMLSInvalidCommitWelcome(transition_id);
      }
      return true;
    }
  }
  _handleMLSFailure(source, reason) {
    let diff;
    let intl;
    let intl2;
    let num;
    const self = this;
    obj = TimeUtils;
    const nowResult = obj.now();
    this._nextFailureId = +this._nextFailureId + 1;
    const obj2 = { c: constants11.MLS_FAILURE, i: +this._nextFailureId };
    this.recordEvent(obj2);
    const _mlsFailures = this._mlsFailures;
    const obj3 = { id: +this._nextFailureId, source, reason, count: 1, countDuringReset: num, firstOccurrence: nowResult, timeSinceInit: diff, eventLog: getEventHistoryString() };
    num = 0;
    const push = _mlsFailures.push;
    if (null != this._mlsSessionResetStartTime) {
      num = 1;
    }
    diff = undefined;
    if (null != self._mlsInitReceivedTime) {
      diff = nowResult - self._mlsInitReceivedTime;
    }
    push(obj3);
    if (source.includes("GetPersistedKeyPair")) {
      const obj4 = { title: intl.string(intl3.t.fJUioH), body: intl2.string(intl3.t.CQLWvo) };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl = tmp(1113).intl;
      intl2 = tmp(1113).intl;
      show(obj4);
    } else {
      const result = self._alertMLSFailureDebouced(source, reason);
    }
  }
  _trackMLSFailures(arg0) {
    let count;
    let countDuringReset;
    let diff;
    let downgraded;
    let eventLog;
    let id;
    let reason;
    let recovered;
    let source;
    let timeSinceInit;
    const self = this;
    ({ recovered, downgraded } = arg0);
    obj = TimeUtils;
    const nowResult = obj.now();
    const mediaSessionId = this.getMediaSessionId();
    if (null != this._mlsSessionResetStartTime) {
      diff = nowResult - self._mlsSessionResetStartTime;
    }
    const _mlsFailures = self._mlsFailures;
    for (const item10022 of _mlsFailures) {
      let firstOccurrence = item10022.firstOccurrence;
      ({ id, source, reason, count, countDuringReset, timeSinceInit, eventLog } = item10022);
      let tmp6 = AnalyticsUtilsDefault;
      let obj2 = { media_session_id: mediaSessionId, parent_media_session_id: self.parentMediaSessionId, failure_id: id, failure_time: firstOccurrence - self._createdTime, failure_source: source, failure_reason: reason, failure_count: count, failure_was_recovered: recovered, failure_cleared_by_downgrade: downgraded, time_since_first_occurrence: nowResult - firstOccurrence, time_since_last_reset: diff, failure_count_during_reset: countDuringReset, time_since_init: timeSinceInit, event_history: eventLog, connection_serial: self._connectionSerial };
      let track = tmp6.track;
      let MLS_FAILURES = constants.MLS_FAILURES;
      let merged = Object.assign(self._getAnalyticsProperties());
      let trackResult = track(MLS_FAILURES, obj2);
      continue;
    }
    self._mlsFailures = [];
  }
  _alertMLSFailure(arg0, arg1) {
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (!isStaffResult) {
      let isStaffPersonalResult;
      if (currentUser != null) {
        isStaffPersonalResult = currentUser.isStaffPersonal();
      }
      isStaffResult = isStaffPersonalResult;
    }
    if (isStaffResult) {
      const _HermesInternal = HermesInternal;
      obj = { title: "MLS Error in " + arg0, body: "Error: " + arg1 + "! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!" };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      const _HermesInternal2 = HermesInternal;
      show(obj);
    }
  }
  getExtraConnectionOptions() {
    return {};
  }
  getMediaStreamKey() {

  }
  isStreamSender() {
    return false;
  }
  shouldReport() {
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (!isStaffResult) {
      let isStaffPersonalResult;
      if (currentUser != null) {
        isStaffPersonalResult = currentUser.isStaffPersonal();
      }
      if (!isStaffPersonalResult) {
        const E2eLatencyMeasurementExperiment = E2eLatencyMeasurementExperiment2.E2eLatencyMeasurementExperiment;
        if (E2eLatencyMeasurementExperiment.getConfig({ location: "RTCConnection" }).enabled) {
          return true;
        } else {
          const self = this;
          if (this.context === constants6.STREAM) {
            let parentMediaSessionId;
            if (null != self.parentMediaSessionId) {
              parentMediaSessionId = self.parentMediaSessionId;
            }
            let tmp6 = null != parentMediaSessionId;
            if (tmp6) {
              const obj2 = _modDef1251;
              tmp6 = obj2.v3(parentMediaSessionId) % 100 < 5;
            }
            return tmp6;
          }
          parentMediaSessionId = self.getMediaSessionId();
        }
      }
    }
    return true;
  }
  shouldReportPeriodicStats(periodicStats) {
    let shouldReportResult = periodicStats.length <= 10;
    if (shouldReportResult) {
      const self = this;
      shouldReportResult = this.shouldReport();
    }
    return shouldReportResult;
  }
  getInputDeviceName() {
    const inputDeviceId = MediaEngineStore.getInputDeviceId();
    const tmp2 = MediaEngineStore.getInputDevices()[inputDeviceId];
    let name;
    if (tmp2 != null) {
      name = tmp2.name;
    }
    return name;
  }
  getOutputDeviceName() {
    const outputDeviceId = MediaEngineStore.getOutputDeviceId();
    const tmp2 = MediaEngineStore.getOutputDevices()[outputDeviceId];
    let name;
    if (tmp2 != null) {
      name = tmp2.name;
    }
    return name;
  }
  getVideoDeviceName() {
    const videoDeviceId = MediaEngineStore.getVideoDeviceId();
    const tmp2 = MediaEngineStore.getVideoDevices()[videoDeviceId];
    let name;
    if (tmp2 != null) {
      name = tmp2.name;
    }
    return name;
  }
  getInputDeviceSampleRate() {
    const _voiceQuality = this._voiceQuality;
    let prop;
    if (_voiceQuality != null) {
      prop = _voiceQuality.getAudioDeviceStats().input_device_session_sample_rate;
    }
    if (prop == null) {
      prop = null;
    }
    return prop;
  }
}
const prototype = RTCConnection.prototype;
Object.defineProperty(prototype, "quality", {
  get: function quality() {
    const self = this;
    const lastPing = this.getLastPing();
    if (this.state === constants3.RTC_CONNECTED) {
      let UNKNOWN;
      if (undefined !== lastPing) {
        if (lastPing <= 500) {
          if (lastPing > 250) {
            UNKNOWN = constants4.AVERAGE;
          } else {
            UNKNOWN = constants4.FINE;
          }
        }
        UNKNOWN = constants4.BAD;
      }
      return UNKNOWN;
    }
    UNKNOWN = constants4.UNKNOWN;
  },
  set: undefined
});
Object.defineProperty(prototype, "endpoint", {
  get: function endpoint() {
    return this._endpoint;
  },
  set: undefined
});
Object.defineProperty(prototype, "endpoint", {
  get: undefined,
  set: function endpoint(arg0) {
    let hostname;
    let port;
    const self = this;
    obj = { c: constants11.SET_ENDPOINT, e: null != arg0 };
    this.recordEvent(obj);
    if (null == arg0) {
      self._endpoint = null;
      self.hostname = null;
    } else {
      const _HermesInternal2 = HermesInternal;
      let combined = "" + str + "//" + arg0;
      const obj3 = URLUtilsDefault;
      let toURLSafeResult = obj3.toURLSafe(combined);
      const tmp5 = str;
      if (toURLSafeResult == null) {
        toURLSafeResult = {};
      }
      ({ hostname, port } = toURLSafeResult);
      let num = NaN;
      if (null != port) {
        const _parseInt = parseInt;
        num = parseInt(port);
      }
      let tmp2 = null == hostname;
      if (!tmp2) {
        tmp2 = 80 !== num && 443 !== num;
        const tmp3 = 80 !== num && 443 !== num;
      }
      if (!tmp2) {
        const _HermesInternal = HermesInternal;
        combined = "" + tmp5 + "//" + hostname;
      }
      self._endpoint = `${tmp4}/`;
      self.hostname = hostname;
    }
  }
});
Object.defineProperty(prototype, "channelId", {
  get: function channelId() {
    return this._channelId;
  },
  set: undefined
});
Object.defineProperty(prototype, "trueServerId", {
  get: function trueServerId() {
    const self = this;
    let channelId = this.streamServerId;
    if (channelId == null) {
      channelId = self.guildId;
    }
    if (channelId == null) {
      channelId = self.channelId;
    }
    return channelId;
  },
  set: undefined
});
Object.defineProperty(prototype, "trueChannelId", {
  get: function trueChannelId() {
    let streamChannelId;
    const self = this;
    if (null == this.streamServerId) {
      streamChannelId = self.channelId;
    } else if (null != self.streamChannelId) {
      streamChannelId = self.streamChannelId;
    } else {
      obj = require("module_14")(self.streamServerId);
      str = obj.prev();
      streamChannelId = str.toString();
    }
    return streamChannelId;
  },
  set: undefined
});
let size = size_mod;
let result = size.fileFinishedImporting("lib/RTCConnection.tsx");

export default RTCConnection;
